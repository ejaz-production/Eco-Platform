import { z } from "zod";
export const imageSource = z
  .string()
  .max(300)
  .regex(
    /^(photo-[a-zA-Z0-9-]+|\/images\/(hero|product)-[a-z0-9-]+\.png|\/images\/toys\.png|\/api\/media\/[a-f0-9-]+\.webp|https:\/\/res\.cloudinary\.com\/p76rvfxz\/image\/upload\/v[0-9]+\/nayvilo\/[a-zA-Z0-9/_-]+\.(png|webp|jpg|avif))$/,
    "Upload an image or use an Unsplash photo ID",
  );
export const mediaSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("image"),
    src: imageSource,
    alt: z.string().max(150).default(""),
  }),
  z.object({
    type: z.literal("video"),
    src: z
      .string()
      .regex(
        /^(\/api\/media\/[a-f0-9-]+\.(mp4|webm)|https:\/\/res\.cloudinary\.com\/p76rvfxz\/video\/upload\/v[0-9]+\/nayvilo\/[a-zA-Z0-9/_-]+\.(mp4|webm))$/,
      ),
    alt: z.string().max(150).default(""),
  }),
]);
export const productSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    category: z.enum([
      "Smartwatches",
      "Audio",
      "Mobile Accessories",
      "Car Accessories",
      "Power Solutions",
      "Home Decor",
      "Toys",
      "Vlogging Setup",
      "Mounts & Stands",
      "PC & Laptop",
      "POS Package",
      "Gadgets",
    ]),
    price: z.number().int().positive().max(10000000),
    oldPrice: z.number().int().min(0).max(10000000),
    stock: z.number().int().min(0).max(100000),
    image: imageSource,
    media: z.array(mediaSchema).min(1).max(12),
    description: z.string().max(3000),
    color: z.string().max(60),
    badge: z.string().max(40),
  })
  .refine(
    (p) => p.media.some((m) => m.type === "image"),
    "Add at least one image",
  )
  .refine(
    (p) => p.media.find((m) => m.type === "image")?.src === p.image,
    "Cover must be the first image",
  );
export const bannersSchema = z
  .array(
    z.object({
      id: z.string().min(1).max(80),
      placement: z.enum(["main", "side-top", "side-bottom"]).default("main"),
      target: z.enum(["mobile", "desktop", "both"]).default("both"),
      eyebrow: z.string().max(80),
      title: z.string().min(1).max(100),
      description: z.string().max(250),
      image: imageSource,
      price: z.number().int().positive().max(10000000).optional(),
      cta: z.string().min(1).max(40).default("Shop now"),
      href: z
        .string()
        .max(250)
        .regex(/^\/(?!\/)[^\\\s]*$/)
        .default("/shop"),
      active: z.boolean(),
    }),
  )
  .max(30)
  .refine(
    (bs) => new Set(bs.map((b) => b.id)).size === bs.length,
    "Duplicate banner IDs",
  )
  .refine(
    (bs) => bs.every((b) => b.placement === "main" || b.target === "desktop"),
    "Side posters must target desktop",
  )
  .refine(
    (bs) =>
      ["side-top", "side-bottom"].every(
        (slot) =>
          bs.filter((b) => b.active && b.placement === slot).length <= 1,
      ),
    "Use only one active poster in each desktop side position",
  );
