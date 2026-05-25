import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type Card = {
  title: string;
  body: string;
  href: string;
  Icon: () => React.ReactElement;
};

const IconBuilding = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="8" y="14" width="14" height="28" />
    <rect x="22" y="6" width="18" height="36" />
    <path d="M12 20h6M12 26h6M12 32h6M27 12h8M27 18h8M27 24h8M27 30h8M27 36h8" />
  </svg>
);

const IconBank = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M4 18L24 6l20 12" />
    <path d="M6 18h36" />
    <path d="M10 22v16M18 22v16M30 22v16M38 22v16" />
    <path d="M4 42h40" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 5l16 5v12c0 10-7 18-16 22-9-4-16-12-16-22V10l16-5z" />
    <path d="M17 24l5 5 10-11" />
  </svg>
);

const IconLaunch = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4c8 6 12 14 12 22l-4 4h-16l-4-4c0-8 4-16 12-22z" />
    <circle cx="24" cy="20" r="3.5" />
    <path d="M16 36l-4 8 8-4M32 36l4 8-8-4" />
  </svg>
);

const cards: Card[] = [
  {
    title: "Девелоперы и застройщики",
    body:
      "Если вы выходите в новый сегмент (ИЖС, апарт-отели, многофункциональные комплексы) или хотите структурировать продукт под банковское финансирование — у нас 12 лет опыта именно в этом.",
    href: "/services#product-1",
    Icon: IconBuilding,
  },
  {
    title: "Банки и финансовые институты",
    body:
      "Если ваш банк запускает новые продукты в жилищном финансировании или проектном кредитовании — мы помогли запустить первую льготную ИЖС-ипотеку в России и сократить срок одобрения с 2 месяцев до 5 дней.",
    href: "/services#product-5",
    Icon: IconBank,
  },
  {
    title: "Собственники бизнеса в кризисе",
    body:
      "Если на ваш бизнес идёт давление — банкротный сценарий, корпоративный конфликт, рейдерская атака — мы знаем как структурировать защиту через параллельные легальные структуры. Прошли это сами.",
    href: "/services#product-3",
    Icon: IconShield,
  },
  {
    title: "Фаундеры и предприниматели",
    body:
      "Если вы создаёте что-то новое и нуждаетесь в стратегическом сопровождении — менторская программа на 6 месяцев или сопровождение полного цикла запуска.",
    href: "/services#product-4",
    Icon: IconLaunch,
  },
];

export function DlyaKogo() {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">— Для кого мы работаем</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 max-w-3xl leading-tight">
            С кем мы работаем эффективнее всего
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-navy-800/60">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <Link
                href={c.href}
                className="group block bg-navy-900 hover:bg-navy-800/70 p-8 md:p-10 h-full transition-colors"
              >
                <div className="text-gold-500 mb-6 w-12 h-12">
                  <c.Icon />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-cream-100 mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-cream-100/70 text-[15px] leading-relaxed mb-6">{c.body}</p>
                <span className="inline-block text-sm text-gold-500 group-hover:text-gold-300 transition-colors">
                  Узнать больше →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
