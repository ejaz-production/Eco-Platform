import { Home } from "@/components/home";
import { catalog, banners } from "@/lib/server";
export const dynamic = "force-dynamic";
export default async function Page() {
  const [products, slides] = await Promise.all([catalog(), banners()]);
  return <Home products={products} banners={slides} />;
}
