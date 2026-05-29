import { Locale } from "@/lib/i18n/types";
import { telegramBotUrl } from "@/lib/site-config";

const BOT_URL = `${telegramBotUrl}?start=site`;

export function BotLauncher({ locale = "ru" }: { locale?: Locale }) {
  const label = locale === "ru" ? "Связаться с командой" : "Contact our team";
  const aria = locale === "ru" ? "Связаться с командой в Telegram" : "Contact the team on Telegram";

  return (
    <a
      href={BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={aria}
      className="hidden md:inline-flex fixed z-40 bottom-6 right-6 items-center gap-3 bg-gold-500 hover:bg-gold-300 text-navy-900 px-5 py-3.5 shadow-xl text-[15px] font-semibold transition-colors border border-navy-900/10"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 7.05l-1.55 7.31c-.12.52-.42.65-.85.4l-2.35-1.74-1.13 1.09c-.13.13-.24.24-.48.24l.17-2.43 4.42-4c.19-.17-.04-.27-.3-.1l-5.47 3.44-2.36-.74c-.51-.16-.52-.51.11-.75l9.21-3.55c.43-.16.81.1.66.83z" />
      </svg>
      <span className="whitespace-nowrap">{label}</span>
    </a>
  );
}
