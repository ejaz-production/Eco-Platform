import { createClient } from "@supabase/supabase-js";

export const durable = process.env.STORAGE_DRIVER === "supabase";
if (process.env.NODE_ENV === "production" && !durable)
  throw Error("Production requires STORAGE_DRIVER=supabase; local files are not durable on free hosting.");
if (durable && !process.env.SUPABASE_SECRET_KEY)
  throw Error("SUPABASE_SECRET_KEY is required for durable storage.");
const db = durable ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
}) : null;

export async function snapshot(id, seed) {
  const { data, error } = await db.from("commerce_state").select("data,revision").eq("id", id).maybeSingle();
  if (error) throw Error("Persistent store unavailable. Check Supabase migration and server credentials.");
  if (data) return data;
  const { error: insertError } = await db.from("commerce_state").insert({ id, data: seed, revision: 0 });
  if (insertError && insertError.code !== "23505") throw Error("Unable to initialize persistent store.");
  const { data: initial, error: readError } = await db.from("commerce_state").select("data,revision").eq("id", id).single();
  if (readError) throw Error("Unable to read persistent store.");
  return initial;
}

// Compare-and-swap prevents stock loss and overwritten edits across API processes.
export async function changeSnapshot(id, seed, fn) {
  for (let attempt = 0; attempt < 8; attempt++) {
    const current = await snapshot(id, seed);
    const draft = structuredClone(current.data);
    const result = fn(draft);
    const { data, error } = await db.from("commerce_state")
      .update({ data: draft, revision: current.revision + 1 })
      .eq("id", id).eq("revision", current.revision).select("revision").maybeSingle();
    if (error) throw Error("Unable to save persistent store.");
    if (data) return { data: draft, result };
  }
  throw Error("Store is busy. Please retry.");
}
