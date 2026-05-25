import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const outlets = [
  "РБК Недвижимость",
  "Ведомости",
  "Интерфакс-Недвижимость",
  "ЕРЗ.РФ",
  "Деловой Петербург",
  "ЦИАН",
  "АСН-инфо",
  "ЕвроМедиа",
];

const quotes = [
  {
    text:
      "«Виолетта Басина — генеральный директор ГК Omakulma, председатель комитета РСС по взаимодействию застройщиков и собственников жилья».",
    source: "РБК Недвижимость, 2020",
  },
  {
    text:
      "«Глава Ассоциации женщин, меняющих территории, автор проекта „Земская среда“ Виолетта Басина».",
    source: "ЕвроМедиа, февраль 2026",
  },
];

export function MediaSection() {
  return (
    <section className="bg-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-5 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow mb-5">— О нас писали</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight">
            Подтверждённые источники признания
          </h2>
          <Link
            href="/media"
            className="inline-block mt-8 text-gold-500 hover:text-navy-900 underline-offset-4 hover:underline transition-colors"
          >
            Все публикации в СМИ →
          </Link>
        </Reveal>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-900/15">
            {outlets.map((name) => (
              <div
                key={name}
                className="bg-cream-100 px-4 py-7 flex items-center justify-center text-center"
              >
                <p className="font-serif text-sm md:text-base text-navy-900/85 leading-tight">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {quotes.map((q) => (
              <Reveal key={q.source}>
                <figure>
                  <blockquote className="font-serif italic text-lg md:text-xl text-navy-900 leading-snug">
                    {q.text}
                  </blockquote>
                  <figcaption className="mt-2 text-xs uppercase tracking-[0.14em] text-gold-500">
                    {q.source}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
