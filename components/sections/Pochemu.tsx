import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { dict, t } from "@/lib/i18n/dict";
import { Locale, localePath } from "@/lib/i18n/types";

const regalia = [
  { ru: "Dubai International Award №1", en: "Dubai International Award №1", year: "2023" },
  { ru: "Строительная Слава РСС", en: "«Building Glory» honour, RBU", year: "2019" },
  { ru: "Действительный член МАИН", en: "Full Member, Intl. Acad. of Mortgage", year: "2022" },
  { ru: "Благодарность Президента НОСТРОЙ", en: "Letter of Gratitude, NOSTROY President", year: "2023" },
  { ru: "Российский Строительный Олимп", en: "Russian Construction Olympus", year: { ru: "лауреат", en: "laureate" } as never },
  { ru: "Победитель Минстрой + Минпромторг + ДОМ.РФ", en: "Winner: MinStroy + MinPromTorg + DOM.RF", year: "—" },
  { ru: "Профессор-практики Академии Городов", en: "Professor of Practice, Cities Academy", year: "—" },
  { ru: "Профессор практики MBA Development", en: "MBA Development Professor of Practice", year: "—" },
  { ru: "Председатель Комитета РСС", en: "Chair, RBU Committee", year: "2013–2024" },
  { ru: "Член рабочей группы ТПП РФ", en: "Member, Russian Chamber of Commerce WG", year: { ru: "в прошлом", en: "former" } as never },
];

export function Pochemu({ locale = "ru" }: { locale?: Locale }) {
  const figures = [
    {
      value: t(locale, (d) => d.pochemu.figure1Value),
      label: t(locale, (d) => d.pochemu.figure1Label),
    },
    {
      value: t(locale, (d) => d.pochemu.figure2Value),
      label: t(locale, (d) => d.pochemu.figure2Label),
    },
  ];

  return (
    <section className="bg-cream-50">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">{t(locale, (d) => d.pochemu.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 max-w-3xl leading-tight">
            {t(locale, (d) => d.pochemu.title)}
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid sm:grid-cols-2 gap-x-10 gap-y-12 border-t border-navy-900/10 pt-12">
          {figures.map((f, i) => (
            <Reveal key={f.value} delay={i * 0.05}>
              <div>
                <div className="font-serif text-6xl md:text-7xl lg:text-[112px] leading-none text-navy-900 tracking-tight">
                  {f.value}
                </div>
                <p className="mt-5 text-base md:text-lg text-grey-500 leading-snug max-w-md">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <Reveal>
            <h3 className="font-serif text-2xl md:text-3xl text-navy-900 mb-8">
              {t(locale, (d) => d.pochemu.regaliaTitle)}
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-navy-900/10">
            {regalia.map((r, i) => {
              const year =
                typeof r.year === "string" ? r.year : (r.year as { ru: string; en: string })[locale];
              return (
                <Reveal key={r.ru} delay={i * 0.03}>
                  <div className="bg-navy-900 text-cream-100 p-5 md:p-6 h-full border border-transparent hover:border-gold-500/40 transition-colors">
                    <p className="font-serif text-[15px] md:text-base text-cream-100 leading-snug">
                      {r[locale]}
                    </p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-gold-500">{year}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href={localePath(locale, "/about#regalia")}
                className="inline-block text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline transition-colors"
              >
                {t(locale, (d) => d.pochemu.seeAll)}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
