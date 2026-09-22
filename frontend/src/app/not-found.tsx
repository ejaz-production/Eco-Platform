import Link from "next/link";
export default function NotFound() {
  return (
    <div className="empty">
      <span className="eyebrow">404 · A SMALL DETOUR</span>
      <h1>Let's find something good.</h1>
      <p>This page isn't here, but your next favourite might be.</p>
      <Link className="button" href="/shop">
        Back to the collection ↗
      </Link>
    </div>
  );
}
