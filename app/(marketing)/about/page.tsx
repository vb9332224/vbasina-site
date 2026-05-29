import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Assets } from "@/components/sections/Assets";
import { Partners } from "@/components/sections/Partners";
import { awardsByCategory } from "@/lib/awards";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `О компании ${site.name}`,
  description:
    "Землепродюсерская компания, основанная экспертом мирового уровня в загородном девелопменте. Первое в России проектное финансирование ИЖС. Лауреат Dubai International Award №1 2023.",
};

const topRegalia = [
  "Dubai International Award №1 (2023)",
  "Действительный член Международной Академии Ипотеки и Недвижимости (2022)",
  "Кавалер Почётного знака «Строительная Слава» (2019)",
  "Благодарность Президента НОСТРОЙ (2023)",
  "Лауреат премии «Российский Строительный Олимп»",
];

// Чем Виолетта Басина изменила рынок — фактический фундамент бренда
const founderImpact = [
  "Основатель индустриального загородного девелопмента в России и автор первого в стране горизонтального жилого комплекса «Омакульма-Аннино».",
  "Инициатор и реализатор проектного финансирования и применения эскроу-счетов в ИЖС — первой в России довела механизм до реальной сделки и защитила семьи от недобросовестных подрядчиков.",
  "Инициировала и пролоббировала запуск ипотеки на строительство частных домов; добилась распространения льготных государственных программ по ставкам на ИЖС.",
  "Сделала рынок загородного девелопмента прозрачным и доступным для каждой семьи — ведь покупатель дома — это семья.",
  "В сегменте многоквартирного строительства выступила инициатором фонда защиты дольщиков в рамках 214-ФЗ — взамен неработавшего страхования договоров долевого участия.",
  "Первой показала, что такое индустриальное строительство в загородном девелопменте — серийное, технологичное, предсказуемое по качеству и срокам.",
];

// Цели компании
const goals = [
  {
    t: "Земля → проект-звезда",
    d: "Превращать участки в живые проекты, которые растут в цене и в которых хочется жить поколениями.",
  },
  {
    t: "Доступность для семей",
    d: "Делать загородную жизнь достойной и доступной — через прозрачные правовые и финансовые модели.",
  },
  {
    t: "Стандарты отрасли",
    d: "Задавать отраслевые стандарты в финансировании, праве и качестве загородного девелопмента.",
  },
  {
    t: "Зрелая школа — в СНГ",
    d: "Приносить школу российского девелопмента на рынки Армении, Кыргызстана, Азербайджана, Таджикистана.",
  },
];

const storyChapters = [
  {
    year: "2009–2026",
    title: "150+ реализованных проектов — от медицины до девелопмента",
    text:
      "Опорный период работы. За 17 лет реализовано более 150 проектов в шести индустриях: жилищный девелопмент и ИЖС, медицина, образование, фонды и общественные институты, энергетика, агроиндустрия. Эта горизонтальная экспертиза — основа того, как BGM Consulting собирает девелоперские продукты сегодня: системно, через смыслы и через стыки отраслей.",
  },
  {
    year: "2010–2018",
    title: "OPENDEVELOP.RU — инфраструктура отрасли",
    text:
      "Основан общероссийский социальный проект OPENDEVELOP.RU — Единая база застройщиков для защиты дольщиков и независимой оценки надёжности девелоперов. К 2015 году в базе — 2 285 застройщиков, 3 719 объектов, 40 параметров проверки каждого. Обработано 6 923 обращения граждан, проведено 248 бесплатных юр. консультаций. Параллельно — Академия Недвижимости, через которую обучено 13 000+ агентов, из них 3 000+ — под продажу ИЖС.",
  },
  {
    year: "2013–2017",
    title: "Реформа защиты прав дольщиков",
    text:
      "Председатель Комитета Российского Союза Строителей по взаимодействию застройщиков и собственников жилья. В феврале 2015 — Комитет создал Компенсационный фонд защиты дольщиков. Через комиссию Минстроя РФ под руководством Натальи Антипиной — инициатор отмены неработающего страхования по 214-ФЗ. Реформа реализована при поддержке Замминистра Никиты Стасишина и публично поддержана Президентом РФ В.В. Путиным.",
  },
  {
    year: "2019–2022",
    title: "Омакульма-Аннино — первое в России",
    text:
      "Первый в стране горизонтальный жилой комплекс на ИЖС с проектным финансированием Банка ДОМ.РФ (кредитный договор от 28.12.2020). Запуск первой льготной ИЖС-ипотеки от 6,1% (2021), сокращение срока её одобрения с 2 месяцев до 5 дней. 198 домовладений на 18 га. Dubai International Award №1 (2023), лауреат премии «Российский Строительный Олимп», победитель конкурса Минстрой + Минпромторг + ДОМ.РФ.",
  },
  {
    year: "2022–2026",
    title: "Рейдерский захват девелоперской компании",
    text:
      "Четыре года прохождения рейдерского сценария на собственной девелоперской компании. Опыт, который невозможно прочитать в книгах: банкротный механизм через банк, конкурсный управляющий, скупка лотов. Из этой практики родился отдельный экспертный пласт — как защитить девелоперский проект от захвата на этапе его создания: акционерная структура, юридическая модель, договорная база, медиа-периметр. Это знание сегодня закладывается в каждый новый проект BGM Consulting ещё до выбора участка.",
  },
  {
    year: "2024–2025",
    title: "Метод Басиной и Гергель",
    text:
      "Совместно с Яной Гергель оформлен методологический фундамент — 8 слоёв создания девелоперского проекта (предназначение, душа, вкус, цвет, запах, ритм, звук, осязание). Метод применён к проектам BGM Consulting в России и СНГ. Параллельно — народный фонд «Земская среда» как масштабная социальная инициатива через ст. 582 ГК РФ.",
  },
  {
    year: "2026 —",
    title: "BGM Consulting — выход в СНГ",
    text:
      "ООО «Басина и партнёры» зарегистрировано в Армении (рег. 85.110.1476680). Флагманский проект Ереванского портфеля — апарт-отель BGM Residence в Норк-Мараш (527 апартаментов). Стратегическое присутствие на рынках Армении, Кыргызстана, Азербайджана, Таджикистана — где институциональный девелопмент только формируется и нет экспертов уровня российской школы.",
  },
];

const figuresBlock = [
  { v: "150+", label: "придуманных и реализованных проектов" },
  {
    v: "17 лет",
    label:
      "в недвижимости: строительство, управление, продажи, маркетинг, фи-девелопмент, девелопмент",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="— О компании"
        title={
          <>
            BGM <span className="text-gold-500">·</span> Consulting
          </>
        }
        subtitle="Землепродюсерская компания: создаём индустрии и превращаем землю в инвестиционно-привлекательные продукты — там, где институциональный девелопмент только формируется. За брендом BGM Consulting стоит Виолетта Басина — основатель индустриального загородного девелопмента в России и автор первого в стране горизонтального жилого комплекса."
      >
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-cream-100/85 text-sm">
          {topRegalia.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <span className="text-gold-500 mt-1.5">◆</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* КТО ЗА ЭТИМ СТОИТ — вклад основателя */}
      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow mb-5">— Кто за этим стоит</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 leading-tight">
              Виолетта Басина — <span className="text-gold-500">визионер и меценат</span>
            </h2>
            <p className="mt-6 text-cream-100/75 leading-relaxed">
              Не просто девелопер и предприниматель. Человек, который менял правила целой
              отрасли — и задавал тренды, которым следует рынок.
            </p>
          </Reveal>

          <div className="lg:col-span-3">
            <ul className="space-y-6">
              {founderImpact.map((item) => (
                <Reveal key={item}>
                  <li className="flex gap-4">
                    <span className="text-gold-500 mt-2 shrink-0">—</span>
                    <p className="text-cream-100/90 text-base md:text-lg leading-relaxed">
                      {item}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <p className="mt-12 font-serif text-xl md:text-2xl text-gold-300 leading-snug border-l-2 border-gold-500 pl-6 md:pl-8">
                Мы — новаторы. Мы задаём тренды. И никто не разбирается в земле и в
                правовых отношениях с ней так, как наша команда. Это наша сила и наше
                преимущество.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* МИССИЯ И ЦЕЛИ */}
      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">— Миссия</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[52px] text-navy-900 leading-[1.1] max-w-4xl">
              Делать загородную жизнь доступной и достойной для каждой семьи — и создавать
              территории, <span className="text-gold-500">которыми гордятся поколениями</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 text-grey-500 text-lg leading-relaxed max-w-3xl">
              Мы не строим на земле — мы выводим из неё проект. Через смысл, право, финансы
              и архитектуру превращаем участок в живой организм, который растёт сам, потому
              что ему есть откуда расти.
            </p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-900/15">
            {goals.map((g, i) => (
              <Reveal key={g.t} delay={(i % 4) * 0.05}>
                <div className="bg-cream-50 p-7 md:p-8 h-full">
                  <div className="font-serif text-3xl text-gold-500 leading-none mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-navy-900 mb-3 leading-snug">
                    {g.t}
                  </h3>
                  <p className="text-grey-500 text-[15px] leading-relaxed">{g.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Partners locale="ru" />

      <section className="bg-cream-100">
        <div className="container-x py-16 md:py-20">
          <Reveal>
            <p className="eyebrow mb-5">— 17 лет в цифрах</p>
            <h2 className="font-serif text-2xl md:text-3xl text-navy-900 leading-tight max-w-3xl mb-12">
              Каждая цифра — публично проверяема: реестры ЕГРЮЛ, отчёты Комитета РСС, кредитные договоры, государственные награды.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12 border-t border-navy-900/15 pt-12">
            {figuresBlock.map((f, i) => (
              <Reveal key={f.v} delay={i * 0.05}>
                <div>
                  <div className="font-serif text-6xl md:text-7xl lg:text-8xl text-navy-900 leading-none tracking-tight">
                    {f.v}
                  </div>
                  <p className="mt-5 text-base md:text-lg text-grey-500 leading-snug max-w-md">
                    {f.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">— История</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-12">
              Семь глав, которые сформировали BGM Consulting
            </h2>
          </Reveal>

          <ol className="space-y-12 max-w-4xl">
            {storyChapters.map((c, i) => (
              <Reveal as="li" key={c.year} delay={i * 0.04}>
                <article className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 pb-12 border-b border-navy-900/10 last:border-0">
                  <p className="text-sm uppercase tracking-[0.16em] text-gold-500 pt-1">
                    {c.year}
                  </p>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-navy-900 mb-3">
                      {c.title}
                    </h3>
                    <p className="text-grey-500 leading-relaxed">{c.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Assets />

      <section id="regalia" className="bg-navy-900 text-cream-100 scroll-mt-24">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">— Награды и регалии</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-12">
              За это время удостоена наградами <span className="text-gold-300/70 italic font-normal">(это не полный список)</span>
            </h2>
          </Reveal>

          <div className="space-y-12">
            {awardsByCategory.map((cat, idx) => (
              <Reveal key={cat.label} delay={idx * 0.04}>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-gold-500 mb-6 pb-3 border-b border-navy-800">
                    {cat.label}
                  </h3>
                  <ul className="space-y-5">
                    {cat.items.map((a) => (
                      <li key={a.title} className="flex gap-4">
                        <span className="text-gold-500 mt-2 shrink-0">—</span>
                        <div>
                          <p className="text-cream-100 leading-snug">{a.title}</p>
                          {a.meta && (
                            <p className="mt-1 text-sm text-cream-100/60">{a.meta}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-block text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline transition-colors"
            >
              К списку услуг →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-28 text-center">
          <Reveal>
            <p className="eyebrow mb-4">— Записаться</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6 max-w-3xl mx-auto leading-tight">
              Стратегическая сессия — 90 минут лично
            </h2>
            <p className="text-grey-500 max-w-2xl mx-auto mb-8">
              Без обязательств. По итогам — понимание, что делать дальше: запустить полный цикл,
              провести корпоративную сессию или работать самостоятельно с рекомендациями.
            </p>
            <Button href="/contacts#form" variant="primary">
              Записаться на консультацию →
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
