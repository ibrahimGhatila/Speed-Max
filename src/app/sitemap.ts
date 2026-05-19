import type { MetadataRoute } from "next";
import { services } from "@/lib/site";

const BASE_URL = "https://www.speedmax.my";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/products`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "yearly" as const },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/products/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((r) => ({
    ...r,
    lastModified: now,
  }));
}
