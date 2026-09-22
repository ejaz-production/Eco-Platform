import type { Metadata } from "next";
import "./globals.css";
import "./tech.css";
import "./commerce.css";
import "./admin.css";
import { Provider } from "@/components/provider";
import { SiteShell } from "@/components/site-shell";
export const metadata: Metadata = {
  title: { default: "Nayvilo — Good tech. Great days.", template: "%s | Nayvilo" },
  description:
    "Thoughtfully selected smartphones, laptops, audio and everyday tech. Discover your next favourite, with delivery across Pakistan and cash on delivery.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Provider>
          <SiteShell>{children}</SiteShell>
        </Provider>
      </body>
    </html>
  );
}


