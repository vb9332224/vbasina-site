import { Reveal } from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n/types";

/**
 * Философский манифест «Выходи из земли».
 * Идея: не строим НА земле — выводим ИЗ неё. Земля как материнская среда.
 * Каждый проект — рождение, а не сборка.
 */
export function VyhodiIzZemli({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-8 text-gold-500/90">
            {locale === "ru" ? "— Манифест" : "— Manifesto"}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[112px] leading-[0.95] tracking-tight text-cream-100 max-w-5xl">
            {locale === "ru" ? (
              <>
                Выходи <span className="text-gold-500">из земли</span>.
              </>
            ) : (
              <>
                Rise <span className="text-gold-500">from the land</span>.
              </>
            )}
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl md:text-3xl text-cream-100 leading-snug">
              {locale === "ru"
                ? "Земля — не сырьё. Это материнская среда, из которой возникает проект."
                : "Land isn’t raw material. It’s the maternal medium from which a project emerges."}
            </p>
            <p className="mt-8 text-cream-100/80 text-base md:text-lg leading-relaxed">
              {locale === "ru"
                ? "Мы не строим НА земле — мы помогаем родить то, что в ней уже было заложено: историю, ритм, людей, ремёсла, ландшафт. Через смысл, традиции, сообщество и архитектуру эти невидимые слои выходят на поверхность как живой проект."
                : "We don’t build ON land — we help give birth to what was already there: its history, rhythm, people, crafts, landscape. Through meaning, traditions, community, and architecture, those invisible layers rise to the surface as a living project."}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="font-serif text-xl md:text-2xl text-gold-300 leading-snug border-l-2 border-gold-500 pl-6 md:pl-8">
              {locale === "ru"
                ? "«Выходи из земли» — это всегда рождение нового. Каждый наш проект — не сборка из стройматериалов, а живой организм, который растёт сам, потому что ему есть откуда расти."
                : "“Rise from the land” always means the birth of something new. Each of our projects isn’t an assembly of construction materials — it’s a living organism that grows on its own because there is somewhere to grow from."}
            </p>
            <p className="mt-8 text-cream-100/70 text-sm md:text-base leading-relaxed">
              {locale === "ru"
                ? "Поэтому никто не умеет видеть землю и работать с ней так, как мы: мы читаем её до того, как взять в руки лопату. И отсюда — премия к цене метра, лояльность жителей и десятилетия жизни у проекта вперёд."
                : "That’s why no one sees and works the land the way we do: we read it before any shovel touches the ground. From there come the premium per square metre, the loyalty of residents, and the decades of life ahead of every project."}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
