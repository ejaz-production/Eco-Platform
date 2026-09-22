"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="empty">
      <span className="big-symbol">✳</span>
      <h1>A little pause.</h1>
      <p>
        We couldn't load the store. Make sure the backend is running, then try
        again.
      </p>
      <button className="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
