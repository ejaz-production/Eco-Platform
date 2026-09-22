import test from "node:test";
import assert from "node:assert/strict";
import { productSchema, bannersSchema } from "../src/content.js";
const image = "photo-1546435770-a3e426bf472b";
const product = {
  name: "Sample toy",
  category: "Toys",
  price: 2000,
  oldPrice: 0,
  stock: 5,
  image,
  media: [{ type: "image", src: image, alt: "Toy" }],
  description: "",
  color: "",
  badge: "",
};
test("product requires an image cover and bounded gallery", () => {
  assert.equal(productSchema.parse(product).category, "Toys");
  assert.equal(
    productSchema.safeParse({
      ...product,
      media: [{ type: "video", src: "/api/media/abc.mp4" }],
    }).success,
    false,
  );
  assert.equal(
    productSchema.safeParse({
      ...product,
      media: Array(13).fill(product.media[0]),
    }).success,
    false,
  );
  assert.equal(
    productSchema.safeParse({ ...product, image: "photo-other" }).success,
    false,
  );
});
test("media rejects external URLs, traversal and executable content", () => {
  for (const src of [
    "https://evil.test/a.mp4",
    "/api/media/../secret.mp4",
    "/api/media/abc.svg",
  ])
    assert.equal(
      productSchema.safeParse({
        ...product,
        media: [...product.media, { type: "video", src }],
      }).success,
      false,
    );
});
test("banners keep device targeting and refuse external destinations and duplicate ids", () => {
  const b = {
    id: "one",
    target: "mobile",
    eyebrow: "",
    title: "Hello",
    description: "",
    image,
    active: true,
    href: "/shop?category=Toys",
  };
  assert.equal(bannersSchema.parse([b])[0].target, "mobile");
  for (const href of ["//evil.test", "/\\evil.test", "javascript:alert(1)"])
    assert.equal(bannersSchema.safeParse([{ ...b, href }]).success, false);
  assert.equal(bannersSchema.safeParse([b, b]).success, false);
});
