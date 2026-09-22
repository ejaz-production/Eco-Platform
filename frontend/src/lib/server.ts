import type { Product, Banner } from "./data";
export async function catalog(): Promise<Product[]> {
  const r = await fetch(
    `${process.env.API_URL || "http://localhost:4100"}/api/products`,
    { cache: "no-store", signal: AbortSignal.timeout(5000) },
  );
  if (!r.ok) throw Error("Catalog unavailable");
  return r.json();
}
export async function banners(): Promise<Banner[]> {
  try {
    const r = await fetch(
      `${process.env.API_URL || "http://localhost:4100"}/api/banners`,
      { cache: "no-store", signal: AbortSignal.timeout(5000) },
    );
    return r.ok ? await r.json() : [];
  } catch {
    return [];
  }
}
