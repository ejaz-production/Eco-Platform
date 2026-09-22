import type { NextConfig } from "next";
const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/p76rvfxz/image/upload/**",
      },
    ],
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
