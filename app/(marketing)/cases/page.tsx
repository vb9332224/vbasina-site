import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { casesFull } from "@/lib/cases-full";

export const metadata: Metadata = {
  title: "Кейсы — Basina & Partners",
  description:
    "Реальные проекты с подтверждённым результатом: первое в России проектное финансирование ИЖС, антирейдерская модель, реформа защиты дольщиков.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="— Кейсы"
        title={
          <>
            Реальные проекты<br />
            <span className="text-gold-500">с подтверждённым результатом</span>
          </>
        }
        subtitle="Четыре кейса, на которых стоит вся практика Basina & Partners. Все цифры — публичные и проверяемые."
      />

      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {casesFull.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group block border border-navy-900/15 hover:border-gold-500/60 bg-white transition-colors h-full"
                >
                  <div className="aspect-[16/9] bg-navy-900 relative overflow-hidden flex items-center justify-center">
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
                  </div>
                  <div className="p-7 md:p-9">
                    <p className="text-xs uppercase tracking-[0.14em] text-gold-500 mb-3">
                      {c.period}
                    </p>
                    <h2 className="font-serif text-xl md:text-2xl text-navy-900 mb-3 leading-snug">
                      {c.title}
                    </h2>
                    <p className="text-sm text-grey-500 mb-5">{c.subtitle}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy-900/70 mb-6">
                      {c.metrics.map((m) => (
                        <span key={m}>· {m}</span>
                      ))}
                    </div>
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

      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-24 text-center">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-6 max-w-3xl mx-auto leading-tight">
              Хотите похожий проект? Запишитесь на стратегическую сессию
            </h2>
            <Button href="/contacts#form">Записаться →</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
