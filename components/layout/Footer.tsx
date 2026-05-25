import Link from "next/link";
import { nav, site } from "@/lib/site-config";

const footerRegalia = [
  "Dubai International Award №1",
  "Строительная Слава",
  "МАИН",
  "НОСТРОЙ",
  "Минстрой РФ",
  "Минпромторг",
  "ДОМ.РФ",
  "РСС",
  "Российский Строительный Олимп",
  "Академия Городов",
  "Конфедерация",
  "ТПП РФ",
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-100/90 border-t border-navy-800/60">
      <div className="container-x py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-serif text-xl text-gold-500 mb-4">
            Basina <span className="text-cream-100/70">&</span> Partners
          </div>
          <p className="text-sm leading-relaxed text-cream-100/70">
            {site.legalName}
            <br />
            рег. {site.legalReg}
            <br />
            {site.country}
          </p>
          <p className="text-xs text-cream-100/50 mt-6">© 2026 {site.name}</p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Навигация</h4>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Контакты</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold-300 transition-colors">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://t.me/${site.telegram}`}
                className="hover:text-gold-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram: @{site.telegram}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${site.instagram}`}
                className="hover:text-gold-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: @{site.instagram}
              </a>
            </li>
            <li>
              <a
                href={`https://linkedin.com/in/${site.linkedin}`}
                className="hover:text-gold-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Документы</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-gold-300 transition-colors">
                Политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link href="/offer" className="hover:text-gold-300 transition-colors">
                Оферта
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800/60">
        <div className="container-x py-6 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-gold-500/80">
            {footerRegalia.map((r, i) => (
              <span key={r} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-gold-500/40">·</span>}
                <span>{r}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
