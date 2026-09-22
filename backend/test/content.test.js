import test from "node:test";
import assert from "node:assert/strict";
import { productSchema, bannersSchema } from "../src/content.js";
import { initialBanners, products } from "../src/catalog.js";
import collections from "../../shared/category-banners.json" with { type: "json" };
const image = "photo-1546435770-a3e426bf472b";
test("every catalog category has desktop and mobile banners that admins can save", () => {
  assert.equal(bannersSchema.safeParse(initialBanners).success, true);
  for (const category of new Set(products.map((p) => p.category))) {
    const collection = collections.find((c) => c.category === category);
    assert.ok(collection, category);
    for (const target of ["desktop", "mobile"])
      assert.ok(
        initialBanners.some(
          (b) =>
            b.target === target &&
            b.image === collection.image &&
            b.placement === "main",
        ),
        `${category} ${target}`,
      );
  }
});
test("Cloudinary images are restricted to this store's account and media paths", () => {
  const valid = collections[0].image;
  assert.equal(
    productSchema.safeParse({
      ...product,
      image: valid,
      media: [{ type: "image", src: valid }],
    }).success,
    true,
  );
  for (const src of [
    valid.replace("p76rvfxz", "another-cloud"),
    valid.replace("res.cloudinary.com", "res.cloudinary.com.evil.test"),
    "https://res.cloudinary.com/p76rvfxz/image/upload/../private.png",
  ])
    assert.equal(
      productSchema.safeParse({
        ...product,
        image: src,
        media: [{ type: "image", src }],
      }).success,
      false,
    );
});
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
