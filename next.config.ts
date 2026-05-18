import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "www.pollockcompany.com" },
      { protocol: "https", hostname: "eleks.com" },
      { protocol: "https", hostname: "albarqsmartsystems.com" },
      { protocol: "https", hostname: "vizito.eu" },
      { protocol: "https", hostname: "eu-images.contentstack.com" },
      { protocol: "https", hostname: "speedmax.my" },
    ],
  },
};

export default nextConfig;
