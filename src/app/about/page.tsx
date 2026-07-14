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

const REPLACES_TABLE = [
  {
    stage: "Ads",
    normally: "A separate PPC freelancer, another invoice, another login",
    withUs: "Google Ads run and tuned each week",
  },
  {
    stage: "SEO",
    normally: "An SEO agency writing blogs that do not rank",
    withUs: "Keyword-focused pages and links from trusted sources",
  },
  {
    stage: "Website",
    normally: "A one-off build, then it is someone else's problem",
    withUs: "Rebuilt properly, then maintained as a long-term asset",
  },
  {
    stage: "Enquiries",
    normally: "Calls, forms and WhatsApp in three different places, nothing chased",
    withUs: "One dashboard, triaged and chased. Missed calls caught by our team.",
  },
  {
    stage: "Reporting",
    normally: "GA4 you never open, or spreadsheets once a quarter",
    withUs: "One report tied to booked jobs, cost per job, and return on spend",
  },
];

const PRINCIPLES = [
  {
    n: 1,
    title: "Understand first",
    body: "Before we build a page or run an ad, we learn how homeowners in your area search and what makes them pick one trade business over another. Guesswork is what most agencies charge for.",
  },
  {
    n: 2,
    title: "Build to convert",
    body: "Fast, clear, honest. Every page has one job: turn a homeowner into an enquiry. No filler, no stock hero shots, no clever animations getting in the way.",
  },
  {
    n: 3,
    title: "Keep improving",
    body: "Launch is day one, not the finish line. We tune ads weekly, add landing pages each quarter, and push you up Google month after month. That is how a site becomes a long-term asset instead of a one-off cost.",
  },
];

const STANDARDS = [
  {
    n: "01",
    title: "Look before we sell",
    body: "No pitch until we have properly gone through your site, your rankings and your ads. If we cannot help, we say so on the call.",
  },
  {
    n: "02",
    title: "Talk straight",
    body: "No jargon walls, no inflated promises. If a channel will not pay back for your area or budget, we tell you before you spend a penny.",
  },
  {
    n: "03",
    title: "Show the numbers",
    body: "If it is not in the dashboard, we have not done the job. Every call, every form, every booked job, tied back to the ad or keyword that brought it in.",
  },
  {
    n: "04",
    title: "Stay after launch",
    body: "A site that stands still loses ground. We keep tuning it, adding pages, and earning links, so you stay at the top of Google month after month.",
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
              We&rsquo;re the growth team trade businesses can&rsquo;t afford to hire full-time.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Most trade businesses do not need more marketing. They need the
              website, SEO and ads they already pay for to actually turn into
              work. That is what we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PHILOSOPHY: converging into one flow ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-8 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              How we think about growth
            </div>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.12] tracking-[-0.02em]">
              One system out of the things you already pay for separately.
            </h2>
            <p className="mx-auto max-w-[640px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Our job is to be the layer that catches every enquiry that would
              otherwise slip. Site, ads, SEO, phone, forms and WhatsApp all
              converging into one flow. No dropped handoffs, no supplier
              pointing at another.
            </p>
          </Reveal>

          <Reveal>
            <ConvergenceVisual />
          </Reveal>
        </div>
      </section>

      {/* ── WHAT ONE SYSTEM REPLACES ── */}
      <section className="px-6 pb-20 pt-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What one team replaces.
            </h2>
            <p className="mx-auto mb-10 max-w-[540px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Every line below is usually a different supplier, a different
              invoice, and a different login. We bring the lot under one roof.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] shadow-[var(--shadow-1)]">
              <div className="hidden grid-cols-[0.8fr_1.4fr_1.4fr] gap-4 border-b border-[var(--color-hairline)] bg-[var(--color-surface-muted)] px-7 py-3 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)] sm:grid">
                <div>Stage</div>
                <div>Normally</div>
                <div>With Tandemm</div>
              </div>
              {REPLACES_TABLE.map((row, i) => (
                <div
                  key={row.stage}
                  className={`grid grid-cols-1 gap-2 px-7 py-5 sm:grid-cols-[0.8fr_1.4fr_1.4fr] sm:items-center sm:gap-4 ${
                    i > 0 ? "border-t border-[var(--color-hairline-soft)]" : ""
                  }`}
                >
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-bold">
                    {row.stage}
                  </div>
                  <div className="text-sm leading-[1.5] text-[var(--color-ink-muted)]">
                    {row.normally}
                  </div>
                  <div className="text-sm font-semibold leading-[1.5] text-[var(--color-accent-hover)]">
                    {row.withUs}
                  </div>
                </div>
              ))}
              <div className="bg-[var(--color-primary)] px-7 py-5 text-center text-[15px] font-semibold text-[var(--color-on-primary)]">
                One point of contact. One invoice. One number that matters:
                booked jobs.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THREE PRINCIPLES ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Three rules we don&rsquo;t break.
            </h2>
            <p className="mx-auto mb-12 max-w-[520px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Every decision runs through these three. If a job breaks one, we
              do not take it.
            </p>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What you get from us, every time.
            </h2>
            <p className="mx-auto mb-12 max-w-[520px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Not slogans. These are how we actually work, on every account.
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
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
              <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Before you change anything, see what is actually costing you jobs.
              </h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="/book"
                  variant="secondary"
                  className="border-white/25 bg-white text-[var(--color-primary)] hover:bg-white/90"
                >
                  Book a call
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

/* ── Converging-flow visual ─────────────────────────────── */

function ConvergenceVisual() {
  const sources = [
    { label: "Website", y: 40 },
    { label: "Google Ads", y: 100 },
    { label: "SEO", y: 160 },
    { label: "Forms", y: 220 },
    { label: "Phone", y: 280 },
    { label: "WhatsApp", y: 340 },
  ];

  return (
    <div className="mx-auto max-w-[900px] rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-1)] sm:p-8">
      <svg
        viewBox="0 0 900 380"
        preserveAspectRatio="xMidYMid meet"
        className="w-full"
        role="img"
        aria-label="Website, Google Ads, SEO, forms, phone and WhatsApp converging into the Tandemm system, which outputs booked jobs."
      >
        <defs>
          <marker
            id="about-arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--color-accent)" />
          </marker>
        </defs>

        {sources.map((s) => (
          <path
            key={s.label}
            d={`M 190 ${s.y} C 350 ${s.y}, 400 190, 560 190`}
            fill="none"
            stroke="var(--color-hairline)"
            strokeWidth="1.4"
            strokeDasharray="4 4"
          />
        ))}

        {sources.map((s) => (
          <g key={`src-${s.label}`}>
            <rect
              x="30"
              y={s.y - 18}
              rx="18"
              ry="18"
              width="160"
              height="36"
              fill="var(--color-surface-muted)"
              stroke="var(--color-hairline)"
              strokeWidth="1"
            />
            <text
              x="110"
              y={s.y + 4}
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="700"
              fill="var(--color-ink)"
            >
              {s.label}
            </text>
          </g>
        ))}

        <g>
          <rect
            x="560"
            y="140"
            rx="20"
            ry="20"
            width="200"
            height="100"
            fill="var(--color-primary)"
          />
          <text
            x="660"
            y="180"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="800"
            fill="var(--color-on-primary)"
          >
            Tandemm system
          </text>
          <text
            x="660"
            y="205"
            textAnchor="middle"
            fontFamily="var(--font-body)"
            fontSize="12"
            fill="rgba(255,255,255,0.75)"
          >
            One dashboard.
          </text>
          <text
            x="660"
            y="222"
            textAnchor="middle"
            fontFamily="var(--font-body)"
            fontSize="12"
            fill="rgba(255,255,255,0.75)"
          >
            Every enquiry caught.
          </text>
        </g>

        <path
          d="M 760 190 L 810 190"
          stroke="var(--color-accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#about-arrowhead)"
        />

        <g>
          <rect
            x="820"
            y="170"
            rx="10"
            ry="10"
            width="60"
            height="40"
            fill="var(--color-surface-muted)"
            stroke="var(--color-hairline)"
            strokeWidth="1"
          />
          <text
            x="850"
            y="195"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize="12"
            fontWeight="800"
            fill="var(--color-ink)"
          >
            Booked
          </text>
        </g>
      </svg>
    </div>
  );
}
