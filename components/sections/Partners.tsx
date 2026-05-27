import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { corePartners, stakeholders } from "@/lib/partners";
import { Locale } from "@/lib/i18n/types";

export function Partners({ locale = "ru" }: { locale?: Locale }) {
  if (corePartners.length === 0 && stakeholders.length === 0) return null;

  return (
    <section id="partners" className="bg-cream-100 scroll-mt-24">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">
            {locale === "ru" ? "— Наша команда" : "— Our team"}
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

        {/* CORE — большие карточки */}
        {corePartners.length > 0 && (
          <div className="mt-16 space-y-16 md:space-y-20">
            {corePartners.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.05}>
                <article className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
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

                  <div className="lg:col-span-3">
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight">
                      {p.name[locale]}
                    </h3>
                    <p className="mt-4 text-sm md:text-base text-gold-500 uppercase tracking-[0.14em]">
                      {p.roles[locale].join("  ·  ")}
                    </p>

                    {p.headline && (
                      <p className="mt-8 font-serif text-xl md:text-2xl text-navy-900 leading-snug">
                        {p.headline[locale]}
                      </p>
                    )}

                    {p.bio && (
                      <p className="mt-6 text-navy-900/80 leading-relaxed">
                        {p.bio[locale]}
                      </p>
                    )}

                    {p.highlights && (
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
                    )}

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
        )}

        {/* STAKEHOLDERS — компактная сетка */}
        {stakeholders.length > 0 && (
          <div className="mt-20 md:mt-24">
            <Reveal>
              <p className="eyebrow mb-3">
                {locale === "ru"
                  ? "— Расширенный круг партнёров"
                  : "— Extended partners circle"}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-navy-900 leading-tight max-w-3xl">
                {locale === "ru"
                  ? "Партнёры, которых мы подключаем под задачи проекта"
                  : "Partners we bring in for project-specific work"}
              </h3>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stakeholders.map((p, idx) => (
                <Reveal key={p.slug} delay={Math.min(idx * 0.04, 0.16)}>
                  <article className="bg-cream-50 border border-navy-900/10 p-6 md:p-7 h-full flex flex-col">
                    <div className="flex items-start gap-5 mb-5">
                      <div className="relative w-20 h-20 shrink-0 border border-navy-900/20 bg-navy-900 overflow-hidden">
                        {p.photo ? (
                          <Image
                            src={p.photo}
                            alt={p.name[locale]}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-serif text-3xl text-gold-500/80">
                              {p.initials}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-serif text-lg md:text-xl text-navy-900 leading-tight">
                          {p.name[locale]}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gold-500/90">
                          {p.roles[locale][0]}
                        </p>
                      </div>
                    </div>
                    {p.short && (
                      <p className="text-navy-900/75 text-[14px] leading-relaxed">
                        {p.short[locale]}
                      </p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
