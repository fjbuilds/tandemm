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
              One team behind your website, your ads and every enquiry that comes in.
            </h1>
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
              The work you would otherwise lose.
            </h2>
            <p className="mx-auto max-w-[640px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Site, ads, SEO, phone, forms and WhatsApp all feed one system.
              Here is a sample day for one of our trade clients.
            </p>
          </Reveal>

          <Reveal>
            <DayLedger />
          </Reveal>
        </div>
      </section>

      {/* ── THREE PRINCIPLES ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              How we work
            </div>
            <h2 className="max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
              Three rules we don&rsquo;t break.
            </h2>
            <p className="mt-3 max-w-[520px] text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
              Every decision runs through these three. If a job breaks one,
              we don&rsquo;t take it.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-12">
            {PRINCIPLES.map((p) => (
              <Reveal key={p.n}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-t border-[var(--color-hairline)] py-7 first:border-t-0 first:pt-0 sm:gap-x-8 sm:py-9">
                  <span className="font-[family-name:var(--font-display)] text-[clamp(38px,9vw,64px)] font-extrabold leading-[0.8] tracking-[-0.03em] text-[var(--color-accent)]/25">
                    {String(p.n).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-[19px] font-bold sm:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="max-w-[520px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)] sm:text-[15.5px]">
                      {p.body}
                    </p>
                  </div>
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
                  Get my free audit
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

/* ── One-day ledger visual ───────────────────────────────── */

function DayLedger() {
  const entries = [
    { t: "07:42", source: "Missed call", detail: "SK4, consumer unit trip. Auto-text sent, five answers back by 08:03.", value: "£640", status: "Booked" },
    { t: "09:14", source: "Google Ads", detail: "EV charger enquiry, SW11. Widget picked up trade, area and property type.", value: "£1,200", status: "Quoting" },
    { t: "10:03", source: "WhatsApp", detail: "Repeat customer, kitchen rewire. Thread merged into existing lead.", value: "£3,800", status: "Booked" },
    { t: "12:31", source: "SEO", detail: "'Emergency electrician SE22'. Landed on service page, called from mobile.", value: "£220", status: "Booked" },
    { t: "14:17", source: "Missed call", detail: "Voicemail during a job. Auto-text qualified, no callback needed.", value: "£480", status: "Quoting" },
    { t: "18:52", source: "Form", detail: "After-hours enquiry, landlord. Auto-text booked a callback for 09:00.", value: "£950", status: "Callback" },
  ];

  const statusTone: Record<string, string> = {
    Booked: "bg-[var(--color-success-soft)] text-[var(--color-success)]",
    Quoting: "bg-[var(--color-accent-soft)] text-[var(--color-accent-hover)]",
    Callback: "bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)]",
  };

  return (
    <div className="mx-auto max-w-[920px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] shadow-[var(--shadow-1)]">
      {/* Header strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-6 py-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
            Wednesday · one client · one day
          </div>
          <div className="font-[family-name:var(--font-display)] text-[17px] font-bold text-[var(--color-ink)]">
            Six things that would have slipped, caught.
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-right">
          <Stat label="Enquiries" value="6" />
          <Stat label="Quoted" value="6" />
          <Stat label="Booked" value="3" tone="accent" />
          <Stat label="Pipeline" value="£7,290" tone="accent" />
        </div>
      </div>

      {/* Ledger rows */}
      <div className="divide-y divide-[var(--color-hairline-soft)]">
        {entries.map((e) => (
          <div
            key={e.t}
            className="grid grid-cols-[auto_auto_1fr_auto_auto] items-center gap-4 px-6 py-4 sm:gap-6"
          >
            <span className="font-mono text-[12px] font-semibold text-[var(--color-ink-muted)]">
              {e.t}
            </span>
            <span className="hidden rounded-full bg-[var(--color-surface-muted)] px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink)] sm:inline">
              {e.source}
            </span>
            <span className="text-[13.5px] leading-[1.5] text-[var(--color-ink)]">
              <span className="mr-2 inline rounded-full bg-[var(--color-surface-muted)] px-2 py-[2px] text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink)] sm:hidden">
                {e.source}
              </span>
              {e.detail}
            </span>
            <span className="font-[family-name:var(--font-display)] text-[14px] font-bold text-[var(--color-ink)]">
              {e.value}
            </span>
            <span
              className={`rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.06em] ${statusTone[e.status] ?? ""}`}
            >
              {e.status}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-hairline)] bg-[var(--color-primary)] px-6 py-4 text-center text-[13.5px] font-semibold text-[var(--color-on-primary)]">
        Without the system, most of these are a voicemail and a missed
        text. That is what we are actually selling.
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "accent";
}) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
        {label}
      </div>
      <div
        className={`font-[family-name:var(--font-display)] text-[18px] font-extrabold ${
          tone === "accent"
            ? "text-[var(--color-accent-hover)]"
            : "text-[var(--color-ink)]"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

