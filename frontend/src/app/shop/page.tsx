import { catalog } from "@/lib/server";
import { Shop } from "@/components/shop";
export const metadata = { title: "The collection" };
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string; sort?: string }>;
}) {
  const [products, params] = await Promise.all([catalog(), searchParams]);
  return (
    <Shop
      key={`${params.category || "All"}:${params.q || ""}:${params.sort || "featured"}`}
      products={products}
      initialCategory={params.category}
      initialQuery={params.q}
      initialSort={params.sort}
    />
  );
}
