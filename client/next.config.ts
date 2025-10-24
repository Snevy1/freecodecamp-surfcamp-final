import type { NextConfig } from "next";

const STRAPI_HOSTNAME =
  process.env.NEXT_PUBLIC_STRAPI_DOMAIN?.replace(/^https?:\/\//, "") ||
  "localhost";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV === "development" ? "http" : "https",
        hostname: STRAPI_HOSTNAME,
        pathname: "/**",
      },
    ],
  },
};



export default nextConfig;
