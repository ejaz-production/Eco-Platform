import multer from "multer";
import sharp from "sharp";
sharp.cache({files:0});
import { fileTypeFromFile } from "file-type";
import { mkdir, unlink, rename } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
export const mediaDirectory = fileURLToPath(
  new URL("../data/media/", import.meta.url),
);
const temp = fileURLToPath(new URL("../data/upload-tmp/", import.meta.url));
await mkdir(mediaDirectory, { recursive: true });
await mkdir(temp, { recursive: true });
export const upload = multer({
  dest: temp,
  limits: { fileSize: 50 * 1024 * 1024, files: 1, fields: 0 },
}).single("file");
export async function saveUpload(req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Choose an image or video." });
  try {
    const detected = await fileTypeFromFile(file.path);
    const id = randomUUID();
    let name, type;
    if (
      ["image/jpeg", "image/png", "image/webp", "image/avif"].includes(
        detected?.mime,
      )
    ) {
      if (file.size > 10 * 1024 * 1024)
        throw Error("Images must be under 10 MB.");
      name = id + ".webp";
      type = "image";
      await sharp(file.path, { limitInputPixels: 40000000 })
        .rotate()
        .resize({
          width: 1920,
          height: 1920,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 82 })
        .toFile(mediaDirectory + "/" + name);
    } else if (["video/mp4", "video/webm"].includes(detected?.mime)) {
      name = id + "." + detected.ext;
      type = "video";
      await rename(file.path, mediaDirectory + "/" + name);
    } else throw Error("Use JPG, PNG, WebP, AVIF, MP4 or WebM files.");
    res.status(201).json({ type, src: "/api/media/" + name, alt: "" });
  } finally {
    await unlink(file.path).catch(() => {});
  }
}
