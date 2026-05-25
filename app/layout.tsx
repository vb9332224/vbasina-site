import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — стратегический консалтинг`,
    template: `%s | ${site.name}`,
  },
  description:
    "Создаём индустрии. Защищаем активы. Запускаем продукты с нуля. 17 лет в бизнесе. Россия, Армения, Кыргызстан.",
  applicationName: site.name,
  authors: [{ name: site.founder.fullName }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — стратегический консалтинг`,
    description:
      "Создаём индустрии. Защищаем активы. Запускаем продукты с нуля. 17 лет в бизнесе.",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Стратегический консалтинг. 17 лет в бизнесе.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream-50 text-ink-900">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
