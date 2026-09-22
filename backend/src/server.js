import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { createClient } from "@supabase/supabase-js";
import { verifyCredentials } from "@supabase/server/core";
import { randomUUID } from "node:crypto";
import { store, mutate } from "./store.js";
import { orderSchema, priceOrder } from "./validation.js";
import { z } from "zod";
import { productSchema, bannersSchema } from "./content.js";
import { upload, saveUpload, mediaDirectory } from "./uploads.js";
import { eventSchema, recordEvent, getEvents } from "./analytics.js";
const app = express();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLISHABLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } },
);
app.use(
  helmet(),
  cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }),
  express.json({ limit: "100kb" }),
  rateLimit({ windowMs: 60000, limit: 120 }),
);
async function auth(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer /, "");
  if (!token)
    return res.status(401).json({ error: "Please sign in to continue." });
  const verified = await verifyCredentials(
    { token, apikey: null },
    { auth: "user" },
  );
  if (verified.error)
    return res
      .status(401)
      .json({ error: "Your session has expired. Please sign in again." });
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user)
    return res
      .status(401)
      .json({ error: "Your session has expired. Please sign in again." });
  req.user = data.user;
  next();
}
function admin(req, res, next) {
  if (req.user.app_metadata?.role !== "admin")
    return res.status(403).json({ error: "Administrator access required." });
  next();
}
app.use(
  "/api/media",
  express.static(mediaDirectory, {
    maxAge: "1y",
    immutable: true,
    dotfiles: "deny",
  }),
);
app.post(
  "/api/admin/uploads",
  auth,
  admin,
  rateLimit({ windowMs: 60000, limit: 20 }),
  upload,
  saveUpload,
);
app.post("/api/admin/products", auth, admin, async (req, res) => {
  const data = productSchema.parse(req.body);
  const product = { ...data, id: randomUUID(), rating: 0, specs: {} };
  await mutate((s) => {
    s.products.unshift(product);
  });
  res.status(201).json(product);
});
app.get("/api/health", (_, res) =>
  res.json({ status: "ok", mode: "demo-catalog", storage: "local-json" }),
);
app.get("/api/products", (_, res) => res.json(store.products));
app.post("/api/events", rateLimit({ windowMs: 60000, limit: 60 }), async (req, res) => {
  await recordEvent(eventSchema.parse(req.body));
  res.status(202).json({ ok: true });
});
app.get("/api/admin/events", auth, admin, (req, res) => {
  const days = z.coerce.number().int().min(1).max(30).catch(7).parse(req.query.days);
  res.json({ events: getEvents(days), days });
});
app.get("/api/banners", (_, res) =>
  res.json(store.banners.filter((b) => b.active)),
);
app.post(
  "/api/orders",
  auth,
  rateLimit({ windowMs: 60000, limit: 10 }),
  async (req, res) => {
    const parsed = orderSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.issues[0].message });
    const order = await mutate((s) => {
      const priced = priceOrder(parsed.data.items, s.products);
      const order = {
        ...priced,
        id: "SY-" + randomUUID().slice(0, 8).toUpperCase(),
        userId: req.user.id,
        customer: parsed.data.customer,
        payment: "cod",
        status: "Confirmed",
        createdAt: new Date().toISOString(),
      };
      for (const line of priced.items)
        s.products.find((p) => p.id === line.id).stock -= line.quantity;
      s.orders.unshift(order);
      return order;
    });
    res.status(201).json(order);
  },
);
app.get("/api/orders", auth, (req, res) =>
  res.json(store.orders.filter((o) => o.userId === req.user.id)),
);
app.get("/api/admin", auth, admin, (_, res) => res.json(store));
app.patch("/api/admin/orders/:id", auth, admin, async (req, res) => {
  const status = z
    .enum(["Confirmed", "Packed", "Shipped", "Delivered", "Cancelled"])
    .parse(req.body.status);
  const result = await mutate((s) => {
    const order = s.orders.find((o) => o.id === req.params.id);
    if (!order) throw Error("Order not found");
    if (order.status === "Cancelled")
      throw Error("Cancelled orders cannot be changed");
    if (status === "Cancelled")
      for (const line of order.items) {
        const p = s.products.find((p) => p.id === line.id);
        if (p) p.stock += line.quantity;
      }
    order.status = status;
    return order;
  });
  res.json(result);
});
app.patch("/api/admin/products/:id", auth, admin, async (req, res) => {
  const patch = productSchema.parse(req.body);
  res.json(
    await mutate((s) => {
      const p = s.products.find((p) => p.id === req.params.id);
      if (!p) throw Error("Product not found");
      Object.assign(p, patch);
      return p;
    }),
  );
});
app.put("/api/admin/banners", auth, admin, async (req, res) => {
  const banners = bannersSchema.parse(req.body);
  await mutate((s) => {
    s.banners = banners;
  });
  res.json(banners);
});
app.use((err, req, res, next) => {
  res.status(400).json({
    error:
      err instanceof z.ZodError
        ? err.issues[0].message
        : err.message || "Something went wrong",
  });
});
app.listen(process.env.PORT || 4100, () =>
  console.log(
    `Nayvilo API ready at http://localhost:${process.env.PORT || 4100}`,
  ),
);
