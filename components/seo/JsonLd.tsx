import { site } from "@/lib/site-config";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.legalName,
  url: site.url,
  email: site.email,
  founder: {
    "@type": "Person",
    name: site.founder.fullName,
    jobTitle: site.founder.titleEn,
    alumniOf: "International Academy of Mortgage and Real Estate",
  },
  areaServed: ["RU", "AM", "KG"],
  serviceType: "Strategic Consulting",
  sameAs: [
    `https://t.me/${site.telegram}`,
    `https://instagram.com/${site.instagram}`,
  ],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.founder.fullName,
  jobTitle: site.founder.titleRu,
  worksFor: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  description:
    "Один из основателей загородного девелопмента России. Создала первое в стране проектное финансирование ИЖС. Лауреат Dubai Award 2023.",
  sameAs: [
    `https://instagram.com/${site.instagram}`,
  ],
  award: [
    "Dubai International Award №1 (2023)",
    "Российский Строительный Олимп — лауреат",
    "Почётный знак «Строительная Слава» (2019)",
    "Действительный член МАИН (2022)",
    "Благодарность Президента НОСТРОЙ (2023)",
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
