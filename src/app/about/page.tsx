"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const PRINCIPLES = [
  {
    n: 1,
    title: "Understand first",
    body: "Before we build a page or run an ad, we learn how homeowners in your area search and what makes them pick one trade business over another. Guesswork is what most agencies charge for.",
  },
  {
    n: 2,
    title: "Build to convert",
    body: "Fast, clear, honest. Every page has one job: turn a homeowner into an enquiry. No filler, no stock hero shots, no clever animations getting in the way.",
  },
  {
    n: 3,
    title: "Keep improving",
    body: "Launch is day one, not the finish line. We tune ads weekly, add landing pages each quarter, and push you up Google month after month. That is how a site becomes a long-term asset instead of a one-off cost.",
  },
];

const STANDARDS = [
  {
    n: "01",
    title: "Look before we sell",
    body: "No pitch until we have properly gone through your site, your rankings and your ads. If we cannot help, we say so on the call.",
  },
  {
    n: "02",
    title: "Talk straight",
    body: "No jargon walls, no inflated promises. If a channel will not pay back for your area or budget, we tell you before you spend a penny.",
  },
  {
    n: "03",
    title: "Show the numbers",
    body: "If it is not in the dashboard, we have not done the job. Every call, every form, every booked job, tied back to the ad or keyword that brought it in.",
  },
  {
    n: "04",
    title: "Stay after launch",
    body: "A site that stands still loses ground. We keep tuning it, adding pages, and earning links, so you stay at the top of Google month after month.",
  },
];

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="about" />

      {/* ── HERO ── */}
      <section className="px-6 pb-16 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              One team behind your website, your ads and every enquiry that comes in.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── PHILOSOPHY: converging into one flow ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-8 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              How we think about growth
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.12] tracking-[-0.02em]">
              One system, not six suppliers.
            </h2>
            <p className="mx-auto max-w-[640px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Our job is to be the layer that catches every enquiry that would
              otherwise slip. Site, ads, SEO, phone, forms and WhatsApp all
              converging into one flow.
            </p>
          </Reveal>

          <Reveal>
            <ConvergenceVisual />
          </Reveal>
        </div>
      </section>

      {/* ── THREE PRINCIPLES ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              How we work
            </div>
            <h2 className="max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
              Three rules we don&rsquo;t break.
            </h2>
            <p className="mt-3 max-w-[520px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Every decision runs through these three. If a job breaks one,
              we don&rsquo;t take it.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-12">
            {PRINCIPLES.map((p) => (
              <Reveal key={p.n}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-t border-[var(--color-hairline)] py-7 first:border-t-0 first:pt-0 sm:gap-x-8 sm:py-9">
                  <span className="font-[family-name:var(--font-display)] text-[clamp(38px,9vw,64px)] font-extrabold leading-[0.8] tracking-[-0.03em] text-[var(--color-accent)]/25">
                    {String(p.n).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-[19px] font-bold sm:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="max-w-[520px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)] sm:text-[15.5px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE THINK ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What you get from us, every time.
            </h2>
            <p className="mx-auto mb-12 max-w-[520px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Not slogans. These are how we actually work, on every account.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {STANDARDS.map((s) => (
              <Reveal key={s.n}>
                <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-7 py-7">
                  <div className="mb-3 text-sm font-bold text-[var(--color-accent-hover)]">
                    {s.n}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[18px] font-bold">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
              <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Before you change anything, see what is actually costing you jobs.
              </h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="/book"
                  variant="secondary"
                  className="border-white/25 bg-white text-[var(--color-primary)] hover:bg-white/90"
                >
                  Book a call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ── Converging-flow visual ─────────────────────────────── */

function ConvergenceVisual() {
  const incoming = [
    {
      source: "Missed call",
      snippet: "Rang while you were under a floor",
      time: "7:48pm",
      tone: "accent" as const,
      live: true,
    },
    {
      source: "WhatsApp",
      snippet: "Consumer unit tripping, no power upstairs",
      time: "7:49pm",
      tone: "success" as const,
    },
    {
      source: "Web form",
      snippet: "Full rewire quote, 3-bed semi",
      time: "6:12pm",
      tone: "primary" as const,
    },
    {
      source: "Google LSA",
      snippet: "EV charger install, SK4",
      time: "5:30pm",
      tone: "primary" as const,
    },
  ];

  const outcomes = [
    { value: "24", label: "Leads caught this month" },
    { value: "14", label: "Turned into booked jobs" },
    { value: "0", label: "Missed and lost" },
  ];

  const dotClass = (tone: "accent" | "success" | "primary") =>
    tone === "accent"
      ? "bg-[var(--color-accent)]"
      : tone === "success"
        ? "bg-[var(--color-success)]"
        : "bg-[var(--color-primary)]";

  return (
    <div className="convergence mx-auto max-w-[980px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-1)] sm:p-8">
      <style>{`
        .convergence .live-dot { position: relative; }
        .convergence .live-dot::after {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 9999px;
          border: 2px solid var(--color-accent);
          animation: conv-ping 2.2s ease-out infinite;
        }
        @keyframes conv-ping {
          0%   { transform: scale(0.7); opacity: 0.7; }
          70%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .convergence .drift { animation: conv-drift 3.4s ease-in-out infinite; }
        @keyframes conv-drift {
          0%, 100% { opacity: 0.35; transform: translateX(0); }
          50%      { opacity: 1; transform: translateX(3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .convergence .live-dot::after,
          .convergence .drift { animation: none; }
        }
      `}</style>

      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="live-dot flex h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
            Every enquiry, one place
          </span>
        </div>
        <span className="rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
          Today
        </span>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.1fr_auto_0.95fr]">
        {/* Coming in */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] p-4 sm:p-5">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-faint)]">
            Coming in
          </div>
          <div className="flex flex-col gap-2.5">
            {incoming.map((e) => (
              <div
                key={e.source}
                className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] px-3.5 py-3"
              >
                <span
                  className={`mt-[5px] h-2 w-2 shrink-0 rounded-full ${dotClass(e.tone)} ${e.live ? "live-dot" : ""}`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-bold text-[var(--color-ink)]">
                      {e.source}
                    </span>
                    <span className="shrink-0 text-[11px] text-[var(--color-ink-faint)]">
                      {e.time}
                    </span>
                  </div>
                  <div className="mt-0.5 truncate text-[12.5px] leading-[1.4] text-[var(--color-ink-muted)]">
                    {e.snippet}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merge */}
        <div className="flex flex-row items-center justify-center gap-3 lg:flex-col">
          <span className="drift text-[var(--color-accent)] lg:rotate-0">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 lg:rotate-0" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
          <div className="flex flex-col items-center rounded-[var(--radius-lg)] bg-[var(--color-primary)] px-5 py-4 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-1)]">
            <span className="font-[family-name:var(--font-display)] text-[15px] font-extrabold">
              One system
            </span>
            <span className="mt-1 text-[11px] leading-[1.35] text-white/70">
              Caught · Chased ·<br />Answered
            </span>
          </div>
          <span className="drift text-[var(--color-accent)]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 lg:rotate-0" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        {/* What you get */}
        <div className="flex flex-col justify-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] p-4 sm:p-5">
          <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-faint)]">
            What you get
          </div>
          {outcomes.map((o) => (
            <div
              key={o.label}
              className="flex items-center gap-3.5 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] px-4 py-3"
            >
              <span className="font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none text-[var(--color-accent-hover)]">
                {o.value}
              </span>
              <span className="text-[13px] leading-[1.35] text-[var(--color-ink-muted)]">
                {o.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-center text-[12px] text-[var(--color-ink-faint)]">
        Illustrative. Every source lands in one dashboard, triaged and
        chased, so nothing slips.
      </p>
    </div>
  );
}
