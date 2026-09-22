"use client";
import { useState } from "react";
import { useStore } from "./provider";
import { supabase } from "@/lib/supabase";
export function AdminSettings() {
  const { user } = useStore();
  const [busy, setBusy] = useState(false), [message, setMessage] = useState(""), [error, setError] = useState("");
  async function change(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget, fields = new FormData(form);
    setError(""); setMessage("");
    const password = String(fields.get("newPassword"));
    if (password !== fields.get("confirmPassword")) { setError("The new passwords do not match."); return; }
    if (!user?.email) return;
    setBusy(true);
    try {
      const { error: verifyError } = await supabase.auth.signInWithPassword({ email: user.email, password: String(fields.get("currentPassword")) });
      if (verifyError) throw Error("Current password is incorrect. Please try again.");
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) throw updateError;
      form.reset(); setMessage("Your password has been changed.");
    } catch(e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  return <section className="event-card admin-settings"><h2>Account & security</h2><p className="muted">Signed in as {user?.email}</p><h3>Change password</h3><form onSubmit={change}><label>Current password<input type="password" name="currentPassword" autoComplete="current-password" required/></label><label>New password<input type="password" name="newPassword" autoComplete="new-password" minLength={8} required/></label><label>Confirm new password<input type="password" name="confirmPassword" autoComplete="new-password" minLength={8} required/></label>{error && <p role="alert" className="form-error">{error}</p>}{message && <p role="status">{message}</p>}<button className="button" disabled={busy}>{busy?"Updating…":"Change password"}</button></form></section>;
}
