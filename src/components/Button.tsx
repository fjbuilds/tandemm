import Link from "next/link";
import { ReactNode } from "react";
import { IconArrowRight } from "./Icons";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-primary border border-primary/20 hover:border-primary hover:bg-primary/5",
  ghost: "bg-transparent text-primary hover:bg-primary/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  type?: "button" | "submit";
}) {
  const classes = `group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && (
        <IconArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {content}
    </button>
  );
}
