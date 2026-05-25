import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 14400,
    qualities: [60, 75, 90],
  },
};

export default nextConfig;
