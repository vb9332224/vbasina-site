import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="bg-navy-900 text-cream-100">
      <div className="container-x py-20 md:py-28 lg:py-32">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[64px] text-cream-100 leading-[1.05] max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mt-6 text-base md:text-lg text-cream-100/75 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
