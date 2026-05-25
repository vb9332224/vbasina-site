import { dict, t } from "@/lib/i18n/dict";
import { Locale } from "@/lib/i18n/types";

const partners = [
  { name: { ru: "Банк ДОМ.РФ", en: "DOM.RF Bank" }, since: "с 2020 / since 2020" },
  { name: { ru: "Минстрой России", en: "Ministry of Construction of Russia" }, since: "с 2014 / since 2014" },
  { name: { ru: "Минпромторг", en: "Ministry of Industry & Trade" }, since: "с 2020 / since 2020" },
  { name: { ru: "НОСТРОЙ", en: "NOSTROY" }, since: "с 2023 / since 2023" },
  { name: { ru: "РСС", en: "Russian Builders Union" }, since: "с 2013 / since 2013" },
  { name: { ru: "ТПП РФ", en: "RF Chamber of Commerce" }, since: "—" },
  { name: { ru: "Конфедерация Городов Комьюнити", en: "Cities Community Confederation" }, since: "—" },
  { name: { ru: "Академия Городов", en: "Cities Academy" }, since: "—" },
];

export function TrustBar({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section className="bg-navy-800/80 border-t border-navy-700/60">
      <div className="container-x py-7 md:py-8 flex flex-col lg:flex-row lg:items-center gap-6">
        <p className="eyebrow text-cream-100/60 whitespace-nowrap">
          {t(locale, (d) => d.trust.label)}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-8">
          {partners.map((p) => (
            <div
              key={p.name.ru}
              className="flex items-baseline gap-2 text-cream-100/85 text-xs md:text-sm"
            >
              <span className="font-medium tracking-tight">{p.name[locale]}</span>
              <span className="text-cream-100/40 text-[11px]">· {p.since.split(" / ")[locale === "ru" ? 0 : 1]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
