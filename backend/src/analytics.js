import { z } from "zod";
import { mkdir, readFile, writeFile, rename } from "node:fs/promises";
import { durable, snapshot, changeSnapshot } from "./persistence.js";
const path = new URL("../data/events.json", import.meta.url);
const safePath = z.string().max(160).regex(/^\/(?:[a-zA-Z0-9_-]+\/?)*$/).refine(p => !/^\/(admin|auth|login|account|checkout|orders)(\/|$)/.test(p));
export const eventSchema = z.object({
  session: z.string().uuid(),
  type: z.enum(["page_view", "click", "page_time"]),
  path: safePath,
  target: z.string().max(180).regex(/^[a-zA-Z0-9 /:._-]*$/).default(""),
  device: z.enum(["mobile", "desktop"]),
  timezone: z.string().max(80).regex(/^[a-zA-Z0-9_+\-/]+$/),
  duration: z.number().int().min(0).max(1800).default(0),
}).strict();
let events = [];
try { events = JSON.parse(await readFile(path, "utf8")); } catch(e) { if(e.code !== "ENOENT") throw e; }
let queue = Promise.resolve();
export function recordEvent(data) {
  const job = queue.then(async () => {
    const cutoff = Date.now() - 30 * 86400000;
    if (durable) {
      await changeSnapshot("events", { events: [] }, draft => {
        draft.events = [...draft.events.filter(e => Date.parse(e.at) >= cutoff), { ...data, at: new Date().toISOString() }].slice(-20000);
      });
      return;
    }
    const next = [...events.filter(e => Date.parse(e.at) >= cutoff), { ...data, at: new Date().toISOString() }].slice(-20000);
    await mkdir(new URL("../data/", import.meta.url), { recursive: true });
    const temp = new URL("../data/events.tmp", import.meta.url);
    await writeFile(temp, JSON.stringify(next));
    await rename(temp, path);
    events = next;
  });
  queue = job.catch(() => {});
  return job;
}
export async function getEvents(days = 7) {
  const rows = durable ? (await snapshot("events", { events: [] })).data.events : events;
  return rows.filter(e => Date.parse(e.at) >= Date.now() - days * 86400000);
}
