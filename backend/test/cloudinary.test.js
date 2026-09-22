import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { uploadToCloudinary } from "../src/cloudinary.js";

test("Cloudinary uploads sign parameters, preserve PNG bytes and return a trusted CDN URL", async (t) => {
  const previous = process.env.CLOUDINARY_URL;
  process.env.CLOUDINARY_URL = "cloudinary://test-key:test-secret@p76rvfxz";
  t.after(() => {
    if (previous === undefined) delete process.env.CLOUDINARY_URL;
    else process.env.CLOUDINARY_URL = previous;
  });
  const bytes = Buffer.from([137, 80, 78, 71]);
  const secure_url =
    "https://res.cloudinary.com/p76rvfxz/image/upload/v1/nayvilo/test.png";
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://api.cloudinary.com/v1_1/p76rvfxz/image/upload");
    const body = options.body;
    assert.equal(body.get("api_key"), "test-key");
    assert.equal(body.has("api_secret"), false);
    assert.equal(body.get("overwrite"), "false");
    const expected = createHash("sha1")
      .update(
        `overwrite=false&public_id=nayvilo/test&timestamp=${body.get("timestamp")}test-secret`,
      )
      .digest("hex");
    assert.equal(body.get("signature"), expected);
    assert.deepEqual(Buffer.from(await body.get("file").arrayBuffer()), bytes);
    return Response.json({ secure_url });
  });
  assert.equal(
    (await uploadToCloudinary(bytes, { publicId: "nayvilo/test" })).secure_url,
    secure_url,
  );
  globalThis.fetch.mock.mockImplementation(async () =>
    Response.json({ error: "secret upstream message" }, { status: 401 }),
  );
  await assert.rejects(
    uploadToCloudinary(bytes, { publicId: "nayvilo/test" }),
    /Cloudinary upload failed \(401\)/,
  );
  globalThis.fetch.mock.mockImplementation(async () =>
    Response.json({ secure_url: "https://evil.test/image.png" }),
  );
  await assert.rejects(
    uploadToCloudinary(bytes, { publicId: "nayvilo/test" }),
    /valid media URL/,
  );
});
