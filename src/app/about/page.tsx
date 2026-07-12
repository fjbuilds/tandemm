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
    title: "Hire in-house",
    desc: "£40k+ a year for one person who can't cover ads, SEO, the site and the tracking on their own.",
  },
  {
    title: "Juggle freelancers",
    desc: "A web designer, an SEO, an ads person. Three invoices, three logins, nobody responsible for the number that matters.",
  },
  {
    title: "One team, one system",
    desc: "Ads, SEO, your website and the reporting run together. One point of contact, one dashboard, booked jobs month after month.",
  },
];

const ARROW_ITEMS = [
  "Understand how homeowners search before we write a line of copy",
  "Take out anything between a visitor landing and picking up the phone",
  "Track calls, forms and jobs back to the pound that brought them in",
  "Keep improving the site long after launch, so it earns for years",
];

const REPLACES_TABLE = [
  {
    stage: "Ads",
    normally: "A separate PPC freelancer, another invoice, another login",
    withUs: "Google Ads run and tuned each week",
  },
  {
    stage: "SEO",
    normally: "An SEO agency writing blogs that don't rank",
    withUs: "Keyword-focused pages and links from trusted sources",
  },
  {
    stage: "Website",
    normally: "A one-off build, then it's someone else's problem",
    withUs: "Rebuilt properly, then maintained as a long-term asset",
  },
  {
    stage: "Reporting",
    normally: "GA4 you never open, or spreadsheets once a quarter",
    withUs: "Live dashboard, so you know where every lead came from",
  },
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
    body: "Before we build a page or run an ad, we learn how homeowners in your area search and what makes them pick one trade over another. Guesswork is what most agencies charge for.",
  },
  {
    n: 2,
    title: "Build to convert",
    body: "Fast, clear, honest. Every page has one job: turn a visitor into a booked call. No filler, no stock hero shots, no clever animations that get in the way.",
  },
  {
    n: 3,
    title: "Keep improving",
    body: "Launch is day one, not the finish line. We tune ads weekly, add landing pages each quarter, and push you up the rankings month after month. That's how a site becomes a long-term asset.",
  },
];

const STANDARDS = [
  {
    n: "01",
    title: "Look before we sell",
    body: "No pitch until we've properly gone through your site, your rankings and your ads. If we can't help, we say so on the call.",
  },
  {
    n: "02",
    title: "Talk straight",
    body: "No jargon walls, no inflated promises. If a channel won't pay back for your area or budget, we'll tell you before you spend a penny.",
  },
  {
    n: "03",
    title: "Show the numbers",
    body: "If we can't show it in the dashboard, we haven't done the job. Calls, forms and booked jobs, tied back to the ad or keyword that brought them in.",
  },
  {
    n: "04",
    title: "Stay after launch",
    body: "A site that stands still loses ground. We keep tuning, adding pages, and earning links so you stay at the top of the results month after month.",
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
              Most UK trades don&apos;t need more marketing. They need the ads,
              the site and the SEO they already pay for to actually turn into
              booked jobs. That&apos;s what we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHY TANDEMM EXISTS ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Most trades are sold the pieces, not the system.
            </h2>
            <p className="mx-auto mb-10 max-w-[560px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Three suppliers, three invoices, nobody joined up. You end up
              with a smart-looking site that doesn&apos;t bring the phone to
              life. There are three ways this usually goes.
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
                Tandemm runs ads, SEO, your website and the reporting in one
                place, held to one number: booked jobs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT ONE SYSTEM REPLACES ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <h2 className="mb-4 text-center font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              What one team replaces.
            </h2>
            <p className="mx-auto mb-10 max-w-[520px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
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
                One point of contact. One invoice. One number that matters,
                booked jobs.
              </div>
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
                  A site has one job.
                  <br />
                  Get the phone to ring.
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
              Three rules we don&apos;t break.
            </h2>
            <p className="mx-auto mb-12 max-w-[520px] text-center text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              Every decision runs through these three. If a job breaks one, we
              don&apos;t take it.
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
              <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Before you change anything, see what&apos;s actually costing you jobs.
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
