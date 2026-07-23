"use client";

import { useEffect, useState, type ReactNode } from "react";

/* ─────────────────────────────────────────────────────────── */
/*  Partner logos                                              */
/*                                                             */
/*  Real brand marks for the tools we actually build on. Kept  */
/*  compact and monochrome-tinted on hover so the strip reads  */
/*  as a quiet "we're legit" band, not a sponsorship claim.    */
/* ─────────────────────────────────────────────────────────── */

type Partner = { id: string; node: ReactNode };

const word =
  "font-[family-name:var(--font-display)] text-[16px] font-bold tracking-[-0.01em] whitespace-nowrap text-[var(--color-ink)]";
const row = "flex items-center gap-2";
const mark = "shrink-0";

const PARTNERS: Partner[] = [
  {
    id: "google-ads",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 192 192" aria-hidden="true">
          <path fill="#FBBC04" d="M74.8 8.3 8.3 123.5a26.6 26.6 0 0 0 9.7 36.3l1 .5a26.6 26.6 0 0 0 36.3-9.8L121.8 35.4A26.6 26.6 0 0 0 112.1 -1a26.6 26.6 0 0 0-37.3 9.3Z"/>
          <path fill="#4285F4" d="M117.2 8.3 183.7 123.5a26.6 26.6 0 0 1-9.7 36.3l-1 .5a26.6 26.6 0 0 1-36.3-9.8L70.2 35.4A26.6 26.6 0 0 1 79.9 -1a26.6 26.6 0 0 1 37.3 9.3Z"/>
          <circle fill="#34A853" cx="35" cy="156" r="26.6"/>
        </svg>
        <span className={word}>Google Ads</span>
      </span>
    ),
  },
  {
    id: "meta-ads",
    node: (
      <span className={row}>
        <svg className={mark} width="24" height="16" viewBox="0 0 36 24" aria-hidden="true">
          <defs>
            <linearGradient id="meta-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0064E1"/>
              <stop offset="50%" stopColor="#0082FB"/>
              <stop offset="100%" stopColor="#00C6FF"/>
            </linearGradient>
          </defs>
          <path fill="url(#meta-g)" d="M4 12c0-4.4 2.5-8 6.5-8 3 0 5 2 7.4 5.8L21 14.3c2 3.2 3.2 4 4.7 4 1.8 0 3-1.5 3-4.1 0-3.4-2-6.5-4.6-6.5-1.4 0-2.5.6-3.6 1.8l-2-3.2C20.4 4.6 22.6 3 25.5 3 30.7 3 34 8 34 14c0 5.7-2.7 9-6.5 9-2.8 0-4.6-1-6.7-4.4l-2.9-4.7C16 11 15 10 13.5 10c-2 0-3.6 2-3.6 5.2 0 2 .7 3.3 1.8 3.3.8 0 1.5-.4 2.4-1.5l1.5 3.2c-1.3 1.6-2.9 2.6-4.7 2.6C6.4 22.8 4 18.6 4 12Z"/>
        </svg>
        <span className={word}>Meta Ads</span>
      </span>
    ),
  },
  {
    id: "whatsapp",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#25D366" d="M.05 24 1.75 17.83A11.87 11.87 0 0 1 .16 11.9C.17 5.35 5.51.02 12.05.02c3.17 0 6.15 1.23 8.39 3.47a11.8 11.8 0 0 1 3.47 8.4c0 6.55-5.34 11.88-11.88 11.88a11.9 11.9 0 0 1-5.68-1.45L.05 24Z"/>
          <path fill="#FFF" d="M9.06 6.9c-.22-.5-.46-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.05 3.29 5.09 4.48 2.52.99 3.03.79 3.58.74.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.67-2.06c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.65-1.61-.91-2.2Z"/>
        </svg>
        <span className={word}>WhatsApp</span>
      </span>
    ),
  },
  {
    id: "twilio",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#F22F46" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"/>
          <circle fill="#F22F46" cx="9.2" cy="9.2" r="1.9"/>
          <circle fill="#F22F46" cx="14.8" cy="9.2" r="1.9"/>
          <circle fill="#F22F46" cx="9.2" cy="14.8" r="1.9"/>
          <circle fill="#F22F46" cx="14.8" cy="14.8" r="1.9"/>
        </svg>
        <span className={word}>Twilio</span>
      </span>
    ),
  },
  {
    id: "zapier",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#FF4F00" d="M14.4 12a5 5 0 0 1-.3 1.7c-.5.2-1.1.3-1.7.3h-.8a5 5 0 0 1-1.7-.3A5 5 0 0 1 9.6 12c0-.6.1-1.2.3-1.7.5-.2 1.1-.3 1.7-.3h.8c.6 0 1.2.1 1.7.3.2.5.3 1.1.3 1.7Zm7.4-1.8h-4.3l3-3-1.7-1.7-3 3V1.2h-2.4v4.3l-3-3-1.7 1.7 3 3H2.2v2.4h4.3l-3 3 1.7 1.7 3-3v4.3h2.4v-4.3l3 3 1.7-1.7-3-3h4.3Z"/>
        </svg>
        <span className={word}>Zapier</span>
      </span>
    ),
  },
  {
    id: "search-console",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M3.7 12.6a8.9 8.9 0 1 1 4.8 5l-1.8 3.1a12.3 12.3 0 1 0-6.5-6.9l3.5-1.2Z"/>
          <circle fill="#34A853" cx="12.5" cy="12" r="3.6"/>
          <path fill="#EA4335" d="M14.2 15.1 20 21l1.6-1.6-5.7-5.8-1.7 1.5Z"/>
        </svg>
        <span className={word}>Search Console</span>
      </span>
    ),
  },
  {
    id: "canva",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="canva-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00C4CC"/>
              <stop offset="50%" stopColor="#7D2AE7"/>
              <stop offset="100%" stopColor="#00A79D"/>
            </linearGradient>
          </defs>
          <circle fill="url(#canva-g)" cx="12" cy="12" r="11"/>
          <path fill="#FFF" d="M12.6 7.2c-2.7 0-4.7 2.6-4.7 5.2 0 2 1.2 3.5 3.1 3.5 2.7 0 4.6-2.6 4.6-5.1 0-2.1-1.2-3.6-3-3.6Zm-.2 5.6c-.5 1.2-1.4 2.1-2.2 2.1-.7 0-1-.6-1-1.5 0-1.6 1.1-4.9 2.9-4.9.8 0 1.1.6 1.1 1.4 0 .8-.3 1.9-.8 2.9Z"/>
        </svg>
        <span className={word}>Canva</span>
      </span>
    ),
  },
  {
    id: "chatgpt",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#10A37F" d="M22.3 9.8a5.9 5.9 0 0 0-.5-4.9 6 6 0 0 0-6.5-2.9A6 6 0 0 0 10.7.4a6 6 0 0 0-5.7 4.1 6 6 0 0 0-4 2.9 6 6 0 0 0 .7 7 6 6 0 0 0 .5 4.9 6 6 0 0 0 6.5 2.9 6 6 0 0 0 4.5 2 6 6 0 0 0 5.7-4.1 6 6 0 0 0 4-2.9 6 6 0 0 0-.7-7Zm-9 12.6a4.4 4.4 0 0 1-2.9-1l.1-.1 4.9-2.8a.8.8 0 0 0 .4-.7v-6.9l2 1.2v5.7a4.5 4.5 0 0 1-4.5 4.6Zm-9.6-4.1a4.4 4.4 0 0 1-.5-3l.1.1 4.9 2.8a.8.8 0 0 0 .8 0l6-3.5v2.3a.1.1 0 0 1 0 .1l-5 2.9a4.5 4.5 0 0 1-6.3-1.7Zm-1.3-10.4a4.5 4.5 0 0 1 2.3-2v5.8a.8.8 0 0 0 .4.7l6 3.4-2 1.2-5-2.9a4.5 4.5 0 0 1-1.7-6.2Zm17 4 -6-3.5 2-1.1 5 2.9a4.5 4.5 0 0 1-.7 8.1v-5.8a.8.8 0 0 0-.4-.7ZM20.4 8l-.1-.1-4.9-2.9a.8.8 0 0 0-.8 0L8.5 8.6V6.3a.1.1 0 0 1 0-.1l5-2.9a4.5 4.5 0 0 1 6.9 4.7ZM7.5 11.5l-2-1.2V4.6a4.5 4.5 0 0 1 7.4-3.5l-.1.1L7.9 4a.8.8 0 0 0-.4.7Zm1.1-2.4L11.2 7.6l2.7 1.5v3.1L11.2 13.7 8.6 12.2Z"/>
        </svg>
        <span className={word}>ChatGPT</span>
      </span>
    ),
  },
  {
    id: "google-analytics",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <rect fill="#F9AB00" x="15.5" y="2" width="6" height="20" rx="3"/>
          <rect fill="#E37400" x="8.5" y="9" width="6" height="13" rx="3"/>
          <circle fill="#E37400" cx="4.5" cy="19" r="2.7"/>
        </svg>
        <span className={word}>Analytics</span>
      </span>
    ),
  },
  {
    id: "stripe",
    node: (
      <span className={row}>
        <svg className={mark} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#635BFF" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm.7 16.6c-1.9 0-3.5-.7-4.6-1.3v-2.9c1 .6 2.6 1.4 4.6 1.4 1.1 0 1.7-.4 1.7-1 0-1.7-6.4-1-6.4-5 0-1.9 1.4-3.4 4.4-3.4 1.5 0 3 .4 4 .9v2.9c-1-.6-2.4-1-3.9-1-1 0-1.6.3-1.6.9 0 1.6 6.4.9 6.4 4.9 0 2.2-1.6 3.6-4.6 3.6Z"/>
        </svg>
        <span className={word}>Stripe</span>
      </span>
    ),
  },
];

const VISIBLE = 5;
const HOLD_MS = 4200;
const FADE_MS = 620;

export function TrustPartners() {
  // Show 5 at a time. Every HOLD_MS, the whole row fades out, we swap in
  // the next 5, then fade in. A single group animation avoids the earlier
  // per-slot swap drift and the intermittently invisible strip.
  const [page, setPage] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let cancelled = false;
    let outTimer: number | undefined;
    let holdTimer: number | undefined;

    const tick = () => {
      if (cancelled) return;
      setPhase("out");
      outTimer = window.setTimeout(() => {
        if (cancelled) return;
        setPage((p) => (p + 1) % Math.ceil(PARTNERS.length / VISIBLE));
        setPhase("in");
        holdTimer = window.setTimeout(tick, HOLD_MS);
      }, FADE_MS);
    };

    holdTimer = window.setTimeout(tick, HOLD_MS);
    return () => {
      cancelled = true;
      if (outTimer) clearTimeout(outTimer);
      if (holdTimer) clearTimeout(holdTimer);
    };
  }, []);

  const start = page * VISIBLE;
  const visible = Array.from({ length: VISIBLE }, (_, i) => PARTNERS[(start + i) % PARTNERS.length]);
  const shown = phase === "in";

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-[1000px] text-center">
        <p className="mb-9 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
          Just so you know we&rsquo;re legit, we build on
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(-6px)",
            transition: `opacity ${FADE_MS}ms ease-out, transform ${FADE_MS}ms ease-out`,
          }}
        >
          {visible.map((partner, i) => (
            <div
              key={`${page}-${partner.id}`}
              className={i >= 3 ? "hidden sm:flex" : "flex"}
            >
              {partner.node}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
