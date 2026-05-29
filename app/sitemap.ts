import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/about", "/services", "/individuals", "/media", "/contacts"];

  const ru = staticPaths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
    alternates: {
      languages: {
        ru: `${site.url}${p}`,
        en: `${site.url}/en${p}`,
      },
    },
  }));

  const en = staticPaths.map((p) => ({
    url: `${site.url}/en${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 0.9 : 0.6,
  }));

  return [...ru, ...en];
}
