"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { DashboardPhone, DashboardDesktop } from "@/components/tandemm/Dashboard";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ─────────────────────────────────────────────────────────── */
/*  Data                                                       */
/* ─────────────────────────────────────────────────────────── */

const INCLUDED_PILLARS = [
  { title: "Website rebuild", note: "Fast, mobile-first, yours to keep" },
  { title: "Found on Google", note: "Ranked where homeowners search" },
  { title: "Visible on AI", note: "Named on ChatGPT and Claude" },
  { title: "Quote assistant", note: "Qualifies the job, captures the lead" },
  { title: "One dashboard", note: "Every enquiry, every source" },
  { title: "Missed calls caught", note: "Auto-text back, quoted, logged" },
];

const CAPTURE_FEATURES = [
  {
    title: "Quote assistant",
    body: "Sits on every page. It qualifies the job with the exact questions you would ask on the phone, so what lands in the dashboard is a proper enquiry, not a name and a shrug.",
  },
  {
    title: "Tracking phone number",
    body: "A dedicated number that rings straight through to yours. Every call is recorded against the ad or search that drove it, so you know what paid back.",
  },
  {
    title: "Missed-call auto-text",
    body: "If a call goes to voicemail, the homeowner gets a text from your number instantly. The reply lands in the same dashboard as a lead.",
  },
  {
    title: "WhatsApp entry point",
    body: "One tap on mobile drops the homeowner into a WhatsApp thread with you, pre-filled with the job they clicked on. Threads log against the same lead.",
  },
];

const DASHBOARD_FEATURES = [
  {
    title: "One inbox, every source",
    body: "Calls, forms, WhatsApp and missed-call callbacks all in one dashboard. No switching between apps, no lead falling through a gap.",
  },
  {
    title: "Triaged into stages",
    body: "New, then Quoting, then Booked or Dead. One tap to move a lead along. When a lead sits too long, it flags for a chase.",
  },
  {
    title: "Notes, callbacks, files",
    body: "Every note, every scheduled callback, every quote PDF stored against the lead. History travels with the job.",
  },
  {
    title: "Reporting tied to jobs",
    body: "Not clicks, not impressions. Cost per booked job, return on ad spend, and which channel paid for which job.",
  },
];

const WEBSITE_FEATURES = [
  "Rebuilt on a fast, mobile-first template",
  "Sub-2s page loads on 4G",
  "Above-the-fold enquiry form on every page",
  "Sticky click-to-call bar on mobile",
  "Landing pages matched to each ad",
  "GDPR cookie banner and privacy handling",
  "SSL, domain, hosting, all included",
  "Content and structure tuned for local search",
];

/* ─────────────────────────────────────────────────────────── */
/*  Component                                                  */
/* ─────────────────────────────────────────────────────────── */

export default function FeaturesPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="features" />

      {/* ── HERO ── */}
      <section className="px-6 pb-14 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              Everything included
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Your whole growth engine.
              <br className="hidden sm:inline" />
              One fee, nothing bolted on.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              We rebuild your site, get you found, catch every enquiry and
              pick up the calls you miss. You get the jobs. We run the
              machine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EVERYTHING INCLUDED BAND ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-20">
        <Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_PILLARS.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-5 py-4 shadow-[var(--shadow-1)]"
              >
                <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-soft)] text-[var(--color-success)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-ink)]">
                    {p.title}
                  </div>
                  <div className="text-[13px] leading-[1.4] text-[var(--color-ink-muted)]">
                    {p.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FLOW: STEP 01 — AUDIT ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <StepEyebrow n="01" label="It starts with an audit" />
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                First, we find out exactly where you&apos;re losing jobs.
              </h2>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Before anything gets built, we score your site, your ads
                and your rankings by hand. You get a clear picture of
                what&apos;s leaking work, and it&apos;s yours to keep whether
                we go further or not.
              </p>
              <ul className="flex flex-col gap-3 text-[15px] leading-[1.55] text-[var(--color-ink)]">
                {[
                  "Every page checked for speed and conversion",
                  "Ad accounts scored on structure and waste",
                  "Where you rank against the local competition",
                  "Ranked by impact on booked jobs, not vanity metrics",
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
            <AuditMock />
          </Reveal>
        </div>
      </section>

      {/* ── FLOW: STEP 02 — WEBSITE REBUILD ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <WebsiteMock />
          </Reveal>

          <Reveal>
            <div>
              <StepEyebrow n="02" label="Then we rebuild your site" />
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                A site built to turn visitors into booked jobs.
              </h2>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Fast, mobile-first, and free when you sign up. Every page
                is built to do one thing: get the homeowner talking to you.
                The quote assistant handles the questions they&apos;d
                otherwise ring around for, so they stay put and you get a
                proper job to quote on.
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {WEBSITE_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[14px] leading-[1.5] text-[var(--color-ink)]"
                  >
                    <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FLOW: STEP 03 — RANKINGS: GOOGLE + AI ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <StepEyebrow n="03" label="Then we get you found" />
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Top of Google, and the name AI gives when people ask.
              </h2>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Homeowners don&apos;t just Google any more. Plenty of them
                now ask ChatGPT or Claude who to call. We get you visible in
                both places: ranked where people search, and named when they
                ask an AI.
              </p>
              <ul className="flex flex-col gap-3 text-[15px] leading-[1.55] text-[var(--color-ink)]">
                {[
                  "Featured at the top of Google when homeowners search",
                  "Structured so AI assistants pick you up and recommend you",
                  "Service and area pages that rank in your postcodes",
                  "Every call and form tracked back to what drove it",
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
            <div className="space-y-4">
              <GoogleSerpMock />
              <AiAnswerMock />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FLOW: STEP 04 — DASHBOARD ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <StepEyebrow n="04" label="The work lands here" center />
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Every enquiry the machine generates, in one place.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Live on your desktop for quoting, live on your phone when
              you are on the tools. Same data, same lead, same status.
            </p>
          </Reveal>

          <Reveal>
            {/* Phone only on mobile (the desktop mock is unreadable when shrunk); both side by side from lg up. */}
            <div className="mx-auto mb-12 flex max-w-[1060px] flex-col items-center gap-8 lg:grid lg:grid-cols-[1.5fr_0.65fr] lg:items-end">
              <div className="hidden w-full lg:block">
                <DashboardDesktop caption="Your enquiries on the desktop, for quoting." />
              </div>
              <DashboardPhone
                view="list"
                caption="Every enquiry, on your phone when you're on the tools."
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DASHBOARD_FEATURES.map((f) => (
              <Reveal key={f.title}>
                <div className="h-full rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6">
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[16px] font-bold">
                    {f.title}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOW: STEP 05 — ENQUIRIES HANDLED ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <Reveal className="mb-12 text-center">
          <StepEyebrow n="05" label="And none of it goes cold" center />
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Every enquiry caught, answered and chased.
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
            Widget, quote assistant, tracking number, missed-call catcher,
            WhatsApp. Every path a homeowner takes to reach you feeds the
            same dashboard.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CAPTURE_FEATURES.map((f) => (
            <Reveal key={f.title}>
              <div className="flex h-full items-start gap-4 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)]">
                  <CaptureIcon name={f.title} />
                </div>
                <div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[17px] font-bold">
                    {f.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <CaughtAndHandled />
            <LeadCarryOver />
          </div>
        </Reveal>
      </section>

      {/* ── ROLES ROLLUP ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What you would normally hire multiple people for.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Everything below is included in the Cure fee. No upsells,
              no add-ons.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] shadow-[var(--shadow-1)]">
              {[
                {
                  role: "Web developer",
                  work: "Build and host a fast, mobile-first website",
                },
                {
                  role: "Google Ads specialist",
                  work: "Set up and tune your Google Ads campaigns weekly",
                },
                {
                  role: "SEO consultant",
                  work: "Build pages that rank on Google and get picked up by AI",
                },
                {
                  role: "CRM setup",
                  work: "Configure the dashboard, tracking and lead pipeline",
                },
                {
                  role: "Missed-call capture",
                  work: "Auto-text every missed call, qualify the job, log the lead",
                },
                {
                  role: "Reporting analyst",
                  work: "Tie every call and form to a booked job, monthly report",
                },
              ].map((row, i) => (
                <div
                  key={row.role}
                  className={`grid grid-cols-1 gap-2 px-7 py-5 sm:grid-cols-[0.9fr_1.8fr_0.5fr] sm:items-center sm:gap-4 ${
                    i > 0 ? "border-t border-[var(--color-hairline-soft)]" : ""
                  }`}
                >
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-bold">
                    {row.role}
                  </div>
                  <div className="text-sm leading-[1.5] text-[var(--color-ink-muted)]">
                    {row.work}
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-flex items-center rounded-full bg-[var(--color-success-soft)] px-2.5 py-[3px] text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-success)]">
                      Included
                    </span>
                  </div>
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
            <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              See what your site is missing. Free audit, yours to keep.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get my free audit
              </Button>
              <Button href="/pricing" variant="secondary">
                See pricing
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Google SERP mock                                           */
/* ─────────────────────────────────────────────────────────── */

function GoogleSerpMock() {
  const providers = [
    {
      name: "Your Trade Business",
      rating: "4.9",
      reviews: "128",
      meta: "10+ years · Opens 24 hours",
      you: true,
    },
    {
      name: "Sparks & Sons Electrical",
      rating: "4.6",
      reviews: "74",
      meta: "6 years · Open now",
      you: false,
    },
    {
      name: "Citywide Electricians Ltd",
      rating: "4.4",
      reviews: "203",
      meta: "12 years · Open now",
      you: false,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[520px]">
      <div
        className="overflow-hidden rounded-[16px] border border-[var(--color-hairline)] bg-white font-[family-name:Arial,sans-serif] shadow-[var(--shadow-2)]"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-[#ebedef] bg-[#f1f3f4] px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2">
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <span className="truncate text-[11px] text-[#5f6368]">
              google.com/search?q=emergency+electrician+near+me
            </span>
          </div>
        </div>

        {/* Search header */}
        <div className="border-b border-[#ebedef] px-4 pb-2 pt-3">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:Arial,sans-serif] text-[20px] font-medium tracking-[-0.5px]">
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>
            <div className="flex flex-1 items-center gap-2 rounded-full border border-[#dfe1e5] px-4 py-1.5 shadow-[0_1px_4px_rgba(32,33,36,0.08)]">
              <span className="flex-1 truncate text-[13px] text-[#202124]">
                emergency electrician near me
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z" fill="#4285F4" />
                <path d="M18 11a6 6 0 0 1-12 0M12 17v4" stroke="#4285F4" strokeWidth="2" fill="none" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
            </div>
          </div>
          {/* Tabs */}
          <div className="mt-2 flex items-center gap-5 text-[12px] text-[#5f6368]">
            <span className="relative pb-2 font-medium text-[#1a73e8]">
              All
              <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-t bg-[#1a73e8]" />
            </span>
            <span className="pb-2">Maps</span>
            <span className="pb-2">Images</span>
            <span className="pb-2">News</span>
            <span className="pb-2">Shopping</span>
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="mb-2 text-[11px] text-[#70757a]">
            About 2,340,000 results (0.48 seconds)
          </div>

          {/* Local Services Ads block */}
          <div className="rounded-[8px] border border-[#dadce0] p-3">
            <div className="mb-2 flex items-center gap-1.5 text-[13px] text-[#202124]">
              <span className="font-medium">Electricians near you</span>
              <span className="text-[#70757a]">·</span>
              <span className="text-[11px] text-[#70757a]">Ad</span>
              <span className="ml-auto flex items-center gap-1 text-[11px] text-[#1a73e8]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#34A853">
                  <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
                  <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                Google Guaranteed
              </span>
            </div>
            <div className="divide-y divide-[#ebedef]">
              {providers.map((p) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-3 py-2 ${p.you ? "-mx-1 rounded-md bg-[#e8f0fe] px-1" : ""}`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white ${p.you ? "bg-[#1a73e8]" : "bg-[#9aa0a6]"}`}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <span className="truncate text-[13px] font-medium text-[#202124]">
                        {p.name}
                      </span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#34A853" className="shrink-0">
                        <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
                        <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2.5" fill="none" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#70757a]">
                      <span className="font-medium text-[#202124]">{p.rating}</span>
                      <span className="text-[#fbbc04]">★★★★★</span>
                      <span>({p.reviews})</span>
                    </div>
                    <div className="truncate text-[11px] text-[#70757a]">{p.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsored result */}
          <div className="mt-3">
            <div className="flex items-center gap-1.5 text-[12px]">
              <span className="font-bold text-[#202124]">Sponsored</span>
            </div>
            <div className="mt-0.5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f1f3f4] text-[10px] font-bold text-[#5f6368]">
                Y
              </div>
              <div className="leading-tight">
                <div className="text-[12px] text-[#202124]">Your Trade Business</div>
                <div className="text-[11px] text-[#5f6368]">yourbusiness.co.uk</div>
              </div>
            </div>
            <div className="mt-1 text-[16px] leading-tight text-[#1a0dab]">
              Emergency Electrician, Free Quote Today
            </div>
            <div className="mt-0.5 text-[12px] leading-[1.4] text-[#4d5156]">
              24/7 callouts across London. Fully insured, NICEIC approved.
              Book online in 30 seconds.
            </div>
          </div>

          {/* Organic result */}
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f1f3f4] text-[10px] font-bold text-[#5f6368]">
                Y
              </div>
              <div className="leading-tight">
                <div className="text-[12px] text-[#202124]">Your Trade Business</div>
                <div className="text-[11px] text-[#5f6368]">
                  yourbusiness.co.uk › electricians
                </div>
              </div>
            </div>
            <div className="mt-1 text-[16px] leading-tight text-[#1a0dab]">
              London Electricians | Same-Day Callouts
            </div>
            <div className="mt-0.5 text-[12px] leading-[1.4] text-[#4d5156]">
              Rated 4.9 on Google. Rewires, fault-finding and EV chargers
              across South London.
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[12px] text-[var(--color-ink-faint)]">
        Illustrative Google result. Actual position depends on ad spend
        and competition.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Step eyebrow                                               */
/* ─────────────────────────────────────────────────────────── */

function StepEyebrow({
  n,
  label,
  center,
}: {
  n: string;
  label: string;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-3 flex items-center gap-2.5 ${center ? "justify-center" : ""}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] font-[family-name:var(--font-display)] text-[12px] font-extrabold text-[var(--color-on-primary)]">
        {n}
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Audit mock                                                 */
/* ─────────────────────────────────────────────────────────── */

function AuditMock() {
  const rows = [
    { label: "Conversion", score: 4 },
    { label: "Site speed", score: 3 },
    { label: "Google visibility", score: 5 },
    { label: "Ad account health", score: 2 },
    { label: "Tracking", score: 2 },
  ];

  return (
    <div className="mx-auto w-full max-w-[460px]">
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-2)]">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
            Website audit
          </span>
          <span className="rounded-full bg-[var(--color-success-soft)] px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-success)]">
            Free
          </span>
        </div>
        <div className="mb-6 text-sm text-[var(--color-ink-faint)]">
          Sample audit result
        </div>

        <div className="mb-6 flex items-center gap-5">
          <div className="relative h-[92px] w-[92px] shrink-0">
            <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
              <circle cx="70" cy="70" r="58" fill="none" stroke="var(--color-hairline)" strokeWidth="12" />
              <circle
                cx="70"
                cy="70"
                r="58"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${(48 / 100) * 2 * Math.PI * 58} ${2 * Math.PI * 58}`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-[24px] font-extrabold leading-none">
                48
              </span>
              <span className="text-[10px] text-[var(--color-ink-faint)]">/ 100</span>
            </div>
          </div>
          <p className="text-[13.5px] leading-[1.5] text-[var(--color-ink-muted)]">
            Losing an estimated{" "}
            <span className="font-bold text-[var(--color-ink)]">6 to 9 jobs</span>{" "}
            a month to a slow site and thin Google presence.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {rows.map((cat) => (
            <div key={cat.label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[var(--color-ink)]">
                  {cat.label}
                </span>
                <span className="text-[13px] font-semibold text-[var(--color-ink-muted)]">
                  {cat.score}/10
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-hairline)]">
                <div
                  className={`h-full rounded-full ${cat.score <= 3 ? "bg-[var(--color-accent)]" : "bg-[var(--color-primary)]"}`}
                  style={{ width: `${cat.score * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-[12px] text-[var(--color-ink-faint)]">
        Illustrative audit. Yours is scored by hand on your real site.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  AI answer mock                                             */
/* ─────────────────────────────────────────────────────────── */

function AiAnswerMock() {
  return (
    <div className="mx-auto w-full max-w-[520px]">
      <div className="rounded-[16px] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-2)]">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </span>
          <span className="text-[13px] font-bold text-[var(--color-ink)]">
            AI Assistant
          </span>
        </div>

        <div className="mb-3 ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--color-surface-sunken)] px-3.5 py-2 text-[13px] text-[var(--color-ink)]">
          Who&apos;s a good emergency electrician near Clapham?
        </div>

        <div className="rounded-2xl rounded-bl-sm bg-[var(--color-surface-muted)] px-3.5 py-3 text-[13.5px] leading-[1.55] text-[var(--color-ink)]">
          A well-reviewed option in the Clapham area is{" "}
          <span className="font-bold">Your Trade Business</span>, rated 4.9
          on Google, NICEIC approved, and available for 24/7 emergency
          callouts. You can reach them here:
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-1 text-[12px] font-semibold text-[var(--color-accent-hover)]">
            yourbusiness.co.uk
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[12px] text-[var(--color-ink-faint)]">
        Illustrative AI answer. We structure your site so assistants
        surface and recommend you.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Website mock                                               */
/* ─────────────────────────────────────────────────────────── */

function WebsiteMock() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="relative rounded-t-[14px] border border-[var(--color-hairline)] bg-[#0e1420] p-2 shadow-[var(--shadow-2)]">
        <div className="overflow-hidden rounded-t-[8px] bg-white">
          <div className="flex items-center gap-2 border-b border-[var(--color-hairline-soft)] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-2 flex flex-1 items-center gap-2 rounded-full bg-[#f1f3f4] px-3 py-1">
              <span className="text-[10px] text-[#5f6368]">yourbusiness.co.uk</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-[var(--color-hairline-soft)] px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-[var(--color-primary)]" />
              <span className="font-[family-name:var(--font-display)] text-[12px] font-extrabold text-[var(--color-ink)]">
                YourTrade
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-[var(--color-ink-muted)]">
              <span>Services</span>
              <span>Areas</span>
              <span>About</span>
              <span className="rounded-full bg-[var(--color-primary)] px-2.5 py-1 text-[10px] font-bold text-white">
                020 0000
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f8f4ec] to-[#f0eae0] px-5 py-6">
            <div className="grid grid-cols-[1.4fr_1fr] gap-4">
              <div>
                <div className="mb-1 inline-flex items-center rounded-full bg-white px-2 py-[2px] text-[8px] font-semibold text-[var(--color-accent-hover)]">
                  Rated 4.9 on Google
                </div>
                <div className="font-[family-name:var(--font-display)] text-[16px] font-extrabold leading-[1.1] text-[var(--color-ink)]">
                  Emergency electricians,
                  <br />
                  answering today.
                </div>
                <div className="mt-1.5 text-[9px] leading-[1.4] text-[var(--color-ink-muted)]">
                  Rewires, EV chargers, fault finding across London.
                </div>
                <div className="mt-3 flex gap-1.5">
                  <div className="rounded-md bg-[var(--color-primary)] px-2 py-1 text-[9px] font-bold text-white">
                    Get a quote
                  </div>
                  <div className="rounded-md border border-[var(--color-hairline)] px-2 py-1 text-[9px] font-bold text-[var(--color-ink)]">
                    Call now
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-hairline)] bg-white p-2 shadow-sm">
                <div className="mb-1 text-[8px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                  Free quote
                </div>
                <div className="mb-1 h-4 rounded bg-[var(--color-surface-muted)]" />
                <div className="mb-1 h-4 rounded bg-[var(--color-surface-muted)]" />
                <div className="mb-1.5 h-4 rounded bg-[var(--color-surface-muted)]" />
                <div className="rounded-md bg-[var(--color-accent)] py-1 text-center text-[8px] font-bold text-white">
                  Send
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[var(--color-hairline-soft)] px-5 py-3 text-[9px] text-[var(--color-ink-muted)]">
            <span>NICEIC Approved</span>
            <span>Fully insured</span>
            <span>24/7 callouts</span>
          </div>
        </div>
      </div>
      <div className="mx-auto h-2 w-[95%] rounded-b-[10px] bg-[#0e1420]" />
      <div className="mx-auto h-1 w-[70%] rounded-b-full bg-[#0e1420]/40" />
      <p className="mt-4 text-center text-[12px] text-[var(--color-ink-faint)]">
        Illustrative website mockup. Yours will match your trade and area.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Caught and handled                                         */
/* ─────────────────────────────────────────────────────────── */

function CaughtAndHandled() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
        A missed call, caught
      </div>
      <h3 className="mb-1 font-[family-name:var(--font-display)] text-[20px] font-bold">
        Structured questions, not vague replies.
      </h3>
      <p className="mb-6 text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
        The auto-text asks the same five questions every time. That is
        quote quality control, and it is what makes the dashboard filter
        cleanly across job type, urgency and area.
      </p>

      <div className="flex flex-col gap-3">
        {/* Missed call event */}
        <div className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-dashed border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-3.5 py-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span className="flex-1 text-[13px] leading-[1.45] text-[var(--color-ink)]">
            <span className="font-bold">Missed call.</span> James Patterson
            rang. You were under a floor.
          </span>
          <span className="shrink-0 text-[11px] text-[var(--color-ink-faint)]">
            7:48 PM
          </span>
        </div>

        {/* Auto-text with bullet questions */}
        <div className="ml-auto max-w-[92%]">
          <div className="mb-1 flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-faint)]">
            Sent from your number · 7:48 PM
          </div>
          <div className="rounded-2xl rounded-br-sm bg-[var(--color-primary)] px-4 py-3 text-[13.5px] leading-[1.55] text-white">
            <div>Sorry I missed you, on a job. Quick five so we can quote you properly:</div>
            <ul className="mt-2 flex flex-col gap-1.5 text-[13px] text-white/95">
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">1.</span> What is the job? (e.g. rewire, fault-find, EV charger)</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">2.</span> Postcode?</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">3.</span> How urgent? (emergency / this week / flexible)</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">4.</span> House, flat or commercial?</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">5.</span> Best time to call you back?</li>
            </ul>
          </div>
        </div>

        {/* Customer reply */}
        <div className="max-w-[92%]">
          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-faint)]">
            James · 7:49 PM
          </div>
          <div className="rounded-2xl rounded-bl-sm bg-[var(--color-surface-muted)] px-4 py-3 text-[13.5px] leading-[1.55] text-[var(--color-ink)]">
            <div>1. Consumer unit tripping, no power upstairs</div>
            <div>2. SK4 3RT</div>
            <div>3. Tomorrow morning if you can</div>
            <div>4. House, three-bed semi</div>
            <div>5. After 8pm tonight</div>
          </div>
        </div>

        {/* Parsed + logged */}
        <div className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-dashed border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-3.5 py-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span className="flex-1 text-[13px] leading-[1.45] text-[var(--color-ink)]">
            <span className="font-bold">Logged.</span> Parsed into five fields
            and dropped into the dashboard.
          </span>
          <span className="shrink-0 text-[11px] text-[var(--color-ink-faint)]">
            7:50 PM
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Lead carry-over: what the tradesperson sees in the dashboard */
/* ─────────────────────────────────────────────────────────── */

function LeadCarryOver() {
  const fields = [
    { label: "Job type", value: "Fault-find, consumer unit", filter: "Electrical" },
    { label: "Postcode", value: "SK4 3RT", filter: "Stockport" },
    { label: "Urgency", value: "Tomorrow morning", filter: "This week", urgent: true },
    { label: "Property", value: "House, three-bed semi", filter: "Residential" },
    { label: "Callback", value: "After 8pm tonight", filter: "Evening" },
  ];

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
        Straight into the dashboard
      </div>
      <h3 className="mb-1 font-[family-name:var(--font-display)] text-[20px] font-bold">
        What carries over. What you actually need.
      </h3>
      <p className="mb-6 text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
        Same five fields on every lead, parsed the same way. So the
        dashboard filters cleanly by trade, area, urgency and property.
      </p>

      {/* Lead card mock */}
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
              New lead · Missed call caught
            </div>
            <div className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[var(--color-ink)]">
              James Patterson
            </div>
          </div>
          <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-white">
            Urgent
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {fields.map((f) => (
            <div
              key={f.label}
              className="flex items-start justify-between gap-3 border-t border-[var(--color-hairline-soft)] pt-2.5 first:border-t-0 first:pt-0"
            >
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                  {f.label}
                </div>
                <div className="text-[13.5px] text-[var(--color-ink)]">
                  {f.value}
                </div>
              </div>
              <span
                className={
                  f.urgent
                    ? "shrink-0 rounded-full bg-[var(--color-accent-soft)] px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-accent-hover)]"
                    : "shrink-0 rounded-full bg-[var(--color-surface)] px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]"
                }
              >
                {f.filter}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-[var(--radius-md)] bg-[var(--color-surface-sunken)] px-4 py-3 text-[12.5px] leading-[1.55] text-[var(--color-ink-muted)]">
        <span className="font-bold text-[var(--color-ink)]">Why it matters.</span>{" "}
        Filter the dashboard for "Emergency + Electrical + Stockport" and
        this lead shows up. No trawling voicemails, no chasing what a
        vague reply meant.
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Icons                                                      */
/* ─────────────────────────────────────────────────────────── */

function CaptureIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name.includes("widget"))
    return (
      <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h6M7 16h8" /></svg>
    );
  if (name.includes("Quote assistant") || name.includes("Smart quote"))
    return (
      <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" /><path d="M12 7v2M12 12h.01" /></svg>
    );
  if (name.includes("Tracking phone"))
    return (
      <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.72 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.25-1.29a2 2 0 0 1 2.11-.45c.91.35 1.86.59 2.83.72A2 2 0 0 1 22 16.92z" /></svg>
    );
  if (name.includes("Missed-call"))
    return (
      <svg {...common}><path d="M5 5l4 4M9 5l-4 4" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.72 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.25-1.29a2 2 0 0 1 2.11-.45c.91.35 1.86.59 2.83.72A2 2 0 0 1 22 16.92z" /></svg>
    );
  return (
    <svg {...common}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
  );
}
