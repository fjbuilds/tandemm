"use client";

import { useEffect, useState, type ReactNode } from "react";

/* ─────────────────────────────────────────────────────────── */
/*  Partner logos                                              */
/*                                                             */
/*  Monochrome wordmarks for the tools we build on. These are  */
/*  platforms we genuinely use to run the system (ads, search, */
/*  messaging, automation). Kept subtle: a quiet "we're legit" */
/*  strip, not a sponsorship claim.                            */
/* ─────────────────────────────────────────────────────────── */

type Partner = { id: string; node: ReactNode };

const mark = "shrink-0";
const word =
  "font-[family-name:var(--font-display)] text-[17px] font-bold tracking-[-0.01em] whitespace-nowrap";

const PARTNERS: Partner[] = [
  {
    id: "google-ads",
    node: (
      <span className="flex items-center gap-2">
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M2.6 16.2 8.4 6.1a2.3 2.3 0 0 1 4 2.3L6.6 18.5a2.3 2.3 0 0 1-4-2.3Z" opacity="0.55" />
          <path d="M11.6 6.1 17.4 16.2a2.3 2.3 0 1 1-4 2.3L7.6 8.4a2.3 2.3 0 0 1 4-2.3Z" />
          <circle cx="5" cy="18.6" r="2.4" />
        </svg>
        <span className={word}>Google Ads</span>
      </span>
    ),
  },
  {
    id: "search-console",
    node: (
      <span className="flex items-center gap-2">
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5 21 21" strokeLinecap="round" />
        </svg>
        <span className={word}>Search Console</span>
      </span>
    ),
  },
  {
    id: "twilio",
    node: (
      <span className="flex items-center gap-2">
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 3.4a7.6 7.6 0 1 1 0 15.2 7.6 7.6 0 0 1 0-15.2Z" />
          <circle cx="9.2" cy="9.2" r="2" />
          <circle cx="14.8" cy="9.2" r="2" />
          <circle cx="9.2" cy="14.8" r="2" />
          <circle cx="14.8" cy="14.8" r="2" />
        </svg>
        <span className={word}>Twilio</span>
      </span>
    ),
  },
  {
    id: "whatsapp",
    node: (
      <span className="flex items-center gap-2">
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 5-1.3A10 10 0 1 0 12 2Zm5.3 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a11 11 0 0 1-4-2.5 8.6 8.6 0 0 1-1.8-2.5c-.2-.5 0-.9.2-1.1l.5-.6c.2-.2.2-.3.3-.6 0-.2 0-.4-.1-.6l-.7-1.7c-.2-.5-.4-.4-.6-.4H6.8c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.7c.2.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.6-.4Z" />
        </svg>
        <span className={word}>WhatsApp</span>
      </span>
    ),
  },
  {
    id: "zapier",
    node: (
      <span className="flex items-center gap-2">
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.4 12a5 5 0 0 1-.3 1.7c-.5.2-1.1.3-1.7.3h-.8a5 5 0 0 1-1.7-.3A5 5 0 0 1 9.6 12c0-.6.1-1.2.3-1.7.5-.2 1.1-.3 1.7-.3h.8c.6 0 1.2.1 1.7.3.2.5.3 1.1.3 1.7Zm7.4-1.8h-4.3l3-3-1.7-1.7-3 3V1.2h-2.4v4.3l-3-3-1.7 1.7 3 3H2.2v2.4h4.3l-3 3 1.7 1.7 3-3v4.3h2.4v-4.3l3 3 1.7-1.7-3-3h4.3Z" />
        </svg>
        <span className={word}>Zapier</span>
      </span>
    ),
  },
  {
    id: "meta",
    node: (
      <span className="flex items-center gap-2">
        <svg className={mark} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
          <path d="M2.5 15c1.4 2.6 3 3.4 4.3 3.4 1.9 0 3-1.6 4.2-4 1.2-2.4 2.2-4.7 3.6-4.7 1.2 0 2 1.1 2.9 3 1 2.2 1.4 3.6 3 3.6 1.1 0 1.8-1 1.8-2.9 0-3.2-1.9-6.9-5-6.9-1.9 0-3.3 1.5-4.6 3.9-1 1.9-2 4-3.4 4-1 0-1.8-1.1-2.6-2.7C7.4 10.8 6.4 8.7 5 8.7c-1.4 0-2.5 1.7-2.5 4.2 0 .8.1 1.5.3 2.1Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={word}>Meta</span>
      </span>
    ),
  },
];

const VISIBLE = 5;
const INTERVAL = 2600;

export function TrustPartners() {
  // One logo swaps at a time, cycling through the pool, so the strip
  // stays calm and just gently flows through the different partners.
  // Each slot holds { idx, swapped } — swapped slots fade on entry, while
  // the initial set renders fully visible so it never depends on the
  // animation running (e.g. background/throttled tabs).
  const [slots, setSlots] = useState(() =>
    Array.from({ length: VISIBLE }, (_, i) => ({ idx: i, swapped: false }))
  );

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let cursor = VISIBLE; // next partner to bring in
    let slot = 0; // slot to replace next

    const id = setInterval(() => {
      const bringIn = cursor;
      const target = slot;
      setSlots((prev) =>
        prev.map((s, i) =>
          i === target ? { idx: bringIn, swapped: true } : s
        )
      );
      cursor = (cursor + 1) % PARTNERS.length;
      slot = (slot + 1) % VISIBLE;
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-[1000px] text-center">
        <p className="mb-9 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
          Just so you know we&rsquo;re legit, we build on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 text-[var(--color-ink-muted)]">
          {slots.map((s, i) => {
            const partner = PARTNERS[s.idx];
            return (
              <div
                key={`slot-${i}`}
                className={i >= 3 ? "hidden opacity-70 sm:flex" : "flex opacity-70"}
              >
                {/* keyed by partner id so a swapped slot remounts and fades */}
                <span
                  key={partner.id}
                  className={
                    s.swapped
                      ? "trust-partner-fade inline-flex"
                      : "inline-flex"
                  }
                >
                  {partner.node}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
