import { Locale } from "@/lib/i18n/types";

export type Partner = {
  slug: string;
  name: { ru: string; en: string };
  /** Короткие роли через ·  */
  roles: { ru: string[]; en: string[] };
  /** Главное достижение — для большой плашки */
  headline: { ru: string; en: string };
  /** Развёрнутое био — 3-4 предложения */
  bio: { ru: string; en: string };
  /** Маркированный список ключевых достижений */
  highlights: { ru: string[]; en: string[] };
  /** Книги, проекты, ссылки */
  works?: { label: string; href?: string }[];
  /** Путь к фото в /public/images/partners/ — если есть */
  photo?: string;
  /** Инициалы для fallback */
  initials: string;
};

export const partners: Partner[] = [
  {
    slug: "marinovich",
    name: {
      ru: "Владимир Маринович",
      en: "Vladimir Marinovich",
    },
    roles: {
      ru: [
        "Эксперт по стратегическому развитию бизнеса",
        "Бизнес-ангел",
        "Бизнес-философ",
      ],
      en: [
        "Strategic business development expert",
        "Business angel",
        "Business philosopher",
      ],
    },
    headline: {
      ru: "Акционер Gett. Вывел Gett Taxi до миллиардной капитализации за 4 года.",
      en: "Gett shareholder. Took Gett Taxi to a billion-dollar valuation in 4 years.",
    },
    bio: {
      ru:
        "В Basina & Partners — стратегический партнёр Виолетты Басиной. Эксперт по масштабированию бизнеса, командной динамике и трансформации компаний в кризис. Соединяет в работе глубокую финансовую экспертизу, философию предпринимательства и инженерный подход к построению команд.",
      en:
        "Strategic partner at Basina & Partners. Expert in business scaling, team dynamics, and corporate transformation through crisis. Combines deep financial expertise, entrepreneurial philosophy, and an engineering approach to building teams.",
    },
    highlights: {
      ru: [
        "Акционер Gett. Бывший генеральный директор Gett Taxi — за 4 года вывел компанию до миллиардной капитализации.",
        "Основатель сети дрогери «Улыбка радуги»: построил от 3 магазинов до 800.",
        "Соучредитель мерчандайзингового агентства «4P Group Нева».",
        "Основатель бизнес-школы «ВВЕРХ» (с 2014): обучает предпринимателей стратегии, команде и масштабированию.",
        "Автор книг «Бизнес х2. Стратегия удвоения прибыли», «7 шагов стартапа», «Команда мечты».",
        "Образование: Санкт-Петербургский государственный университет, факультет журналистики (1993).",
      ],
      en: [
        "Gett shareholder. Former CEO of Gett Taxi — took the company to a billion-dollar valuation in 4 years.",
        "Founder of the «Smile of the Rainbow» drugstore chain: grew it from 3 stores to 800.",
        "Co-founder of the «4P Group Neva» merchandising agency.",
        "Founder of the «VVERH» business school (since 2014): training entrepreneurs in strategy, teams, and scale.",
        "Author of «Business x2. Profit-doubling strategy», «7 steps of a startup», «Team of dreams».",
        "Education: Saint Petersburg State University, Faculty of Journalism (1993).",
      ],
    },
    works: [
      { label: "marinovich.ru", href: "https://marinovich.ru" },
      { label: "Бизнес-школа «ВВЕРХ»", href: "https://vverh.tv" },
      { label: "YouTube", href: "https://youtube.com/@vmarinovich" },
    ],
    photo: "/images/partners/vmarinovich.jpg",
    initials: "ВМ",
  },
];

export function partnerName(p: Partner, locale: Locale): string {
  return p.name[locale];
}
