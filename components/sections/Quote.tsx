import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Quote() {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[3/4] max-w-[460px] mx-auto lg:mx-0 border border-gold-500/30 bg-navy-800/40 overflow-hidden">
            <Image
              src="/images/portraits/violetta-quote.jpg"
              alt="Виолетта Басина, основатель Basina & Partners"
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold-500" />
            <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold-500" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-6">— Кто за этим стоит</p>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-[34px] leading-snug text-cream-100">
            <span className="text-gold-500 font-serif text-5xl leading-none mr-2 align-top">“</span>
            Я не борюсь с системой. Я создаю новое там, где этого ещё нет — и нахожу обходные пути
            там, где старое не работает. 17 лет это делаю в разных отраслях. И буду делать дальше.
          </blockquote>
          <p className="mt-8 text-sm text-cream-100/70">
            — Виолетта Басина, основатель Basina &amp; Partners
          </p>
          <p className="mt-2 text-xs text-cream-100/50">
            Действительный член МАИН · Кавалер знака «Строительная Слава» · Лауреат Dubai Award 2023
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline transition-colors"
          >
            Полная биография →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
