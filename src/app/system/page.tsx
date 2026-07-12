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

/* ── Data ─────────────────────────────────────────────────── */

const STAGES = [
  {
    num: 1,
    title: "Growth Audit",
    desc: "We look at your site, your rankings and your ads, then show you where the jobs are going missing. Free. No pitch.",
    badge: "Free",
    highlight: true,
  },
  {
    num: 2,
    title: "Growth Foundation",
    desc: "A site built for one job: turning homeowners into booked calls. Fast pages, plain messaging, real reviews above the fold.",
  },
  {
    num: 3,
    title: "Growth Engine",
    desc: "One team running the ads, the SEO and the site together. Live dashboard so you can see the money coming back.",
  },
];

const AUDIT_CHECKS = [
  "Where homeowners leave the site before they pick up the phone",
  "What your site says versus what a homeowner needs to hear before they call",
  "Whether the site loads fast enough on a phone in a driveway",
  "Where you rank on Google for the jobs homeowners actually search",
  "Which jobs came from ads, which came from Google, and which came from thin air",
];

const SCORECARD = [
  { label: "Conversion", score: 4 },
  { label: "Trust", score: 6 },
  { label: "Performance", score: 3 },
  { label: "Visibility", score: 5 },
  { label: "Tracking", score: 2 },
];

const AUDIT_STEPS = [
  {
    num: 1,
    title: "We look at your site",
    desc: "Before we speak, we go through your pages, speed, SEO and analytics by hand.",
  },
  {
    num: 2,
    title: "We score every area",
    desc: "Every check gets a score, so nothing comes down to opinion.",
  },
  {
    num: 3,
    title: "We walk you through it",
    desc: "A 30-minute call where we walk you through what we found, in plain English.",
  },
  {
    num: 4,
    title: "You get a one-page plan",
    desc: "The fixes that matter most, ranked by jobs won. Act on it with us or on your own.",
    dark: true,
  },
];

const PATHS = [
  {
    title: "Do it yourself",
    desc: "Take the audit and the plan. Get on with it. No strings, no follow-up calls.",
    icon: "📋",
  },
  {
    title: "We rebuild the site",
    desc: "A site built to turn homeowners into booked calls. Fixed price. Then it's yours.",
    icon: "🔧",
  },
  {
    title: "We run the lot",
    desc: "We run the ads. We run the SEO. We run the site. You get in the van and quote them.",
    icon: "📈",
  },
];

const WHY_CARDS = [
  {
    title: "Nothing is guessed",
    desc: "Every change comes from real numbers. Analytics, call tracking, rank data, benchmarks. No hunches.",
  },
  {
    title: "Nothing is wasted",
    desc: "We only work on what brings in booked jobs. No vanity redesigns, no filler blog posts nobody reads.",
  },
  {
    title: "Nothing stands still",
    desc: "Your site is reviewed and improved every month. That's how you push up the rankings and stay there.",
  },
];

/* ── Component ────────────────────────────────────────────── */

export default function SystemPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="system" />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative px-6 pb-10 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Most agencies open with a pitch.
              <br className="hidden sm:inline" /> We open with a look under the bonnet.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              The 80-point audit shows you exactly where your site loses
              jobs. Then, if you want us to, we fix it and keep it earning,
              month after month.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THREE-STAGE FRAMEWORK ─────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-20 pt-6">
        <Reveal>
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Dashed connector (desktop only) */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 hidden -translate-y-1/2 lg:block">
              <div className="mx-[80px] border-t-2 border-dashed border-[var(--color-hairline)]" />
            </div>

            {STAGES.map((s) => (
              <div
                key={s.num}
                className={`relative z-10 rounded-[var(--radius-xl)] border bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)] ${
                  s.highlight
                    ? "border-[var(--color-primary)]"
                    : "border-[var(--color-hairline)]"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[var(--color-on-primary)]">
                    {s.num}
                  </span>
                  {s.badge && (
                    <span className="rounded-[var(--radius-pill)] bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-[var(--color-ink-muted)]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-8 text-center text-sm text-[var(--color-ink-muted)]">
            Most clients go through all three. You decide how far, and when.
            No long contracts. One month's notice.
          </p>
        </Reveal>
      </section>

      {/* ── GROWTH AUDIT CENTREPIECE ──────────────────────── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <Reveal>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white/70 px-3.5 py-[7px] text-[13px] font-semibold tracking-[0.02em] text-[var(--color-ink-muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Free, no obligation
              </div>
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Where is your site costing you jobs?
              </h2>
              <ul className="mb-8 flex flex-col gap-3.5">
                {AUDIT_CHECKS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55]">
                    <span className="mt-0.5 font-bold text-[var(--color-accent-hover)]">
                      ✓
                    </span>
                    <span className="text-[var(--color-ink)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/book">Get your free audit</Button>
            </div>
          </Reveal>

          {/* Right column — Scorecard visual */}
          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-2)]">
              <div className="mb-1 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                Website Scorecard
              </div>
              <div className="mb-6 text-sm text-[var(--color-ink-faint)]">
                Example audit result
              </div>

              {/* Score circle */}
              <div className="mb-8 flex justify-center">
                <div className="relative h-[140px] w-[140px]">
                  <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
                    <circle
                      cx="70"
                      cy="70"
                      r="58"
                      fill="none"
                      stroke="var(--color-hairline)"
                      strokeWidth="10"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r="58"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${(50 / 100) * 2 * Math.PI * 58} ${2 * Math.PI * 58}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-[family-name:var(--font-display)] text-[36px] font-extrabold leading-none">
                      50
                    </span>
                    <span className="text-xs text-[var(--color-ink-faint)]">
                      / 100
                    </span>
                  </div>
                </div>
              </div>

              {/* Category bars */}
              <div className="flex flex-col gap-4">
                {SCORECARD.map((cat) => (
                  <div key={cat.label}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--color-ink)]">
                        {cat.label}
                      </span>
                      <span className="text-sm font-semibold text-[var(--color-ink-muted)]">
                        {cat.score}/10
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-hairline)]">
                      <div
                        className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-500"
                        style={{ width: `${cat.score * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── AUDIT PROCESS ─────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <Reveal className="mb-12 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            How the audit works
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Dashed connector (desktop only) */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 hidden -translate-y-1/2 lg:block">
              <div className="mx-[60px] border-t-2 border-dashed border-[var(--color-hairline)]" />
            </div>

            {AUDIT_STEPS.map((s) => (
              <div
                key={s.num}
                className={`relative z-10 rounded-[var(--radius-xl)] border p-7 shadow-[var(--shadow-1)] ${
                  s.dark
                    ? "border-transparent bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "border-[var(--color-hairline)] bg-[var(--color-surface)]"
                }`}
              >
                <span
                  className={`mb-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    s.dark
                      ? "bg-white/20 text-white"
                      : "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                  }`}
                >
                  {s.num}
                </span>
                <h3
                  className={`mb-2 font-[family-name:var(--font-display)] text-lg font-bold ${
                    s.dark ? "" : ""
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-[15px] leading-[1.55] ${
                    s.dark ? "text-white/70" : "text-[var(--color-ink-muted)]"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── THREE PATHS ───────────────────────────────────── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Three ways forward
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PATHS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="mb-4 text-3xl">{p.icon}</div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY IT WORKS ──────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <Reveal className="mb-12 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Built on what the numbers say.
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHY_CARDS.map((c) => (
              <div
                key={c.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]"
              >
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                  {c.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-[var(--color-ink-muted)]">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-20">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] sm:px-14">
            <h2 className="mx-auto max-w-[640px] font-[family-name:var(--font-display)] text-[clamp(24px,3.6vw,36px)] font-bold leading-[1.15] tracking-[-0.02em]">
              See where your site is costing you jobs. Free.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get the 80-point audit
              </Button>
              <a
                href="mailto:hello@tandemm.co.uk"
                className="inline-flex h-[42px] items-center gap-2 rounded-[var(--radius-pill)] border border-white/25 bg-white/10 px-5 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-white/20"
              >
                Email hello@tandemm.co.uk
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
