import Link from "next/link";
import { ChevronRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="tech-footer">
      <div className="wrap tech-footer-main">
        <div>
          <Link className="tech-logo" href="/">
            nayvilo<span>.</span>
          </Link>
          <p>
            Good tech. No complications.
            <br />
            Your next upgrade starts here.
          </p>
          <span>Pakistan · English · PKR</span>
        </div>
        <div>
          <h4>Shop</h4>
          <Link href="/shop?category=Smartwatches">Smartwatches</Link>
          <Link href="/shop?category=Toys">Toys</Link>
          <Link href="/shop?category=Audio">Audio</Link>
          <Link href="/shop?category=Mobile%20Accessories">Mobile Accessories</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link href="/help">Delivery & returns</Link>
          <Link href="/account">Track your order</Link>
          <Link href="/help">Help centre</Link>
          <Link href="/login">My account</Link>
        </div>
        <div>
          <h4>Your store</h4>
          <Link href="/admin">
            Admin dashboard <ChevronRight size={12} />
          </Link>
          <Link href="/account?demo=1">
            Customer dashboard <ChevronRight size={12} />
          </Link>
          <p className="footer-demo">
            Demo store. Products, specifications and prices are illustrative.
            {" "}We measure public page visits and clicks to improve the store. No form entries are recorded; Do Not Track is respected.
          </p>
        </div>
      </div>
      <div className="wrap tech-footer-bottom">
        <span>© {new Date().getFullYear()} Nayvilo. All rights reserved.</span>
        <span>
          Cash on delivery <b>COD</b>
        </span>
      </div>
    </footer>
  );
}
