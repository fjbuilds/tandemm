"use client";

import { CSSProperties, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { HeroVisual } from "@/components/tandemm/HeroVisual";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ─────────────────────────────────────────────────────────── */
/*  Diagnosis / Prevention / Cure                              */
/* ─────────────────────────────────────────────────────────── */

const DPC = [
  {
    step: "01",
    title: "Diagnosis",
    tag: "Free",
    oneLiner:
      "A scored audit of your site, your ads and your Google rankings, delivered as a PDF you keep.",
    items: [
      "Every page checked by hand",
      "Ad accounts scored on structure and waste",
      "Local rank across your postcodes",
    ],
  },
  {
    step: "02",
    title: "Prevention",
    tag: "Included",
    oneLiner:
      "We rebuild the site, wire in tracking, restructure the ads. All included in the first month.",
    items: [
      "Website rebuilt, fast and mobile-first",
      "Tracking phone number and widget installed",
      "LSA and Google Ads set up from scratch",
    ],
  },
  {
    step: "03",
    title: "Cure",
    tag: "Ongoing",
    oneLiner:
      "The engine keeps running. Ads tuned, SEO built out, enquiries triaged, missed calls caught.",
    items: [
      "Ads tuned weekly, SEO built out monthly",
      "Every enquiry in one dashboard",
      "Missed calls answered by a UK-based team",
    ],
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Signup process (4 steps)                                   */
/* ─────────────────────────────────────────────────────────── */

const SIGNUP_STEPS = [
  {
    n: 1,
    title: "Free audit",
    desc: "Enter your URL or book a call. We score your site, ads and rankings by hand.",
    time: "Same week",
  },
  {
    n: 2,
    title: "You decide",
    desc: "Book a 30-min call, or fill it in yourself. Watch the short video, tell us the details.",
    time: "30 minutes",
  },
  {
    n: 3,
    title: "We build",
    desc: "Website rebuild, tracking number, widget, dashboard, Google Ads — all set up for you.",
    time: "10–14 days",
  },
  {
    n: 4,
    title: "You get calls",
    desc: "LSA + CPC live. Every enquiry lands in one dashboard. Missed calls caught and texted back.",
    time: "Ongoing",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Feature preview cards                                      */
/* ─────────────────────────────────────────────────────────── */

const FEATURE_PREVIEW = [
  {
    tag: "Website rebuild",
    title: "A site that turns visitors into booked jobs.",
    body: "Fast, mobile-first, and built around one goal: get the homeowner into the widget or onto the phone.",
  },
  {
    tag: "LSA + CPC ads",
    title: "Top of Google, from day one.",
    body: "Local Services Ads charge only when a homeowner contacts you. Google Ads pick up the slack. Both tuned weekly.",
  },
  {
    tag: "Tracking + widget",
    title: "Every call and form, in one dashboard.",
    body: "Dedicated tracking number, on-site widget, missed-call auto-text. Nothing lands in a black hole.",
  },
  {
    tag: "Call handling",
    title: "Missed calls, caught and texted back.",
    body: "You can't answer every call. The system texts the homeowner from your number and logs the reply as a lead.",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  FAQ                                                        */
/* ─────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "How much does it cost?",
    a: "One monthly fee between £650 and £1,650 depending on team size and ad budget. That covers the site, the ads, the SEO, the dashboard and the call handling. Google Ad spend is on top and passed through at cost. See the full pricing on the Pricing page.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. One month's notice, cancel any time. If it is not working, you walk without penalty.",
  },
  {
    q: "What's the difference between LSA and CPC?",
    a: "LSA (Local Services Ads) sits at the top of Google and charges you only when a homeowner actually contacts you. CPC (Google Ads) charges per click. We run both.",
  },
  {
    q: "Do I own the website you build?",
    a: "Yes. The website, the domain, the content — all yours. If you leave, you take it with you.",
  },
  {
    q: "How fast will I see leads?",
    a: "LSA leads inside 2 to 4 weeks. CPC inside the first month. SEO compounds — month three beats month one.",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Component                                                  */
/* ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAudit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      router.push("/book");
      return;
    }
    const params = new URLSearchParams({ website: trimmed });
    router.push(`/book?${params.toString()}`);
  };

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="home" />

      {/* ── HERO ── */}
      <section
        className="hero-split relative box-border px-6 pb-10 pt-[52px]"
        style={{
          background:
            "radial-gradient(70% 55% at 60% 0%, rgba(226,229,222,0.9), transparent 74%)",
        }}
      >
        <div className="hero-split-grid">
          <div className="hero-split-copy">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white/70 px-3.5 py-[7px] text-[13px] font-semibold tracking-[0.02em] text-[var(--color-ink-muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Free website audit
              </div>
            </Reveal>
            <Reveal>
              <h1 className="hero-title">
                Your phone,
                <br />
                <span className="hero-subtitle-em">ringing</span>.
              </h1>
            </Reveal>
            <Reveal>
              <p className="hero-desc" style={{ marginTop: 22, maxWidth: 480 }}>
                We rebuild your website, run your ads, capture every lead,
                and catch the calls you miss. Everything under one roof,
                one fee, one process.
              </p>
            </Reveal>

            {/* URL audit form */}
            <Reveal>
              <form
                onSubmit={handleAudit}
                className="mt-7 flex w-full max-w-[500px] flex-col gap-3 sm:flex-row sm:items-center"
              >
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[13px] font-semibold text-[var(--color-ink-muted)]">
                    https://
                  </span>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="yourbusiness.co.uk"
                    aria-label="Your website URL"
                    className="h-[50px] w-full rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white pl-[74px] pr-4 text-[15px] font-medium text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[50px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-6 text-[15px] font-semibold text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  Get my free audit &rarr;
                </button>
              </form>
            </Reveal>

            <Reveal>
              <p className="hero-cta-note">
                No credit card. No obligation. Yours to keep either way.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[var(--color-ink-muted)]">
                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-[var(--color-accent-hover)]">✓</span>
                  No setup fee
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-[var(--color-accent-hover)]">✓</span>
                  One month's notice
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-[var(--color-accent-hover)]">✓</span>
                  Ad spend at cost
                </span>
              </div>
            </Reveal>
          </div>

          <div className="hero-split-visual">
            <Reveal>
              <div className="hero-glass">
                <div className="hero-glass-highlight" aria-hidden="true" />
                <HeroVisual />
                <div className="hero-glass-fade" aria-hidden="true" />
                <div className="hero-glass-gate">
                  <span className="hero-glass-gate-copy">
                    Enter your URL above to get an audit like this on your site.
                  </span>
                  <Button href="/book">Book a call instead</Button>
                </div>
                <div className="hero-glass-glow" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SIGNUP PROCESS GRAPHIC ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              How it works
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              From audit to booked jobs, in four steps.
            </h2>
          </Reveal>

          <Reveal>
            <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pointer-events-none absolute left-0 right-0 top-[46px] hidden border-t-2 border-dashed border-[var(--color-hairline)] lg:block" />

              {SIGNUP_STEPS.map((s) => (
                <div
                  key={s.n}
                  className="relative z-10 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-1)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[var(--color-on-primary)]">
                      {s.n}
                    </span>
                    <span className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-canvas)] px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                      {s.time}
                    </span>
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[18px] font-bold">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/book">Get started</Button>
              <Button href="/system" variant="ghost">
                See the full process &rarr;
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DIAGNOSIS / PREVENTION / CURE (compact) ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)]">
              The model
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Diagnosis. Prevention. Cure.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Not a service you buy. A three-stage process. Each stage
              earns its place.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {DPC.map((item) => (
              <Reveal key={item.step}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                      Stage {item.step}
                    </span>
                    <span className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-canvas)] px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {item.oneLiner}
                  </p>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-[var(--color-hairline-soft)] pt-4">
                    {item.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-[13.5px] leading-[1.4] text-[var(--color-ink)]"
                      >
                        <span className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE PREVIEW ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              What you get
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Everything you'd normally hire five people for.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Site, ads, SEO, dashboard, call handling — one team, one
              price, one number that matters: booked jobs.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FEATURE_PREVIEW.map((f) => (
              <Reveal key={f.tag}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-accent-hover)]">
                    {f.tag}
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[20px] font-bold leading-[1.2]">
                    {f.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 text-center">
            <Button href="/features" variant="ghost">
              See every feature &rarr;
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── DASHBOARD MOCK (compact) ── */}
      <section className="mx-auto max-w-[1160px] px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                One dashboard
              </div>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Every enquiry, every source, on your phone.
              </h2>
              <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                We handle the system. You see the outcome. New leads with
                the source that drove them, one-tap actions, this week's
                booked jobs, and the missed calls we caught.
              </p>
              <ul className="mb-6 flex flex-col gap-2.5 text-[14.5px] leading-[1.55]">
                {[
                  "Every call, form, WhatsApp and missed call in one place",
                  "Source attribution — LSA, CPC, SEO, direct, referral",
                  "Missed-call auto-text within 60 seconds",
                  "Reporting tied to booked jobs, not clicks",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[var(--color-ink)]">
                    <span className="mt-0.5 font-bold text-[var(--color-accent-hover)]">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <Button href="/features">Explore the dashboard &rarr;</Button>
            </div>
          </Reveal>

          <Reveal>
            <MiniPhoneDashboard />
          </Reveal>
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              Pricing
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              One monthly fee. Ad spend at cost.
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Four tiers based on team size and ad budget. No setup fee.
              No contract. Ad spend passed through at cost.
            </p>
          </Reveal>

          <Reveal>
            <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Starter", price: 650, who: "Sole traders" },
                { name: "Growth", price: 950, who: "2–5 team", popular: true },
                { name: "Scale", price: 1250, who: "5–10 team" },
              ].map((t) => (
                <div
                  key={t.name}
                  className={`relative rounded-[var(--radius-xl)] border bg-[var(--color-surface)] p-6 shadow-[var(--shadow-1)] ${
                    t.popular
                      ? "border-[var(--color-primary)]"
                      : "border-[var(--color-hairline)]"
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                      Popular
                    </span>
                  )}
                  <div className="mb-1 font-[family-name:var(--font-display)] text-[18px] font-bold">
                    {t.name}
                  </div>
                  <div className="mb-3 text-[12px] text-[var(--color-ink-muted)]">
                    {t.who}
                  </div>
                  <div className="mb-1 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-display)] text-[32px] font-extrabold leading-none">
                      £{t.price}
                    </span>
                    <span className="text-[12px] text-[var(--color-ink-muted)]">
                      /mo +VAT
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--color-ink-faint)]">
                    Ad spend on top, at cost
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/pricing">See full pricing</Button>
              <Button href="/book" variant="ghost">
                Get my free audit &rarr;
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-[860px] px-6 py-20">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Frequently asked questions
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
        <div className="mt-6 text-center">
          <Button href="/pricing" variant="ghost">
            More questions on the Pricing page &rarr;
          </Button>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-20">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] sm:px-14">
            <h2 className="mx-auto max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Find out where your site is costing you jobs.
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[17px] leading-[1.55] text-white/70">
              Free audit. Yours to keep. No hard sell.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
/*  Mini phone dashboard for the home page                     */
/* ─────────────────────────────────────────────────────────── */

function MiniPhoneDashboard() {
  const newLeads = [
    { name: "S. Patel", area: "SW11", src: "LSA", note: "Fuse box quote" },
    { name: "M. Dawson", area: "SE22", src: "CPC", note: "EV charger install" },
    { name: "J. Reid", area: "SW15", src: "Missed call", note: "Callback, 09:42" },
  ];

  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div className="relative rounded-[38px] border border-[var(--color-hairline)] bg-[#0e1420] p-2.5 shadow-[var(--shadow-2)]">
        <div className="relative overflow-hidden rounded-[30px] bg-[var(--color-canvas)]">
          <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-semibold text-[var(--color-ink-muted)]">
            <span>09:42</span>
            <div className="absolute left-1/2 top-[10px] h-3.5 w-14 -translate-x-1/2 rounded-b-xl bg-[#0e1420]" />
            <span>100%</span>
          </div>

          <div className="px-3 pb-3 pt-2">
            <div className="mb-2 flex items-center justify-between px-2">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
                  Tandemm
                </div>
                <div className="font-[family-name:var(--font-display)] text-[14px] font-bold">
                  Today
                </div>
              </div>
              <span className="rounded-full bg-[var(--color-primary)] px-2 py-[3px] text-[9px] font-bold text-white">
                3 new
              </span>
            </div>

            <div className="space-y-2">
              {newLeads.map((l) => (
                <div
                  key={l.name}
                  className="rounded-lg border border-[var(--color-hairline-soft)] bg-[var(--color-surface)] p-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold">
                      {l.name} · {l.area}
                    </span>
                    <span className="rounded-full bg-[var(--color-surface-sunken)] px-1.5 py-[1px] text-[8px] font-semibold text-[var(--color-ink-muted)]">
                      {l.src}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[10px] text-[var(--color-ink-muted)]">
                    {l.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 rounded-lg bg-[var(--color-primary)] p-2.5 text-white">
              <div className="text-[9px] uppercase tracking-[0.06em] text-white/60">
                Booked this week
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-[family-name:var(--font-display)] text-[18px] font-extrabold">
                  6 jobs
                </span>
                <span className="text-[10px] font-semibold text-white/80">
                  £4,320
                </span>
              </div>
            </div>
          </div>

          <div className="pb-2">
            <div className="mx-auto h-1 w-20 rounded-full bg-[var(--color-hairline)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
