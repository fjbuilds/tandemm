"use client";

import { CSSProperties, useCallback, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button, ButtonEl } from "@/components/tandemm/Button";
import { BrandTiles } from "@/components/tandemm/BrandTiles";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { cn } from "@/lib/utils";

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
    title: "Growth Audit",
    desc: "We look at your site, your traffic and your competitors. You get a clear picture of where enquiries leak.",
    items: ["Site speed & mobile", "Conversion paths", "Competitor benchmarks", "Tracking gaps"],
  },
  {
    step: "02",
    title: "Growth Foundation",
    desc: "We rebuild the parts that matter most: a fast, conversion-focused site with proper tracking wired end-to-end.",
    items: ["Responsive design", "Clear CTAs", "Speed-optimised", "Analytics & tracking"],
  },
  {
    step: "03",
    title: "Growth Engine",
    desc: "Monthly traffic, testing and tuning. We run Google Ads, test copy and layouts, and improve your numbers every month.",
    items: ["Google Ads management", "A/B testing", "Monthly reporting", "Continuous improvement"],
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
    a: "Trade and service businesses: electricians, plumbers, builders, landscapers, cleaners, and similar. If your customers find you online and you do the work locally, we're a good fit.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the scope, but most clients invest between £800 and £2,000 per month for the full system. We'll give you a clear number on the discovery call, no surprises.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see a measurable uplift within the first 4–6 weeks. The system compounds over time; month three is always better than month one.",
  },
  {
    q: "Do I need to do anything?",
    a: "Very little. We handle the website, the ads, the tracking and the optimisation. You answer the phone when it rings and do the work you’re great at.",
  },
  {
    q: "What if it doesn't work?",
    a: "We don't lock you into long contracts. If the numbers aren't where they should be after 90 days, you can walk away. But honestly, that hasn't happened yet.",
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
        className="relative box-border px-6 pb-16 pt-[60px] text-center"
        style={{
          background:
            "radial-gradient(60% 42% at 50% 0%, rgba(226,229,222,0.9), transparent 72%)",
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              We build the system that brings you enquiries.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Most trade businesses have a website that sits there doing
              nothing. We build one that drives traffic, converts visitors and
              tracks every enquiry, so your phone actually rings.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/book">Get your free audit</Button>
              <Button href="/results" variant="ghost">
                See real results
              </Button>
            </div>
          </Reveal>
        </div>

      </section>

      {/* Diamond scroll → stat cards */}
      <BrandTiles />

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-24 pt-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              How it works
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              One system. Three stages.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((item) => (
              <Reveal key={item.step}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  {/* Mini UI illustration area */}
                  <div className="mb-5 rounded-[var(--radius-lg)] bg-[var(--color-surface-sunken)] p-4">
                    {item.step === "01" && (
                      /* Checklist UI */
                      <div className="flex flex-col gap-2">
                        {item.items.map((it, idx) => (
                          <div key={it} className="flex items-center gap-2.5">
                            <span
                              className={cn(
                                "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] text-[10px]",
                                idx < 3
                                  ? "bg-[var(--color-accent)] text-white"
                                  : "border border-[var(--color-hairline)] bg-white",
                              )}
                            >
                              {idx < 3 ? "✓" : ""}
                            </span>
                            <span className="text-xs text-[var(--color-ink-muted)]">
                              {it}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.step === "02" && (
                      /* Wireframe UI */
                      <div className="space-y-2">
                        <div className="h-2.5 w-3/4 rounded bg-[var(--color-hairline)]" />
                        <div className="h-2.5 w-1/2 rounded bg-[var(--color-hairline)]" />
                        <div className="mt-3 flex gap-2">
                          <div className="h-8 flex-1 rounded-[var(--radius-sm)] bg-[var(--color-accent)] opacity-80" />
                          <div className="h-8 flex-1 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-white" />
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-1.5">
                          {[1, 2, 3].map((n) => (
                            <div key={n} className="h-10 rounded-[var(--radius-sm)] bg-[var(--color-hairline)]" />
                          ))}
                        </div>
                      </div>
                    )}
                    {item.step === "03" && (
                      /* Bar chart */
                      <div className="flex items-end justify-between gap-2 px-1" style={{ height: 80 }}>
                        {[35, 50, 42, 65, 58, 80, 72, 90].map((h, idx) => (
                          <div
                            key={idx}
                            className="flex-1 rounded-t-[3px] bg-[var(--color-accent)] opacity-70"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-accent)]">
                    Stage {item.step}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/system" variant="ghost">
              See the full system
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-24 pt-20">
        <div className="mx-auto max-w-[800px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              What clients say
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Don&apos;t take our word for it
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
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-24 pt-20">
        <Reveal className="mb-10 text-center">
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
                Get a free 30-minute audit. No pitch, no obligation. We&apos;ll
                give you a straight answer on whether we can help.
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
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-20">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] sm:px-14">
            <h2 className="mx-auto max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(24px,3.2vw,34px)] font-extrabold leading-[1.12] tracking-[-0.02em]">
              Let&apos;s find where your business is losing enquiries
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-base leading-[1.6] text-white/70">
              A free 30-minute call. We&apos;ll look at your site, show you
              what&apos;s leaking, and tell you whether we can help.
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
