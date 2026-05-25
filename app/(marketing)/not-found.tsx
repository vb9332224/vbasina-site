import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navy-900 text-cream-100 flex-1">
      <div className="container-x py-32 md:py-40 text-center">
        <p className="eyebrow mb-6">— 404</p>
        <h1 className="font-serif text-5xl md:text-7xl text-cream-100 leading-none">
          Страница<br />
          <span className="text-gold-500">не найдена</span>
        </h1>
        <p className="mt-8 text-cream-100/70 max-w-md mx-auto leading-relaxed">
          Возможно, ссылка устарела или вы ошиблись в адресе. Вернитесь на главную или напишите —
          поможем найти.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center bg-red-700 hover:bg-red-800 text-navy-900 font-semibold px-6 py-3.5 transition-colors"
          >
            На главную →
          </Link>
          <Link
            href="/contacts"
            className="text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline"
          >
            Связаться →
          </Link>
        </div>
      </div>
    </section>
  );
}
