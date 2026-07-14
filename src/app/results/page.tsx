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
  {
    label: "Enquiry system",
    value: "One dashboard",
    desc: "Every lead source in one place, so no enquiry gets missed or sits in an inbox.",
  },
  {
    label: "Enquiry-to-booked rate",
    value: "Tracked, tuned",
    desc: "From homeowner landing on the site to booked job, call for call. Reviewed monthly.",
  },
  {
    label: "Page speed",
    value: "Mobile-first",
    desc: "Rebuilt for mid-range phones on 4G, so homeowners do not tap back before the page loads.",
  },
  {
    label: "Money tracked",
    value: "Every £",
    desc: "Every call, form and WhatsApp tied back to the ad or keyword that paid for it.",
  },
  {
    label: "Google rankings",
    value: "Built out",
    desc: "New service and area pages against real search demand, month after month.",
  },
  {
    label: "Wasted ad spend",
    value: "Cut back",
    desc: "Budget pulled off dead clicks, redirected to the ad groups paying back.",
    navy: true,
  },
] as Array<{ label: string; value: string; desc: string; navy?: boolean }>;

const SYSTEM_STEPS = [
  { n: 1, title: "Get seen", desc: "Bring in homeowners ready to buy: Google Ads, local SEO, referrals." },
  { n: 2, title: "Site", desc: "Fast, plain pages built to get a homeowner off the fence and into an enquiry." },
  { n: 3, title: "Tracking", desc: "Every call, form and WhatsApp, tied back to the pound that brought it in." },
  { n: 4, title: "Enquiry system", desc: "Every enquiry lands in one dashboard. Triaged, chased, none go cold." },
  { n: 5, title: "Call handling", desc: "Missed calls answered by a UK-based team and dropped into the same system.", navy: true },
] as Array<{ n: number; title: string; desc: string; navy?: boolean }>;

const DIAGNOSIS_ITEMS = [
  "Google's own research on mobile page loads shows a large share of users leave before a slow page finishes loading",
  "Call button hidden below the fold",
  "No way to tell which ads paid back",
];

const CHANGES_ITEMS = [
  "Rebuilt the site, fast and mobile-first",
  "Rewrote every service page to match local search",
  "Wired in call, form and Google Ads tracking",
  "Restructured Google Ads around the jobs the trade wanted more of",
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
              What a Tandemm engagement looks like.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Not vanity metrics. The mechanic: how the system runs across
              Diagnosis, Prevention and Cure, and what a trade business
              actually sees month one, month three, month six.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Enquiry Performance Dashboard, no grey box */}
      <section className="mx-auto max-w-[900px] px-6 pb-6 pt-4">
        <Reveal>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-2)] sm:p-8">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  Jobs booked, tracked back
                </div>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-display)] text-[36px] font-extrabold leading-none tracking-tight">
                    Sample
                  </span>
                </div>
                <div className="mt-0.5 text-sm text-[var(--color-ink-muted)]">
                  jobs booked, per month
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

            <svg
              viewBox="0 0 640 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-6 w-full"
            >
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
              <polyline
                points="0,120 106,115 213,118 320,112 426,110 533,108 640,106"
                stroke="var(--color-hairline)"
                strokeWidth="2"
                fill="none"
              />
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
            Live dashboard view. Sample figures shown for illustration until we
            publish client results.
          </p>
        </Reveal>
      </section>

      {/* ── KPI OVERVIEW ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-8 pt-20">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            What we hold ourselves to, month one to month six.
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
            Not claims. The mechanics of the system, and what a trade
            business should expect to see moving in each area.
          </p>
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
                  className={`mt-2 font-[family-name:var(--font-display)] text-[24px] font-extrabold leading-[1.1] tracking-tight ${
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
            No client results published yet. What is shown is the mechanic of
            the system and what a Tandemm engagement is set up to move.
          </p>
        </Reveal>
      </section>

      {/* ── ENGAGEMENT AT A GLANCE ──────────────────────────── */}
      <section className="mt-16 bg-[var(--color-canvas-deep)] py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              Illustrative engagement
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Before, diagnosis, changes, after.
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[17px] leading-[1.55] text-[var(--color-ink-muted)]">
              A generic view of the shape of a Tandemm engagement, not a
              specific client. Real client stories will drop in here once
              published.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  Before
                </div>
                <div className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold leading-[1.2]">
                  Enquiries scattered, nothing tracked
                </div>
                <p className="mt-2 text-sm leading-[1.5] text-[var(--color-ink-muted)]">
                  Calls, forms and WhatsApp landing in separate places. No way
                  to tell which ad or search paid for which job.
                </p>
                <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-sunken)] p-3">
                  <div className="mb-2 h-2 w-3/5 rounded bg-[var(--color-hairline)]" />
                  <div className="mb-1.5 h-1.5 w-full rounded bg-[var(--color-hairline-soft)]" />
                  <div className="mb-1.5 h-1.5 w-4/5 rounded bg-[var(--color-hairline-soft)]" />
                  <div className="h-1.5 w-2/3 rounded bg-[var(--color-hairline-soft)]" />
                </div>
              </div>
            </Reveal>

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
                      <span className="mt-0.5 font-bold text-[var(--color-accent-hover)]">&rarr;</span>
                      <span className="text-[var(--color-ink)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-6 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-white/55">
                  After
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[18px] font-extrabold leading-[1.2]">
                      One dashboard, every source
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      No enquiry gets missed. Nothing sits in an inbox.
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[18px] font-extrabold leading-[1.2]">
                      Every job traced to source
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      Ads, SEO and referral all reported against booked jobs.
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[18px] font-extrabold leading-[1.2]">
                      Missed calls caught
                    </div>
                    <div className="mt-1 text-sm text-white/70">
                      A UK-based team answers when you cannot pick up.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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
              30 minutes on the phone. No pitch deck. Just a straight read
              on your site, your ads and your Google rankings.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Book a call
              </Button>
              <Button href="/system" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
