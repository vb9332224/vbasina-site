import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { dict, t } from "@/lib/i18n/dict";
import { Locale, localePath } from "@/lib/i18n/types";

export function Quote({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[3/4] max-w-[460px] mx-auto lg:mx-0 border border-gold-500/30 bg-navy-800/40 overflow-hidden">
            <Image
              src="/images/portraits/violetta-quote.jpg"
              alt="Виолетта Басина, основатель BGM Consulting"
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold-500" />
            <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold-500" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-6">{t(locale, (d) => d.quote.eyebrow)}</p>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-[34px] leading-snug text-cream-100">
            <span className="text-gold-500 font-serif text-5xl leading-none mr-2 align-top">“</span>
            {t(locale, (d) => d.quote.text)}
          </blockquote>
          <p className="mt-8 text-sm text-cream-100/70">{t(locale, (d) => d.quote.sig)}</p>
          <p className="mt-2 text-xs text-cream-100/50">{t(locale, (d) => d.quote.micro)}</p>
          <Link
            href={localePath(locale, "/about")}
            className="inline-block mt-8 text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline transition-colors"
          >
            {t(locale, (d) => d.quote.biography)}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
