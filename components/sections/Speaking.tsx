import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { talks, youtubeUrl, youtubeThumb } from "@/lib/speaking";

export function Speaking() {
  return (
    <section id="speaking" className="bg-navy-900 text-cream-100 scroll-mt-24">
      <div className="container-x py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-5">— Выступления</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 leading-tight max-w-3xl">
            Публичные выступления и интервью
          </h2>
          <p className="mt-6 text-cream-100/70 leading-relaxed max-w-2xl">
            Конференции, отраслевые форумы, прямые эфиры по темам девелопмента, ИЖС, проектного
            финансирования и антикризисного управления.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-800/60">
          {talks.map((t, i) => (
            <Reveal key={t.id} delay={Math.min(i * 0.03, 0.25)}>
              <a
                href={youtubeUrl(t)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-navy-900 hover:bg-navy-800/70 transition-colors h-full"
              >
                <div className="relative aspect-video bg-navy-800 overflow-hidden">
                  <Image
                    src={youtubeThumb(t.id)}
                    alt={t.title ?? "Выступление Виолетты Басиной"}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-colors" />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold-500/95 group-hover:bg-gold-300 group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-7 h-7 md:w-8 md:h-8 ml-1 text-navy-900"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {t.live && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#A8302A] text-white text-[10px] uppercase tracking-[0.14em] px-2.5 py-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      Live
                    </span>
                  )}
                </div>
                <div className="px-5 py-4 border-t border-navy-800/60">
                  <p className="font-serif text-base text-cream-100/90 group-hover:text-gold-300 transition-colors leading-snug">
                    {t.title ?? "Открыть на YouTube"}
                  </p>
                  {t.venue && (
                    <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-gold-500/80">
                      {t.venue}
                    </p>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
