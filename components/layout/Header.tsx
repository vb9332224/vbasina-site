"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site, ctaPrimaryHref, ctaPrimaryLabel } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-cream-100 border-b border-navy-800/60">
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl text-gold-500 hover:text-gold-300 transition-colors tracking-tight"
          onClick={() => setOpen(false)}
        >
          Basina <span className="text-cream-100/70">&</span> Partners
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-cream-100/80 hover:text-gold-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={ctaPrimaryHref}
          className="hidden md:inline-flex items-center bg-red-700 hover:bg-red-800 text-navy-900 text-sm font-medium px-4 py-2.5 font-semibold transition-colors"
        >
          {ctaPrimaryLabel}
        </Link>

        <button
          type="button"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-gold-500 hover:text-gold-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
                <path d="M3 17h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy-800/60 bg-navy-900">
          <nav className="container-x py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-cream-100/90 hover:text-gold-300 transition-colors py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaPrimaryHref}
              className="mt-2 inline-flex items-center justify-center bg-red-700 hover:bg-red-800 text-navy-900 text-sm font-medium px-4 py-3 font-semibold transition-colors"
              onClick={() => setOpen(false)}
            >
              {ctaPrimaryLabel}
            </Link>
          </nav>
        </div>
      )}

      <a
        href={ctaPrimaryHref}
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-red-700 hover:bg-red-800 text-navy-900 text-center text-sm font-medium py-3.5 font-semibold shadow-lg"
      >
        Записаться на сессию →
      </a>

      <span className="sr-only">{site.name}</span>
    </header>
  );
}
