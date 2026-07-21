import Link from "next/link";
import { Button } from "./Button";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/system", label: "How it works" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book a call" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary)] font-[family-name:var(--font-body)] text-[var(--color-on-primary)]">
      <div className="mx-auto max-w-[1160px] px-6 pb-10 pt-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.14] pb-14 sm:grid-cols-3 sm:items-start">
          <div className="min-w-[260px] sm:col-span-1">
            <img
              src="/brand/logo/tandemm-lockup-white.svg"
              alt="Tandemm"
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-[260px] font-[family-name:var(--font-display)] text-[17px] font-semibold leading-[1.3] text-white">
              Audit. Rebuild. Get&nbsp;found.
              <br />
              One place for every enquiry. Nothing&nbsp;missed.
            </p>
            <div className="mt-5">
              <Button href="/book" variant="secondary">
                Book a call
              </Button>
            </div>
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
                href="mailto:hello@tandemm.co.uk"
                className="text-[15px] text-white/85 no-underline"
              >
                hello@tandemm.co.uk
              </a>
              <span className="text-[15px] text-white/60">London, UK</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[13px] text-white/50">
              &copy; 2026 Tandemm. Growth for UK trade businesses.
            </span>
            <Link
              href="/privacy"
              className="text-[13px] text-white/50 no-underline hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] text-white/50 no-underline hover:text-white/80"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <span className="text-[13px] text-white/50">
            Ads. SEO. Site. Enquiry system. Missed-call capture.
          </span>
        </div>
      </div>
    </footer>
  );
}
