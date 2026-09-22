"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Product, photo } from "@/lib/data";
export function ProductGallery({ product }: { product: Product }) {
  const media = product.media?.length
    ? product.media
    : [{ type: "image" as const, src: product.image, alt: product.name }];
  const [index, setIndex] = useState(0),
    [playing, setPlaying] = useState(false),
    [failed, setFailed] = useState(false);
  const item = media[index] || media[0],
    poster = photo(
      media.find((m) => m.type === "image")?.src || product.image,
      1200,
    );
  function select(i: number) {
    setIndex((i + media.length) % media.length);
    setPlaying(false);
    setFailed(false);
  }
  return (
    <div className="product-gallery">
      <div
        className="gallery-stage"
        onTouchStart={(e) => {
          e.currentTarget.dataset.touch = String(e.changedTouches[0].clientX);
        }}
        onTouchEnd={(e) => {
          if (item.type === "video" && playing) return;
          const delta =
            e.changedTouches[0].clientX - Number(e.currentTarget.dataset.touch);
          if (Math.abs(delta) > 55) select(index + (delta < 0 ? 1 : -1));
        }}
      >
        {item.type === "video" ? (
          playing ? (
            <video
              key={item.src}
              src={item.src}
              poster={poster}
              controls
              autoPlay
              playsInline
              preload="none"
              onError={() => setFailed(true)}
              aria-label={item.alt || product.name + " video"}
            />
          ) : (
            <button
              type="button"
              className="video-cover"
              onClick={() => setPlaying(true)}
              aria-label="Play product video"
            >
              <Image
                src={poster}
                fill
                sizes="(max-width:760px) 100vw,50vw"
                alt={product.name}
              />
              <span>
                <Play fill="currentColor" /> Play video
              </span>
            </button>
          )
        ) : (
          <Image
            key={item.src}
            src={photo(item.src, 1200)}
            alt={item.alt || product.name}
            fill
            priority={index === 0}
            sizes="(max-width:760px) 100vw,50vw"
          />
        )}
        {failed && (
          <p className="video-error" role="alert">
            This video could not play. Try another browser or connection.
          </p>
        )}
        {media.length > 1 && !(item.type === "video" && playing) && (
          <>
            <button
              type="button"
              className="gallery-prev"
              aria-label="Previous media"
              onClick={() => select(index - 1)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="gallery-next"
              aria-label="Next media"
              onClick={() => select(index + 1)}
            >
              <ChevronRight />
            </button>
          </>
        )}
        <span className="gallery-counter">
          {index + 1} / {media.length}
        </span>
      </div>
      {media.length > 1 && (
        <div className="gallery-thumbs" aria-label="Product gallery">
          {media.map((m, i) => (
            <button
              type="button"
              key={m.src + i}
              aria-label={`Show ${m.type} ${i + 1}`}
              aria-pressed={index === i}
              onClick={() => select(i)}
            >
              {m.type === "image" ? (
                <Image src={photo(m.src, 160)} fill sizes="64px" alt="" />
              ) : (
                <Play size={21} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
