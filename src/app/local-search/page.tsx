"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { GuaranteeStrip } from "@/components/tandemm/GuaranteeStrip";
import { ContactOptions } from "@/components/tandemm/ContactOptions";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const POSTCODES = [
  { code: "SW11 · Boiler repair", rank: 1, delta: "+4", tone: "top" as const },
  { code: "SW11 · Emergency plumber", rank: 2, delta: "+7", tone: "top" as const },
  { code: "SW12 · Boiler installation", rank: 3, delta: "+5", tone: "mid" as const },
  { code: "SW18 · Bathroom fitter", rank: 3, delta: "+9", tone: "mid" as const },
  { code: "SW4 · Powerflush", rank: 4, delta: "+3", tone: "mid" as const },
  { code: "SW8 · Emergency plumber", rank: 5, delta: "+2", tone: "low" as const },
];

const LOOP = [
  {
    step: "01",
    title: "Signal audit",
    body: "Google Business Profile, category, hours, service list, photos, and the messy citations across the web. Fixed and aligned.",
  },
  {
    step: "02",
    title: "Foundation build",
    body: "A service page per job you actually want. Written for the postcode, structured for how Google reads local intent.",
  },
  {
    step: "03",
    title: "Weekly tuning",
    body: "Fresh reviews asked for. Fresh posts pushed. Fresh photos added. The profile signals stay alive, not stale.",
  },
  {
    step: "04",
    title: "Rank reporting",
    body: "A plain-English postcode report. Not a keyword list. Where you sit, where you moved, and why.",
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

      {/* HERO — dark, matches Boost */}
      <section className="boost-hero">
        <div className="boost-hero-inner">
          <Reveal>
            <span className="boost-hero-eyebrow">Tandemm Local · the foundation</span>
          </Reveal>
          <Reveal>
            <h1 className="boost-hero-title">
              Own the postcodes<br />you actually work in.
            </h1>
          </Reveal>
          <Reveal>
            <p className="boost-hero-sub">
              The map pack is where homeowners look first. Rank in the top
              three and the phone rings, ads or no ads. Tandemm Local is the
              weekly work that puts you there and holds you there.
            </p>
          </Reveal>
          <Reveal>
            <div className="boost-hero-cta">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get my Tandemm Diagnosis
              </Button>
              <Button href="/boost" variant="secondary">
                Add Tandemm Boost on top
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS strip */}
      <section className="feature-slab" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="feature-slab-inner" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <Reveal>
            <div className="local-stat">
              <div className="local-stat-num">44%</div>
              <div className="local-stat-label">of local searches convert into a call within an hour</div>
            </div>
          </Reveal>
          <Reveal>
            <div className="local-stat">
              <div className="local-stat-num">Top&nbsp;3</div>
              <div className="local-stat-label">map pack positions win the vast majority of local enquiries</div>
            </div>
          </Reveal>
          <Reveal>
            <div className="local-stat">
              <div className="local-stat-num">£0</div>
              <div className="local-stat-label">per click. Organic map pack leads don&rsquo;t bill by the tap</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Postcode table */}
      <section className="feature-slab">
        <div className="feature-slab-inner">
          <div className="feature-slab-copy">
            <Reveal><span className="section-eyebrow">What Tandemm Local reports</span></Reveal>
            <Reveal>
              <h2 className="section-title">
                A live report,<br />postcode by postcode.
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-lede">
                Vanity rankings for &ldquo;best plumber&rdquo; don&rsquo;t pay
                wages. What matters is where you sit for the searches
                homeowners in your postcodes actually type. That&rsquo;s the
                only thing we track.
              </p>
            </Reveal>
            <ul className="feature-slab-list">
              {[
                "One row per postcode, one row per service you sell",
                "Position tracked weekly, not once a quarter",
                "Every move up (or down) explained in plain English",
              ].map((i) => (
                <Reveal key={i}><li>{i}</li></Reveal>
              ))}
            </ul>
          </div>

          <Reveal>
            <div className="feature-slab-visual">
              <div className="postcode-table">
                <div className="postcode-table-head">
                  <span>Search</span>
                  <span>Rank</span>
                  <span>Change</span>
                </div>
                {POSTCODES.map((p) => (
                  <div key={p.code} className="postcode-row">
                    <span className="postcode-code">{p.code}</span>
                    <span className={`postcode-rank postcode-rank--${p.tone}`}>#{p.rank}</span>
                    <span className="postcode-delta">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                        <path d="M5 1l4 5H1z" />
                      </svg>
                      {p.delta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Weekly loop */}
      <section className="feature-slab feature-slab--flip">
        <div className="feature-slab-inner">
          <div className="feature-slab-copy">
            <Reveal><span className="section-eyebrow">How Tandemm Local runs</span></Reveal>
            <Reveal>
              <h2 className="section-title">
                A weekly loop,<br />not a one-off audit.
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-lede">
                SEO isn&rsquo;t a project you finish. It&rsquo;s a habit that
                compounds. Every week Tandemm Local nudges the signals Google
                reads.
              </p>
            </Reveal>
          </div>

          <div className="feature-slab-visual">
            <div className="local-loop">
              {LOOP.map((l) => (
                <Reveal key={l.step}>
                  <div className="local-loop-card">
                    <span className="local-loop-step">{l.step}</span>
                    <div className="local-loop-title">{l.title}</div>
                    <div className="local-loop-body">{l.body}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Foundation vs accelerator */}
      <section className="dark-break">
        <div className="dark-break-inner">
          <Reveal><div className="dark-break-tag">Foundation vs accelerator</div></Reveal>
          <Reveal>
            <h2 className="dark-break-title">
              Local without Boost is a slow drip.<br />
              Boost without Local is a bucket with a hole.
            </h2>
          </Reveal>
          <div className="boost-compare">
            <Reveal>
              <div className="boost-compare-card boost-compare-card--accent">
                <div className="boost-compare-tag">Tandemm Local · foundation</div>
                <div className="boost-compare-title">Owned. Compounds. Always on.</div>
                <ul>
                  <li>Lead cost falls the longer you run it</li>
                  <li>Every enquiry is unpaid at the point of contact</li>
                  <li>Trust builds because you become the local answer</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="boost-compare-card">
                <div className="boost-compare-tag">Tandemm Boost · accelerator</div>
                <div className="boost-compare-title">Rented. Instant. On when you want it.</div>
                <ul>
                  <li>Turn on, see calls the same day</li>
                  <li>Stops the moment the budget stops</li>
                  <li>Best used to stretch, not to survive</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="contact-section-inner">
          <Reveal className="section-head">
            <span className="section-eyebrow">The Tandemm Promise</span>
            <h2 className="section-title">See where you rank today.</h2>
            <p className="section-lede">
              Free postcode audit, walked through with a Tandemm strategist.
              You keep the report either way.
            </p>
          </Reveal>
          <div style={{ maxWidth: 720, margin: "0 auto 40px" }}>
            <GuaranteeStrip />
          </div>
          <ContactOptions />
        </div>
      </section>

      <Footer />
    </div>
  );
}
