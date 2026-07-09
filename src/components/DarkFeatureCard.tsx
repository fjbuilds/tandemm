import { ReactNode } from "react";
import { IconPlus } from "./Icons";

export function DarkFeatureCard({
  icon,
  title,
  description,
  featured = false,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex h-full flex-col justify-between rounded-2xl border border-border bg-card transition-colors duration-200 ease-out hover:border-primary/40 ${
        featured ? "p-8" : "p-6"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div
            className={`flex shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ${
              featured ? "h-14 w-14" : "h-11 w-11"
            }`}
          >
            {icon}
          </div>
          <IconPlus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out group-hover:rotate-90 group-hover:text-primary" />
        </div>
        <h3
          className={`mt-5 font-semibold text-card-foreground ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 leading-6 text-muted-foreground ${
            featured ? "max-w-md text-base" : "text-sm"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
