import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://elenii-shepherd.com.ng";
  return ["", "/about", "/work", "/gallery", "/opportunities", "/prototype", "/contact"].map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/prototype" ? 0.9 : 0.8,
  }));
}
