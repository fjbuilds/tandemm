import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-5 text-[15px] font-semibold leading-none transition-colors duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-hover)] disabled:bg-[var(--color-ink-faint)] disabled:hover:bg-[var(--color-ink-faint)]",
  secondary:
    "bg-white/10 text-white border border-white/25 hover:bg-white/20",
  ghost: "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)]",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps &
  ({ href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "href"
  >)) {
  return (
    <Link
      href={href}
      className={cn(base, "h-[42px]", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonEl({
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(base, "h-[42px]", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
