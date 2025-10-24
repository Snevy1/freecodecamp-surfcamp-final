import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "pleasant-miracle-31b4db12d1.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
