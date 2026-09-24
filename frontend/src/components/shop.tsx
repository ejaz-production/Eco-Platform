"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { collectionFor } from "@/lib/collections";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "./product-card";
import { categories, categoryLabel, type Product } from "@/lib/data";
import { useStore } from "./provider";
import {
  PRICE_MAX,
  readFilters,
  writeFilters,
} from "@/lib/shop-filters";
export function Shop({
  products,
  initialCategory = "All",
  initialQuery = "",
  initialSort = "featured",
  initialMin = 0,
  initialMax = PRICE_MAX,
  initialInStock = false,
  initialOnSale = false,
  initialRating = 0,
  saved = false,
}: {
  products: Product[];
  initialCategory?: string;
  initialQuery?: string;
  initialSort?: string;
  initialMin?: number;
  initialMax?: number;
  initialInStock?: boolean;
  initialOnSale?: boolean;
  initialRating?: number;
  saved?: boolean;
}) {
  const [category, setCategory] = useState(initialCategory),
    [query, setQuery] = useState(initialQuery),
    [sort, setSort] = useState(initialSort),
    [min, setMin] = useState(initialMin),
    [max, setMax] = useState(initialMax),
    [inStock, setInStock] = useState(initialInStock),
    [onSale, setOnSale] = useState(initialOnSale),
    [rating, setRating] = useState(initialRating);
  const { wishlist } = useStore();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  useEffect(() => {
    const filters = readFilters(params);
    setCategory(params.get("category") || "All");
    setQuery(params.get("q") || "");
    setSort(filters.sort);
    setMin(filters.min);
    setMax(filters.max);
    setInStock(filters.inStock);
    setOnSale(filters.onSale);
    setRating(filters.rating);
  }, [params]);
  const collection = !saved ? collectionFor(category) : undefined;
  const filtered = products
    .filter(
      (p) =>
        (!saved || wishlist.includes(p.id)) &&
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(query.toLowerCase()) &&
        p.price >= min &&
        p.price <= max &&
        (!inStock || p.stock > 0) &&
        (!onSale || p.oldPrice > p.price) &&
        (rating <= 0 || p.rating >= rating),
    )
    .sort((a, b) =>
      sort === "low"
        ? a.price - b.price
        : sort === "high"
          ? b.price - a.price
          : sort === "new"
            ? Number(b.badge === "NEW") - Number(a.badge === "NEW")
            : sort === "sale"
              ? (b.oldPrice - b.price) / b.oldPrice -
                (a.oldPrice - a.price) / a.oldPrice
              : 0,
    );
  return (
    <div className="wrap shop-page">
      {collection ? (
        <section
          className="category-banner"
          style={{ backgroundColor: collection.color }}
          aria-label={`${collection.category} collection`}
        >
          <div className="category-banner-copy">
            <span className="eyebrow">{collection.eyebrow}</span>
            <h1>{collection.title}</h1>
            <p>{collection.description}</p>
            <span className="category-banner-count">
              {products.filter((p) => p.category === category).length} products
              · {collection.category}
            </span>
          </div>
          <div className="category-banner-art">
            <Image
              src={collection.image}
              alt={collection.alt}
              fill
              sizes="(max-width:760px) 90vw, 45vw"
              loading="eager"
            />
          </div>
        </section>
      ) : (
        <div className="page-intro">
          <span className="eyebrow">
            {saved
              ? "KEEP THE GOOD ONES CLOSE"
              : "THOUGHTFULLY PICKED. JUST FOR YOU."}
          </span>
          <h1>{saved ? "Your saved finds." : "Find your upgrade."}</h1>
          <p>
            {saved
              ? "A little collection of things you love."
              : "Smartwatches, toys, audio, power banks and the accessories that bring it all together."}
          </p>
        </div>
      )}
      <div className="shop-layout">
        <aside className="filters">
          <h3>
            <SlidersHorizontal size={17} /> Refine your search
          </h3>
          <h4>Categories</h4>
          {categories.map((c) => (
            <button
              key={c}
              className={category === c ? "filter-active" : ""}
              onClick={() => {
                setCategory(c);
                const query = new URLSearchParams(params.toString());
                if (c === "All") query.delete("category");
                else query.set("category", c);
                const search = query.toString();
                router.replace(pathname + (search ? "?" + search : ""), {
                  scroll: false,
                });
              }}
            >
              {categoryLabel(c)}
              <span>
                {products.filter((p) => c === "All" || p.category === c).length}
              </span>
            </button>
          ))}
          <h4>Your budget</h4>
          <input
            aria-label="Maximum price"
            type="range"
            min="5000"
            max="300000"
            step="5000"
            value={max}
            onChange={(e) => setMax(+e.target.value)}
            onPointerUp={(e) => {
              const next = +e.currentTarget.value;
              const query = writeFilters(params, {
                sort,
                min,
                max: next,
                inStock,
                onSale,
                rating,
              });
              const search = query.toString();
              router.replace(pathname + (search ? "?" + search : ""), {
                scroll: false,
              });
            }}
          />
          <p>Up to Rs. {max.toLocaleString()}</p>
          <button
            className="text-link"
            onClick={() => {
              router.replace(pathname, { scroll: false });
            }}
          >
            Reset filters <X size={14} />
          </button>
          <div className="filter-note">
            Nationwide delivery.
            <span>
              Delivered anywhere
              <br />
              in Pakistan. ♡
            </span>
          </div>
        </aside>
        <div className="shop-results">
          <div className="results-count">
            {filtered.length} good {filtered.length === 1 ? "find" : "finds"}{" "}
            <span>Prices in PKR</span>
          </div>
          {filtered.length ? (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>
                {saved ? "Save a little inspiration." : "No finds this time."}
              </h2>
              <p>
                {saved
                  ? "Tap the heart on any product to keep it here."
                  : "Try a different search or reset your filters."}
              </p>
              <a className="button" href="/shop">
                Explore the collection
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
