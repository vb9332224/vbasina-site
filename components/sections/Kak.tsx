import { Reveal } from "@/components/ui/Reveal";
import { dict, t } from "@/lib/i18n/dict";
import { Locale } from "@/lib/i18n/types";

type Outcome = {
  titleKey: keyof typeof dict.kak;
  bodyKey: keyof typeof dict.kak;
};

const outcomes: Outcome[] = [
  { titleKey: "r1Title", bodyKey: "r1Body" },
  { titleKey: "r2Title", bodyKey: "r2Body" },
  { titleKey: "r3Title", bodyKey: "r3Body" },
  { titleKey: "r4Title", bodyKey: "r4Body" },
  { titleKey: "r5Title", bodyKey: "r5Body" },
  { titleKey: "r6Title", bodyKey: "r6Body" },
  { titleKey: "r7Title", bodyKey: "r7Body" },
  { titleKey: "r8Title", bodyKey: "r8Body" },
  { titleKey: "r9Title", bodyKey: "r9Body" },
  { titleKey: "r10Title", bodyKey: "r10Body" },
];

export function Kak({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">{t(locale, (d) => d.kak.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 max-w-3xl leading-tight">
            {t(locale, (d) => d.kak.title1)}
            <span className="text-gold-500">{t(locale, (d) => d.kak.title2)}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 text-cream-100/75 text-base md:text-lg max-w-3xl leading-relaxed">
            {t(locale, (d) => d.kak.intro)}
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-navy-800/60">
          {outcomes.map((o, i) => (
            <Reveal key={o.titleKey} delay={(i % 5) * 0.04}>
              <div className="bg-navy-900 p-6 md:p-7 h-full">
                <div className="font-serif text-2xl md:text-3xl text-gold-500 leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg md:text-xl text-cream-100 mb-3 leading-snug">
                  {t(locale, (d) => d.kak[o.titleKey] as { ru: string; en: string })}
                </h3>
                <p className="text-cream-100/70 text-[13.5px] leading-relaxed">
                  {t(locale, (d) => d.kak[o.bodyKey] as { ru: string; en: string })}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
