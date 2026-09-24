"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { Dropdown } from "./dropdown";
import {
  PRICE_MAX,
  activeFilterCount,
  readFilters,
  sortOptions,
  writeFilters,
  type ShopFilterState,
} from "@/lib/shop-filters";

export function FilterButton() {
  const path = usePathname();
  const params = useSearchParams();
  const shopping = path === "/shop" || path === "/wishlist";
  const [open, setOpen] = useState(false);
  if (!shopping) return null;
  const count = activeFilterCount(readFilters(params));
  return (
    <>
      <button
        type="button"
        className="filter-launch"
        aria-label={count ? `Filters, ${count} active` : "Open filters"}
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <SlidersHorizontal size={18} />
        {count > 0 && <i>{count}</i>}
      </button>
      {open && <FilterPanel onClose={() => setOpen(false)} />}
    </>
  );
}

function FilterPanel({ onClose }: { onClose: () => void }) {
  const path = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const [draft, setDraft] = useState<ShopFilterState>(() => readFilters(params));

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function apply() {
    const query = writeFilters(params, draft);
    const search = query.toString();
    router.push(path + (search ? "?" + search : ""), { scroll: false });
    onClose();
  }

  function reset() {
    setDraft({
      sort: "featured",
      min: 0,
      max: PRICE_MAX,
      inStock: false,
      onSale: false,
      rating: 0,
    });
  }

  return (
    <div className="filter-panel-root">
      <button
        type="button"
        className="filter-panel-backdrop"
        aria-label="Close filters"
        onClick={onClose}
      />
      <section
        className="filter-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-panel-title"
      >
        <header>
          <h2 id="filter-panel-title">Filters</h2>
          <button type="button" aria-label="Close filters" onClick={onClose}>
            <X size={18} />
          </button>
        </header>
        <div className="filter-panel-body">
          <div>
            <h3>Sort</h3>
            <Dropdown
              ariaLabel="Sort products"
              value={draft.sort}
              onChange={(sort) => setDraft((current) => ({ ...current, sort }))}
              options={sortOptions}
            />
          </div>
          <div>
            <h3>Price</h3>
            <label className="filter-range">
              Minimum · Rs. {draft.min.toLocaleString()}
              <input
                aria-label="Minimum price"
                type="range"
                min={0}
                max={PRICE_MAX}
                step={5000}
                value={Math.min(draft.min, draft.max)}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    min: Math.min(Number(event.target.value), current.max),
                  }))
                }
              />
            </label>
            <label className="filter-range">
              Maximum · Rs. {draft.max.toLocaleString()}
              <input
                aria-label="Maximum price"
                type="range"
                min={0}
                max={PRICE_MAX}
                step={5000}
                value={Math.max(draft.max, draft.min)}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    max: Math.max(Number(event.target.value), current.min),
                  }))
                }
              />
            </label>
          </div>
          <div>
            <h3>Availability</h3>
            <div className="filter-choice-row">
              <button
                type="button"
                className={draft.inStock ? "filter-choice on" : "filter-choice"}
                aria-pressed={draft.inStock}
                onClick={() =>
                  setDraft((current) => ({ ...current, inStock: !current.inStock }))
                }
              >
                In stock
              </button>
            </div>
          </div>
          <div>
            <h3>Offers</h3>
            <div className="filter-choice-row">
              <button
                type="button"
                className={draft.onSale ? "filter-choice on" : "filter-choice"}
                aria-pressed={draft.onSale}
                onClick={() =>
                  setDraft((current) => ({ ...current, onSale: !current.onSale }))
                }
              >
                On sale
              </button>
            </div>
          </div>
          <div>
            <h3>Rating</h3>
            <div className="filter-choice-row">
              {[
                { value: 0, label: "Any" },
                { value: 3, label: "3 stars & up" },
                { value: 4, label: "4 stars & up" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={
                    draft.rating === option.value
                      ? "filter-choice on"
                      : "filter-choice"
                  }
                  aria-pressed={draft.rating === option.value}
                  onClick={() =>
                    setDraft((current) => ({ ...current, rating: option.value }))
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <footer className="filter-panel-footer">
          <button type="button" className="text-link" onClick={reset}>
            Reset
          </button>
          <button type="button" className="button" onClick={apply}>
            Show results
          </button>
        </footer>
      </section>
    </div>
  );
}
