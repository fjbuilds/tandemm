"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { GuaranteeStrip } from "@/components/tandemm/GuaranteeStrip";
import { ContactOptions } from "@/components/tandemm/ContactOptions";
import {
  ReachFirstResult,
  ReachMissingCard,
  PostcodeProgress,
  ReportCard,
} from "@/components/tandemm/Mocks";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const DO_GRID = [
  {
    icon: "profile",
    title: "Your Google listing, working harder than you",
    body: "We set up and manage your Google Business Profile. The right categories, photos, descriptions, and details. So when someone searches for your trade nearby, Google puts you forward, not your competitor.",
  },
  {
    icon: "star",
    title: "More reviews without the awkward ask",
    body: "Reviews are the number one thing that moves you up Google Maps. We set up a system that makes getting them natural. No scripts, no cringe. Just happy customers leaving honest feedback.",
  },
  {
    icon: "everywhere",
    title: "Your name, everywhere it matters",
    body: "Google trusts businesses that show up consistently across the web. We build local citations (directories, trusted listings, and local sites) so your details match everywhere and Google ranks you higher.",
  },
  {
    icon: "signal",
    title: "We keep signalling you&rsquo;re active",
    body: "Google ranks businesses that look alive. We keep posting, updating, and replying month after month so Google sees you&rsquo;re active and bumps you up.",
  },
];

const TIMELINE = [
  {
    month: "Month 1",
    label: "Foundation",
    body: "We audit where you actually show up today, sort out your Google Business Profile, and lay the tracks. You&rsquo;ll see the first shifts in how you appear across your area within weeks.",
  },
  {
    month: "Month 3",
    label: "Momentum",
    body: "Reviews are stacking up, your citations are live across the web, and Google is starting to trust the signal. Most trades feel a clear step up in visibility around this point.",
  },
  {
    month: "Month 6",
    label: "Results",
    body: "You&rsquo;re showing up consistently across your postcodes, for your trade. The phone rings more. Customers find you first. At this point the plan is paying for itself, comfortably.",
  },
];

export default function LocalSearchPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="features" />

      {/* HERO — split copy left, first-result visual right */}
      <section className="v2-local-hero v2-local-hero--split">
        <div className="v2-local-hero-inner">
          <div className="v2-local-hero-copy">
            <Reveal>
              <span className="v2-eyebrow v2-eyebrow--on-dark">Tandemm Reach</span>
            </Reveal>
            <Reveal>
              <h1 className="v2-local-hero-title">
                Be the first name<br />they find.
              </h1>
            </Reveal>
            <Reveal>
              <p className="v2-local-hero-sub">
                Nearby customers search for your trade every day. Tandemm
                Reach is the monthly work that puts you in front of them on
                Google, then keeps you there while your competitors slide
                down the page.
              </p>
            </Reveal>
            <Reveal>
              <div className="v2-local-hero-cta">
                <Button
                  href="/book"
                  className="bg-white text-[var(--color-primary)] hover:bg-white/90"
                >
                  Find out what&apos;s costing you jobs
                </Button>
                <Button href="/" variant="secondary">Back to the plan</Button>
              </div>
            </Reveal>
          </div>
          <div className="v2-local-hero-visual">
            <Reveal>
              <ReachFirstResult />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM — someone nearby just searched for your trade */}
      <section className="v2-problem">
        <div className="v2-problem-inner">
          <Reveal>
            <div className="v2-problem-visual">
              <ReachMissingCard />
            </div>
          </Reveal>
          <div className="v2-problem-copy">
            <Reveal>
              <span className="v2-eyebrow v2-eyebrow--accent">The problem</span>
            </Reveal>
            <Reveal>
              <h2 className="v2-h2 v2-h2--left">
                Someone nearby just searched<br />for your trade.
              </h2>
            </Reveal>
            <Reveal>
              <p className="v2-lede v2-lede--left">
                They found three names. Yours wasn&rsquo;t one of them. That
                customer&rsquo;s gone. They&rsquo;ve already called someone
                else, maybe someone who does half the quality work you do.
              </p>
            </Reveal>
            <Reveal>
              <p className="v2-lede v2-lede--left v2-problem-punch">
                It&rsquo;s not about being the best. It&rsquo;s about being found.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS — big stats */}
      <section className="v2-stats">
        <div className="v2-stats-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">The numbers</span>
            <h2 className="v2-h2">Why being found locally is the whole game.</h2>
          </Reveal>
          <div className="v2-stats-grid v2-stats-grid--two">
            <Reveal>
              <div className="v2-stat">
                <div className="v2-stat-num">75%</div>
                <div className="v2-stat-label">
                  of people don&rsquo;t go past the first page of Google.
                </div>
                <div className="v2-stat-src">HubSpot via Backlinko</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="v2-stat">
                <div className="v2-stat-num">76%</div>
                <div className="v2-stat-label">
                  of people who search for something nearby visit a business
                  within one day.
                </div>
                <div className="v2-stat-src">Google · Think with Google</div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="v2-stats-close">
              If customers can&rsquo;t find you when they&rsquo;re ready to
              buy, they&rsquo;ll hire someone they can find.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT TO EXPECT — postcode progress */}
      <section className="v2-results">
        <div className="v2-results-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">What to expect</span>
            <h2 className="v2-h2">
              Postcode by postcode,<br />you go from invisible to first.
            </h2>
            <p className="v2-lede">
              Google doesn&rsquo;t rank you across the whole country, it ranks
              you postcode by postcode. Tandemm Reach works each one until
              your trade in your area lands you on the map.
            </p>
          </Reveal>
          <Reveal>
            <div className="v2-results-visual">
              <PostcodeProgress />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO — 2x2 grid */}
      <section className="v2-do">
        <div className="v2-do-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">What Tandemm Reach actually does</span>
            <h2 className="v2-h2">We make you the first name they find.</h2>
            <p className="v2-lede">
              Plain English. No jargon. Here&rsquo;s how we get you showing up
              when nearby customers search for your trade.
            </p>
          </Reveal>
          <div className="v2-do-grid">
            {DO_GRID.map((d) => (
              <Reveal key={d.title}>
                <div className="v2-do-cell">
                  <div className="v2-do-icon">
                    <DoIcon name={d.icon} />
                  </div>
                  <h3
                    className="v2-do-title"
                    dangerouslySetInnerHTML={{ __html: d.title }}
                  />
                  <p
                    className="v2-do-body"
                    dangerouslySetInnerHTML={{ __html: d.body }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MONTHLY REPORT */}
      <section className="v2-report">
        <div className="v2-report-inner">
          <div className="v2-report-copy">
            <Reveal><span className="v2-eyebrow">The Tandemm monthly report</span></Reveal>
            <Reveal>
              <h2 className="v2-h2 v2-h2--left">
                Every month, you see<br />exactly what&rsquo;s working.
              </h2>
            </Reveal>
            <Reveal>
              <p className="v2-lede v2-lede--left">
                Most agencies send a report you can&rsquo;t read, then go quiet.
                We send the Tandemm report. Where you&rsquo;re showing up, how
                your visibility is trending, what we did this month, and
                what&rsquo;s next. Plain English, one page, straight answers.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="v2-report-visual">
              <ReportCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHEN WILL I SEE RESULTS — 3-month timeline */}
      <section className="v2-timeline">
        <div className="v2-timeline-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">When will I see results</span>
            <h2 className="v2-h2">Honest expectations, no smoke and mirrors.</h2>
            <p className="v2-lede">
              SEO takes a few months to properly compound. Anyone promising
              you the top of Google inside 30 days is either bluffing or
              about to burn your budget. Here&rsquo;s the shape of it.
            </p>
          </Reveal>
          <div className="v2-timeline-grid">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.month}>
                <div className="v2-timeline-card">
                  <div className="v2-timeline-step">Step {i + 1}</div>
                  <div className="v2-timeline-month">{t.month}</div>
                  <div className="v2-timeline-label">{t.label}</div>
                  <p className="v2-timeline-body">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE + CONTACT (slimmed — no wrapper heading) */}
      <section className="v2-local-cta">
        <div className="v2-local-cta-inner">
          <Reveal>
            <div className="v2-local-cta-guarantee">
              <GuaranteeStrip />
            </div>
          </Reveal>
          <ContactOptions />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function DoIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "profile")
    return (
      <svg {...common}>
        <path d="M12 2l9 4-3 6c0 5-3.5 9.5-6 10-2.5-.5-6-5-6-10L3 6l9-4z" />
      </svg>
    );
  if (name === "star")
    return (
      <svg {...common}>
        <path d="M12 3l2.6 5.6 6.1.9-4.4 4.3 1.1 6.1L12 17l-5.4 2.9 1.1-6.1L3.3 9.5l6.1-.9L12 3z" />
      </svg>
    );
  if (name === "everywhere")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M2 12h4l3-8 5 16 3-8h5" />
    </svg>
  );
}
