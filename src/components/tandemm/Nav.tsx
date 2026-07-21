"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/features", label: "Features", key: "features" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
  { href: "/system", label: "How it works", key: "system" },
  { href: "/about", label: "About", key: "about" },
] as const;

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
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link
            href="/book"
            aria-current={active === "book" ? "page" : undefined}
            className="whitespace-nowrap rounded-[var(--radius-pill)] bg-white px-4 py-[11px] text-sm font-semibold text-[var(--color-primary)] no-underline sm:px-5"
          >
            Get my audit
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1180px] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-primary)] shadow-[var(--shadow-2)] md:hidden">
          <nav className="flex flex-col gap-1 p-3">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active === link.key ? "page" : undefined}
                className={cn(
                  "rounded-[var(--radius-lg)] px-4 py-3 text-[15px] font-medium no-underline transition-colors",
                  active === link.key
                    ? "bg-white/[0.14] text-white"
                    : "text-white/80 hover:bg-white/[0.08] hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-[var(--radius-pill)] bg-white px-4 py-3 text-center text-[15px] font-semibold text-[var(--color-primary)] no-underline"
            >
              Get my audit
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
