/**
 * Telegram-webhook для бота @prland1_bot.
 *
 * Сценарий (контакт — ОБЯЗАТЕЛЕН):
 *   1. /start [код] — приветствие + inline-кнопки.
 *      Если в /start пришёл код услуги (deep-link с сайта,
 *      напр. https://t.me/prland1_bot?start=land_defense) —
 *      сразу запускаем сценарий этой услуги.
 *   2. Клиент жмёт кнопку → бот просит описать ситуацию ответом
 *      на сообщение (в тексте зашит [service:CODE]).
 *   3. Клиент отвечает → заявку пересылаем владельцу и СРАЗУ
 *      просим поделиться номером кнопкой request_contact.
 *   4. Клиент жмёт «Отправить мой номер» → Telegram присылает contact,
 *      номер уходит владельцу. Только теперь заявка считается полной.
 *
 * Состояние не храним — оно едет через reply_to_message + request_contact.
 * Контакт обязателен: пока номера нет, бот настойчиво его запрашивает.
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
    "🏡 <b>Физлицам</b> — если у вас выводят участок, грозят изъятием или сносом дома, " +
    "выберите первую кнопку: разберём ситуацию и составим стратегию защиты.\n\n" +
    "🌿 <b>Бизнесу и девелопменту</b> — выберите нужный формат ниже.\n\n" +
    "Чтобы мы могли с вами связаться, в конце попросим оставить номер телефона.";

  await tg("sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: keyboard },
  });
}

/** Шаг 1 — просим описать ситуацию ответом на сообщение (несёт [service:CODE]). */
async function askDetails(chatId: number, code: string) {
  const svc = tgServiceByCode(code);
  if (!svc) return;

  const isDefense = svc.code === "land_defense";

  const text = isDefense
    ? `<b>Защита земли от изъятия</b>\n\n` +
      `Опишите <b>ответом на это сообщение</b> вашу ситуацию:\n` +
      `1. Что происходит с участком (вывод из населённого пункта, перевод в сельхоз, «особо ценные», изъятие, снос)\n` +
      `2. На какой стадии вы сейчас (письма, суд, постановление)\n` +
      `3. Регион и назначение участка\n\n` +
      `Консультация со стратегией — от 10 000 ₽.\n` +
      `<i>[service:${svc.code}]</i>`
    : `<b>Вы выбрали:</b> ${escapeHtml(svc.title)}\n\n` +
      `Опишите <b>ответом на это сообщение</b>:\n` +
      `1. Как вас зовут\n` +
      `2. Кратко — суть задачи\n\n` +
      `<i>[service:${svc.code}]</i>`;

  await tg("sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    reply_markup: { force_reply: true, selective: false },
  });
}

/** Шаг 2 — ОБЯЗАТЕЛЬНЫЙ контакт через кнопку request_contact. */
async function requestPhone(chatId: number) {
  await tg("sendMessage", {
    chat_id: chatId,
    text:
      "Спасибо! Остался <b>один шаг</b> 👇\n\n" +
      "Нажмите кнопку <b>«📱 Отправить мой номер»</b>, чтобы мы могли с вами связаться. " +
      "Без контакта мы не сможем ответить.",
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [[{ text: "📱 Отправить мой номер", request_contact: true }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
}

async function forwardLeadToOwner(opts: {
  fromName: string;
  fromUsername?: string;
  fromChatId: number;
  serviceTitle: string;
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
    `<b>Контакт:</b> ⏳ ждём номер телефона`,
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

async function forwardContactToOwner(opts: {
  fromName: string;
  fromUsername?: string;
  fromChatId: number;
  phone: string;
}) {
  const ownerChatId = process.env.TELEGRAM_CHAT_ID;
  if (!ownerChatId) return;

  const lines = [
    `<b>📱 Контакт получен</b>`,
    ``,
    `<b>От:</b> ${escapeHtml(opts.fromName)}${
      opts.fromUsername ? ` (@${escapeHtml(opts.fromUsername)})` : ""
    }`,
    `<b>Телефон:</b> <code>${escapeHtml(opts.phone)}</code>`,
    `<b>Telegram chat ID:</b> <code>${opts.fromChatId}</code>`,
    ``,
    `Свяжитесь с клиентом по телефону или напишите в Telegram.`,
  ];

  await tg("sendMessage", {
    chat_id: ownerChatId,
    text: lines.join("\n"),
    parse_mode: "HTML",
    disable_web_page_preview: true,
  });
}

/** Финальное подтверждение + убираем reply-клавиатуру. */
async function confirmComplete(chatId: number) {
  await tg("sendMessage", {
    chat_id: chatId,
    text:
      "<b>Заявка принята полностью.</b>\n\n" +
      "Мы получили вашу ситуацию и контакт — команда свяжется с вами в течение рабочего дня.\n" +
      "Если нужно что-то добавить, просто напишите ниже.",
    parse_mode: "HTML",
    reply_markup: { remove_keyboard: true },
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
    contact?: { phone_number: string; first_name?: string; last_name?: string };
  };
  callback_query?: {
    id: string;
    from: { first_name?: string; last_name?: string; username?: string };
    message?: { chat: { id: number } };
    data?: string;
  };
};

function nameOf(from: { first_name?: string; last_name?: string; username?: string }): string {
  return (
    [from.first_name, from.last_name].filter(Boolean).join(" ").trim() ||
    from.username ||
    "—"
  );
}

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
    await tg("answerCallbackQuery", { callback_query_id: cq.id });
    if (chatId && data.startsWith("srv:")) {
      await askDetails(chatId, data.slice(4));
    }
    return NextResponse.json({ ok: true });
  }

  const msg = update.message;
  if (!msg) return NextResponse.json({ ok: true });

  const chatId = msg.chat.id;
  const from = msg.from ?? {};
  const fromName = nameOf(from);

  // 2) контакт получен (request_contact) — ОБЯЗАТЕЛЬНЫЙ шаг
  if (msg.contact?.phone_number) {
    await forwardContactToOwner({
      fromName,
      fromUsername: from.username,
      fromChatId: chatId,
      phone: msg.contact.phone_number,
    });
    await confirmComplete(chatId);
    return NextResponse.json({ ok: true });
  }

  const text = (msg.text ?? "").trim();
  if (!text) return NextResponse.json({ ok: true });

  // 3a) /start [код] — deep-link или меню
  if (text === "/start" || text.startsWith("/start ")) {
    const param = text.slice("/start".length).trim();
    const svc = param ? tgServiceByCode(param) : undefined;
    if (svc) {
      await askDetails(chatId, svc.code);
    } else {
      await showServicesMenu(chatId);
    }
    return NextResponse.json({ ok: true });
  }

  // 3b) команды-helpers
  if (text === "/menu" || text === "/services" || text === "/услуги") {
    await showServicesMenu(chatId);
    return NextResponse.json({ ok: true });
  }

  // 3c) ответ на форму с service-тегом → пересылаем заявку и просим телефон
  const replyText = msg.reply_to_message?.text ?? "";
  const tagMatch = replyText.match(SERVICE_TAG_RE);
  if (tagMatch) {
    const svc = tgServiceByCode(tagMatch[1]);
    if (svc) {
      await forwardLeadToOwner({
        fromName,
        fromUsername: from.username,
        fromChatId: chatId,
        serviceTitle: svc.title,
        message: text,
      });
      await requestPhone(chatId);
      return NextResponse.json({ ok: true });
    }
  }

  // 3d) свободное сообщение — пересылаем и ОБЯЗАТЕЛЬНО запрашиваем контакт
  await forwardLeadToOwner({
    fromName,
    fromUsername: from.username,
    fromChatId: chatId,
    serviceTitle: "— свободное сообщение",
    message: text,
  });
  await requestPhone(chatId);
  return NextResponse.json({ ok: true });
}

// GET — health check для отладки
export async function GET() {
  return NextResponse.json({ ok: true, service: "tg-webhook" });
}
