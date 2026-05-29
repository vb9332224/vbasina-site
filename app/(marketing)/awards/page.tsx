import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { awardsByCategory } from "@/lib/awards";

export const metadata: Metadata = {
  title: "Наши награды и регалии — Виолетта Басина | BGM Consulting",
  description:
    "Dubai International Award, «Строительная Слава», действительный член МАИН, признание Минстроя РФ, ДОМ.РФ, НОСТРОЙ, НОПРИЗ. Награды, премии и профессиональные позиции.",
  alternates: { canonical: "/awards" },
};

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="— Наши награды"
        title={
          <>
            Награды,<br />
            <span className="text-gold-500">премии и признание</span>
          </>
        }
        subtitle="Международные награды, государственные и отраслевые признания, академические звания и профессиональные позиции. Это не полный список."
      />

      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28">
          <div className="space-y-12">
            {awardsByCategory.map((cat, idx) => (
              <Reveal key={cat.label} delay={idx * 0.04}>
                <div>
                  <h2 className="font-serif text-xl md:text-2xl text-gold-500 mb-6 pb-3 border-b border-navy-800">
                    {cat.label}
                  </h2>
                  <ul className="space-y-5">
                    {cat.items.map((a) => (
                      <li key={a.title} className="flex gap-4">
                        <span className="text-gold-500 mt-2 shrink-0">—</span>
                        <div>
                          <p className="text-cream-100 leading-snug">{a.title}</p>
                          {a.meta && (
                            <p className="mt-1 text-sm text-cream-100/60">{a.meta}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-28 text-center">
          <Reveal>
            <p className="eyebrow mb-4">— Записаться</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 mb-6 max-w-3xl mx-auto leading-tight">
              Стратегическая сессия — 90 минут лично
            </h2>
            <Button href="/contacts#form">Записаться на консультацию →</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
