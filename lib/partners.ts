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
    slug: "gergel",
    name: {
      ru: "Яна Гергель",
      en: "Yana Gergel",
    },
    roles: {
      ru: [
        "Первый продюсер городов и территорий в России",
        "Архитектор-градостроитель, 15+ лет",
        "Соавтор метода Басиной и Гергель",
      ],
      en: [
        "Russia’s first producer of cities and territories",
        "Architect-urbanist, 15+ years",
        "Co-author of the Basina & Gergel Method",
      ],
    },
    headline: {
      ru:
        "Градостроитель с портфелем проектов общей площадью около 2,5 млрд м². От ППТ к ЧМ-2018 до реновации Москвы.",
      en:
        "Urbanist with a portfolio of around 2.5 billion m² of project area — from FIFA 2018 territory plans to Moscow renovation.",
    },
    bio: {
      ru:
        "В Basina & Partners — стратегический партнёр и соавтор метода Басиной и Гергель (8 слоёв создания девелоперского проекта). Отвечает за градостроительный и архитектурный контур флагманской услуги «Землепродюсирование»: мастерпланирование, ППТ, средовые сценарии. Опыт работы с крупнейшими российскими девелоперами и федеральными программами развития городов.",
      en:
        "Strategic partner at Basina & Partners and co-author of the Basina & Gergel Method (8 layers of developing a project). Owns the urban-planning and architectural layer of our flagship Land Producing service: master plans, territory plans, public-realm scenarios. Track record with Russia’s largest developers and federal city-development programmes.",
    },
    highlights: {
      ru: [
        "Основатель группы компаний в сфере девелопмента и креативной индустрии.",
        "Преподаватель РАНХиГС — кафедра территориального развития им. В.Л. Глазычева.",
        "Программный руководитель трека «Развитие малых городов» Всероссийского молодёжного форума «Амур» (2023).",
        "Приглашённый эксперт Всероссийского модульного проекта «Сельское подворье 2023–2063».",
        "ППТ к Чемпионату мира по футболу 2018 — Волгоград, Калининград.",
        "≈15 транспортно-пересадочных узлов в Москве и Московской области.",
        "Стратегия социально-экономического и пространственного развития муниципия Кишинэу.",
        "ППМТ для крупнейших застройщиков: Самолёт, ПИК, Главстрой, МИЦ, Лидер, ИНГРАД — проекты Береговой, Баланс, Западная Долина, Нагорный, Люблино и др.",
        "Программа реновации жилого фонда Москвы — Царицыно, Проспект Вернадского, Гольяново.",
        "Развитие малых городов Хабаровского края.",
        "Средовые проекты (парки, бульвары, скверы, площади) программы «Среда 800», Нижний Новгород.",
      ],
      en: [
        "Founder of a group of companies in development and the creative industries.",
        "Lecturer at RANEPA — Department of Territorial Development named after V.L. Glazychev.",
        "Programme lead of the «Small Cities Development» track at the All-Russian Youth Forum «Amur» (2023).",
        "Invited expert of the federal «Rural Estate 2023–2063» modular project.",
        "Territory plans for the FIFA 2018 World Cup — Volgograd and Kaliningrad.",
        "≈15 transport interchange hubs across Moscow and the Moscow region.",
        "Strategy of socio-economic and spatial development of Chișinău municipality.",
        "Detailed territory plans for Russia’s largest developers: Samolet, PIK, Glavstroy, MIC, Lider, INGRAD — Beregovoy, Balance, Western Valley, Nagorny, Lyublino and others.",
        "Moscow housing renovation programme — Tsaritsyno, Prospekt Vernadskogo, Golyanovo.",
        "Small-city development across the Khabarovsk region.",
        "Public-realm projects (parks, boulevards, squares) under the «Sreda 800» programme, Nizhny Novgorod.",
      ],
    },
    photo: "/images/partners/yana-gergel.jpg",
    initials: "ЯГ",
  },
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
