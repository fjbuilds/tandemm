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
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              About
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Two of us. One system. Built for tradespeople.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              We ran ads and built sites for other people&rsquo;s
              agencies for years, watched the same leaks in the same
              trade accounts, and got tired of not fixing them. So we
              started this. Small team, close to the work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1060px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              The founders
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              You get us. Not an account manager.
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              When you sign up, the people who built the system are the
              same ones running your account. No handovers, no juniors,
              no offshored ticket queue.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <FounderCard
                role="Ads & growth"
                name="The one who lives in ad accounts"
                blurb="Runs the paid side: Google Ads, LSA, Meta. Spent years managing budget for other agencies before deciding trades deserved a fairer deal. Will tell you straight if your postcode won&rsquo;t pay back."
                accent="var(--color-accent)"
                avatar="growth"
              />
            </Reveal>
            <Reveal>
              <FounderCard
                role="Build & systems"
                name="The one who wires it all up"
                blurb="Builds the sites, the tracking, the dashboard and the missed-call system. Cares more than is healthy about page speed on a mid-range Android. Has strong opinions about hero images."
                accent="var(--color-primary)"
                avatar="build"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mx-auto mt-10 max-w-[720px] rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-7 py-6 text-center">
              <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                Between us: over a decade of ads, SEO and build work,
                mostly for local service businesses. We&rsquo;ve seen
                what breaks. We built this so it doesn&rsquo;t.
              </p>
            </div>
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

/* ── Founder card ─────────────────────────────────────────── */

function FounderCard({
  role,
  name,
  blurb,
  accent,
  avatar,
}: {
  role: string;
  name: string;
  blurb: string;
  accent: string;
  avatar: "growth" | "build";
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] shadow-[var(--shadow-1)]">
      <div
        className="relative flex h-[160px] items-end justify-center px-6"
        style={{
          background: `radial-gradient(120% 90% at 50% 0%, ${accent}22, transparent 70%)`,
        }}
      >
        <FounderAvatar variant={avatar} accent={accent} />
      </div>
      <div className="flex flex-1 flex-col px-7 py-6">
        <span
          className="mb-2 inline-flex w-fit rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[0.08em]"
          style={{ backgroundColor: `${accent}1F`, color: accent }}
        >
          {role}
        </span>
        <h3 className="mb-2 font-[family-name:var(--font-display)] text-[19px] font-bold leading-[1.2]">
          {name}
        </h3>
        <p className="text-[14.5px] leading-[1.6] text-[var(--color-ink-muted)]">
          {blurb}
        </p>
      </div>
    </div>
  );
}

function FounderAvatar({
  variant,
  accent,
}: {
  variant: "growth" | "build";
  accent: string;
}) {
  return (
    <svg
      viewBox="0 0 120 130"
      width="120"
      height="130"
      aria-hidden="true"
      className="drop-shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
    >
      {/* Body */}
      <path
        d="M12 130 C 14 100, 34 88, 60 88 C 86 88, 106 100, 108 130 Z"
        fill={accent}
        opacity="0.85"
      />
      {/* Neck */}
      <rect x="52" y="72" width="16" height="18" rx="4" fill="#F1D3B5" />
      {/* Head */}
      <circle cx="60" cy="52" r="26" fill="#F6DEC1" />
      {/* Hair */}
      {variant === "growth" ? (
        <path
          d="M36 46 C 36 30, 48 22, 60 22 C 76 22, 86 32, 86 46 C 86 40, 78 36, 60 36 C 46 36, 40 40, 36 46 Z"
          fill="#3A2A1E"
        />
      ) : (
        <path
          d="M34 50 C 34 28, 50 20, 62 22 C 78 24, 88 34, 88 50 L 82 44 C 78 40, 70 38, 62 38 C 52 38, 44 42, 40 48 Z"
          fill="#2A2015"
        />
      )}
      {/* Eyes */}
      <circle cx="51" cy="52" r="2.2" fill="#1E1A16" />
      <circle cx="69" cy="52" r="2.2" fill="#1E1A16" />
      {/* Smile */}
      {variant === "growth" ? (
        <path
          d="M50 62 Q 60 70 70 62"
          stroke="#1E1A16"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      ) : (
        <path
          d="M52 63 Q 60 68 68 63"
          stroke="#1E1A16"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      )}
      {/* Prop */}
      {variant === "growth" ? (
        // Little upward chart in hand
        <g transform="translate(78 92)">
          <rect x="0" y="0" width="26" height="18" rx="3" fill="#FFF" stroke={accent} strokeWidth="1.5" />
          <polyline points="3,14 9,9 14,12 22,4" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : (
        // Wrench / spanner
        <g transform="translate(16 96) rotate(-20)">
          <path
            d="M0 8 L 18 8 L 22 4 L 26 8 L 22 12 L 18 8"
            fill="none"
            stroke="#FFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}
    </svg>
  );
}

