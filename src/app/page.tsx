"use client";

import { CSSProperties, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { HeroVisual } from "@/components/tandemm/HeroVisual";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";

/* ------------------------------------------------------------------ */
/*  Palette override (matches book page)                              */
/* ------------------------------------------------------------------ */
const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ------------------------------------------------------------------ */
/*  Diagnosis / Prevention / Cure cards                               */
/* ------------------------------------------------------------------ */
const DPC = [
  {
    step: "01",
    title: "Diagnosis",
    tag: "Free",
    oneLiner:
      "A scored audit of your site, ad accounts and rankings, so you see where enquiries are going missing.",
    desc: "We check the pages Google actually indexes, page-speed against a phone, tracking events firing on every form and call, ad account structure, and whether your landing pages match search intent. You get a PDF with the specific findings and a 30-minute walk-through. Yours to keep, whether you hire us or not.",
    items: [
      "Indexed pages, meta and schema coverage",
      "Mobile page-speed and Core Web Vitals",
      "Form, call and event tracking end-to-end",
      "Ad account structure and keyword mapping",
      "Local rank across the postcodes you cover",
    ],
  },
  {
    step: "02",
    title: "Prevention",
    tag: null as string | null,
    oneLiner:
      "The fixes that plug the leaks the Diagnosis Audit surfaced. Site, tracking, ad structure, enquiry capture.",
    desc: "One-page concept and a fixed price. We rebuild the pages that leak, wire in server-side tracking, restructure ad campaigns around the jobs you want, and put the enquiry capture in front of the visitor instead of at the bottom of a menu.",
    items: [
      "Landing pages rebuilt for one job: a booked enquiry",
      "GA4 and conversion API events verified end-to-end",
      "Ad campaigns restructured by job type and margin",
      "On-site enquiry capture (form, click-to-call, WhatsApp)",
    ],
  },
  {
    step: "03",
    title: "Cure",
    tag: "Ongoing",
    oneLiner:
      "The ongoing engine. Ads run monthly, SEO built out, enquiries handled, calls answered when you are on the tools.",
    desc: "Ads and SEO managed month to month, enquiries triaged into one system so nothing sits in an inbox, and a call handling backstop that picks up the phone when you cannot. No long contract, one month's notice.",
    items: [
      "Google Ads managed and tuned weekly",
      "SEO pages and links built out each month",
      "Enquiries land in one place, triaged and chased",
      "Call handling for missed and out-of-hours calls",
      "Monthly report tied to booked jobs, not clicks",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  What Diagnosis checks, used in place of fabricated proof          */
/* ------------------------------------------------------------------ */
const DIAGNOSIS_CATEGORIES = [
  {
    title: "Visibility",
    body: "Which of your pages Google can actually see, index and rank for the searches homeowners run.",
  },
  {
    title: "Speed",
    body: "How fast pages open on a mid-range phone on 4G, versus the point most homeowners tap back.",
  },
  {
    title: "Tracking",
    body: "Whether every form, call, WhatsApp and click-to-call is being recorded and tied back to source.",
  },
  {
    title: "Ad structure",
    body: "How your ad accounts are organised, where budget goes to dead clicks, and which jobs pay back.",
  },
  {
    title: "Conversion",
    body: "The specific pages, forms and above-the-fold moves that turn a visitor into an enquiry.",
  },
  {
    title: "Enquiry handling",
    body: "What happens after an enquiry lands: where it goes, who chases it, and how quickly.",
  },
];

/* ------------------------------------------------------------------ */
/*  Lead flow, used in place of testimonials                          */
/* ------------------------------------------------------------------ */
const LEAD_SOURCES = [
  { label: "Google Ads", body: "Paid searches for the jobs you want more of" },
  { label: "SEO", body: "Organic and local pack searches" },
  { label: "Form", body: "Website enquiry forms" },
  { label: "Call", body: "Direct phone calls, tracked" },
  { label: "WhatsApp", body: "Message enquiries and follow-ups" },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
const FAQS = [
  {
    q: "What kind of businesses do you work with?",
    a: "UK trade businesses. Electricians, plumbers, roofers, builders, landscapers, and similar. If homeowners search for you online and you turn up to do the work, you are the right fit.",
  },
  {
    q: "How much does it cost?",
    a: "Most trade businesses spend between £800 and £2,000 a month with us. That is ads, SEO, site work, the enquiry system and the reporting under one price. You get the exact number after the Diagnosis Audit.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see enquiries lift inside 4 to 6 weeks once Prevention is done. It compounds from there. Month three beats month one. Month six beats month three.",
  },
  {
    q: "Do I need to do anything?",
    a: "Very little. We run ads, SEO, the site, the enquiry system and the call handling. You get in the van and quote the work.",
  },
  {
    q: "What if it does not work?",
    a: "No long-term contracts. One month's notice, cancel any time. Those are the trust terms: if the numbers are not there, you walk without penalty.",
  },
  {
    q: "What about AI search, ChatGPT and Google's AI answers?",
    a: "Homeowners are starting to ask ChatGPT and Google's AI answers who to use. The same pages and links that push you up normal Google are what get you named in those answers. Same job, both places.",
  },
];

/* ------------------------------------------------------------------ */
/*  Main page                                                         */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="home" />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
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
              <h1 className="hero-title">
                You&rsquo;re good
                <br />
                at the job.
              </h1>
            </Reveal>
            <Reveal>
              <p className="hero-subtitle">
                We make sure your phone{" "}
                <span className="hero-subtitle-em">rings</span>.
              </p>
            </Reveal>
            <Reveal>
              <p className="hero-desc">
                We make sure the phone rings. We work with trade businesses
                across the UK, not just one trade. Over 3.6 million people
                search Google for a tradesman every month. We make sure the
                right ones find you, contact you, and end up as booked jobs.
              </p>
            </Reveal>
            <Reveal>
              <p className="hero-desc">
                Leads land in one place. We catch them, manage them, and make
                sure none go cold.
              </p>
            </Reveal>
            <Reveal>
              <div className="hero-cta">
                <Button href="/book">Book a call</Button>
                <Button href="/system" variant="ghost">
                  See how it works &rarr;
                </Button>
              </div>
            </Reveal>
            <Reveal>
              <p className="hero-cta-note">
                Diagnosis Audit is free and yours to keep either way.
              </p>
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
                    Book a call to see the full diagnosis on your site.
                  </span>
                  <Button href="/book">Book a call</Button>
                </div>
                <div className="hero-glass-glow" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DIAGNOSIS / PREVENTION / CURE                               */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-20 pt-16">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              How it works
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Diagnosis. Prevention. Cure.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Three stages. Each earns its place. The audit shows where you
              are losing enquiries, Prevention plugs the leaks, Cure is the
              ongoing engine that keeps the phone ringing.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {DPC.map((item) => (
              <Reveal key={item.step}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-accent)]">
                      Stage {item.step}
                    </span>
                    {item.tag && (
                      <span className="rounded-full border border-[var(--color-hairline)] bg-[var(--color-canvas)] px-2 py-[2px] text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-[15px] font-semibold leading-[1.4] text-[var(--color-ink)]">
                    {item.oneLiner}
                  </p>
                  <p className="mb-4 text-[14.5px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {item.desc}
                  </p>
                  <ul className="mt-auto flex flex-col gap-1.5 border-t border-[var(--color-hairline-soft)] pt-4">
                    {item.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-[13.5px] leading-[1.4] text-[var(--color-ink-muted)]"
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
          <Reveal className="mt-10 text-center">
            <p className="mb-5 text-[15px] font-semibold text-[var(--color-ink)]">
              You keep the Diagnosis Audit either way. No hard sell, no chasing
              calls.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/book">Book a call</Button>
              <Button href="/system" variant="ghost">
                See what&apos;s inside &rarr;
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RESULTS                                                     */}
      {/* ============================================================ */}
      <section className="px-6 pb-20 pt-16">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              Results
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              More booked jobs. Every source tracked.
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              What a trade business gets: more of the enquiries that turn into
              booked work, with every call and form tied back to source. How
              we do it: ads, SEO, site, enquiry system and call handling
              under one roof. What makes it different: one team on the hook
              for the number that matters, not four suppliers pointing at
              each other.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 gap-6 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)] md:grid-cols-3 md:p-9">
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-accent)]">
                  Under one roof
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[18px] font-bold leading-[1.25]">
                  Ads, SEO, site, enquiry system, call handling.
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--color-ink-muted)]">
                  One team runs the lot. No juggling freelancers, no invoices
                  from four different suppliers, no gap between the ad and
                  what happens when the phone rings.
                </p>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-accent)]">
                  Trust terms
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[18px] font-bold leading-[1.25]">
                  No long contract. One month&apos;s notice.
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--color-ink-muted)]">
                  If it is not working, you leave. That is the trust term, not
                  a stat about who did or did not walk. We hold ourselves to
                  the number that matters: booked jobs.
                </p>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-accent)]">
                  Reporting
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[18px] font-bold leading-[1.25]">
                  Every call and form tied back to source.
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-[var(--color-ink-muted)]">
                  You see which enquiries came from Google Ads, which from
                  SEO, which from a missed call we caught. No black box, no
                  agency spin, no metric that does not translate to jobs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LEAD FLOW  (replaces testimonials)                          */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-20 pt-16">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              The system, in one line
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(30px,3.8vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Every enquiry into one place. None go cold.
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)] sm:p-10">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                {/* Sources */}
                <div>
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                    Lead sources
                  </div>
                  <div className="flex flex-col gap-2">
                    {LEAD_SOURCES.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-3 py-2"
                      >
                        <span className="font-[family-name:var(--font-display)] text-[13px] font-bold text-[var(--color-ink)]">
                          {s.label}
                        </span>
                        <span className="text-[12px] leading-[1.3] text-[var(--color-ink-muted)]">
                          {s.body}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden text-2xl font-bold text-[var(--color-accent)] lg:block" aria-hidden="true">
                  &rarr;
                </div>

                {/* Enquiry system */}
                <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-6 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-white/55">
                    Enquiry system
                  </div>
                  <div className="mb-3 font-[family-name:var(--font-display)] text-[20px] font-bold leading-[1.2]">
                    One dashboard. Every enquiry.
                  </div>
                  <ul className="flex flex-col gap-2 text-[13.5px] leading-[1.4] text-white/85">
                    <li>Triaged into new, quoting, booked, dead.</li>
                    <li>Chased when they go quiet.</li>
                    <li>Missed calls caught by the call handling backstop.</li>
                    <li>Tied back to the ad or search that brought them in.</li>
                  </ul>
                </div>

                <div className="hidden text-2xl font-bold text-[var(--color-accent)] lg:block" aria-hidden="true">
                  &rarr;
                </div>

                {/* Outcome */}
                <div>
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
                    Outcome
                  </div>
                  <div className="rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-5 py-5">
                    <div className="font-[family-name:var(--font-display)] text-[22px] font-extrabold leading-[1.1] text-[var(--color-ink)]">
                      Booked job.
                    </div>
                    <p className="mt-2 text-[13.5px] leading-[1.5] text-[var(--color-ink-muted)]">
                      Quoted and confirmed. Traceable back to the pound that
                      brought it in. No enquiry sits in an inbox.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT DIAGNOSIS CHECKS                                       */}
      {/* ============================================================ */}
      <section className="px-6 pb-20 pt-16">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              Inside the Diagnosis Audit
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Six categories, scored on your site.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              The audit is scored across the six areas below. Everything ranks
              by impact on booked jobs.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIAGNOSIS_CATEGORIES.map((c) => (
              <Reveal key={c.title}>
                <div className="h-full rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6">
                  <div className="mb-2 font-[family-name:var(--font-display)] text-[17px] font-bold">
                    {c.title}
                  </div>
                  <p className="text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-20 pt-16">
        <Reveal className="mb-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
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
                    className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left text-[17px] font-semibold text-[var(--color-ink)] transition-colors"
                  >
                    {item.q}
                    <span className="text-[22px] text-[var(--color-ink-muted)]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-[22px] text-base leading-[1.6] text-[var(--color-ink-muted)]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-bold">
                Still weighing it up?
              </h3>
              <p className="mb-5 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                30 minutes on the phone. We look at your site, your ads and
                your Google rankings. If we cannot help, we say so before
                you spend a penny.
              </p>
              <div className="mb-4">
                <Button href="/book" className="w-full text-center">
                  Book a call
                </Button>
              </div>
              <div className="text-center text-sm text-[var(--color-ink-muted)]">
                or email{" "}
                <a
                  href="mailto:hello@tandemm.co.uk"
                  className="font-semibold text-[var(--color-ink)] no-underline"
                >
                  hello@tandemm.co.uk
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                   */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-16">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-11 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] sm:px-14">
            <h2 className="mx-auto max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(24px,3.2vw,34px)] font-extrabold leading-[1.12] tracking-[-0.02em]">
              Find out where enquiries are going missing.
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-base leading-[1.6] text-white/70">
              30 minutes on the phone. We look at your site, your ads and
              your rankings, and tell you what is costing you work. Straight
              answer, either way.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Book a call
              </Button>
              <Button href="/results" variant="secondary">
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
