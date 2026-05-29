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
    individuals: { ru: "Физлицам", en: "For individuals" },
    cases: { ru: "Кейсы", en: "Cases" },
    media: { ru: "О нас пишут", en: "Press about us" },
    awards: { ru: "Наши награды", en: "Our awards" },
    contacts: { ru: "Контакты", en: "Contact" },
  },
  ctaPrimary: { ru: "Стратегическая сессия →", en: "Strategy session →" },
  ctaContactTeam: { ru: "Связаться с командой", en: "Contact our team" },
  ctaMobileSticky: { ru: "Записаться на консультацию →", en: "Book a consultation →" },

  // === HERO ===
  hero: {
    eyebrow: {
      ru: "BGM Consulting · продюсирование земли и территорий",
      en: "BGM Consulting · land and territory producing",
    },
    title1: { ru: "Продюсируем землю и территории. Строим", en: "We produce land and territory. We build" },
    title2: { ru: "проекты-звёзды", en: "star projects" },
    sub: {
      ru: "Работаем не просто с землёй — а с человеком за ней: собственником, который будет её реализовывать. В этом наш подход и отличается.",
      en: "We don’t just work with the land — we work with the person behind it: the owner who will bring it to life. That’s what makes our approach different.",
    },
    body: {
      ru: "Землепродюсирование — наш флагман: превращаем участок в готовый инвестиционный продукт-звезду — стратегия, мастер-план, финмодель, проектное финансирование, продажи. Но главное отличие в том, что мы продюсируем не только территорию, а и собственника: его команду, капитал и публичное позиционирование. Стоимость актива растёт в 2–4 раза, сроки продажи — короче в 2–3 раза. Работаем там, где институциональный девелопмент и капитал только формируются — Россия, Армения, Кыргызстан, Азербайджан, Таджикистан.",
      en: "Land producing is our flagship: we turn a plot into a finished star-grade investment product — strategy, master plan, financial model, project finance, sales. But what truly sets us apart is that we produce not only the territory but the owner too: their team, capital, and public positioning. Asset value rises 2–4×; time-to-sell shortens 2–3×. We work where institutional development and capital are still emerging — Russia, Armenia, Kyrgyzstan, Azerbaijan, Tajikistan.",
    },
    primary: { ru: "Стратегический разбор →", en: "Strategic deep-dive →" },
    secondary: { ru: "Манифест и философия →", en: "Manifesto and philosophy →" },
    microTrust: {
      ru: "Продюсируем землю и человека · Делаем проекты-звёзды · Запускаем там, где других нет",
      en: "We produce land and the person · We build star projects · We launch where no one else can",
    },
  },

  // === TRUST BAR ===
  trust: {
    label: { ru: "Сотрудничаем", en: "Working with" },
  },

  // === MANIFESTO ===
  manifesto: {
    eyebrow: { ru: "— Манифест и философия", en: "— Manifesto and philosophy" },
    title1: { ru: "Не консалтинг.", en: "Not consulting." },
    title2: { ru: "Конструкция среды", en: "An architecture of the environment" },
    title3: { ru: "вокруг предпринимателя.", en: "around the entrepreneur." },
    intro: {
      ru: "Мы не продаём услуги. Мы продюсируем переход — из хаоса в систему. Соединяем то, что обычно никто не соединяет: бизнес, государство, землю, капитал, продажи, медиа, людей. Помогаем предпринимателю стать причиной собственного результата, а его проектам — точкой роста, капитализации и влияния.",
      en: "We don’t sell services. We produce a transition — from chaos to system. We connect what nobody usually connects: business, the state, land, capital, sales, media, and people. We help the entrepreneur become the cause of their own result, and their projects — a point of growth, capitalisation, and influence.",
    },
    missionLabel: { ru: "Наша миссия", en: "Our mission" },
    mission: {
      ru: "Создавать новые жизненные и бизнес-среды, в которых люди и проекты раскрывают потенциал, находят смысл, становятся нужными миру и переходят в рост.",
      en: "To create new business and life environments where people and projects unlock their potential, find meaning, become useful to the world, and grow.",
    },
    sloganLabel: { ru: "Слоган", en: "Slogan" },
    slogan: { ru: "Делаем проекты-звёзды.", en: "We make star projects." },
    sloganBody: {
      ru: "Звезда — это предприниматель и проект, которые выходят из хаоса в систему, перестают быть «ещё одними на рынке» и становятся точкой влияния. Каждая наша работа целит именно туда.",
      en: "A «star» is an entrepreneur and a project that move from chaos to system, stop being «one of many», and become a point of influence. That’s exactly what every engagement we take on aims at.",
    },
    promisesEyebrow: { ru: "— Три архетипа в работе", en: "— Three archetypes in our work" },
    promisesTitle: {
      ru: "Как мы заходим в каждый проект",
      en: "How we enter every project",
    },
    p1Title: { ru: "Создатель систем", en: "Systems builder" },
    p1Body: {
      ru: "Мы строим не продукт, а среду. Каждый проект собираем как живой организм — со своей экономикой, ритмом, командой, аудиторией и культурой. И он продолжает жить десятилетиями, потому что в нём всё связано.",
      en: "We build environments, not products. Every project is assembled as a living organism — with its own economics, rhythm, team, audience, and culture. It then lives on for decades because every part is connected.",
    },
    p1Quote: { ru: "Будущее создают люди действия.", en: "The future is built by people of action." },
    p2Title: { ru: "Соединитель несоединимого", en: "Connector of the unconnectable" },
    p2Body: {
      ru: "Бизнес и государство. Земля и капитал. Продажи и медиа. Регулятор и рынок. Деньги и смысл. Мы работаем там, где обычные консультанты говорят «это разные истории» — и собираем из них одну живую систему.",
      en: "Business and the state. Land and capital. Sales and media. Regulator and market. Money and meaning. We work where typical consultants say «these are different stories» — and assemble them into one living system.",
    },
    p2Quote: {
      ru: "Я соединяю то, что раньше считалось несовместимым.",
      en: "I bring together what used to be considered incompatible.",
    },
    p3Title: { ru: "Антикризисный трансформатор", en: "Crisis transformer" },
    p3Body: {
      ru: "Где другие видят тупик — мы видим точку перезапуска. Входим в разрушенные или хаотичные системы и собираем заново: новую модель, новые источники роста, новую команду, новую упаковку. Не «спасение от банкротства» — а перепроектирование под новые условия.",
      en: "Where others see a dead end — we see a restart point. We enter broken or chaotic systems and rebuild them: a new model, new growth sources, a new team, new packaging. Not «rescue from bankruptcy» — but redesign for new conditions.",
    },
    p3Quote: {
      ru: "Кто сказал, что человек должен подстраиваться под систему?",
      en: "Who said a person has to fit into the system?",
    },
    valuesEyebrow: { ru: "— Честный компас", en: "— Honest compass" },
    valuesTitle: {
      ru: "Четыре ценности, которые держат всю работу",
      en: "Four values that hold the work together",
    },
    v1Title: { ru: "Красота", en: "Beauty" },
    v1Body: {
      ru: "Эстетика — не декорация. Это форма уважения к человеку и к месту. То, что построено красиво, живёт дольше.",
      en: "Aesthetics aren’t decoration. They are a form of respect — to a person and to a place. What is built beautifully lives longer.",
    },
    v2Title: { ru: "Честность", en: "Honesty" },
    v2Body: {
      ru: "Без подводных камней и мелкого шрифта. Если мы что-то не умеем — говорим прямо. Если что-то невозможно — тоже. Сказали — сделали.",
      en: "No fine print, no hidden conditions. If we can’t do something — we say so. If something is impossible — same answer. Said is done.",
    },
    v3Title: { ru: "Люди", en: "People" },
    v3Body: {
      ru: "В каждом проекте — реальные люди. Мы видим в них больше, чем они видят в себе. Наша задача — раскрыть их потенциал и сделать их причиной собственного результата.",
      en: "Every project is about real people. We see more in them than they see in themselves. Our job is to unlock their potential and make them the cause of their own result.",
    },
  },

  // === ZACHEM (differentiators) ===
  zachem: {
    eyebrow: { ru: "— Что нас отличает", en: "— What sets us apart" },
    title: {
      ru: "Три вещи, которые невозможно повторить",
      en: "Three things that can’t be copied",
    },
    body: {
      ru: "Мы не «ещё один консалтинг». Сильное позиционирование строится не словами, а уникальной комбинацией мышления, опыта и связей, которой нет у других.",
      en: "We are not «yet another consulting firm». Strong positioning is built not on words but on a thinking pattern, experience, and relationships nobody else holds.",
    },
    c1Title: {
      ru: "Видим систему целиком",
      en: "We see the system as a whole",
    },
    c1Body: {
      ru: "Соединяем то, что обычно никто не соединяет: бизнес, государство, землю, капитал, продажи, медиа, команду. Не «маркетинг», «коучинг» или «девелопмент» — работаем на уровне среды и конструкции. Поэтому проекты собираются как живая система, а не как набор услуг.",
      en: "We connect what usually nobody connects: business, the state, land, capital, sales, media, and people. Not marketing, not coaching, not development — we work at the level of environment and structure. Projects come together as a living system, not as a stack of services.",
    },
    c1Metric: { ru: "Соединяем несоединимое", en: "We connect the unconnectable" },
    c2Title: {
      ru: "Запускаем там, где других нет",
      en: "We launch where no one else can",
    },
    c2Body: {
      ru: "Без ресурсов, в новых рынках, по правилам, которых ещё не существует. Первое в России проектное финансирование ИЖС (Банк ДОМ.РФ, 2020), первая льготная ИЖС-ипотека, государственный Фонд защиты прав дольщиков, OPENDEVELOP.RU. Каждый раз — открывали категорию.",
      en: "Without resources, in new markets, under rules that don’t yet exist. Russia’s first project-financed single-family housing (DOM.RF Bank, 2020), the first preferential SFH mortgage, the State Fund for the Protection of Co-investors’ Rights, OPENDEVELOP.RU. Every time — we opened a new category.",
    },
    c2Metric: { ru: "20+ запущенных проектов", en: "20+ launched projects" },
    c3Title: {
      ru: "Работаем в кризисе как в новом рынке",
      en: "We treat crisis as a new market",
    },
    c3Body: {
      ru: "Антикризисная пересборка — не «спасение от банкротства», а перепроектирование бизнеса под новые условия: новая модель, новые источники дохода, новая команда, новая упаковка. Прошли это сами и теперь делаем для других — где другие видят тупик, мы видим точку перезапуска.",
      en: "Crisis turnaround isn’t «rescue from bankruptcy». It’s redesigning the business for new conditions: new model, new revenue streams, new team, new packaging. We went through it ourselves and now do it for others — where others see a dead end, we see a restart point.",
    },
    c3Metric: { ru: "Пересборка вместо банкротства", en: "Rebuild, not bankruptcy" },
  },

  // === DLYA KOGO (segments) ===
  dlyakogo: {
    eyebrow: { ru: "— Для кого мы работаем", en: "— Who we work with" },
    title: { ru: "Семь точек входа в работу с нами", en: "Seven entry points into working with us" },
    s1Title: { ru: "Предприниматель", en: "The entrepreneur" },
    s1Body: {
      ru: "Тот, кто строит новое и хочет перейти из хаоса в систему. Помогаем собрать стратегию, упаковку, команду и публичное позиционирование. Делаем вас причиной собственного результата — и точкой влияния, а не «ещё одним основателем».",
      en: "The one who builds new and wants to move from chaos to system. We assemble the strategy, packaging, team, and public positioning. We make you the cause of your own result — and a point of influence, not «just another founder».",
    },
    s2Title: { ru: "Бизнес", en: "The business" },
    s2Body: {
      ru: "Когда продукт есть, выручка есть, но рост остановился. Пересобираем бизнес-модель, источники роста, ценообразование, продажи и команду. Не «оптимизация процессов» — а перепроектирование под новые условия рынка.",
      en: "When the product is there, revenue is there, but growth has stalled. We rebuild the business model, growth sources, pricing, sales, and team. Not «process optimisation» — but a redesign for new market conditions.",
    },
    s3Title: { ru: "Земля и девелопмент", en: "Land and development" },
    s3Body: {
      ru: "Флагман нашей работы. Капитализируем участок в готовый инвестиционный продукт: мастер-план, финмодель, документация, проектное финансирование, маркетинг, отдел продаж. Стоимость актива растёт в 2–4 раза, сроки продажи короче в 2–3 раза.",
      en: "Our flagship offering. We capitalise a plot into a finished investment product: master plan, financial model, paperwork, project finance, marketing, sales team. Asset value rises 2–4×; time-to-sell shortens 2–3×.",
    },
    s4Title: { ru: "Капитал и масштабирование", en: "Capital and scaling" },
    s4Body: {
      ru: "Привлечение проектного финансирования, инвесторов и партнёров. Структурирование сделки, упаковка под банк или фонд, выход на новые юрисдикции. Первое в России проектное финансирование ИЖС — наш кейс. Делаем то же самое теперь для других.",
      en: "Bringing in project finance, investors, and partners. Deal structuring, packaging for a bank or fund, expansion into new jurisdictions. Russia’s first project-finance for single-family housing is our case. Now we do the same for others.",
    },
    s5Title: { ru: "Публичность и влияние", en: "Public profile and influence" },
    s5Body: {
      ru: "Превращаем основателя в точку влияния, а компанию — в узнаваемый бренд. Стратегия публичности, медиа, спикерство, контент, коммуникация с регулятором. У нас за плечами — государственный Фонд, OPENDEVELOP.RU, 15+ выступлений и публикации в РБК, Интерфаксе, Ведомостях.",
      en: "We turn the founder into a point of influence and the company into a recognisable brand. Public-profile strategy, media, speaking, content, communication with regulators. Our track record: the State Fund, OPENDEVELOP.RU, 15+ public talks, and coverage in RBC, Interfax, Vedomosti.",
    },
    s6Title: { ru: "Производство и агро", en: "Manufacturing and agri" },
    s6Body: {
      ru: "Реальный сектор — производство, агроиндустрия, перерабатывающие кластеры. Помогаем с продуктовой стратегией, выходом в розницу, упаковкой под подписные модели, цифровизацией продаж и привлечением институционального капитала.",
      en: "The real sector — manufacturing, agri, processing clusters. We work on product strategy, retail entry, subscription-model packaging, sales digitisation, and bringing in institutional capital.",
    },
    s7Title: { ru: "Антикризисная пересборка", en: "Crisis rebuild" },
    s7Body: {
      ru: "Когда привычный двигатель перестал везти. Не «спасение от банкротства» — а перепроектирование под новые условия: новая модель, новые источники роста, новая команда, новая упаковка. Прошли это сами. Без юриспруденции.",
      en: "When the engine that used to drive the business has stopped. Not «rescue from bankruptcy» — but redesign for new conditions: new model, new growth sources, new team, new packaging. We have lived through this ourselves. No litigation.",
    },
    s8Title: { ru: "", en: "" },
    s8Body: { ru: "", en: "" },
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

  // === KAK (что получает клиент — outcomes, not services) ===
  kak: {
    eyebrow: { ru: "— Что получает клиент", en: "— What the client gets" },
    title1: { ru: "Не услуги. ", en: "Not services. " },
    title2: { ru: "Результаты.", en: "Outcomes." },
    intro: {
      ru: "Мы не продаём «консультации» или «упаковку». Мы продаём переход — из точки, где предприниматель застрял, в точку, где у него собрана работающая система. Десять конкретных результатов, которые остаются у клиента после работы с нами.",
      en: "We don't sell «consulting» or «packaging». We sell a transition — from the point where the entrepreneur is stuck to the point where a working system is assembled around them. Ten concrete outcomes the client keeps after working with us.",
    },
    r1Title: { ru: "Выход из хаоса", en: "Exit from chaos" },
    r1Body: {
      ru: "Главное, ради чего к нам приходят. Перестаёт «гореть всё сразу», появляется понятный порядок шагов, приоритеты, фокус.",
      en: "The main reason clients come to us. The «everything's on fire» state ends — what replaces it is a clear order of steps, priorities, focus.",
    },
    r2Title: { ru: "Новая стратегия", en: "A new strategy" },
    r2Body: {
      ru: "Не «презентация на 60 слайдов», а решение: где ваша точка роста на ближайшие 3 года и какие 3–5 шагов туда ведут.",
      en: "Not a «60-slide deck», but a decision: where your point of growth lies for the next 3 years, and which 3–5 steps lead there.",
    },
    r3Title: { ru: "Финансовая модель", en: "Financial model" },
    r3Body: {
      ru: "Прозрачная модель, в которой видно: где деньги зарабатываются, где сгорают, где запас и где упущенная прибыль. Под банк, под фонд, под партнёра.",
      en: "A transparent model that shows where money is made, where it burns, where the buffer sits, and where profit is being left on the table. Bank-ready, fund-ready, partner-ready.",
    },
    r4Title: { ru: "Упаковка проекта", en: "Project packaging" },
    r4Body: {
      ru: "Проект, который понятен инвестору, банку, партнёру, клиенту и команде — одинаково. Один язык, одна история, одна логика.",
      en: "A project that reads the same way to investor, bank, partner, client, and team. One language, one story, one logic.",
    },
    r5Title: { ru: "Рост капитализации", en: "Higher capitalisation" },
    r5Body: {
      ru: "Стоимость актива растёт в 2–4 раза — не «когда-нибудь», а в горизонте проекта. Не на бумаге — в реальной сделке.",
      en: "Asset value rises 2–4× — not «someday», but within the project horizon. Not on paper — in a real transaction.",
    },
    r6Title: { ru: "Запуск продаж", en: "Sales launch" },
    r6Body: {
      ru: "Готовый отдел продаж: люди, скрипты, воронка, CRM, обучение. Не «маркетинг ради маркетинга» — конкретные сделки в первые месяцы.",
      en: "A turnkey sales unit: people, scripts, funnel, CRM, training. Not «marketing for the sake of marketing» — actual deals within the first months.",
    },
    r7Title: { ru: "Привлечение партнёров", en: "Bringing in partners" },
    r7Body: {
      ru: "Инвесторы, соинвесторы, технологические и инфраструктурные партнёры. Соединяем тех, кого «не положено» — и собираем сделки, которых раньше не существовало.",
      en: "Investors, co-investors, technology and infrastructure partners. We connect parties «not supposed» to meet — and assemble deals that didn't exist before.",
    },
    r8Title: { ru: "Проектное финансирование", en: "Project finance" },
    r8Body: {
      ru: "От упаковки сделки до решения банка. Первое в России проектное финансирование ИЖС — наш кейс. Дальше делаем то же самое для других.",
      en: "From deal packaging to a bank decision. Russia's first project-finance for single-family housing is our case. Now we do the same for others.",
    },
    r9Title: { ru: "Пересборка команды", en: "Team rebuild" },
    r9Body: {
      ru: "Команда, которая способна везти новую модель. Не «обучение персонала», а ясные роли, ясные KPI, ясные деньги. Кого оставить, кого нанять, кого отпустить.",
      en: "A team that can carry the new model. Not «staff training», but clear roles, clear KPIs, clear money. Who stays, who's hired, who moves on.",
    },
    r10Title: { ru: "Публичное позиционирование", en: "Public positioning" },
    r10Body: {
      ru: "Основатель — точка влияния, компания — узнаваемый бренд. Стратегия публичности, медиа, спикерство, диалог с регулятором.",
      en: "The founder becomes a point of influence; the company becomes a recognisable brand. Public-profile strategy, media, speaking, dialogue with regulators.",
    },
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
      ru: "— Виолетта Басина, основатель BGM Consulting",
      en: "— Violetta Basina, Founder of BGM Consulting",
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
    submit: { ru: "Записаться на консультацию →", en: "Book a consultation →" },
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
