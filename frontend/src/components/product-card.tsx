"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import { type Product, money, photo } from "@/lib/data";
import { useStore } from "./provider";
export function ProductCard({ product: p }: { product: Product }) {
  const { wish, wishlist, add } = useStore();
  const saved = wishlist.includes(p.id);
  return (
    <article className="product-card">
      <div className="product-image">
        <Link href={"/product/" + p.id}>
          <Image
            src={photo(p.image, 700)}
            alt={p.name}
            fill
            sizes="(max-width:600px) 48vw,(max-width:1000px) 32vw,25vw"
          />
        </Link>
        <span className={"product-badge " + (p.badge === "NEW" ? "green" : "")}>
          {p.badge}
        </span>
        <button
          className={"wish-button " + (saved ? "saved" : "")}
          aria-label={`${saved ? "Remove" : "Save"} ${p.name}`}
          onClick={() => wish(p.id)}
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
        </button>
        <button
          className="quick-add"
          disabled={!p.stock}
          onClick={() => add(p)}
          aria-label={"Add " + p.name + " to bag"}
        >
          <Plus size={17} />
          <span>{p.stock ? "Add to bag" : "Sold out"}</span>
        </button>
      </div>
      <div className="product-meta">
        <span>{p.category}</span>
        <span className="rating">
          <Star size={11} fill="currentColor" />
          {p.rating}
        </span>
      </div>
      <Link href={"/product/" + p.id} className="product-name">
        {p.name}
      </Link>
      <div className="product-price">
        <strong>{money(p.price)}</strong>
        {p.oldPrice>p.price&&<del>{money(p.oldPrice)}</del>}
        <span className="color-dots">
          <i />
          <i />
        </span>
      </div>
    </article>
  );
}
