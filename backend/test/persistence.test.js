import test from "node:test";
import assert from "node:assert/strict";

test("durable updates retry a conflicting stock revision without overwriting another order", async t => {
  process.env.STORAGE_DRIVER = "supabase";
  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SECRET_KEY = "test-service-key";
  let reads = 0, writes = 0;
  t.mock.method(globalThis, "fetch", async (url, options) => {
    if (options.method === "GET") {
      reads++;
      return Response.json({ data: { stock: reads === 1 ? 2 : 1 }, revision: reads - 1 });
    }
    writes++;
    const body = JSON.parse(options.body);
    if (writes === 1) return Response.json([]);
    assert.equal(body.data.stock, 0);
    assert.equal(body.revision, 2);
    assert.match(String(url), /revision=eq.1/);
    return Response.json([{ revision: 2 }]);
  });
  const { changeSnapshot } = await import("../src/persistence.js");
  const saved = await changeSnapshot("catalog", {}, draft => { draft.stock--; return draft.stock; });
  assert.equal(saved.result, 0);
  assert.equal(reads, 2);
  assert.equal(writes, 2);
});
