import { Reveal } from "@/components/ui/Reveal";
import { dict, t } from "@/lib/i18n/dict";
import { Locale } from "@/lib/i18n/types";

export function Manifesto({ locale = "ru" }: { locale?: Locale }) {
  const promises = [
    {
      n: "01",
      title: t(locale, (d) => d.manifesto.p1Title),
      body: t(locale, (d) => d.manifesto.p1Body),
      epigraph: t(locale, (d) => d.manifesto.p1Quote),
    },
    {
      n: "02",
      title: t(locale, (d) => d.manifesto.p2Title),
      body: t(locale, (d) => d.manifesto.p2Body),
      epigraph: t(locale, (d) => d.manifesto.p2Quote),
    },
    {
      n: "03",
      title: t(locale, (d) => d.manifesto.p3Title),
      body: t(locale, (d) => d.manifesto.p3Body),
      epigraph: t(locale, (d) => d.manifesto.p3Quote),
    },
  ];
  const values = [
    {
      title: t(locale, (d) => d.manifesto.v1Title),
      body: t(locale, (d) => d.manifesto.v1Body),
    },
    {
      title: t(locale, (d) => d.manifesto.v2Title),
      body: t(locale, (d) => d.manifesto.v2Body),
    },
    {
      title: t(locale, (d) => d.manifesto.v3Title),
      body: t(locale, (d) => d.manifesto.v3Body),
    },
  ];

  return (
    <section className="bg-cream-50">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">{t(locale, (d) => d.manifesto.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight max-w-4xl">
            {t(locale, (d) => d.manifesto.title1)}<br />
            <span className="text-gold-500">{t(locale, (d) => d.manifesto.title2)}</span>{" "}
            <span className="text-navy-700">{t(locale, (d) => d.manifesto.title3)}</span>
          </h2>
          <p className="mt-8 text-base md:text-lg text-navy-900/80 leading-relaxed max-w-3xl">
            {t(locale, (d) => d.manifesto.intro)}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start border-t border-navy-900/15 pt-12">
            <div>
              <p className="eyebrow mb-3 text-navy-900/60">{t(locale, (d) => d.manifesto.missionLabel)}</p>
              <p className="font-serif text-2xl md:text-3xl lg:text-[34px] text-navy-900 leading-[1.15]">
                {t(locale, (d) => d.manifesto.mission)}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3 text-navy-900/60">{t(locale, (d) => d.manifesto.sloganLabel)}</p>
              <p className="font-serif text-3xl md:text-4xl lg:text-[44px] text-gold-500 leading-tight">
                {t(locale, (d) => d.manifesto.slogan)}
              </p>
              <p className="mt-4 text-sm text-navy-900/70 leading-relaxed max-w-md">
                {t(locale, (d) => d.manifesto.sloganBody)}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <p className="eyebrow mb-3">{t(locale, (d) => d.manifesto.promisesEyebrow)}</p>
            <h3 className="font-serif text-2xl md:text-3xl text-navy-900 leading-tight">
              {t(locale, (d) => d.manifesto.promisesTitle)}
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
            <p className="eyebrow mb-3">{t(locale, (d) => d.manifesto.valuesEyebrow)}</p>
            <h3 className="font-serif text-2xl md:text-3xl text-navy-900 leading-tight">
              {t(locale, (d) => d.manifesto.valuesTitle)}
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
