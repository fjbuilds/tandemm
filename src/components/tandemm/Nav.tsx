"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/local-search", label: "Tandemm Local", key: "features" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
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
          <a
            href="https://wa.me/447000000000"
            aria-label="WhatsApp Tandemm"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.5.7 4.9 2 7L3 29l6.6-2.3c2 1.1 4.2 1.6 6.4 1.6 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm5.9 14.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.5-1-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.8-1-2.5-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5z" />
            </svg>
          </a>
          <Link
            href="/book"
            aria-current={active === "book" ? "page" : undefined}
            className="whitespace-nowrap rounded-[var(--radius-pill)] bg-white px-4 py-[11px] text-sm font-semibold text-[var(--color-primary)] no-underline sm:px-5"
          >
            Check availability
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
