/**
 * 8 кнопок Telegram-бота @prland1_bot.
 * Первая — универсальная (15-мин знакомство), далее по приоритету
 * монетизации (от флагмана к курсу).
 */
export type TgService = { code: string; title: string; slug: string };

export const tgServices: TgService[] = [
  { code: "intro",     title: "📅 15-минутное знакомство",       slug: "intro" },
  { code: "land",      title: "🌿 Землепродюсирование",          slug: "land" },
  { code: "strategy",  title: "🎯 Стратегическая сессия",        slug: "strategy" },
  { code: "fullcycle", title: "🚀 Полный цикл — запуск продукта", slug: "full-cycle" },
  { code: "recovery",  title: "🔧 Антикризис для бизнеса",        slug: "recovery" },
  { code: "corporate", title: "👥 Корпоративная сессия",          slug: "corporate" },
  { code: "mentoring", title: "🧭 Менторская программа",          slug: "mentoring" },
  { code: "agents",    title: "🏘️ Обучение агентов продаже земли", slug: "agents-training" },
];

export function tgServiceByCode(code: string): TgService | undefined {
  return tgServices.find((s) => s.code === code);
}
