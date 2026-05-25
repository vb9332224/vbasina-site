import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const figures = [
  { value: "150+", label: "реализованных проектов в шести индустриях" },
  { value: "17 лет", label: "на стыке регулятора и рынка" },
  { value: "2,1 млрд ₽", label: "проектного финансирования от Банка ДОМ.РФ (Омакульма)" },
  { value: "198", label: "домовладений в первом ИЖС-комплексе РФ" },
];

const regalia = [
  { title: "Dubai International Award №1", year: "2023" },
  { title: "Строительная Слава РСС", year: "2019" },
  { title: "Действительный член МАИН", year: "2022" },
  { title: "Благодарность Президента НОСТРОЙ", year: "2023" },
  { title: "Российский Строительный Олимп", year: "лауреат" },
  { title: "Победитель Минстрой + Минпромторг + ДОМ.РФ", year: "—" },
  { title: "Профессор-практики Академии Городов", year: "—" },
  { title: "Профессор практики MBA Development", year: "—" },
  { title: "Председатель Комитета РСС", year: "2013–2024" },
  { title: "Член рабочей группы ТПП РФ по ИЖС", year: "в прошлом" },
];

export function Pochemu() {
  return (
    <section className="bg-cream-50">
      <div className="container-x py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-5">— Почему нам доверяют</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 max-w-3xl leading-tight">
            17 лет результатов — в&nbsp;цифрах и&nbsp;фактах
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 border-t border-navy-900/10 pt-12">
          {figures.map((f, i) => (
            <Reveal key={f.value} delay={i * 0.05}>
              <div>
                <div className="font-serif text-5xl md:text-6xl lg:text-[88px] leading-none text-navy-900 tracking-tight">
                  {f.value}
                </div>
                <p className="mt-4 text-sm text-grey-500 leading-snug max-w-[220px]">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <Reveal>
            <h3 className="font-serif text-2xl md:text-3xl text-navy-900 mb-8">
              Топ-10 регалий
            </h3>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-navy-900/10">
            {regalia.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.03}>
                <div className="bg-navy-900 text-cream-100 p-5 md:p-6 h-full border border-transparent hover:border-gold-500/40 transition-colors">
                  <p className="font-serif text-[15px] md:text-base text-cream-100 leading-snug">
                    {r.title}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-gold-500">
                    {r.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/about#regalia"
                className="inline-block text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline transition-colors"
              >
                Посмотреть все 17 регалий и наград →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
