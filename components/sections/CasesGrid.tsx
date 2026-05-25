import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { casesPreview, c } from "@/lib/cases";
import { dict, t } from "@/lib/i18n/dict";
import { Locale, localePath } from "@/lib/i18n/types";

export function CasesGrid({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="bg-cream-50">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">{t(locale, (d) => d.casesGrid.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 max-w-3xl leading-tight">
            {t(locale, (d) => d.casesGrid.title)}
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {casesPreview.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.05}>
              <Link
                href={localePath(locale, `/cases/${cs.slug}`)}
                className="group block border border-navy-900/15 hover:border-gold-500/60 bg-white transition-colors h-full"
              >
                <div className="aspect-[16/9] bg-navy-900 relative overflow-hidden flex items-center justify-center">
                  {cs.cover ? (
                    <Image
                      src={cs.cover.src}
                      alt={cs.cover.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-[0.10]"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, var(--color-gold-500) 0px, transparent 60%)",
                        }}
                      />
                      <p className="font-serif text-xl text-gold-500/80 uppercase tracking-[0.2em]">
                        {locale === "ru" ? "Фото · placeholder" : "Photo · placeholder"}
                      </p>
                    </>
                  )}
                </div>
                <div className="p-7 md:p-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-gold-500 mb-3">
                    {c(cs.meta, locale)}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-navy-900 mb-3 leading-snug">
                    {c(cs.title, locale)}
                  </h3>
                  <p className="text-grey-500 text-[15px] leading-relaxed mb-5">{c(cs.excerpt, locale)}</p>
                  <span className="inline-block text-sm text-navy-900 group-hover:text-gold-500 transition-colors">
                    {t(locale, (d) => d.casesGrid.more)}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
