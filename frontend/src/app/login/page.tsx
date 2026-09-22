"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { photo } from "@/lib/data";
export default function Login() {
  const [mode, setMode] = useState<"login" | "signup" | "reset">("login"),
    [busy, setBusy] = useState(false),
    [message, setMessage] = useState(""),
    [error, setError] = useState(""),
    [show, setShow] = useState(false);
  const router = useRouter();
  function destination() {
    const value = new URLSearchParams(window.location.search).get("next");
    return value?.startsWith("/") &&
      !value.startsWith("//") &&
      !value.includes("\\")
      ? value
      : "/account";
  }
  async function google() {
    setBusy(true);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          window.location.origin +
          "/auth/callback?next=" +
          encodeURIComponent(destination()),
      },
    });
    if (error) {
      setError(error.message);
      setBusy(false);
    }
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    const f = new FormData(e.currentTarget),
      email = String(f.get("email")),
      password = String(f.get("password"));
    try {
      if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + "/auth/reset",
        });
        if (error) throw error;
        setMessage("Check your inbox for a password reset link.");
      } else if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: f.get("name") },
            emailRedirectTo: window.location.origin + "/auth/callback",
          },
        });
        if (error) throw error;
        if (data.session) router.push(destination());
        else
          setMessage("Check your email to confirm your account, then sign in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push(destination());
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="auth-layout wrap">
      <div className="auth-art">
        <Image
          src={photo("photo-1517336714731-489689fd1ca8", 1000)}
          alt="A slim laptop for your next project"
          fill
          priority
          sizes="50vw"
        />
        <div>
          <span className="eyebrow">YOUR NEXT UPGRADE STARTS HERE.</span>
          <h2>
            Good to
            <br />
            have you <em>here.</em>
          </h2>
          <p>Your orders, saved products and account. All in one place.</p>
        </div>
      </div>
      <div className="auth-form">
        <Link href="/" className="logo">
          nayvilo<span>.</span>
        </Link>
        <span className="eyebrow">YOUR EVERYDAY STARTS HERE</span>
        <h1>
          {mode === "login"
            ? "Welcome back."
            : mode === "signup"
              ? "Create your account."
              : "A fresh start."}
        </h1>
        <p>
          {mode === "login"
            ? "Sign in to track orders and save your favourite tech."
            : mode === "signup"
              ? "Create an account for faster checkout and order tracking."
              : "We’ll email you a link to reset your password."}
        </p>
        {mode !== "reset" && (
          <>
            <button className="google-button" onClick={google} disabled={busy}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.61 4.61 0 0 1-2 3.03v2.52h3.25c1.9-1.75 2.97-4.33 2.97-7.38Z"
                />
                <path
                  fill="#34A853"
                  d="M12 22c2.7 0 4.96-.9 6.63-2.43l-3.25-2.52c-.9.6-2.06.96-3.38.96-2.6 0-4.8-1.76-5.59-4.13H3.05v2.6A10 10 0 0 0 12 22Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.41 13.88A6 6 0 0 1 6.1 12c0-.65.11-1.29.31-1.88v-2.6H3.05A10 10 0 0 0 2 12c0 1.61.38 3.14 1.05 4.48l3.36-2.6Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.99c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.61 9.61 0 0 0 12 2a10 10 0 0 0-8.95 5.52l3.36 2.6A6 6 0 0 1 12 5.99Z"
                />
              </svg>
              Continue with Google
            </button>
            <div className="divider">
              <span>or continue with email</span>
            </div>
          </>
        )}
        <form onSubmit={submit}>
          {mode === "signup" && (
            <label>
              Your name
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="What should we call you?"
              />
            </label>
          )}
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          {mode !== "reset" && (
            <label>
              Password
              <div className="password-field">
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete={
                    mode === "signup" ? "new-password" : "current-password"
                  }
                  placeholder="At least 8 characters"
                />
                <button
                  type="button"
                  aria-label={show ? "Hide password" : "Show password"}
                  onClick={() => setShow(!show)}
                >
                  {show ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>
          )}
          {mode === "login" && (
            <button
              type="button"
              className="forgot"
              onClick={() => {
                setMode("reset");
                setError("");
              }}
            >
              Forgot password?
            </button>
          )}
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          {message && (
            <p className="form-success" role="status">
              {message}
            </p>
          )}
          <button className="button" disabled={busy}>
            {busy ? (
              <span className="spinner" />
            ) : mode === "login" ? (
              "Sign in"
            ) : mode === "signup" ? (
              "Create account"
            ) : (
              "Send reset link"
            )}
            <ArrowUpRight size={18} />
          </button>
        </form>
        <p className="switch-auth">
          {mode === "login" ? "New around here? " : "Already have an account? "}
          <button
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setError("");
              setMessage("");
            }}
          >
            {mode === "login" ? "Create an account" : "Sign in"}
          </button>
        </p>
        <div className="demo-links">
          <span>Just looking around?</span>
          <Link href="/account?demo=1">Preview user dashboard ↗</Link>
          <Link href="/admin">Preview admin dashboard ↗</Link>
        </div>
      </div>
    </div>
  );
}
