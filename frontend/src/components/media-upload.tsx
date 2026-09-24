"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Media } from "@/lib/data";
export function MediaUpload({
  onAdd,
  onBusy,
  demo = false,
  imagesOnly = false,
  disabled = false,
}: {
  onAdd: (items: Media[]) => void;
  onBusy?: (busy: boolean) => void;
  demo?: boolean;
  imagesOnly?: boolean;
  disabled?: boolean;
}) {
  const [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  return (
    <div className="media-upload">
      <label className="upload-label">
        {busy
          ? "Uploading…"
          : imagesOnly
            ? "Upload banner image"
            : "Add images or videos"}
        <input
          type="file"
          disabled={busy || disabled}
          multiple={!imagesOnly}
          accept={
            imagesOnly
              ? "image/jpeg,image/png,image/webp,image/avif"
              : "image/jpeg,image/png,image/webp,image/avif,video/mp4,video/webm"
          }
          onChange={async (e) => {
            const files = Array.from(e.target.files || []);
            e.target.value = "";
            setBusy(true);
            onBusy?.(true);
            setError("");
            try {
              const {
                data: { session },
              } = await supabase.auth.getSession();
              for (const file of files.slice(0, 12)) {
                const video = file.type.startsWith("video/");
                if (
                  ![
                    "image/jpeg",
                    "image/png",
                    "image/webp",
                    "image/avif",
                    "video/mp4",
                    "video/webm",
                  ].includes(file.type) ||
                  (imagesOnly && video)
                )
                  throw Error("Choose a supported image or video.");
                if (file.size > (video ? 50 : 10) * 1024 * 1024)
                  throw Error(
                    video
                      ? "Videos must be under 50 MB."
                      : "Images must be under 10 MB.",
                  );
                if (demo) {
                  onAdd([
                    {
                      type: video ? "video" : "image",
                      src: URL.createObjectURL(file),
                      alt: file.name.slice(0, 150),
                    },
                  ]);
                  continue;
                }
                const body = new FormData();
                body.append("file", file);
                const r = await fetch((process.env.NEXT_PUBLIC_API_URL || "") + "/api/admin/uploads", {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${session?.access_token || ""}`,
                  },
                  body,
                });
                const data = await r.json();
                if (!r.ok) throw Error(data.error || "Upload failed");
                onAdd([{ ...data, alt: file.name }]);
              }
            } catch (err) {
              setError((err as Error).message);
            } finally {
              setBusy(false);
              onBusy?.(false);
            }
          }}
        />
      </label>
      <small>
        Images up to 10 MB{!imagesOnly && " · MP4/WebM up to 50 MB"}.{" "}
        {demo && "Preview only."}
      </small>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
    </div>
  );
}
