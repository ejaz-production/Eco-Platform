"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
export default function Reset() {
  const [message, setMessage] = useState(""),
    [done, setDone] = useState(false),
    [busy, setBusy] = useState(false);
  return (
    <div className="narrow-page">
      <span className="eyebrow">A FRESH START</span>
      <h1>Your new password.</h1>
      {done ? (
        <>
          <p>Password updated. You’re all set.</p>
          <Link className="button" href="/account">
            Your account
          </Link>
        </>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            const f = new FormData(e.currentTarget);
            const { error } = await supabase.auth.updateUser({
              password: String(f.get("password")),
            });
            setBusy(false);
            if (error) setMessage(error.message);
            else setDone(true);
          }}
        >
          <label>
            New password
            <input
              name="password"
              type="password"
              minLength={8}
              required
              autoComplete="new-password"
            />
          </label>
          {message && <p className="form-error">{message}</p>}
          <button className="button" disabled={busy}>
            {busy ? "Updating…" : "Update password"}
          </button>
        </form>
      )}
    </div>
  );
}
