import { catalog } from "@/lib/server";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [{ id }, products] = await Promise.all([params, catalog()]);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();
  return (
    <ProductDetail
      product={product}
      related={products.filter((p) => p.id !== id).slice(0, 4)}
    />
  );
}
