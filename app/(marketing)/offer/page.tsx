import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Оферта",
  description: "Публичная оферта на консультационные услуги BGM Consulting.",
  robots: { index: false, follow: true },
};

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="— Документ"
        title="Публичная оферта"
        subtitle="Краткое описание условий оказания услуг. Полная редакция — в работе у юриста, будет опубликована до приёма платежей."
      />
      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <article className="space-y-6 text-navy-900/85 leading-relaxed">
            <p>
              Исполнитель — {site.legalName} (рег. {site.legalReg}, {site.country}). Заказчик —
              физическое или юридическое лицо, подавшее заявку через сайт {site.url} либо
              напрямую.
            </p>
            <p>
              Перечень услуг описан в разделе{" "}
              <a className="text-gold-500 hover:underline" href="/services">
                /services
              </a>
              . Конкретный объём, сроки и стоимость согласовываются индивидуально и
              фиксируются в письменной форме (договор или оферта-инвойс).
            </p>
            <p>
              Оплата — банковским переводом на счёт исполнителя или иным согласованным способом.
              Возврат — на условиях, прописанных в индивидуальном договоре.
            </p>
            <p className="text-sm text-grey-500">
              Это краткая версия. Полная редакция документа — в работе.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
