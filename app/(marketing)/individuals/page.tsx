import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Защита земли от изъятия — консультация для физлиц | BGM Consulting",
  description:
    "У вас выводят участок из населённого пункта, переводят в сельхоз, грозят изъятием или сносом дома? Пошаговый алгоритм защиты и консультация со стратегией от 10 000 ₽.",
  alternates: { canonical: "/individuals" },
};

const BOT_URL = "https://t.me/prland1_bot?start=land_defense";

const steps = [
  {
    n: 1,
    title: "Запрос в администрацию",
    body: "Письменно требуем документы: материалы по обоснованию генплана, протоколы публичных слушаний, согласования и основания для включения в перечень «особо ценных» угодий.",
  },
  {
    n: 2,
    title: "Фиксируем молчание",
    body: "Из практики: администрация документы, как правило, не предоставляет — молчит, отписывается, тянет сроки. Уже это сигнал: если бы всё было чисто, скрывать было бы нечего.",
  },
  {
    n: 3,
    title: "Истребуем через суд",
    body: "Идём в суд и истребуем документы в судебном порядке. Суд обязывает администрацию их предоставить — и то, что от вас прятали, наконец ложится в дело.",
  },
  {
    n: 4,
    title: "Выявляем нарушения процедуры",
    body: "Не провели публичные слушания (а они обязательны), нет согласований, нет обоснования, землю записали в «особо ценные», хотя её никогда не пахали и продуктивным угодьем она быть не может.",
  },
  {
    n: 5,
    title: "Рушим всю цепочку",
    body: "И только теперь признаём акт администрации о переводе земли незаконным. Вместе с ним рушится вся цепочка: перевод → «особо ценные» → изъятие → снос.",
  },
];

export default function IndividualsPage() {
  return (
    <>
      <PageHero
        eyebrow="— Физлицам · защита земли"
        title={
          <>
            У вас законно <span className="text-gold-500">отнимают участок</span>?
          </>
        }
        subtitle="Землю выводят из населённого пункта, переводят в сельхоз, вносят в «особо ценные» — и ваш уже построенный дом становится самостроем под снос. Люди идут в суд защищать дом и проигрывают. Ниже — почему так происходит и рабочий алгоритм защиты."
      >
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-700 hover:bg-red-800 text-navy-900 font-semibold px-6 py-3.5 transition-colors"
        >
          Записаться на консультацию →
        </a>
      </PageHero>

      {/* БОЛЬ */}
      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-5 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow mb-5">— Как это происходит</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
              «Тихий» вывод земли — и дом под снос
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <p className="text-grey-500 text-lg leading-relaxed">
              Вы купили участок под ИЖС и построили дом. А потом администрация шаг за шагом
              меняет правила:
            </p>
            <ul className="mt-6 space-y-3 text-navy-900">
              <li className="flex gap-3"><span className="text-gold-500 font-serif">—</span> вывела землю из границ населённого пункта;</li>
              <li className="flex gap-3"><span className="text-gold-500 font-serif">—</span> перевела в сельхозназначение, где строить нельзя;</li>
              <li className="flex gap-3"><span className="text-gold-500 font-serif">—</span> внесла в перечень «особо ценных» угодий.</li>
            </ul>
            <p className="mt-6 text-grey-500 text-lg leading-relaxed">
              Итог: дом признаётся самовольной постройкой. Дальше — изъятие участка
              и постановление о сносе. И всё это формально — «по закону».
            </p>
          </Reveal>
        </div>
      </section>

      {/* ПОЧЕМУ ПРОИГРЫВАЮТ */}
      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-5 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow mb-5">— Почему люди проигрывают</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
              «Это мой дом» суд не услышит
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <p className="text-grey-500 text-lg leading-relaxed">
              В суд идут с требованием «признать решение администрации незаконным» — целиком,
              по сути, по справедливости, по эмоциям. Но суд так не работает: перед ним
              официальный акт органа власти и презумпция его законности.
            </p>
            <p className="mt-6 text-grey-500 text-lg leading-relaxed">
              Суд не будет за вас искать, где администрация нарушила процедуру. Аргумент
              «это мой дом, я здесь живу» юридически не весит ничего.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ГДЕ ПОБЕДА */}
      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-6">— Где находится победа</p>
            <h2 className="font-serif text-3xl md:text-5xl text-cream-100 leading-tight">
              Бить нужно не по сути решения, а по{" "}
              <span className="text-gold-500">процедуре</span> его принятия
            </h2>
            <p className="mt-6 text-cream-100/75 text-lg leading-relaxed">
              Почти всегда нарушения есть. Но сначала их нужно вытащить наружу. Вот рабочий
              алгоритм — пять шагов.
            </p>
          </Reveal>
        </div>
      </section>

      {/* АЛГОРИТМ — 5 ШАГОВ */}
      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-24">
          <Reveal>
            <p className="eyebrow mb-5">— Алгоритм защиты</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight mb-12 max-w-3xl">
              Пять шагов: от запроса документов до отмены решения
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-navy-900/15">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.06}>
                <div className="bg-cream-50 p-8 md:p-10 h-full">
                  <div className="font-serif text-5xl text-gold-500 leading-none mb-5">
                    {String(s.n).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-navy-900 mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-grey-500 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
            {/* Козырь — отдельная акцентная карточка в той же сетке */}
            <Reveal delay={0.06}>
              <div className="bg-navy-900 text-cream-100 p-8 md:p-10 h-full flex flex-col justify-center">
                <p className="eyebrow mb-4 text-gold-500/90">— Ваш козырь</p>
                <p className="font-serif text-xl md:text-2xl leading-snug">
                  Доказывать законность своего акта обязана{" "}
                  <span className="text-gold-500">сама администрация</span> — не вы.
                </p>
                <p className="mt-4 text-cream-100/75 leading-relaxed">
                  Многие об этом не знают и тащат всё бремя на себе. В таком споре расклад
                  изначально не в пользу чиновников.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ПРО ВАС */}
      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-5 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow mb-5">— Универсального шаблона нет</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
              Стратегия — под ваш конкретный случай
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <p className="text-grey-500 text-lg leading-relaxed">
              Все ситуации уникальны: у кого-то слабое место в генплане, у кого-то — в перечне
              угодий, у кого-то — в сроках и согласованиях. Именно правильно выстроенная
              стратегия решает исход дела.
            </p>
            <p className="mt-6 text-grey-500 text-lg leading-relaxed">
              Если у вас выводят участок, грозят изъятием или уже пришёл снос — не ждите.
              На раннем этапе шансы кратно выше.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA + ЦЕНА */}
      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-6">— Запись на консультацию</p>
            <h2 className="font-serif text-3xl md:text-5xl text-cream-100 leading-tight">
              Разберём вашу ситуацию и составим стратегию
            </h2>
            <p className="mt-6 text-cream-100/75 text-lg leading-relaxed">
              Консультация с составлением стратегии защиты — <span className="text-gold-500 font-medium">от 10 000 ₽</span>.
              Запись через Telegram-бота: опишите ситуацию и оставьте контакт — команда свяжется
              с вами в течение рабочего дня.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-700 hover:bg-red-800 text-navy-900 font-semibold px-7 py-4 transition-colors"
              >
                Записаться на консультацию →
              </a>
            </div>
            <p className="mt-8 text-cream-100/55 text-sm leading-relaxed">
              Сохраните страницу — возможно, прямо сейчас кто-то рядом теряет свой дом
              и не знает, что делать.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
