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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Manifesto />
      <Zachem />
      <DlyaKogo />
      <Pochemu />
      <Kak />
      <CasesGrid />
      <Quote />
      <MediaSection />
      <CtaBlock />
    </>
  );
}
