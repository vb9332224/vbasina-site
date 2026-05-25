import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    n: "01",
    title: "Первое в России проектное финансирование ИЖС",
    body:
      "28.12.2020 — Банк ДОМ.РФ подписал с нами первый в стране кредитный договор по проектному финансированию индивидуального жилищного строительства. До этого момента ни одна российская компания не могла получить банк под ИЖС. Мы открыли категорию.",
    metric: "2,1 млрд ₽ привлечено",
  },
  {
    n: "02",
    title: "Работа на стыке регулятора и рынка",
    body:
      "17 лет одновременно в коммерческом девелопменте и в реформе регулирования. Через Комитет РСС инициировали государственный Фонд защиты прав дольщиков (фонд работает по сей день). На OPENDEVELOP.RU проверили 2 285 застройщиков по 40 параметрам.",
    metric: "Государственный Фонд РФ",
  },
  {
    n: "03",
    title: "Метод Басиной и Гергель",
    body:
      "Авторский метод проектирования девелопера через 8 слоёв (предназначение, душа, вкус, цвет, запах, ритм, звук, осязание). Превращает участок земли не в гектары, а в живой продукт, который выбирают и инвесторы, и жители. Применяется к каждому новому проекту.",
    metric: "8 проектных артефактов",
  },
];

export function Zachem() {
  return (
    <section className="bg-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-5 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-5">— Что нас отличает</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight">
            Три причины, по которым нас зовут банки, министры и владельцы земли
          </h2>
          <p className="mt-6 text-grey-500 leading-relaxed">
            На рынке консалтинга в недвижимости много компаний. Сильное позиционирование в этой
            среде создаётся не словами, а уникальной комбинацией опыта, инструментов и связей,
            которой нет у других.
          </p>
        </Reveal>

        <div className="lg:col-span-3 flex flex-col gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.06}>
              <article className="group bg-navy-900 text-cream-100 p-8 md:p-10 flex gap-6 md:gap-8 border border-navy-800 hover:border-gold-500/60 transition-colors">
                <div className="font-serif text-5xl md:text-6xl text-gold-500 leading-none shrink-0">
                  {c.n}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-cream-100 mb-3 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-cream-100/75 text-[15px] leading-relaxed mb-5">{c.body}</p>
                  <p className="inline-block text-[11px] uppercase tracking-[0.16em] text-gold-500 border-t border-gold-500/30 pt-3">
                    {c.metric}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
