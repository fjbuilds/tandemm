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
import { AppShowcase } from "@/components/tandemm/AppShowcase";
import { DuoFeature } from "@/components/tandemm/DuoFeature";
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
} from "@/components/tandemm/Mocks";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* Three spine steps — "From getting found to getting paid" pattern */
const SPINE_STEPS = [
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
    body: "Every page is built to turn a visitor into an enquiry, and each one drops straight into the Tandemm Base app with an instant notification. You manage the whole way, from first ping through to a booked-in job, all from one simple app.",
    bullets: ["Widget on every page", "Instant push to Base", "WhatsApp &amp; tap-to-call"],
    mock: "site" as const,
  },
  {
    n: "03",
    title: "Get booked",
    body: "Send quotes and invoices in a few taps, straight from the app, and get paid faster. Then the moment an invoice is settled, Tandemm Base automatically asks the customer for a review, so every finished job helps the next one find you.",
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
    title: "Turns visitors into enquiries",
    items: [
      "Enquiry forms with job photos attached",
      "Instant alert the second a lead lands",
      "WhatsApp &amp; click-to-call buttons",
      "Spam protection, only real enquiries",
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
    icon: "trust",
    title: "Builds trust so they pick you",
    items: [
      "Your Google reviews on the site",
      "Trade badges, Gas Safe, Which?, MCS",
      "Meet the team, real faces &amp; names",
      "Social media linked up",
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
    body: "Everything goes live as one connected system: your website tied into the Tandemm Base app, your quotes and invoices. We set you up with the SEO foundation, then keep working on it every month so Google keeps sending people your way.",
    Mock: StepMockLive,
  },
];

const FAQS = [
  {
    q: "What does the plan actually cost?",
    a: "£197 a month + VAT. That covers your rebuilt site, ongoing SEO with Tandemm Local, the Tandemm Base app, Duo, tracking and the enquiry widget. Tandemm Boost (paid ads) is an optional add-on, priced against your spend.",
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
                you show up on Google, and the Tandemm Base app to run
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
                  <Button href="/book">Get my Diagnosis</Button>
                </div>
                <div className="hero-glass-glow" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────────────────── */}
      <TrustPartners />

      {/* ── SPINE: FROM GETTING FOUND TO BOOKED ────────────────── */}
      <section className="v2-spine">
        <div className="v2-spine-inner">
          <Reveal className="v2-eyebrow-head">
            <span className="v2-eyebrow">How it all works together</span>
            <h2 className="v2-h2">
              From strangers on Google<br />to booked jobs on the diary.
            </h2>
            <p className="v2-lede">
              Your website, your Tandemm Local SEO, and the Tandemm Base app
              aren&rsquo;t three separate tools. They&rsquo;re one system that
              takes you from a local Google search to money in the bank.
            </p>
          </Reveal>

          <div className="v2-spine-track">
            <div className="v2-spine-line" aria-hidden="true" />
            {SPINE_STEPS.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={s.n} className="v2-spine-row-outer">
                  <div className={`v2-spine-row ${flip ? "is-flip" : ""}`}>
                    <div className="v2-spine-copy">
                      <div className="v2-spine-step">Step {s.n}</div>
                      <h3 className="v2-spine-title">{s.title}</h3>
                      <p
                        className="v2-spine-body"
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />
                      <ul className="v2-spine-bullets">
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
                    <div className="v2-spine-visual">
                      {s.mock === "google" && <GoogleLocalPack />}
                      {s.mock === "site" && <TradesSite />}
                      {s.mock === "base" && <BaseApp variant="inbox" />}
                    </div>
                    <span className="v2-spine-node" aria-hidden="true" />
                  </div>
                </Reveal>
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

      {/* ── DARK SUBSCRIPTION CTA ───────────────────────────────── */}
      <section className="v2-subs">
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
              Your website, Tandemm Local and the Tandemm Base app, working
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
                Check availability
              </Button>
              <Button href="/book" variant="secondary">Talk to us first</Button>
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

      {/* ── SITE SHOWCASE ───────────────────────────────────────── */}
      <section className="v2-showcase">
        <div className="v2-showcase-inner">
          <div className="v2-showcase-head">
            <div>
              <Reveal><span className="v2-eyebrow">Your website does the selling</span></Reveal>
              <Reveal>
                <h2 className="v2-h2 v2-h2--left">
                  Show up, look great,<br />get booked.
                </h2>
              </Reveal>
              <Reveal>
                <p className="v2-lede v2-lede--left">
                  A premium site built for your trade, by us, and run for you
                  every month. Below are illustrative site styles, your
                  finished site is written from your work, your area and
                  your tone of voice.
                </p>
              </Reveal>
            </div>
            <Reveal>
              <div className="v2-showcase-badge">
                <div className="v2-showcase-badge-num">90+</div>
                <div>
                  <div className="v2-showcase-badge-title">Google PageSpeed</div>
                  <div className="v2-showcase-badge-sub">on every site</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <SiteShowcase />
          </Reveal>
        </div>
      </section>

      {/* ── FEATURE 2x2 GRID ─────────────────────────────────────── */}
      <section className="v2-feature-grid">
        <div className="v2-feature-grid-inner">
          {INCLUDED_GRID.map((f) => (
            <Reveal key={f.title}>
              <div className="v2-feature-cell">
                <div className={`v2-feature-icon v2-feature-icon--${f.icon}`}>
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="v2-feature-title">{f.title}</h3>
                <ul className="v2-feature-list">
                  {f.items.map((i) => (
                    <li key={i}>
                      <span className="v2-tick v2-tick--sm" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5 9-11" />
                        </svg>
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: i }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="v2-feature-feeds">
          <span>Feeds straight into</span>
          <span className="v2-feature-feeds-arrow" aria-hidden="true">↓</span>
        </div>
      </section>

      {/* ── DARK BASE APP SECTION ───────────────────────────────── */}
      <section className="v2-base-dark">
        <div className="v2-base-dark-inner">
          <Reveal>
            <div className="v2-base-dark-eyebrow">The Tandemm Base app</div>
          </Reveal>
          <Reveal>
            <h2 className="v2-base-dark-title">
              Win it, do it, get paid.<br />All from your pocket.
            </h2>
          </Reveal>
          <Reveal>
            <p className="v2-base-dark-sub">
              Every lead from your website lands straight in your pocket.
              It&rsquo;s your CRM, your jobs, your quotes and invoices, your
              reviews, the whole business, run from your phone by voice.
            </p>
          </Reveal>
          <AppShowcase />
        </div>
        <div className="v2-base-dark-inner v2-base-dark-inner--duo">
          <DuoFeature />
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

      {/* ── BOOST ADD-ON STRIP ──────────────────────────────────── */}
      <section className="v2-addon">
        <div className="v2-addon-inner">
          <Reveal>
            <div className="v2-addon-card">
              <div>
                <span className="v2-addon-tag">Optional add-on</span>
                <div className="v2-addon-title">
                  Need volume this week? Add Tandemm Boost.
                </div>
                <div className="v2-addon-sub">
                  Paid ads sit on top of Tandemm Local as an accelerator.
                  Turn on for volume, off when the diary&rsquo;s full. Priced
                  against your spend, not a flat retainer.
                </div>
              </div>
              <Button href="/boost" variant="ghost">See how Boost works</Button>
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
              Your website, hands-on SEO with Tandemm Local, the Tandemm
              Base app, Duo, tracking and the enquiry widget. Most trades
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
              <Button href="/book">Check availability</Button>
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

/* ─────────────────────────────────────────────────────────── */
/*  Icons for the 2x2 feature grid                             */
/* ─────────────────────────────────────────────────────────── */

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
  return (
    <svg {...common}>
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
