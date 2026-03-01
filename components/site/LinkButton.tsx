import Link from "next/link";

import type { Cta } from "@/types/content";

type LinkButtonProps = {
  cta: Cta;
};

const variantClass: Record<NonNullable<Cta["style"]>, string> = {
  primary:
    "bg-accent text-white border-accent hover:bg-[#bf5d18] hover:border-[#bf5d18] shadow-glow",
  secondary:
    "bg-white/80 text-ink border-line hover:bg-white",
  ghost: "bg-transparent text-ink border-line hover:bg-white/40"
};

export function LinkButton({ cta }: LinkButtonProps) {
  const variant = cta.style ?? "primary";

  return (
    <Link
      href={cta.href}
      target={cta.external ? "_blank" : undefined}
      rel={cta.external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium tracking-[0.01em] transition-colors ${variantClass[variant]}`}
    >
      {cta.label}
    </Link>
  );
}
