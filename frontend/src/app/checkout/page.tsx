"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@/components/provider";
import { api } from "@/lib/supabase";
import { money, type Order, type Product } from "@/lib/data";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { Dropdown } from "@/components/dropdown";
export default function Checkout() {
  const { cart, user, authReady, clear } = useStore(),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [order, setOrder] = useState<Order | null>(null);
  const [direct, setDirect] = useState<
      { product: Product; quantity: number }[] | null
    >(null),
    [ready, setReady] = useState(false),
    [returnTo, setReturnTo] = useState("/checkout"),
    [directError, setDirectError] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("buy");
    setReturnTo("/checkout" + location.search);
    if (!id) {
      setReady(true);
      return;
    }
    setDirect([]);
    const q = Number(params.get("qty") || 1);
    api<Product[]>("/products")
      .then((products) => {
        const product = products.find((p) => p.id === id);
        if (
          !product ||
          !Number.isInteger(q) ||
          q < 1 ||
          q > 10 ||
          q > product.stock
        )
          throw Error(
            "This product or quantity is unavailable. Please choose again.",
          );
        setDirect([{ product, quantity: q }]);
      })
      .catch((e) => setDirectError(e.message))
      .finally(() => setReady(true));
  }, []);
  const lines = direct === null ? cart : direct;
  const subtotal = lines.reduce((s, i) => s + i.product.price * i.quantity, 0);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const f = new FormData(e.currentTarget);
    try {
      const result = await api<Order>("/orders", {
        method: "POST",
        body: JSON.stringify({
          items: lines.map((i) => ({ id: i.product.id, quantity: i.quantity })),
          customer: Object.fromEntries(f),
          payment: "cod",
        }),
      });
      setOrder(result);
      if (direct === null) clear();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  if (order)
    return (
      <div className="empty">
        <span className="success-circle">
          <Check />
        </span>
        <span className="eyebrow">YOUR DEMO ORDER IS CONFIRMED</span>
        <h1>Good things are on the way.</h1>
        <p>
          {order.id} · {money(order.total)} · Cash on delivery
        </p>
        <p>This is a demo order. No products will be dispatched.</p>
        <Link className="button" href="/orders">
          View your orders <ArrowUpRight size={18} />
        </Link>
      </div>
    );
  if (!authReady || !ready)
    return (
      <div className="empty">
        <span className="spinner" />
        Checking your session…
      </div>
    );
  if (!user)
    return (
      <div className="empty">
        <h1>Make it yours.</h1>
        <p>Sign in to place your order and keep track of your good finds.</p>
        <Link
          className="button"
          href={"/login?next=" + encodeURIComponent(returnTo)}
        >
          Continue to sign in <ArrowUpRight size={18} />
        </Link>
      </div>
    );
  if (directError)
    return (
      <div className="empty">
        <h1>Unable to buy this item.</h1>
        <p role="alert">{directError}</p>
        <Link className="button" href="/shop">
          Back to shop
        </Link>
      </div>
    );
  if (!lines.length)
    return (
      <div className="empty">
        <h1>Your bag is taking a breather.</h1>
        <Link className="button" href="/shop">
          Explore the collection
        </Link>
      </div>
    );
  return (
    <div className="wrap cart-page">
      <div className="page-intro">
        <span className="eyebrow">ONE LAST LITTLE STEP</span>
        <h1>Where should the good go?</h1>
      </div>
      <div className="cart-layout">
        <form id="checkout" className="form-card" onSubmit={submit}>
          <h2>Delivery details</h2>
          <div className="form-grid">
            <label>
              Full name
              <input
                required
                name="name"
                autoComplete="name"
                minLength={2}
                placeholder="Your full name"
                defaultValue={user.user_metadata?.full_name || ""}
              />
            </label>
            <label>
              Email address
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                defaultValue={user.email}
              />
            </label>
            <label>
              Mobile number
              <input
                required
                name="phone"
                type="tel"
                autoComplete="tel"
                pattern="(\+92|0)3[0-9]{9}"
                placeholder="03001234567"
              />
            </label>
            <label>
              City
              <Dropdown
                name="city"
                required
                ariaLabel="City"
                placeholder="Select your city"
                defaultValue=""
                options={[
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
                ].map((city) => ({ value: city, label: city }))}
              />
            </label>
            <label className="full-width">
              Street address
              <textarea
                required
                name="address"
                autoComplete="street-address"
                minLength={10}
                placeholder="House number, street, area and a nearby landmark"
              />
            </label>
          </div>
          <h2 className="payment-title">Keep it simple.</h2>
          <div className="payment-option">
            <span className="radio-dot" />
            <div>
              <strong>Cash on delivery</strong>
              <p>Pay in cash when your order arrives.</p>
            </div>
            <ShieldCheck size={22} />
          </div>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
        </form>
        <aside className="order-summary">
          <h2>Your good finds</h2>
          {lines.map((i) => (
            <div key={i.product.id}>
              <span>
                {i.product.name} × {i.quantity}
              </span>
              <strong>{money(i.product.price * i.quantity)}</strong>
            </div>
          ))}
          <div>
            <span>Delivery</span>
            <strong>{subtotal >= 5000 ? "On us" : money(250)}</strong>
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{money(subtotal + (subtotal >= 5000 ? 0 : 250))}</strong>
          </div>
          <button form="checkout" className="button" disabled={busy}>
            {busy ? (
              <>
                <span className="spinner" /> Placing your order…
              </>
            ) : (
              "Place demo order"
            )}
            <ArrowUpRight size={18} />
          </button>
          <p className="demo-note">
            Demo store. No payment is taken and no products will be shipped.
          </p>
        </aside>
      </div>
    </div>
  );
}
