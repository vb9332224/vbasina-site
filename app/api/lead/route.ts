import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  name?: string;
  email?: string;
  contact?: string;
  message?: string;
  product?: string;
  consent?: boolean;
  /** honeypot — должно быть пустым; боты обычно заполняют */
  website?: string;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendTelegram(body: LeadPayload, req: NextRequest): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const ua = req.headers.get("user-agent") ?? "";
  const referer = req.headers.get("referer") ?? "";
  const ts = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

  const lines = [
    `<b>🌿 Новая заявка с vbasina.com</b>`,
    ``,
    `<b>Имя:</b> ${escapeHtml(body.name ?? "—")}`,
  ];
  if (body.email) lines.push(`<b>Email:</b> ${escapeHtml(body.email)}`);
  if (body.contact) lines.push(`<b>Контакт:</b> ${escapeHtml(body.contact)}`);
  if (body.product) lines.push(`<b>Продукт:</b> ${escapeHtml(body.product)}`);
  if (body.message) {
    lines.push(``, `<b>Задача:</b>`, escapeHtml(body.message));
  }
  lines.push(``, `<i>${ts} МСК</i>`);
  if (referer) lines.push(`<i>Источник: ${escapeHtml(referer)}</i>`);
  if (ua) lines.push(`<i>UA: ${escapeHtml(ua).slice(0, 200)}</i>`);

  const text = lines.join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!res.ok) {
      const err = await res.text();
      console.error("[lead] telegram error:", res.status, err);
    }
  } catch (e) {
    console.error("[lead] telegram fetch failed:", e);
  }
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // honeypot — если в скрытое поле что-то попало, это бот; молча отбрасываем
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Обязательно: имя + хотя бы один контакт (email или contact) + согласие
  if (!body.name || (!body.email && !body.contact) || !body.consent) {
    return NextResponse.json(
      {
        ok: false,
        error: "Заполните имя, email или другой контакт и согласие на обработку ПДн.",
      },
      { status: 422 },
    );
  }

  // Лог в Vercel logs (всегда)
  console.log("[lead]", {
    ts: new Date().toISOString(),
    name: body.name,
    email: body.email,
    contact: body.contact,
    product: body.product,
    msgLen: body.message?.length ?? 0,
  });

  // Telegram (если env есть)
  await sendTelegram(body, req);

  return NextResponse.json({ ok: true });
}
