import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
      },
      {
        protocol: "https",
        hostname: "creativezink.co.ke",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
