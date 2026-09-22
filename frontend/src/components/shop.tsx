"use client";
import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "./product-card";
import { categories, type Product } from "@/lib/data";
import { useStore } from "./provider";
export function Shop({
  products,
  initialCategory = "All",
  initialQuery = "",
  initialSort = "featured",
  saved = false,
}: {
  products: Product[];
  initialCategory?: string;
  initialQuery?: string;
  initialSort?: string;
  saved?: boolean;
}) {
  const [category, setCategory] = useState(initialCategory),
    [query, setQuery] = useState(initialQuery),
    [sort, setSort] = useState(initialSort),
    [max, setMax] = useState(300000);
  const { wishlist } = useStore();
  const filtered = products
    .filter(
      (p) =>
        (!saved || wishlist.includes(p.id)) &&
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(query.toLowerCase()) &&
        p.price <= max,
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
      <div className="shop-toolbar">
        <div className="search shop-search">
          <Search size={18} />
          <input
            aria-label="Search collection"
            placeholder="Search your next upgrade…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery("")}>
              <X size={16} />
            </button>
          )}
        </div>
        <label className="sort-label">
          Sort by{" "}
          <select
            aria-label="Sort products"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Our favourites</option>
            <option value="new">New arrivals</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
            <option value="sale">Biggest savings</option>
          </select>
        </label>
      </div>
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
              onClick={() => setCategory(c)}
            >
              {c}
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
          />
          <p>Up to Rs. {max.toLocaleString()}</p>
          <button
            className="text-link"
            onClick={() => {
              setCategory("All");
              setMax(300000);
              setQuery("");
              setSort("featured");
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
