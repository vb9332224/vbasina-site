export type Locale = "ru" | "en";

export const locales: Locale[] = ["ru", "en"];
export const defaultLocale: Locale = "ru";

export const localeLabels: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
};

/**
 * Префикс пути для языка. ru = "" (корень), en = "/en".
 * /about → русский, /en/about → английский.
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return `/en${clean === "/" ? "" : clean}`;
  return clean === "" ? "/" : clean;
}
