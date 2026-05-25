import { Reveal } from "@/components/ui/Reveal";
import { dict, t } from "@/lib/i18n/dict";
import { Locale } from "@/lib/i18n/types";

export function Zachem({ locale = "ru" }: { locale?: Locale }) {
  const cards = [
    {
      n: "01",
      title: t(locale, (d) => d.zachem.c1Title),
      body: t(locale, (d) => d.zachem.c1Body),
      metric: t(locale, (d) => d.zachem.c1Metric),
    },
    {
      n: "02",
      title: t(locale, (d) => d.zachem.c2Title),
      body: t(locale, (d) => d.zachem.c2Body),
      metric: t(locale, (d) => d.zachem.c2Metric),
    },
    {
      n: "03",
      title: t(locale, (d) => d.zachem.c3Title),
      body: t(locale, (d) => d.zachem.c3Body),
      metric: t(locale, (d) => d.zachem.c3Metric),
    },
  ];

  return (
    <section className="bg-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-5 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-5">{t(locale, (d) => d.zachem.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight">
            {t(locale, (d) => d.zachem.title)}
          </h2>
          <p className="mt-6 text-grey-500 leading-relaxed">
            {t(locale, (d) => d.zachem.body)}
          </p>
        </Reveal>

        <div className="lg:col-span-3 flex flex-col gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.06}>
              <article className="group bg-navy-900 text-cream-100 p-8 md:p-10 flex gap-6 md:gap-8 border border-navy-800 hover:border-gold-500/60 transition-colors">
                <div className="font-serif text-5xl md:text-6xl text-gold-500 leading-none shrink-0">
                  {c.n}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-cream-100 mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-cream-100/75 text-[15px] leading-relaxed mb-5">{c.body}</p>
                  <p className="inline-block text-[11px] uppercase tracking-[0.16em] text-gold-500 border-t border-gold-500/30 pt-3">
                    {c.metric}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
