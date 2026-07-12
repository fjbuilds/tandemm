"use client";

import { CSSProperties, useCallback, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button, ButtonEl } from "@/components/tandemm/Button";
import { HeroVisual } from "@/components/tandemm/HeroVisual";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { cn } from "@/lib/utils";

const RESULTS = [
  {
    value: "312%",
    label: "More enquiries",
    sub: "Average lift in monthly enquiries inside 90 days.",
  },
  {
    value: "4.6x",
    label: "Conversion rate",
    sub: "Visitors turned into booked jobs, up from 0.8%.",
  },
  {
    value: "47",
    label: "Leads / month",
    sub: "Enough to book the diary weeks ahead, month after month.",
  },
  {
    value: "£1.1M",
    label: "Revenue generated",
    sub: "Client revenue we can tie back to work we did.",
  },
];

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
/*  Static data                                                       */
/* ------------------------------------------------------------------ */
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Diagnosis",
    tag: null as string | null,
    oneLiner:
      "A proper audit of your site and your online presence, before either of us talks about work.",
    desc: "We spend 15 to 30 minutes running your site through a dedicated audit platform, then check it by hand. You get a PDF report, and we walk you through it live on a call. The report is yours to keep, whether you hire us or not.",
    items: [
      "Site speed and technical health",
      "SEO and Google visibility",
      "Local rankings in the areas you cover",
      "The pages costing you enquiries",
    ],
  },
  {
    step: "02",
    title: "Prevention",
    tag: null as string | null,
    oneLiner:
      "If the site is what's holding you back, we rebuild it. If it isn't, we tell you.",
    desc: "We don't assume you need a new site. The audit shows whether it's the bottleneck. If it is, we send you a one-page concept and a fixed price. You either book the rebuild or take the report and fix things yourself.",
    items: [
      "One-page concept, no pressure",
      "Deposit, rebuild, launch",
      "Fresh audit on the finished site",
      "Before and after score, side by side",
    ],
  },
  {
    step: "03",
    title: "Cure",
    tag: "Optional",
    oneLiner:
      "Once the site is right, you can hand us the ongoing work, or not.",
    desc: "Cure is for owners who want one team running ads, SEO, and the reporting in one place after the rebuild. No long-term contract, one month's notice, cancel any time.",
    items: [
      "Google Ads set up and managed",
      "Local SEO and rank tracking",
      "Unlimited edits to the site",
      "One new landing page per quarter",
      "Live dashboard so you always know what's working",
      "Email support, replies inside 2 business days",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "Within six weeks we had more enquiries than we'd had in the previous six months. The tracking means I can actually see where the work comes from now.",
    name: "James Marlow",
    role: "Marlow & Co Electrical",
    metric: "+312% enquiries",
  },
  {
    quote: "They didn't just build us a website. They built a system that brings in jobs every single week. I wish I'd found them years ago.",
    name: "Sarah Chen",
    role: "ClearView Windows",
    metric: "47 leads/month",
  },
  {
    quote: "I was sceptical about spending on ads, but the numbers don't lie. Every pound I put in comes back fourfold. That's never happened before.",
    name: "David Okafor",
    role: "Okafor Plumbing",
    metric: "4.6x ROAS",
  },
  {
    quote: "The monthly reports are genuinely useful. No waffle, just what's working, what's not, and what they're doing about it. Proper partner.",
    name: "Emma Watts",
    role: "Watts Landscaping",
    metric: "1.1s load time",
  },
];

const FAQS = [
  {
    q: "What kind of businesses do you work with?",
    a: "UK trades. Electricians, plumbers, roofers, builders, landscapers, and similar. If homeowners search for you online and you turn up to do the work, you're the right fit.",
  },
  {
    q: "How much does it cost?",
    a: "Most clients spend between £800 and £2,000 a month for the full system, ads, SEO, site, and reporting in one place. You'll get an exact number on the audit call. No surprises later.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see enquiries moving inside 4 to 6 weeks. It compounds. Month three is better than month one, and month six is better again.",
  },
  {
    q: "Do I need to do anything?",
    a: "Very little. We run the ads, the SEO, the site, and the tracking. You answer the phone and do the work you're actually good at.",
  },
  {
    q: "What if it doesn't work?",
    a: "No long-term contracts. One month's notice, cancel any time. If the numbers aren't there after 90 days, you can walk away. So far, nobody has.",
  },
  {
    q: "What about AI search, ChatGPT and Google's AI answers?",
    a: "Homeowners are starting to ask ChatGPT, Perplexity and Google's AI answers which tradesperson to use. The same content and links that push you up traditional rankings are what get you named in those answers. It's part of what we build.",
  },
];

/* ------------------------------------------------------------------ */
/*  Main page                                                         */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  /* Testimonial slider */
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);
  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  /* FAQ accordion */
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
              <span className="hero-eyebrow">
                <span className="hero-eyebrow-dot" aria-hidden="true" />
                Growth for UK trade businesses
              </span>
            </Reveal>
            <Reveal>
              <h1 className="hero-title">
                You&rsquo;re good
                <br />
                at the job.
              </h1>
            </Reveal>
            <Reveal>
              <p className="hero-subtitle">
                We make sure the right people{" "}
                <span className="hero-subtitle-em">see</span> it.
              </p>
            </Reveal>
            <Reveal>
              <p className="hero-desc">
                More than ads. More than marketing. A steady stream of work,
                month after month.
              </p>
            </Reveal>
            <Reveal>
              <div className="hero-cta">
                <Button href="/book">Get your free audit</Button>
                <Button href="/results" variant="ghost">
                  See real results →
                </Button>
              </div>
            </Reveal>
            <Reveal>
              <p className="hero-cta-note">
                We score your business before we pitch anything.
              </p>
            </Reveal>
            <Reveal>
              <div className="hero-mini-trust">
                <span className="hero-mini-trust-stars" aria-hidden="true">
                  ★★★★★
                </span>
                <span>
                  <b>312%</b> more enquiries
                </span>
                <span className="hero-mini-trust-dot" aria-hidden="true" />
                <span>
                  <b>£1.1m+</b> revenue generated
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
                <div className="hero-glass-glow" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-20 pt-16">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              How it works
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              We look before we sell.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Every other agency opens with a pitch. We open with a report on
              your site, your rankings, and where enquiries are going missing.
              If the site isn&apos;t the problem, we&apos;ll say so. You keep
              the audit either way.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((item) => (
              <Reveal key={item.step}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  {/* Mini illustration area */}
                  <div className="mb-5 rounded-[var(--radius-lg)] bg-[var(--color-surface-sunken)] p-4">
                    {item.step === "01" && (
                      /* PDF report mock */
                      <div className="mx-auto flex w-full max-w-[220px] flex-col gap-2 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-white p-3 shadow-[0_1px_2px_rgba(15,25,35,0.05)]">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
                            Growth audit · PDF
                          </span>
                          <span className="rounded-full bg-[color-mix(in_srgb,var(--color-success)_14%,transparent)] px-1.5 py-[1px] text-[9px] font-bold text-[var(--color-success)]">
                            96
                          </span>
                        </div>
                        <div className="h-1.5 w-4/5 rounded bg-[var(--color-hairline)]" />
                        <div className="h-1.5 w-3/5 rounded bg-[var(--color-hairline)]" />
                        <div className="mt-1 grid grid-cols-4 gap-1">
                          {[0, 1, 2, 3].map((n) => (
                            <div
                              key={n}
                              className="h-6 rounded-[3px] bg-[var(--color-canvas)]"
                            />
                          ))}
                        </div>
                        <div className="h-1.5 w-2/3 rounded bg-[var(--color-hairline)]" />
                        <div className="h-1.5 w-1/2 rounded bg-[var(--color-hairline)]" />
                      </div>
                    )}
                    {item.step === "02" && (
                      /* Before / after audit score */
                      <div className="flex items-center justify-around gap-2">
                        {[
                          { label: "Before", value: 42, color: "var(--color-danger)" },
                          { label: "After", value: 96, color: "var(--color-success)" },
                        ].map((s) => {
                          const R = 22;
                          const C = 2 * Math.PI * R;
                          const dash = (s.value / 100) * C;
                          return (
                            <div
                              key={s.label}
                              className="flex flex-col items-center gap-1"
                            >
                              <div className="relative h-14 w-14">
                                <svg
                                  viewBox="0 0 56 56"
                                  className="h-full w-full"
                                  aria-hidden="true"
                                >
                                  <circle
                                    cx="28"
                                    cy="28"
                                    r={R}
                                    fill="none"
                                    stroke="var(--color-hairline)"
                                    strokeWidth="4"
                                  />
                                  <circle
                                    cx="28"
                                    cy="28"
                                    r={R}
                                    fill="none"
                                    stroke={s.color}
                                    strokeWidth="4"
                                    strokeDasharray={`${dash} ${C}`}
                                    strokeLinecap="round"
                                    transform="rotate(-90 28 28)"
                                  />
                                </svg>
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-[family-name:var(--font-display)] text-[15px] font-extrabold text-[var(--color-ink)]">
                                  {s.value}
                                </div>
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
                                {s.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {item.step === "03" && (
                      /* Simple included-list mock */
                      <div className="flex flex-col gap-1.5">
                        {item.items.slice(0, 4).map((it) => (
                          <div
                            key={it}
                            className="flex items-center gap-2 rounded-[6px] bg-white px-2 py-1.5"
                          >
                            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-primary)_14%,transparent)] text-[8px] font-bold text-[var(--color-primary)]">
                              +
                            </span>
                            <span className="text-[10.5px] font-medium text-[var(--color-ink)]">
                              {it}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

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
              You keep the audit either way. No hard sell, no follow-up hassle.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/book">Book your audit</Button>
              <Button href="/system" variant="ghost">
                See what&apos;s inside the audit →
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
              Numbers that turn up in the bank.
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              Averages across the UK trade businesses we work with. Every
              client gets a live dashboard and a monthly report in plain
              English, so you always know what&apos;s working and where your
              leads come from.
            </p>
          </Reveal>

          {/* Larger result cards */}
          <Reveal>
            <div className="results-grid">
              {RESULTS.map((r) => (
                <div key={r.label} className="result-card">
                  <div className="result-card-value">{r.value}</div>
                  <div className="result-card-label">{r.label}</div>
                  <div className="result-card-sub">{r.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Case study strip with growth chart */}
          <Reveal className="mt-8">
            <div className="grid grid-cols-1 gap-6 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)] md:grid-cols-[1.1fr_1fr] md:p-9">
              <div className="flex flex-col justify-center">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                  Case study
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-display)] text-[22px] font-bold leading-[1.2] tracking-[-0.02em]">
                  Marlow &amp; Co Electrical went from 12 to 47 enquiries a
                  month in 90 days.
                </h3>
                <p className="mb-5 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                  New site, tracked Google Ads, keyword-focused landing pages,
                  weekly tuning. The diary is booked four weeks out, and every
                  job traces back to the pound that brought it in.
                </p>
                <div>
                  <Button href="/results" variant="ghost">
                    Read the full case study →
                  </Button>
                </div>
              </div>
              <div className="rounded-[var(--radius-lg)] bg-[var(--color-canvas)] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[13px] font-semibold text-[var(--color-ink)]">
                    Monthly enquiries
                  </div>
                  <div className="rounded-full bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--color-accent)]">
                    ▲ 4× baseline
                  </div>
                </div>
                <div
                  className="flex items-end gap-2"
                  style={{ height: 130 }}
                  aria-hidden="true"
                >
                  {[12, 15, 14, 18, 22, 26, 30, 34, 38, 42, 45, 47].map(
                    (v, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-[4px]"
                        style={{
                          height: `${(v / 47) * 100}%`,
                          background:
                            i < 6
                              ? "var(--color-hairline)"
                              : "var(--color-accent)",
                          opacity: i < 6 ? 1 : 0.85,
                        }}
                      />
                    ),
                  )}
                </div>
                <div className="mt-2 flex justify-between text-[10.5px] font-medium uppercase tracking-[0.06em] text-[var(--color-ink-faint)]">
                  <span>Jan</span>
                  <span>Apr</span>
                  <span>Jul</span>
                  <span>Oct</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-20 pt-16">
        <div className="mx-auto max-w-[800px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              What clients say
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Take theirs instead.
            </h2>
          </Reveal>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-1)] sm:p-10">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-1">
                    <blockquote className="mb-6 text-[18px] font-medium leading-[1.65] text-[var(--color-ink)]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <div className="text-[15px] font-semibold text-[var(--color-ink)]">
                          {t.name}
                        </div>
                        <div className="text-sm text-[var(--color-ink-muted)]">
                          {t.role}
                        </div>
                      </div>
                      <span className="rounded-[var(--radius-pill)] bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-bold text-[var(--color-accent)]">
                        {t.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <ButtonEl
                variant="ghost"
                onClick={prevTestimonial}
                className="h-10 w-10 !p-0"
                aria-label="Previous testimonial"
              >
                &larr;
              </ButtonEl>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setActiveTestimonial(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === activeTestimonial
                        ? "w-6 bg-[var(--color-primary)]"
                        : "w-2 bg-[var(--color-hairline)] hover:bg-[var(--color-ink-faint)]",
                    )}
                  />
                ))}
              </div>
              <ButtonEl
                variant="ghost"
                onClick={nextTestimonial}
                className="h-10 w-10 !p-0"
                aria-label="Next testimonial"
              >
                &rarr;
              </ButtonEl>
            </div>
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
          {/* Left: accordion */}
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

          {/* Right: sidebar */}
          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-bold">
                Still not sure?
              </h3>
              <p className="mb-5 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                Book a free 30-minute audit. No hard sell. We&apos;ll give you
                a straight answer on whether we can help, and if we can&apos;t,
                we&apos;ll say so.
              </p>
              <div className="mb-4">
                <Button href="/book" className="w-full text-center">
                  Get your free audit
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
              Find out where the enquiries are going missing.
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-base leading-[1.6] text-white/70">
              A free 30-minute call. We look at your site, your ads and your
              rankings, then tell you what&apos;s costing you jobs. Straight
              answer, either way.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get your free audit
              </Button>
              <Button href="/results" variant="secondary">
                See real results
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
