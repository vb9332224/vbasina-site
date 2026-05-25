"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/site-config";

type State = "idle" | "loading" | "success" | "error";

export function LeadForm({ id = "form" }: { id?: string }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("loading");
    setError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.name ?? ""),
          email: String(data.email ?? ""),
          contact: String(data.contact ?? ""),
          message: String(data.message ?? ""),
          consent: data.consent === "on",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json?.error ?? "Не удалось отправить. Попробуйте позже.");
        setState("error");
        return;
      }
      setState("success");
      form.reset();
    } catch {
      setError("Сетевая ошибка. Попробуйте позже.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div id={id} className="bg-navy-800/40 border border-gold-500/40 p-8 text-cream-100">
        <p className="font-serif text-2xl text-gold-500 mb-3">Заявка отправлена</p>
        <p className="text-cream-100/80">
          Виолетта свяжется с вами в течение 24 часов в рабочие дни. На срочные запросы по
          срочным запросам — в течение 4 часов.
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="lead-name" className="sr-only">
          Имя
        </label>
        <input
          id="lead-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Ваше имя"
          className="w-full bg-transparent border border-cream-100/20 focus:border-gold-500 outline-none px-4 py-3.5 text-cream-100 placeholder:text-cream-100/40 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="lead-email" className="sr-only">
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email"
          className="w-full bg-transparent border border-cream-100/20 focus:border-gold-500 outline-none px-4 py-3.5 text-cream-100 placeholder:text-cream-100/40 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="lead-contact" className="sr-only">
          Telegram или телефон
        </label>
        <input
          id="lead-contact"
          name="contact"
          placeholder="Telegram или телефон (опционально)"
          className="w-full bg-transparent border border-cream-100/20 focus:border-gold-500 outline-none px-4 py-3.5 text-cream-100 placeholder:text-cream-100/40 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="lead-message" className="sr-only">
          Задача
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          placeholder="О какой задаче хотели бы поговорить"
          className="w-full bg-transparent border border-cream-100/20 focus:border-gold-500 outline-none px-4 py-3.5 text-cream-100 placeholder:text-cream-100/40 transition-colors resize-y"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-cream-100/70 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 accent-gold-500 w-4 h-4 shrink-0"
        />
        <span>
          Согласен на обработку персональных данных в соответствии с{" "}
          <a href="/privacy" className="text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline">
            политикой конфиденциальности
          </a>
          .
        </span>
      </label>

      {error && (
        <p className="text-sm text-[#A8302A] bg-[#A8302A]/10 border border-[#A8302A]/40 px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-60 disabled:cursor-not-allowed text-navy-900 px-6 py-4 text-base font-semibold tracking-wide transition-colors"
      >
        {state === "loading" ? "Отправляем…" : "Записаться на сессию →"}
      </button>

      <p className="text-xs text-cream-100/60 text-center pt-2">
        Или напишите напрямую:{" "}
        <a href={`mailto:${site.email}`} className="text-gold-500 hover:text-gold-300">
          {site.email}
        </a>{" "}
        · @{site.telegram} · LinkedIn
      </p>
    </form>
  );
}
