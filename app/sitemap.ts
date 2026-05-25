import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";
import { casesFull } from "@/lib/cases-full";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/about", "/experience", "/services", "/cases", "/media", "/contacts"];

  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...casesFull.map((c) => ({
      url: `${site.url}/cases/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
