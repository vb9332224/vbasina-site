import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services-full";

export const metadata: Metadata = {
  title: "Услуги — Basina & Partners",
  description:
    "Восемь форматов работы: землепродюсирование, стратегическая сессия, полный цикл, антикризис, корпоративные сессии, менторство, обучение агентов, авторский курс.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="— Как мы работаем"
        title={
          <>
            Восемь форматов работы<br />
            <span className="text-gold-500">с Basina & Partners</span>
          </>
        }
        subtitle="От 90-минутной стратегической сессии до 6-месячного полного цикла запуска продукта. Выберите формат под свою задачу — или попросите рекомендацию."
      >
        <nav aria-label="Быстрая навигация" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="text-xs uppercase tracking-[0.12em] border border-gold-500/40 px-4 py-2 text-cream-100/85 hover:bg-gold-500 hover:text-navy-900 transition-colors"
            >
              {s.id}. {s.title.split(" — ")[0].split(/ —|—/)[0].slice(0, 32)}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="bg-cream-50">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 ${i % 2 === 0 ? "bg-cream-50" : "bg-cream-100"}`}
          >
            <div className="container-x py-20 md:py-24 grid lg:grid-cols-5 gap-10 lg:gap-16">
              <Reveal className="lg:col-span-2">
                <p className="eyebrow mb-5">— Продукт {String(s.id).padStart(2, "0")}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight mb-4">
                  {s.title}
                </h2>
                <p className="text-grey-500 leading-relaxed">{s.subtitle}</p>
              </Reveal>

              <div className="lg:col-span-3">
                <Reveal>
                  <dl className="grid sm:grid-cols-2 gap-px bg-navy-900/15 mb-10">
                    <div className="bg-cream-50 p-5">
                      <dt className="eyebrow mb-2">Для кого</dt>
                      <dd className="text-sm text-navy-900 leading-relaxed">{s.audience}</dd>
                    </div>
                    <div className="bg-cream-50 p-5">
                      <dt className="eyebrow mb-2">Срок</dt>
                      <dd className="text-sm text-navy-900 leading-relaxed">{s.term}</dd>
                    </div>
                    <div className="bg-cream-50 p-5">
                      <dt className="eyebrow mb-2">Формат</dt>
                      <dd className="text-sm text-navy-900 leading-relaxed">{s.format}</dd>
                    </div>
                    <div className="bg-cream-50 p-5">
                      <dt className="eyebrow mb-2">Цена</dt>
                      <dd className="text-sm text-navy-900 leading-relaxed">{s.price}</dd>
                    </div>
                  </dl>
                </Reveal>

                <Reveal>
                  <p className="text-navy-900 leading-relaxed mb-8">{s.description}</p>
                </Reveal>

                <Reveal>
                  <h3 className="font-serif text-xl text-navy-900 mb-4">Что входит</h3>
                  <ul className="space-y-2.5 mb-8">
                    {s.includes.map((it) => (
                      <li key={it} className="flex gap-3 text-navy-900/85 text-[15px] leading-relaxed">
                        <span className="text-gold-500 mt-1.5 shrink-0">◆</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal>
                  <h3 className="font-serif text-xl text-navy-900 mb-3">Ожидаемый результат</h3>
                  <p className="text-navy-900/85 leading-relaxed mb-8">{s.result}</p>
                </Reveal>

                {s.note && (
                  <Reveal>
                    <div className="border-l-2 border-gold-500 bg-cream-100/60 px-5 py-4 mb-8 text-sm text-navy-900/85 leading-relaxed">
                      <strong className="block text-gold-500 mb-1 text-xs uppercase tracking-[0.14em]">
                        Важное предупреждение
                      </strong>
                      {s.note}
                    </div>
                  </Reveal>
                )}

                <Reveal>
                  <Button href={`/contacts?product=${s.slug}#form`} variant="primary">
                    Обсудить этот формат →
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28 text-center">
          <Reveal>
            <p className="eyebrow mb-4">— С чего начать</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-100 mb-6 max-w-3xl mx-auto leading-tight">
              Бесплатная 15-минутная встреча-знакомство
            </h2>
            <p className="text-cream-100/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              Чтобы понять, будем ли мы для вас эффективны и полезны. Расскажете о задаче — мы
              честно ответим: подходим ли мы под ваш кейс, какой формат сотрудничества имеет
              смысл, и стоит ли начинать вообще. Без обязательств.
            </p>
            <Button href="/contacts#form">Записаться на знакомство →</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
