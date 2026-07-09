import { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Select({
  label,
  options,
  className,
  ...props
}: {
  label: string;
  options: { value: string; label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-[var(--color-ink-muted)]">
        {label}
      </span>
      <select
        className={cn(
          "h-[42px] rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 text-[15px] text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]",
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
