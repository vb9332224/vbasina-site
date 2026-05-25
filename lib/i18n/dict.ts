/**
 * Словарь UI-текстов сайта.
 * Структурированные данные (услуги, кейсы, регалии) — в отдельных lib/*.ts,
 * где у каждого объекта есть _en поля.
 */
import { Locale } from "./types";

type Pair = { ru: string; en: string };

export const dict = {
  // === NAV / HEADER / FOOTER ===
  nav: {
    about: { ru: "О компании", en: "Company" },
    services: { ru: "Услуги", en: "Services" },
    cases: { ru: "Кейсы", en: "Cases" },
    media: { ru: "Публикации", en: "Press" },
    contacts: { ru: "Контакты", en: "Contact" },
  },
  ctaPrimary: { ru: "Стратегическая сессия →", en: "Strategy session →" },
  ctaContactTeam: { ru: "Связаться с командой", en: "Contact our team" },
  ctaMobileSticky: { ru: "Записаться на сессию →", en: "Book a session →" },

  // === HERO ===
  hero: {
    eyebrow: {
      ru: "Basina & Partners · стратегический консалтинг",
      en: "Basina & Partners · strategic consulting",
    },
    title1: { ru: "Делаем", en: "We make" },
    title2: { ru: "проекты-звёзды", en: "star projects" },
    sub: {
      ru: "Основатели загородного девелопмента в России. Никто не умеет работать с загородной землёй так, как мы.",
      en: "Pioneers of suburban real estate development in Russia. No one works the land like we do.",
    },
    body: {
      ru: "17 лет в недвижимости — строительство, управление, продажи, маркетинг, фи-девелопмент, девелопмент. Превращаем земельные активы в инвестиционные продукты от стратегии и мастер-плана до проектного финансирования, маркетинга и отдела продаж. Работаем в России, Армении, Кыргызстане, Азербайджане и Таджикистане.",
      en: "17 years in real estate — construction, asset management, sales, marketing, financial development, development. We turn land assets into investment products — from strategy and master plan to project financing, marketing, and the sales floor. We work in Russia, Armenia, Kyrgyzstan, Azerbaijan, and Tajikistan.",
    },
    primary: { ru: "Записаться на стратегическую сессию →", en: "Book a strategy session →" },
    secondary: { ru: "Узнать больше о компании →", en: "Learn more about the company →" },
    microTrust: {
      ru: "Действительный член МАИН · Кавалер знака «Строительная Слава» · Лауреат Dubai Award 2023",
      en: "Full Member, Intl. Academy of Mortgage & Real Estate · Honor Sign «Building Glory» · Dubai International Award 2023",
    },
  },

  // === TRUST BAR ===
  trust: {
    label: { ru: "Сотрудничаем", en: "Working with" },
  },

  // === MANIFESTO ===
  manifesto: {
    eyebrow: { ru: "— Кто такие Basina & Partners", en: "— Who is Basina & Partners" },
    title1: { ru: "Мы — продюсерская компания.", en: "We are a producing company." },
    title2: { ru: "Землепродюсеры.", en: "Land producers." },
    title3: { ru: "Development producers.", en: "Development producers." },
    intro: {
      ru: "Работаем на стыке функций fi-девелопера, финансового брокера, архитектурного бюро, управляющей компании и консалтинга в области маркетинга и продаж. Наши проекты создают и поддерживают высокую культуру малоэтажной застройки, домовладения и добрососедства. Берём ответственность быть амбассадорами комфортабельного ИЖС и «зелёного» строительства по стандартам ESG, с перспективой выхода на уникальный для рынка стандарт carbon-free.",
      en: "We work where the roles of a financial developer, capital broker, architectural studio, property manager, and sales-and-marketing consultancy intersect. Our projects create and sustain a strong culture of low-rise development, home ownership, and community. We see ourselves as ambassadors of comfortable suburban living and ESG-grade «green» construction — with a clear path to a market-first carbon-free standard.",
    },
    missionLabel: { ru: "Наша миссия", en: "Our mission" },
    mission: {
      ru: "Постоянно развивать культуру малоэтажного индивидуального строительства и проживания за городом.",
      en: "To continuously advance the culture of low-rise single-family homes and suburban living.",
    },
    sloganLabel: { ru: "Слоган", en: "Slogan" },
    slogan: { ru: "Делаем проекты-звёзды.", en: "We make star projects." },
    sloganBody: {
      ru: "Звезда — проект, который выделяется на рынке, приносит доход собственнику и оставляет наследие сообществу. Каждая наша работа целит именно туда: в проекты с долгой ценностной памятью.",
      en: "A «star» project stands out on the market, generates income for the owner, and leaves a legacy for the community. Every engagement we take on aims at exactly this — projects with long-lasting value.",
    },
    promisesEyebrow: { ru: "— Три обещания бренда", en: "— Three brand promises" },
    promisesTitle: {
      ru: "Что вы получаете от партнёрства с нами",
      en: "What partnering with us delivers",
    },
    p1Title: { ru: "Доход", en: "Yield" },
    p1Body: {
      ru: "Гарантируем максимальный уровень дохода собственника земли, который невозможно получить без нас — с учётом любого альтернативного способа использования участка. Тезис применим не только к долгосрочной перспективе, но и к каждому этапу развития проекта.",
      en: "We guarantee land-owners the highest yield they could not reach without us — measured against every alternative use of the plot. This holds not only over the full project lifecycle but at each stage of development.",
    },
    p1Quote: { ru: "Мы — люди дела и для дела.", en: "We are people of action, here for the work." },
    p2Title: { ru: "Технологичность", en: "Technology" },
    p2Body: {
      ru: "ESG, LEED, BIM (ТИМ), carbon-free — для нас не просто слова. Используем современные технологии и последние достижения науки, адаптируем под российские реалии и внедряем с опережением других участников рынка. Готовим собственный НИОКР для малоэтажного строительства.",
      en: "ESG, LEED, BIM, carbon-free — these are not buzzwords for us. We deploy the latest technologies and research, adapt them to local realities, and roll them out ahead of the market. We run our own R&D programme for low-rise construction.",
    },
    p2Quote: { ru: "Сможете повторить? То-то же.", en: "Care to replicate this? Exactly." },
    p3Title: { ru: "Эстетика", en: "Aesthetics" },
    p3Body: {
      ru: "Всё, ЧТО и КАК мы делаем — эстетически приятно, красиво, радует все органы чувств, вызывает гордость обладанием и вдохновляет на свершения. Наши проекты не просто комфортны — они задают тон и стиль жизни, развивают чувство прекрасного.",
      en: "Everything we make — and how we make it — is visually rich, comfortable to all the senses, worth being proud of, and inspires the people inside. Our projects don't just function: they set the tone and the lifestyle around them.",
    },
    p3Quote: { ru: "Будешь гордиться.", en: "You'll be proud." },
    valuesEyebrow: { ru: "— Атрибуты и ценности", en: "— Attributes and values" },
    valuesTitle: {
      ru: "Три принципа, которые держат всю работу",
      en: "Three principles that hold the work together",
    },
    v1Title: { ru: "Прозрачность взаимодействия", en: "Transparency" },
    v1Body: {
      ru: "Никаких подводных камней, мелких шрифтов, невыполненных обещаний и недоговорённостей. Тайминг, статус задач, документы — всегда прозрачно и доступно для контроля. Сказали — сделали.",
      en: "No hidden conditions, no fine print, no broken promises, no off-the-record arrangements. Timelines, task status, paperwork — always visible and verifiable. Said is done.",
    },
    v2Title: { ru: "Primum non nocere — не навреди", en: "Primum non nocere — first, do no harm" },
    v2Body: {
      ru: "Наша компания, сотрудники и проекты не ущемляют чьих-либо прав ни в юридическом, ни в моральном аспекте. Не участвуем в противоправных и аморальных действиях, не наносим вред рынку, партнёрам, окружающей среде — только честная борьба по правилам.",
      en: "Neither our company, our team, nor our projects infringe on anyone's rights — legally or morally. We do not take part in unlawful or unethical actions, and we do not harm the market, our partners, or the environment. Only a fair contest within the rules.",
    },
    v3Title: { ru: "Trendspotting & Trendsetting", en: "Trendspotting & Trendsetting" },
    v3Body: {
      ru: "Мы не догоняем тренды — мы их выявляем и создаём. «Приземляем» их в контекст и реалии места и времени, популяризируем. Наши продукты создаются для долговременного использования, мы работаем кроме актуального ещё и с симбиозом вечного и будущего.",
      en: "We don't chase trends — we identify and create them. We translate them into the local context, popularise them, and ship them. Our products are built for the long run: we work the actual, the timeless, and the future all at once.",
    },
  },

  // === ZACHEM (differentiators) ===
  zachem: {
    eyebrow: { ru: "— Что нас отличает", en: "— What sets us apart" },
    title: {
      ru: "Три причины, по которым нас зовут банки, министры и владельцы земли",
      en: "Three reasons banks, ministers, and land-owners call us",
    },
    body: {
      ru: "На рынке консалтинга в недвижимости много компаний. Сильное позиционирование в этой среде создаётся не словами, а уникальной комбинацией опыта, инструментов и связей, которой нет у других.",
      en: "Real-estate consulting is a crowded market. Strong positioning is built not on words but on a combination of experience, tools, and relationships that nobody else holds.",
    },
    c1Title: {
      ru: "Первое в России проектное финансирование ИЖС",
      en: "Russia's first project finance for single-family housing",
    },
    c1Body: {
      ru: "28.12.2020 — Банк ДОМ.РФ подписал с нами первый в стране кредитный договор по проектному финансированию индивидуального жилищного строительства. До этого момента ни одна российская компания не могла получить банк под ИЖС. Мы открыли категорию.",
      en: "28 Dec 2020 — DOM.RF Bank signed the country's first project-finance loan agreement for single-family housing — with us. Until that moment no Russian developer had been able to bank an SFH project. We opened the category.",
    },
    c1Metric: { ru: "2,1 млрд ₽ привлечено", en: "RUB 2.1 bn raised" },
    c2Title: {
      ru: "Работа на стыке регулятора и рынка",
      en: "At the intersection of regulator and market",
    },
    c2Body: {
      ru: "17 лет одновременно в коммерческом девелопменте и в реформе регулирования. Через Комитет РСС инициировали государственный Фонд защиты прав дольщиков (фонд работает по сей день). На OPENDEVELOP.RU проверили 2 285 застройщиков по 40 параметрам.",
      en: "17 years simultaneously in commercial development and in regulatory reform. Through the Russian Builders Union committee we initiated the State Fund for the Protection of Co-investors' Rights (still operating today). On OPENDEVELOP.RU we vetted 2,285 developers across 40 parameters.",
    },
    c2Metric: { ru: "Государственный Фонд РФ", en: "State Fund of the Russian Federation" },
    c3Title: { ru: "Метод Басиной и Гергель", en: "The Basina-Gergel Method" },
    c3Body: {
      ru: "Авторский метод проектирования девелопера через 8 слоёв (предназначение, душа, вкус, цвет, запах, ритм, звук, осязание). Превращает участок земли не в гектары, а в живой продукт, который выбирают и инвесторы, и жители. Применяется к каждому новому проекту.",
      en: "Our proprietary method designs a development across 8 layers (purpose, soul, taste, colour, scent, rhythm, sound, touch). It turns a plot of land into a living product chosen by both investors and residents. Applied to every new engagement.",
    },
    c3Metric: { ru: "8 проектных артефактов", en: "8 design artefacts" },
  },

  // === DLYA KOGO (segments) ===
  dlyakogo: {
    eyebrow: { ru: "— Для кого мы работаем", en: "— Who we work with" },
    title: { ru: "С кем мы работаем эффективнее всего", en: "Where we deliver the most value" },
    s1Title: { ru: "Собственники земельных активов", en: "Land-asset owners" },
    s1Body: {
      ru: "Флагман нашей работы. Капитализируем участок в готовый инвестиционный продукт: мастер-план, финмодель, документация, финансирование, маркетинг, отдел продаж. Стоимость актива растёт в 2–4 раза, сроки продажи — в 2–3 раза короче.",
      en: "Our flagship offering. We capitalise the plot into a finished investment product — master plan, financial model, paperwork, financing, marketing, sales team. Asset value rises 2–4×; time-to-sell shortens 2–3×.",
    },
    s2Title: { ru: "Девелоперы и застройщики", en: "Developers and builders" },
    s2Body: {
      ru: "Если вы выходите в новый сегмент (ИЖС, апарт-отели, многофункциональные комплексы) или хотите структурировать продукт под банковское финансирование — у нас 17 лет опыта именно в этом.",
      en: "If you are entering a new segment (single-family, aparthotels, mixed-use) or need to structure a product for bank financing — that is exactly what we have done for 17 years.",
    },
    s3Title: { ru: "Банки и финансовые институты", en: "Banks and financial institutions" },
    s3Body: {
      ru: "Если ваш банк запускает новые продукты в жилищном финансировании или проектном кредитовании — мы помогли запустить первую льготную ИЖС-ипотеку в России и сократить срок одобрения с 2 месяцев до 5 дней.",
      en: "If your bank is launching new mortgage or project-finance products — we helped launch Russia's first subsidised single-family-housing mortgage and cut approval from 2 months to 5 days.",
    },
    s4Title: { ru: "Корпорации развития и B2G", en: "Development corporations and B2G" },
    s4Body: {
      ru: "Региональные корпорации развития, государственные институты, ФОИВ и РОИВ. Помогаем повысить инвестиционную привлекательность территорий через мастер-планирование жилой и смешанной застройки. Работаем прозрачно и системно.",
      en: "Regional development corporations, federal and regional executive bodies, state institutes. We raise territorial investment appeal through master planning of residential and mixed-use development. Transparent, systematic work.",
    },
    s5Title: { ru: "Агентства и брокеры недвижимости", en: "Real-estate agencies and brokers" },
    s5Body: {
      ru: "Превращаем риелторов городских квартир в специалистов по продаже земли и ИЖС. Через Академию Недвижимости обучили 13 000+ агентов, 3 000+ — специально под ИЖС. Программа адаптирована под рынки СНГ.",
      en: "We retrain urban-apartment agents into land and single-family-housing specialists. Our Real-Estate Academy has trained 13,000+ brokers, 3,000+ of them specifically for single-family. The programme is adapted to CIS markets.",
    },
    s6Title: { ru: "Маркетинг и продуктовые команды", en: "Marketing and product teams" },
    s6Body: {
      ru: "Продуктовый маркетинг как услуга: создаём новый продукт под рынок и аудиторию, упаковываем землю и территории в landporn-материалы, запускаем коммуникацию, выводим в первую сделку.",
      en: "Product marketing as a service: we craft a new product for the market and audience, package land and territories into landporn-grade collateral, launch communications, and drive the first deal.",
    },
    s7Title: { ru: "Бизнес в тупике", en: "Businesses at a standstill" },
    s7Body: {
      ru: "Если компания не растёт, не зарабатывает, не понимает, как выжить и развиваться — антикризисные решения. Новая бизнес-модель, источники роста, переупаковка, реструктуризация. Без банкротства и юриспруденции.",
      en: "If the company has stopped growing, stopped earning, and doesn't see the next move — we deliver turnaround solutions. New business model, growth sources, repositioning, restructuring. No insolvency, no litigation.",
    },
    s8Title: { ru: "Фаундеры и предприниматели", en: "Founders and entrepreneurs" },
    s8Body: {
      ru: "Если вы создаёте что-то новое и нуждаетесь в стратегическом сопровождении — менторская программа на 6 месяцев или полный цикл запуска проекта.",
      en: "If you are building something new and need strategic guidance — a 6-month mentorship programme or a full-cycle project launch.",
    },
  },

  // === POCHEMU (figures) ===
  pochemu: {
    eyebrow: { ru: "— Почему нам доверяют", en: "— Why clients trust us" },
    title: {
      ru: "17 лет результатов — в цифрах и фактах",
      en: "17 years of outcomes — in numbers and facts",
    },
    figure1Value: { ru: "150+", en: "150+" },
    figure1Label: {
      ru: "реализованных проектов в шести индустриях",
      en: "delivered projects across six industries",
    },
    figure2Value: { ru: "17 лет", en: "17 years" },
    figure2Label: {
      ru: "в недвижимости: строительство, управление, продажи, маркетинг, фи-девелопмент, девелопмент",
      en: "in real estate: construction, asset management, sales, marketing, financial development, development",
    },
    regaliaTitle: { ru: "Топ-10 регалий", en: "Top 10 distinctions" },
    seeAll: { ru: "Посмотреть все 17 регалий и наград →", en: "See all 17 distinctions and awards →" },
  },

  // === KAK (services intro on home) ===
  kak: {
    eyebrow: { ru: "— Как мы работаем", en: "— How we work" },
    title1: { ru: "Восемь форматов работы", en: "Eight engagement formats" },
    title2: { ru: "с Basina & Partners", en: "with Basina & Partners" },
    learnMore: { ru: "Узнать больше →", en: "Learn more →" },
  },

  // === CASES ===
  casesGrid: {
    eyebrow: { ru: "— Кейсы", en: "— Cases" },
    title: {
      ru: "Четыре проекта, которые изменили правила игры",
      en: "Four projects that changed the game",
    },
    more: { ru: "Подробнее →", en: "Read the case →" },
  },

  // === QUOTE ===
  quote: {
    eyebrow: { ru: "— Кто за этим стоит", en: "— The person behind it" },
    text: {
      ru: "Я не борюсь с системой. Я создаю новое там, где этого ещё нет — и нахожу обходные пути там, где старое не работает. 17 лет это делаю в разных отраслях. И буду делать дальше.",
      en: "I don't fight the system. I create the new where there isn't any yet — and I find a way around when the old one doesn't work. I've been doing this for 17 years across different industries. And I'll keep doing it.",
    },
    sig: {
      ru: "— Виолетта Басина, основатель Basina & Partners",
      en: "— Violetta Basina, Founder of Basina & Partners",
    },
    micro: {
      ru: "Действительный член МАИН · Кавалер знака «Строительная Слава» · Лауреат Dubai Award 2023",
      en: "Full Member, Intl. Academy of Mortgage & Real Estate · Honor Sign «Building Glory» · Dubai International Award 2023",
    },
    biography: { ru: "Полная биография →", en: "Full biography →" },
  },

  // === MEDIA HOME ===
  mediaHome: {
    eyebrow: { ru: "— О нас писали", en: "— Press coverage" },
    title: {
      ru: "Подтверждённые источники признания",
      en: "Verified sources of recognition",
    },
    all: { ru: "Все публикации в СМИ →", en: "All press coverage →" },
  },

  // === CTA BLOCK ===
  ctaBlock: {
    eyebrow: { ru: "— Готовы начать?", en: "— Ready to start?" },
    title: {
      ru: "Стратегическая сессия — 90 минут, без обязательств",
      en: "Strategy session — 90 minutes, no commitment",
    },
    body: {
      ru: "Без обязательств. По итогам — понимание, что делать дальше: запустить полный цикл, провести корпоративную сессию или забрать рекомендации и работать самостоятельно. Стоимость стратегической сессии — от 3 000 USD за 2 встречи и письменный отчёт.",
      en: "No commitment. After the session you will know what to do next — launch a full-cycle engagement, run a corporate workshop, or take the recommendations and execute in-house. The session is priced from USD 3,000 for two meetings plus a written report.",
    },
  },

  // === LEAD FORM ===
  form: {
    name: { ru: "Ваше имя", en: "Your name" },
    email: { ru: "Email", en: "Email" },
    contact: { ru: "Telegram или телефон (опционально)", en: "Telegram or phone (optional)" },
    message: { ru: "О какой задаче хотели бы поговорить", en: "What would you like to discuss" },
    consent: {
      ru: "Согласен на обработку персональных данных в соответствии с",
      en: "I consent to the processing of my personal data in accordance with the",
    },
    consentLink: { ru: "политикой конфиденциальности", en: "privacy policy" },
    submit: { ru: "Записаться на сессию →", en: "Book the session →" },
    sending: { ru: "Отправляем…", en: "Sending…" },
    successTitle: { ru: "Заявка отправлена", en: "Request submitted" },
    successBody: {
      ru: "Наша команда свяжется с вами в течение рабочего дня.",
      en: "Our team will get back to you within one business day.",
    },
    or: {
      ru: "Или напишите напрямую:",
      en: "Or reach out directly:",
    },
  },

  // === FOOTER ===
  footer: {
    nav: { ru: "Навигация", en: "Navigation" },
    contacts: { ru: "Контакты", en: "Contact" },
    docs: { ru: "Документы", en: "Legal" },
    privacy: { ru: "Политика конфиденциальности", en: "Privacy Policy" },
    offer: { ru: "Оферта", en: "Terms of Service" },
  },

  // === COMMON ===
  langSwitcher: {
    aria: { ru: "Сменить язык", en: "Switch language" },
  },
} as const;

export function t(locale: Locale, getter: (d: typeof dict) => Pair): string {
  return getter(dict)[locale];
}
