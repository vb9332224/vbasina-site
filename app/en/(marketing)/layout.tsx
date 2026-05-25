import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BotLauncher } from "@/components/layout/BotLauncher";

export default function MarketingLayoutEn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale="en" />
      <main className="flex-1">{children}</main>
      <Footer locale="en" />
      <BotLauncher locale="en" />
    </>
  );
}
