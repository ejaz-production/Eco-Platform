"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { supabase, api } from "@/lib/supabase";
export default function AdminLogin() {
  const router = useRouter();
  const [busy, setBusy] = useState(false), [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setError("");
    const form = new FormData(e.currentTarget);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email: String(form.get("email")).trim(), password: String(form.get("password")) });
      if (error) throw error;
      if (data.user?.app_metadata?.role !== "admin") { await supabase.auth.signOut(); throw Error("This account does not have administrator access."); }
      await api("/admin");
      router.replace("/admin");
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  return <div className="admin-auth-screen"><section className="admin-auth-card"><Link className="logo" href="/">nayvilo<span>.</span></Link><ShieldCheck size={28}/><h1>Admin_Login</h1><p>Sign in to manage your store.</p><form onSubmit={submit}><label>Email<input name="email" type="email" autoComplete="username" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button></form><Link href="/">Back to storefront</Link></section></div>;
}
