"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, localeLabels, locales } from "@/lib/i18n/types";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";

  // Strip /en prefix to get the canonical path
  const canonical = pathname.startsWith("/en")
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname;

  return (
    <div className="flex items-center gap-1 text-xs tracking-[0.16em]">
      {locales.map((l) => {
        const href = l === "en" ? `/en${canonical === "/" ? "" : canonical}` : canonical;
        const active = l === locale;
        return (
          <Link
            key={l}
            href={href}
            className={
              active
                ? "px-2 py-1 text-gold-500 font-semibold"
                : "px-2 py-1 text-cream-100/60 hover:text-gold-300 transition-colors"
            }
            aria-current={active ? "page" : undefined}
          >
            {localeLabels[l]}
          </Link>
        );
      })}
    </div>
  );
}
