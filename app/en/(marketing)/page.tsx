import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Manifesto } from "@/components/sections/Manifesto";
import { Zachem } from "@/components/sections/Zachem";
import { DlyaKogo } from "@/components/sections/DlyaKogo";
import { Pochemu } from "@/components/sections/Pochemu";
import { Kak } from "@/components/sections/Kak";
import { CasesGrid } from "@/components/sections/CasesGrid";
import { Quote } from "@/components/sections/Quote";
import { MediaSection } from "@/components/sections/Media";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = {
  title: "Basina & Partners — strategic consulting",
  description:
    "We make star projects. Land producers. 17 years in real estate. Russia, Armenia, Kyrgyzstan, Azerbaijan, Tajikistan.",
  alternates: {
    canonical: "/en",
    languages: {
      ru: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "en_US",
    title: "Basina & Partners — strategic consulting",
    description: "Land producers. 17 years in real estate. We make star projects.",
  },
};

export default function HomePageEn() {
  return (
    <>
      <Hero locale="en" />
      <TrustBar locale="en" />
      <Manifesto locale="en" />
      <Zachem locale="en" />
      <DlyaKogo locale="en" />
      <Pochemu locale="en" />
      <Kak locale="en" />
      <CasesGrid locale="en" />
      <Quote locale="en" />
      <MediaSection locale="en" />
      <CtaBlock locale="en" />
    </>
  );
}
