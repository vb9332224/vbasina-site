import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative bg-navy-900 text-cream-100 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, var(--color-gold-500) 0px, transparent 40%)",
        }}
      />
      <div className="container-x relative grid lg:grid-cols-5 gap-12 lg:gap-16 py-24 md:py-32 lg:py-36 min-h-[90vh] items-center">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="eyebrow mb-6">Basina &amp; Partners · стратегический консалтинг</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-serif text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[72px] text-cream-100 tracking-tight">
              <span className="block">Создаём индустрии.</span>
              <span className="block">Защищаем активы.</span>
              <span className="block">
                Запускаем продукты <span className="text-gold-500">с нуля</span>.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 text-base md:text-lg text-cream-100/80 leading-relaxed max-w-2xl">
              17 лет в бизнесе. Создала первое в России проектное финансирование ИЖС, первую
              льготную ИЖС-ипотеку, инициировала Фонд защиты прав дольщиков. Прошла рейдерский
              захват и нашла из него выход. Работаю с банками, девелоперами, фондами в России,
              Армении и Кыргызстане.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/contacts#form" variant="primary">
                Записаться на стратегическую сессию →
              </Button>
              <Button href="/about" variant="ghost-gold">
                Узнать больше о Виолетте →
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-10 text-xs md:text-sm text-cream-100/60 leading-relaxed max-w-xl">
              Действительный член МАИН · Кавалер знака «Строительная Слава» · Лауреат Dubai Award 2023
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-2">
          <div className="relative aspect-[3/4] max-w-[420px] mx-auto lg:ml-auto lg:mr-0 border border-gold-500/30 bg-navy-800/40 overflow-hidden">
            <Image
              src="/images/portraits/violetta-hero.webp"
              alt="Виолетта Басина — основатель Basina & Partners"
              fill
              priority
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
            <span className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-gold-500" />
            <span className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-gold-500" />
            <span className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-gold-500" />
            <span className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-gold-500" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
