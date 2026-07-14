import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/features", label: "Features", key: "features" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
  { href: "/system", label: "How it works", key: "system" },
  { href: "/about", label: "About", key: "about" },
] as const;

// Phone number placeholder until a real line is live.
const PHONE_DISPLAY = "020 0000 0000";

export function Nav({
  active,
}: {
  active:
    | "home"
    | "features"
    | "pricing"
    | "system"
    | "results"
    | "about"
    | "book"
    | "legal";
}) {
  return (
    <div className="sticky top-0 z-50 w-full p-4 font-[family-name:var(--font-body)]">
      <div className="mx-auto flex h-[60px] max-w-[1180px] items-center justify-between gap-4 rounded-[var(--radius-pill)] bg-[var(--color-primary)] py-0 pl-[26px] pr-3 shadow-[var(--shadow-2)]">
        <Link href="/" className="flex shrink-0 items-center no-underline">
          <img
            src="/brand/logo/tandemm-lockup-white.svg"
            alt="Tandemm"
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              aria-current={active === link.key ? "page" : undefined}
              className={cn(
                "rounded-[var(--radius-pill)] px-[15px] py-[9px] text-sm font-medium no-underline transition-colors duration-150 ease-out",
                active === link.key
                  ? "bg-white/[0.14] text-white"
                  : "bg-transparent text-white/70 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <span
            className="hidden items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-[9px] text-sm font-medium text-white/70 lg:inline-flex"
            aria-label="Phone number, placeholder"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.72 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.25-1.29a2 2 0 0 1 2.11-.45c.91.35 1.86.59 2.83.72A2 2 0 0 1 22 16.92z" />
            </svg>
            {PHONE_DISPLAY}
          </span>
          <Link
            href="/book"
            aria-current={active === "book" ? "page" : undefined}
            className="whitespace-nowrap rounded-[var(--radius-pill)] bg-white px-4 py-[11px] text-sm font-semibold text-[var(--color-primary)] no-underline sm:px-5"
          >
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
