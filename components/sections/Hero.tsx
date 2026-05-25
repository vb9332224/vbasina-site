import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { dict, t } from "@/lib/i18n/dict";
import { Locale, localePath } from "@/lib/i18n/types";

export function Hero({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="relative bg-navy-900 text-cream-100 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, var(--color-gold-500) 0px, transparent 40%)",
        }}
      />
      <div className="container-x relative grid lg:grid-cols-5 gap-12 lg:gap-16 py-20 md:py-24 lg:py-28 min-h-[88vh] items-center">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="eyebrow mb-6">{t(locale, (d) => d.hero.eyebrow)}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-serif text-[36px] leading-[1.05] sm:text-[44px] md:text-5xl lg:text-[56px] text-cream-100 tracking-tight">
              {t(locale, (d) => d.hero.title1)}{" "}
              <span className="text-gold-500">{t(locale, (d) => d.hero.title2)}</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 font-serif text-xl md:text-2xl text-cream-100 leading-snug max-w-2xl">
              {t(locale, (d) => d.hero.sub)}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 text-sm md:text-base text-cream-100/75 leading-relaxed max-w-2xl">
              {t(locale, (d) => d.hero.body)}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={localePath(locale, "/contacts#form")} variant="primary">
                {t(locale, (d) => d.hero.primary)}
              </Button>
              <Button href={localePath(locale, "/about")} variant="ghost-gold">
                {t(locale, (d) => d.hero.secondary)}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 text-xs md:text-sm text-cream-100/60 leading-relaxed max-w-xl">
              {t(locale, (d) => d.hero.microTrust)}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-2">
          <div className="relative aspect-[3/4] max-w-[420px] mx-auto lg:ml-auto lg:mr-0 border border-gold-500/30 bg-navy-800/40 overflow-hidden">
            <Image
              src="/images/portraits/violetta-green.jpg"
              alt="Виолетта Басина — основатель Basina & Partners"
              fill
              priority
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
            <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold-500" />
            <span className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-gold-500" />
            <span className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-gold-500" />
            <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold-500" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
