import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    n: "01",
    title: "Создаём то, чего ещё нет на рынке",
    body:
      "Если вы хотите запустить продукт или направление, которого в вашей стране ещё нет — мы знаем, как это сделать. У нас за плечами создание первого в России проектного финансирования ИЖС, первой льготной ИЖС-ипотеки, первого Фонда защиты прав дольщиков. Мы умеем работать там, где правил игры ещё нет.",
  },
  {
    n: "02",
    title: "Продюсируем землю как продукт",
    body:
      "Если у вас есть земельный участок, который «как есть» не продаётся или продаётся за бесценок — мы упаковываем его в инвестиционный продукт. Стратегия, мастер-план, документация, финансирование, маркетинг, отдел продаж. Стоимость актива растёт в 2–4 раза, сроки продажи — в 2–3 раза короче.",
  },
  {
    n: "03",
    title: "Запускаем без собственного капитала",
    body:
      "Если у вас есть проект, но нет денег — мы знаем, как привлечь институциональное финансирование. Проектное финансирование, госпрограммы, льготные продукты, структурирование сделок. Не отдавая контроль инвесторам.",
  },
];

export function Zachem() {
  return (
    <section className="bg-cream-100">
      <div className="container-x py-24 md:py-32 grid lg:grid-cols-5 gap-12 lg:gap-20">
        <Reveal className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-5">— Зачем обращаться</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight">
            Что вы получите,<br />работая с Basina <span className="text-gold-500">&</span> Partners
          </h2>
          <p className="mt-6 text-grey-500 leading-relaxed">
            Три точки уникальной экспертизы, подтверждённые реальными проектами и
            институциональным признанием.
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
                  <p className="text-cream-100/75 text-[15px] leading-relaxed">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
