import type { MetadataRoute } from "next";

const BASE_URL = "https://www.speedmax.my";

// Single-page site — only the root URL is canonical.
// Inner pages exist as content stubs but aren't surfaced to crawlers.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
