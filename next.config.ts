import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://via.placeholder.com/150?text=User"),
      new URL("https://via.placeholder.com"),
    ],
  },
 
};

export default nextConfig;
