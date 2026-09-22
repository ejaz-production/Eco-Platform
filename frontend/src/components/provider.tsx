"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/lib/data";
type CartLine = { product: Product; quantity: number };
type Context = {
  cart: CartLine[];
  wishlist: string[];
  user: User | null;
  authReady: boolean;
  add: (p: Product, q?: number) => void;
  quantity: (id: string, q: number) => void;
  clear: () => void;
  wish: (id: string) => void;
  toast: (s: string) => void;
};
const Store = createContext<Context>(null!);
export const useStore = () => useContext(Store);
export function Provider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]),
    [wishlist, setWishlist] = useState<string[]>([]),
    [user, setUser] = useState<User | null>(null),
    [authReady, setAuthReady] = useState(false),
    [ready, setReady] = useState(false),
    [notice, setNotice] = useState("");
  useEffect(() => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("saya-tech-cart") || "[]",
      );
      const savedWishlist = JSON.parse(
        localStorage.getItem("saya-tech-wishlist") || "[]",
      );
      if (Array.isArray(savedCart))
        setCart(
          savedCart.filter(
            (i) =>
              i?.product?.id &&
              typeof i.product.name === "string" &&
              Number.isFinite(i.product.price) &&
              Number.isInteger(i.quantity) &&
              i.quantity > 0 &&
              i.quantity <= 10,
          ),
        );
      if (Array.isArray(savedWishlist))
        setWishlist(savedWishlist.filter((id) => typeof id === "string"));
    } catch {}
    setReady(true);
    supabase.auth
      .getSession()
      .then(({ data }) => {
        setUser(data.session?.user || null);
        setAuthReady(true);
      })
      .catch(() => setAuthReady(true));
    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
      setAuthReady(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem("saya-tech-cart", JSON.stringify(cart));
        localStorage.setItem("saya-tech-wishlist", JSON.stringify(wishlist));
      } catch {
        /* The shopping session still works when storage is unavailable. */
      }
    }
  }, [cart, wishlist, ready]);
  useEffect(() => {
    if (notice) {
      const t = setTimeout(() => setNotice(""), 3500);
      return () => clearTimeout(t);
    }
  }, [notice]);
  const toast = useCallback((s: string) => setNotice(s), []);
  return (
    <Store.Provider
      value={{
        cart,
        wishlist,
        user,
        authReady,
        toast,
        add: (product, q = 1) => {
          setCart((c) => {
            const existing = c.find((i) => i.product.id === product.id);
            return existing
              ? c.map((i) =>
                  i.product.id === product.id
                    ? {
                        ...i,
                        quantity: Math.min(i.quantity + q, 10, product.stock),
                      }
                    : i,
                )
              : [...c, { product, quantity: Math.min(q, product.stock) }];
          });
          toast(`${product.name} added to your bag`);
        },
        quantity: (id, q) =>
          setCart((c) =>
            q <= 0
              ? c.filter((i) => i.product.id !== id)
              : c.map((i) =>
                  i.product.id === id
                    ? { ...i, quantity: Math.min(q, 10, i.product.stock) }
                    : i,
                ),
          ),
        clear: () => setCart([]),
        wish: (id) =>
          setWishlist((w) =>
            w.includes(id) ? w.filter((x) => x !== id) : [...w, id],
          ),
      }}
    >
      {children}
      {notice && (
        <div className="toast" role="status">
          <span>✓</span>
          {notice}
          <button
            aria-label="Dismiss notification"
            onClick={() => setNotice("")}
          >
            ×
          </button>
        </div>
      )}
    </Store.Provider>
  );
}
