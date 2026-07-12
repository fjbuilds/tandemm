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

/* ─── Data ──────────────────────────────────────────────────────── */

const KPI_CARDS = [
  { label: "Enquiries", value: "▲ 240%", desc: "Average lift across clients in the first 6 months" },
  { label: "Conversion rate", value: "▲ 3.4x", desc: "From visitor to booked job, tracked call to call" },
  { label: "Page speed", value: "▼ 84%", desc: "Faster load on mobile, so people don't bounce" },
  { label: "Tracking", value: "Full", desc: "Every call and form tied back to the ad or keyword" },
  { label: "Search visibility", value: "▲", desc: "Higher rankings on the searches homeowners actually run" },
  {
    label: "Wasted ad spend",
    value: "▼ 41%",
    desc: "Budget moved off dead clicks and onto keywords that book jobs",
    navy: true,
  },
] as Array<{ label: string; value: string; desc: string; navy?: boolean }>;

const CASE_STUDIES = [
  {
    name: "Fenwick Roofing",
    industry: "Roofing contractor, South London",
    stats: ["+186% enquiries", "2.1 → 5.4% conversion"],
  },
  {
    name: "Aldgate Legal",
    industry: "Boutique law firm, City of London",
    stats: ["+140% enquiries", "−54% bounce rate"],
  },
  {
    name: "Northside Electrical",
    industry: "Domestic electrician, North London",
    stats: ["+264% enquiries", "4.6x ROI on ad spend"],
  },
];

const SYSTEM_STEPS = [
  { n: 1, title: "Traffic", desc: "Bring in high-intent homeowners: Google Ads, local SEO, referrals." },
  { n: 2, title: "Website", desc: "Fast, clear pages built to convert visitors into real customers." },
  { n: 3, title: "Tracking", desc: "Every call and form tied back to the ad, keyword or page that earned it." },
  { n: 4, title: "Optimisation", desc: "Cut what's not paying back, double down on what is. Every week." },
  { n: 5, title: "Compounding", desc: "Rankings climb, cost per lead drops, the site earns more each month.", navy: true },
] as Array<{ n: number; title: string; desc: string; navy?: boolean }>;

const BEFORE_ITEMS = [
  "6.2s page load",
  "No call tracking",
  "Generic template copy",
];

const DIAGNOSIS_ITEMS = [
  "73% of mobile visitors bounced",
  "Call button hidden below the fold",
  "No way to tell which ads paid back",
];

const CHANGES_ITEMS = [
  "Rebuilt the site, fast and mobile-first",
  "Rewrote every service page to match local search",
  "Wired in call, form and Google Ads tracking",
  "Restructured Google Ads onto keywords that book jobs",
];

/* ─── Component ─────────────────────────────────────────────────── */

export default function ResultsPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="results" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative px-6 pb-8 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Real numbers. From real UK trades.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Not vanity metrics. Booked jobs and tracked calls from trades
              we&apos;ve worked with month after month.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Enquiry Performance Dashboard */}
      <section className="mx-auto max-w-[900px] px-6 pb-6 pt-4">
        <Reveal>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-2)] sm:p-8">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  Enquiry Performance
                </div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-display)] text-[36px] font-extrabold leading-none tracking-tight">
                    318
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-accent-hover)]">
                    ▲ 240%
                  </span>
                </div>
                <div className="mt-0.5 text-sm text-[var(--color-ink-muted)]">
                  enquiries in 6 months
                </div>
              </div>
              <div className="flex gap-3 text-xs font-semibold text-[var(--color-ink-muted)]">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  This period
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-hairline)]" />
                  Previous
                </span>
              </div>
            </div>

            {/* SVG line chart */}
            <svg
              viewBox="0 0 640 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-6 w-full"
            >
              {/* grid lines */}
              {[0, 40, 80, 120].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="640"
                  y2={y}
                  stroke="var(--color-hairline)"
                  strokeWidth="1"
                />
              ))}
              {/* previous period */}
              <polyline
                points="0,120 106,115 213,118 320,112 426,110 533,108 640,106"
                stroke="var(--color-hairline)"
                strokeWidth="2"
                fill="none"
              />
              {/* current period */}
              <polyline
                points="0,130 106,105 213,85 320,60 426,38 533,22 640,10"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                fill="none"
              />
              <polygon
                points="0,130 106,105 213,85 320,60 426,38 533,22 640,10 640,160 0,160"
                fill="var(--color-primary)"
                opacity="0.06"
              />
            </svg>

            {/* Source breakdown bars */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Google Ads", pct: 64 },
                { label: "Organic Search", pct: 26 },
                { label: "Direct / Referral", pct: 10 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-semibold text-[var(--color-ink)]">{s.label}</span>
                    <span className="font-semibold text-[var(--color-ink-muted)]">{s.pct}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[var(--color-surface-sunken)]">
                    <div
                      className="h-2 rounded-full bg-[var(--color-primary)]"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-4 text-center text-[13px] leading-[1.5] text-[var(--color-ink-faint)]">
            The live dashboard every Tandemm client sees. Figures shown are a
            composite of real accounts.
          </p>
        </Reveal>
      </section>

      {/* ── KPI OVERVIEW ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-8 pt-20">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            What actually shifts, month one to month six.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KPI_CARDS.map((card) => (
            <Reveal key={card.label}>
              <div
                className={`rounded-[var(--radius-xl)] border p-7 transition-transform duration-200 hover:-translate-y-1 ${
                  card.navy
                    ? "border-transparent bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[var(--shadow-2)]"
                    : "border-[var(--color-hairline)] bg-[var(--color-surface)]"
                }`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-[0.05em] ${
                    card.navy ? "text-white/55" : "text-[var(--color-ink-muted)]"
                  }`}
                >
                  {card.label}
                </div>
                <div
                  className={`mt-2 font-[family-name:var(--font-display)] text-[32px] font-extrabold leading-none tracking-tight ${
                    card.navy ? "text-white" : ""
                  }`}
                >
                  {card.value}
                </div>
                <div
                  className={`mt-2 text-sm leading-[1.5] ${
                    card.navy ? "text-white/70" : "text-[var(--color-ink-muted)]"
                  }`}
                >
                  {card.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-6 max-w-[600px] text-center text-[13px] leading-[1.5] text-[var(--color-ink-faint)]">
            Averages across active clients. Your numbers will depend on trade,
            area and starting point.
          </p>
        </Reveal>
      </section>

      {/* ── CASE STUDY: MARLOW & CO ──────────────────────────── */}
      <section className="mt-16 bg-[var(--color-canvas-deep)] py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <Reveal className="mb-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white/70 px-3.5 py-[7px] text-[13px] font-semibold tracking-[0.02em] text-[var(--color-ink-muted)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Case study
            </div>
          </Reveal>
          <Reveal className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Marlow &amp; Co Plumbing
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[17px] leading-[1.55] text-[var(--color-ink-muted)]">
              From 9 enquiries a month to 37 booked jobs in 12 weeks.
            </p>
          </Reveal>

          {/* Journey grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Before */}
            <Reveal>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  Before
                </div>
                <div className="mt-2 font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none">
                  9
                </div>
                <div className="mt-1 text-sm text-[var(--color-ink-muted)]">
                  enquiries / month
                </div>
                {/* Mini wireframe */}
                <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-sunken)] p-3">
                  <div className="mb-2 h-2 w-3/5 rounded bg-[var(--color-hairline)]" />
                  <div className="mb-1.5 h-1.5 w-full rounded bg-[var(--color-hairline-soft)]" />
                  <div className="mb-1.5 h-1.5 w-4/5 rounded bg-[var(--color-hairline-soft)]" />
                  <div className="h-1.5 w-2/3 rounded bg-[var(--color-hairline-soft)]" />
                </div>
              </div>
            </Reveal>

            {/* Diagnosis */}
            <Reveal>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  Diagnosis
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {DIAGNOSIS_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-[1.45]"
                    >
                      <span className="mt-0.5 text-base font-bold text-red-500">!</span>
                      <span className="text-[var(--color-ink)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Changes */}
            <Reveal>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  Changes
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {CHANGES_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-[1.45]"
                    >
                      <span className="mt-0.5 font-bold text-[var(--color-accent-hover)]">→</span>
                      <span className="text-[var(--color-ink)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* After (navy card) */}
            <Reveal>
              <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-6 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-white/55">
                  After
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[28px] font-extrabold leading-none">
                      37
                    </div>
                    <div className="mt-1 text-sm text-white/70">enquiries / month</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[22px] font-extrabold leading-none">
                      4.3%
                    </div>
                    <div className="mt-1 text-sm text-white/70">conversion rate</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[22px] font-extrabold leading-none">
                      1.1s
                    </div>
                    <div className="mt-1 text-sm text-white/70">page load</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Testimonial */}
          <Reveal className="mt-8">
            <div className="mx-auto max-w-[700px] rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
              <p className="text-[17px] leading-[1.6] text-[var(--color-ink)]">
                &ldquo;We used to just cross our fingers with marketing. Now
                the phone rings more, and I can tell you which ad brought each
                job in.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] font-[family-name:var(--font-display)] text-sm font-bold text-white">
                  DM
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-ink)]">
                    David Marlow
                  </div>
                  <div className="text-sm text-[var(--color-ink-muted)]">
                    Marlow &amp; Co Plumbing
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MORE CASE STUDIES ─────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-8 pt-20">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Different trades. Same pattern.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <Reveal key={cs.name}>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 transition-transform duration-200 hover:-translate-y-1">
                <div className="font-[family-name:var(--font-display)] text-lg font-bold">
                  {cs.name}
                </div>
                <div className="mt-1 text-sm text-[var(--color-ink-muted)]">
                  {cs.industry}
                </div>
                <div className="my-5 h-px bg-[var(--color-hairline)]" />
                <div className="flex flex-col gap-2">
                  {cs.stats.map((stat) => (
                    <div
                      key={stat}
                      className="text-[15px] font-semibold text-[var(--color-ink)]"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SYSTEM FLOW ──────────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-8 pt-20">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            No one silver bullet. A system that compounds.
          </h2>
        </Reveal>
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {/* Dashed connector line (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="mx-12 border-t-2 border-dashed border-[var(--color-hairline)]" />
          </div>
          {SYSTEM_STEPS.map((step) => (
            <Reveal key={step.n}>
              <div
                className={`relative z-10 rounded-[var(--radius-xl)] border p-6 text-center ${
                  step.navy
                    ? "border-transparent bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[var(--shadow-2)]"
                    : "border-[var(--color-hairline)] bg-[var(--color-surface)]"
                }`}
              >
                <div
                  className={`mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                    step.navy
                      ? "bg-white/[0.14] text-white"
                      : "bg-[var(--color-surface-sunken)] text-[var(--color-ink)]"
                  }`}
                >
                  {step.n}
                </div>
                <div
                  className={`font-[family-name:var(--font-display)] text-[17px] font-bold ${
                    step.navy ? "text-white" : ""
                  }`}
                >
                  {step.title}
                </div>
                <div
                  className={`mt-2 text-sm leading-[1.5] ${
                    step.navy ? "text-white/70" : "text-[var(--color-ink-muted)]"
                  }`}
                >
                  {step.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-20 pt-16">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-16 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              See where your site is costing you jobs.
            </h2>
            <p className="mx-auto mt-4 max-w-[500px] text-[17px] leading-[1.55] text-white/70">
              A free 30-minute call. No hard sell, no pitch deck. Just a
              straight read on your site, ads and rankings.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get your free audit
              </Button>
              <Button href="/system" variant="secondary">
                See how the system works
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
