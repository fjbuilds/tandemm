"use client";

import { CSSProperties, FormEvent, Fragment, useState } from "react";
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
import {
  GoogleLocalPack,
  TradesSite,
  SiteShowcase,
  BaseApp,
  TeamRow,
  StepMockSignup,
  StepMockCall,
  StepMockPhotos,
  StepMockPreview,
  StepMockLive,
  BoostFunnel,
} from "@/components/tandemm/Mocks";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const FLOW_STEPS = [
  {
    n: "01",
    title: "Get found",
    body: "Showing up on Google isn&rsquo;t an overnight switch. It&rsquo;s ongoing work, and that&rsquo;s our job. Every month we tune your Google Business Profile and local pages so more of the right people nearby find you over time.",
    bullets: ["Lightning-fast website", "Monthly SEO by hand", "Google Business Profile tuning"],
    mock: "google" as const,
  },
  {
    n: "02",
    title: "Win the visit",
    body: "Every page is built to turn a visitor into an enquiry, and each one drops straight into the app with an instant notification. You manage the whole way, from first ping through to a booked-in job, all from one simple app.",
    bullets: ["Widget on every page", "Instant push notification", "WhatsApp &amp; tap-to-call"],
    mock: "site" as const,
  },
  {
    n: "03",
    title: "Get booked",
    body: "Send quotes and invoices in a few taps, straight from the app, and get paid faster. Then the moment an invoice is settled, the app automatically asks the customer for a review, so every finished job helps the next one find you.",
    bullets: ["Quote &amp; invoice from the app", "Card payment on the doorstep", "Reviews collected automatically"],
    mock: "base" as const,
  },
];

const INCLUDED_GRID = [
  {
    icon: "search",
    title: "Gets you found on Google",
    items: [
      "Ranks when locals search your trade",
      "A page for every service &amp; area you cover",
      "Fast pages Google loves",
      "Monthly SEO working in the background",
    ],
  },
  {
    icon: "inbox",
    title: "Turns visitors into jobs",
    items: [
      "Enquiry forms &amp; WhatsApp direct",
      "Instant push the second a lead lands",
      "Missed call text-back, automatic",
      "Spam filtered, only real enquiries",
    ],
  },
  {
    icon: "gallery",
    title: "Shows off your work",
    items: [
      "Project pages &amp; photo galleries",
      "Before &amp; after sliders",
      "Your own videos on the site",
      "Every job a page you can share",
    ],
  },
  {
    icon: "tools",
    title: "Runs the business",
    items: [
      "Quote &amp; invoice from the van",
      "Card payments on the doorstep",
      "Auto-chase deposits, auto-collect reviews",
      "Full diary, pipeline &amp; CRM",
    ],
  },
];

const APP_FEATURES = [
  {
    title: "Every job in one place",
    items: [
      "Leads land straight from your website",
      "Every job, enquiry to paid, in one line",
      "Pipeline, jobs, appointments at a glance",
      "All contacts, tap to call or text",
    ],
  },
  {
    title: "Quote, invoice &amp; get paid",
    items: [
      "Send quotes &amp; invoices in a few taps",
      "Track every job through to Paid",
      "Auto-asks for a review once paid",
      "Card payment on the doorstep",
    ],
  },
  {
    title: "Plan your day, get there faster",
    items: [
      "Today&rsquo;s jobs pinned on a map",
      "One-tap navigation &amp; live drive times",
      "Full diary &amp; appointments in one place",
      "Log arrival, hand over notes in one tap",
    ],
  },
];

const GETTING_STARTED = [
  {
    n: "1",
    when: "Day one · 2 minutes",
    title: "You sign up online",
    body: "No setup fees, no contract. A few details about the website and you&rsquo;re in. Honestly, it&rsquo;s the hardest part of the whole thing, and it takes about two minutes.",
    Mock: StepMockSignup,
  },
  {
    n: "2",
    when: "Within 24 hours",
    title: "We call to get you set up",
    body: "Within a day, one of the team gives you a welcome call. We get to know your trade, the jobs you want more of, and the areas you want to win, then tell you exactly what happens next. A real person, not a ticket queue.",
    Mock: StepMockCall,
  },
  {
    n: "3",
    when: "A quick 5 minutes",
    title: "You send us a few bits",
    body: "After your call, we send over one short form. Add a few photos, your work, your van, your team, and the bits that make you different. That&rsquo;s everything we need to build a site that&rsquo;s properly yours.",
    Mock: StepMockPhotos,
  },
  {
    n: "4",
    when: "Within 7 days",
    title: "Your website preview lands",
    body: "Within seven days we send you the real thing to review, every word written and every page designed, not a rough wireframe. Want changes? Tell us, and we keep tweaking until you&rsquo;re happy.",
    Mock: StepMockPreview,
  },
  {
    n: "5",
    when: "Live &amp; ongoing",
    title: "Your business goes live",
    body: "Everything goes live as one connected system: your website tied into the app, your quotes and invoices. We set you up with the SEO foundation, then keep working on it every month so Google keeps sending people your way.",
    Mock: StepMockLive,
  },
];

const FAQS = [
  {
    q: "What does the plan actually cost?",
    a: "£197 a month + VAT. That covers your rebuilt site, ongoing SEO with Tandemm Local, the app to run enquiries and jobs, Duo voice assistant, tracking and the enquiry widget. Tandemm Boost (paid ads) is an optional add-on, priced against your spend.",
  },
  {
    q: "Am I tied into a contract?",
    a: "No. Month to month, cancel any time. The 90 Day Tandemm Promise sits over the top: if it hasn&rsquo;t earned its keep in 90 days, the plan refunds in full.",
  },
  {
    q: "Do I own the website?",
    a: "The domain and content are yours. The site itself runs inside the Tandemm system, which is what keeps the SEO, tracking, widget and app talking to each other. Most owners don&rsquo;t think about the wiring, they just pick up the phone when it rings.",
  },
  {
    q: "How fast will the phone start ringing?",
    a: "SEO compounds week on week, so month three is ahead of month one and month six is a different business. If you want faster, Tandemm Boost (paid ads) can start feeding the diary inside the first month.",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAudit = (e: FormEvent) => {
    e.preventDefault();
    const t = url.trim();
    router.push(t ? `/book?${new URLSearchParams({ website: t }).toString()}` : "/book");
  };

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="home" />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="v2-hero">
        <div className="v2-hero-inner">
          <div className="v2-hero-copy">
            <Reveal>
              <span className="v2-hero-tag">
                Tandemm plan · from £197/mo + VAT
              </span>
            </Reveal>
            <Reveal>
              <h1 className="v2-hero-title">
                Everything you need to win<br />work and run the business.
              </h1>
            </Reveal>
            <Reveal>
              <p className="v2-hero-sub">
                A website built for your trade, hands-on SEO every month so
                you show up on Google, and the Tandemm app to run
                enquiries and jobs from your phone. One plan, one team, one bill.
              </p>
            </Reveal>
            <Reveal>
              <form onSubmit={handleAudit} className="v2-hero-form">
                <div className="v2-hero-input">
                  <span>https://</span>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="yourbusiness.co.uk"
                    aria-label="Your website URL"
                  />
                </div>
                <button type="submit" className="v2-hero-btn">
                  Get my Tandemm Diagnosis
                </button>
              </form>
            </Reveal>
            <Reveal>
              <div className="v2-hero-guarantee">
                <GuaranteeStrip variant="inline" />
                <span>Full refund, no debate</span>
              </div>
            </Reveal>
          </div>

          <div className="v2-hero-visual">
            <Reveal>
              <div className="hero-glass v2-hero-glass">
                <div className="hero-glass-highlight" aria-hidden="true" />
                <HeroVisual />
                <div className="hero-glass-fade" aria-hidden="true" />
                <div className="hero-glass-gate">
                  <Button href="/book">Find out what&apos;s costing you jobs</Button>
                </div>
                <div className="hero-glass-glow" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────────────────── */}
      <TrustPartners />

      {/* ── FLOW: FROM GETTING FOUND TO BOOKED (curved line) ───── */}
      <section className="v2-flow">
        <div className="v2-flow-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">How it all works together</span>
            <h2 className="v2-h2">
              From strangers on Google<br />to booked jobs on the diary.
            </h2>
            <p className="v2-lede">
              Your website, your Tandemm Local SEO, and the app
              aren&rsquo;t three separate tools. They&rsquo;re one system that
              takes you from a local Google search to money in the bank.
            </p>
          </Reveal>

          <div className="v2-flow-steps">
            {FLOW_STEPS.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Fragment key={s.n}>
                  {i > 0 && (
                    <div className={`v2-flow-connector ${flip ? "v2-flow-connector--right" : "v2-flow-connector--left"}`} aria-hidden="true">
                      <svg viewBox="0 0 120 80" fill="none" preserveAspectRatio="xMidYMid meet">
                        <path
                          d={flip
                            ? "M60,0 C60,25 95,30 95,40 C95,50 60,55 60,80"
                            : "M60,0 C60,25 25,30 25,40 C25,50 60,55 60,80"}
                          stroke="var(--color-accent)"
                          strokeWidth="1.5"
                          strokeDasharray="6 5"
                          opacity="0.35"
                        />
                      </svg>
                      <span className="v2-flow-diamond-node" />
                    </div>
                  )}
                  <Reveal className="v2-flow-step-outer">
                    <div className={`v2-flow-step ${flip ? "is-flip" : ""}`}>
                      <div className="v2-flow-step-copy">
                        <div className="v2-flow-step-num">
                          <span className="v2-flow-diamond">{s.n}</span>
                        </div>
                        <h3 className="v2-flow-step-title">{s.title}</h3>
                        <p
                          className="v2-flow-step-body"
                          dangerouslySetInnerHTML={{ __html: s.body }}
                        />
                        <ul className="v2-flow-step-bullets">
                          {s.bullets.map((b) => (
                            <li key={b}>
                              <span className="v2-tick" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12l5 5 9-11" />
                                </svg>
                              </span>
                              <span dangerouslySetInnerHTML={{ __html: b }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="v2-flow-step-visual">
                        {s.mock === "google" && <GoogleLocalPack />}
                        {s.mock === "site" && <TradesSite />}
                        {s.mock === "base" && <BaseApp variant="inbox" />}
                      </div>
                    </div>
                  </Reveal>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ROW ────────────────────────────────────────────── */}
      <section className="v2-team">
        <div className="v2-team-inner">
          <Reveal>
            <div className="v2-team-eyebrow">Managed by the Tandemm team</div>
          </Reveal>
          <Reveal>
            <TeamRow />
          </Reveal>
          <Reveal>
            <p className="v2-team-copy">
              A real person on call, email or WhatsApp, never a ticket queue.
              Unlimited changes, no extra charge, ever.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── DARK CTA WITH GLOW ──────────────────────────────────── */}
      <section className="v2-subs v2-subs--glow">
        <div className="v2-subs-inner">
          <Reveal>
            <div className="v2-subs-eyebrow">Ready when you are</div>
          </Reveal>
          <Reveal>
            <h2 className="v2-subs-title">
              Found, won and booked,<br />all from one Tandemm plan.
            </h2>
          </Reveal>
          <Reveal>
            <p className="v2-subs-sub">
              Your website, Tandemm Local and the app, working
              as one system to win the work and run the business, while you
              stay on the tools.
            </p>
          </Reveal>
          <Reveal>
            <div className="v2-subs-cta">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Find out what&apos;s costing you jobs
              </Button>
              <Button href="/book" variant="secondary">Scan my site</Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="v2-subs-note">
              £197/mo + VAT · No setup fees · Cancel any time
            </div>
          </Reveal>
          <Reveal>
            <div className="v2-subs-guarantee">
              <GuaranteeStrip variant="inline" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EVERYTHING YOUR PLAN GIVES YOU ──────────────────────── */}
      <section className="v2-included">
        <div className="v2-included-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">What&rsquo;s included</span>
            <h2 className="v2-h2">Everything your plan gives you.</h2>
            <p className="v2-lede">
              A rebuilt website, hands-on SEO every month, the app to run
              enquiries and jobs, and a real person managing it for you.
              Here&rsquo;s what that actually means.
            </p>
          </Reveal>

          <div className="v2-included-websites">
            <Reveal>
              <h3 className="v2-h3">Show up, look great, get booked.</h3>
              <p className="v2-sub">
                A premium site built for your trade, by us, and run for you
                every month. Below are illustrative site styles, your
                finished site is written from your work, your area and
                your tone of voice.
              </p>
            </Reveal>
            <Reveal>
              <div className="v2-included-showcase-wrap">
                <SiteShowcase />
                <div className="v2-included-badge">
                  <div className="v2-included-badge-num">90+</div>
                  <div>
                    <div className="v2-included-badge-title">Google PageSpeed</div>
                    <div className="v2-included-badge-sub">on every site</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="v2-included-grid">
            {INCLUDED_GRID.map((f) => (
              <Reveal key={f.title}>
                <div className="v2-included-cell">
                  <div className={`v2-included-icon v2-included-icon--${f.icon}`}>
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h4 className="v2-included-title">{f.title}</h4>
                  <ul className="v2-included-list">
                    {f.items.map((item) => (
                      <li key={item}>
                        <span className="v2-tick v2-tick--sm" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5 9-11" />
                          </svg>
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP CARD (rounded, not full-width) ──────────────────── */}
      <section className="v2-app-section">
        <div className="v2-app-section-inner">
          <div className="v2-app-card">
            <div className="v2-app-card-top">
              <div className="v2-app-card-content">
                <Reveal>
                  <span className="v2-eyebrow v2-eyebrow--on-dark">Run it all from your pocket</span>
                </Reveal>
                <Reveal>
                  <h2 className="v2-h2 v2-h2--on-dark">
                    Win it, do it, get paid.<br />All from your pocket.
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="v2-lede v2-lede--on-dark">
                    Every lead from your website lands straight in your pocket.
                    Your CRM, your jobs, your quotes and invoices, your
                    reviews. The whole business, run from your phone.
                  </p>
                </Reveal>

                <div className="v2-app-features">
                  {APP_FEATURES.map((f) => (
                    <Reveal key={f.title}>
                      <div className="v2-app-feature">
                        <h4
                          className="v2-app-feature-title"
                          dangerouslySetInnerHTML={{ __html: f.title }}
                        />
                        <ul className="v2-app-feature-list">
                          {f.items.map((item) => (
                            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="v2-app-card-visual">
                <Reveal>
                  <div className="v2-app-phone-float">
                    <BaseApp variant="inbox" withMic />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Voice / Duo section inside the card */}
            <div className="v2-app-voice">
              <div className="v2-app-voice-header">
                <Reveal>
                  <span className="v2-app-voice-eyebrow">
                    <span className="v2-app-voice-dot" />
                    Talk to Duo · voice-first
                  </span>
                </Reveal>
                <Reveal>
                  <h3 className="v2-app-voice-title">
                    Just talk. Duo does the typing.
                  </h3>
                </Reveal>
                <Reveal>
                  <p className="v2-app-voice-sub">
                    Hands on the tools, paperwork off your plate. Talk to Duo
                    the way you&rsquo;d talk to a good office manager.
                  </p>
                </Reveal>
              </div>

              <div className="v2-app-voice-panels">
                <Reveal>
                  <div className="v2-app-voice-panel v2-app-voice-panel--user">
                    <div className="v2-app-voice-label">You say</div>
                    <p>&ldquo;Log the job at 42 Oak Rise. Boiler swap, quoted at 2,400.&rdquo;</p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="v2-app-voice-panel v2-app-voice-panel--duo">
                    <div className="v2-app-voice-label">Duo handles it</div>
                    <p>&ldquo;Logged. Homeowner is Sarah, deposit invoice going out now. I&rsquo;ll block Thursday morning.&rdquo;</p>
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <ul className="v2-app-voice-list">
                  <li>Log jobs and notes without unlocking your phone</li>
                  <li>Send quotes and invoices while you drive</li>
                  <li>Book calls, chase deposits and update the diary by voice</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED (5-step) ────────────────────────────── */}
      <section className="v2-steps">
        <div className="v2-steps-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">How it works</span>
            <h2 className="v2-h2">Getting started is easy.</h2>
            <p className="v2-lede">
              No long forms, no chasing, and a real person with you from day
              one. Here&rsquo;s exactly how it goes.
            </p>
          </Reveal>

          <div className="v2-steps-list">
            {GETTING_STARTED.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={s.n} className="v2-step-outer">
                  <div className={`v2-step ${flip ? "is-flip" : ""}`}>
                    <div className="v2-step-visual">
                      <s.Mock />
                    </div>
                    <div className="v2-step-copy">
                      <div className="v2-step-badge">
                        <span className="v2-step-badge-num">{s.n}</span>
                        <span
                          className="v2-step-badge-when"
                          dangerouslySetInnerHTML={{ __html: s.when }}
                        />
                      </div>
                      <h3 className="v2-step-title">{s.title}</h3>
                      <p
                        className="v2-step-body"
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOOST ADD-ON WITH GRAPHIC ──────────────────────────── */}
      <section className="v2-addon">
        <div className="v2-addon-inner">
          <Reveal>
            <div className="v2-addon-card">
              <div className="v2-addon-copy">
                <span className="v2-addon-tag">Optional add-on</span>
                <div className="v2-addon-title">
                  Need volume this week? Add Tandemm Boost.
                </div>
                <div className="v2-addon-sub">
                  Paid ads sit on top of Tandemm Local as an accelerator.
                  Turn on for volume, off when the diary&rsquo;s full. Priced
                  against your spend, not a flat retainer.
                </div>
                <Button href="/boost" variant="ghost">See how Boost works</Button>
              </div>
              <div className="v2-addon-visual">
                <BoostFunnel />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section className="v2-contact">
        <div className="v2-contact-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">Talk to a human</span>
            <h2 className="v2-h2">Three ways in.</h2>
          </Reveal>
          <ContactOptions />
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section className="v2-price">
        <div className="v2-price-inner">
          <Reveal className="v2-price-head">
            <span className="v2-eyebrow">Simple pricing</span>
            <h2 className="v2-h2">One price. That&rsquo;s the lot.</h2>
            <div className="v2-price-num">
              £197<span>/mo + VAT</span>
            </div>
            <p className="v2-lede">
              Your website, hands-on SEO with Tandemm Local, the app,
              Duo, tracking and the enquiry widget. Most trades
              earn it back inside a single extra job.
            </p>
          </Reveal>
          <Reveal>
            <div className="v2-price-row">
              <span>One flat fee</span>
              <span className="v2-price-dot" />
              <span>No setup fees</span>
              <span className="v2-price-dot" />
              <span>No contract</span>
              <span className="v2-price-dot" />
              <span>Cancel any time</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="v2-price-cta">
              <Button href="/book">Find out what&apos;s costing you jobs</Button>
              <Link href="/pricing" className="v2-price-link">
                Full pricing breakdown →
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="v2-price-guarantee">
              <GuaranteeStrip variant="inline" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="v2-faq">
        <div className="v2-faq-inner">
          <Reveal>
            <h2 className="v2-h2 v2-h2--center">Questions.</h2>
          </Reveal>
          <div className="v2-faq-list">
            {FAQS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="v2-faq-item">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="v2-faq-btn"
                  >
                    {item.q}
                    <span>{open ? "−" : "+"}</span>
                  </button>
                  <div
                    className="v2-faq-body-wrap"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="v2-faq-body">
                      <p dangerouslySetInnerHTML={{ __html: item.a }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "search")
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    );
  if (name === "inbox")
    return (
      <svg {...common}>
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5 4h14l3 8v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l3-8z" />
      </svg>
    );
  if (name === "gallery")
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5-5-8 8" />
      </svg>
    );
  if (name === "tools")
    return (
      <svg {...common}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a3 3 0 0 1-4.2 4.2L7.5 19.5a2.1 2.1 0 0 1-3-3l9.8-9.8a3 3 0 0 1 4.2 4.2" />
        <path d="M5 3l4 4" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
