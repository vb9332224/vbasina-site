import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/sections/LeadForm";
import { dict, t } from "@/lib/i18n/dict";
import { Locale } from "@/lib/i18n/types";

export function CtaBlock({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section id="form" className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <p className="eyebrow mb-5">{t(locale, (d) => d.ctaBlock.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 leading-tight">
            {t(locale, (d) => d.ctaBlock.title)}
          </h2>
          <p className="mt-6 text-cream-100/75 leading-relaxed max-w-xl">
            {t(locale, (d) => d.ctaBlock.body)}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-navy-800/40 border border-cream-100/10 p-7 md:p-9">
            <LeadForm locale={locale} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
