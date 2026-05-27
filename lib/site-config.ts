export const site = {
  name: "Basina & Partners",
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
    titleRu: "Основатель Basina & Partners",
    titleEn: "Founder of Basina & Partners",
  },
} as const;

export const nav = [
  { href: "/about", label: "О компании" },
  { href: "/about#partners", label: "Партнёры" },
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/media", label: "Публикации" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const ctaPrimaryLabel = "Стратегическая сессия →";
export const ctaPrimaryHref = "/contacts#form";
