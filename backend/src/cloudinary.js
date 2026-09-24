import { createHash } from "node:crypto";

export async function uploadToCloudinary(
  bytes,
  {
    publicId,
    type = "image",
    filename = "image.png",
    mime = "image/png",
    overwrite = "false",
  },
) {
  if (!process.env.CLOUDINARY_URL)
    throw Error("Cloudinary upload configuration is missing.");
  const config = new URL(process.env.CLOUDINARY_URL);
  if (config.protocol !== "cloudinary:" || config.hostname !== "p76rvfxz")
    throw Error("Invalid Cloudinary environment configuration.");
  const params = {
    overwrite,
    public_id: publicId,
    timestamp: String(Math.floor(Date.now() / 1000)),
  };
  const signature = createHash("sha1")
    .update(
      Object.entries(params)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => `${key}=${value}`)
        .join("&") + decodeURIComponent(config.password),
    )
    .digest("hex");
  const body = new FormData();
  for (const [key, value] of Object.entries(params)) body.append(key, value);
  body.append("api_key", decodeURIComponent(config.username));
  body.append("signature", signature);
  body.append("file", new Blob([bytes], { type: mime }), filename);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${config.hostname}/${type}/upload`,
    {
      method: "POST",
      body,
      signal: AbortSignal.timeout(120000),
    },
  );
  if (!response.ok)
    throw Error(
      `Cloudinary upload failed (${response.status}). Check server configuration.`,
    );
  const result = await response.json();
  if (
    !result.secure_url?.startsWith(
      `https://res.cloudinary.com/${config.hostname}/${type}/upload/`,
    )
  )
    throw Error("Cloudinary did not return a valid media URL.");
  return result;
}
