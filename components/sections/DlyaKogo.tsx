import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { dict, t } from "@/lib/i18n/dict";
import { Locale, localePath } from "@/lib/i18n/types";

type Card = {
  titleKey: keyof typeof dict.dlyakogo;
  bodyKey: keyof typeof dict.dlyakogo;
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
    <path d="M4 18L24 6l20 12" /><path d="M6 18h36" />
    <path d="M10 22v16M18 22v16M30 22v16M38 22v16" /><path d="M4 42h40" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 5l16 5v12c0 10-7 18-16 22-9-4-16-12-16-22V10l16-5z" />
    <path d="M17 24l5 5 10-11" />
  </svg>
);
const IconLand = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 38L18 22l8 8 6-6 8 12z" /><circle cx="36" cy="14" r="3" />
    <path d="M4 42h40" />
  </svg>
);
const IconAgency = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="14" r="6" /><path d="M10 42c0-7 6-12 14-12s14 5 14 12" />
  </svg>
);
const IconMarketing = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 24l28-12-4 24L18 28z" /><path d="M18 28l-4 12" />
  </svg>
);
const IconRecovery = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l6 6M31 31l6 6M11 37l6-6M31 17l6-6" />
    <circle cx="24" cy="24" r="6" />
  </svg>
);
const IconLaunch = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4c8 6 12 14 12 22l-4 4h-16l-4-4c0-8 4-16 12-22z" />
    <circle cx="24" cy="20" r="3.5" />
    <path d="M16 36l-4 8 8-4M32 36l4 8-8-4" />
  </svg>
);

export function DlyaKogo({ locale = "ru" }: { locale?: Locale }) {
  const allCards = [
    // 1. Предприниматель
    { title: t(locale, (d) => d.dlyakogo.s1Title), body: t(locale, (d) => d.dlyakogo.s1Body), href: localePath(locale, "/services#mentoring"), Icon: IconAgency },
    // 2. Бизнес
    { title: t(locale, (d) => d.dlyakogo.s2Title), body: t(locale, (d) => d.dlyakogo.s2Body), href: localePath(locale, "/services#strategy"), Icon: IconBuilding },
    // 3. Земля и девелопмент (flagship)
    { title: t(locale, (d) => d.dlyakogo.s3Title), body: t(locale, (d) => d.dlyakogo.s3Body), href: localePath(locale, "/services#land"), Icon: IconLand },
    // 4. Капитал и масштабирование
    { title: t(locale, (d) => d.dlyakogo.s4Title), body: t(locale, (d) => d.dlyakogo.s4Body), href: localePath(locale, "/services#full-cycle"), Icon: IconBank },
    // 5. Публичность и влияние
    { title: t(locale, (d) => d.dlyakogo.s5Title), body: t(locale, (d) => d.dlyakogo.s5Body), href: localePath(locale, "/services#corporate"), Icon: IconLaunch },
    // 6. Производство и агро
    { title: t(locale, (d) => d.dlyakogo.s6Title), body: t(locale, (d) => d.dlyakogo.s6Body), href: localePath(locale, "/services#full-cycle"), Icon: IconMarketing },
    // 7. Антикризисная пересборка
    { title: t(locale, (d) => d.dlyakogo.s7Title), body: t(locale, (d) => d.dlyakogo.s7Body), href: localePath(locale, "/services#recovery"), Icon: IconShield },
    // 8. (placeholder, отключён)
    { title: t(locale, (d) => d.dlyakogo.s8Title), body: t(locale, (d) => d.dlyakogo.s8Body), href: localePath(locale, "/services#mentoring"), Icon: IconRecovery },
  ];

  // Показываем только заполненные сегменты (s8 сейчас пуст)
  const cards = allCards.filter((c) => c.title && c.title.trim().length > 0);

  const learnMore = locale === "ru" ? "Узнать больше →" : "Learn more →";

  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">{t(locale, (d) => d.dlyakogo.eyebrow)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 max-w-3xl leading-tight">
            {t(locale, (d) => d.dlyakogo.title)}
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
                  {learnMore}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
