"use client";

import { CSSProperties, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { HeroVisual } from "@/components/tandemm/HeroVisual";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { TrustPartners } from "@/components/tandemm/TrustPartners";
import { GuaranteeStrip } from "@/components/tandemm/GuaranteeStrip";
import { ContactOptions } from "@/components/tandemm/ContactOptions";
import { StepTimeline } from "@/components/tandemm/StepTimeline";
import { AppShowcase } from "@/components/tandemm/AppShowcase";
import { DuoFeature } from "@/components/tandemm/DuoFeature";
import { GoogleLocalPack, TradesSite, BaseApp, GrowthReport } from "@/components/tandemm/Mocks";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* Three big numbered feature blocks — mirrors the BFT
 * "From getting found to getting paid" pattern, but the mockup for each
 * is a real-feeling piece of UI: Google local pack, trades website,
 * Base app.
 */
const JOURNEY = [
  {
    n: "01",
    tag: "Get found",
    title: "First name they see, first name they call.",
    body: "Tandemm Local pushes you into the top three of Google&rsquo;s map pack for every postcode you work. Homeowners looking for a tradesman today land on your listing, not the guy round the corner.",
    mock: "found" as const,
  },
  {
    n: "02",
    tag: "Get chosen",
    title: "A site that closes the visit in one go.",
    body: "Fast on a phone. Clear on a laptop. Every service page written for the exact search they just typed, with the widget and call button never more than a thumb away.",
    mock: "chosen" as const,
  },
  {
    n: "03",
    tag: "Get booked",
    title: "Every enquiry lands in Tandemm Base.",
    body: "Calls, forms, WhatsApp and missed calls. All tagged, all triaged, all quoted from the van. Nothing sits in a voicemail box while you&rsquo;re on the tools.",
    mock: "booked" as const,
  },
];

const FAQS = [
  {
    q: "What does Tandemm actually cost?",
    a: "The Tandemm Diagnosis is free. The monthly plan covers your rebuilt site, Tandemm Local, Tandemm Base and Duo, tracking, and the enquiry widget. Tandemm Boost (paid ads) sits on top as an accelerator when you want it, priced against your spend.",
  },
  {
    q: "Am I tied into a contract?",
    a: "No. Month to month, cancel any time. The 90 Day Tandemm Promise sits over the top: if it hasn’t earned its keep in 90 days, the plan refunds.",
  },
  {
    q: "Where do the leads actually come from?",
    a: "Tandemm Local is the foundation. Your Google Business Profile, rebuilt site and postcode-level service pages are set up to win the map pack. Tandemm Boost is the accelerator, useful when you want diary volume this week or a fresh area warmed up fast.",
  },
  {
    q: "Do I own the website?",
    a: "The domain and content are yours. The site itself sits inside the Tandemm system, which is what keeps the SEO, tracking, widget and app talking to each other. Most owners don’t think about the wiring, they just pick up the phone when it rings.",
  },
  {
    q: "How fast will the phone start ringing?",
    a: "Tandemm Boost feeds the diary inside the first month. Tandemm Local compounds week on week, so month three is ahead of month one, and month six is a different business.",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAudit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    router.push(
      trimmed
        ? `/book?${new URLSearchParams({ website: trimmed }).toString()}`
        : "/book",
    );
  };

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="home" />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        className="hero-split relative box-border px-6 pb-10 pt-[52px]"
        style={{
          background:
            "radial-gradient(70% 55% at 60% 0%, rgba(226,229,222,0.9), transparent 74%)",
        }}
      >
        <div className="hero-split-grid">
          <div className="hero-split-copy">
            <Reveal>
              <h1 className="hero-title">
                You&rsquo;re good
                <br />
                at the job.
              </h1>
            </Reveal>
            <Reveal>
              <p
                className="hero-subtitle"
                style={{ position: "relative", display: "inline-block" }}
              >
                We make sure the right people know it.
                <span
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "100%",
                    height: 3,
                    borderRadius: 99,
                    background: "var(--color-accent)",
                  }}
                  aria-hidden="true"
                />
              </p>
            </Reveal>

            <Reveal>
              <div
                className="mt-6 inline-block rounded-[var(--radius-xl)] bg-[var(--color-surface-muted)] px-6 py-4"
                style={{ maxWidth: 520 }}
              >
                <p className="hero-desc" style={{ margin: 0 }}>
                  Site, SEO and Tandemm Base in one monthly plan.
                  <br />
                  Every enquiry accounted for. Nothing missed.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <form
                onSubmit={handleAudit}
                className="mt-7 flex w-full max-w-[500px] flex-col gap-3 sm:flex-row sm:items-center"
              >
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[13px] font-semibold text-[var(--color-ink-muted)]">
                    https://
                  </span>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="yourbusiness.co.uk"
                    aria-label="Your website URL"
                    className="h-[50px] w-full rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white pl-[74px] pr-4 text-[15px] font-medium text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-[50px] shrink-0 items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-6 text-[15px] font-semibold text-[var(--color-on-primary)] transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  Get my Tandemm Diagnosis
                </button>
              </form>
            </Reveal>

            <Reveal>
              <div className="hero-trust-row">
                <GuaranteeStrip variant="inline" />
                <span className="hero-trust-sep" aria-hidden="true" />
                <span className="hero-trust-copy">
                  <b>3.6m</b> UK homeowners search for a tradesman every month
                </span>
              </div>
            </Reveal>
          </div>

          <div className="hero-split-visual">
            <Reveal>
              <div className="hero-glass">
                <div className="hero-glass-highlight" aria-hidden="true" />
                <HeroVisual />
                <div className="hero-glass-fade" aria-hidden="true" />
                <div className="hero-glass-gate">
                  <Button href="/book">Get my Tandemm Diagnosis</Button>
                </div>
                <div className="hero-glass-glow" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────────────────── */}
      <TrustPartners />

      {/* ── JOURNEY: three big numbered blocks (BFT pattern) ────── */}
      <section className="journey">
        <div className="journey-inner">
          <Reveal className="journey-head">
            <span className="section-eyebrow">How Tandemm works</span>
            <h2 className="section-title">From strangers on Google<br />to booked jobs on your diary.</h2>
            <p className="section-lede">
              Three moving parts, one monthly plan. Bought separately, three
              subscriptions and three suppliers. Here, one bill and one team
              that knows your business.
            </p>
          </Reveal>

          <div className="journey-blocks">
            {JOURNEY.map((j) => (
              <Reveal key={j.n}>
                <article className="journey-block journey-block--tall">
                  <div className="journey-block-num" aria-hidden="true">{j.n}</div>
                  <div className="journey-block-body">
                    <span className="journey-block-tag">{j.tag}</span>
                    <h3 className="journey-block-title">{j.title}</h3>
                    <p
                      className="journey-block-copy"
                      dangerouslySetInnerHTML={{ __html: j.body }}
                    />
                  </div>
                  <div className="journey-block-mock">
                    <JourneyMock kind={j.mock} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK BREAK: proof / trust cluster ───────────────────── */}
      <section className="dark-break">
        <div className="dark-break-inner">
          <Reveal>
            <div className="dark-break-tag">A real team, on the tools with you</div>
          </Reveal>
          <Reveal>
            <h2 className="dark-break-title">
              A real person on WhatsApp, email or the phone.<br />Never a ticket queue.
            </h2>
          </Reveal>
          <div className="dark-break-stats">
            <Reveal>
              <div>
                <div className="dark-break-stat">Under 1hr</div>
                <div className="dark-break-stat-label">first reply on WhatsApp during working hours</div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <div className="dark-break-stat">7 days</div>
                <div className="dark-break-stat-label">from URL to a live site preview, in your hands</div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <div className="dark-break-stat">90 days</div>
                <div className="dark-break-stat-label">Tandemm Promise. Full refund, no debate.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TANDEMM LOCAL (Google local pack front and centre) ─── */}
      <section className="feature-slab">
        <div className="feature-slab-inner">
          <div className="feature-slab-copy">
            <Reveal><span className="section-eyebrow">Tandemm Local</span></Reveal>
            <Reveal>
              <h2 className="section-title">
                Rank #1 in the map pack<br />for the postcodes you work.
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-lede">
                The map pack is where homeowners look first. Tandemm Local is
                the weekly work that puts you in the top three and holds you
                there. Compounds every month. Never bills per click.
              </p>
            </Reveal>
            <ul className="feature-slab-list">
              {[
                "Google Business Profile tuned every week",
                "Rank tracked postcode by postcode, in plain English",
                "Service pages that earn their spot on page one",
                "Leads that keep coming with or without ads on top",
              ].map((i) => (
                <Reveal key={i}><li>{i}</li></Reveal>
              ))}
            </ul>
            <Reveal>
              <div className="feature-slab-cta">
                <Button href="/local-search">Full Tandemm Local walkthrough</Button>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="feature-slab-visual feature-slab-visual--wide">
              <GoogleLocalPack />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TANDEMM SITES (real trades site preview) ──────────── */}
      <section className="feature-slab feature-slab--flip">
        <div className="feature-slab-inner">
          <div className="feature-slab-copy">
            <Reveal><span className="section-eyebrow">Tandemm Sites</span></Reveal>
            <Reveal>
              <h2 className="section-title">
                A website written to close<br />the enquiry, first visit.
              </h2>
            </Reveal>
            <Reveal>
              <p className="section-lede">
                Fast on a phone. Clear on a laptop. Every service page written
                for the exact search they just typed, with the widget, call
                button and WhatsApp never more than a thumb away.
              </p>
            </Reveal>
            <ul className="feature-slab-list">
              {[
                "90+ Google PageSpeed on every service page",
                "Widget, tap-to-call and WhatsApp on every screen",
                "Written in your voice, not agency filler",
                "Live inside 7 days from the day you sign",
              ].map((i) => (
                <Reveal key={i}><li>{i}</li></Reveal>
              ))}
            </ul>
          </div>

          <Reveal>
            <div className="feature-slab-visual feature-slab-visual--wide">
              <TradesSite />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DARK PANEL: TANDEMM BASE + DUO ─────────────────────── */}
      <section className="product-slab">
        <div className="product-slab-inner">
          <div className="product-slab-tag-row">
            <Reveal>
              <span className="product-slab-tag">Tandemm Base · included in every plan</span>
            </Reveal>
          </div>
          <AppShowcase />
        </div>
        <div className="product-slab-inner product-slab-inner--duo">
          <DuoFeature />
        </div>
      </section>

      {/* ── GROWTH PROOF (single big report, replaces standalone Boost slab) ── */}
      <section className="feature-slab feature-slab--tinted">
        <div className="feature-slab-inner feature-slab-inner--stack">
          <Reveal className="section-head">
            <span className="section-eyebrow">The monthly report</span>
            <h2 className="section-title">
              What twelve months in Tandemm<br />actually looks like.
            </h2>
            <p className="section-lede">
              Every plan gets a plain-English report each month. Ranking
              postcodes, booked jobs, cost per job. What moved and what did
              it. No dashboards to log into and figure out.
            </p>
          </Reveal>
          <Reveal>
            <div className="feature-slab-visual feature-slab-visual--full">
              <GrowthReport />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TANDEMM BOOST (small add-on line, not a full section) ── */}
      <section className="addon-strip">
        <div className="addon-strip-inner">
          <Reveal>
            <div className="addon-strip-card">
              <div>
                <span className="addon-strip-tag">Optional add-on</span>
                <div className="addon-strip-title">
                  Need the phone ringing this week? Add Tandemm Boost.
                </div>
                <div className="addon-strip-sub">
                  Paid ads sit on top of Tandemm Local as an accelerator. Turn
                  on for volume, off when the diary&rsquo;s full. Priced against
                  your spend, not a flat retainer.
                </div>
              </div>
              <div className="addon-strip-cta">
                <Button href="/boost" variant="ghost">See how Boost works</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GETTING STARTED ─────────────────────────────────────── */}
      <section className="getting-started">
        <div className="getting-started-inner">
          <Reveal className="section-head">
            <span className="section-eyebrow">Getting started is easy</span>
            <h2 className="section-title">
              From URL to live,<br />in a week.
            </h2>
            <p className="section-lede">
              Five short steps. Every one has a name, a timeframe, and a real
              deliverable at the end. You&rsquo;ll always know what&rsquo;s
              next.
            </p>
          </Reveal>
          <StepTimeline />
        </div>
      </section>

      {/* ── CONTACT OPTIONS ─────────────────────────────────────── */}
      <section className="contact-section">
        <div className="contact-section-inner">
          <Reveal className="section-head">
            <span className="section-eyebrow">Talk to a human</span>
            <h2 className="section-title">Three ways in.</h2>
            <p className="section-lede">
              A real person picks up. No ticket queue, no chatbot loop, no
              hard sell.
            </p>
          </Reveal>
          <ContactOptions />
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[760px]">
          <Reveal className="mb-8 text-center">
            <span className="section-eyebrow">One plan · one price</span>
            <h2 className="section-title">Everything above,<br />in one monthly figure.</h2>
          </Reveal>
          <Reveal>
            <div className="price-card">
              <div className="price-card-head">
                <div>
                  <div className="price-card-tag">The Tandemm plan</div>
                  <div className="price-card-num">
                    £197<span>/mo</span>
                  </div>
                  <div className="price-card-note">+ VAT · month to month</div>
                </div>
                <GuaranteeStrip variant="inline" />
              </div>
              <ul className="price-card-list">
                <li>Tandemm Sites, rebuilt and hosted</li>
                <li>Tandemm Local, weekly SEO work</li>
                <li>Tandemm Base app with Duo voice</li>
                <li>Tracking number and enquiry widget</li>
                <li>Missed-call capture and auto-quote</li>
                <li>A real person on WhatsApp and email</li>
              </ul>
              <div className="price-card-cta">
                <Button href="/book">Check availability</Button>
                <Link href="/pricing" className="price-card-link">
                  Full pricing breakdown
                </Link>
              </div>
              <p className="price-card-fine">
                Tandemm Boost (paid ads) sits on top as an accelerator, priced
                against your spend. Tandemm Local runs underneath either way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[860px] px-6 pb-20">
        <Reveal className="mb-10 text-center">
          <h2 className="section-title">Questions owners ask<br />before they sign.</h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const open = openFaq === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold text-[var(--color-ink)] transition-colors"
                >
                  {item.q}
                  <span className="text-[22px] text-[var(--color-ink-muted)]">
                    {open ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-24">
        <Reveal>
          <div className="final-cta">
            <h2 className="section-title final-cta-title">
              Find out where your site<br />is costing you jobs.
            </h2>
            <p className="final-cta-sub">
              The Tandemm Diagnosis is free, yours to keep, and comes back
              inside 24 hours. No hard sell, no obligation.
            </p>
            <div className="final-cta-buttons">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get my Tandemm Diagnosis
              </Button>
              <Button href="/local-search" variant="secondary">
                Explore Tandemm Local
              </Button>
            </div>
            <div className="final-cta-guarantee">
              <GuaranteeStrip variant="inline" />
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Small illustrative UI mocks for the three journey blocks   */
/* ─────────────────────────────────────────────────────────── */

function JourneyMock({ kind }: { kind: "found" | "chosen" | "booked" }) {
  if (kind === "found") return <GoogleLocalPack />;
  if (kind === "chosen") return <TradesSite />;
  return <BaseApp variant="inbox" />;
}

function MockBrowser() {
  return (
    <div className="mock-browser">
      <div className="mock-browser-bar">
        <span /> <span /> <span />
        <div className="mock-browser-url">yourbusiness.co.uk</div>
      </div>
      <div className="mock-browser-body">
        <div className="mock-browser-nav">
          <span className="mock-brand" />
          <span className="mock-cta" />
        </div>
        <div className="mock-hero">
          <div className="mock-hero-title">
            <span style={{ width: "85%" }} />
            <span style={{ width: "60%" }} />
          </div>
          <div className="mock-hero-cta">Get a quote</div>
        </div>
        <div className="mock-cards">
          <div className="mock-card" />
          <div className="mock-card" />
          <div className="mock-card" />
        </div>
        <div className="mock-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M5 12l5 5 9-11" />
          </svg>
          PageSpeed 97
        </div>
      </div>
    </div>
  );
}

function MockMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`mock-map ${compact ? "mock-map--compact" : ""}`}>
      <div className="mock-map-bg" />
      <div className="mock-map-pin mock-map-pin--1">1</div>
      <div className="mock-map-pin mock-map-pin--2">2</div>
      <div className="mock-map-pin mock-map-pin--3">3</div>
      <div className="mock-map-panel">
        <div className="mock-map-row is-you">
          <span className="mock-map-rank">1</span>
          <div>
            <div className="mock-map-name">Your business</div>
            <div className="mock-map-meta">4.9 · 128 reviews · Open now</div>
          </div>
          <span className="mock-map-cta">Call</span>
        </div>
        <div className="mock-map-row">
          <span className="mock-map-rank">2</span>
          <div>
            <div className="mock-map-name">A competitor</div>
            <div className="mock-map-meta">4.7 · 84 reviews</div>
          </div>
        </div>
        <div className="mock-map-row">
          <span className="mock-map-rank">3</span>
          <div>
            <div className="mock-map-name">Another local</div>
            <div className="mock-map-meta">4.6 · 42 reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockInbox() {
  const rows = [
    { name: "Sarah, SW11", src: "Widget", tone: "hot", note: "Boiler swap · quoted £2,400" },
    { name: "Mike, SW12", src: "Missed call", tone: "warm", note: "Auto-texted, 5 questions answered" },
    { name: "David, SW4", src: "WhatsApp", tone: "hot", note: "Bathroom refit · site visit booked" },
    { name: "Anya, SW8", src: "Google Ads", tone: "cool", note: "Powerflush enquiry" },
  ];
  return (
    <div className="mock-inbox">
      <div className="mock-inbox-head">
        <span className="mock-inbox-title">Tandemm Base · today</span>
        <span className="mock-inbox-count">4 new</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="mock-inbox-row">
          <span className={`mock-inbox-dot mock-inbox-dot--${r.tone}`} />
          <div className="mock-inbox-body">
            <div className="mock-inbox-name">
              {r.name} <span className="mock-inbox-src">via {r.src}</span>
            </div>
            <div className="mock-inbox-note">{r.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockGrowth() {
  const bars = [22, 28, 34, 33, 41, 48, 55, 62, 68, 74, 82, 91];
  return (
    <div className="mock-growth">
      <div className="mock-growth-head">
        <div>
          <div className="mock-growth-title">Booked jobs · last 12 months</div>
          <div className="mock-growth-sub">Tandemm Local + Tandemm Base + Duo</div>
        </div>
        <div className="mock-growth-delta">+314%</div>
      </div>
      <div className="mock-growth-chart">
        {bars.map((b, i) => (
          <span
            key={i}
            className="mock-growth-bar"
            style={{ height: `${b}%` }}
          />
        ))}
      </div>
      <div className="mock-growth-axis">
        <span>Jan</span>
        <span>Apr</span>
        <span>Jul</span>
        <span>Oct</span>
      </div>
    </div>
  );
}

function MockBoost() {
  return (
    <div className="mock-boost">
      <div className="mock-boost-head">
        <div className="mock-boost-title">Tandemm Boost · this week</div>
        <span className="mock-boost-status">Live</span>
      </div>
      <div className="mock-boost-metrics">
        <div>
          <div className="mock-boost-num">28</div>
          <div className="mock-boost-label">calls this week</div>
        </div>
        <div>
          <div className="mock-boost-num">£38</div>
          <div className="mock-boost-label">cost per booked job</div>
        </div>
        <div>
          <div className="mock-boost-num">14</div>
          <div className="mock-boost-label">jobs on the diary</div>
        </div>
      </div>
      <div className="mock-boost-lines">
        <div className="mock-boost-line">
          <span>Local Services Ads</span>
          <span className="mock-boost-line-bar"><span style={{ width: "78%" }} /></span>
          <span className="mock-boost-line-val">18 leads</span>
        </div>
        <div className="mock-boost-line">
          <span>Google Search</span>
          <span className="mock-boost-line-bar"><span style={{ width: "52%" }} /></span>
          <span className="mock-boost-line-val">10 leads</span>
        </div>
      </div>
    </div>
  );
}
