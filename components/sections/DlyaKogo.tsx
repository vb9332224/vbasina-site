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

const IconAgency = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 42V18l16-10 16 10v24" />
    <path d="M4 42h40" />
    <path d="M20 42V28h8v14" />
    <circle cx="14" cy="22" r="1.5" />
    <circle cx="34" cy="22" r="1.5" />
  </svg>
);

const IconMarketing = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 30V18l24-8 12 6v18l-12 6-24-8z" />
    <path d="M30 10v28" />
    <path d="M14 32v6a4 4 0 008 0v-3" />
  </svg>
);

const IconRecovery = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 24a16 16 0 1116 16" />
    <path d="M8 14v10h10" />
    <path d="M24 16v8l6 4" />
  </svg>
);

const IconLand = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 36l12-10 8 6 10-12 10 8" />
    <path d="M4 36v6h40v-6" />
    <circle cx="36" cy="14" r="3" />
  </svg>
);

const cards: Card[] = [
  {
    title: "Девелоперы и застройщики",
    body:
      "Если вы выходите в новый сегмент (ИЖС, апарт-отели, многофункциональные комплексы) или хотите структурировать продукт под банковское финансирование — у нас 17 лет опыта именно в этом.",
    href: "/services#product-2",
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
    title: "Собственники в острой защите",
    body:
      "Если на ваш бизнес идёт внешнее давление — банкротный сценарий, корпоративный конфликт, рейдерская атака — структурируем защиту через параллельные легальные структуры. Прошли это сами на ГК «Омакульма».",
    href: "/services#product-3",
    Icon: IconShield,
  },
  {
    title: "Бизнес в тупике (без атаки)",
    body:
      "Если компания не растёт, не зарабатывает, не понимает, как выжить и развиваться — это другой тип кризиса. Антикризисные решения: новая бизнес-модель, источники роста, переупаковка, реструктуризация.",
    href: "/services#product-7",
    Icon: IconRecovery,
  },
  {
    title: "Агентства и брокеры недвижимости",
    body:
      "Создаём отделы продаж под ключ. Обучили более 13 000 агентов через Академию Недвижимости — из них 3 000+ под продажу ИЖС. Знаем, как ставить процесс с нуля и пересобирать существующий.",
    href: "/contacts#form",
    Icon: IconAgency,
  },
  {
    title: "Маркетинг и продуктовые команды",
    body:
      "Продуктовый маркетинг как услуга: создаём новый продукт под рынок и аудиторию, запускаем коммуникацию, выводим в первую сделку. Опыт запуска индустриальных продуктов (ИЖС, проектное финансирование).",
    href: "/contacts#form",
    Icon: IconMarketing,
  },
  {
    title: "Собственники земельных активов",
    body:
      "Есть участок — не знаете, как его продать? Капитализируем землю в готовый инвестиционный продукт: мастер-план, финмодель, маркетинг. Земля продаётся быстрее и дороже как продукт, а не как голый гектар.",
    href: "/services#product-8",
    Icon: IconLand,
  },
  {
    title: "Фаундеры и предприниматели",
    body:
      "Если вы создаёте что-то новое и нуждаетесь в стратегическом сопровождении — менторская программа на 6 месяцев или полный цикл запуска проекта.",
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
            Восемь типов клиентов,<br />для которых мы работаем эффективнее всего
          </h2>
          <p className="mt-6 text-cream-100/70 leading-relaxed max-w-2xl">
            Работаем в России и активно выходим на рынки СНГ. Армения, Кыргызстан, Азербайджан и
            Таджикистан переживают строительный бум — а сильных консультантов уровня
            институционального девелопмента там пока почти нет.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-800/60">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={Math.min(i * 0.04, 0.2)}>
              <Link
                href={c.href}
                className="group block bg-navy-900 hover:bg-navy-800/70 p-7 md:p-8 h-full transition-colors"
              >
                <div className="text-gold-500 mb-5 w-11 h-11">
                  <c.Icon />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-cream-100 mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-cream-100/70 text-[14px] leading-relaxed mb-5">{c.body}</p>
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
