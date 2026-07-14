"use client";

import { CSSProperties, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { cn } from "@/lib/utils";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ─────────────────────────────────────────────────────────── */
/*  Tiers                                                      */
/* ─────────────────────────────────────────────────────────── */

type Tier = {
  key: string;
  name: string;
  who: string;
  monthly: number;
  adSpend: number;
  estLeads: string;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    key: "starter",
    name: "Starter",
    who: "Sole traders, 1 van",
    monthly: 650,
    adSpend: 300,
    estLeads: "12–18",
  },
  {
    key: "growth",
    name: "Growth",
    who: "2–5 person team",
    monthly: 950,
    adSpend: 500,
    estLeads: "20–28",
    highlight: true,
  },
  {
    key: "scale",
    name: "Scale",
    who: "5–10 person team",
    monthly: 1250,
    adSpend: 750,
    estLeads: "28–38",
  },
  {
    key: "fleet",
    name: "Fleet",
    who: "10+ team, multi-branch",
    monthly: 1650,
    adSpend: 1000,
    estLeads: "40+",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  What's included (shared across all tiers)                  */
/* ─────────────────────────────────────────────────────────── */

const INCLUDED = [
  {
    group: "Website",
    items: [
      "Full website rebuild (yours to keep)",
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
      "Local Services Ads (LSA) — pay-per-lead, not per click",
      "Google Ads (CPC) for the searches LSA does not cover",
      "Keyword and location research",
      "Ad copy, extensions, and negative lists",
      "Weekly bid tuning by a Google-certified specialist",
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
      "Lead pipeline: New → Quoting → Booked → Dead",
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
      "Full transparency on Google Ads spend — no markup",
    ],
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  FAQ (10 adapted from GetWork)                              */
/* ─────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "Is there a setup fee?",
    a: "No. We rebuild your website, set up Google Ads, wire the tracking number and stand up your dashboard as part of onboarding. No upfront cost, no separate build fee.",
  },
  {
    q: "How does the ad spend work?",
    a: "The ad spend on each plan goes straight to Google — we do not mark it up. You see exactly what was spent, on which campaigns, on which days. Any unspent budget rolls into the following month.",
  },
  {
    q: "What's the difference between LSA and CPC ads?",
    a: "LSA (Local Services Ads) sit at the very top of Google and you only pay when a homeowner actually contacts you — not per click. CPC (regular Google Ads) charge every time someone clicks. We run both, and shift spend to whichever is paying back best for your trade and area.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No long-term contracts. You give one month's notice and you can leave, no penalty. If it is not working, you walk. That is the trust term.",
  },
  {
    q: "Do you work with anyone in my trade and area?",
    a: "No. We work with one business per trade, per area. If we take you on, we do not take on your direct competitor down the road.",
  },
  {
    q: "How quickly will I see leads?",
    a: "Most clients see the first LSA leads within 2 to 4 weeks of the site going live. Google Ads typically kick in inside the first month. SEO compounds — month three beats month one, month six beats month three.",
  },
  {
    q: "Do I own the website you build?",
    a: "Yes. The site is yours. If you ever leave, you take the website, the domain and the content with you. We do not hold your business hostage.",
  },
  {
    q: "What happens if I miss a call?",
    a: "The tracking number redirects to your mobile. If you don't pick up, the system sends the homeowner an auto-text from your number within 60 seconds. The reply lands in the dashboard as a lead, tagged 'missed call caught'.",
  },
  {
    q: "Can I see how my money is being spent?",
    a: "Yes, 24/7. The dashboard shows every ad campaign, every pound spent, every call and form that came in and which ad drove it. The monthly report ties it all back to booked jobs.",
  },
  {
    q: "What if my trade or area isn't a fit?",
    a: "We say so before you spend anything. The free audit tells us whether there's enough search demand in your postcode to make it work. If it will not pay back, we tell you.",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Component                                                  */
/* ─────────────────────────────────────────────────────────── */

export default function PricingPage() {
  const [openTier, setOpenTier] = useState<string | null>("growth");
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white/70 px-3.5 py-[7px] text-[13px] font-semibold tracking-[0.02em] text-[var(--color-ink-muted)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              One fee, one process
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Simple pricing.
              <br className="hidden sm:inline" />
              No setup fee. No contract.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              One monthly fee covers the website, the ads, the SEO, the
              dashboard and the call handling. Google Ad spend is on top
              and passed through at cost — no markup, ever.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "No setup fee",
            "No contract, one month's notice",
            "Ad spend passed through at cost",
            "Cancel any time",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-[16px] py-2 text-[13px] text-[var(--color-ink)]"
            >
              <span className="font-bold text-[var(--color-accent-hover)]">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── TIER CARDS ── */}
      <section className="mx-auto max-w-[1240px] px-6 pb-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((tier) => (
            <Reveal key={tier.key}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[var(--radius-xl)] border bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)] transition-transform duration-200",
                  tier.highlight
                    ? "border-[var(--color-primary)] shadow-[var(--shadow-2)] xl:-translate-y-2"
                    : "border-[var(--color-hairline)]",
                )}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                      Most popular
                    </span>
                  </div>
                )}
                <div className="mb-1 font-[family-name:var(--font-display)] text-[22px] font-bold">
                  {tier.name}
                </div>
                <div className="mb-5 text-[13px] text-[var(--color-ink-muted)]">
                  {tier.who}
                </div>

                <div className="mb-1 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-[38px] font-extrabold leading-none tracking-tight">
                    £{tier.monthly}
                  </span>
                  <span className="text-[13px] text-[var(--color-ink-muted)]">
                    /mo + VAT
                  </span>
                </div>
                <div className="mb-5 text-[12px] text-[var(--color-ink-faint)]">
                  Management fee. Ad spend on top.
                </div>

                <div className="mb-5 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-4 py-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-[var(--color-ink-muted)]">
                      Recommended ad spend
                    </span>
                    <span className="font-bold text-[var(--color-ink)]">
                      £{tier.adSpend}/mo
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[12px]">
                    <span className="text-[var(--color-ink-muted)]">
                      Est. leads / month
                    </span>
                    <span className="font-bold text-[var(--color-accent-hover)]">
                      {tier.estLeads}
                    </span>
                  </div>
                </div>

                <Button
                  href="/book"
                  className={cn(
                    "w-full text-center",
                    !tier.highlight &&
                      "bg-[var(--color-surface-muted)] text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]",
                  )}
                >
                  Get started
                </Button>

                <div className="mt-4 border-t border-[var(--color-hairline-soft)] pt-4 text-center">
                  <div className="text-[12px] font-semibold text-[var(--color-ink-muted)]">
                    Everything included in every tier
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-[14px] leading-[1.55] text-[var(--color-ink-muted)]">
            All tiers include the full system — website, ads, SEO,
            dashboard, call handling, reporting. Tiers differ only on the
            recommended monthly ad spend and expected lead volume.
          </p>
        </Reveal>
      </section>

      {/* ── WHAT'S INCLUDED, EXPANDABLE ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What's in every plan
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
                            <span className="mt-0.5 font-bold text-[var(--color-accent-hover)]">
                              ✓
                            </span>
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

      {/* ── TRANSPARENCY BLOCK ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                Where your money goes
              </div>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Full transparency on ad spend. No markup, ever.
              </h2>
              <p className="mb-4 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Some agencies bury the ad spend inside their fee and pocket
                the difference. Not here.
              </p>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                Your Google Ads budget goes straight to Google. You see it
                in the dashboard — every pound, every campaign, every day.
                Any unspent budget rolls to next month. Cancel and the
                Google account is yours.
              </p>
              <ul className="flex flex-col gap-2.5 text-[15px] leading-[1.55]">
                {[
                  "Ad spend billed by Google, not by us",
                  "Dashboard shows live spend by campaign",
                  "Unspent budget rolls into next month",
                  "Your Google Ads account, in your name",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[var(--color-ink)]">
                    <span className="mt-0.5 font-bold text-[var(--color-accent-hover)]">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
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
              numbers won't work in your area, we say so before you sign
              anything.
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
/*  Spend breakdown card                                       */
/* ─────────────────────────────────────────────────────────── */

function SpendBreakdown() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
        Sample monthly bill — Growth plan
      </div>
      <div className="mb-5 text-sm text-[var(--color-ink-faint)]">
        What lands on your card
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-4 py-3">
          <div>
            <div className="text-[14px] font-bold text-[var(--color-ink)]">
              Tandemm management fee
            </div>
            <div className="text-[12px] text-[var(--color-ink-muted)]">
              Site, ads, SEO, dashboard, call handling
            </div>
          </div>
          <div className="font-[family-name:var(--font-display)] text-[18px] font-bold">
            £950
          </div>
        </div>

        <div className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-4 py-3">
          <div>
            <div className="text-[14px] font-bold text-[var(--color-ink)]">
              Google Ads spend
            </div>
            <div className="text-[12px] text-[var(--color-ink-muted)]">
              Billed by Google, at cost. No markup.
            </div>
          </div>
          <div className="font-[family-name:var(--font-display)] text-[18px] font-bold">
            £500
          </div>
        </div>

        <div className="my-2 h-px bg-[var(--color-hairline)]" />

        <div className="flex items-center justify-between px-4 py-2">
          <div className="font-[family-name:var(--font-display)] text-[15px] font-bold">
            Total monthly investment
          </div>
          <div className="font-[family-name:var(--font-display)] text-[22px] font-extrabold text-[var(--color-primary)]">
            £1,450
          </div>
        </div>

        <div className="rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 py-3 text-white">
          <div className="text-[11px] uppercase tracking-[0.06em] text-white/60">
            Where every pound goes
          </div>
          <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-white/80" style={{ width: "65.5%" }} />
            <div className="h-full bg-[var(--color-accent)]" style={{ width: "34.5%" }} />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-white/80">
            <span>Management · 65%</span>
            <span>Google Ads · 35%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
