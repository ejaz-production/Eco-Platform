"use client";
import Image from "next/image";
import { HeroCarousel } from "./hero-carousel";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { useState } from "react";
import { ProductCard } from "./product-card";
import { type Product, type Banner } from "@/lib/data";
import { collections, collectionFor } from "@/lib/collections";
export function Home({
  products,
  banners,
}: {
  products: Product[];
  banners: Banner[];
}) {
  const [category, setCategory] = useState("Popular");
  const shown =
    category === "Popular"
      ? products.slice(0, 4)
      : category === "Under Rs. 10,000"
        ? products.filter((p) => p.price < 10000).slice(0, 4)
        : products.filter((p) => p.category === category).slice(0, 4);
  return (
    <div className="tech-home">
      <div className="wrap home-kicker">
        <span>
          Thoughtful picks. <strong>For everyday living.</strong>
        </span>
        <Link href="/shop?sort=new">
          Explore the latest <ChevronRight size={13} />
        </Link>
      </div>
      <HeroCarousel banners={banners} />
      <div className="wrap service-row">
        <span>
          <Truck size={17} />
          <strong>Nationwide delivery</strong>
          <small>At your doorstep</small>
        </span>
        <span>
          <ShieldCheck size={17} />
          <strong>Cash on delivery</strong>
          <small>Pay when it arrives</small>
        </span>
        <span>
          <Headphones size={17} />
          <strong>Shopping made simple</strong>
          <Link href="/help">
            We're here to help <ChevronRight size={12} />
          </Link>
        </span>
      </div>
      <section className="wrap tech-departments">
        <div className="compact-heading">
          <h2>What are you looking for?</h2>
          <Link href="/shop">
            Browse all <ChevronRight size={15} />
          </Link>
        </div>
        <div className="department-grid collection-grid">
          {collections.map((c) => (
            <Link
              href={c.href}
              key={c.category}
              style={{ backgroundColor: c.color }}
            >
              <span className="collection-thumbnail">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width:760px) 44vw, (max-width:1050px) 30vw, 22vw"
                />
              </span>
              <strong>
                {c.category} <ArrowRight size={14} />
              </strong>
              <small>
                {products.filter((p) => p.category === c.category).length}{" "}
                products to explore
              </small>
            </Link>
          ))}
        </div>
      </section>
      <section className="wrap tech-products">
        <div className="compact-heading">
          <div>
            <span className="section-overline">THE SHORTLIST</span>
            <h2>Worth the upgrade.</h2>
          </div>
          <Link href="/shop">
            View all products <ChevronRight size={15} />
          </Link>
        </div>
        <div className="tech-tabs">
          {["Popular", "Toys", "Smartwatches", "Under Rs. 10,000"].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={category === c ? "active" : ""}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {shown.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <section className="wrap setup-section">
        <div className="setup-banner">
          <div>
            <span className="feature-label">WORK BETTER. PLAY BETTER.</span>
            <h2>
              A setup that
              <br />
              works for you.
            </h2>
            <p>
              Better keys. Smoother moves. Discover the details that make your
              desk feel right.
            </p>
            <Link className="button" href="/shop?category=PC%20%26%20Laptop">
              Build your setup <ArrowRight size={16} />
            </Link>
          </div>
          <div className="setup-photo">
            <Image
              src={collectionFor("PC & Laptop")!.image}
              fill
              alt={collectionFor("PC & Laptop")!.alt}
              sizes="(max-width:760px) 50vw,60vw"
            />
          </div>
        </div>
      </section>
      <section className="wrap tech-products last-products">
        <div className="compact-heading">
          <div>
            <span className="section-overline">
              SMALL PRICE. BIG DIFFERENCE.
            </span>
            <h2>Everyday essentials.</h2>
          </div>
          <Link href="/shop?sort=low">
            Shop by price <ChevronRight size={15} />
          </Link>
        </div>
        <div className="product-grid">
          {products
            .filter((p) => p.price < 10000)
            .slice(-4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </div>
  );
}
