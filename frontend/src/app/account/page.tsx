"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ShoppingBag,
  Heart,
  MapPin,
  UserRound,
  LogOut,
  ArrowUpRight,
  Package,
  Check,
  Truck,
} from "lucide-react";
import { useStore } from "@/components/provider";
import { api, supabase } from "@/lib/supabase";
import { demoOrders, type Order, money, photo } from "@/lib/data";
export default function Account() {
  const { user, authReady, wishlist, toast } = useStore(),
    [tab, setTab] = useState("Overview"),
    [orders, setOrders] = useState<Order[]>([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [demo, setDemo] = useState(false);
  useEffect(() => {
    setDemo(new URLSearchParams(location.search).get("demo") === "1");
  }, []);
  useEffect(() => {
    if (!authReady) return;
    if (user) {
      api<Order[]>("/orders")
        .then(setOrders)
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    } else {
      setOrders(demoOrders);
      setLoading(false);
    }
  }, [user, authReady]);
  if (!authReady)
    return (
      <div className="empty">
        <span className="spinner" />
      </div>
    );
  if (!user && !demo)
    return (
      <div className="empty">
        <UserRound size={40} />
        <h1>Your Nayvilo account.</h1>
        <p>Sign in to see your orders, saved finds and account details.</p>
        <Link href="/login" className="button">
          Sign in <ArrowUpRight size={18} />
        </Link>
        <button className="text-link" onClick={() => setDemo(true)}>
          Explore demo dashboard
        </button>
      </div>
    );
  const name = user?.user_metadata?.full_name || "Ayesha Khan";
  return (
    <div className="dashboard wrap">
      {!user && (
        <div className="demo-banner">
          ✳ You're exploring a demo account. These orders and details are
          samples.<Link href="/login">Sign in to your account ↗</Link>
        </div>
      )}
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div className="profile-avatar">{name.slice(0, 1)}</div>
          <h3>{name}</h3>
          <p>{user?.email || "ayesha@example.com"}</p>
          {[
            { name: "Overview", icon: UserRound },
            { name: "My orders", icon: ShoppingBag },
            { name: "Saved finds", icon: Heart },
            { name: "Addresses", icon: MapPin },
            { name: "Account settings", icon: UserRound },
          ].map((n) => (
            <button
              key={n.name}
              onClick={() =>
                n.name === "Saved finds"
                  ? location.assign("/wishlist")
                  : setTab(n.name)
              }
              className={tab === n.name ? "selected" : ""}
            >
              <n.icon size={18} />
              {n.name}
            </button>
          ))}
          {user && (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                location.assign("/");
              }}
            >
              <LogOut size={18} />
              Sign out
            </button>
          )}
          <Link href="/shop" className="sidebar-promo">
            Find your next upgrade.
            <ArrowUpRight size={20} />
            <span>Explore your next favourite</span>
          </Link>
        </aside>
        <div className="dashboard-content">
          <span className="eyebrow">YOUR EVERYDAY, ALL TOGETHER</span>
          <h1>
            {tab === "Overview"
              ? `Good to see you, ${name.split(" ")[0]}.`
              : tab + "."}
          </h1>
          <p className="muted">
            {tab === "Overview"
              ? "Track your orders and manage your account."
              : "Everything you need, right here."}
          </p>
          {(tab === "Overview" || tab === "My orders") && (
            <>
              {tab === "Overview" && (
                <div className="stat-grid">
                  <div>
                    <ShoppingBag size={20} />
                    <span>Total orders</span>
                    <strong>{orders.length}</strong>
                  </div>
                  <div>
                    <Truck size={20} />
                    <span>On the way</span>
                    <strong>
                      {orders.filter((o) => o.status === "Shipped").length}
                    </strong>
                  </div>
                  <div>
                    <Heart size={20} />
                    <span>Saved finds</span>
                    <strong>{wishlist.length}</strong>
                  </div>
                </div>
              )}
              <div className="section-heading dashboard-heading">
                <h2>
                  {tab === "Overview"
                    ? "Your recent orders"
                    : "All your orders"}
                </h2>
                <span>{orders.length} orders</span>
              </div>
              {loading ? (
                <div className="skeleton skeleton-card" />
              ) : error ? (
                <p className="form-error">{error}</p>
              ) : !orders.length ? (
                <div className="empty">
                  <Package size={35} />
                  <h2>No orders yet.</h2>
                  <Link className="button" href="/shop">
                    Start exploring
                  </Link>
                </div>
              ) : (
                orders.map((o) => (
                  <div className="order-card" key={o.id}>
                    <div className="order-card-heading">
                      <strong>{o.id}</strong>
                      <span>
                        {new Date(o.createdAt).toLocaleDateString("en-PK", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className={"status " + o.status.toLowerCase()}>
                        {o.status}
                      </span>
                    </div>
                    {o.items.map((i) => (
                      <div className="order-product" key={i.id}>
                        <div className="order-thumb">
                          <Image
                            src={photo(i.image, 160)}
                            alt={i.name}
                            fill
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <h3>{i.name}</h3>
                          <p>Quantity: {i.quantity} · Cash on delivery</p>
                        </div>
                        <strong>{money(i.price * i.quantity)}</strong>
                      </div>
                    ))}
                    <div className="order-card-footer">
                      <span>
                        <MapPin size={14} /> {o.customer.city}
                      </span>
                      <strong>Total {money(o.total)}</strong>
                    </div>
                    {o.status !== "Cancelled" && (
                      <div className="tracking-steps">
                        {["Confirmed", "Packed", "Shipped", "Delivered"].map(
                          (s, i) => (
                            <span
                              className={
                                i <=
                                [
                                  "Confirmed",
                                  "Packed",
                                  "Shipped",
                                  "Delivered",
                                ].indexOf(o.status)
                                  ? "complete"
                                  : ""
                              }
                              key={s}
                            >
                              <i>
                                <Check size={11} />
                              </i>
                              {s}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}
            </>
          )}
          {tab === "Addresses" && (
            <div className="form-card">
              <h2>Delivery addresses</h2>
              {orders.length ? (
                Array.from(
                  new Map(
                    orders.map((o) => [o.customer.address, o.customer]),
                  ).values(),
                ).map((c) => (
                  <div className="address-card" key={c.address}>
                    <MapPin size={22} />
                    <div>
                      <strong>{c.name}</strong>
                      <p>
                        {c.address}
                        <br />
                        {c.city}
                        <br />
                        {c.phone}
                      </p>
                      <span className="muted">From your order history</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>
                  Your delivery addresses appear here after your first order.
                  You can enter a new address at checkout.
                </p>
              )}
            </div>
          )}
          {tab === "Account settings" && (
            <form
              className="form-card"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!user) {
                  toast("Demo profile preview. Sign in to save changes.");
                  return;
                }
                const f = new FormData(e.currentTarget);
                const { error } = await supabase.auth.updateUser({
                  data: { full_name: f.get("name") },
                });
                toast(error ? error.message : "Your profile is updated.");
              }}
            >
              <h2>Profile details</h2>
              <label>
                Full name
                <input name="name" required minLength={2} defaultValue={name} />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  disabled
                  value={user?.email || "ayesha@example.com"}
                />
              </label>
              <button className="button">
                Save changes <ArrowUpRight size={17} />
              </button>
              <Link className="text-link" href="/login">
                Reset your password
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
