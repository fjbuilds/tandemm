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

const BOOST_MODES = [
  {
    tag: "LSA",
    title: "Local Services Ads",
    body: "Sits above every other result on Google. You only pay when a homeowner actually contacts you. First lead usually within 48 hours.",
  },
  {
    tag: "CPC",
    title: "Google Search Ads",
    body: "Paid clicks on the exact searches you want to own. Useful when a postcode needs warming up fast, or when LSA supply runs thin.",
  },
  {
    tag: "Retargeting",
    title: "Second-visit follow-up",
    body: "Homeowners rarely book on the first visit. Retargeting shows your site to the ones who bounced, until they book or forget.",
  },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Turn the tap on",
    body: "You set the spend, we build the ads inside Tandemm Boost. LSA and CPC go live in the same week.",
  },
  {
    n: "02",
    title: "Every lead is scored",
    body: "Calls, forms and WhatsApp land in Tandemm Base, tagged Boost. Spam and tyre-kickers filtered. Real jobs prioritised.",
  },
  {
    n: "03",
    title: "Spend follows what pays",
    body: "Weekly review. Money moves from what didn&rsquo;t convert to what did. You see the report in plain English, not a spreadsheet.",
  },
  {
    n: "04",
    title: "Turn the tap off",
    body: "Diary full? We ease off. Quiet week coming? We push. You&rsquo;re never locked into a spend that doesn&rsquo;t match the work.",
  },
];

export default function BoostPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="features" />

      {/* HERO — dark */}
      <section className="boost-hero">
        <div className="boost-hero-inner">
          <Reveal>
            <span className="boost-hero-eyebrow">Tandemm Boost · the accelerator</span>
          </Reveal>
          <Reveal>
            <h1 className="boost-hero-title">
              When the diary&rsquo;s quiet,<br />turn the phone back on.
            </h1>
          </Reveal>
          <Reveal>
            <p className="boost-hero-sub">
              Tandemm Boost is the paid ads layer that sits on top of Tandemm
              Local. Foundation runs underneath. Ads press the accelerator
              when you need the phone ringing this week.
            </p>
          </Reveal>
          <Reveal>
            <div className="boost-hero-cta">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Find out what&apos;s costing you jobs
              </Button>
              <Button href="/local-search" variant="secondary">
                Start with Tandemm Local
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MODES — three cards */}
      <section className="journey">
        <div className="journey-inner">
          <Reveal className="journey-head">
            <span className="section-eyebrow">What&rsquo;s inside Boost</span>
            <h2 className="section-title">
              Three paid channels,<br />one team running them.
            </h2>
            <p className="section-lede">
              We pick the mix that fits your trade, your area and your
              margin. You don&rsquo;t manage anything, you just answer the phone.
            </p>
          </Reveal>
          <div className="boost-mode-grid">
            {BOOST_MODES.map((m) => (
              <Reveal key={m.tag}>
                <div className="boost-mode-card">
                  <span className="boost-mode-tag">{m.tag}</span>
                  <div className="boost-mode-title">{m.title}</div>
                  <div className="boost-mode-body">{m.body}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — four numbered steps */}
      <section className="feature-slab">
        <div className="feature-slab-inner boost-flow-inner">
          <div>
            <Reveal><span className="section-eyebrow">How Tandemm Boost runs</span></Reveal>
            <Reveal>
              <h2 className="section-title">
                A tap you can turn on,<br />and, more importantly, off.
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-lede">
                Ads that stop working stop running. That&rsquo;s the difference
                between Boost and an agency retainer. Every pound is tied
                back to a booked job, weekly.
              </p>
            </Reveal>
          </div>
          <div className="boost-flow">
            {HOW_IT_WORKS.map((s) => (
              <Reveal key={s.n}>
                <div className="boost-flow-row">
                  <div className="boost-flow-num">{s.n}</div>
                  <div>
                    <div className="boost-flow-title">{s.title}</div>
                    <div
                      className="boost-flow-body"
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDATION VS ACCELERATOR */}
      <section className="dark-break">
        <div className="dark-break-inner">
          <Reveal><div className="dark-break-tag">Foundation and accelerator</div></Reveal>
          <Reveal>
            <h2 className="dark-break-title">
              Boost without Local is a bucket with a hole.<br />
              Local without Boost is a slow drip.
            </h2>
          </Reveal>
          <div className="boost-compare">
            <Reveal>
              <div className="boost-compare-card">
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
              <div className="boost-compare-card boost-compare-card--accent">
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

      {/* GUARANTEE + CTA */}
      <section className="contact-section">
        <div className="contact-section-inner">
          <Reveal className="section-head">
            <span className="section-eyebrow">The Tandemm Promise</span>
            <h2 className="section-title">
              90 days to earn its keep,<br />or the plan refunds.
            </h2>
            <p className="section-lede">
              Boost sits under the same promise as the rest of the plan. If
              it hasn&rsquo;t moved the diary in three months, we refund.
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
