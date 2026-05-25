import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { servicesShort, s } from "@/lib/services";
import { dict, t } from "@/lib/i18n/dict";
import { Locale, localePath } from "@/lib/i18n/types";

export function Kak({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">{t(locale, (d) => d.kak.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 max-w-3xl leading-tight">
            {t(locale, (d) => d.kak.title1)}<br />
            {t(locale, (d) => d.kak.title2)}
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-800/60">
          {servicesShort.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.04}>
              <Link
                href={localePath(locale, `/services#${svc.slug}`)}
                className="group block bg-navy-900 hover:bg-navy-800/70 p-7 md:p-8 h-full transition-colors"
              >
                <div className="font-serif text-3xl text-gold-500 leading-none mb-5">
                  {String(svc.id).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg md:text-xl text-cream-100 mb-3 leading-snug">
                  {s(svc.title, locale)}
                </h3>
                <p className="text-xs uppercase tracking-[0.14em] text-gold-500/90 mb-4">
                  {s(svc.term, locale)} · {s(svc.price, locale)}
                </p>
                <p className="text-cream-100/70 text-[14px] leading-relaxed mb-6">
                  {s(svc.short, locale)}
                </p>
                <span className="inline-block text-sm text-gold-500 group-hover:text-gold-300 transition-colors">
                  {t(locale, (d) => d.kak.learnMore)}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
