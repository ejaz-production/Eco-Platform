import { Suspense } from "react";
import { catalog } from "@/lib/server";
import { Shop } from "@/components/shop";
import { PRICE_MAX } from "@/lib/shop-filters";
export const metadata = { title: "Your saved finds" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    q?: string;
    sort?: string;
    min?: string;
    max?: string;
    stock?: string;
    deal?: string;
    rating?: string;
  }>;
}) {
  const [products, params] = await Promise.all([catalog(), searchParams]);
  return (
    <Suspense>
      <Shop
        saved
        key={`${params.category || "All"}:${params.q || ""}:${params.sort || "featured"}:${params.min || ""}:${params.max || ""}:${params.stock || ""}:${params.deal || ""}:${params.rating || ""}`}
        products={products}
        initialCategory={params.category}
        initialQuery={params.q}
        initialSort={params.sort}
        initialMin={Number(params.min || 0)}
        initialMax={Number(params.max || PRICE_MAX)}
        initialInStock={params.stock === "1"}
        initialOnSale={params.deal === "sale"}
        initialRating={Number(params.rating || 0)}
      />
    </Suspense>
  );
}
