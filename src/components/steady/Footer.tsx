import Link from "next/link";
import { Button } from "./Button";

const pageLinks = [
  { href: "/steady", label: "Home" },
  { href: "/steady/system", label: "The system" },
  { href: "/steady/results", label: "Results" },
  { href: "/steady/about", label: "About" },
  { href: "/steady/book", label: "Book a call" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary)] font-[family-name:var(--font-body)] text-[var(--color-on-primary)]">
      <div className="mx-auto max-w-[1160px] px-6 pb-10 pt-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.14] pb-14 sm:grid-cols-3 sm:items-start">
          <div className="min-w-[260px] sm:col-span-1">
            <div className="font-[family-name:var(--font-display)] text-[28px] font-extrabold tracking-[-0.01em]">
              Steady
            </div>
            <p className="my-4 max-w-[340px] text-[17px] leading-[1.5] text-white/70">
              We build websites that generate enquiries — then keep improving
              them until the numbers move.
            </p>
            <Button href="/steady/book" variant="secondary">
              Book a discovery call
            </Button>
          </div>

          <div>
            <div className="mb-[18px] text-xs font-bold uppercase tracking-[0.08em] text-white/50">
              Pages
            </div>
            <div className="flex flex-col gap-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-white/85 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-[18px] text-xs font-bold uppercase tracking-[0.08em] text-white/50">
              Get in touch
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@steady.com"
                className="text-[15px] text-white/85 no-underline"
              >
                hello@steady.com
              </a>
              <a
                href="tel:+447948091506"
                className="text-[15px] text-white/85 no-underline"
              >
                07948 091506
              </a>
              <span className="text-[15px] text-white/60">London, UK</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-7">
          <span className="text-[13px] text-white/50">
            &copy; 2026 Steady. A London growth studio.
          </span>
          <span className="text-[13px] text-white/50">
            Measured. Tracked. Improved.
          </span>
        </div>
      </div>
    </footer>
  );
}
