import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Обучение юристов — земельное и девелоперское право | BGM Consulting",
  description:
    "Авторская программа подготовки юристов: защита земли от изъятия, земельное и градостроительное право, проектное финансирование, эскроу, 214-ФЗ. Практика на реальных кейсах с Виолеттой Басиной.",
  alternates: { canonical: "/lawyers" },
};

const BOT_URL = "https://t.me/prland1_bot?start=lawyers";

const modules = [
  {
    n: 1,
    title: "Защита земли от изъятия",
    body: "Вывод участка из населённого пункта, перевод в сельхоз, «особо ценные» угодья, снос. Атака на процедуру, а не на суть: запрос и истребование документов, публичные слушания, бремя доказывания на администрации.",
  },
  {
    n: 2,
    title: "Земельное и градостроительное право",
    body: "Категории земель и виды разрешённого использования, генплан и ПЗЗ, перевод и изменение назначения, оспаривание актов и решений администрации.",
  },
  {
    n: 3,
    title: "Девелоперское право",
    body: "Структурирование проекта и сделки, проектное финансирование, эскроу-счета, договорная база. Как защитить девелоперский проект от недружественного захвата ещё на этапе его создания.",
  },
  {
    n: 4,
    title: "Долевое строительство (214-ФЗ)",
    body: "Эскроу-счета, права дольщиков, компенсационный фонд, риски и обязанности застройщика. История и логика реформы — из первых рук.",
  },
  {
    n: 5,
    title: "Практикум на реальных кейсах",
    body: "Разбор реальных дел — включая первое в России проектное финансирование ИЖС («Омакульма-Аннино») и земельные споры. Работа над делами самих участников.",
  },
];

const audience = [
  "Практикующие юристы и адвокаты",
  "Юр-отделы девелоперов и застройщиков",
  "Юристы, ведущие земельные и строительные споры",
  "Те, кто хочет войти в нишу земельного и девелоперского права",
];

const format = [
  { t: "Онлайн + живые разборы", d: "Занятия и разборы с Виолеттой Басиной, а не запись лекций «в стол»." },
  { t: "Работа над вашими делами", d: "Домашние задания и практика на ваших реальных кейсах, а не на учебных задачах." },
  { t: "Гибкая длительность", d: "Программа от 1 до 3 месяцев — под уровень и задачи группы." },
  { t: "Проверенная методология", d: "То, что отработано на собственных проектах и спорах, а не пересказ кодексов." },
];

export default function LawyersPage() {
  return (
    <>
      <PageHero
        eyebrow="— Юристам · обучение"
        title={
          <>
            Обучение юристов: <span className="text-gold-500">земля и девелопмент</span>
          </>
        }
        subtitle="Авторская программа по самой дефицитной нише — земельное и девелоперское право. От защиты участка от изъятия до проектного финансирования, эскроу и 214-ФЗ. Не теория из кодексов, а практика, проверенная на реальных проектах и спорах."
      >
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-700 hover:bg-red-800 text-navy-900 font-semibold px-6 py-3.5 transition-colors"
        >
          Записаться на программу →
        </a>
      </PageHero>

      {/* ДЛЯ КОГО */}
      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-5 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow mb-5">— Для кого</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight">
              Для юристов, которые хотят сильную нишу
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <ul className="space-y-4">
              {audience.map((a) => (
                <li key={a} className="flex gap-4 text-navy-900 text-lg">
                  <span className="text-gold-500 mt-1 shrink-0 font-serif">—</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-grey-500 leading-relaxed">
              Земельные и девелоперские споры — одна из самых сложных и при этом самых
              востребованных практик. Специалистов, которые видят и землю, и стройку, и
              финансирование одновременно, на рынке почти нет.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section className="bg-cream-100">
        <div className="container-x py-20 md:py-24">
          <Reveal>
            <p className="eyebrow mb-5">— Программа</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight mb-12 max-w-3xl">
              Полный спектр: от защиты земли до финансирования проекта
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-navy-900/15">
            {modules.map((m, i) => (
              <Reveal key={m.n} delay={(i % 2) * 0.06}>
                <div className="bg-cream-100 p-8 md:p-10 h-full">
                  <div className="font-serif text-5xl text-gold-500 leading-none mb-5">
                    {String(m.n).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-navy-900 mb-3 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-grey-500 leading-relaxed">{m.body}</p>
                </div>
              </Reveal>
            ))}
            {/* Спикер — акцентная карточка */}
            <Reveal delay={0.06}>
              <div className="bg-navy-900 text-cream-100 p-8 md:p-10 h-full flex flex-col justify-center">
                <p className="eyebrow mb-4 text-gold-500/90">— Кто ведёт</p>
                <p className="font-serif text-xl md:text-2xl leading-snug">
                  Виолетта Басина — <span className="text-gold-500">инициатор и реализатор</span>{" "}
                  проектного финансирования и эскроу в ИЖС.
                </p>
                <p className="mt-4 text-cream-100/75 leading-relaxed">
                  Автор первого в России горизонтального жилого комплекса. Никто не
                  разбирается в земле и в правовых отношениях с ней так, как наша команда —
                  и именно это мы передаём.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ФОРМАТ */}
      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-24">
          <Reveal>
            <p className="eyebrow mb-5">— Формат</p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 leading-tight mb-12 max-w-3xl">
              Практика, а не лекции в записи
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-900/15">
            {format.map((f, i) => (
              <Reveal key={f.t} delay={(i % 4) * 0.05}>
                <div className="bg-cream-50 p-7 md:p-8 h-full">
                  <div className="font-serif text-3xl text-gold-500 leading-none mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-navy-900 mb-3 leading-snug">
                    {f.t}
                  </h3>
                  <p className="text-grey-500 text-[15px] leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-6">— Запись на программу</p>
            <h2 className="font-serif text-3xl md:text-5xl text-cream-100 leading-tight">
              Войдите в нишу, в которой почти нет конкурентов
            </h2>
            <p className="mt-6 text-cream-100/75 text-lg leading-relaxed">
              Старт ближайшего потока, стоимость и детали программы — по запросу. Опишите
              в боте свой опыт и задачу, оставьте контакт — мы свяжемся и подберём формат.
            </p>
            <div className="mt-10">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-700 hover:bg-red-800 text-navy-900 font-semibold px-7 py-4 transition-colors"
              >
                Записаться на программу →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
