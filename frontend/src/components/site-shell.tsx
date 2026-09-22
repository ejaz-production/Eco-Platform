"use client";
import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import { EventTracker } from "./event-tracker";
export function SiteShell({ children }: { children: React.ReactNode }) {
  const admin = usePathname().startsWith("/admin");
  return <><a href="#main" className="skip-link">Skip to content</a>{!admin && <Header />}<main id="main">{children}</main>{!admin && <><Footer /><EventTracker /></>}</>;
}
