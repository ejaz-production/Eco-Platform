"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export function EventTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (/^\/(admin|auth|login|account|checkout|orders)(\/|$)/.test(pathname) || navigator.doNotTrack === "1") return;
    let session: string;
    try { session = sessionStorage.getItem("store-visit") || crypto.randomUUID(); sessionStorage.setItem("store-visit", session); } catch { return; }
    const common = { session, path: pathname, device: innerWidth <= 760 ? "mobile" : "desktop", timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown" };
    function send(type: string, target = "", duration = 0) {
      void fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...common, type, target, duration }), keepalive: true }).catch(() => {});
    }
    send("page_view");
    let start = document.hidden ? 0 : performance.now(), active = 0, lastClick = 0;
    const flush = () => {
      if (start) active += performance.now() - start;
      start = 0;
      const seconds = Math.min(1800, Math.round(active / 1000));
      if (seconds > 0) send("page_time", "", seconds);
      active = 0;
    };
    const visibility = () => { if (document.hidden) flush(); else start = performance.now(); };
    const click = (event: MouseEvent) => {
      if (Date.now() - lastClick < 300) return;
      const el = (event.target as Element)?.closest("a,button");
      if (!el || el.closest("form")) return;
      // Record structural control identities, never field values or customer text.
      const link = el instanceof HTMLAnchorElement ? el : null;
      const destination = link && link.origin === location.origin ? link.pathname : "";
      const label = el.getAttribute("data-event") || (destination ? "link:" + destination : "button:" + (el.getAttribute("aria-label") || el.textContent || "action").trim());
      if (/auth|login|account|checkout|orders/i.test(destination)) return;
      lastClick = Date.now();
      send("click", label.replace(/[^a-zA-Z0-9 /:._-]/g, "").slice(0, 180));
    };
    document.addEventListener("click", click);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("pagehide", flush);
    return () => { flush(); document.removeEventListener("click", click); document.removeEventListener("visibilitychange", visibility); window.removeEventListener("pagehide", flush); };
  }, [pathname]);
  return null;
}
