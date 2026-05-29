import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";
import { casesFull } from "@/lib/cases-full";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/about", "/services", "/individuals", "/cases", "/media", "/contacts"];

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

  const cases = casesFull.map((c) => ({
    url: `${site.url}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const en = staticPaths.map((p) => ({
    url: `${site.url}/en${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 0.9 : 0.6,
  }));

  return [...ru, ...cases, ...en];
}
