"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { GuaranteeStrip } from "@/components/tandemm/GuaranteeStrip";
import { ContactOptions } from "@/components/tandemm/ContactOptions";
import { GoogleLocalPack, BeforeAfterGrid, ReportCard } from "@/components/tandemm/Mocks";

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

export default function LocalSearchPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="features" />

      {/* HERO */}
      <section className="v2-local-hero">
        <div className="v2-local-hero-inner">
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
              Local is the monthly work that puts you in front of them on
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
      </section>

      {/* WHY IT MATTERS — big stats */}
      <section className="v2-stats">
        <div className="v2-stats-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">The numbers</span>
            <h2 className="v2-h2">Why showing up locally matters.</h2>
            <p className="v2-lede">
              The data doesn&rsquo;t lie. If you&rsquo;re not in the top 3 on
              Google Maps, you&rsquo;re losing work every single day.
            </p>
          </Reveal>
          <div className="v2-stats-grid">
            <Reveal>
              <div className="v2-stat">
                <div className="v2-stat-num">46%</div>
                <div className="v2-stat-label">of all Google searches have local intent</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="v2-stat">
                <div className="v2-stat-num">76%</div>
                <div className="v2-stat-label">of people who search nearby visit a business within a day</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="v2-stat">
                <div className="v2-stat-num">70%</div>
                <div className="v2-stat-label">of clicks go to the top 3 Google Maps results</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SHAPE OF THE MAP PACK */}
      <section className="v2-map">
        <div className="v2-map-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">The map pack</span>
            <h2 className="v2-h2">
              Homeowners call the top three.<br />
              Everyone else scrolls past.
            </h2>
            <p className="v2-lede">
              This is what a nearby search actually looks like. Tandemm Reach
              is the monthly work that moves your listing up the pack over
              time, so more of the searches near you land on your phone.
            </p>
          </Reveal>
          <Reveal>
            <div className="v2-map-visual">
              <GoogleLocalPack />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS — before/after grid case study */}
      <section className="v2-results">
        <div className="v2-results-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">Illustrative results</span>
            <h2 className="v2-h2">
              What six months in Tandemm Reach<br />looks like on the map.
            </h2>
            <p className="v2-lede">
              Postcode by postcode, service by service. This is a
              representative pattern of what the shift looks like when the
              monthly work compounds. Not a specific customer, not a guarantee,
              just how the map tends to move.
            </p>
          </Reveal>
          <Reveal>
            <div className="v2-results-visual">
              <BeforeAfterGrid />
            </div>
          </Reveal>
          <div className="v2-results-kpis">
            <Reveal>
              <div className="v2-results-kpi">
                <div className="v2-results-kpi-num">4 → 1</div>
                <div className="v2-results-kpi-label">average map rank</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="v2-results-kpi">
                <div className="v2-results-kpi-num">3.4×</div>
                <div className="v2-results-kpi-label">profile views vs baseline</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="v2-results-kpi">
                <div className="v2-results-kpi-num">Every wk</div>
                <div className="v2-results-kpi-label">signals sent to Google</div>
              </div>
            </Reveal>
          </div>
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

      {/* CTA + GUARANTEE + CONTACT */}
      <section className="v2-local-cta">
        <div className="v2-local-cta-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">The Tandemm Promise</span>
            <h2 className="v2-h2">See where you rank today.</h2>
            <p className="v2-lede">
              Free postcode audit, walked through with a Tandemm strategist.
              You keep the report either way.
            </p>
          </Reveal>
          <div className="v2-local-cta-guarantee">
            <GuaranteeStrip />
          </div>
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
