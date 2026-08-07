"use client";

import { CSSProperties, FormEvent, Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { ScanInput } from "@/components/tandemm/ScanInput";
import { HeroSystem } from "@/components/tandemm/HeroSystem";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { TrustPartners } from "@/components/tandemm/TrustPartners";
import { GuaranteeStrip } from "@/components/tandemm/GuaranteeStrip";
import { ContactOptions } from "@/components/tandemm/ContactOptions";
import { FoundersNote } from "@/components/tandemm/FoundersNote";
import { FlowConnector } from "@/components/tandemm/FlowConnector";
import {
  GoogleLocalPack,
  TradesSite,
  BaseApp,
  StepMockSignup,
  StepMockCall,
  StepMockPhotos,
  StepMockPreview,
  StepMockLive,
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
    bullets: [
      "More of your area actually seeing you",
      "The right jobs, in your postcodes, every month",
      "A site that loads fast, so people stay to enquire",
    ],
    mock: "google" as const,
  },
  {
    n: "02",
    title: "Win the visit",
    body: "Every page is built to turn a visitor into an enquiry, and each one drops straight into the app with an instant notification. You manage the whole way, from first ping through to a booked-in job, all from one simple app.",
    bullets: [
      "Enquiries land in your pocket the second they happen",
      "No missed leads while you&rsquo;re on the tools",
      "One tap to call or WhatsApp the customer back",
    ],
    mock: "site" as const,
  },
  {
    n: "03",
    title: "Get booked",
    body: "Send quotes and invoices in a few taps, straight from the app, and get paid faster. Then the moment an invoice is settled, the app automatically asks the customer for a review, so every finished job helps the next one find you.",
    bullets: [
      "Get paid faster, with less chasing",
      "Every finished job earns you the next one",
    ],
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
      "Quote-taking widget, replacing outdated enquiry forms",
      "Instant notification when a job comes in",
      "Missed-call text-back &amp; enquiry recovery, automatic",
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
      "Images optimised for Google&rsquo;s algorithm",
    ],
  },
  {
    icon: "tools",
    title: "Runs the business",
    items: [
      "Ready-to-buy customers, sent to you automatically via the website",
      "Voice-enabled app to log jobs on the move",
      "Automated follow-ups for cold enquiries and Google reviews",
      "The tech side of the business, handled 24/7",
    ],
  },
];

const DIFFERENTIATORS = [
  {
    icon: "phone" as const,
    title: "Missed-call recovery",
    body: "When you&rsquo;re on the tools and can&rsquo;t pick up, an automatic text goes straight back the second a call drops. The customer knows you&rsquo;ll be in touch, so the lead never goes cold before you&rsquo;ve seen it.",
  },
  {
    icon: "star" as const,
    title: "Quoting quality control",
    body: "We don&rsquo;t auto-quote on your behalf. Before an enquiry reaches you, the customer answers the right questions, so what lands is a proper, qualified job with the detail you need to price it.",
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
    ],
  },
  {
    title: "Plan your day, get there faster",
    items: [
      "Today&rsquo;s jobs pinned on a map",
      "Full diary &amp; appointments in one place",
      "Log arrival, hand over notes in one tap",
    ],
  },
];

const GETTING_STARTED = [
  {
    n: "1",
    when: "Day one, 30 seconds",
    title: "Scan your site in 30 seconds",
    body: "Pop in your website and you get a plain-English score on where it&rsquo;s losing you enquiries. From there, leave your details and we&rsquo;ll come back to you, or skip the wait and call us on the spot.",
    Mock: StepMockSignup,
  },
  {
    n: "2",
    when: "Within 24 hours",
    title: "We call you back inside a day",
    body: "If you left your details rather than calling straight through, this is when you&rsquo;ll hear from us. Founder-led, no support queue, no ticket number. You get a proper conversation about your business, with an early design of your new site already on the table.",
    Mock: StepMockCall,
  },
  {
    n: "3",
    when: "A quick 5 minutes",
    title: "You send us a few bits",
    body: "Photos of your work, the services you offer, your area and your team. The bits that make the site properly yours. Send them over and we build everything around them.",
    Mock: StepMockPhotos,
  },
  {
    n: "4",
    when: "Within 5 days",
    title: "Your working site lands in 5 days",
    body: "Within five days you get a fully working site to review, not a rough sketch. We go back and forth until every page, every word and every photo is right.",
    Mock: StepMockPreview,
  },
  {
    n: "5",
    when: "Live and ongoing",
    title: "Everything goes live",
    body: "The whole system switches on together. Your website, the app, your enquiries and your SEO all connected. We run through how it works, then you&rsquo;re away while we keep it running behind the scenes.",
    Mock: StepMockLive,
  },
];

const FAQS = [
  {
    q: "What does the plan actually cost?",
    a: "£197 a month + VAT. That covers your rebuilt site, ongoing SEO with Tandemm Reach, Duo to run your enquiries and jobs, the voice assistant, tracking and the enquiry widget. Tandemm Fuel is a separate service, priced against your ad spend, and only added on if and when you want it.",
  },
  {
    q: "Is there a minimum term?",
    a: "No minimum term. There is a proper written agreement, because we&rsquo;re building real infrastructure for your business, but you&rsquo;re never locked in for a stretch you can&rsquo;t leave. On top of that, the 90 Day Tandemm Promise: if it hasn&rsquo;t earned its keep in 90 days, the plan refunds in full.",
  },
  {
    q: "How fast will the phone start ringing?",
    a: "SEO compounds week on week, so month three is ahead of month one and month six is a different business. If you want faster, Tandemm Fuel can start feeding the diary inside the first month.",
  },
  {
    q: "How does the website side of it actually work?",
    a: "We build and run the site inside the Tandemm system, which is what keeps the SEO, tracking, widget and Duo talking to each other. You focus on the work coming in, we handle the wiring in the background. Design changes are made for you at any time, no dev tickets or hourly fees.",
  },
  {
    q: "Do I need to be techy to run Duo?",
    a: "No. If you can send a text, you can run Duo. Most of the work is voice-first, so on a busy day you talk, Duo types. The founder walks you through it on your welcome call, and support is a message away, not a ticket queue.",
  },
  {
    q: "How much of my time does setup take?",
    a: "About an hour of your time, spread across the first week. The welcome call, sending a few photos, and reviewing the site when it lands. We do the rest in the background so you can stay on the tools.",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAudit = (e: FormEvent) => {
    e.preventDefault();
    const t = url.trim();
    router.push(t ? `/book?url=${encodeURIComponent(t)}` : "/book");
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
              <h1 className="v2-hero-title">
                You&rsquo;re good at the job.<br />
                We make sure the right people{" "}
                <span className="v2-hero-underline">see</span> it.
              </h1>
            </Reveal>
            <Reveal>
              <div className="v2-hero-stat">
                <div className="v2-hero-stat-num">77%</div>
                <p className="v2-hero-stat-text">
                  of Google users in the UK don&rsquo;t scroll past page 1. If
                  you&rsquo;re not on it, most of your area never sees you, and
                  those jobs go to the trades that are.
                </p>
              </div>
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
                  See where I&apos;m losing jobs
                </button>
              </form>
            </Reveal>
            <Reveal>
              <div className="v2-hero-guarantee">
                <GuaranteeStrip variant="inline" />
              </div>
            </Reveal>
          </div>

          <div className="v2-hero-visual">
            <Reveal>
              <HeroSystem />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS NOTE (trust anchor, high-up) ──────────────── */}
      <FoundersNote />

      {/* ── TRUST STRIP ─────────────────────────────────────────── */}
      <TrustPartners />

      {/* ── FLOW: FROM GETTING FOUND TO BOOKED (curved line) ───── */}
      <section className="v2-flow">
        <div className="v2-flow-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">How it all works together</span>
            <h2 className="v2-h2">
              From getting found,<br />to getting paid.
            </h2>
            <p className="v2-lede">
              Your website. Tandemm Reach. Duo.<br />
              One system, generating high-quality, local business.
            </p>
          </Reveal>

          <div className="v2-flow-steps">
            {FLOW_STEPS.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Fragment key={s.n}>
                  {i > 0 && <FlowConnector flip={flip} />}
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
                        <div className="v2-flow-step-frame">
                          {s.mock === "google" && <GoogleLocalPack />}
                          {s.mock === "site" && <TradesSite />}
                          {s.mock === "base" && <BaseApp variant="inbox" />}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </Fragment>
              );
            })}
          </div>
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
              Your website. Tandemm Reach. Duo.<br />
              One system, generating high-quality, local business.
            </p>
          </Reveal>
          <Reveal>
            <div className="v2-subs-cta">
              <ScanInput variant="dark" />
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
              A rebuilt website, hands-on SEO every month so you stay visible,
              and Tandemm Duo to handle enquiries and catch any you
              miss. Here&rsquo;s what you get.
            </p>
          </Reveal>

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

          <Reveal>
            <div className="v2-diff">
              <div className="v2-diff-head">
                <span className="v2-eyebrow">The Tandemm difference</span>
                <p className="v2-diff-lede">
                  Most website companies stop at the site. We keep working after
                  the enquiry lands. Not by auto-quoting on your behalf, but by
                  recovering the calls you miss and controlling the quality of
                  what reaches you.
                </p>
              </div>
              <div className="v2-diff-grid">
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.title} className="v2-diff-card">
                    <span className="v2-diff-illus" aria-hidden="true">
                      <DiffIllus name={d.icon} />
                    </span>
                    <div>
                      <div className="v2-diff-title">{d.title}</div>
                      <div
                        className="v2-diff-body"
                        dangerouslySetInnerHTML={{ __html: d.body }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
                    <BaseApp variant="home" withMic />
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
                    <div className="v2-app-voice-screenhead">
                      <span className="v2-app-voice-mic v2-app-voice-mic--live" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="2" width="6" height="12" rx="3" />
                          <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
                        </svg>
                      </span>
                      <span className="v2-app-voice-label">Speaking to Duo</span>
                      <span className="v2-app-voice-rec">
                        <span className="v2-app-voice-rec-dot" />
                        Listening
                      </span>
                    </div>
                    <div className="v2-app-voice-wave" aria-hidden="true">
                      {[8, 16, 24, 14, 30, 20, 34, 18, 26, 12, 22, 10, 28, 16, 8, 20, 14, 24].map((h, i) => (
                        <span key={i} style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }} />
                      ))}
                    </div>
                    <p className="v2-app-voice-transcript">
                      &ldquo;Log the job at 42 Oak Rise. Boiler swap for Sarah,
                      quoted at 2,400. Book me in Thursday morning.&rdquo;
                    </p>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="v2-app-voice-panel v2-app-voice-panel--duo">
                    <div className="v2-app-voice-screenhead">
                      <span className="v2-app-voice-duomark" aria-hidden="true" />
                      <span className="v2-app-voice-label">Logged in Duo</span>
                      <span className="v2-app-voice-done">Done</span>
                    </div>
                    <div className="v2-app-voice-job">
                      <div className="v2-app-voice-job-head">
                        <div>
                          <div className="v2-app-voice-job-title">Boiler swap · Sarah W.</div>
                          <div className="v2-app-voice-job-sub">42 Oak Rise · Thu, 8:00am</div>
                        </div>
                        <div className="v2-app-voice-job-val">£2,400</div>
                      </div>
                      <div className="v2-app-voice-job-rows">
                        <div><span>Contact</span><span>Sarah W. saved</span></div>
                        <div><span>Deposit invoice</span><span>Sent</span></div>
                        <div><span>Diary</span><span>Thu 8:00am booked</span></div>
                      </div>
                    </div>
                    <div className="v2-app-voice-duochips">
                      <span>Job created</span>
                      <span>Invoice sent</span>
                      <span>Diary updated</span>
                    </div>
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

      {/* ── TANDEMM FUEL ADD-ON ────────────────────────────────── */}
      <section className="v2-addon">
        <div className="v2-addon-inner">
          <Reveal>
            <div className="v2-addon-card">
              <div className="v2-addon-copy">
                <span className="v2-addon-tag">Separate service · Tandemm Fuel</span>
                <div className="v2-addon-title">
                  Turn your lead volume up or down, whenever you need.
                </div>
                <div className="v2-addon-sub">
                  Fuel is a standalone service, not part of the monthly plan.
                  Bolt it on when the diary&rsquo;s quiet, ease it off when
                  you&rsquo;re full, or run it on its own. Priced against your
                  ad spend, never a flat retainer, and only paid when you want
                  it running.
                </div>
                <div className="v2-addon-points">
                  <span>Live within the week</span>
                  <span>Spend follows what pays</span>
                  <span>Pause any time</span>
                </div>
                <Button href="/boost" variant="primary">
                  See how Tandemm Fuel works
                </Button>
              </div>
              <div className="v2-addon-visual">
                <FuelVolume />
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
              Your website, Tandemm Reach SEO every month, and Duo
              running your enquiries and jobs. One flat fee that most trades
              earn back inside a single extra job. Want more volume on top?
              Tandemm Fuel turns the leads up or down as you need them.
            </p>
          </Reveal>
          <Reveal>
            <div className="v2-price-row">
              <span>One flat fee</span>
              <span className="v2-price-dot" />
              <span>No setup fees</span>
              <span className="v2-price-dot" />
              <span>No minimum term</span>
              <span className="v2-price-dot" />
              <span>Cancel any time</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="v2-price-cta">
              <ScanInput />
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
          <Reveal>
            <p className="v2-brand-tagline">
              Every enquiry. Every customer. Every day.<br />
              Working in Tandemm.
            </p>
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

function FuelVolume() {
  // bars for "quiet" baseline vs "boosted" volume
  const bars = [34, 40, 30, 46, 52, 60, 72, 84, 92];
  return (
    <div className="fuel-vol" aria-hidden="true">
      <div className="fuel-vol-head">
        <div>
          <div className="fuel-vol-title">Lead volume</div>
          <div className="fuel-vol-sub">This month · Tandemm Fuel on</div>
        </div>
        <span className="fuel-vol-badge">
          <span className="fuel-vol-badge-dot" />
          Boosted
        </span>
      </div>

      <div className="fuel-vol-chart">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`fuel-vol-bar ${i >= 6 ? "is-boost" : ""}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="fuel-vol-scale">
        <span>Quiet week</span>
        <span>Diary full</span>
      </div>

      <div className="fuel-vol-control">
        <span className="fuel-vol-ctrl-btn">−</span>
        <div className="fuel-vol-track">
          <div className="fuel-vol-fill" style={{ width: "78%" }}>
            <span className="fuel-vol-knob" />
          </div>
        </div>
        <span className="fuel-vol-ctrl-btn is-plus">+</span>
      </div>
      <div className="fuel-vol-foot">
        <span>Turn up for volume</span>
        <span>Ease off when full</span>
      </div>
    </div>
  );
}

function DiffIllus({ name }: { name: "phone" | "star" }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "phone") {
    return (
      <svg {...common} width="44" height="44">
        <rect x="19" y="8" width="26" height="48" rx="5" />
        <line x1="19" y1="16" x2="45" y2="16" />
        <line x1="19" y1="48" x2="45" y2="48" />
        <circle cx="32" cy="52" r="1.4" />
        <path d="M27 24 h10" />
        <path d="M27 30 h10" />
        <path d="M27 36 h6" />
      </svg>
    );
  }
  return (
    <svg {...common} width="44" height="44">
      <path d="M32 8 l6.9 14 15.4 2.2 -11.2 10.9 2.7 15.3 -13.8 -7.2 -13.8 7.2 2.7 -15.3 -11.2 -10.9 15.4 -2.2 z" />
    </svg>
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
