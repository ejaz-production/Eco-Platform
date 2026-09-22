import test from "node:test";
import assert from "node:assert/strict";
import express from "express";
import sharp from "sharp";
import { unlink, readFile } from "node:fs/promises";
import { upload, saveUpload, mediaDirectory } from "../src/uploads.js";
test("uploads verify content, optimize images and serve byte ranges", async () => {
  const app = express();
  app.post("/upload", upload, saveUpload);
  app.use("/api/media", express.static(mediaDirectory));
  app.use((err, req, res, next) =>
    res.status(400).json({ error: err.message }),
  );
  const server = app.listen(0);
  await new Promise((r) => server.once("listening", r));
  const origin = "http://127.0.0.1:" + server.address().port;
  let path;
  try {
    const bytes = await sharp({
      create: { width: 2400, height: 1200, channels: 3, background: "#284b63" },
    })
      .png()
      .toBuffer();
    const body = new FormData();
    body.append("file", new Blob([bytes], { type: "image/png" }), "sample.png");
    const response = await fetch(origin + "/upload", { method: "POST", body });
    assert.equal(response.status, 201);
    const media = await response.json();
    assert.equal(media.type, "image");
    path = mediaDirectory + "/" + media.src.split("/").pop();
    const metadata = await sharp(await readFile(path)).metadata();
    assert.equal(metadata.format, "webp");
    assert.equal(metadata.width, 1920);
    const range = await fetch(origin + media.src, {
      headers: { Range: "bytes=0-9" },
    });
    assert.equal(range.status, 206);
    assert.equal((await range.arrayBuffer()).byteLength, 10);
    const invalid = new FormData();
    invalid.append(
      "file",
      new Blob(["<script>bad</script>"], { type: "image/png" }),
      "fake.png",
    );
    assert.equal(
      (await fetch(origin + "/upload", { method: "POST", body: invalid }))
        .status,
      400,
    );
  } finally {
    await new Promise((r) => server.close(r));
    if (path) await unlink(path);
  }
});
