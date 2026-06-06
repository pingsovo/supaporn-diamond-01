import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "gold" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 font-body text-[0.8rem] uppercase tracking-[0.18em] " +
  "px-7 py-3.5 min-h-[44px] rounded-[3px] transition-all duration-300 ease-out " +
  "active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-cream hover:bg-espresso",
  ghost:
    "border border-espresso/40 text-espresso hover:border-gold hover:text-gold bg-transparent",
};

export function Button({
  href,
  variant = "gold",
  className = "",
  ...props
}: { href: string; variant?: Variant } & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
