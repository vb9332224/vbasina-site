import { Reveal } from "@/components/ui/Reveal";

// Чем Виолетта Басина изменила рынок — фактический фундамент бренда
const founderImpact = [
  "Основатель индустриального загородного девелопмента в России и автор первого в стране горизонтального жилого комплекса «Омакульма-Аннино».",
  "Инициатор и реализатор проектного финансирования и применения эскроу-счетов в ИЖС — первой в России довела механизм до реальной сделки и защитила семьи от недобросовестных подрядчиков.",
  "Инициировала и пролоббировала запуск ипотеки на строительство частных домов; добилась распространения льготных государственных программ по ставкам на ИЖС.",
  "Сделала рынок загородного девелопмента прозрачным и доступным для каждой семьи — ведь покупатель дома — это семья.",
  "В сегменте многоквартирного строительства выступила инициатором фонда защиты дольщиков в рамках 214-ФЗ — взамен неработавшего страхования договоров долевого участия.",
  "Первой показала, что такое индустриальное строительство в загородном девелопменте — серийное, технологичное, предсказуемое по качеству и срокам.",
];

export function FounderImpact() {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-20 md:py-28 grid lg:grid-cols-5 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow mb-5">— Кто за этим стоит</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 leading-tight">
            Виолетта Басина — <span className="text-gold-500">визионер и меценат</span>
          </h2>
          <p className="mt-6 text-cream-100/75 leading-relaxed">
            Не просто девелопер и предприниматель. Человек, который менял правила целой
            отрасли — и задавал тренды, которым следует рынок.
          </p>
        </Reveal>

        <div className="lg:col-span-3">
          <ul className="space-y-6">
            {founderImpact.map((item) => (
              <Reveal key={item}>
                <li className="flex gap-4">
                  <span className="text-gold-500 mt-2 shrink-0">—</span>
                  <p className="text-cream-100/90 text-base md:text-lg leading-relaxed">
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <p className="mt-12 font-serif text-xl md:text-2xl text-gold-300 leading-snug border-l-2 border-gold-500 pl-6 md:pl-8">
              Мы — новаторы. Мы задаём тренды. И никто не разбирается в земле и в правовых
              отношениях с ней так, как наша команда. Это наша сила и наше преимущество.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
