import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { companies, industries } from "@/lib/companies";

export const metadata: Metadata = {
  title: "17 лет в бизнесе — Виолетта Басина",
  description:
    "Шесть отраслей. Тринадцать компаний. С 2009 года — недвижимость, девелопмент, энергетика, образование, фонды.",
};

const figures = [
  { value: "2009", label: "первая управленческая позиция (НП «Пожарная безопасность»)" },
  { value: "5", label: "компаний как руководитель" },
  { value: "14", label: "компаний как учредитель" },
  { value: "6", label: "отраслей в бизнес-портфеле" },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="— 17 лет в бизнесе"
        title={
          <>
            17 лет<br />
            <span className="text-gold-500">в бизнесе</span>
          </>
        }
        subtitle="Шесть отраслей. Тринадцать компаний. Тысячи решений, проверенных временем."
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 border-t border-navy-800 pt-10">
          {figures.map((f, i) => (
            <Reveal key={f.value} delay={i * 0.04}>
              <div>
                <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold-500 leading-none">
                  {f.value}
                </div>
                <p className="mt-3 text-sm text-cream-100/70 leading-snug max-w-[200px]">
                  {f.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageHero>

      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">— Таймлайн компаний</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-3">
              Портфель компаний с 2009 года
            </h2>
            <p className="text-grey-500 max-w-3xl mb-12">
              Данные из публичного реестра ЕГРЮЛ (zachestnyibiznes.ru). Часть позиций требует
              верификации по точным датам и роли.
            </p>
          </Reveal>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-navy-900/15">
                  <th className="py-4 pr-6 font-serif text-sm uppercase tracking-[0.14em] text-gold-500 align-bottom">
                    Компания
                  </th>
                  <th className="py-4 pr-6 font-serif text-sm uppercase tracking-[0.14em] text-gold-500 align-bottom whitespace-nowrap">
                    Период
                  </th>
                  <th className="py-4 pr-6 font-serif text-sm uppercase tracking-[0.14em] text-gold-500 align-bottom whitespace-nowrap">
                    Роль
                  </th>
                  <th className="py-4 font-serif text-sm uppercase tracking-[0.14em] text-gold-500 align-bottom">
                    Сфера / результат
                  </th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.name} className="border-b border-navy-900/10 align-top">
                    <td className="py-5 pr-6 font-serif text-base md:text-lg text-navy-900">
                      {c.name}
                    </td>
                    <td className="py-5 pr-6 text-sm text-grey-500 whitespace-nowrap">
                      {c.period}
                    </td>
                    <td className="py-5 pr-6 text-sm text-navy-900">{c.role}</td>
                    <td className="py-5 text-sm text-grey-500 leading-relaxed">{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-5">— По отраслям</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-12">
              Опыт сгруппирован по сферам
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {industries.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.04}>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-gold-500 mb-5 pb-3 border-b border-navy-800">
                    {g.name}
                  </h3>
                  <ul className="space-y-3">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 text-cream-100/85 leading-relaxed text-[15px]">
                        <span className="text-gold-500 mt-1.5 shrink-0">◆</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6 max-w-3xl mx-auto leading-tight">
              Хотите обсудить ваш проект с 17-летним практиком?
            </h2>
            <Button href="/contacts#form">Записаться на стратегическую сессию →</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
