"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Package,
  Search,
  Heart,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  House,
  Grid2X2,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useStore } from "./provider";
import { categories } from "@/lib/data";
import { FilterButton } from "./filter-panel";
function HeaderSearch() {
  const router = useRouter();
  const urlQuery = useSearchParams().get("q") ?? "";
  const [query, setQuery] = useState(urlQuery);
  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);
  return (
    <form
      className="tech-search"
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/shop?q=" + encodeURIComponent(query));
      }}
    >
      <Search size={18} />
      <input
        aria-label="Search products"
        placeholder="Search watches, toys, audio and more"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <kbd>↵</kbd>
    </form>
  );
}
export function Header() {
  const { cart, user, wishlist } = useStore();
  const [menu, setMenu] = useState(false);
  const path = usePathname();
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  return (
    <>
      <div className="utility-bar">
        <div className="wrap">
          <span>Tech for your everyday.</span>
          <span>Free delivery on orders over Rs. 5,000</span>
          <Link href="/help">Help & support</Link>
          <span>
            PKR <ChevronDown size={10} />
          </span>
        </div>
      </div>
      <header className="tech-header">
        <div className="wrap tech-header-main">
          <button
            className="icon menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={21} /> : <Menu size={21} />}
          </button>
          <Link href="/" className="tech-logo" aria-label="Nayvilo home">
            nayvilo<span>.</span>
          </Link>
          <Suspense
            fallback={
              <div className="header-search-row">
                <form className="tech-search">
                  <Search size={18} />
                  <input
                    aria-label="Search products"
                    placeholder="Search watches, toys, audio and more"
                    readOnly
                  />
                </form>
              </div>
            }
          >
            <div className="header-search-row">
              <HeaderSearch />
              <FilterButton />
            </div>
          </Suspense>
          <div className="tech-header-actions">
            <Link
              href={user ? "/account" : "/login"}
              className="header-account"
            >
              <UserRound size={21} />
              <span>
                <small>{user ? "Welcome back" : "Welcome"}</small>
                {user ? "My account" : "Sign in"}
              </span>
            </Link>
            <Link
              className="icon header-saved"
              href="/wishlist"
              aria-label="Wishlist"
            >
              <Heart size={21} />
              {wishlist.length > 0 && <i>{wishlist.length}</i>}
            </Link>
            <Link
              className="icon header-cart"
              href="/cart"
              aria-label={`Shopping bag, ${count} items`}
            >
              <ShoppingBag size={21} />
              <i>{count}</i>
            </Link>
          </div>
        </div>
        <nav className="wrap tech-nav">
          <Link href="/shop" className="all-products">
            <Grid2X2 size={15} />
            All products
          </Link>
          {categories
            .filter((c) => c !== "All")
            .map((c) => (
              <Link key={c} href={"/shop?category=" + encodeURIComponent(c)}>
                {c}
              </Link>
            ))}
          <Link className="deals-nav" href="/shop?sort=sale">
            Deals <span />
          </Link>
        </nav>
        {menu && (
          <nav className="tech-mobile-menu" onClick={() => setMenu(false)}>
            <Link href="/shop">All products</Link>
            {categories
              .filter((c) => c !== "All")
              .map((c) => (
                <Link key={c} href={"/shop?category=" + encodeURIComponent(c)}>
                  {c}
                </Link>
              ))}
            <Link href="/account">My account</Link>
            <Link href="/admin">Admin dashboard</Link>
          </nav>
        )}
      </header>
      <nav className="mobile-bottom" aria-label="Mobile navigation">
        <Link href="/" className={path === "/" ? "active" : ""}>
          <House size={19} />
          Home
        </Link>
        <Link href="/shop" className={path === "/shop" ? "active" : ""}>
          <Grid2X2 size={19} />
          Shop
        </Link>
        <Link href="/cart" className={path === "/cart" ? "active" : ""} aria-label={`Cart, ${count} items`}>
          <span className="mobile-cart-icon"><ShoppingBag size={19} />{count > 0 && <i>{count}</i>}</span>
          Cart
        </Link>
        <Link href="/orders" className={path === "/orders" ? "active" : ""}>
          <Package size={19} />
          Orders
        </Link>
        <Link href="/account" className={path === "/account" ? "active" : ""}>
          <UserRound size={19} />
          Account
        </Link>
      </nav>
    </>
  );
}
