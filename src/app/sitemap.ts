import type { MetadataRoute } from "next";

const BASE_URL = "https://www.trenddeck.com.tr";

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
