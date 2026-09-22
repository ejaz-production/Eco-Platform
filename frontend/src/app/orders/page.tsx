"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Package, ArrowRight } from "lucide-react";
import { useStore } from "@/components/provider";
import { api } from "@/lib/supabase";
import { Order, money } from "@/lib/data";
export default function Orders() {
  const { user, authReady } = useStore();
  const [orders, setOrders] = useState<Order[]>([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!authReady || !user) return;
    let active = true;
    setLoading(true);
    setError("");
    api<Order[]>("/orders")
      .then((o) => {
        if (active) setOrders(o);
      })
      .catch((e) => {
        if (active) setError(e.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [user, authReady, attempt]);
  if (!authReady)
    return (
      <div className="wrap section">
        <div className="skeleton skeleton-hero" />
      </div>
    );
  if (!user)
    return (
      <div className="empty">
        <Package size={38} />
        <h1>Your orders, in one place.</h1>
        <p>Sign in to track deliveries and see your order history.</p>
        <Link className="button" href="/login?next=%2Forders">
          Sign in to see orders <ArrowRight size={17} />
        </Link>
      </div>
    );
  return (
    <section className="wrap orders-page">
      <div className="page-intro">
        <span className="eyebrow">YOUR PURCHASES</span>
        <h1>My orders</h1>
        <p>Updates from checkout to your doorstep.</p>
      </div>
      {loading ? (
        <div className="skeleton skeleton-hero" />
      ) : error ? (
        <div role="alert">
          <p>{error}</p>
          <button className="button" onClick={() => setAttempt((a) => a + 1)}>
            Try again
          </button>
        </div>
      ) : orders.length ? (
        orders.map((order) => (
          <article className="order-history-card" key={order.id}>
            <div className="section-heading">
              <div>
                <strong>{order.id}</strong>
                <p>{new Date(order.createdAt).toLocaleDateString("en-PK")}</p>
              </div>
              <span className="status">{order.status}</span>
            </div>
            {order.items.map((item) => (
              <div className="order-line" key={item.id}>
                <Link href={"/product/" + item.id}>
                  {item.name} × {item.quantity}
                </Link>
                <strong>{money(item.price * item.quantity)}</strong>
              </div>
            ))}
            <div className="order-line">
              <span>Cash on delivery · {order.customer.city}</span>
              <strong>{money(order.total)}</strong>
            </div>
            <div
              className="order-progress"
              aria-label={"Order status: " + order.status}
            >
              {order.status === "Cancelled" ? (
                <span>Order cancelled</span>
              ) : (
                ["Confirmed", "Packed", "Shipped", "Delivered"].map(
                  (step, i) => (
                    <span
                      key={step}
                      className={
                        i <=
                        ["Confirmed", "Packed", "Shipped", "Delivered"].indexOf(
                          order.status,
                        )
                          ? "complete"
                          : ""
                      }
                    >
                      {step}
                    </span>
                  ),
                )
              )}
            </div>
          </article>
        ))
      ) : (
        <div className="empty">
          <Package size={38} />
          <h2>No orders yet</h2>
          <p>Your purchases will appear here.</p>
          <Link className="button" href="/shop">
            Start shopping
          </Link>
        </div>
      )}
    </section>
  );
}
