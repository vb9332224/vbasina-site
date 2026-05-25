import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { servicesShort } from "@/lib/services";

export function Kak() {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">— Как мы работаем</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 max-w-3xl leading-tight">
            Восемь форматов работы<br />с Basina <span className="text-gold-500">&</span> Partners
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-800/60">
          {servicesShort.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <Link
                href={`/services#${s.slug}`}
                className="group block bg-navy-900 hover:bg-navy-800/70 p-7 md:p-8 h-full transition-colors"
              >
                <div className="font-serif text-3xl text-gold-500 leading-none mb-5">
                  {String(s.id).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-lg md:text-xl text-cream-100 mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.14em] text-gold-500/90 mb-4">
                  {s.term} · {s.price}
                </p>
                <p className="text-cream-100/70 text-[14px] leading-relaxed mb-6">{s.short}</p>
                <span className="inline-block text-sm text-gold-500 group-hover:text-gold-300 transition-colors">
                  Узнать больше →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
