import type { NextConfig } from "next";
const config: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL || "http://localhost:4100"}/api/:path*`,
      },
    ];
  },
};
export default config;
