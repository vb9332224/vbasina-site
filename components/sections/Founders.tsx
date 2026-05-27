import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Locale } from "@/lib/i18n/types";

type Founder = {
  name: { ru: string; en: string };
  role: { ru: string; en: string };
  photo: string;
  initials: string;
  /** В драфте до согласования с автором */
  draft?: boolean;
  quote: { ru: string; en: string };
};

const founders: Founder[] = [
  {
    name: { ru: "Виолетта Басина", en: "Violetta Basina" },
    role: {
      ru: "Основатель и идеолог BGM Consulting",
      en: "Founder and ideologist of BGM Consulting",
    },
    photo: "/images/portraits/violetta-green.jpg",
    initials: "ВБ",
    quote: {
      ru:
        "Я создаю среды, в которых человек снова чувствует смысл, ценность и опору. Соединяю то, что раньше считалось несовместимым. Строю новые рынки, новые модели жизни и новые сообщества. Верю, что будущее создают люди действия. Для меня бизнес — это не только прибыль, а способ менять качество жизни людей и территорий. Моя задача — делать сложное простым, запускать новое и открывать людям их собственный потенциал.",
      en:
        "I create environments where a person rediscovers meaning, value, and support. I bring together what used to be considered incompatible. I build new markets, new ways of living, and new communities. I believe the future belongs to people of action. For me, business isn’t just profit — it’s a way to change the quality of life of people and territories. My job is to make the complex simple, to launch the new, and to help people discover their own potential.",
    },
  },
  {
    name: { ru: "Яна Гергель", en: "Yana Gergel" },
    role: {
      ru: "Сооснователь BGM Consulting · архитектор-градостроитель",
      en: "Co-founder of BGM Consulting · architect-urbanist",
    },
    photo: "/images/partners/yana-gergel.jpg",
    initials: "ЯГ",
    draft: true,
    quote: {
      ru:
        "Город — это не сумма зданий. Это сумма решений, которые мы принимаем за людей, которые ещё в нём не родились. Среда формирует характер. Если мы строим случайно — получаем случайных людей. Моя задача — закладывать в территорию язык, на котором она сможет говорить с поколениями. И тогда инвестиция в землю становится инвестицией в будущее, а не в квадратные метры.",
      en:
        "A city isn’t a sum of buildings. It’s a sum of decisions we make on behalf of people who haven’t been born there yet. The environment shapes character — and if we build by accident, we get accidental people. My job is to encode into a territory a language that can speak across generations. Then land investment becomes an investment in the future, not in square metres.",
    },
  },
  {
    name: { ru: "Мария Майер", en: "Maria Mayer" },
    role: {
      ru: "Сооснователь BGM Consulting · эксперт по идентичности территории",
      en: "Co-founder of BGM Consulting · place-identity expert",
    },
    photo: "/images/partners/maria-mayer.jpg",
    initials: "ММ",
    draft: true,
    quote: {
      ru:
        "Деньги приходят туда, где есть смысл. Земля начинает приносить доход тогда, когда у неё появляется характер — традиции, аромат места, лицо сообщества. Мы строим не дома, а память, которой захочется передаваться. Это и есть высшая форма доходной недвижимости — та, ради которой возвращаются и платят премию к рыночной цене метра.",
      en:
        "Money flows to where meaning lives. Land starts generating income when it gains character — traditions, the scent of place, the face of a community. We don’t build houses; we build memory worth passing on. That’s the highest form of income real estate — the one people return to and pay a premium for, well above the market price per metre.",
    },
  },
];

export function Founders({ locale = "ru" }: { locale?: Locale }) {
  return (
    <section id="founders" className="bg-cream-50 scroll-mt-24">
      <div className="container-x py-20 md:py-28">
        <Reveal>
          <p className="eyebrow mb-5">
            {locale === "ru" ? "— Основатели" : "— Founders"}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight max-w-4xl">
            {locale === "ru" ? (
              <>
                Три голоса, которые задают <span className="text-gold-500">смысл, форму и доход</span> каждого нашего проекта.
              </>
            ) : (
              <>
                Three voices that set the <span className="text-gold-500">meaning, form, and income</span> of every project we touch.
              </>
            )}
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 space-y-14 md:space-y-20">
          {founders.map((f, idx) => (
            <Reveal key={f.name.ru} delay={idx * 0.06}>
              <article className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start">
                {/* Round photo */}
                <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden bg-navy-900 border-2 border-gold-500/50 shrink-0 mx-auto md:mx-0">
                  {f.photo ? (
                    <Image
                      src={f.photo}
                      alt={f.name[locale]}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 768px) 180px, 150px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-6xl text-gold-500">
                        {f.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Quote */}
                <div className="text-center md:text-left">
                  <p className="font-serif text-xl md:text-2xl lg:text-[26px] text-navy-900 leading-snug">
                    <span className="text-gold-500 font-serif text-3xl leading-none mr-1 align-top">
                      “
                    </span>
                    {f.quote[locale]}
                  </p>
                  <div className="mt-6">
                    <p className="font-serif text-lg md:text-xl text-navy-900">
                      {f.name[locale]}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gold-500">
                      {f.role[locale]}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
