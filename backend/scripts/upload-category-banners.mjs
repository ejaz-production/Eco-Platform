import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";
import { uploadToCloudinary } from "../src/cloudinary.js";

const manifestPath = new URL(
  "../../shared/category-banners.json",
  import.meta.url,
);
const collections = JSON.parse(await readFile(manifestPath, "utf8"));
const sources = JSON.parse(
  await readFile(
    new URL("../data/banner-sources.json", import.meta.url),
    "utf8",
  ),
);
for (const collection of collections) {
  if (collection.image?.startsWith("https://res.cloudinary.com/")) {
    console.log(`${collection.category}: already uploaded`);
    continue;
  }
  const bytes = await readFile(sources[collection.slug]);
  const stats = await sharp(bytes).stats();
  const metadata = await sharp(bytes).metadata();
  if (!metadata.hasAlpha || stats.channels[3].min !== 0)
    throw Error(`${collection.category}: source must have transparent pixels`);
  const result = await uploadToCloudinary(bytes, {
    publicId: `nayvilo/category-banners/2026-09-22/${collection.slug}`,
    filename: `${collection.slug}.png`,
  });
  const check = await fetch(result.secure_url, {
    method: "HEAD",
    signal: AbortSignal.timeout(30000),
  });
  if (!check.ok || !check.headers.get("content-type")?.includes("image/png"))
    throw Error(`${collection.category}: CDN verification failed`);
  collection.image = result.secure_url;
  await writeFile(manifestPath, JSON.stringify(collections, null, 2) + "\n");
  console.log(
    `${collection.category}: uploaded and CDN verified (${result.width}x${result.height} PNG)`,
  );
}
