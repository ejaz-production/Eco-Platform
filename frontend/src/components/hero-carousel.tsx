"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { Banner, photo } from "@/lib/data";
export function HeroCarousel({ banners }: { banners: Banner[] }) {
  const [mobile, setMobile] = useState<boolean | null>(null),
    [position, setPosition] = useState<{ index: number; previous: number | null }>({ index: 0, previous: null }),
    [paused, setPaused] = useState(false);
  useEffect(() => {
    const m = matchMedia("(max-width:760px)");
    const update = () => {
      setMobile(m.matches);
      setPosition({ index: 0, previous: null });
    };
    update();
    m.addEventListener("change", update);
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) setPaused(true);
    return () => m.removeEventListener("change", update);
  }, []);
  const slides = banners.filter(
    (b) =>
      (!b.placement || b.placement === "main") &&
      b.active &&
      (!b.target ||
        b.target === "both" ||
        b.target === (mobile ? "mobile" : "desktop")),
  );
  useEffect(() => {
    if (paused || slides.length < 2 || mobile === null) return;
    const t = setInterval(() => {
      if (!document.hidden) setPosition((p) => ({ index: (p.index + 1) % slides.length, previous: p.index }));
    }, 5000);
    return () => clearInterval(t);
  }, [paused, slides.length, mobile]);
  useEffect(() => {
    if (position.previous === null) return;
    const timeout = setTimeout(() => setPosition((p) => ({ ...p, previous: null })), 2100);
    return () => clearTimeout(timeout);
  }, [position.index, position.previous]);
  const index = position.index;
  const goTo = (target: number) => setPosition((p) => {
    const nextIndex = (target + slides.length) % slides.length;
    return nextIndex === p.index ? p : { index: nextIndex, previous: p.index };
  });
  if (mobile === null)
    return (
      <div className="wrap">
        <div className="hero-carousel skeleton" />
      </div>
    );
  if (!slides.length) return null;
  const sides = ["side-top", "side-bottom"]
    .map((slot) =>
      banners.find(
        (b) => b.active && b.placement === slot && b.target !== "mobile",
      ),
    )
    .filter((b): b is Banner => !!b);
  const next = (delta: number) =>
    goTo(index + delta);
  return (
    <section
      className={
        "wrap hero-wrap hero-layout" +
        (!mobile && sides.length ? " has-side-posters" : "")
      }
      aria-label="Featured collections"
      aria-roledescription="carousel"
    >
      <div
        className="hero-carousel"
        onTouchStart={(e) => {
          e.currentTarget.dataset.touch = String(e.changedTouches[0].clientX);
        }}
        onTouchEnd={(e) => {
          const d =
            e.changedTouches[0].clientX - Number(e.currentTarget.dataset.touch);
          if (Math.abs(d) > 55) {
            next(d < 0 ? 1 : -1);
          }
        }}
      >
        {[position.previous, index].map((slideIndex, layer) => {
          if (slideIndex === null) return null;
          const slide = slides[slideIndex % slides.length];
          const exiting = layer === 0;
          return <div key={`${slide.id}-${exiting ? "out" : "in"}`} className={`hero-slide ${exiting ? "hero-slide-exit" : "hero-slide-enter"} ${!exiting && position.previous !== null ? "hero-slide-delayed" : ""}`} aria-hidden={exiting || undefined} inert={exiting}>
        <div key={slide.id + "-text"} className="hero-text hero-copy-enter">
          <span className="eyebrow">{slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <Link className="button" href={slide.href || "/shop"}>
            {slide.cta || "Shop now"}
            <ArrowRight size={17} />
          </Link>
        </div>
        <div key={slide.id + "-image"} className="hero-art hero-image-enter">
          <Image
            key={slide.image}
            src={photo(slide.image, 1400)}
            alt={slide.eyebrow || "Featured collection"}
            fill
            priority
            sizes="(max-width:760px) 90vw,35vw"
          />
        </div>
        </div>;
        })}
        {slides.length > 1 && (
          <div className="hero-controls">
            <button aria-label="Previous banner" onClick={() => next(-1)}>
              <ChevronLeft size={17} />
            </button>
            <div>
              {slides.map((b, i) => (
                <button
                  key={b.id}
                  aria-label={`Show banner ${i + 1}`}
                  aria-pressed={i === index % slides.length}
                  onClick={() => goTo(i)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button aria-label="Next banner" onClick={() => next(1)}>
              <ChevronRight size={17} />
            </button>
            <button
              aria-label={paused ? "Play banners" : "Pause banners"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>
        )}
      </div>
      {!mobile && sides.length > 0 && (
        <aside className="hero-side-posters" aria-label="More collections">
          {sides.map((b) => (
            <Link
              key={b.id}
              href={b.href || "/shop"}
              className="hero-side-card"
            >
              <div>
                <span className="eyebrow">{b.eyebrow}</span>
                <h2>{b.title}</h2>
                <span className="side-cta">
                  {b.cta || "Shop now"}
                  <ArrowRight size={14} />
                </span>
              </div>
              <div className="side-cutout">
                <Image
                  src={photo(b.image, 700)}
                  fill
                  sizes="20vw"
                  alt={b.eyebrow || "Collection"}
                />
              </div>
            </Link>
          ))}
        </aside>
      )}
    </section>
  );
}
