export type CasePreview = {
  slug: string;
  title: { ru: string; en: string };
  meta: { ru: string; en: string };
  excerpt: { ru: string; en: string };
  cover?: { src: string; alt: string };
};

export const casesPreview: CasePreview[] = [
  {
    slug: "omakulma-annino",
    title: {
      ru: "«Омакульма-Аннино» — первое в России проектное финансирование ИЖС",
      en: "“Omakulma-Annino” — Russia's first project finance for single-family housing",
    },
    meta: {
      ru: "2019–2022 · 198 домовладений · 18 га · 2,1 млрд ₽",
      en: "2019–2022 · 198 homes · 18 ha · RUB 2.1 bn",
    },
    excerpt: {
      ru: "Создала первый в стране горизонтальный жилой комплекс на ИЖС с проектным финансированием банка. Параллельно запустила первую льготную ИЖС-ипотеку (от 6,1%) и сократила срок её одобрения с 2 месяцев до 5 дней.",
      en: "Built the country's first horizontal residential complex of single-family homes with bank project finance. Concurrently launched Russia's first subsidised single-family mortgage (from 6.1%) and cut approval from 2 months to 5 days.",
    },
  },
  {
    slug: "nork-marash",
    title: {
      ru: "BGM Residence — апарт-отель в Ереване",
      en: "BGM Residence — an aparthotel in Yerevan",
    },
    meta: {
      ru: "2026 · 527 апартаментов · Норк-Мараш · Категория IV",
      en: "2026 · 527 apartments · Nork-Marash · Category IV",
    },
    excerpt: {
      ru: "Девелоперский проект апарт-отеля в Ереване. Структурирование сделки, привлечение армянских банков, маркетинг для русскоязычного релокант-капитала.",
      en: "A development project for an aparthotel in Yerevan. Deal structuring, Armenian bank financing, and marketing to the Russian-speaking relocator market.",
    },
    cover: {
      src: "/images/nork-marash/view-ararat.png",
      alt: "Вид на Арарат из апартаментов BGM Residence",
    },
  },
  {
    slug: "dolschiki-reform",
    title: {
      ru: "Реформа защиты прав дольщиков — лоббирование на федеральном уровне",
      en: "Co-investors' rights reform — federal-level advocacy",
    },
    meta: {
      ru: "2014–2017 · Минстрой РФ · Государственный Фонд",
      en: "2014–2017 · RF Ministry of Construction · State Fund",
    },
    excerpt: {
      ru: "Инициатор отмены неработающего страхования по 214-ФЗ и создания государственного Фонда защиты прав дольщиков. Работа через комиссию Минстроя РФ.",
      en: "Initiator behind dismantling the broken FZ-214 insurance scheme and creating the State Fund for the Protection of Co-investors' Rights. Worked through the RF Ministry of Construction commission.",
    },
  },
  {
    slug: "zemskaya-sreda",
    title: {
      ru: "Народный проект «Земская среда» — антирейдерская модель",
      en: "“Zemskaya Sreda” — a community-based anti-raider model",
    },
    meta: {
      ru: "2026 · Благотворительный фонд · ст. 582 ГК РФ",
      en: "2026 · Charitable foundation · Art. 582 of the RF Civil Code",
    },
    excerpt: {
      ru: "Параллельная легальная структура — народный благотворительный фонд, выкупающий активы у банков для передачи нуждающимся семьям. Уникальный антирейдерский кейс через ст. 582 ГК РФ.",
      en: "A parallel legal structure — a public charitable foundation that buys assets from banks and transfers them to families in need. A unique anti-raider case under Art. 582 of the RF Civil Code.",
    },
  },
];

import { Locale } from "@/lib/i18n/types";
export function c(field: { ru: string; en: string }, locale: Locale): string {
  return field[locale];
}
