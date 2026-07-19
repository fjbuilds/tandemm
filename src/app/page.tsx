"use client";

import { CSSProperties, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button } from "@/components/tandemm/Button";
import { HeroVisual } from "@/components/tandemm/HeroVisual";
import { DiamondLoader } from "@/components/tandemm/DiamondLoader";
import { DashboardPhone } from "@/components/tandemm/Dashboard";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ─────────────────────────────────────────────────────────── */
/*  Diagnosis / Prevention / Cure, the process                 */
/* ─────────────────────────────────────────────────────────── */

const DPC = [
  {
    step: "01",
    title: "Diagnosis",
    art: "magnifier" as const,
    oneLiner:
      "A scored audit of your site, your ads and your Google rankings. Yours to keep, no commitment.",
    items: [
      "Every page checked by hand",
      "Ad accounts scored on structure and waste",
      "Local rank across your postcodes",
    ],
  },
  {
    step: "02",
    title: "Prevention",
    art: "wrench" as const,
    oneLiner:
      "Website rebuild, tracking number, widget, dashboard. Built for you when you sign up, at no extra cost.",
    items: [
      "Website rebuilt, fast and mobile-first",
      "Tracking phone number and lead widget installed",
      "Dashboard set up, ads restructured",
    ],
  },
  {
    step: "03",
    title: "Cure",
    art: "pulse" as const,
    oneLiner:
      "Where the lead generation happens. Ads run, enquiries land in one place, and the engine keeps working.",
    items: [
      "Google Ads managed and tuned weekly",
      "Every enquiry in one dashboard",
      "Missed calls recovered and customers quoted",
    ],
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Feature preview cards                                      */
/* ─────────────────────────────────────────────────────────── */

const FEATURE_PREVIEW = [
  {
    tag: "Website rebuild",
    title: "A site that turns visitors into booked jobs.",
    body: "Fast, mobile-first, and built around one goal: get the homeowner into the widget or onto the phone.",
  },
  {
    tag: "Google Ads",
    title: "In front of homeowners who are ready to book.",
    body: "Your ads sit where the work is, on the searches that turn into jobs. Tuned every week, and spend moved to whatever is paying back.",
  },
  {
    tag: "Tracking and widget",
    title: "Every call and form, in one dashboard.",
    body: "Dedicated tracking number, on-site widget, missed-call auto-text. Nothing lands in a black hole.",
  },
  {
    tag: "Missed-call capture",
    title: "Missed calls, caught and quoted.",
    body: "You can't answer every call. The system texts the homeowner from your number, runs them through five qualifying questions, and drops the answers into your dashboard.",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  FAQ                                                        */
/* ─────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "How much does it cost?",
    a: "The audit is free. The website rebuild, tracking setup and dashboard are all included when you sign up for the lead generation stage. From there it's one monthly fee, everything in. You pick how many leads a month you want and the price follows, roughly £40 per lead all in, from around £600 up to £5,000. Exactly half of the fee is ad spend, at cost.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "One month's notice on the monthly fee. You commit to a three month minimum on lead generation, which is what the free rebuild is built on. After that, notice period is one month, cancel any time.",
  },
  {
    q: "What's the difference between LSA and CPC?",
    a: "LSA (Local Services Ads) sits at the top of Google and charges you only when a homeowner actually contacts you. CPC (Google Ads) charges per click. We run both.",
  },
  {
    q: "Do I own the website you build?",
    a: "Yes. The website, the domain, the content are all yours. If you leave after the three month term, you take it with you.",
  },
  {
    q: "How fast will I see leads?",
    a: "LSA leads inside 2 to 4 weeks of going live. CPC inside the first month. SEO compounds, so month three beats month one.",
  },
];

/* ─────────────────────────────────────────────────────────── */
/*  Component                                                  */
/* ─────────────────────────────────────────────────────────── */

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
    const params = new URLSearchParams({ website: trimmed });
    router.push(`/book?${params.toString()}`);
  };

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <DiamondLoader />
      <Nav active="home" />

      {/* ── HERO ── */}
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
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 28 }}>
                <span
                  className="hero-title"
                  style={{ fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: 1, marginTop: 0, color: "var(--color-primary)" }}
                >
                  3.6m
                </span>
                <span style={{ maxWidth: 220, textAlign: "left", fontSize: 14, lineHeight: 1.4, color: "var(--color-ink-muted)" }}>
                  people in the UK search for a tradesman every month
                </span>
              </div>
            </Reveal>
            <Reveal>
              <p className="hero-desc" style={{ marginTop: 20, maxWidth: 480 }}>
                We audit your site, rebuild it, run your ads and catch every
                enquiry. One process, one fee. You get in the van.
              </p>
            </Reveal>

            {/* URL audit form */}
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

      {/* ── DPC, the process, not offerings ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-10 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              What we do
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Diagnosis. Prevention. Cure.
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              What you get: a free audit that&apos;s yours to keep, a
              rebuilt website and full setup at no cost, then an engine
              that turns local searches into booked jobs.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {DPC.map((item) => (
              <Reveal key={item.step}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  <DpcArt name={item.art} />
                  <div className="relative mb-3">
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)]">
                      Stage {item.step}
                    </span>
                  </div>
                  <h3 className="relative mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="relative mb-4 text-[14.5px] leading-[1.55] text-[var(--color-ink-muted)]">
                    {item.oneLiner}
                  </p>
                  <ul className="relative mt-auto flex flex-col gap-2 border-t border-[var(--color-hairline-soft)] pt-4">
                    {item.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-[13.5px] leading-[1.4] text-[var(--color-ink)]"
                      >
                        <span className="mt-[7px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE PREVIEW ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              What you get
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Everything you would normally hire multiple people for.
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
              One system captures every enquiry — calls, forms, missed
              calls — so nothing slips through the cracks. You get on
              with the work.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FEATURE_PREVIEW.map((f) => (
              <Reveal key={f.tag}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-accent-hover)]">
                    {f.tag}
                  </span>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-[20px] font-bold leading-[1.2]">
                    {f.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 text-center">
            <Button href="/features" variant="ghost">
              See every feature
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ── */}
      <section className="bg-[var(--color-canvas-deep)] px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  One dashboard
                </div>
                <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
                  Right now, leads are slipping through the cracks.
                </h2>
                <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-ink-muted)]">
                  Calls go to voicemail while you&apos;re on the tools. Texts
                  get buried. You&apos;ve no real idea which job came from
                  where. The dashboard tracks every enquiry, from every
                  source, so nothing goes cold and you can see exactly
                  what&apos;s working.
                </p>
                <ul className="mb-6 flex flex-col gap-2.5 text-[14.5px] leading-[1.55]">
                  {[
                    "Every call, form, WhatsApp and missed call tracked in one place",
                    "Every lead tied to its source: ads, SEO, direct or referral",
                    "Missed calls get an instant text back, before the lead cools",
                    "Reporting tied to booked jobs, not clicks",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[var(--color-ink)]">
                      <span className="mt-[9px] block h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-muted)]" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Button href="/features">Explore the dashboard</Button>
              </div>
            </Reveal>

            <Reveal>
              <DashboardPhone view="list" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-[860px] px-6 py-20">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Frequently asked questions
          </h2>
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
        <div className="mt-6 text-center">
          <Button href="/pricing" variant="ghost">
            More questions on the Pricing page
          </Button>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mx-auto max-w-[1160px] px-6 pb-20">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] sm:px-14">
            <h2 className="mx-auto max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Find out where your site is costing you jobs.
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[17px] leading-[1.55] text-white/70">
              Free audit. Yours to keep. No hard sell.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get my free audit
              </Button>
              <Button href="/features" variant="secondary">
                See features
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Faded stage illustrations                                  */
/* ─────────────────────────────────────────────────────────── */

function DpcArt({ name }: { name: "magnifier" | "wrench" | "pulse" }) {
  const common = {
    width: 150,
    height: 150,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-accent)",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-6 -top-6 opacity-[0.07]"
    >
      {name === "magnifier" && (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      )}
      {name === "wrench" && (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />
        </svg>
      )}
      {name === "pulse" && (
        <svg {...common}>
          <path d="M2 12h4l2-6 4 14 3-9 2 3h5" />
        </svg>
      )}
    </div>
  );
}

