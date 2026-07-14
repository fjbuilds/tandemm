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
    desc: "The website rebuild, tracking setup and dashboard. Built for you when you sign up for Cure, at no extra cost.",
    price: "Included with Cure",
  },
  {
    num: 3,
    title: "Cure",
    desc: "The paid stage. Ads managed weekly, SEO built out monthly, enquiries triaged in one system, calls answered when you cannot.",
    price: "From £650/mo",
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
    title: "Call handling",
    body: "Trained UK-based handlers answer calls you cannot pick up, take the details we need, and drop the lead straight into the same dashboard.",
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
              One process. Same for every business we work with.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[18px] max-w-[620px] text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Everyone starts with the free audit. Everyone gets the
              website rebuild, tracking and dashboard for free when they
              commit to the lead generation stage. Then the engine runs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── THREE STAGES ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-16 pt-4">
        <Reveal>
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 hidden -translate-y-1/2 lg:block">
              <div className="mx-[80px] border-t-2 border-dashed border-[var(--color-hairline)]" />
            </div>

            {STAGES.map((s) => (
              <div
                key={s.num}
                className="relative z-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-accent)]" />
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] font-[family-name:var(--font-display)] text-[18px] font-extrabold text-[var(--color-on-primary)] shadow-[var(--shadow-1)]">
                    {s.num}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    Stage {s.num}
                  </span>
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
              Why the site rebuild is free
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Ads only pay back when they land on a site that turns
              visitors into calls. So we rebuild yours first, at no cost.
              The deal is simple: you commit to three months of lead
              generation, and we build knowing the ads have a real chance
              to work. No separate build fee, fair on both sides.
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
                  head: "You decide to move to Cure",
                  body: "You sign up for the lead generation stage on a three month minimum term. That is the commitment.",
                },
                {
                  head: "We build the site for free",
                  body: "Website rebuild, tracking number, widget, dashboard, ad accounts. All included, no separate build fee.",
                },
                {
                  head: "The engine runs",
                  body: "Ads live from day one, enquiries in one dashboard, missed calls caught. After three months, notice is one month.",
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
            subtitle="Ongoing. Ads, SEO, enquiry management and call handling. Reporting tied to booked jobs."
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
              <PhoneDashboard />
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

      {/* ── FINAL CTA ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
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
                Book a call
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

/* ─────────────────────────────────────────────────────────── */
/*  Phone dashboard                                            */
/* ─────────────────────────────────────────────────────────── */

function PhoneDashboard() {
  const newLeads = [
    {
      name: "S. Patel",
      area: "SW11",
      source: "LSA",
      note: "Fuse box replacement quote",
    },
    {
      name: "M. Dawson",
      area: "SE22",
      source: "CPC",
      note: "EV charger install",
    },
    {
      name: "J. Reid",
      area: "SW15",
      source: "Missed call caught",
      note: "Callback requested, 09:42",
    },
  ];

  const trend = [
    { label: "Feb", leads: 18, booked: 8 },
    { label: "Mar", leads: 22, booked: 11 },
    { label: "Apr", leads: 27, booked: 14 },
    { label: "May", leads: 31, booked: 17 },
    { label: "Jun", leads: 34, booked: 19 },
    { label: "Jul", leads: 38, booked: 22 },
  ];
  const trendMax = 40;

  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div className="relative rounded-[42px] border border-[var(--color-hairline)] bg-[#0e1420] p-2.5 shadow-[var(--shadow-2)]">
        <div className="relative overflow-hidden rounded-[34px] bg-[var(--color-canvas)]">
          <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-[var(--color-ink-muted)]">
            <span>09:42</span>
            <div className="absolute left-1/2 top-[10px] h-4 w-16 -translate-x-1/2 rounded-b-2xl bg-[#0e1420]" />
            <span>100%</span>
          </div>

          <div className="flex items-center justify-between px-4 pb-3 pt-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
                Tandemm
              </div>
              <div className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-ink)]">
                Today
              </div>
            </div>
            <div className="rounded-full bg-[var(--color-primary)] px-2.5 py-[3px] text-[10px] font-bold text-[var(--color-on-primary)]">
              3 new
            </div>
          </div>

          <div className="space-y-3 px-3 pb-4">
            <div className="rounded-[16px] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                  Today&apos;s leads
                </span>
                <span className="text-[10px] text-[var(--color-ink-faint)]">
                  3 new
                </span>
              </div>
              <div className="space-y-2">
                {newLeads.map((l, i) => (
                  <div
                    key={l.name}
                    className="rounded-[10px] border border-[var(--color-hairline-soft)] bg-[var(--color-canvas)] p-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold text-[var(--color-ink)]">
                        {l.name} · {l.area}
                      </span>
                      <span className="rounded-full bg-[var(--color-surface-sunken)] px-2 py-[1px] text-[9px] font-semibold text-[var(--color-ink-muted)]">
                        {l.source}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] leading-[1.4] text-[var(--color-ink-muted)]">
                      {l.note}
                    </div>
                    {i === 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {["Call", "Quoted", "Booked", "Dead"].map((a) => (
                          <button
                            key={a}
                            type="button"
                            className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-2 py-[3px] text-[10px] font-semibold text-[var(--color-ink)]"
                          >
                            {a}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[16px] bg-[var(--color-primary)] p-3 text-[var(--color-on-primary)]">
              <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.06em] text-white/60">
                This week booked
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-[family-name:var(--font-display)] text-[24px] font-extrabold leading-none">
                  6 jobs
                </span>
                <span className="text-[13px] font-semibold text-white/80">
                  £4,320 est.
                </span>
              </div>
            </div>

            <div className="rounded-[16px] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                  Missed calls we caught
                </span>
                <span className="text-[10px] text-[var(--color-ink-faint)]">
                  2
                </span>
              </div>
              <div className="space-y-1.5 text-[11px] text-[var(--color-ink)]">
                <div className="flex justify-between">
                  <span>J. Reid, SW15</span>
                  <span className="text-[var(--color-ink-muted)]">09:42</span>
                </div>
                <div className="flex justify-between">
                  <span>A. Yusuf, SE1</span>
                  <span className="text-[var(--color-ink-muted)]">08:11</span>
                </div>
              </div>
            </div>

            <div className="rounded-[16px] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                  Leads in vs jobs booked
                </span>
                <span className="text-[10px] text-[var(--color-ink-faint)]">
                  6 months
                </span>
              </div>
              <div className="flex h-16 items-end gap-1.5">
                {trend.map((t) => {
                  const leadH = (t.leads / trendMax) * 100;
                  const bookedH = (t.booked / trendMax) * 100;
                  return (
                    <div
                      key={t.label}
                      className="flex flex-1 flex-col items-center gap-0.5"
                    >
                      <div className="relative flex h-full w-full items-end justify-center">
                        <div
                          className="w-full rounded-t-[3px] bg-[var(--color-hairline)]"
                          style={{ height: `${leadH}%` }}
                        />
                        <div
                          className="absolute bottom-0 left-1/2 w-2/3 -translate-x-1/2 rounded-t-[3px] bg-[var(--color-primary)]"
                          style={{ height: `${bookedH}%` }}
                        />
                      </div>
                      <span className="text-[8px] font-semibold text-[var(--color-ink-faint)]">
                        {t.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 flex items-center gap-3 text-[9px] font-semibold text-[var(--color-ink-muted)]">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-hairline)]" />
                  Leads in
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                  Jobs booked
                </span>
              </div>
            </div>
          </div>

          <div className="pb-3">
            <div className="mx-auto h-1 w-24 rounded-full bg-[var(--color-hairline)]" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-[12px] text-[var(--color-ink-faint)]">
        Illustrative dashboard view. What a Cure client sees on their phone.
      </p>
    </div>
  );
}
