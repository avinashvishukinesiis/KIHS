import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

export default nextConfig;
