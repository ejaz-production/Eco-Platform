"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
export default function Callback() {
  const [error, setError] = useState("");
  useEffect(() => {
    async function finish() {
      const params = new URLSearchParams(location.search),
        hash = new URLSearchParams(location.hash.slice(1));
      const failure =
        params.get("error_description") || hash.get("error_description");
      if (failure) {
        setError(failure);
        return;
      }
      const code = params.get("code");
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          setError(error.message);
          return;
        }
      }
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        setError("We could not complete sign-in. Please try again.");
        return;
      }
      const next = params.get("next");
      location.replace(
        next?.startsWith("/") && !next.startsWith("//") && !next.includes("\\")
          ? next
          : "/account",
      );
    }
    finish();
  }, []);
  return (
    <div className="empty">
      <h1>{error ? "A small sign-in hiccup." : "Making yourself at home…"}</h1>
      {error ? (
        <>
          <p role="alert">{error}</p>
          <Link className="button" href="/login">
            Back to sign in
          </Link>
        </>
      ) : (
        <span className="spinner" />
      )}
    </div>
  );
}
