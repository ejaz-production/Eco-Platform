import { readFile, writeFile } from "node:fs/promises";
import { uploadToCloudinary } from "../src/cloudinary.js";

const sourceDir = "D:/Projects/Ecommerce/backend/data/media";
const targets = [
  new URL("../src/catalog.js", import.meta.url),
  new URL("../../frontend/src/lib/data.ts", import.meta.url),
];
const texts = await Promise.all(
  targets.map(async (path) => [path, await readFile(path, "utf8")]),
);
const ids = new Set();
for (const [, text] of texts) {
  for (const match of text.matchAll(/\/api\/media\/([0-9a-f-]+\.webp)/g))
    ids.add(match[1]);
}
console.log(`referenced images: ${ids.size}`);

const replacements = new Map();
const queue = [...ids];
let done = 0;
let failed = 0;

async function worker() {
  while (queue.length) {
    const file = queue.pop();
    const id = file.replace(/\.webp$/, "");
    try {
      const bytes = await readFile(`${sourceDir}/${file}`);
      const result = await uploadToCloudinary(bytes, {
        publicId: `nayvilo/media/${id}`,
        filename: file,
        mime: "image/webp",
        overwrite: "true",
      });
      const check = await fetch(result.secure_url, {
        method: "HEAD",
        signal: AbortSignal.timeout(30000),
      });
      if (!check.ok || !check.headers.get("content-type")?.startsWith("image/"))
        throw Error(`CDN check failed (${check.status})`);
      replacements.set(`/api/media/${file}`, result.secure_url);
      done++;
      if (done % 20 === 0) console.log(`uploaded ${done}/${ids.size}`);
    } catch (error) {
      failed++;
      console.error(`failed ${file}: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 4 }, worker));
console.log(`uploaded ${done}, failed ${failed}`);
if (!replacements.size) throw Error("No images were uploaded.");

for (const [path, text] of texts) {
  let next = text;
  for (const [from, to] of replacements) next = next.split(from).join(to);
  const left = next.match(/\/api\/media\//g)?.length || 0;
  await writeFile(path, next);
  console.log(`${path.pathname.split("/").pop()}: ${left} local media paths left`);
}
