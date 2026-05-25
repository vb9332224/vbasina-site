import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { publications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Публикации в СМИ — Виолетта Басина",
  description:
    "РБК, Ведомости, Интерфакс, ЕРЗ.РФ, ЦИАН, ЕвроМедиа — подборка публикаций о Виолетте Басиной и её проектах.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="— О нас писали"
        title={
          <>
            Подтверждённые<br />
            <span className="text-gold-500">источники признания</span>
          </>
        }
        subtitle="Подборка ключевых публикаций о Виолетте, её проектах и реформах. Все ссылки ведут на оригиналы в СМИ."
      />

      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28">
          <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
            {publications.map((p, i) => (
              <Reveal key={`${p.outlet}-${i}`} delay={Math.min(i * 0.03, 0.2)}>
                <li>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid md:grid-cols-[200px_120px_1fr_auto] gap-3 md:gap-8 items-start py-6 md:py-7 px-2 hover:bg-cream-100/50 transition-colors"
                  >
                    <span className="font-serif text-base md:text-lg text-navy-900 group-hover:text-gold-500 transition-colors">
                      {p.outlet}
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-gold-500 md:pt-1">
                      {p.date}
                    </span>
                    <span className="text-grey-500 leading-relaxed">{p.title}</span>
                    <span className="text-sm text-navy-900 group-hover:text-gold-500 md:pt-1 md:text-right transition-colors">
                      Открыть ↗
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28 text-center">
          <Reveal>
            <p className="eyebrow mb-4">— Хотите интервью?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6 max-w-3xl mx-auto leading-tight">
              Свяжитесь с пресс-службой
            </h2>
            <Button href="/contacts#form">Связаться →</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
