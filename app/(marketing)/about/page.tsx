import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { awardsByCategory } from "@/lib/awards";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Виолетта Басина — основатель ${site.name}`,
  description:
    "Один из основателей загородного девелопмента России. Создала первое в стране проектное финансирование ИЖС. Лауреат Dubai Award 2023.",
};

const topRegalia = [
  "Dubai International Award №1 (2023)",
  "Действительный член Международной Академии Ипотеки и Недвижимости (2022)",
  "Кавалер Почётного знака «Строительная Слава» (2019)",
  "Благодарность Президента НОСТРОЙ (2023)",
  "Лауреат премии «Российский Строительный Олимп»",
];

const storyChapters = [
  {
    year: "2009–2013",
    title: "Начало в управлении",
    text:
      "Первая управленческая позиция — НП «Пожарная безопасность» (2009). Параллельно — ООО «УК „МИР“» (управление эксплуатацией жилого фонда). Ассоциация «ОЮЛ СОН» — консалтинг и саморегулирование в обороте недвижимости.",
  },
  {
    year: "2013–2017",
    title: "Реформа защиты прав дольщиков",
    text:
      "Через комиссию Минстроя РФ под руководством Натальи Антипиной — инициатор отмены неработающего страхования по 214-ФЗ и создания государственного Фонда защиты прав дольщиков. Поддержка реформы Замминистром Никитой Стасишиным.",
  },
  {
    year: "2019–2022",
    title: "Омакульма-Аннино",
    text:
      "Первый в России горизонтальный жилой комплекс на ИЖС с проектным финансированием Банка ДОМ.РФ (28.12.2020). Запуск первой льготной ИЖС-ипотеки (от 6,1%) в 2021. Сокращение срока её одобрения с 2 месяцев до 5 дней. 198 домовладений на 18 га. Лауреат Dubai International Award №1 (2023).",
  },
  {
    year: "2022–2025",
    title: "Антирейдерская модель",
    text:
      "После начала давления на ГК «Омакульма» — поиск пути сохранить актив. Создание параллельной легальной структуры через ст. 582 ГК РФ — народный благотворительный фонд «Земская среда» для выкупа активов у банков и передачи нуждающимся семьям.",
  },
  {
    year: "2026 —",
    title: "Basina & Partners в Ереване",
    text:
      "ООО «Басина и партнёры» зарегистрировано в Армении (рег. 85.110.1476680). Параллельный девелоперский проект — Норк-Мараш Апарт-Отель (527 апартаментов). Стратегический консалтинг для рынков России, Армении и Кыргызстана.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="— Кто за этим стоит"
        title={
          <>
            Виолетта <span className="text-gold-500">Басина</span>
          </>
        }
        subtitle="Один из основателей современного загородного жилищного строительства в России. Создала первое в стране проектное финансирование ИЖС (Банк ДОМ.РФ, 28.12.2020), первую льготную ИЖС-ипотеку (2021), инициировала государственный Фонд защиты прав дольщиков. Мама троих сыновей."
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

      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">— История</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-12">
              Пять глав, которые сформировали практику
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

      <section id="regalia" className="bg-navy-900 text-cream-100 scroll-mt-24">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">— Награды и регалии</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-12">
              Полный список — 17 регалий и наград
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
              href="/experience"
              className="inline-block text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline transition-colors"
            >
              17 лет в бизнесе — портфель компаний и проектов →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-28 text-center">
          <Reveal>
            <p className="eyebrow mb-4">— Записаться</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6 max-w-3xl mx-auto leading-tight">
              Стратегическая сессия с Виолеттой — 90 минут лично
            </h2>
            <p className="text-grey-500 max-w-2xl mx-auto mb-8">
              Без обязательств. По итогам — понимание, что делать дальше: запустить полный цикл,
              провести корпоративную сессию или работать самостоятельно с рекомендациями.
            </p>
            <Button href="/contacts#form" variant="primary">
              Записаться на сессию →
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
