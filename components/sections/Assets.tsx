import { Reveal } from "@/components/ui/Reveal";
import { assets } from "@/lib/assets";

export function Assets() {
  return (
    <section id="assets" className="bg-cream-100 scroll-mt-24">
      <div className="container-x py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-5">— Активы и инфраструктура</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight max-w-3xl">
            17 лет — это <span className="text-gold-500">150+ проектов</span> в шести индустриях.
          </h2>
          <p className="mt-6 text-grey-500 leading-relaxed max-w-2xl">
            Часть активов проданы, часть закрыты — но каждый дал ключевой опыт, который сегодня
            работает на клиентов BGM Consulting. Ниже — основные.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-navy-900/15">
          {assets.map((a, i) => (
            <Reveal key={a.key} delay={Math.min(i * 0.04, 0.2)}>
              <article className="bg-cream-100 p-7 md:p-9 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl md:text-2xl text-navy-900 leading-snug">
                    {a.title}
                  </h3>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-gold-500 border border-gold-500/50 px-2 py-1">
                    {a.status}
                  </span>
                </div>
                {a.subtitle && (
                  <p className="text-sm text-gold-500/90 mb-4 leading-snug">{a.subtitle}</p>
                )}
                <p className="text-navy-900/80 text-[15px] leading-relaxed mb-5">{a.description}</p>

                {a.metrics && a.metrics.length > 0 && (
                  <ul className="mt-auto pt-4 border-t border-navy-900/10 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {a.metrics.map((m) => (
                      <li
                        key={m}
                        className="text-xs uppercase tracking-[0.12em] text-navy-900/70"
                      >
                        — {m}
                      </li>
                    ))}
                  </ul>
                )}

                {a.video && (
                  <div className="mt-5 aspect-video bg-navy-900 overflow-hidden">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${a.video}?rel=0&modestbranding=1`}
                      title={`${a.title} — видеоролик`}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
