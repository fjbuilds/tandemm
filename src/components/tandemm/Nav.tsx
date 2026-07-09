import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/system", label: "The system", key: "system" },
  { href: "/results", label: "Results", key: "results" },
  { href: "/about", label: "About", key: "about" },
] as const;

export function Nav({
  active,
}: {
  active: "home" | "system" | "results" | "about" | "book";
}) {
  return (
    <div className="w-full p-4 font-[family-name:var(--font-body)]">
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
          <a
            href="tel:+447948091506"
            className="hidden items-center gap-1.5 px-1.5 text-sm font-semibold text-white/80 no-underline lg:flex"
          >
            07948 091506
          </a>
          <Link
            href="/book"
            aria-current={active === "book" ? "page" : undefined}
            className="whitespace-nowrap rounded-[var(--radius-pill)] bg-white px-5 py-[11px] text-sm font-semibold text-[var(--color-primary)] no-underline"
          >
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
