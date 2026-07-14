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
/*  Data                                                       */
/* ─────────────────────────────────────────────────────────── */

const AD_TYPES = [
  {
    tag: "LSA",
    name: "Local Services Ads",
    priceModel: "Pay per lead",
    body: "Google's Local Services block sits above every other search result. You only get charged when a homeowner contacts you. A call, a message, a form. If nobody bites, you pay nothing.",
    bullets: [
      "Sits above regular ads and organic results",
      "Google Guaranteed badge next to your listing",
      "Charged only per booked lead, not per click",
      "We handle vetting, licensing and dispute submission",
    ],
  },
  {
    tag: "CPC",
    name: "Google Ads (Search)",
    priceModel: "Pay per click",
    body: "The classic pay-per-click ads that sit under LSA and above the map. Best for services where LSA does not yet cover your trade or postcode, and for driving traffic to a specific landing page.",
    bullets: [
      "Targets the exact search terms homeowners type",
      "Landing page matched to the search intent",
      "Bid, keyword and negative lists tuned weekly",
      "Conversion tracking wired to a booked job, not a click",
    ],
  },
];

const CAPTURE_FEATURES = [
  {
    title: "On-site enquiry widget",
    body: "A small widget sits on every page of the new site. A homeowner types their name, number and job. It lands in the dashboard and auto-texts you inside 60 seconds.",
  },
  {
    title: "Tracking phone number",
    body: "The site shows a dedicated number that rings straight through to yours. Every call is recorded against the ad or search that drove it, so you know what paid back.",
  },
  {
    title: "Missed-call auto-text",
    body: "If a call goes to voicemail, the homeowner gets a text from your number within seconds. Sorry I missed you, quickest way to get me is here. The callback lands in the same dashboard.",
  },
  {
    title: "WhatsApp entry point",
    body: "One tap on mobile drops the homeowner into a WhatsApp thread with you, pre-filled with the job they clicked on. Threads log against the same lead record.",
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
      <section className="px-6 pb-16 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              What is included in Cure
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              The site, the ads, the phone, the dashboard.
              <br className="hidden sm:inline" />
              One fee, one process.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Sign up for the lead generation stage and we rebuild your
              website, wire up the tracking, and set the dashboard up for
              you. All included. Then the engine runs.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/book">Get my free audit</Button>
              <Button href="/pricing" variant="ghost">
                See pricing
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TOP OF GOOGLE MOCKUP ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Get seen first
              </div>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Put your business at the top of Google when homeowners search.
              </h2>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                We run two ad types side by side. LSA at the very top,
                where you pay only when a homeowner contacts you. Google
                Ads underneath, pay per click, best for the searches LSA
                does not cover. Both landing on pages built for one job:
                a booked enquiry.
              </p>
              <ul className="flex flex-col gap-3 text-[15px] leading-[1.55] text-[var(--color-ink)]">
                {[
                  "Featured in the Local Services block above every result",
                  "Google Guaranteed badge for trust",
                  "Ads matched to landing pages built by us",
                  "Every call and form tracked back to the search",
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
            <GoogleSerpMock />
          </Reveal>
        </div>
      </section>

      {/* ── LSA vs CPC ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              Two ad types, one goal
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              LSA and CPC, explained in plain English.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Most trades do not know they can run both. We do. And we
              shift spend between them based on which is paying back for
              the jobs you want more of.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {AD_TYPES.map((ad) => (
              <Reveal key={ad.tag}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[var(--color-primary)] px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-on-primary)]">
                      {ad.tag}
                    </span>
                    <span className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-canvas)] px-2.5 py-[3px] text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                      {ad.priceModel}
                    </span>
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[22px] font-bold leading-[1.2]">
                    {ad.name}
                  </h3>
                  <p className="mb-4 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {ad.body}
                  </p>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-[var(--color-hairline-soft)] pt-4">
                    {ad.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-[14px] leading-[1.5] text-[var(--color-ink)]"
                      >
                        <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mx-auto mt-8 max-w-[720px] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-6 py-4 text-center text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
              <span className="font-bold text-[var(--color-ink)]">Worth knowing.</span>{" "}
              With LSA you only pay when a homeowner actually contacts you,
              not when they click. That is why we lead with it wherever
              your trade and area qualify.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WEBSITE REBUILD ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <WebsiteMock />
          </Reveal>

          <Reveal>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Website, rebuilt when you sign up
              </div>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                A site built to turn visitors into booked jobs, not to win awards.
              </h2>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                We rebuild your website as part of Prevention, at no extra
                cost, when you commit to the lead generation stage. Fast,
                plain, mobile-first. Every page has one job: get a
                homeowner into the widget or onto the phone.
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

      {/* ── DASHBOARD ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              The dashboard
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Every enquiry, in one place. Laptop, phone, both.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Live on your desktop for quoting, live on your phone when
              you are on the tools. Same data, same lead, same status.
            </p>
          </Reveal>

          <Reveal>
            <div className="mx-auto mb-12 max-w-[1000px]">
              <DashboardMock />
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

      {/* ── LEAD CAPTURE ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <Reveal className="mb-12 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            Lead capture
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Nothing lands in a black hole.
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
            Widget, tracking number, missed-call catcher, WhatsApp. Every
            path a homeowner takes to reach you feeds the same dashboard.
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
          <div className="mx-auto mt-10 max-w-[840px]">
            <MissedCallFlow />
          </div>
        </Reveal>
      </section>

      {/* ── ROLES ROLLUP ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What you would normally hire five people for.
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
                  work: "Set up and tune LSA and CPC campaigns weekly",
                },
                {
                  role: "SEO consultant",
                  work: "Build service and area pages that rank in your area",
                },
                {
                  role: "CRM setup",
                  work: "Configure the dashboard, tracking and lead pipeline",
                },
                {
                  role: "Call answering service",
                  work: "Pick up missed and out-of-hours calls, log the lead",
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
  return (
    <div className="mx-auto w-full max-w-[520px]">
      <div className="rounded-[16px] border border-[var(--color-hairline)] bg-white shadow-[var(--shadow-2)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-[var(--color-hairline-soft)] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-full bg-[#f1f3f4] px-3 py-1.5">
            <span className="text-[11px] text-[#5f6368]">google.com</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="border-b border-[var(--color-hairline-soft)] px-5 py-4">
          <div className="flex items-center gap-3 rounded-full border border-[#dfe1e5] px-4 py-2">
            <span className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[#4285F4]">G</span>
            <span className="text-[13px] text-[#202124]">
              electrician near me
            </span>
          </div>
        </div>

        {/* LSA block */}
        <div className="px-5 py-4">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f6368]">
            <span>Local Services</span>
            <span className="rounded-sm bg-[#e8f0fe] px-1.5 py-[1px] text-[9px] text-[#1a73e8]">
              Ad
            </span>
          </div>
          <div className="rounded-[10px] border-2 border-[var(--color-accent)] bg-[#fff8f2] p-3">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="font-[family-name:var(--font-display)] text-[14px] font-bold text-[#202124]">
                Your Trade Business
              </span>
              <span className="flex items-center rounded-sm bg-[#0f9d58] px-1.5 py-[1px] text-[9px] font-bold text-white">
                Google Guaranteed
              </span>
            </div>
            <div className="mb-1 text-[11px] text-[#5f6368]">
              4.9 rating, 128 Google reviews
            </div>
            <div className="text-[11px] text-[#5f6368]">
              Emergency callouts, rewires, EV chargers
            </div>
            <div className="mt-2 inline-flex rounded-sm bg-[#e8f0fe] px-2 py-[3px] text-[10px] font-semibold text-[#1a73e8]">
              You appear here
            </div>
          </div>

          {/* Sponsored (CPC) */}
          <div className="mt-4 space-y-3">
            <div className="rounded-[8px] border border-[#dfe1e5] p-3">
              <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold text-[#5f6368]">
                <span className="rounded-sm bg-[#f1f3f4] px-1.5 py-[1px] text-[9px]">
                  Sponsored
                </span>
                yourbusiness.co.uk
              </div>
              <div className="text-[13px] font-medium text-[#1a0dab]">
                Local Electrician, Free Quote Today
              </div>
              <div className="mt-1 text-[11px] text-[#4d5156]">
                24/7 callouts. Fully insured. Book online in 30 seconds.
              </div>
            </div>

            <div className="opacity-60">
              <div className="text-[13px] font-medium text-[#1a0dab]">
                Checkatrade, Electricians
              </div>
              <div className="text-[11px] text-[#4d5156]">
                Directory listing.
              </div>
            </div>
            <div className="opacity-40">
              <div className="text-[13px] font-medium text-[#1a0dab]">
                Trustatrader, Electricians in your area
              </div>
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
/*  Dashboard mock                                             */
/* ─────────────────────────────────────────────────────────── */

function DashboardMock() {
  const rows = [
    { name: "S. Patel", area: "SW11", src: "LSA", job: "Fuse box replacement", val: "£420", stage: "Booked", stageTone: "success" },
    { name: "M. Dawson", area: "SE22", src: "CPC", job: "EV charger install", val: "£1,180", stage: "Quoting", stageTone: "accent" },
    { name: "J. Reid", area: "SW15", src: "Missed call", job: "Callback requested", val: "n/a", stage: "New", stageTone: "primary" },
    { name: "A. Yusuf", area: "SE1", src: "SEO", job: "Full rewire quote", val: "£3,200", stage: "Quoting", stageTone: "accent" },
    { name: "R. Bell", area: "N16", src: "WhatsApp", job: "Consumer unit swap", val: "£680", stage: "Booked", stageTone: "success" },
  ];

  const stageColour = (tone: string) => {
    if (tone === "success") return "bg-[var(--color-success-soft)] text-[var(--color-success)]";
    if (tone === "accent") return "bg-[var(--color-accent-soft)] text-[var(--color-accent-hover)]";
    return "bg-[var(--color-primary)]/10 text-[var(--color-primary)]";
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
      {/* Laptop */}
      <div>
        <div className="rounded-t-[14px] border border-[var(--color-hairline)] bg-[#0e1420] p-2 shadow-[var(--shadow-2)]">
          <div className="overflow-hidden rounded-t-[8px] bg-[var(--color-surface)]">
            <div className="flex items-center gap-2 border-b border-[var(--color-hairline-soft)] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-2 flex flex-1 items-center gap-2 rounded-full bg-[var(--color-surface-muted)] px-3 py-1">
                <span className="text-[10px] text-[var(--color-ink-muted)]">
                  app.tandemm.co.uk / leads
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[140px_1fr]">
              <div className="border-r border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] p-3">
                <div className="mb-3 flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded bg-[var(--color-primary)]" />
                  <span className="font-[family-name:var(--font-display)] text-[10px] font-extrabold">
                    Tandemm
                  </span>
                </div>
                {["Leads", "Calls", "Ads", "Website", "Reports"].map((it, i) => (
                  <div
                    key={it}
                    className={`mb-1 rounded-md px-2 py-1 text-[10px] font-semibold ${
                      i === 0
                        ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                        : "text-[var(--color-ink-muted)]"
                    }`}
                  >
                    {it}
                  </div>
                ))}
              </div>

              <div className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[13px] font-bold">
                      Leads
                    </div>
                    <div className="text-[9px] text-[var(--color-ink-muted)]">
                      5 open, 2 booked this week
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {["All", "New", "Quoting", "Booked"].map((f, i) => (
                      <div
                        key={f}
                        className={`rounded-md px-2 py-[3px] text-[9px] font-semibold ${
                          i === 0
                            ? "bg-[var(--color-ink)] text-white"
                            : "border border-[var(--color-hairline)] text-[var(--color-ink-muted)]"
                        }`}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-[var(--color-hairline-soft)]">
                  <div className="grid grid-cols-[1.2fr_0.7fr_1.4fr_0.7fr_0.8fr] gap-2 border-b border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                    <span>Lead</span>
                    <span>Source</span>
                    <span>Job</span>
                    <span>Value</span>
                    <span>Stage</span>
                  </div>
                  {rows.map((r, i) => (
                    <div
                      key={r.name}
                      className={`grid grid-cols-[1.2fr_0.7fr_1.4fr_0.7fr_0.8fr] items-center gap-2 px-3 py-2 text-[10px] text-[var(--color-ink)] ${
                        i > 0 ? "border-t border-[var(--color-hairline-soft)]" : ""
                      }`}
                    >
                      <span className="font-semibold">
                        {r.name} · {r.area}
                      </span>
                      <span className="text-[var(--color-ink-muted)]">{r.src}</span>
                      <span className="truncate text-[var(--color-ink-muted)]">
                        {r.job}
                      </span>
                      <span className="font-semibold">{r.val}</span>
                      <span>
                        <span
                          className={`inline-block rounded-full px-2 py-[1px] text-[8px] font-bold ${stageColour(r.stageTone)}`}
                        >
                          {r.stage}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-2 w-[95%] rounded-b-[10px] bg-[#0e1420]" />
        <div className="mx-auto h-1 w-[70%] rounded-b-full bg-[#0e1420]/40" />
      </div>

      {/* Phone */}
      <div className="mx-auto w-full max-w-[220px]">
        <div className="relative rounded-[32px] border border-[var(--color-hairline)] bg-[#0e1420] p-2 shadow-[var(--shadow-2)]">
          <div className="relative overflow-hidden rounded-[26px] bg-[var(--color-canvas)]">
            <div className="flex items-center justify-between px-4 pt-2 text-[8px] font-semibold text-[var(--color-ink-muted)]">
              <span>09:42</span>
              <div className="absolute left-1/2 top-[8px] h-3 w-12 -translate-x-1/2 rounded-b-xl bg-[#0e1420]" />
              <span>100%</span>
            </div>

            <div className="px-3 pb-3 pt-2">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-[family-name:var(--font-display)] text-[12px] font-bold">
                  Today
                </span>
                <span className="rounded-full bg-[var(--color-primary)] px-2 py-[1px] text-[8px] font-bold text-white">
                  3 new
                </span>
              </div>

              <div className="mb-2 space-y-1.5">
                {rows.slice(0, 3).map((r) => (
                  <div
                    key={r.name}
                    className="rounded-md border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] p-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold">
                        {r.name}
                      </span>
                      <span
                        className={`rounded-full px-1.5 py-[1px] text-[7px] font-bold ${stageColour(r.stageTone)}`}
                      >
                        {r.stage}
                      </span>
                    </div>
                    <div className="mt-0.5 text-[9px] text-[var(--color-ink-muted)]">
                      {r.src} · {r.job}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-md bg-[var(--color-primary)] p-2 text-white">
                <div className="text-[8px] uppercase tracking-[0.06em] text-white/60">
                  Booked this week
                </div>
                <div className="mt-0.5 flex items-baseline justify-between">
                  <span className="font-[family-name:var(--font-display)] text-[16px] font-extrabold">
                    6 jobs
                  </span>
                  <span className="text-[9px] font-semibold text-white/80">
                    £4,320
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-2">
              <div className="mx-auto h-1 w-16 rounded-full bg-[var(--color-hairline)]" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-[10px] text-[var(--color-ink-faint)]">
          Same data on your phone.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Missed-call auto-text flow                                 */
/* ─────────────────────────────────────────────────────────── */

function MissedCallFlow() {
  const steps = [
    { t: "09:42", label: "Homeowner calls", desc: "You are on the tools." },
    { t: "09:42", label: "Auto-text sent", desc: "Sorry I missed you, quickest way to reach me…" },
    { t: "09:43", label: "Reply received", desc: "Need a quote for a rewire." },
    { t: "09:43", label: "Lead in dashboard", desc: "Tagged missed call caught, assigned to you." },
  ];
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
        Missed-call auto-text
      </div>
      <h3 className="mb-1 font-[family-name:var(--font-display)] text-[20px] font-bold">
        From missed call to booked quote, in under a minute.
      </h3>
      <p className="mb-6 text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
        You can not answer every call. The system does the follow-up for you.
      </p>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-[var(--color-hairline)] sm:block" />
        {steps.map((s, i) => (
          <div
            key={i}
            className="relative z-10 flex flex-col items-start rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] p-4"
          >
            <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-[11px] font-bold text-white">
              {i + 1}
            </div>
            <div className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
              {s.t}
            </div>
            <div className="font-[family-name:var(--font-display)] text-[13px] font-bold text-[var(--color-ink)]">
              {s.label}
            </div>
            <div className="mt-1 text-[12px] leading-[1.45] text-[var(--color-ink-muted)]">
              {s.desc}
            </div>
          </div>
        ))}
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
