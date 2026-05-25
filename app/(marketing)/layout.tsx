import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BotLauncher } from "@/components/layout/BotLauncher";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BotLauncher />
    </>
  );
}
