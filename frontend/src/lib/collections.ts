import definitions from "../../../shared/category-banners.json";

export const collections = definitions.map((collection) => ({
  ...collection,
  image: collection.image,
  href: `/shop?category=${encodeURIComponent(collection.category)}`,
}));

export const collectionFor = (category: string) =>
  collections.find((collection) => collection.category === category);
