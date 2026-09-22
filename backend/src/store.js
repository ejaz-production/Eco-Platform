import { mkdir, readFile, writeFile, rename } from "node:fs/promises";
import { products, initialBanners } from "./catalog.js";
const dir = new URL("../data/", import.meta.url),
  path = new URL("store.json", dir);
let state;
try {
  state = JSON.parse(await readFile(path, "utf8"));
} catch (e) {
  if (e.code !== "ENOENT") throw e;
  state = {
    products: structuredClone(products),
    orders: [],
    banners: initialBanners,
  };
}
let queue = Promise.resolve();
export const store = state;
export function mutate(fn) {
  const job = queue.then(async () => {
    const draft = structuredClone(state);
    const result = fn(draft);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL("store.tmp", dir), JSON.stringify(draft, null, 2));
    await rename(new URL("store.tmp", dir), path);
    Object.assign(state, draft);
    return result;
  });
  queue = job.catch(() => {});
  return job;
}
