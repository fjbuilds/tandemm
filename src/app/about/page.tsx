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

const PROCESS_STEPS = [
  {
    n: 1,
    when: "Day one, 30 seconds",
    title: "Scan your site",
    body: "Pop your site into the scanner and get an instant, plain-English score of where it’s losing you enquiries. No sign-up, no details. Just a straight look at what’s there.",
  },
  {
    n: 2,
    when: "Within 24 hours",
    title: "One of us calls you",
    body: "We go through your site, your rankings and what your competition are doing, then give you a straight answer on whether we can help. If we can’t, we say so on the call.",
  },
  {
    n: 3,
    when: "Five minutes of your time",
    title: "Send us a few bits",
    body: "Photos of your work, the services you offer, the areas you cover, and your team. That’s the whole ask from you. We build everything else around it.",
  },
  {
    n: 4,
    when: "Inside 5 working days",
    title: "Your site gets built",
    body: "Full working site to review, not a rough sketch. We go back and forth on the wording and the layout until every page reads the way you want it to.",
  },
  {
    n: 5,
    when: "Around day 7",
    title: "Everything goes live",
    body: "Site, tracking, SEO and any ads switch on together. From day one you’re on one dashboard, seeing every enquiry traced back to what brought it in.",
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
    bio: "Background in all things Google, ads and marketing. Realised it was time to strap the boots on and work with the industry I know best. On Tandemm I run the paid ads side, and I’ll make sure your name rings bells in your town and the surrounding areas, sticking by your side the whole way.",
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

      {/* ── FIRST HELLO → LIVE (process timeline) ── */}
      <section className="bg-[var(--color-ink)] px-6 py-20 text-[var(--color-canvas)] sm:py-24">
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              The process
            </div>
            <h2 className="max-w-[620px] font-[family-name:var(--font-display)] text-[clamp(28px,3.8vw,42px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              From your first click to your site being live.
            </h2>
          </Reveal>

          {/* Vertical connected timeline */}
          <div className="relative mt-12 sm:mt-14">
            <div
              aria-hidden
              className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-[var(--color-accent)]/30 sm:left-[27px]"
            />

            {PROCESS_STEPS.map((p, i) => (
              <Reveal key={p.n}>
                <div className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[var(--color-accent)] font-[family-name:var(--font-display)] text-[18px] font-extrabold text-white shadow-[0_0_0_5px_var(--color-ink)] sm:h-[56px] sm:w-[56px] sm:text-[20px]">
                      {p.n}
                    </div>
                  </div>
                  <div className="flex-1 pt-1.5 sm:pt-2">
                    <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                      {p.when}
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-[19px] font-bold text-[var(--color-canvas)] sm:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="max-w-[560px] text-[14.5px] leading-[1.6] text-[var(--color-canvas)]/70 sm:text-[15px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Conclusion */}
          <Reveal>
            <div className="mt-6 rounded-[var(--radius-xl)] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-6 py-6 sm:px-8 sm:py-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <div className="font-[family-name:var(--font-display)] text-[26px] font-extrabold leading-none tracking-[-0.02em] text-[var(--color-accent)] sm:text-[32px]">
                  ~7 days
                </div>
                <div className="text-[14.5px] leading-[1.55] text-[var(--color-canvas)]/85 sm:text-[15px]">
                  From first click to being live. Your side of it: a phone call
                  and a handful of photos. That&rsquo;s honestly it. We handle
                  the rest.
                </div>
              </div>
            </div>
          </Reveal>
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
