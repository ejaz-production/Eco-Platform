import { z } from "zod";
export const orderSchema = z.object({
  items: z
    .array(
      z.object({ id: z.string(), quantity: z.number().int().min(1).max(10) }),
    )
    .min(1)
    .max(30),
  customer: z.object({
    name: z.string().trim().min(2).max(100),
    email: z.email(),
    phone: z
      .string()
      .regex(
        /^(?:\+92|0)3\d{9}$/,
        "Use a Pakistani mobile number, e.g. 03001234567",
      ),
    city: z.enum([
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Quetta",
      "Sialkot",
      "Gujranwala",
    ]),
    address: z.string().trim().min(10).max(500),
  }),
  payment: z.literal("cod"),
});
export function priceOrder(items, products) {
  const grouped = new Map();
  for (const item of items)
    grouped.set(item.id, (grouped.get(item.id) || 0) + item.quantity);
  const lines = [...grouped].map(([id, quantity]) => {
    const p = products.find((p) => p.id === id);
    if (!p || quantity > p.stock || quantity > 10)
      throw new Error("Product unavailable or quantity exceeds stock");
    return { id, name: p.name, price: p.price, quantity, image: p.image };
  });
  const subtotal = lines.reduce((s, p) => s + p.price * p.quantity, 0);
  return {
    items: lines,
    subtotal,
    shipping: subtotal >= 5000 ? 0 : 250,
    total: subtotal + (subtotal >= 5000 ? 0 : 250),
  };
}
