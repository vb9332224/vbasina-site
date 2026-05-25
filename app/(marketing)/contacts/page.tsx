import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/sections/LeadForm";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Контакты — Basina & Partners",
  description:
    "Email, Telegram, Instagram, LinkedIn. Офис в Ереване. ООО «Басина и партнёры», рег. 85.110.1476680.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="— Контакты"
        title={
          <>
            Свяжитесь<br />
            <span className="text-gold-500">со мной лично</span>
          </>
        }
        subtitle="Отвечаю на сообщения в течение 24 часов в рабочие дни. На срочные запросы по срочным проектам — в течение 4 часов."
      />

      <section className="bg-navy-900 text-cream-100">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-2 space-y-8">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="font-serif text-2xl md:text-3xl text-cream-100 hover:text-gold-300 transition-colors"
              >
                {site.email}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3">Telegram</p>
              <a
                href={`https://t.me/${site.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-cream-100 hover:text-gold-300 transition-colors"
              >
                @{site.telegram}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3">Instagram</p>
              <a
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-cream-100 hover:text-gold-300 transition-colors"
              >
                @{site.instagram}
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3">LinkedIn</p>
              <a
                href={`https://linkedin.com/in/${site.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-cream-100 hover:text-gold-300 transition-colors"
              >
                linkedin.com/in/{site.linkedin}
              </a>
            </div>

            <div className="pt-8 border-t border-navy-800">
              <p className="eyebrow mb-3">Офис</p>
              <p className="text-cream-100/85 leading-relaxed">
                Ереван, Армения
                <br />
                <span className="text-cream-100/50 text-sm">Адрес уточняется</span>
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3">Юридическое лицо</p>
              <p className="text-cream-100/85 text-sm leading-relaxed">
                {site.legalName}
                <br />
                рег. {site.legalReg}
                <br />
                {site.country}
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3">Время ответа</p>
              <p className="text-cream-100/85 text-sm leading-relaxed">
                Стандартно — в течение 24 часов в рабочие дни.
                <br />
                Срочные запросы по срочным проектам — в течение 4 часов.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div id="form" className="bg-navy-800/40 border border-cream-100/10 p-7 md:p-9 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-cream-100 mb-3 leading-tight">
                Записаться на стратегическую сессию
              </h2>
              <p className="text-cream-100/70 mb-6">
                Расскажите о задаче — отвечу лично.
              </p>
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
