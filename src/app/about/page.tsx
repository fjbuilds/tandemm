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

const MONTH_TIMELINE = [
  {
    n: 1,
    title: "First week",
    body: "We look at last month together. Call or WhatsApp, your choice. What worked, what didn’t, what changes for the next 30 days. Ten minutes, no jargon.",
  },
  {
    n: 2,
    title: "The middle",
    body: "The quiet work. New landing pages ship, ads get tuned, Google keeps rising. You keep working. If nothing’s on fire, you won’t hear from us. If something is, you will.",
  },
  {
    n: 3,
    title: "Last week",
    body: "One simple dashboard. Every enquiry, every call, every booked job, traced back to the ad or keyword that brought it in. No spreadsheet homework for you.",
  },
];

const FOUNDERS = [
  {
    name: "Owen Harris",
    photo: "/brand/team/owen.jpg",
    imgClass: "object-center",
    bio: "I handle design, SEO, and the day-to-day sales. Building the sites, doing the ranking work, and picking up the phone. Nine years in sales, launched my first business in 2024, and then in 2026, Tandemm was born, after watching too many friends and family in trades pay over the odds for something that shouldn’t be this complicated.",
  },
  {
    name: "FJ",
    photo: "/brand/team/fj.jpg",
    imgClass: "object-center",
    bio: "Background in all things Google, ads and marketing. Realised it was time to strap the boots on and work with the industry I know best. On Tandemm I run the paid side, and I’ll make sure your name rings bells in your town and the surrounding areas, sticking by your side the whole way.",
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
      <section className="px-6 pb-14 pt-[60px] text-center">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              About
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Two of us.
              <br />
              Working in{" "}
              <span className="lowercase tracking-[-0.045em] text-[var(--color-primary)]">
                tande<span className="tracking-[-0.24em]">m</span>m
              </span>
              .
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
              We only work with tradespeople. Not gyms, not clinics,
              not restaurants. Every hour we spend, every page we build,
              every ad we run, is inside one industry, so we get good at it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {FOUNDERS.map((f) => (
            <Reveal key={f.name}>
              <article className="flex h-full flex-row items-stretch overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface-muted)]">
                <div className="relative aspect-square w-[128px] flex-shrink-0 overflow-hidden bg-[var(--color-canvas-deep)] sm:w-[140px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.photo}
                    alt={`Portrait of ${f.name}`}
                    className={`h-full w-full object-cover grayscale ${f.imgClass}`}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center px-4 py-3 sm:px-5 sm:py-4">
                  <div className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    Co-founder
                  </div>
                  <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-[17px] font-bold leading-tight sm:text-[18px]">
                    {f.name}
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-[var(--color-ink-muted)] sm:text-[13.5px]">
                    {f.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Why we started this
            </div>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
              We watched family and friends do good work. And still fight for the next job.
            </h2>
          </Reveal>

          <div className="space-y-6 text-[16.5px] leading-[1.7] text-[var(--color-ink)]">
            <Reveal>
              <p>
                Both of us saw first-hand how volatile a trade business can be.
                Family and friends on the tools, too busy on jobs to think about
                long-term growth, so no buffer for the quiet spells. A good
                August, a dead November. Chasing quotes that never come back.
                The kind of business everyone recommends, that still has
                to fight for the next booking.
              </p>
            </Reveal>
            <Reveal>
              <p>
                The problem was never the work. So they said. It was that nobody
                in their town knew they existed. They had a website, a Google
                profile, the areas they cover listed out. Looked fine from the
                outside. Just didn&rsquo;t do the one thing a website is meant
                to do: turn strangers into enquiries.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Meanwhile you see trades get taken advantage of. Charged an arm
                and a leg for a website that looks basic. SEO that was
                overpromised and underdelivered. Ads sold on the promise that
                if they just invest a bit more each month, they&rsquo;re
                guaranteed X more clients. Every trade we speak to has been
                burned by at least one of them.
              </p>
            </Reveal>
            <Reveal>
              <p>
                That&rsquo;s why we started Tandemm. Not to sell the same
                promises back to the same people. To do the slow, ongoing work
                properly, one town at a time, for the kind of trades we grew up
                around. No guaranteed lead-count nonsense. No twelve-month
                lock-ins. One flat fee, the same numbers each month, and two
                people you can actually get on the phone.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE DEAL (pattern-interrupt: dark, signed pledge) ── */}
      <section className="bg-[var(--color-ink)] px-6 py-24 text-[var(--color-canvas)]">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              The deal, in writing
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4.8vw,52px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              If the phone isn&rsquo;t ringing more inside 90 days,
              <span className="text-[var(--color-accent)]"> you don&rsquo;t pay </span>
              the next month.
            </h2>
          </Reveal>

          <Reveal>
            <ul className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2">
              {[
                "No 12-month lock-in. Cancel any month.",
                "No small print in month four. What you sign is the whole thing.",
                "No junior on your account. One of us, every time.",
                "You own the site, the domain, and every ad account. Always.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 border-t border-[var(--color-canvas)]/15 py-5 text-[15.5px] leading-[1.5] sm:text-[16px] sm:[&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-[var(--color-canvas)]/15 sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8"
                >
                  <span className="mt-[6px] block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-[var(--color-canvas)]/15 pt-6">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-canvas)]/60">
                Signed
              </div>
              <div className="font-[family-name:var(--font-display)] text-[22px] font-extrabold italic tracking-[-0.01em] sm:text-[26px]">
                Owen &amp; FJ
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── A MONTH WITH TANDEMM ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              A month with tandemm
            </div>
            <h2 className="max-w-[620px] font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
              What actually happens between the 1st and the 31st.
            </h2>
          </Reveal>

          <div className="mt-10 sm:mt-12">
            {MONTH_TIMELINE.map((p) => (
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

      {/* ── FINAL CTA ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
              <h2 className="mx-auto max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                Have a look at what&rsquo;s actually costing you jobs.
              </h2>
              <p className="mx-auto mt-4 max-w-[500px] text-[15.5px] leading-[1.55] opacity-80">
                Free 20-minute call. One of us, not a salesperson. We tell you
                what we&rsquo;d change and whether it&rsquo;s worth changing.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="/book"
                  variant="secondary"
                  className="border-white/25 bg-white text-[var(--color-primary)] hover:bg-white/90"
                >
                  Book the call
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
