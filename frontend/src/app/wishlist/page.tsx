import { catalog } from "@/lib/server";
import { Shop } from "@/components/shop";
export const metadata = { title: "Your saved finds" };
export default async function Page() {
  return <Shop products={await catalog()} saved />;
}
