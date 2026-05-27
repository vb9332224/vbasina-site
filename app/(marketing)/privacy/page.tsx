import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика обработки персональных данных BGM Consulting.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="— Документ"
        title="Политика конфиденциальности"
        subtitle="Краткое уведомление о порядке обработки персональных данных. Полная редакция — будет опубликована после согласования с юристом."
      />
      <section className="bg-cream-50">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <article className="prose-like space-y-6 text-navy-900/85 leading-relaxed">
            <p>
              Оператор обработки персональных данных — {site.legalName} (рег. {site.legalReg},{" "}
              {site.country}).
            </p>
            <p>
              При заполнении формы на сайте вы передаёте: имя, email, контакт для связи и
              описание задачи. Эти данные используются исключительно для ответа на вашу заявку и
              согласования формата работы.
            </p>
            <p>
              Мы не передаём данные третьим лицам, не используем их для рекламы и удаляем по
              первому запросу. Запрос на удаление — на адрес {" "}
              <a className="text-gold-500 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
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
