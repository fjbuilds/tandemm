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

const DISCONNECTED_PIECES = [
  {
    title: "Website company",
    desc: "Builds it, disappears.",
  },
  {
    title: "SEO company",
    desc: "Writes blogs nobody reads.",
  },
  {
    title: "Ads company",
    desc: "Sends traffic to a page that doesn’t convert.",
  },
];

const ARROW_ITEMS = [
  "Understand your customers before we touch a line of code",
  "Remove friction between someone landing and someone enquiring",
  "Measure performance with real numbers, not vanity metrics",
  "Improve continuously, well past launch",
];

const OPTIMISE_TABLE = [
  { label: "Looks impressive", goal: false },
  { label: "Enquiries generated", goal: true },
  { label: "Cost per enquiry", goal: true },
  { label: "Return on spend", goal: true },
];

const PRINCIPLES = [
  {
    n: 1,
    title: "Understand first",
    body: "Before we build anything, we learn how your customers think, what they search for, and where they drop off. Strategy without research is guesswork.",
  },
  {
    n: 2,
    title: "Build foundations",
    body: "Fast, clear, conversion-focused. Every page has a job. Every element earns its place. No filler, no fluff, no “we’ll fix it later.”",
  },
  {
    n: 3,
    title: "Improve continuously",
    body: "Launch is the starting line, not the finish. We track, test, and refine every month so your system gets better while you focus on running your business.",
  },
];

const STANDARDS = [
  {
    n: "01",
    title: "Diagnose before we sell",
    body: "We won’t pitch you a package before we understand your problem. Every engagement starts with research.",
  },
  {
    n: "02",
    title: "Speak plainly",
    body: "No jargon walls, no inflated promises. If something won’t work, we’ll say so before you spend a penny.",
  },
  {
    n: "03",
    title: "Measure everything",
    body: "If we can’t show you the numbers, we haven’t done our job. Every recommendation ties back to a metric you care about.",
  },
  {
    n: "04",
    title: "Stay after launch",
    body: "A website that sits still falls behind. We stay on, optimise monthly, and keep your system earning.",
  },
];

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="about" />

      {/* ── HERO ── */}
      <section className="px-6 pb-16 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              We build the system behind consistent business growth.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Most trade and service businesses don&apos;t need more marketing.
              They need the marketing they already pay for to actually work.
              That&apos;s what we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHY TANDEMM EXISTS ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Most businesses are sold disconnected pieces.
            </h2>
            <p className="mx-auto mb-10 max-w-[560px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Three suppliers. Three invoices. Zero coordination. The result?
              A website that looks fine but doesn&apos;t generate enquiries.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {DISCONNECTED_PIECES.map((piece) => (
                <div
                  key={piece.title}
                  className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-6 py-7 text-center"
                >
                  <div className="mb-1.5 text-[17px] font-semibold">
                    {piece.title}
                  </div>
                  <div className="text-sm leading-[1.5] text-[var(--color-ink-muted)]">
                    {piece.desc}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-8 text-center text-[var(--color-on-primary)]">
              <p className="mx-auto max-w-[640px] text-[19px] font-semibold leading-[1.5]">
                Tandemm exists to bring the pieces together: research, design,
                development, and ongoing optimisation in one system
                that&apos;s accountable to one number: enquiries.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PHILOSOPHY ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              The philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            {/* Left column */}
            <Reveal>
              <div>
                <h3 className="mb-6 font-[family-name:var(--font-display)] text-[22px] font-bold leading-[1.2]">
                  A website is a tool for one job:
                  <br />
                  getting the phone to ring.
                </h3>
                <div className="flex flex-col gap-4">
                  {ARROW_ITEMS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-[3px] text-[var(--color-accent-hover)]">
                        &rarr;
                      </span>
                      <span className="text-[15px] leading-[1.55] text-[var(--color-ink)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right column — optimise card */}
            <Reveal>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] p-7">
                <div className="mb-5 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  What we optimise for
                </div>
                <div className="flex flex-col gap-3">
                  {OPTIMISE_TABLE.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-white/60 px-5 py-3"
                    >
                      <span className="text-[15px] font-medium">
                        {row.label}
                      </span>
                      <span
                        className={`rounded-[var(--radius-pill)] px-3 py-1 text-xs font-bold uppercase tracking-[0.04em] ${
                          row.goal
                            ? "bg-[var(--color-success-soft)] text-[var(--color-success)]"
                            : "bg-[var(--color-surface-sunken)] text-[var(--color-ink-faint)]"
                        }`}
                      >
                        {row.goal ? "The goal" : "Not the goal"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THREE PRINCIPLES ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Three principles we don&apos;t break.
            </h2>
            <p className="mx-auto mb-12 max-w-[520px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Everything we do filters through these. If a decision
              contradicts one, we don&apos;t do it.
            </p>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Dashed connector line */}
            <div className="pointer-events-none absolute top-[50%] right-0 left-0 hidden h-px border-t border-dashed border-[var(--color-hairline)] sm:block" />

            {PRINCIPLES.map((p) => (
              <Reveal key={p.n}>
                <div className="relative rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-7 py-8">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[var(--color-on-primary)]">
                    {p.n}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[19px] font-bold">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE THINK ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              The standards we hold ourselves to.
            </h2>
            <p className="mx-auto mb-12 max-w-[520px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Not slogans. These are the rules we actually follow.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {STANDARDS.map((s) => (
              <Reveal key={s.n}>
                <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-7 py-7">
                  <div className="mb-3 text-sm font-bold text-[var(--color-accent-hover)]">
                    {s.n}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[18px] font-bold">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
              <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Before making changes, understand where your opportunities are.
              </h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="/book"
                  variant="secondary"
                  className="border-white/25 bg-white text-[var(--color-primary)] hover:bg-white/90"
                >
                  Get your free audit
                </Button>
                <Button href="/results" variant="secondary">
                  See the results
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
