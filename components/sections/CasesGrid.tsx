import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { casesPreview } from "@/lib/cases";

export function CasesGrid() {
  return (
    <section className="bg-cream-50">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">— Кейсы</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 max-w-3xl leading-tight">
            Четыре проекта, которые изменили правила игры
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
          {casesPreview.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                href={`/cases/${c.slug}`}
                className="group block border border-navy-900/15 hover:border-gold-500/60 bg-white transition-colors h-full"
              >
                <div className="aspect-[16/9] bg-navy-900 relative overflow-hidden flex items-center justify-center">
                  {c.cover ? (
                    <Image
                      src={c.cover.src}
                      alt={c.cover.alt}
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
                        Фото · placeholder
                      </p>
                    </>
                  )}
                </div>
                <div className="p-7 md:p-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-gold-500 mb-3">
                    {c.meta}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-navy-900 mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-grey-500 text-[15px] leading-relaxed mb-5">{c.excerpt}</p>
                  <span className="inline-block text-sm text-navy-900 group-hover:text-gold-500 transition-colors">
                    Подробнее →
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
