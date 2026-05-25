export type Talk = {
  id: string;
  title: string;
  venue: string;
  live?: boolean;
};

/**
 * 15 ключевых публичных выступлений Виолетты Басиной.
 * Заголовки и каналы вытащены через YouTube oEmbed 25.05.2026.
 * Рекламный ролик OPENDEVELOP (UxKGA_ox2gU) идёт отдельно — встроен в карточку OPENDEVELOP блока «Активы».
 */
export const talks: Talk[] = [
  {
    id: "vBR9KypF-sw",
    title: "Председатель Комитета РСС о работе с застройщиками",
    venue: "aist pro",
  },
  {
    id: "w055-sOsIqg",
    title: "Председатель Комитета РСС: расширенное интервью",
    venue: "aist pro",
  },
  {
    id: "IZaf_-E4TvY",
    title: "Дмитрий Синочкин, Виолетта Басина и Константин Пороцкий",
    venue: "Доверие потребителя",
  },
  {
    id: "jaJXSvbTh1s",
    title: "Разбор девелоперских проектов",
    venue: "Конфедерация Городов Комьюнити",
  },
  {
    id: "xaeqEJoqX3I",
    title: "Семинар «Проектное финансирование жилищного строительства»",
    venue: "MACRO TV",
  },
  {
    id: "3sCxERR1Pig",
    title: "Проектное финансирование в ИЖС — почему сложно, но возможно",
    venue: "Дмитрий Желнин",
  },
  {
    id: "FFJGPN15xgg",
    title: "КС3: Опыт проектного финансирования ИЖС с Банком ДОМ.РФ",
    venue: "СтройБезПотерь",
  },
  {
    id: "NM5JiPYIlG8",
    title: "Домземля и Омакульма — честный разговор с застройщиком",
    venue: "Домземля",
    live: true,
  },
  {
    id: "W6O-JYXv92o",
    title: "НА ТРОИХ: факторы повышения продаж в девелоперских проектах",
    venue: "Сергей Полонский",
  },
  {
    id: "580Hs23UUXI",
    title: "Путь получения первого проектного финансирования ИЖС в России",
    venue: "Конфедерация Городов Комьюнити",
  },
  {
    id: "2vXdyIGqHF8",
    title: "Что должен знать риелтор в 2024 году",
    venue: "Виктор Лапин",
  },
  {
    id: "9TAPB2X0_es",
    title: "Ошибки девелоперов, лишающие продаж",
    venue: "Виктор Лапин",
  },
  {
    id: "0P-VeexaK1Y",
    title: "Конференция «Тренды загородной недвижимости»",
    venue: "Виктор Лапин",
  },
  {
    id: "pnj2rBVzT4Y",
    title: "Коттеджный посёлок мечты для жизни и семьи",
    venue: "Stroitel Woman",
  },
  {
    id: "6TN5KxXIVdY",
    title: "История первого девелопера в России, получившего проектное финансирование ИЖС",
    venue: "Виктор Лапин",
  },
];

export function youtubeUrl(t: Pick<Talk, "id" | "live">): string {
  return t.live
    ? `https://www.youtube.com/live/${t.id}`
    : `https://youtu.be/${t.id}`;
}

export function youtubeThumb(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
