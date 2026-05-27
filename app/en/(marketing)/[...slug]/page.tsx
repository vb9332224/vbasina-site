import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming soon — BGM Consulting",
  description: "This section is being translated. The full Russian version is available now.",
  robots: { index: false, follow: true },
};

type Params = { slug: string[] };

export default async function ComingSoonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const ruPath = "/" + (slug?.join("/") ?? "");

  return (
    <section className="bg-navy-900 text-cream-100 flex-1">
      <div className="container-x py-32 md:py-40 text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-6">— Coming soon</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream-100 leading-tight mb-6">
          This section is being translated
        </h1>
        <p className="text-cream-100/75 leading-relaxed mb-10">
          The English version of the website is rolling out in stages. The home page is
          already in English; internal sections are still in Russian. The full English
          translation will be released in the coming days.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/en"
            className="inline-flex items-center bg-red-700 hover:bg-red-800 text-navy-900 font-semibold px-6 py-3.5 transition-colors"
          >
            Back to English home →
          </Link>
          <Link
            href={ruPath}
            className="text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline"
          >
            View the Russian version →
          </Link>
        </div>
      </div>
    </section>
  );
}
