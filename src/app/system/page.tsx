"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { DashboardPhone } from "@/components/tandemm/Dashboard";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ─────────────────────────────────────────────────────────── */
/*  Stages                                                     */
/* ─────────────────────────────────────────────────────────── */

const STAGES = [
  {
    num: 1,
    title: "Diagnosis",
    desc: "A scored audit of your site, ad accounts and rankings. Findings ranked by impact on booked jobs.",
    price: "Free",
  },
  {
    num: 2,
    title: "Prevention",
    desc: "The website rebuild, tracking setup and dashboard. All set up for you and included in your monthly plan.",
    price: "Included in the plan",
  },
  {
    num: 3,
    title: "Cure",
    desc: "The engine. Ads managed weekly, SEO built out monthly, enquiries triaged in one system, calls answered when you cannot.",
    price: "From £197/mo",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Deep dives per stage                                       */
/* ─────────────────────────────────────────────────────────── */

const DIAGNOSIS_DEEP = [
  {
    title: "Technical crawl",
    body: "Index coverage, canonical and hreflang mistakes, orphaned pages, redirect chains, meta and schema against target queries.",
  },
  {
    title: "Core Web Vitals",
    body: "Field data on LCP, INP and CLS for the pages homeowners land on. Mid-range Android on 4G is the benchmark, not your MacBook.",
  },
  {
    title: "Tracking audit",
    body: "GA4 events, GTM containers, form submissions, click-to-call, WhatsApp, and conversion API events checked end-to-end against a test enquiry.",
  },
  {
    title: "Ad account audit",
    body: "Campaign structure, match types, negatives, ad-group-to-landing-page alignment, tCPA and tROAS bidding, and quality score by ad group.",
  },
  {
    title: "Keyword and intent mapping",
    body: "Which searches are commercial, which are informational, which pages target them, and where you rank against the local pack.",
  },
  {
    title: "Conversion elements",
    body: "Above-the-fold offer, trust signals, form length, call visibility on mobile, and the specific moves that turn a visitor into an enquiry.",
  },
];

const PREVENTION_DEEP = [
  {
    title: "Landing pages rebuilt",
    body: "Fast, mobile-first templates with a single conversion goal per page. No stock heroes, no filler blocks, no wall of copy homeowners scroll past.",
  },
  {
    title: "Design changes any time",
    body: "The site stays ours to maintain for you. Want the colours tweaked, a new service page, a photo swapped or the offer reworded? Just ask, we make the change, no dev fee.",
  },
  {
    title: "Server-side tracking",
    body: "GA4 and Google Ads conversion API events wired server-side, deduplicated, and verified against real form submissions and call events.",
  },
  {
    title: "Ad campaigns restructured",
    body: "Single-theme ad groups, tight negative lists, geo-scoped by service area, and landing pages that match search intent, not one page for every keyword.",
  },
  {
    title: "Enquiry capture",
    body: "Sticky click-to-call on mobile, a short form above the fold on desktop, WhatsApp entry point, and a missed-call callback route.",
  },
];

const CURE_DEEP = [
  {
    title: "Ads managed weekly",
    body: "Search terms reviewed, spend re-allocated to the ad groups paying back, negatives added, bid strategies retuned when signal shifts.",
  },
  {
    title: "SEO built out monthly",
    body: "New service and area pages against real search demand, internal linking cleaned up, digital PR and citations to lift domain authority.",
  },
  {
    title: "Enquiry management",
    body: "Every enquiry lands in one dashboard, triaged into new, quoting, booked or dead. Chased when they go quiet.",
  },
  {
    title: "Missed-call capture",
    body: "When a call goes to voicemail, the system texts the homeowner from your number, runs them through five qualifying questions, and drops the parsed answers straight into the dashboard. No physical call handling, no third-party operators.",
  },
  {
    title: "Monthly reporting",
    body: "One report tied to booked jobs, cost per booked job and return on spend. No vanity clicks, no dashboards nobody opens.",
  },
];

const AUDIT_CHECKS = [
  "Where homeowners leave the site before they pick up the phone",
  "What your site says versus what a homeowner needs to hear before they call",
  "Whether the site loads fast enough on a mid-range phone on 4G",
  "Where you rank on Google for the jobs homeowners actually search",
  "Which jobs came from ads, which came from SEO, which came from thin air",
];

const AUDIT_STEPS = [
  {
    num: 1,
    title: "We look at your site",
    desc: "Before we speak, we go through your pages, speed, SEO, ad accounts and tracking by hand.",
  },
  {
    num: 2,
    title: "We score every area",
    desc: "Every check gets a score, so nothing comes down to opinion.",
  },
  {
    num: 3,
    title: "We walk you through it",
    desc: "A 30 minute call. We go through what we found, in plain English.",
  },
  {
    num: 4,
    title: "You get a one-page plan",
    desc: "The fixes that matter most, ranked by jobs won. Yours to keep.",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Component                                                  */
/* ─────────────────────────────────────────────────────────── */

export default function SystemPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="system" />

      {/* ── HERO ── */}
      <section className="relative px-6 pb-10 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              How it works
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.8vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Diagnosis, Prevention, Cure.
              <br className="hidden sm:inline" />
              One proven process. Plugged into your business.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[18px] max-w-[620px] text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Everyone starts with the free audit. Everyone gets the
              website rebuild, tracking and dashboard included when they
              start the monthly plan. Then the engine runs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THREE STAGES ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-16 pt-4">
        <Reveal>
          <ProcessFlow />
        </Reveal>
        <Reveal>
          <p className="mt-12 text-center text-sm text-[var(--color-ink-muted)]">
            This is the process. Not a menu. Everyone goes through all
            three, in this order.
          </p>
        </Reveal>
      </section>

      {/* ── COMMITMENT MECHANIC ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Why the rebuild is part of the plan
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Ads and SEO only pay back when they land on a site that turns
              visitors into calls. So we rebuild yours first and bundle it
              into the monthly plan. No separate build fee, one fee that
              covers the lot.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] shadow-[var(--shadow-1)]">
              {[
                {
                  head: "You get the free audit",
                  body: "No commitment, no card on file. The audit is yours whether we ever work together or not.",
                },
                {
                  head: "You start the monthly plan",
                  body: "£197 a month covers the whole system. Add paid ads whenever you are ready.",
                },
                {
                  head: "We rebuild the site for you",
                  body: "Website rebuild, tracking number, widget, dashboard, ad accounts. All included, no separate build fee.",
                },
                {
                  head: "The engine runs",
                  body: "Enquiries land in one dashboard, missed calls caught, ads and SEO working. The plan runs month to month.",
                },
              ].map((row, i) => (
                <div
                  key={row.head}
                  className={`flex flex-col gap-2 px-7 py-5 sm:flex-row sm:items-center sm:gap-6 ${
                    i > 0 ? "border-t border-[var(--color-hairline-soft)]" : ""
                  }`}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[13px] font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-[family-name:var(--font-display)] text-[16px] font-bold text-[var(--color-ink)]">
                      {row.head}
                    </div>
                    <div className="mt-1 text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
                      {row.body}
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-[var(--color-hairline)] bg-[var(--color-primary)] px-7 py-4 text-center text-[14px] font-semibold text-[var(--color-on-primary)]">
                Fair on both sides. You get a site that would cost £1,000
                to £3,000 standalone. We get the runway to make the ads
                actually pay back.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DEEP DIVE PER STAGE ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-14 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              What sits behind each stage
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              The parts of the system, in detail.
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Some of this gets technical. That is the point. This is what
              you cannot fix in a weekend, and what most agencies quietly
              do not do.
            </p>
          </Reveal>

          <DeepDiveBlock
            step="01"
            title="Diagnosis"
            subtitle="A scored, hand-checked audit across visibility, speed, tracking and conversion."
            items={DIAGNOSIS_DEEP}
          />

          <DeepDiveBlock
            step="02"
            title="Prevention"
            subtitle="The fixes the audit found. Site rebuild, tracking, ad structure, enquiry capture."
            items={PREVENTION_DEEP}
          />

          <DeepDiveBlock
            step="03"
            title="Cure"
            subtitle="Ongoing. Ads, SEO, enquiry management and missed-call capture. Reporting tied to booked jobs."
            items={CURE_DEEP}
            last
          />
        </div>
      </section>

      {/* ── DASHBOARD MOCK ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <Reveal>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                  What you see
                </div>
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
                  One dashboard. Every enquiry. On your phone.
                </h2>
                <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                  We handle the system. You see the outcome. Today&apos;s new
                  leads with source, quick actions per lead, this week&apos;s
                  booked jobs, the missed calls we caught, and a simple
                  monthly trend so you know what is coming.
                </p>
                <ul className="flex flex-col gap-3 text-[14.5px] leading-[1.55] text-[var(--color-ink)]">
                  {[
                    "Today's new leads, with source (LSA, CPC, SEO, referral, missed call callback)",
                    "Quick actions per lead: call back, mark as quoted, mark as booked, mark as dead",
                    "This week's booked jobs and estimated value",
                    "Missed calls we caught for you",
                    "A simple monthly trend: leads in, jobs booked",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap justify-center gap-6">
                <DashboardPhone view="list" caption="Every enquiry, triaged." />
                <div className="hidden xl:block">
                  <DashboardPhone
                    view="map"
                    caption="And pinned across your patch."
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSIS AUDIT CENTREPIECE ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Diagnosis audit, free
            </div>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Where is your site costing you jobs?
            </h2>
            <ul className="mx-auto mb-8 flex max-w-[560px] flex-col gap-3.5 text-left">
              {AUDIT_CHECKS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55]">
                  <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
                  <span className="text-[var(--color-ink)]">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/book">Get my free audit</Button>
          </Reveal>
        </div>
      </section>

      {/* ── AUDIT PROCESS ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              How the audit works
            </h2>
          </Reveal>

          <Reveal>
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 hidden -translate-y-1/2 lg:block">
                <div className="mx-[60px] border-t-2 border-dashed border-[var(--color-hairline)]" />
              </div>

              {AUDIT_STEPS.map((s) => (
                <div
                  key={s.num}
                  className="relative z-10 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]"
                >
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[var(--color-on-primary)]">
                    {s.num}
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-bold">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Process flow (Diagnosis / Prevention / Cure)               */
/* ─────────────────────────────────────────────────────────── */

function ProcessFlow() {
  return (
    <div className="process-flow relative">
      <style>{`
        .process-flow .flow-line { stroke-dasharray: 5 9; animation: flow-march 2.6s linear infinite; }
        @keyframes flow-march { to { stroke-dashoffset: -28; } }
        .process-flow .flow-node-ring { animation: flow-pulse 3s ease-out infinite; }
        @keyframes flow-pulse {
          0%   { transform: scale(0.85); opacity: 0.5; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-flow .flow-line, .process-flow .flow-node-ring { animation: none; }
        }
      `}</style>

      {/* Desktop: weaving flow */}
      <div className="relative hidden md:block">
        <svg
          className="pointer-events-none absolute left-0 top-0 h-[72px] w-full"
          viewBox="0 0 1000 72"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-accent)" />
              <stop offset="50%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="var(--color-primary)" />
            </linearGradient>
          </defs>
          {/* base line */}
          <path
            d="M167 36 C 280 66, 388 66, 500 36 C 612 6, 720 6, 833 36"
            fill="none"
            stroke="url(#flow-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.55"
          />
          {/* animated flow */}
          <path
            className="flow-line"
            d="M167 36 C 280 66, 388 66, 500 36 C 612 6, 720 6, 833 36"
            fill="none"
            stroke="url(#flow-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative grid grid-cols-3 gap-8">
          {STAGES.map((s, i) => (
            <div key={s.num} className="flex flex-col items-center px-4 text-center">
              <div className="relative z-10 mb-6 flex h-[72px] w-[72px] items-center justify-center">
                <span
                  className="flow-node-ring absolute inset-0 rounded-full border-2 border-[var(--color-accent)]"
                  style={{ animationDelay: `${i * 0.8}s` }}
                />
                <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[var(--color-primary)] font-[family-name:var(--font-display)] text-[26px] font-extrabold text-[var(--color-on-primary)] shadow-[var(--shadow-2)] ring-[3px] ring-[var(--color-canvas)]">
                  {s.num}
                </span>
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-[22px] font-bold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="max-w-[300px] text-[15px] leading-[1.55] text-[var(--color-ink-muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden">
        {STAGES.map((s, i) => (
          <div key={s.num} className="relative flex gap-4 pb-9 last:pb-0">
            {i < STAGES.length - 1 && (
              <span className="absolute bottom-2 left-[27px] top-[60px] w-[2px] bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)] opacity-40" />
            )}
            <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center">
              <span
                className="flow-node-ring absolute inset-0 rounded-full border-2 border-[var(--color-accent)]"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
              <span className="relative flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[var(--color-primary)] font-[family-name:var(--font-display)] text-[20px] font-extrabold text-[var(--color-on-primary)] shadow-[var(--shadow-1)]">
                {s.num}
              </span>
            </div>
            <div className="pt-1.5">
              <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-[20px] font-bold">
                {s.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-[var(--color-ink-muted)]">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Deep-dive block                                            */
/* ─────────────────────────────────────────────────────────── */

function DeepDiveBlock({
  step,
  title,
  subtitle,
  items,
  last,
}: {
  step: string;
  title: string;
  subtitle: string;
  items: { title: string; body: string }[];
  last?: boolean;
}) {
  return (
    <div className={last ? "" : "mb-14"}>
      <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          Stage {step}
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-[24px] font-bold leading-[1.15] tracking-[-0.02em]">
          {title}
        </h3>
        <p className="basis-full text-[15px] leading-[1.55] text-[var(--color-ink-muted)] sm:basis-auto sm:flex-1">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6"
          >
            <div className="mb-2 font-[family-name:var(--font-display)] text-[16px] font-bold text-[var(--color-ink)]">
              {it.title}
            </div>
            <p className="text-[14px] leading-[1.55] text-[var(--color-ink-muted)]">
              {it.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
