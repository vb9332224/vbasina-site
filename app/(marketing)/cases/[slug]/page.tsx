import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { casesFull } from "@/lib/cases-full";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return casesFull.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = casesFull.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.subtitle,
    description: c.context.slice(0, 160),
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = casesFull.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <PageHero
        eyebrow={`— Кейс · ${c.period}`}
        title={c.title}
        subtitle={c.subtitle}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-t border-navy-800 pt-8">
          {c.metrics.map((m) => (
            <div key={m}>
              <p className="font-serif text-xl md:text-2xl text-gold-500 leading-tight">{m}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <article className="bg-cream-50">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-5 gap-10 lg:gap-16">
          <aside className="lg:col-span-1">
            <nav className="lg:sticky lg:top-28 space-y-2 text-sm">
              {[
                { id: "context", label: "Контекст" },
                { id: "actions", label: "Что мы сделали" },
                { id: "results", label: "Результат" },
                { id: "transferable", label: "Что это даёт" },
                { id: "confirmations", label: "Подтверждения" },
              ].map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-grey-500 hover:text-gold-500 transition-colors"
                >
                  → {s.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-4 space-y-14">
            <Reveal>
              <section id="context" className="scroll-mt-24">
                <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-5">Контекст</h2>
                <p className="text-navy-900/85 leading-relaxed text-lg">{c.context}</p>
              </section>
            </Reveal>

            <Reveal>
              <section id="actions" className="scroll-mt-24">
                <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-5">
                  Что мы сделали
                </h2>
                <ul className="space-y-3">
                  {c.actions.map((a) => (
                    <li key={a} className="flex gap-3 text-navy-900/85 leading-relaxed">
                      <span className="text-gold-500 mt-1.5 shrink-0">◆</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section id="results" className="scroll-mt-24 bg-navy-900 text-cream-100 p-8 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl text-cream-100 mb-5">Результат</h2>
                <ul className="space-y-3">
                  {c.results.map((r) => (
                    <li key={r} className="flex gap-3 text-cream-100/85 leading-relaxed">
                      <span className="text-gold-500 mt-1.5 shrink-0">◆</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section id="transferable" className="scroll-mt-24">
                <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-5">
                  Что это даёт другим клиентам
                </h2>
                <p className="text-navy-900/85 leading-relaxed text-lg italic border-l-2 border-gold-500 pl-6">
                  {c.transferable}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section id="confirmations" className="scroll-mt-24">
                <h2 className="font-serif text-2xl md:text-3xl text-navy-900 mb-5">
                  Подтверждения
                </h2>
                <ul className="space-y-2">
                  {c.confirmations.map((cf) => (
                    <li key={cf.label} className="text-grey-500">
                      —{" "}
                      {cf.href ? (
                        <a
                          href={cf.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-500 hover:text-navy-900 underline-offset-4 hover:underline"
                        >
                          {cf.label}
                        </a>
                      ) : (
                        cf.label
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <div className="pt-10 border-t border-navy-900/10 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-navy-900 mb-5">
                  Хотите похожий проект?
                </h3>
                <Button href="/contacts#form">Записаться на сессию →</Button>
              </div>
            </Reveal>

            <div className="pt-6">
              <Link href="/cases" className="text-sm text-gold-500 hover:text-navy-900">
                ← Все кейсы
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
