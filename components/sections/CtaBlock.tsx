import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/sections/LeadForm";

export function CtaBlock() {
  return (
    <section id="form" className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <p className="eyebrow mb-5">— Готовы начать?</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 leading-tight">
            Стратегическая сессия — 90 минут разговора лично со мной
          </h2>
          <p className="mt-6 text-cream-100/75 leading-relaxed max-w-xl">
            Без обязательств. По итогам — понимание, что делать дальше: запустить полный цикл,
            провести корпоративную сессию или забрать рекомендации и работать самостоятельно.
            Стоимость стратегической сессии — от 3 000 USD за 2 встречи и письменный отчёт.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-navy-800/40 border border-cream-100/10 p-7 md:p-9">
            <LeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
