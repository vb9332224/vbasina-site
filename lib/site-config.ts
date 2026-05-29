export const site = {
  name: "BGM Consulting",
  legalName: "ООО «Басина и партнёры»",
  legalReg: "85.110.1476680",
  country: "Республика Армения",
  domain: "vbasina.com",
  url: "https://vbasina.com",
  email: "info@vbasina.com",
  telegram: "basina_violetta",
  instagram: "basina_violetta",
  defaultLocale: "ru",
  founder: {
    name: "Виолетта Басина",
    fullName: "Виолетта Аркадьевна Басина",
    titleRu: "Основатель BGM Consulting",
    titleEn: "Founder of BGM Consulting",
  },
} as const;

export const nav = [
  { href: "/about", label: "О компании" },
  { href: "/about#partners", label: "Партнёры" },
  { href: "/services", label: "Услуги" },
  { href: "/individuals", label: "Физлицам" },
  { href: "/media", label: "О нас пишут" },
  { href: "/awards", label: "Наши награды" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const ctaPrimaryLabel = "Стратегическая сессия →";
export const ctaPrimaryHref = "/contacts#form";

/** Telegram-бот @prland1_bot — единственный источник правды для ссылок. */
export const telegramBotUrl = "https://t.me/prland1_bot";
