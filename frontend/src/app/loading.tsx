export default function Loading() {
  return (
    <div
      className="wrap loading-page"
      aria-busy="true"
      aria-label="Loading your everyday finds"
    >
      <div className="loader-brand">
        nayvilo<span>✳</span>
      </div>
      <div className="skeleton skeleton-hero" />
      <div className="product-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="skeleton skeleton-card" />
            <div className="skeleton skeleton-line" />
            <div className="skeleton skeleton-line short" />
          </div>
        ))}
      </div>
    </div>
  );
}
