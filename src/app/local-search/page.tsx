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
    title: "Your Google Business Profile, run for you",
    what: "We take over your Google Business Profile. Categories, service areas, opening hours, photos, descriptions, the lot. Kept live, kept accurate, month after month.",
    benefit: "When someone in your postcodes types your trade into Google, your business is the one that shows up ready to book.",
  },
  {
    icon: "star",
    title: "Reviews on autopilot",
    what: "Every finished job triggers a friendly, on-brand review request the moment you&rsquo;ve been paid. No scripts, no awkward asks, no forgetting.",
    benefit: "Your review count climbs quietly in the background. More stars, more trust, and a listing Google is happy to push up the map.",
  },
  {
    icon: "everywhere",
    title: "Your name, matching everywhere",
    what: "We list your business consistently across the directories, trade sites and local pages Google actually checks. Name, address, phone, all identical.",
    benefit: "Google trusts you more, so you rank higher. And when a customer double-checks you on another site, everything looks legit.",
  },
  {
    icon: "signal",
    title: "Live signals, every single week",
    what: "Fresh posts, updated photos, replies to reviews, weekly activity that tells Google your business is alive and open for work.",
    benefit: "Listings that go quiet slide down the map. Yours doesn&rsquo;t, so the phone keeps ringing while your competitors go stale.",
  },
];

const TIMELINE = [
  {
    month: "Month 1",
    label: "Foundation",
    body: "We audit exactly where you show up today, sort out your Google Business Profile, and lay the groundwork. Early wins land quickly, so you can see the shift starting in your own area.",
    benefit: "You stop being invisible in your postcodes.",
  },
  {
    month: "Month 3",
    label: "Momentum",
    body: "Reviews are stacking up, your citations are live across the web, and Google is starting to trust the signal. Most trades feel a clear step up in visibility around this point.",
    benefit: "The right kind of enquiries start landing on your phone.",
  },
  {
    month: "Month 6",
    label: "Results",
    body: "You&rsquo;re showing up consistently across your postcodes, for your trade. The phone rings more. Customers find you first. From here on, the plan is paying for itself comfortably.",
    benefit: "A steady stream of local work, without you chasing it.",
  },
];

const MEANING = [
  {
    icon: "phone",
    title: "The phone starts ringing again",
    body: "More of the right people, in your postcodes, finding you first when they need your trade. Not tyre-kickers from the other side of the country — locals ready to book.",
  },
  {
    icon: "diary",
    title: "A diary that fills itself",
    body: "You stop chasing work and start choosing it. The jobs that suit you, in the areas you actually want to be in, coming to you week after week.",
  },
  {
    icon: "shield",
    title: "A moat around your business",
    body: "Rankings compound. The longer you&rsquo;re in the top spots, the harder it is for the next lot to knock you off. Turn Reach on and stay there.",
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

      {/* HERO — copy only, offset left */}
      <section className="v2-local-hero">
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
            <blockquote className="v2-stats-callout">
              <span className="v2-stats-callout-quote" aria-hidden="true">&ldquo;</span>
              <span className="v2-stats-callout-text">
                If customers can&rsquo;t find you when they&rsquo;re ready to
                buy, they&rsquo;ll hire{" "}
                <span className="v2-stats-callout-hi">someone they can find.</span>
              </span>
            </blockquote>
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

      {/* WHAT DOES THIS MEAN FOR YOU — subtle band */}
      <section className="v2-meaning">
        <div className="v2-meaning-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">What this means for you</span>
            <h2 className="v2-h2">
              When someone searches local,<br />you&rsquo;re the answer.
            </h2>
          </Reveal>
          <div className="v2-meaning-grid">
            {MEANING.map((m) => (
              <Reveal key={m.title}>
                <div className="v2-meaning-cell">
                  <div className="v2-meaning-icon">
                    <MeaningIcon name={m.icon} />
                  </div>
                  <h3 className="v2-meaning-title">{m.title}</h3>
                  <p className="v2-meaning-body">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO — 2x2 grid, benefit-led */}
      <section className="v2-do">
        <div className="v2-do-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">What Tandemm Reach actually does</span>
            <h2 className="v2-h2">The monthly work that puts you at the top.</h2>
            <p className="v2-lede">
              Plain English, no smoke, no jargon. Four jobs we run every
              month so your trade in your area shows up first, and stays
              there.
            </p>
          </Reveal>
          <div className="v2-do-grid">
            {DO_GRID.map((d) => (
              <Reveal key={d.title}>
                <div className="v2-do-cell v2-do-cell--dual">
                  <div className="v2-do-icon">
                    <DoIcon name={d.icon} />
                  </div>
                  <h3
                    className="v2-do-title"
                    dangerouslySetInnerHTML={{ __html: d.title }}
                  />
                  <p
                    className="v2-do-body"
                    dangerouslySetInnerHTML={{ __html: d.what }}
                  />
                  <div className="v2-do-benefit">
                    <span className="v2-do-benefit-tag">What it means for you</span>
                    <p
                      className="v2-do-benefit-body"
                      dangerouslySetInnerHTML={{ __html: d.benefit }}
                    />
                  </div>
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
              Real SEO takes a few months to properly compound. Anyone
              promising you the top of Google inside 30 days is either
              bluffing or about to burn through your budget. Here&rsquo;s
              what the road actually looks like, and what you get out of
              each stretch of it.
            </p>
          </Reveal>
          <div className="v2-timeline-grid">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.month}>
                <div className="v2-timeline-card">
                  <div className="v2-timeline-step">Step {i + 1}</div>
                  <div className="v2-timeline-month">{t.month}</div>
                  <div className="v2-timeline-label">{t.label}</div>
                  <p
                    className="v2-timeline-body"
                    dangerouslySetInnerHTML={{ __html: t.body }}
                  />
                  <div className="v2-timeline-benefit">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12l5 5 9-11" />
                    </svg>
                    {t.benefit}
                  </div>
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

function MeaningIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "phone")
    return (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.5 2.6a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.2 1.7.4 2.6.5a2 2 0 0 1 1.7 2z" />
      </svg>
    );
  if (name === "diary")
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
        <path d="M8 14h3M8 17h6" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
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
