"use client";
import { useState } from "react";
import { Banner, photo } from "@/lib/data";
import { api } from "@/lib/supabase";
import { MediaUpload } from "./media-upload";
import { Dropdown } from "./dropdown";
import { ArrowUp, ArrowDown, Trash2, Plus } from "lucide-react";
export function BannerEditor({
  initial,
  isAdmin,
}: {
  initial: Banner[];
  isAdmin: boolean;
}) {
  const [banners, setBanners] = useState(initial),
    [target, setTarget] = useState<"mobile" | "desktop">("desktop"),
    [uploading, setUploading] = useState(false),
    [busy, setBusy] = useState(false),
    [message, setMessage] = useState("");
  function patch(id: string, data: Partial<Banner>) {
    setBanners((bs) => bs.map((b) => (b.id === id ? { ...b, ...data } : b)));
  }
  function move(id: string, delta: number) {
    setBanners((bs) => {
      const list = bs.filter(
        (b) => b.target === target || !b.target || b.target === "both",
      );
      const i = list.findIndex((b) => b.id === id);
      const a = bs.findIndex((b) => b.id === id),
        b = bs.findIndex((b) => b.id === list[i + delta]?.id);
      if (b < 0) return bs;
      const next = [...bs];
      [next[a], next[b]] = [next[b], next[a]];
      return next;
    });
  }
  const shown = banners.filter(
    (b) => b.target === target || !b.target || b.target === "both",
  );
  return (
    <div className="banner-editor">
      <div className="section-heading">
        <h2>Hero banners</h2>
        <button
          className="button small-button"
          disabled={busy || uploading}
          onClick={async () => {
            setBusy(true);
            setMessage("");
            try {
              if (
                banners.some(
                  (b) =>
                    !b.title.trim() ||
                    !b.image ||
                    !/^\/(?!\/)[^\\\s]*$/.test(b.href || "/shop"),
                )
              )
                throw Error(
                  "Each banner needs a title, image and a store link starting with /.",
                );
              if (isAdmin)
                await api("/admin/banners", {
                  method: "PUT",
                  body: JSON.stringify(banners),
                });
              setMessage(
                isAdmin
                  ? "Banners published. Refresh the storefront to see them."
                  : "Demo saved in this preview only.",
              );
            } catch (e) {
              setMessage((e as Error).message);
            } finally {
              setBusy(false);
            }
          }}
        >
          {busy ? "Saving…" : isAdmin ? "Publish banners" : "Save demo changes"}
        </button>
      </div>
      <div className="device-tabs">
        {(["desktop", "mobile"] as const).map((t) => (
          <button
            key={t}
            aria-pressed={t === target}
            onClick={() => setTarget(t)}
          >
            {t === "desktop" ? "Desktop banners" : "Mobile banners"}
          </button>
        ))}
      </div>
      <p className="muted">
        {target === "mobile"
          ? "Use portrait or square artwork for mobile."
          : "Use wide artwork for desktop."}{" "}
        Transparent PNG/WebP artwork works best with this layout. Each device
        has its own slides and order. Up to 30 total.
      </p>
      {message && <p role="status">{message}</p>}
      {shown.map((b, i) => (
        <section key={b.id} className="banner-edit-card">
          <div className={"banner-art-preview " + target}>
            {b.image && (
              <img src={photo(b.image, 700)} alt="Banner artwork preview" />
            )}
          </div>
          <div className="banner-fields">
            <div className="section-heading">
              <strong>Slide {i + 1}</strong>
              <div className="editor-actions">
                <button
                  disabled={i === 0}
                  aria-label={"Move banner " + (i + 1) + " earlier"}
                  onClick={() => move(b.id, -1)}
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  disabled={i === shown.length - 1}
                  aria-label={"Move banner " + (i + 1) + " later"}
                  onClick={() => move(b.id, 1)}
                >
                  <ArrowDown size={16} />
                </button>
                <button
                  aria-label={"Remove banner " + (i + 1)}
                  onClick={() =>
                    setBanners((bs) => bs.filter((x) => x.id !== b.id))
                  }
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <label>
              Display on
              <Dropdown
                ariaLabel="Display on"
                value={b.target || "both"}
                onChange={(value) =>
                  patch(b.id, {
                    target: value as Banner["target"],
                    ...(value === "mobile"
                      ? { placement: "main" as const }
                      : {}),
                  })
                }
                options={[
                  { value: "desktop", label: "Desktop" },
                  { value: "mobile", label: "Mobile" },
                  { value: "both", label: "Both devices" },
                ]}
              />
            </label>
            {target === "desktop" && (
              <label>
                Position
                <Dropdown
                  ariaLabel="Position"
                  value={b.placement || "main"}
                  onChange={(value) =>
                    patch(b.id, {
                      placement: value as Banner["placement"],
                      target: "desktop",
                    })
                  }
                  options={[
                    { value: "main", label: "Main rotating banner" },
                    { value: "side-top", label: "Top side poster" },
                    { value: "side-bottom", label: "Bottom side poster" },
                  ]}
                />
              </label>
            )}
            {(
              [
                { key: "eyebrow", label: "Small heading", max: 80 },
                { key: "title", label: "Headline", max: 100 },
                { key: "description", label: "Description", max: 250 },
                { key: "cta", label: "Button label", max: 40 },
                { key: "href", label: "Store link", max: 250 },
              ] as const
            ).map((f) => (
              <label key={f.key}>
                {f.label}
                <input
                  maxLength={f.max}
                  value={b[f.key] || ""}
                  onChange={(e) => patch(b.id, { [f.key]: e.target.value })}
                />
              </label>
            ))}
            <MediaUpload
              onBusy={setUploading}
              disabled={uploading}
              imagesOnly
              demo={!isAdmin}
              onAdd={(items) => patch(b.id, { image: items[0].src })}
            />
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={b.active}
                onChange={(e) => patch(b.id, { active: e.target.checked })}
              />
              Show on homepage
            </label>
          </div>
        </section>
      ))}
      {banners.length < 30 && (
        <button
          className="button outline"
          onClick={() =>
            setBanners((bs) => [
              ...bs,
              {
                id: crypto.randomUUID(),
                target,
                eyebrow: "NEW FINDS",
                title: "Something for your everyday.",
                description: "Explore the collection.",
                image: "photo-1546435770-a3e426bf472b",
                cta: "Shop now",
                href: "/shop",
                active: true,
              },
            ])
          }
        >
          <Plus size={17} />
          Add {target} banner
        </button>
      )}
      {!shown.length && <p>No banners for this device yet.</p>}
    </div>
  );
}
