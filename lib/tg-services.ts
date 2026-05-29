/**
 * Кнопки Telegram-бота @prland1_bot.
 * Первый блок — для физлиц (защита земли от изъятия),
 * далее — B2B-форматы по приоритету монетизации (от флагмана к курсу).
 *
 * `kind`:
 *   "b2c" — частный собственник, защита земли;
 *   "b2b" — бизнес/девелопмент.
 */
export type TgService = {
  code: string;
  title: string;
  slug: string;
  kind: "b2c" | "b2b";
};

export const tgServices: TgService[] = [
  { code: "land_defense", title: "🏡 Защита земли от изъятия (физлицам)", slug: "individuals",     kind: "b2c" },
  { code: "intro",        title: "📅 15-минутное знакомство",             slug: "intro",           kind: "b2b" },
  { code: "land",         title: "🌿 Землепродюсирование",                slug: "land",            kind: "b2b" },
  { code: "strategy",     title: "🎯 Стратегическая сессия",              slug: "strategy",        kind: "b2b" },
  { code: "fullcycle",    title: "🚀 Полный цикл — запуск продукта",       slug: "full-cycle",      kind: "b2b" },
  { code: "recovery",     title: "🔧 Антикризис для бизнеса",              slug: "recovery",        kind: "b2b" },
  { code: "corporate",    title: "👥 Корпоративная сессия",               slug: "corporate",       kind: "b2b" },
  { code: "mentoring",    title: "🧭 Менторская программа",               slug: "mentoring",       kind: "b2b" },
  { code: "agents",       title: "🏘️ Обучение агентов продаже земли",      slug: "agents-training", kind: "b2b" },
];

export function tgServiceByCode(code: string): TgService | undefined {
  return tgServices.find((s) => s.code === code);
}
