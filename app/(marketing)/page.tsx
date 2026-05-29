import { Hero } from "@/components/sections/Hero";
import { Founders } from "@/components/sections/Founders";
import { VyhodiIzZemli } from "@/components/sections/VyhodiIzZemli";
import { TrustBar } from "@/components/sections/TrustBar";
import { Manifesto } from "@/components/sections/Manifesto";
import { Zachem } from "@/components/sections/Zachem";
import { DlyaKogo } from "@/components/sections/DlyaKogo";
import { Pochemu } from "@/components/sections/Pochemu";
import { Kak } from "@/components/sections/Kak";
import { Quote } from "@/components/sections/Quote";
import { MediaSection } from "@/components/sections/Media";
import { CtaBlock } from "@/components/sections/CtaBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Founders locale="ru" />
      <VyhodiIzZemli locale="ru" />
      <TrustBar />
      <Manifesto />
      <Zachem />
      <DlyaKogo />
      <Pochemu />
      <Kak />
      <Quote />
      <MediaSection />
      <CtaBlock />
    </>
  );
}
