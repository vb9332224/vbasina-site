"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/site-config";
import { dict, t } from "@/lib/i18n/dict";
import { Locale, localePath } from "@/lib/i18n/types";

type State = "idle" | "loading" | "success" | "error";

export function LeadForm({
  id = "form",
  locale = "ru",
}: {
  id?: string;
  locale?: Locale;
}) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  const errFallback =
    locale === "ru" ? "Не удалось отправить. Попробуйте позже." : "Could not send. Please try again later.";
  const errNetwork =
    locale === "ru" ? "Сетевая ошибка. Попробуйте позже." : "Network error. Please try again later.";

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
          website: String(data.website ?? ""),
          locale,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json?.error ?? errFallback);
        setState("error");
        return;
      }
      setState("success");
      form.reset();
    } catch {
      setError(errNetwork);
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div id={id} className="bg-navy-800/40 border border-gold-500/40 p-8 text-cream-100">
        <p className="font-serif text-2xl text-gold-500 mb-3">{t(locale, (d) => d.form.successTitle)}</p>
        <p className="text-cream-100/80">{t(locale, (d) => d.form.successBody)}</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot — невидимое поле, заполняемое ботами. Люди его не видят. */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="lead-website">Website (do not fill)</label>
        <input
          id="lead-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="lead-name" className="sr-only">{t(locale, (d) => d.form.name)}</label>
        <input
          id="lead-name"
          name="name"
          required
          autoComplete="name"
          placeholder={t(locale, (d) => d.form.name)}
          className="w-full bg-transparent border border-cream-100/20 focus:border-gold-500 outline-none px-4 py-3.5 text-cream-100 placeholder:text-cream-100/40 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="lead-email" className="sr-only">{t(locale, (d) => d.form.email)}</label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t(locale, (d) => d.form.email)}
          className="w-full bg-transparent border border-cream-100/20 focus:border-gold-500 outline-none px-4 py-3.5 text-cream-100 placeholder:text-cream-100/40 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="lead-contact" className="sr-only">{t(locale, (d) => d.form.contact)}</label>
        <input
          id="lead-contact"
          name="contact"
          placeholder={t(locale, (d) => d.form.contact)}
          className="w-full bg-transparent border border-cream-100/20 focus:border-gold-500 outline-none px-4 py-3.5 text-cream-100 placeholder:text-cream-100/40 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="lead-message" className="sr-only">{t(locale, (d) => d.form.message)}</label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          placeholder={t(locale, (d) => d.form.message)}
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
          {t(locale, (d) => d.form.consent)}{" "}
          <a
            href={localePath(locale, "/privacy")}
            className="text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline"
          >
            {t(locale, (d) => d.form.consentLink)}
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
        {state === "loading" ? t(locale, (d) => d.form.sending) : t(locale, (d) => d.form.submit)}
      </button>

      <p className="text-xs text-cream-100/60 text-center pt-2">
        {t(locale, (d) => d.form.or)}{" "}
        <a href={`mailto:${site.email}`} className="text-gold-500 hover:text-gold-300">
          {site.email}
        </a>{" "}
        · @{site.telegram}
      </p>
    </form>
  );
}
