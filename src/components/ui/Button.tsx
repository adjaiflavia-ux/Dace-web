import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/Icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  // "creme" : sur fond sombre / photo — "cacao" : sur fond clair
  variant?: "creme" | "cacao";
  className?: string;
};

// Bouton-lien Ɖa ce : rectangulaire, lettres espacées, flèche qui glisse au survol.
export default function Button({ href, children, variant = "cacao", className = "" }: ButtonProps) {
  const colors =
    variant === "creme"
      ? "bg-creme text-cacao hover:bg-beige"
      : "bg-cacao text-creme hover:bg-encre";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 px-7 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${colors} ${className}`}
    >
      {children}
      <ArrowRightIcon className="size-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1.5" />
    </Link>
  );
}
