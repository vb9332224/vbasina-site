import { Locale } from "@/lib/i18n/types";

export type ServiceShort = {
  id: number;
  slug: string;
  title: { ru: string; en: string };
  term: { ru: string; en: string };
  price: { ru: string; en: string };
  short: { ru: string; en: string };
  flagship?: boolean;
};

export const servicesShort: ServiceShort[] = [
  {
    id: 1,
    slug: "land",
    flagship: true,
    title: { ru: "Землепродюсирование", en: "Land producing" },
    term: { ru: "3–12 месяцев", en: "3–12 months" },
    price: { ru: "от 30 000 USD + success fee", en: "from USD 30,000 + success fee" },
    short: {
      ru: "Флагман. Полный цикл превращения земельного участка в инвестиционный продукт: стратегия, мастер-план, документация, финансирование, маркетинг, отдел продаж. Стоимость актива растёт в 2–4 раза.",
      en: "Flagship offering. End-to-end transformation of a plot into an investment product: strategy, master plan, paperwork, financing, marketing, sales. Asset value rises 2–4×.",
    },
  },
  {
    id: 2,
    slug: "strategy",
    title: { ru: "Стратегическая сессия", en: "Strategy session" },
    term: { ru: "2 недели", en: "2 weeks" },
    price: { ru: "от 3 000 USD", en: "from USD 3,000" },
    short: {
      ru: "Две встречи онлайн + письменный отчёт с диагностикой проекта, дорожной картой на 90 дней, оценкой рисков.",
      en: "Two online meetings + a written report covering project diagnostics, a 90-day roadmap, and a risk assessment.",
    },
  },
  {
    id: 3,
    slug: "full-cycle",
    title: { ru: "Полный цикл — запуск нового продукта", en: "Full cycle — launching a new product" },
    term: { ru: "3–6 месяцев", en: "3–6 months" },
    price: { ru: "от 30 000 USD", en: "from USD 30,000" },
    short: {
      ru: "Сопровождение от концепции через банковское финансирование до запуска. Для девелоперов, банков, фаундеров.",
      en: "Support from concept through bank financing to launch. For developers, banks, founders.",
    },
  },
  {
    id: 4,
    slug: "recovery",
    title: { ru: "Антикризис для бизнеса в тупике", en: "Turnaround for stalled businesses" },
    term: { ru: "2–6 месяцев", en: "2–6 months" },
    price: { ru: "от 15 000 USD", en: "from USD 15,000" },
    short: {
      ru: "Когда нет роста, нет денег, не понятно как выжить. Новая бизнес-модель, источники роста, переупаковка, реструктуризация. Без банкротства и юриспруденции.",
      en: "When growth has stalled, cash is short, and the path forward is unclear. New business model, growth sources, repositioning, restructuring. No insolvency, no litigation.",
    },
  },
  {
    id: 5,
    slug: "corporate",
    title: { ru: "Корпоративная сессия", en: "Corporate workshop" },
    term: { ru: "1–2 дня", en: "1–2 days" },
    price: { ru: "от 8 000 USD", en: "from USD 8,000" },
    short: {
      ru: "Очно с командой клиента (5–15 человек). Разбор проекта или новой инициативы, дорожная карта на 6–12 месяцев.",
      en: "On-site with the client team (5–15 people). Project review or new-initiative deep-dive, with a 6–12 month roadmap.",
    },
  },
  {
    id: 6,
    slug: "mentoring",
    title: { ru: "Менторская программа", en: "Mentorship programme" },
    term: { ru: "6 месяцев", en: "6 months" },
    price: { ru: "от 800 USD/мес", en: "from USD 800 / month" },
    short: {
      ru: "Личная встреча в месяц + 2 групповых разбора + чат поддержки. Группа 5–8 человек.",
      en: "One 1-on-1 monthly + two group reviews + a support chat. Group of 5–8.",
    },
  },
  {
    id: 7,
    slug: "agents-training",
    title: { ru: "Обучение агентов — продажа земли", en: "Broker training — land sales" },
    term: { ru: "1–3 месяца", en: "1–3 months" },
    price: { ru: "от 5 000 USD", en: "from USD 5,000" },
    short: {
      ru: "Корпоративная программа для агентств: превращаем риелторов городских квартир в брокеров земли и ИЖС. Опыт Академии Недвижимости — 13 000+ выпускников.",
      en: "Corporate programme for agencies: we turn urban-apartment brokers into land and single-family-housing specialists. Real-Estate Academy — 13,000+ alumni.",
    },
  },
  {
    id: 8,
    slug: "course",
    title: { ru: "Курс «Как создать индустрию с нуля»", en: "Course «Build an industry from scratch»" },
    term: { ru: "3 месяца", en: "3 months" },
    price: { ru: "от 800 USD", en: "from USD 800" },
    short: {
      ru: "Онлайн-курс из 12 уроков с домашними заданиями + 4 групповых разбора с Виолеттой. Методология вывода новых продуктов.",
      en: "12 online lessons with assignments + 4 group reviews with Violetta. Methodology for launching new products.",
    },
  },
];

/** Хелпер: достать строку для конкретного языка */
export function s(field: { ru: string; en: string }, locale: Locale): string {
  return field[locale];
}
