import Link from "next/link";
import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost-gold";

const styles: Record<Variant, string> = {
  primary:
    "bg-red-700 hover:bg-red-800 text-white border border-gold-500/60 px-6 py-3.5 text-sm md:text-base font-medium tracking-wide transition-colors",
  secondary:
    "bg-transparent text-gold-500 hover:text-gold-300 border border-gold-500 hover:border-gold-300 px-6 py-3.5 text-sm md:text-base font-medium tracking-wide transition-colors",
  "ghost-gold":
    "text-gold-500 hover:text-gold-300 underline-offset-4 hover:underline text-sm md:text-base font-medium transition-colors",
};

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button({ href, variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
