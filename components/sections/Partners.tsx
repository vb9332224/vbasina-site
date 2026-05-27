import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/lib/partners";
import { dict, t } from "@/lib/i18n/dict";
import { Locale } from "@/lib/i18n/types";

export function Partners({ locale = "ru" }: { locale?: Locale }) {
  if (partners.length === 0) return null;

  return (
    <section id="partners" className="bg-cream-100 scroll-mt-24">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">
            {locale === "ru" ? "— Партнёры" : "— Partners"}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight max-w-4xl">
            {locale === "ru" ? (
              <>
                Команда — это не штат.<br />
                Это{" "}
                <span className="text-gold-500">стратегические партнёры</span>{" "}
                калибра, который вы привыкли видеть в советах директоров.
              </>
            ) : (
              <>
                A team isn’t a payroll.<br />
                It’s{" "}
                <span className="text-gold-500">strategic partners</span>{" "}
                of the caliber you’d expect to see on a board of directors.
              </>
            )}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-20">
          {partners.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.05}>
              <article className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                {/* Photo */}
                <div className="lg:col-span-2">
                  <div className="relative aspect-[1/1] max-w-[460px] mx-auto lg:mx-0 border border-navy-900/20 bg-navy-900 overflow-hidden">
                    {p.photo ? (
                      <Image
                        src={p.photo}
                        alt={p.name[locale]}
                        fill
                        sizes="(min-width: 1024px) 460px, (min-width: 768px) 60vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-[140px] text-gold-500/80 leading-none">
                          {p.initials}
                        </span>
                      </div>
                    )}
                    <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold-500" />
                    <span className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-gold-500" />
                    <span className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-gold-500" />
                    <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight">
                    {p.name[locale]}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-gold-500 uppercase tracking-[0.14em]">
                    {p.roles[locale].join("  ·  ")}
                  </p>

                  <p className="mt-8 font-serif text-xl md:text-2xl text-navy-900 leading-snug">
                    {p.headline[locale]}
                  </p>

                  <p className="mt-6 text-navy-900/80 leading-relaxed">
                    {p.bio[locale]}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {p.highlights[locale].map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-navy-900/85 text-[15px] leading-relaxed"
                      >
                        <span className="text-gold-500 mt-1.5 shrink-0">◆</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {p.works && p.works.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      {p.works.map((w) => (
                        <span key={w.label}>
                          {w.href ? (
                            <a
                              href={w.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-navy-900/70 hover:text-gold-500 underline-offset-4 hover:underline transition-colors"
                            >
                              {w.label} ↗
                            </a>
                          ) : (
                            <span className="text-navy-900/70">{w.label}</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
