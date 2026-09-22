"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ArrowUpRight,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useStore } from "@/components/provider";
import { money, photo } from "@/lib/data";
export default function Cart() {
  const { cart, quantity } = useStore();
  const subtotal = cart.reduce((s, i) => s + i.product.price * i.quantity, 0),
    shipping = subtotal >= 5000 ? 0 : 250;
  return (
    <div className="wrap cart-page">
      <div className="page-intro">
        <span className="eyebrow">A FEW VERY GOOD CHOICES</span>
        <h1>Your everyday bag.</h1>
        <p>
          {cart.length
            ? `${cart.reduce((s, i) => s + i.quantity, 0)} little reasons to look forward to delivery day.`
            : "Your next favourite is waiting to be found."}
        </p>
      </div>
      {!cart.length ? (
        <div className="empty">
          <ShoppingBag size={44} strokeWidth={1} />
          <h2>Room for something good.</h2>
          <p>Explore our collection and make this bag your own.</p>
          <Link href="/shop" className="button">
            Find your upgrade <ArrowUpRight size={17} />
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div>
            <div className="delivery-progress">
              <Truck size={19} />
              <span>
                {subtotal >= 5000
                  ? "Lovely! Your delivery is on us."
                  : `You're ${money(5000 - subtotal)} away from free delivery.`}
              </span>
              <div>
                <i
                  style={{
                    width: Math.min(100, (subtotal / 5000) * 100) + "%",
                  }}
                />
              </div>
            </div>
            {cart.map(({ product: p, quantity: q }) => (
              <article className="cart-item" key={p.id}>
                <Link href={"/product/" + p.id} className="cart-image">
                  <Image
                    src={photo(p.image, 300)}
                    fill
                    sizes="120px"
                    alt={p.name}
                  />
                </Link>
                <div>
                  <span className="eyebrow">{p.category}</span>
                  <Link href={"/product/" + p.id}>
                    <h3>{p.name}</h3>
                  </Link>
                  <p>{p.color}</p>
                  <div className="quantity">
                    <button
                      aria-label={"Decrease " + p.name}
                      onClick={() => quantity(p.id, q - 1)}
                    >
                      <Minus size={13} />
                    </button>
                    <span>{q}</span>
                    <button
                      aria-label={"Increase " + p.name}
                      onClick={() => quantity(p.id, q + 1)}
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
                <div className="cart-item-end">
                  <strong>{money(p.price * q)}</strong>
                  <button
                    aria-label={"Remove " + p.name}
                    onClick={() => quantity(p.id, 0)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </article>
            ))}
            <Link className="text-link" href="/shop">
              ← A few more good things
            </Link>
          </div>
          <aside className="order-summary">
            <span className="eyebrow">THE HAPPY TOTAL</span>
            <h2>Order summary</h2>
            <div>
              <span>Subtotal</span>
              <strong>{money(subtotal)}</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>{shipping ? money(shipping) : "On us"}</strong>
            </div>
            <div className="total">
              <span>Total</span>
              <strong>{money(subtotal + shipping)}</strong>
            </div>
            <p>All prices in PKR. No surprise charges.</p>
            <Link className="button" href="/checkout">
              Continue to checkout <ArrowUpRight size={18} />
            </Link>
            <small>Pay when your good things arrive.</small>
            <span className="demo-note">
              Demo catalog · No real payment is collected.
            </span>
          </aside>
        </div>
      )}
    </div>
  );
}
