import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  label,
  className,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-[var(--color-ink-muted)]">
        {label}
      </span>
      <input
        className={cn(
          "h-[42px] rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 text-[15px] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]",
          className,
        )}
        {...props}
      />
    </label>
  );
}
