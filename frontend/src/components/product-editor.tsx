"use client";
import { useEffect, useRef, useState } from "react";
import { Product, Media, categories, photo } from "@/lib/data";
import { api } from "@/lib/supabase";
import { ProductGallery } from "./product-gallery";
import { MediaUpload } from "./media-upload";
import { X, ArrowUp, ArrowDown, Play } from "lucide-react";
export function ProductEditor({
  product,
  isAdmin,
  onClose,
  onSave,
}: {
  product: Product;
  isAdmin: boolean;
  onClose: () => void;
  onSave: (p: Product) => void;
}) {
  const [media, setMedia] = useState<Media[]>(
      product.media ||
        (product.image
          ? [{ type: "image", src: product.image, alt: product.name }]
          : []),
    ),
    [uploading, setUploading] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  const move = (i: number, d: number) =>
    setMedia((ms) => {
      const next = [...ms];
      [next[i], next[i + d]] = [next[i + d], next[i]];
      return next;
    });
  return (
    <dialog ref={dialog} className="content-dialog" onCancel={onClose}>
      <button
        type="button"
        className="modal-close"
        aria-label="Close product editor"
        onClick={onClose}
      >
        <X />
      </button>
      <h2>{product.id ? "Edit product" : "Add product"}</h2>
      <p className="muted">
        The first image becomes the cover. Up to 12 images and videos.
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setBusy(true);
          setError("");
          const f = new FormData(e.currentTarget);
          const cover = media.find((m) => m.type === "image");
          if (!cover) {
            setError("Add at least one product image.");
            setBusy(false);
            return;
          }
          const data = {
            ...product,
            name: String(f.get("name")),
            category: String(f.get("category")),
            description: String(f.get("description")),
            price: Number(f.get("price")),
            oldPrice: Number(f.get("oldPrice")),
            stock: Number(f.get("stock")),
            color: String(f.get("color")),
            badge: String(f.get("badge")),
            image: cover.src,
            media,
          };
          try {
            const saved = isAdmin
              ? await api<Product>(
                  "/admin/products" + (product.id ? "/" + product.id : ""),
                  {
                    method: product.id ? "PATCH" : "POST",
                    body: JSON.stringify(data),
                  },
                )
              : { ...data, id: product.id || crypto.randomUUID() };
            onSave(saved);
          } catch (e) {
            setError((e as Error).message);
          } finally {
            setBusy(false);
          }
        }}
      >
        <div className="form-grid">
          <label className="full-width">
            Product name
            <input
              autoFocus
              required
              name="name"
              minLength={2}
              maxLength={100}
              defaultValue={product.name}
            />
          </label>
          <label>
            Category
            <select
              name="category"
              defaultValue={product.category || "Mobile Accessories"}
            >
              {categories
                .filter((c) => c !== "All")
                .map((c) => (
                  <option key={c}>{c}</option>
                ))}
            </select>
          </label>
          <label>
            Price (PKR)
            <input
              required
              type="number"
              name="price"
              min="1"
              step="1"
              defaultValue={product.price || ""}
            />
          </label>
          <label>
            Compare-at price (optional)
            <input
              type="number"
              name="oldPrice"
              min="0"
              step="1"
              defaultValue={product.oldPrice || 0}
            />
          </label>
          <label>
            Stock
            <input
              required
              type="number"
              name="stock"
              min="0"
              step="1"
              defaultValue={product.stock}
            />
          </label>
          <label>
            Colour
            <input name="color" maxLength={60} defaultValue={product.color} />
          </label>
          <label>
            Badge
            <input name="badge" maxLength={40} defaultValue={product.badge} />
          </label>
          <label className="full-width">
            Description
            <textarea
              name="description"
              maxLength={3000}
              defaultValue={product.description}
            />
          </label>
        </div>
        <div className="editor-media-list">
          {media.map((m, i) => (
            <div className="editor-media" key={m.src + i}>
              {m.type === "image" ? (
                <img src={photo(m.src, 160)} alt={m.alt || "Product image"} />
              ) : (
                <span className="editor-video">
                  <Play /> Video
                </span>
              )}
              <input
                aria-label={"Description for media " + (i + 1)}
                maxLength={150}
                value={m.alt}
                placeholder="Image description"
                onChange={(e) =>
                  setMedia((ms) =>
                    ms.map((x, n) =>
                      n === i ? { ...x, alt: e.target.value } : x,
                    ),
                  )
                }
              />
              <div>
                <button
                  type="button"
                  disabled={i === 0}
                  aria-label={"Move media " + (i + 1) + " earlier"}
                  onClick={() => move(i, -1)}
                >
                  <ArrowUp size={15} />
                </button>
                <button
                  type="button"
                  disabled={i === media.length - 1}
                  aria-label={"Move media " + (i + 1) + " later"}
                  onClick={() => move(i, 1)}
                >
                  <ArrowDown size={15} />
                </button>
                <button
                  type="button"
                  aria-label={"Remove media " + (i + 1)}
                  onClick={() => setMedia((ms) => ms.filter((_, n) => n !== i))}
                >
                  <X size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <MediaUpload
          onBusy={setUploading}
          demo={!isAdmin}
          disabled={media.length >= 12 || busy}
          onAdd={(items) => setMedia((ms) => [...ms, ...items].slice(0, 12))}
        />
        {media.some((m) => m.type === "image") && (
          <details className="gallery-preview">
            <summary>Preview product gallery</summary>
            <ProductGallery
              key={media.map((m) => m.src).join()}
              product={{
                ...product,
                media,
                image: media.find((m) => m.type === "image")!.src,
              }}
            />
          </details>
        )}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button className="button" disabled={busy || uploading}>
          {busy ? "Saving…" : isAdmin ? "Save product" : "Save demo product"}
        </button>
      </form>
    </dialog>
  );
}
