"use client";
import { AdminSettings } from "@/components/admin-settings";
import { AdminEvents } from "@/components/admin-events";
import { usePathname, useRouter } from "next/navigation";
import { ProductEditor } from "@/components/product-editor";
import { BannerEditor } from "@/components/banner-editor";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  ImageIcon,
  ArrowUpRight,
  TrendingUp,
  Users,
  Search,
  Save,
  Plus,
  X,
  ShieldCheck,
  Activity,
  Menu,
  Settings,
  LogOut,
} from "lucide-react";
import { useStore } from "@/components/provider";
import { Dropdown } from "@/components/dropdown";
import { supabase, api } from "@/lib/supabase";
import {
  type Product,
  type Order,
  type Banner,
  money,
  photo,
} from "@/lib/data";
export default function Admin() {
  const { user, authReady, toast } = useStore(),
    [menuOpen, setMenuOpen] = useState(false),
    [products, setProducts] = useState<Product[]>([]),
    [orders, setOrders] = useState<Order[]>([]),
    [banners, setBanners] = useState<Banner[]>([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [query, setQuery] = useState(""),
    [editing, setEditing] = useState<Product | null>(null),
    [busy, setBusy] = useState(false);
  const pathname = usePathname(), router = useRouter();
  const sections: Record<string, string> = { Overview: "/admin", Orders: "/admin/orders", Products: "/admin/products", "Banners & content": "/admin/content", Customers: "/admin/customers", Events: "/admin/events", Settings: "/admin/settings" };
  const tab = Object.keys(sections).find(key => sections[key] === pathname) || "Overview";
  function setTab(name: string) { router.push(sections[name]); setMenuOpen(false); }
  const isAdmin = user?.app_metadata?.role === "admin";
  useEffect(() => {
    if (!authReady) return;
    setLoading(true);
    if (isAdmin)
      api<{ products: Product[]; orders: Order[]; banners: Banner[] }>("/admin")
        .then((s) => {
          setProducts(s.products);
          setOrders(s.orders);
          setBanners(s.banners);
        })
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    else { router.replace("/admin/login"); }
  }, [authReady, isAdmin, router]);
  async function updateOrder(id: string, status: string) {
    try {
      if (isAdmin)
        await api("/admin/orders/" + id, {
          method: "PATCH",
          body: JSON.stringify({ status }),
        });
      setOrders((os) => os.map((o) => (o.id === id ? { ...o, status } : o)));
      toast(
        isAdmin
          ? "Order status updated."
          : "Demo order updated for this preview.",
      );
    } catch (e) {
      toast((e as Error).message);
    }
  }
  const revenue = orders
    .filter((o) => o.status !== "Cancelled")
    .reduce((s, o) => s + o.total, 0);
  if (!authReady || !isAdmin) return <div className="admin-auth-screen"><p role="status">Checking administrator access…</p></div>;
  return (
    <div data-section={tab} className={"dashboard admin admin-panel" + (menuOpen ? " admin-menu-open" : "")}>
      <div className="admin-mobile-header"><strong>nayvilo<span>.</span> <small>Admin</small></strong><button aria-label="Toggle admin navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Menu size={22}/></button></div>
      <div className="demo-banner">
        <ShieldCheck size={16} />
        {isAdmin
          ? "Admin workspace · Changes update your store."
          : "Demo admin workspace · Explore freely. Changes stay in this preview."}
        <Link href={isAdmin ? "/" : "/login?next=%2Fadmin"}>
          {isAdmin ? "View storefront" : "Sign in as administrator"} ↗
        </Link>
      </div>
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar" aria-label="Admin navigation">
          <div className="admin-brand">
            <span className="logo">
              nayvilo<span>.</span>
            </span>
            <small>STORE ADMIN</small>
          </div>
          {[
            { name: "Overview", icon: LayoutDashboard },
            { name: "Orders", icon: ShoppingBag },
            { name: "Products", icon: Package },
            { name: "Banners & content", icon: ImageIcon },
            { name: "Customers", icon: Users },
            { name: "Events", icon: Activity },
            { name: "Settings", icon: Settings },
          ].map((n) => (
            <button
              key={n.name}
              className={tab === n.name ? "selected" : ""}
              aria-current={tab === n.name ? "page" : undefined}
              onClick={() => {
                setTab(n.name);
                setQuery("");
              }}
            >
              <n.icon size={18} />
              {n.name}
              {n.name === "Orders" && (
                <span className="sidebar-count">{orders.length}</span>
              )}
            </button>
          ))}
          <button onClick={async () => { await supabase.auth.signOut(); router.replace("/admin/login"); }}><LogOut size={18}/>Sign out</button>
          <div className="sidebar-store">
            <span className="live-dot" />{" "}
            {isAdmin ? "Store connected" : "Demo store"}
            <small>Pakistan · PKR</small>
            <Link href="/">
              Visit your store <ArrowUpRight size={14} />
            </Link>
          </div>
        </aside>
        <div className="dashboard-content">
          <div className="admin-title">
            <div>
              <span className="eyebrow">A GOOD DAY TO GROW</span>
              <h1>
                {tab === "Overview" ? "Your store, at a glance." : tab + "."}
              </h1>
              <p className="muted">
                {tab === "Overview"
                  ? "Sales, inventory and orders. Everything in one place."
                  : "Thoughtful control. Everything in its place."}
              </p>
            </div>
            <span className="date-pill">
              {new Date().toLocaleDateString("en-PK", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          {loading ? (
            <div className="skeleton skeleton-hero" />
          ) : (
            <>
              {tab === "Events" && <AdminEvents isAdmin={isAdmin} />}
              {tab === "Settings" && <AdminSettings />}
              {tab === "Overview" && (
                <>
                  <div className="stat-grid four">
                    <div>
                      <span>Order value</span>
                      <strong>{money(revenue)}</strong>
                      <small>
                        <TrendingUp size={13} />{" "}
                        {isAdmin ? "Current orders" : "Sample data"}
                      </small>
                    </div>
                    <div>
                      <span>Total orders</span>
                      <strong>{orders.length}</strong>
                      <small>
                        {orders.filter((o) => o.status === "Shipped").length} on
                        the way
                      </small>
                    </div>
                    <div>
                      <span>Products</span>
                      <strong>{products.length}</strong>
                      <small>
                        {products.filter((p) => p.stock < 20).length} with low
                        stock
                      </small>
                    </div>
                    <div>
                      <span>Customers</span>
                      <strong>
                        {new Set(orders.map((o) => o.customer.email)).size}
                      </strong>
                      <small>From placed orders</small>
                    </div>
                  </div>
                  <div className="analytics-grid">
                    <div className="chart-panel">
                      <div className="section-heading">
                        <h3>Order value by day</h3>
                        <span className="muted">Last 7 days</span>
                      </div>
                      <div className="bar-chart">
                        {Array.from({ length: 7 }, (_, i) => {
                          const d = new Date();
                          d.setDate(d.getDate() - 6 + i);
                          const amount = orders
                            .filter(
                              (o) =>
                                new Date(o.createdAt).toDateString() ===
                                  d.toDateString() && o.status !== "Cancelled",
                            )
                            .reduce((s, o) => s + o.total, 0);
                          return (
                            <div key={i}>
                              <span>{amount ? money(amount) : "—"}</span>
                              <i
                                style={{
                                  height:
                                    Math.max(
                                      3,
                                      (amount / Math.max(revenue, 1)) * 160,
                                    ) + "px",
                                }}
                              />
                              <small>
                                {d.toLocaleDateString("en", {
                                  weekday: "short",
                                })}
                              </small>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="admin-tip">
                      <span>✳</span>
                      <h3>
                        Make a good
                        <br />
                        first impression.
                      </h3>
                      <p>
                        A fresh homepage banner can give your store a whole new
                        feeling.
                      </p>
                      <button
                        className="text-link"
                        onClick={() => setTab("Banners & content")}
                      >
                        Refresh your banners <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </>
              )}
              {(tab === "Overview" || tab === "Orders") && (
                <section className="table-panel">
                  <div className="section-heading">
                    <h2>
                      {tab === "Overview" ? "Recent orders" : "All orders"}
                    </h2>
                    {tab === "Overview" ? (
                      <button
                        className="text-link"
                        onClick={() => setTab("Orders")}
                      >
                        View all <ArrowUpRight size={16} />
                      </button>
                    ) : (
                      <input
                        className="table-search"
                        aria-label="Search orders"
                        placeholder="Search order or customer"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Order</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders
                          .filter((o) =>
                            (o.id + o.customer.name)
                              .toLowerCase()
                              .includes(query.toLowerCase()),
                          )
                          .map((o) => (
                            <tr key={o.id}>
                              <td>
                                <strong>{o.id}</strong>
                              </td>
                              <td>
                                {o.customer.name}
                                <small>{o.customer.city}</small>
                              </td>
                              <td>
                                {new Date(o.createdAt).toLocaleDateString(
                                  "en-PK",
                                  { day: "numeric", month: "short" },
                                )}
                              </td>
                              <td>{money(o.total)}</td>
                              <td>
                                <Dropdown
                                  ariaLabel={"Status for " + o.id}
                                  disabled={o.status === "Cancelled"}
                                  value={o.status}
                                  onChange={(status) =>
                                    updateOrder(o.id, status)
                                  }
                                  className="status-select"
                                  options={[
                                    "Confirmed",
                                    "Packed",
                                    "Shipped",
                                    "Delivered",
                                    "Cancelled",
                                  ].map((status) => ({
                                    value: status,
                                    label: status,
                                  }))}
                                />
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {orders.length === 0 && (
                      <p className="empty">New orders will appear here.</p>
                    )}
                  </div>
                </section>
              )}
              {tab === "Products" && (
                <section className="table-panel">
                  <div className="section-heading">
                    <h2>
                      Your collection <small>({products.length})</small>
                    </h2>
                    <button
                      className="button small-button"
                      onClick={() =>
                        setEditing({
                          id: "",
                          name: "",
                          category: "Mobile Accessories",
                          price: 0,
                          oldPrice: 0,
                          stock: 1,
                          image: "",
                          color: "",
                          badge: "",
                          rating: 0,
                          description: "",
                          media: [],
                        })
                      }
                    >
                      <Plus size={16} />
                      Add product
                    </button>
                    <div className="search">
                      <Search size={16} />
                      <input
                        aria-label="Search products"
                        placeholder="Find a product"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products
                          .filter((p) =>
                            p.name.toLowerCase().includes(query.toLowerCase()),
                          )
                          .map((p) => (
                            <tr key={p.id}>
                              <td>
                                <div className="table-product">
                                  <Image
                                    src={photo(p.image, 100)}
                                    width={44}
                                    height={50}
                                    alt={p.name}
                                  />
                                  <strong>{p.name}</strong>
                                </div>
                              </td>
                              <td>{p.category}</td>
                              <td>{money(p.price)}</td>
                              <td>
                                <span
                                  className={
                                    "status " +
                                    (p.stock < 20 ? "low" : "delivered")
                                  }
                                >
                                  {p.stock} left
                                </span>
                              </td>
                              <td>
                                <button
                                  className="text-link"
                                  onClick={() => setEditing(p)}
                                >
                                  Edit ↗
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
              {tab === "Banners & content" && (
                <BannerEditor initial={banners} isAdmin={isAdmin} />
              )}
              {tab === "Customers" && (
                <section className="table-panel">
                  <div className="section-heading">
                    <h2>Your people</h2>
                    <span className="muted">From order history</span>
                  </div>
                  <div className="table-scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Customer</th>
                          <th>Email</th>
                          <th>City</th>
                          <th>Orders</th>
                          <th>Order value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from(
                          new Map(
                            orders.map((o) => [o.customer.email, o.customer]),
                          ).values(),
                        ).map((c) => (
                          <tr key={c.email}>
                            <td>
                              <strong>{c.name}</strong>
                            </td>
                            <td>{c.email}</td>
                            <td>{c.city}</td>
                            <td>
                              {
                                orders.filter(
                                  (o) => o.customer.email === c.email,
                                ).length
                              }
                            </td>
                            <td>
                              {money(
                                orders
                                  .filter((o) => o.customer.email === c.email)
                                  .reduce((s, o) => s + o.total, 0),
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>
      {editing && (
        <ProductEditor
          product={editing}
          isAdmin={isAdmin}
          onClose={() => setEditing(null)}
          onSave={(saved) => {
            setProducts((ps) =>
              ps.some((p) => p.id === saved.id)
                ? ps.map((p) => (p.id === saved.id ? saved : p))
                : [saved, ...ps],
            );
            setEditing(null);
            toast(
              isAdmin
                ? "Product saved."
                : "Demo product saved in this preview.",
            );
          }}
        />
      )}
    </div>
  );
}
