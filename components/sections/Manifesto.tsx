import { Reveal } from "@/components/ui/Reveal";

const promises = [
  {
    n: "01",
    title: "Доход",
    body:
      "Гарантируем максимальный уровень дохода собственника земли, который невозможно получить без нас — с учётом любого альтернативного способа использования участка. Тезис применим не только к долгосрочной перспективе, но и к каждому этапу развития проекта.",
    epigraph: "Мы — люди дела и для дела.",
  },
  {
    n: "02",
    title: "Технологичность",
    body:
      "ESG, LEED, BIM (ТИМ), carbon-free — для нас не просто слова. Используем современные технологии и последние достижения науки, адаптируем под российские реалии и внедряем с опережением других участников рынка. Готовим собственный НИОКР для малоэтажного строительства.",
    epigraph: "Сможете повторить? То-то же.",
  },
  {
    n: "03",
    title: "Эстетика",
    body:
      "Всё, ЧТО и КАК мы делаем — эстетически приятно, красиво, радует все органы чувств, вызывает гордость обладанием и вдохновляет на свершения. Наши проекты не просто комфортны — они задают тон и стиль жизни, развивают чувство прекрасного.",
    epigraph: "Будешь гордиться.",
  },
];

const values = [
  {
    title: "Прозрачность взаимодействия",
    body:
      "Никаких подводных камней, мелких шрифтов, невыполненных обещаний и недоговорённостей. Тайминг, статус задач, документы — всегда прозрачно и доступно для контроля. Сказали — сделали.",
  },
  {
    title: "Primum non nocere — не навреди",
    body:
      "Наша компания, сотрудники и проекты не ущемляют чьих-либо прав ни в юридическом, ни в моральном аспекте. Не участвуем в противоправных и аморальных действиях, не наносим вред рынку, партнёрам, окружающей среде — только честная борьба по правилам.",
  },
  {
    title: "Trendspotting & Trendsetting",
    body:
      "Мы не догоняем тренды — мы их выявляем и создаём. «Приземляем» их в контекст и реалии места и времени, популяризируем. Наши продукты создаются для долговременного использования, мы работаем кроме актуального ещё и с симбиозом вечного и будущего.",
  },
];

export function Manifesto() {
  return (
    <section className="bg-cream-50">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">— Кто такие Basina &amp; Partners</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight max-w-4xl">
            Мы — продюсерская компания.<br />
            <span className="text-gold-500">Землепродюсеры.</span>{" "}
            <span className="text-navy-700">Development producers.</span>
          </h2>
          <p className="mt-8 text-base md:text-lg text-navy-900/80 leading-relaxed max-w-3xl">
            Работаем на стыке функций fi-девелопера, финансового брокера, архитектурного бюро,
            управляющей компании и консалтинга в области маркетинга и продаж. Наши проекты
            создают и поддерживают высокую культуру малоэтажной застройки, домовладения и
            добрососедства. Берём ответственность быть амбассадорами комфортабельного ИЖС и
            «зелёного» строительства по стандартам ESG, с перспективой выхода на уникальный для
            рынка стандарт carbon-free.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start border-t border-navy-900/15 pt-12">
            <div>
              <p className="eyebrow mb-3 text-navy-900/60">Наша миссия</p>
              <p className="font-serif text-2xl md:text-3xl lg:text-[34px] text-navy-900 leading-[1.15]">
                Постоянно развивать культуру малоэтажного индивидуального строительства и
                проживания за городом.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3 text-navy-900/60">Слоган</p>
              <p className="font-serif text-3xl md:text-4xl lg:text-[44px] text-gold-500 leading-tight">
                Делаем&nbsp;проекты-звёзды.
              </p>
              <p className="mt-4 text-sm text-navy-900/70 leading-relaxed max-w-md">
                Звезда — проект, который выделяется на рынке, приносит доход собственнику и
                оставляет наследие сообществу. Каждая наша работа целит именно туда: в проекты
                с долгой ценностной памятью.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="eyebrow mb-3">— Три обещания бренда</p>
            <h3 className="font-serif text-2xl md:text-3xl text-navy-900 leading-tight">
              Что вы получаете от партнёрства с нами
            </h3>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {promises.map((p, i) => (
              <Reveal key={p.n} delay={0.06 + i * 0.05}>
                <article className="bg-navy-900 text-cream-100 p-7 md:p-8 h-full flex flex-col">
                  <div className="font-serif text-5xl text-gold-500 leading-none mb-5">{p.n}</div>
                  <h4 className="font-serif text-xl md:text-2xl text-cream-100 mb-3">{p.title}</h4>
                  <p className="text-[14px] leading-relaxed text-cream-100/80 mb-5">{p.body}</p>
                  <p className="mt-auto pt-4 border-t border-cream-100/15 text-sm italic text-gold-300">
                    «{p.epigraph}»
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="eyebrow mb-3">— Атрибуты и ценности</p>
            <h3 className="font-serif text-2xl md:text-3xl text-navy-900 leading-tight">
              Три принципа, которые держат всю работу
            </h3>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-px bg-navy-900/15">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.04 + i * 0.04}>
                <article className="bg-cream-50 p-7 md:p-8 h-full">
                  <h4 className="font-serif text-lg md:text-xl text-navy-900 mb-3 leading-snug">
                    {v.title}
                  </h4>
                  <p className="text-navy-900/75 text-[14px] leading-relaxed">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
