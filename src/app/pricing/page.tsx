"use client";

import { CSSProperties, useState } from "react";
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
/*  Slider maths                                               */
/* ─────────────────────────────────────────────────────────── */

const LEADS_MIN = 15;
const LEADS_MAX = 125;
const LEADS_STEP = 5;
const ENQUIRY_RATE = 0.6;

// Piecewise cost-per-lead anchors. Real Google Ads accounts don't scale
// linearly in a single service area — CPL rises as spend goes up because
// local demand is finite. We linearly interpolate CPL between anchors,
// then multiply by lead volume to get monthly spend.
const CPL_ANCHORS: readonly (readonly [leads: number, cpl: number])[] = [
  [15, 21],
  [50, 27],
  [90, 34],
  [125, 40],
] as const;

function cplForLeads(leads: number): number {
  for (let i = 0; i < CPL_ANCHORS.length - 1; i++) {
    const [l0, c0] = CPL_ANCHORS[i];
    const [l1, c1] = CPL_ANCHORS[i + 1];
    if (leads >= l0 && leads <= l1) {
      const t = (leads - l0) / (l1 - l0);
      return c0 + t * (c1 - c0);
    }
  }
  return CPL_ANCHORS[CPL_ANCHORS.length - 1][1];
}

// Range band widens with volume: bigger campaigns have more variance.
function bandForLeads(leads: number): number {
  if (leads <= 50) return 0.16;
  if (leads >= 90) return 0.2;
  const t = (leads - 50) / (90 - 50);
  return 0.16 + t * (0.2 - 0.16);
}

function priceForLeads(leads: number) {
  const cpl = cplForLeads(leads);
  const rawSpend = leads * cpl;
  const adSpend = Math.round(rawSpend / 5) * 5;
  const band = bandForLeads(leads);
  return {
    adSpend,
    leadRangeLow: Math.round(leads * (1 - band)),
    leadRangeHigh: Math.round(leads * (1 + band)),
    enquiries: Math.round(leads * ENQUIRY_RATE),
  };
}

/* ─────────────────────────────────────────────────────────── */
/*  What's included (shared across all tiers)                  */
/* ─────────────────────────────────────────────────────────── */

const INCLUDED = [
  {
    group: "Website",
    items: [
      "Full website rebuild (yours to keep)",
      "Design changes made for you at any time",
      "Hosting, SSL certificate and domain",
      "Mobile-first, sub-2s load times",
      "Above-the-fold enquiry widget on every page",
      "Landing pages tuned to each ad campaign",
      "GDPR-compliant cookie and privacy handling",
    ],
  },
  {
    group: "Google Ads",
    items: [
      "Local Services Ads (LSA), pay per lead, not per click",
      "Google Ads (CPC) for the searches LSA does not cover",
      "Keyword and location research",
      "Ad copy, extensions, and negative lists",
      "A/B testing on ads and landing pages",
    ],
  },
  {
    group: "SEO",
    items: [
      "New service pages targeting local search terms",
      "New area pages for each postcode you cover",
      "Google Business Profile setup and management",
      "Local citations and directory listings",
      "Monthly on-page and technical SEO work",
    ],
  },
  {
    group: "Lead capture",
    items: [
      "Dedicated tracking phone number (rings your line)",
      "Call recording and source attribution",
      "Missed-call auto-text within 60 seconds",
      "On-site enquiry widget with SMS notification",
      "WhatsApp entry point and thread logging",
      "Web-form-to-SMS on every enquiry",
    ],
  },
  {
    group: "Dashboard",
    items: [
      "One inbox for calls, forms, WhatsApp and missed calls",
      "Lead pipeline (New, Quoting, Booked, Dead)",
      "Notes, callbacks and file storage per lead",
      "Live on desktop, live on your phone",
      "Multi-user access for your team",
      "Data export and backup",
    ],
  },
  {
    group: "Reporting",
    items: [
      "Every call and form tied back to source",
      "Cost per booked job, per channel",
      "Return on ad spend (ROAS) reporting",
      "Monthly review call and written report",
      "Full transparency on Google Ads spend",
    ],
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  FAQ                                                        */
/* ─────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "What am I actually paying for?",
    a: "£197 a month gets you the website, the SEO, the dashboard, the lead tracking, the missed-call catcher and the monthly reporting. If you want to add paid ads, we manage those too for a separate management fee on top of your ad spend. The audit is free before you sign up.",
  },
  {
    q: "Is the website rebuild included?",
    a: "Yes. When you are on the monthly plan we rebuild your site, wire up the tracking number and widget, and set up your dashboard. It is part of the plan, not billed on top.",
  },
  {
    q: "How does the ad spend work?",
    a: "Ad spend is separate from the £197 monthly plan. You set a budget, that goes to Google, and we charge a management fee to run the campaigns. You see exactly what was spent, on which campaigns, on which days in the dashboard. Any unspent budget rolls into the following month.",
  },
  {
    q: "How is the price actually decided?",
    a: "The monthly plan is £197, that is the same for everyone. If you add paid ads, you pick the lead volume you want and the ad spend follows. Scale up when you are ready for more work, scale back down if you need to.",
  },
  {
    q: "What is the difference between LSA and CPC ads?",
    a: "LSA (Local Services Ads) sits at the very top of Google and you only pay when a homeowner actually contacts you, not per click. CPC (regular Google Ads) charges every time someone clicks. We run both, and shift spend to whichever is paying back best for your trade and area.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "No. The monthly plan runs month to month. Cancel whenever it stops working for you.",
  },
  {
    q: "Will you work with my competitors too?",
    a: "Fair question, and a common worry. We're not in the business of building two near-identical campaigns to fight each other over the same postcodes, it burns everyone's budget and helps nobody. If taking you on would clash with work we already do nearby, we'll tell you straight before you commit anything.",
  },
  {
    q: "How quickly will I see leads?",
    a: "Most clients see the first LSA leads within 2 to 4 weeks of the site going live. Google Ads typically kick in inside the first month. SEO compounds, so month three beats month one and month six beats month three.",
  },
  {
    q: "Do I own the website you build?",
    a: "Yes. The site is yours. If you leave, you take the website, the domain and the content with you. We do not hold your business hostage.",
  },
  {
    q: "What happens if I miss a call?",
    a: "The tracking number redirects to your mobile. If you don't pick up, the system texts the homeowner from your number instantly, takes them through a quick quoting flow, then lands them in the dashboard as a lead, tagged missed call caught.",
  },
  {
    q: "What if my trade or area is not a fit?",
    a: "We say so before you spend anything. The free audit tells us whether there is enough search demand in your postcode to make it work. If it will not pay back, we tell you.",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Component                                                  */
/* ─────────────────────────────────────────────────────────── */

export default function PricingPage() {
  const [openTier, setOpenTier] = useState<string | null>("Website");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="pricing" />

      {/* ── HERO ── */}
      <section className="px-6 pb-14 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              One monthly fee.
              <br className="hidden sm:inline" />
              The whole system, running for you.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              £197 a month covers the website, SEO, dashboard, lead
              tracking and missed-call capture. Add paid ads when you
              are ready. The audit is free before you commit to anything.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[380px_auto_1fr]">
          <Reveal>
            <MonthlyPlanCard />
          </Reveal>

          {/* Bridge: signals the two cards are base + optional add-on */}
          <div className="relative flex items-center justify-center py-2 lg:py-0">
            <div className="absolute inset-x-0 top-1/2 mx-auto hidden h-[2px] w-[70%] -translate-y-1/2 bg-[#C0C2B9] lg:block lg:h-full lg:w-[2px] lg:top-0 lg:translate-y-0" />
            <div className="relative z-10 flex flex-col items-center gap-1 rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-2 shadow-[var(--shadow-1)]">
              <span className="font-[family-name:var(--font-display)] text-[20px] font-extrabold leading-none text-[var(--color-primary)]">
                +
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                Add
              </span>
            </div>
          </div>

          <Reveal>
            <PricingSlider />
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto mt-6 max-w-[640px] text-center text-[13px] leading-[1.6] text-[var(--color-ink-muted)]">
            <span className="font-bold text-[var(--color-ink)]">Base plan on the left</span>{" "}
            runs the system.{" "}
            <span className="font-bold text-[var(--color-ink)]">Paid ads on the right</span>{" "}
            are optional. Bolt them on when you&rsquo;re ready for more work.
          </p>
        </Reveal>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What is in every plan
            </h2>
            <p className="mx-auto mt-3 max-w-[540px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Same features, every tier. Tap a section to see the detail.
            </p>
          </Reveal>

          <div className="flex flex-col gap-3">
            {INCLUDED.map((group) => {
              const open = openTier === group.group;
              return (
                <div
                  key={group.group}
                  className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenTier(open ? null : group.group)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-[13px] font-bold text-white">
                        {group.items.length}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[var(--color-ink)]">
                        {group.group}
                      </span>
                    </div>
                    <span className="text-[22px] text-[var(--color-ink-muted)]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <ul className="grid grid-cols-1 gap-2 border-t border-[var(--color-hairline-soft)] px-6 py-5 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[14px] leading-[1.5] text-[var(--color-ink)]"
                          >
                            <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCY ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                What you are getting
              </div>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                One fee. Everything to get found and win work.
              </h2>
              <p className="mb-4 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Most agencies charge separately for the site, the SEO, the
                dashboard, the tracking and the missed-call system. We
                bundle it into one monthly fee.
              </p>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                You get the full system from day one: website, SEO, lead
                capture, dashboard and reporting. If you want to add paid
                ads later, we manage those too for a separate fee.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <SpendBreakdown />
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Pricing questions, answered
            </h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold text-[var(--color-ink)] transition-colors"
                  >
                    {item.q}
                    <span className="text-[22px] text-[var(--color-ink-muted)]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] sm:px-14">
            <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Free audit first. Pricing after. In that order.
            </h2>
            <p className="mx-auto mt-4 max-w-[500px] text-[17px] leading-[1.55] text-white/70">
              We look at your site, your ads and your rankings. If the
              numbers will not work in your area, we say so before you
              sign anything.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get my free audit
              </Button>
              <Button href="/features" variant="secondary">
                See features
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
/*  Monthly plan card                                          */
/* ─────────────────────────────────────────────────────────── */

const PLAN_FEATURES = [
  "Website built to convert, managed for you",
  "SEO to get found on Google",
  "Every enquiry (phone, site, socials) captured and tracked",
  "One app for your whole pipeline",
  "Missed calls caught and quoted automatically",
  "Monthly reports showing where every lead came from",
];

function MonthlyPlanCard() {
  return (
    <div className="relative h-full rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-1)]">
      <div className="absolute -top-3 left-8">
        <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
          Base plan
        </span>
      </div>
      <div className="mb-1 text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
        Monthly plan
      </div>
      <div className="mb-1 font-[family-name:var(--font-display)] text-[48px] font-extrabold leading-none tracking-tight text-[var(--color-ink)]">
        £197
        <span className="ml-1 text-[16px] font-semibold text-[var(--color-ink-muted)]">
          /mo
        </span>
      </div>
      <p className="mb-6 text-[14px] text-[var(--color-ink-faint)]">
        + VAT
      </p>

      <p className="mb-6 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
        Everything you need to get found online and capture every enquiry.
      </p>

      <ul className="mb-8 space-y-3">
        {PLAN_FEATURES.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-[var(--color-ink)]"
          >
            <svg
              className="mt-[3px] h-4 w-4 shrink-0 text-[var(--color-primary)]"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8l3.5 3.5L13 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Button href="/book" className="w-full text-center">
        Get started
      </Button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Pricing slider                                             */
/* ─────────────────────────────────────────────────────────── */

function PricingSlider() {
  const [leads, setLeads] = useState(25);
  const [jobValueInput, setJobValueInput] = useState("");
  const { adSpend, leadRangeLow, leadRangeHigh, enquiries } =
    priceForLeads(leads);
  const pct = ((leads - LEADS_MIN) / (LEADS_MAX - LEADS_MIN)) * 100;
  const jobValue = Number(jobValueInput.replace(/[^0-9]/g, ""));
  const projectedRevenue = jobValue > 0 ? enquiries * jobValue : 0;
  const atMax = leads >= LEADS_MAX;

  return (
    <div className="relative h-full rounded-[var(--radius-xl)] border-2 border-dashed border-[var(--color-accent)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-2)] sm:p-10">
      <div className="absolute -top-3 left-8 flex items-center gap-2">
        <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
          Optional add-on
        </span>
        <span className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
          Add when ready
        </span>
      </div>

      <div className="mb-5 mt-1">
        <div className="font-[family-name:var(--font-display)] text-[22px] font-extrabold leading-tight tracking-[-0.01em] text-[var(--color-ink)]">
          Add paid ads when you&rsquo;re ready.
        </div>
        <p className="mt-1 text-[13.5px] leading-[1.5] text-[var(--color-ink-muted)]">
          Drag the slider to see the spend, leads and return. Nothing here
          is included in the £197 base plan &mdash; this stacks on top.
        </p>
      </div>

      {/* Leads label + count */}
      <div className="mb-1 flex items-baseline justify-between">
        <div className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
          Leads per month
        </div>
        <div className="text-[13px] text-[var(--color-ink-faint)]">
          Estimate ~{leadRangeLow} to {leadRangeHigh}
        </div>
      </div>
      <div className="mb-6 font-[family-name:var(--font-display)] text-[64px] font-extrabold leading-none tracking-tight text-[var(--color-ink)]">
        {leads}
        <span className="ml-3 align-middle text-[16px] font-semibold text-[var(--color-ink-muted)]">
          leads / mo
        </span>
      </div>

      {/* Slider */}
      <div className="relative mb-3">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[var(--color-surface-sunken)]" />
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[var(--color-primary)] transition-[width] duration-100"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={LEADS_MIN}
          max={LEADS_MAX}
          step={LEADS_STEP}
          value={leads}
          onChange={(e) => setLeads(Number(e.target.value))}
          aria-label="Leads per month"
          className="relative z-10 h-8 w-full cursor-pointer appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-7
            [&::-webkit-slider-thumb]:w-7
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[var(--color-surface)]
            [&::-webkit-slider-thumb]:border-[3px]
            [&::-webkit-slider-thumb]:border-[var(--color-primary)]
            [&::-webkit-slider-thumb]:shadow-[var(--shadow-1)]
            [&::-webkit-slider-thumb]:cursor-grab
            [&::-webkit-slider-thumb]:active:cursor-grabbing
            [&::-moz-range-thumb]:h-7
            [&::-moz-range-thumb]:w-7
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-[var(--color-surface)]
            [&::-moz-range-thumb]:border-[3px]
            [&::-moz-range-thumb]:border-[var(--color-primary)]
            [&::-moz-range-thumb]:shadow-[var(--shadow-1)]
            [&::-moz-range-thumb]:cursor-grab"
        />
      </div>

      {/* Tick labels */}
      <div className="mb-8 flex justify-between text-[11px] font-semibold text-[var(--color-ink-faint)]">
        <span>{LEADS_MIN}</span>
        <span>50</span>
        <span>90</span>
        <span>{LEADS_MAX}+</span>
      </div>

      {/* Ad spend */}
      {atMax ? (
        <div className="mb-6 rounded-[var(--radius-lg)] border border-[var(--color-accent)] bg-[var(--color-accent-soft)] p-5">
          <div className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent-hover)]">
            Past this point, talk to us
          </div>
          <p className="text-[14px] leading-[1.55] text-[var(--color-ink)]">
            Scaling past ~125 leads a month in one service area usually
            means running multiple campaigns or expanding your patch.
            The numbers change enough that a single slider stops being
            honest &mdash; better to talk it through.
          </p>
        </div>
      ) : (
        <div className="mb-6 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] p-5">
          <div className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
            Monthly ad spend
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-display)] text-[42px] font-extrabold leading-none tracking-tight text-[var(--color-ink)]">
              £{adSpend.toLocaleString("en-GB")}
            </span>
            <span className="text-[15px] font-semibold text-[var(--color-ink-muted)]">
              /mo
            </span>
          </div>
          <div className="mt-2 text-[13px] text-[var(--color-ink-muted)]">
            Goes straight to Google. Plus management fee.
          </div>
          <p className="mt-3 border-t border-[var(--color-hairline-soft)] pt-3 text-[11px] leading-[1.5] text-[var(--color-ink-faint)]">
            Estimates based on typical UK trades Google Ads performance.
            Actual results depend on your service area and local
            competition.
          </p>
        </div>
      )}

      {/* Job value → revenue */}
      <div className="mb-6 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] p-5">
        <label
          htmlFor="job-value"
          className="mb-1 block text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]"
        >
          Average job value
          <span className="ml-2 text-[11px] font-medium normal-case tracking-normal text-[var(--color-ink-faint)]">
            optional
          </span>
        </label>
        <p className="mb-3 text-[13px] text-[var(--color-ink-muted)]">
          Add yours to see how your ad spend converts to revenue.
        </p>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[18px] font-semibold text-[var(--color-ink-muted)]">
            £
          </span>
          <input
            id="job-value"
            type="text"
            inputMode="numeric"
            value={jobValueInput}
            onChange={(e) => setJobValueInput(e.target.value)}
            placeholder="450"
            className="h-12 w-full rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-surface)] pl-9 pr-4 text-[16px] font-semibold text-[var(--color-ink)] outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        {jobValue > 0 && (
          <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] p-4">
            <div className="mb-2 text-[12px] leading-[1.5] text-[var(--color-ink-muted)]">
              ~{enquiries} enquiries × £
              {jobValue.toLocaleString("en-GB")} avg
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--color-ink-muted)]">
                Est. revenue
              </span>
              <span className="font-[family-name:var(--font-display)] text-[32px] font-extrabold leading-none tracking-tight text-[var(--color-ink)]">
                £{projectedRevenue.toLocaleString("en-GB")}
                <span className="ml-1 text-[13px] font-semibold text-[var(--color-ink-muted)]">
                  /mo
                </span>
              </span>
            </div>
            {projectedRevenue > adSpend && (
              <div className="mt-2 flex items-baseline justify-between gap-3 border-t border-[var(--color-hairline-soft)] pt-2">
                <span className="text-[12px] text-[var(--color-ink-muted)]">
                  Return on £{adSpend.toLocaleString("en-GB")} ad spend
                </span>
                <span className="text-[15px] font-bold text-[var(--color-accent-hover)]">
                  {Math.round(projectedRevenue / adSpend)}x
                </span>
              </div>
            )}
            <p className="mt-3 text-[11px] leading-[1.5] text-[var(--color-ink-faint)]">
              Assumes ~{Math.round(ENQUIRY_RATE * 100)}% of leads turn into
              enquiries. Rough guide, not a guarantee.
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <Button href="/book" className="w-full text-center">
        {atMax ? "Let's talk about scaling" : "Get my free audit"}
      </Button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Spend breakdown card                                       */
/* ─────────────────────────────────────────────────────────── */

function SpendBreakdown() {
  const value = [
    { label: "Website build and ongoing changes", worth: "£1,000+" },
    { label: "SEO and content", worth: "£500+" },
    { label: "Dashboard, tracking and CRM", worth: "£300+" },
    { label: "Missed-call capture and quote assistant", worth: "£400+" },
    { label: "Monthly reporting and review calls", worth: "£200+" },
  ];

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
        What £197/mo covers
      </div>
      <div className="mb-5 text-sm text-[var(--color-ink-faint)]">
        One fee, everything in
      </div>

      <div className="space-y-1.5">
        {value.map((v) => (
          <div
            key={v.label}
            className="flex items-center justify-between gap-3 text-[13.5px]"
          >
            <span className="flex items-start gap-2 text-[var(--color-ink)]">
              <span className="mt-[7px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
              {v.label}
            </span>
            <span className="shrink-0 text-[var(--color-ink-faint)] line-through">
              {v.worth}
            </span>
          </div>
        ))}
      </div>

      <div className="my-4 h-px bg-[var(--color-hairline)]" />

      <div className="flex items-center justify-between">
        <div>
          <div className="text-[13px] text-[var(--color-ink-muted)]">
            Bought separately
          </div>
          <div className="font-[family-name:var(--font-display)] text-[20px] font-extrabold text-[var(--color-ink)] line-through decoration-[var(--color-ink-faint)]">
            £2,400+/mo
          </div>
        </div>
        <div className="text-right">
          <div className="text-[13px] text-[var(--color-ink-muted)]">
            You pay
          </div>
          <div className="font-[family-name:var(--font-display)] text-[24px] font-extrabold text-[var(--color-primary)]">
            £197/mo
          </div>
        </div>
      </div>
    </div>
  );
}
