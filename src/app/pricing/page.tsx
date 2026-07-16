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
const PRICE_PER_LEAD = 40;
const BOOKING_RATE = 0.4;

function priceForLeads(leads: number) {
  const monthly = leads * PRICE_PER_LEAD;
  return {
    monthly,
    adSpend: Math.round(monthly / 2),
    leadRangeLow: Math.round(leads * 0.85),
    leadRangeHigh: Math.round(leads * 1.15),
    bookedJobs: Math.round(leads * BOOKING_RATE),
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
      "Full transparency on Google Ads spend, no markup",
    ],
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  FAQ                                                        */
/* ─────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "What am I actually paying for?",
    a: "One monthly fee, everything in. That covers your ad spend, the ads managed weekly, SEO built out monthly, the dashboard, the tracking, and the missed-call catcher. Nothing is bolted on the top. The audit and the website rebuild are free (see below).",
  },
  {
    q: "How does the free website rebuild work?",
    a: "You commit to a three month minimum on Cure. In return, we rebuild the site, wire up the tracking number and widget, and set up your dashboard, at no extra cost. That is what protects us from building a site for someone who is not serious about ads.",
  },
  {
    q: "How does the ad spend work?",
    a: "It is included in your fee, and it is exactly half of it. That half goes straight to Google, with no markup. You see exactly what was spent, on which campaigns, on which days. Any unspent budget rolls into the following month.",
  },
  {
    q: "How is the price actually decided?",
    a: "Pick the leads you want and the price follows. Roughly £40 per lead all in, half of that is ad spend at cost. Slide up when you're ready for more work, slide back down if you need to. No jumping between tiers, no renegotiation.",
  },
  {
    q: "What is the difference between LSA and CPC ads?",
    a: "LSA (Local Services Ads) sits at the very top of Google and you only pay when a homeowner actually contacts you, not per click. CPC (regular Google Ads) charges every time someone clicks. We run both, and shift spend to whichever is paying back best for your trade and area.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "Three month minimum on Cure (which is the runway for the ads to actually pay back and for the free rebuild to make sense on both sides). After that, one month's notice, cancel any time.",
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
    a: "Yes. The site is yours. If you leave after the three month term, you take the website, the domain and the content with you. We do not hold your business hostage.",
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
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              Cure pricing
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Free audit. Free rebuild.
              <br className="hidden sm:inline" />
              Then one fee, everything in.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              You pay when the lead generation starts. One monthly fee
              covers your ad spend, the ads management, the SEO, the
              dashboard and the missed-call capture. Nothing bolted on the top.
              Three month minimum, one month notice after that.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Free audit, no card",
            "Free website rebuild when you sign up",
            "Three month minimum, then one month notice",
            "Ad spend included, no markup",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-[16px] py-2 text-[13px] font-medium text-[var(--color-ink)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING SLIDER ── */}
      <section className="mx-auto max-w-[860px] px-6 pb-16">
        <Reveal>
          <PricingSlider />
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[680px] text-center text-[14px] leading-[1.55] text-[var(--color-ink-muted)]">
            Same system, same features, same setup at every level. The
            slider is the only thing that changes: how many leads you
            want, how much ad spend is working for you.
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
                Where your money goes
              </div>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Ad spend included. No markup, ever.
              </h2>
              <p className="mb-4 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Some agencies bolt ad spend on top, then quietly pad it.
                We do the opposite.
              </p>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Exactly half your fee is ad spend, and it goes straight to
                Google. You see it in the dashboard, every pound, every
                campaign, every day. Any unspent budget rolls to next
                month. Cancel and the Google account is yours.
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
/*  Pricing slider                                             */
/* ─────────────────────────────────────────────────────────── */

function PricingSlider() {
  const [leads, setLeads] = useState(25);
  const [jobValueInput, setJobValueInput] = useState("");
  const { monthly, adSpend, leadRangeLow, leadRangeHigh, bookedJobs } =
    priceForLeads(leads);
  const pct = ((leads - LEADS_MIN) / (LEADS_MAX - LEADS_MIN)) * 100;
  const jobValue = Number(jobValueInput.replace(/[^0-9]/g, ""));
  const projectedRevenue = jobValue > 0 ? bookedJobs * jobValue : 0;
  const projectedProfit = projectedRevenue - monthly;

  return (
    <div className="relative rounded-[var(--radius-xl)] border border-[var(--color-primary)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-2)] sm:p-10">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
          Build your plan
        </span>
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

      {/* Price */}
      <div className="mb-6 rounded-[var(--radius-lg)] bg-[var(--color-primary)] p-6 text-white">
        <div className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-white/70">
          You pay
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-[52px] font-extrabold leading-none tracking-tight">
            £{monthly.toLocaleString("en-GB")}
          </span>
          <span className="text-[15px] font-semibold text-white/70">
            /mo + VAT
          </span>
        </div>
        <div className="mt-3 text-[13px] text-white/80">
          £{adSpend.toLocaleString("en-GB")} ad spend included, at cost.
        </div>
      </div>

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
          Add yours to see how this converts to money made.
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
              ~{bookedJobs} booked jobs × £
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
            {projectedProfit > 0 && (
              <div className="mt-2 flex items-baseline justify-between gap-3 border-t border-[var(--color-hairline-soft)] pt-2">
                <span className="text-[12px] text-[var(--color-ink-muted)]">
                  After the £{monthly.toLocaleString("en-GB")} fee
                </span>
                <span className="text-[15px] font-bold text-[var(--color-accent-hover)]">
                  £{projectedProfit.toLocaleString("en-GB")}/mo
                </span>
              </div>
            )}
            <p className="mt-3 text-[11px] leading-[1.5] text-[var(--color-ink-faint)]">
              Assumes ~{Math.round(BOOKING_RATE * 100)}% of leads convert to
              booked jobs. Rough guide, not a guarantee.
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <Button href="/book" className="w-full text-center">
        Get my free audit
      </Button>
      <p className="mt-3 text-center text-[12px] text-[var(--color-ink-faint)]">
        Free audit first. No card. If your postcode won&rsquo;t pay back,
        we tell you.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Spend breakdown card                                       */
/* ─────────────────────────────────────────────────────────── */

function SpendBreakdown() {
  const value = [
    { label: "Website build and ongoing changes", worth: "£1,000+" },
    { label: "Google Ads management", worth: "£600+" },
    { label: "SEO and content", worth: "£500+" },
    { label: "Dashboard, tracking and CRM", worth: "£300+" },
    { label: "Missed-call capture and quote assistant", worth: "£400+" },
  ];

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
        Sample monthly bill
      </div>
      <div className="mb-5 text-sm text-[var(--color-ink-faint)]">
        One fee, everything in
      </div>

      {/* The one fee */}
      <div className="rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 py-4 text-white">
        <div className="flex items-baseline justify-between">
          <span className="font-[family-name:var(--font-display)] text-[15px] font-bold">
            You pay
          </span>
          <span className="font-[family-name:var(--font-display)] text-[30px] font-extrabold leading-none">
            £900<span className="text-[14px] font-semibold text-white/70">/mo</span>
          </span>
        </div>
        <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-[var(--color-accent)]" style={{ width: "50%" }} />
          <div className="h-full bg-white/80" style={{ width: "50%" }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-white/80">
          <span>Ad spend, £450</span>
          <span>Everything else, £450</span>
        </div>
      </div>

      {/* What that covers */}
      <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
        What that covers
      </div>
      <div className="mt-2 space-y-1.5">
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
            £2,800+/mo
          </div>
        </div>
        <div className="text-right">
          <div className="text-[13px] text-[var(--color-ink-muted)]">
            You pay
          </div>
          <div className="font-[family-name:var(--font-display)] text-[24px] font-extrabold text-[var(--color-primary)]">
            £900/mo
          </div>
        </div>
      </div>
    </div>
  );
}
