"use client";
import { ProductGallery } from "./product-gallery";
import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ArrowUpRight,
  Truck,
  RefreshCcw,
  Star,
  ShieldCheck,
} from "lucide-react";
import { type Product, money, photo } from "@/lib/data";
import { useStore } from "./provider";
import { ProductCard } from "./product-card";
export function ProductDetail({
  product: p,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { add, wish, wishlist } = useStore(),
    [qty, setQty] = useState(1);
  return (
    <div className="wrap product-detail-page">
      <nav className="breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/shop">The collection</Link>
        <span>/</span>
        {p.name}
      </nav>
      <div className="detail-grid">
        <ProductGallery product={p} />
        <div className="detail-copy">
          <span className="eyebrow">
            {p.category} · THE EVERYDAY COLLECTION
          </span>
          <h1>{p.name}</h1>
          <span className="rating">
            <Star size={15} fill="currentColor" />
            {p.rating} <span className="muted"> · Sample product rating</span>
          </span>
          <div className="detail-price">
            <strong>{money(p.price)}</strong>
            {p.oldPrice > p.price && <del>{money(p.oldPrice)}</del>}
            {p.oldPrice > p.price && (
              <span>Save {Math.round((1 - p.price / p.oldPrice) * 100)}%</span>
            )}
          </div>
          <p>
            {p.description ||
              "An everyday tech essential, selected for your next upgrade."}
          </p>
          <label className="detail-label">
            Colour <strong>{p.color}</strong>
          </label>
          <div className="swatch" title={p.color} />
          <p className="stock">
            ●{" "}
            {p.stock > 0
              ? `${p.stock} available · Ready for your everyday`
              : "Currently sold out"}
          </p>
          <div className="buy-row">
            <div className="quantity">
              <button
                aria-label="Decrease quantity"
                disabled={qty <= 1}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus size={14} />
              </button>
              <span>{qty}</span>
              <button
                aria-label="Increase quantity"
                disabled={qty >= Math.min(10, p.stock)}
                onClick={() => setQty((q) => Math.min(10, p.stock, q + 1))}
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              className="outline-icon"
              aria-label="Save product"
              onClick={() => wish(p.id)}
            >
              <Heart
                fill={wishlist.includes(p.id) ? "currentColor" : "none"}
                size={20}
              />
            </button>
          </div>
          <div className="product-purchase-bar">
            <button className="button purchase-cart" disabled={p.stock < 1} onClick={() => add(p, qty)}>Add to cart</button>
            {p.stock > 0 ? <Link className="button purchase-now" href={"/checkout?buy=" + encodeURIComponent(p.id) + "&qty=" + qty}>Buy now <ArrowUpRight size={17}/></Link> : <button className="button purchase-now" disabled>Sold out</button>}
          </div>
          <div className="detail-perks">
            <span>
              <Truck size={18} />
              Delivery across Pakistan in 3–5 working days
            </span>
            <span>
              <ShieldCheck size={18} />
              Cash on delivery. Simple and secure.
            </span>
            <span>
              <RefreshCcw size={18} />
              Changed your mind? 7-day returns.
            </span>
          </div>
          <details open>
            <summary>Technical specifications</summary>
            {p.specs && (
              <dl className="spec-grid">
                {Object.entries(p.specs).map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p>
              Demo model and illustrative specifications. Actual brand,
              specifications, warranty and PTA status (where applicable) will be
              confirmed with live inventory.
            </p>
          </details>
          <details>
            <summary>Delivery & returns</summary>
            <p>
              Delivery is Rs. 250, or free for orders of Rs. 5,000 and above.
              Unused items in original packaging can be returned within 7 days.
              See our help page for details.
            </p>
          </details>
        </div>
      </div>
      <section className="section">
        <div className="section-heading">
          <h2>Good company for your find.</h2>
          <Link href="/shop" className="text-link">
            Keep exploring <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="product-grid">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
