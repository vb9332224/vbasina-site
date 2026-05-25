const partners = [
  { name: "Банк ДОМ.РФ", since: "с 2020" },
  { name: "Минстрой России", since: "с 2014" },
  { name: "Минпромторг", since: "с 2020" },
  { name: "НОСТРОЙ", since: "с 2023" },
  { name: "РСС", since: "с 2013" },
  { name: "ТПП РФ", since: "—" },
  { name: "Конфедерация Городов Комьюнити", since: "—" },
  { name: "Академия Городов", since: "—" },
];

export function TrustBar() {
  return (
    <section className="bg-navy-800/80 border-t border-navy-700/60">
      <div className="container-x py-7 md:py-8 flex flex-col lg:flex-row lg:items-center gap-6">
        <p className="eyebrow text-cream-100/60 whitespace-nowrap">Сотрудничаем</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-8">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-baseline gap-2 text-cream-100/85 text-xs md:text-sm"
            >
              <span className="font-medium tracking-tight">{p.name}</span>
              <span className="text-cream-100/40 text-[11px]">· {p.since}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
