/**
 * Одноразовая регистрация webhook'а у Telegram.
 * Открыть в браузере (или curl):
 *   https://vbasina.com/api/tg-setup?key=<TELEGRAM_SETUP_KEY>
 *
 * Можно дёргать сколько угодно раз — операция идемпотентна.
 */
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const setupKey = process.env.TELEGRAM_SETUP_KEY;
  const url = new URL(req.url);
  if (!setupKey || url.searchParams.get("key") !== setupKey) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return NextResponse.json({ ok: false, error: "no TELEGRAM_BOT_TOKEN" }, { status: 500 });
  }

  const webhookUrl = `${url.origin}/api/tg-webhook`;
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;

  const payload: Record<string, unknown> = {
    url: webhookUrl,
    allowed_updates: ["message", "callback_query"],
    drop_pending_updates: true,
  };
  if (secret) payload.secret_token = secret;

  const res = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json();

  return NextResponse.json({ webhookUrl, secret_set: !!secret, telegram: json });
}
