import Admin from "../page";
import { notFound } from "next/navigation";
export default async function AdminSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!["orders", "products", "content", "customers", "events", "settings"].includes(section)) notFound();
  return <Admin />;
}
