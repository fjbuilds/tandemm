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
import { ScrollSpine, SpineStop } from "@/components/tandemm/ScrollSpine";
import { GuaranteeStrip } from "@/components/tandemm/GuaranteeStrip";
import { ContactOptions } from "@/components/tandemm/ContactOptions";
import { StepTimeline } from "@/components/tandemm/StepTimeline";
import { AppShowcase } from "@/components/tandemm/AppShowcase";
import { DuoFeature } from "@/components/tandemm/DuoFeature";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const PILLARS = [
  {
    tag: "Website",
    title: "A site that closes.",
    body: "Fast, mobile-first, built around one goal: get the homeowner into the widget or on the phone. Your storefront, doing its job.",
    outcomes: ["Higher enquiry rate on the traffic you already have", "Every service page ranks in its own right", "Rebuilt for you inside 7 days"],
  },
  {
    tag: "SEO",
    title: "Found in the map pack.",
    body: "The compounding lead source. Local Search wins your postcodes and holds them, so the phone rings without paying per click.",
    outcomes: ["Google Business Profile tightened weekly", "Postcode-level rank tracking, plain English", "The foundation, running long after ads pause"],
  },
  {
    tag: "The Tandemm App",
    title: "The job runs itself.",
    body: "Enquiries land in one place, quotes go out from the van, invoices chase themselves. The paperwork stops eating your evenings.",
    outcomes: ["Every lead in one dashboard", "Quote, invoice, take card on the doorstep", "Missed calls caught before they cool"],
  },
];

const FAQS = [
  {
    q: "What does Tandemm actually cost?",
    a: "The Diagnosis Audit is free. The monthly plan covers your website rebuild, ongoing SEO, the Tandemm App, lead tracking and missed-call capture. If you want Google Ads on top as an accelerator, we manage those for a separate fee that sits on your ad spend.",
  },
  {
    q: "Am I tied into a contract?",
    a: "No. The plan runs month to month. Stop whenever it stops earning its keep. The 90 day guarantee sits over the top of that.",
  },
  {
    q: "Where do the leads actually come from?",
    a: "SEO is the foundation. Your Google Business Profile, your rebuilt site and your service pages are set up to win the map pack in your postcodes. Ads are the accelerator layered on top, useful when you want volume now or a new area to warm up fast.",
  },
  {
    q: "Do I own the website?",
    a: "The domain and content are yours. The site itself is built and maintained inside the Tandemm system, which is what keeps the SEO, tracking, widget and app talking to each other. Most owners never think about it, they just pick up the phone when it rings.",
  },
  {
    q: "How fast will I see the phone start ringing?",
    a: "Ads start feeding the diary inside the first month. SEO builds week on week, so month three is already ahead of month one, and month six is a different business.",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAudit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      router.push("/book");
      return;
    }
    router.push(`/book?${new URLSearchParams({ website: trimmed }).toString()}`);
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
              <p className="hero-subtitle" style={{ position: "relative", display: "inline-block" }}>
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
                  Website, SEO and the Tandemm App working in tandem.
                  <br />
                  One monthly plan. Every enquiry accounted for.
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
                  Get my free audit
                </button>
              </form>
            </Reveal>

            <Reveal>
              <div className="hero-trust-row">
                <GuaranteeStrip variant="inline" />
                <span className="hero-trust-sep" aria-hidden="true" />
                <span className="hero-trust-copy">
                  <b>3.6m</b> homeowners search for a tradesman every month
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
                  <Button href="/book">Get my free audit</Button>
                </div>
                <div className="hero-glass-glow" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 90 DAY GUARANTEE ────────────────────────────────────── */}
      <section className="px-6 pb-4 pt-6">
        <div className="mx-auto max-w-[1160px]">
          <GuaranteeStrip />
        </div>
      </section>

      {/* ── JOURNEY (gold scroll spine ties the story together) ── */}
      <ScrollSpine>
        {/* STOP 1 — How it works */}
        <SpineStop index={1} eyebrow="How Tandemm works">
          <div className="section-head">
            <h2 className="section-title">
              Three pieces, working in tandem.
            </h2>
            <p className="section-lede">
              A site that closes, a search engine that keeps finding you, and
              an app that keeps the day moving. Bought separately, three
              subscriptions. Here, one plan.
            </p>
          </div>

          <div className="pillar-grid">
            {PILLARS.map((p) => (
              <Reveal key={p.tag}>
                <article className="pillar-card">
                  <span className="pillar-tag">{p.tag}</span>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-body">{p.body}</p>
                  <ul className="pillar-outcomes">
                    {p.outcomes.map((o) => (
                      <li key={o}>
                        <span className="pillar-tick" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </SpineStop>

        {/* STOP 2 — Website (in the same spot BFT puts service 1) */}
        <SpineStop index={2} eyebrow="Your storefront">
          <div className="split-showcase">
            <div className="split-showcase-copy">
              <Reveal>
                <h2 className="section-title">
                  A website that turns strangers into booked jobs.
                </h2>
              </Reveal>
              <Reveal>
                <p className="section-lede">
                  Fast on a phone. Clear on a laptop. Every page written to
                  answer the question the homeowner just typed into Google, then
                  tee up the enquiry.
                </p>
              </Reveal>
              <ul className="outcome-list">
                {[
                  "90+ Google PageSpeed on every service page",
                  "Widget, tap-to-call and WhatsApp on every screen",
                  "Copy in your voice, not agency filler",
                  "Rebuilt and live inside 7 days",
                ].map((i) => (
                  <Reveal key={i}>
                    <li>{i}</li>
                  </Reveal>
                ))}
              </ul>
              <Reveal>
                <div className="mt-6">
                  <Button href="/features">See a live site</Button>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="split-showcase-visual">
                <div className="mock-browser">
                  <div className="mock-browser-bar">
                    <span /> <span /> <span />
                    <div className="mock-browser-url">
                      yourbusiness.co.uk
                    </div>
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
              </div>
            </Reveal>
          </div>
        </SpineStop>

        {/* STOP 3 — SEO / Local Search */}
        <SpineStop index={3} eyebrow="Local Search · the foundation">
          <div className="split-showcase split-showcase--flip">
            <div className="split-showcase-copy">
              <Reveal>
                <h2 className="section-title">
                  Ranking is the lead engine.<br />Ads are the accelerator.
                </h2>
              </Reveal>
              <Reveal>
                <p className="section-lede">
                  Homeowners trust the map pack. It&rsquo;s the first thing
                  they see, and they call the top three. Get you in there and
                  the phone doesn&rsquo;t stop, whether ads are on or off.
                </p>
              </Reveal>
              <ul className="outcome-list">
                {[
                  "Rank tracked postcode by postcode, not vanity keywords",
                  "Google Business Profile tuned every week",
                  "Service pages that earn their spot on page one",
                  "Compounding leads, month on month",
                ].map((i) => (
                  <Reveal key={i}>
                    <li>{i}</li>
                  </Reveal>
                ))}
              </ul>
              <Reveal>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/local-search">Local Search deep dive</Button>
                  <Button href="/features" variant="ghost">
                    Or add Ads as an accelerator
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="split-showcase-visual">
                <div className="mock-map">
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
              </div>
            </Reveal>
          </div>
        </SpineStop>

        {/* STOP 4 — Tandemm App as premium included product */}
        <SpineStop index={4} eyebrow="Included, not sold on top">
          <AppShowcase />
        </SpineStop>

        {/* STOP 5 — Duo voice */}
        <SpineStop index={5} eyebrow="Voice, on the tools">
          <DuoFeature />
        </SpineStop>

        {/* STOP 6 — Getting started 5-step */}
        <SpineStop index={6} eyebrow="Getting started">
          <div className="section-head">
            <h2 className="section-title">From URL to live, in a week.</h2>
            <p className="section-lede">
              Five short steps. No cold handovers, no missed calls, no chasing
              PDFs. You&rsquo;ll always know what&rsquo;s next.
            </p>
          </div>
          <StepTimeline />
        </SpineStop>

        {/* STOP 7 — Contact options */}
        <SpineStop index={7} eyebrow="Talk to a human">
          <div className="section-head">
            <h2 className="section-title">Three ways in.</h2>
            <p className="section-lede">
              A real person picks up. No ticket queue, no chatbot loop, no
              hard sell.
            </p>
          </div>
          <ContactOptions />
        </SpineStop>
      </ScrollSpine>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[760px]">
          <Reveal className="mb-8 text-center">
            <div className="section-eyebrow">One plan · one price</div>
            <h2 className="section-title">Everything above, in one monthly figure.</h2>
          </Reveal>
          <Reveal>
            <div className="price-card">
              <div className="price-card-head">
                <div>
                  <div className="price-card-tag">Tandemm plan</div>
                  <div className="price-card-num">
                    £197<span>/mo</span>
                  </div>
                  <div className="price-card-note">+ VAT · month to month</div>
                </div>
                <GuaranteeStrip variant="inline" />
              </div>
              <ul className="price-card-list">
                <li>Website rebuild and hosting</li>
                <li>Ongoing SEO and Local Search</li>
                <li>The Tandemm App with Duo voice</li>
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
                Ads sit on top as an accelerator, priced against your spend. SEO stays underneath either way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[860px] px-6 pb-20">
        <Reveal className="mb-10 text-center">
          <h2 className="section-title">Questions owners ask before they sign.</h2>
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
              Find out where your site is costing you jobs.
            </h2>
            <p className="final-cta-sub">
              Free Diagnosis Audit. Yours to keep. No hard sell, no obligation.
            </p>
            <div className="final-cta-buttons">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get my free audit
              </Button>
              <Button href="/local-search" variant="secondary">
                Explore Local Search
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
