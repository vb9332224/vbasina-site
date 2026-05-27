/**
 * Telegram-webhook для бота @prland1_bot.
 *
 * Сценарий:
 *   1. /start — приветствие + 8 inline-кнопок услуг.
 *   2. Клиент жмёт кнопку → бот шлёт «Напишите имя и контакт» с force_reply,
 *      в тексте сообщения зашит код услуги (мы достаём его потом).
 *   3. Клиент отвечает на это сообщение → мы видим service code в reply_to_message,
 *      собираем заявку и отправляем её Виолетте в основной чат.
 *
 * Хранения сессий в БД не нужно — состояние едет через reply_to_message.
 */

import { NextRequest, NextResponse } from "next/server";
import { tgServices, tgServiceByCode } from "@/lib/tg-services";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- helpers ---

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function tg(method: string, payload: Record<string, unknown>): Promise<unknown> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.error("[tg-webhook] TELEGRAM_BOT_TOKEN missing");
    return null;
  }
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    const json = await res.json();
    if (!res.ok || !json.ok) {
      console.error("[tg-webhook] tg error", method, json);
    }
    return json;
  } catch (e) {
    console.error("[tg-webhook] fetch failed", method, e);
    return null;
  }
}

// --- handlers ---

const SERVICE_TAG_RE = /\[service:([a-z_-]+)\]/;

async function showServicesMenu(chatId: number) {
  const keyboard = tgServices.map((s) => [
    { text: s.title, callback_data: `srv:${s.code}` },
  ]);

  const text =
    "<b>Добрый день! Это бот BGM Consulting.</b>\n\n" +
    "Расскажите, что вас интересует — выберите формат, и наша команда " +
    "свяжется с вами в течение рабочего дня.";

  await tg("sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: keyboard },
  });
}

async function askContact(chatId: number, code: string) {
  const svc = tgServiceByCode(code);
  if (!svc) return;
  // service tag прячется внизу сообщения — потом достанется из reply_to_message.text
  const text =
    `<b>Вы выбрали:</b> ${escapeHtml(svc.title)}\n\n` +
    `Напишите ответом на это сообщение:\n` +
    `1. Как вас зовут\n` +
    `2. Удобный контакт — телефон, telegram-username или email\n` +
    `3. Кратко — суть задачи (по желанию)\n\n` +
    `<i>[service:${svc.code}]</i>`;
  await tg("sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    reply_markup: { force_reply: true, selective: true },
  });
}

async function forwardLeadToOwner(opts: {
  fromName: string;
  fromUsername?: string;
  fromChatId: number;
  serviceTitle: string;
  serviceCode: string;
  message: string;
}) {
  const ownerChatId = process.env.TELEGRAM_CHAT_ID;
  if (!ownerChatId) return;

  const lines = [
    `<b>🌿 Новая заявка через бота</b>`,
    ``,
    `<b>Услуга:</b> ${escapeHtml(opts.serviceTitle)}`,
    `<b>От:</b> ${escapeHtml(opts.fromName)}${
      opts.fromUsername ? ` (@${escapeHtml(opts.fromUsername)})` : ""
    }`,
    `<b>Telegram chat ID:</b> <code>${opts.fromChatId}</code>`,
    ``,
    `<b>Сообщение клиента:</b>`,
    escapeHtml(opts.message),
  ];

  await tg("sendMessage", {
    chat_id: ownerChatId,
    text: lines.join("\n"),
    parse_mode: "HTML",
    disable_web_page_preview: true,
  });
}

async function confirmToClient(chatId: number) {
  await tg("sendMessage", {
    chat_id: chatId,
    text:
      "<b>Заявка принята.</b>\n\n" +
      "Наша команда свяжется с вами в течение рабочего дня.\n" +
      "Если нужно что-то добавить — просто напишите ниже.",
    parse_mode: "HTML",
  });
}

// --- main handler ---

type TgUpdate = {
  update_id: number;
  message?: {
    message_id: number;
    chat: { id: number };
    from?: { first_name?: string; last_name?: string; username?: string };
    text?: string;
    reply_to_message?: { text?: string };
  };
  callback_query?: {
    id: string;
    from: { first_name?: string; last_name?: string; username?: string };
    message?: { chat: { id: number } };
    data?: string;
  };
};

export async function POST(req: NextRequest) {
  // Простейшая защита — секрет в заголовке (Telegram это поддерживает на setWebhook)
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (expected) {
    const got = req.headers.get("x-telegram-bot-api-secret-token");
    if (got !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
  }

  let update: TgUpdate;
  try {
    update = (await req.json()) as TgUpdate;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // 1) callback от inline-кнопки
  if (update.callback_query) {
    const cq = update.callback_query;
    const chatId = cq.message?.chat.id;
    const data = cq.data ?? "";
    if (chatId && data.startsWith("srv:")) {
      const code = data.slice(4);
      // быстрый ack
      await tg("answerCallbackQuery", { callback_query_id: cq.id });
      await askContact(chatId, code);
    } else {
      await tg("answerCallbackQuery", { callback_query_id: cq.id });
    }
    return NextResponse.json({ ok: true });
  }

  // 2) обычное сообщение
  const msg = update.message;
  if (!msg || !msg.text) return NextResponse.json({ ok: true });

  const chatId = msg.chat.id;
  const text = msg.text.trim();
  const from = msg.from ?? {};
  const fromName =
    [from.first_name, from.last_name].filter(Boolean).join(" ").trim() ||
    from.username ||
    "—";

  // 2a) /start — показать меню
  if (text === "/start" || text.startsWith("/start ")) {
    await showServicesMenu(chatId);
    return NextResponse.json({ ok: true });
  }

  // 2b) команды-helpers
  if (text === "/menu" || text === "/services" || text === "/услуги") {
    await showServicesMenu(chatId);
    return NextResponse.json({ ok: true });
  }

  // 2c) ответ на форму с service-тегом
  const replyText = msg.reply_to_message?.text ?? "";
  const tagMatch = replyText.match(SERVICE_TAG_RE);
  if (tagMatch) {
    const code = tagMatch[1];
    const svc = tgServiceByCode(code);
    if (svc) {
      await forwardLeadToOwner({
        fromName,
        fromUsername: from.username,
        fromChatId: chatId,
        serviceTitle: svc.title,
        serviceCode: svc.code,
        message: text,
      });
      await confirmToClient(chatId);
      return NextResponse.json({ ok: true });
    }
  }

  // 2d) свободное сообщение — переслать владельцу как «без выбора услуги»
  await forwardLeadToOwner({
    fromName,
    fromUsername: from.username,
    fromChatId: chatId,
    serviceTitle: "— не выбрана (свободное сообщение)",
    serviceCode: "free",
    message: text,
  });
  await tg("sendMessage", {
    chat_id: chatId,
    text:
      "Получили ваше сообщение. Если хотите выбрать конкретный формат — отправьте /menu.",
    parse_mode: "HTML",
  });

  return NextResponse.json({ ok: true });
}

// GET — health check для отладки
export async function GET() {
  return NextResponse.json({ ok: true, service: "tg-webhook" });
}
