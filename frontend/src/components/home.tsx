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
  Watch,
  Baby,
  Cable,
  Car,
  BatteryCharging,
} from "lucide-react";
import { useState } from "react";
import { ProductCard } from "./product-card";
import { type Product, type Banner, photo } from "@/lib/data";
const departments = [
  { name: "Smartwatches", icon: Watch, detail: "Track your day" },
  { name: "Toys", icon: Baby, detail: "Kids favourites" },
  { name: "Audio", icon: Headphones, detail: "Speakers & more" },
  { name: "Mobile Accessories", icon: Cable, detail: "Everyday essentials" },
  { name: "Car Accessories", icon: Car, detail: "For the road" },
  { name: "Power Solutions", icon: BatteryCharging, detail: "Stay charged" },
];
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
        <div className="department-grid">
          {departments.map((c) => (
            <Link
              href={"/shop?category=" + encodeURIComponent(c.name)}
              key={c.name}
            >
              <span className="department-icon">
                <c.icon size={29} strokeWidth={1.35} />
              </span>
              <strong>{c.name}</strong>
              <small>{c.detail}</small>
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
            <Link className="button" href="/shop?category=Toys">
              Build your setup <ArrowRight size={16} />
            </Link>
          </div>
          <div className="setup-photo">
            <Image
              src={photo("photo-1587829741301-dc798b83add3", 1000)}
              fill
              alt="Mechanical keyboard for a focused desk setup"
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
