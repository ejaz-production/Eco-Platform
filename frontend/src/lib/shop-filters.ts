export const PRICE_MAX = 300000;

export type ShopFilterState = {
  sort: string;
  min: number;
  max: number;
  inStock: boolean;
  onSale: boolean;
  rating: number;
};

export const sortOptions = [
  { value: "featured", label: "Our favourites" },
  { value: "new", label: "New arrivals" },
  { value: "low", label: "Price: low to high" },
  { value: "high", label: "Price: high to low" },
  { value: "sale", label: "Biggest savings" },
];

export function readFilters(params: URLSearchParams): ShopFilterState {
  const min = Number(params.get("min") || 0);
  const max = Number(params.get("max") || PRICE_MAX);
  const rating = Number(params.get("rating") || 0);
  return {
    sort: params.get("sort") || "featured",
    min: Number.isFinite(min) ? Math.max(0, min) : 0,
    max: Number.isFinite(max) ? Math.min(PRICE_MAX, max) : PRICE_MAX,
    inStock: params.get("stock") === "1",
    onSale: params.get("deal") === "sale",
    rating: Number.isFinite(rating) ? rating : 0,
  };
}

export function writeFilters(current: URLSearchParams, next: ShopFilterState) {
  const query = new URLSearchParams(current.toString());
  const set = (key: string, value: string, skip: boolean) => {
    if (skip) query.delete(key);
    else query.set(key, value);
  };
  set("sort", next.sort, next.sort === "featured");
  set("min", String(next.min), next.min <= 0);
  set("max", String(next.max), next.max >= PRICE_MAX);
  set("stock", "1", !next.inStock);
  set("deal", "sale", !next.onSale);
  set("rating", String(next.rating), next.rating <= 0);
  return query;
}

export function activeFilterCount(filters: ShopFilterState) {
  return (
    Number(filters.sort !== "featured") +
    Number(filters.min > 0) +
    Number(filters.max < PRICE_MAX) +
    Number(filters.inStock) +
    Number(filters.onSale) +
    Number(filters.rating > 0)
  );
}
