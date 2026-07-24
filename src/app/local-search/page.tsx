"use client";

import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { GuaranteeStrip } from "@/components/tandemm/GuaranteeStrip";
import { ContactOptions } from "@/components/tandemm/ContactOptions";
import { ScrollSpine, SpineStop } from "@/components/tandemm/ScrollSpine";

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
    body: "Fresh reviews requested. Fresh posts pushed. Fresh photos added. The profile signals stay alive, not stale.",
  },
  {
    step: "04",
    title: "Rank reporting",
    body: "You get a plain-English postcode report. Not a keyword list. The postcodes you serve, where you sit, and where you moved.",
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
      <section className="local-hero">
        <Reveal>
          <span className="local-hero-eyebrow">Local Search · the foundation</span>
        </Reveal>
        <Reveal>
          <h1>
            Own the postcodes<br />you actually work in.
          </h1>
        </Reveal>
        <Reveal>
          <p>
            The map pack is where homeowners look first. Rank in the top three
            and the phone rings whether ads are on or off. Tandemm builds and
            tunes that ranking every week, at the postcode level.
          </p>
        </Reveal>
        <Reveal>
          <div className="local-hero-cta">
            <Button href="/book">Get my Local Search audit</Button>
            <Button href="/" variant="ghost">Back to the plan</Button>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="local-stats">
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

      <ScrollSpine>
        {/* STOP 1 — What it actually looks like */}
        <SpineStop index={1} eyebrow="What ranking looks like">
          <div className="local-postcode-grid">
            <div>
              <Reveal>
                <h2 className="section-title">
                  A live report,<br />postcode by postcode.
                </h2>
              </Reveal>
              <Reveal>
                <p className="section-lede">
                  Vanity rankings for &ldquo;best plumber&rdquo; don&rsquo;t pay
                  wages. What matters is where you sit for the searches
                  homeowners in your postcodes actually type. That&rsquo;s what
                  we track.
                </p>
              </Reveal>
              <ul className="outcome-list" style={{ marginTop: 24 }}>
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
            </Reveal>
          </div>
        </SpineStop>

        {/* STOP 2 — The loop */}
        <SpineStop index={2} eyebrow="How Tandemm runs it">
          <div className="section-head">
            <h2 className="section-title">A weekly loop, not a one-off audit.</h2>
            <p className="section-lede">
              SEO isn&rsquo;t a project you finish. It&rsquo;s a habit that
              compounds. Every week Tandemm nudges the signals Google reads.
            </p>
          </div>
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
        </SpineStop>

        {/* STOP 3 — Foundation vs accelerator */}
        <SpineStop index={3} eyebrow="Foundation vs accelerator">
          <div className="section-head">
            <h2 className="section-title">Why we lead with SEO,<br />and offer Ads as an accelerator.</h2>
          </div>
          <div className="local-compare">
            <Reveal>
              <div className="local-compare-card local-compare-card--seo">
                <span className="local-compare-tag">SEO · the foundation</span>
                <div className="local-compare-title">Owned. Compounding. Always on.</div>
                <p className="local-compare-body">
                  Every review, page and post adds up. Pause the plan and the
                  ranking doesn&rsquo;t evaporate overnight. It&rsquo;s the
                  lead source that keeps earning after month twelve.
                </p>
                <ul className="local-compare-list">
                  <li>Lead cost falls the longer you run it</li>
                  <li>Every enquiry is unpaid at the point of contact</li>
                  <li>Trust builds because you&rsquo;re the local answer</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="local-compare-card local-compare-card--ads">
                <span className="local-compare-tag">Ads · the accelerator</span>
                <div className="local-compare-title">Rented. Instant. On when you want it.</div>
                <p className="local-compare-body">
                  Useful when you need diary volume this week, a new postcode
                  warmed up, or a seasonal push. Layered on top of SEO, not
                  instead of it.
                </p>
                <ul className="local-compare-list">
                  <li>Turn on and see calls the same day</li>
                  <li>Stops the moment the budget stops</li>
                  <li>Best used to stretch, not to survive</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </SpineStop>

        {/* STOP 4 — Guarantee */}
        <SpineStop index={4} eyebrow="Our commitment">
          <div className="section-head">
            <h2 className="section-title">Ranked, or your money back.</h2>
            <p className="section-lede">
              The 90 day guarantee sits over Local Search the same way it
              sits over the whole plan. If we haven&rsquo;t earned our place
              inside three months, the plan refunds.
            </p>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <GuaranteeStrip />
          </div>
        </SpineStop>

        {/* STOP 5 — Contact */}
        <SpineStop index={5} eyebrow="Talk to a human">
          <div className="section-head">
            <h2 className="section-title">See where you rank today.</h2>
            <p className="section-lede">
              Free postcode audit, walked through with a Tandemm strategist.
              You keep the report either way.
            </p>
          </div>
          <ContactOptions />
        </SpineStop>
      </ScrollSpine>

      <Footer />
    </div>
  );
}
