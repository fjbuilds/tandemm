"use client";

import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { Button, ButtonEl } from "@/components/tandemm/Button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Palette override (matches book page)                              */
/* ------------------------------------------------------------------ */
const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ------------------------------------------------------------------ */
/*  Hero system-flow illustration                                     */
/* ------------------------------------------------------------------ */
const FLOW_PATH =
  "M60,70 C110,45 160,45 210,70 C260,95 300,95 350,70 C400,45 440,45 490,70 C540,95 580,95 640,70";

const FLOW_NODES = [
  {
    key: "traffic",
    x: 60,
    icon: (
      <path
        d="M2 17l4-6 4 3 8-10"
        stroke="var(--color-accent)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "website",
    x: 210,
    icon: (
      <>
        <rect
          x="1"
          y="3"
          width="20"
          height="16"
          rx="2.5"
          stroke="var(--color-accent)"
          strokeWidth="1.8"
          fill="none"
        />
        <line x1="1" y1="8" x2="21" y2="8" stroke="var(--color-accent)" strokeWidth="1.8" />
      </>
    ),
  },
  {
    key: "tracking",
    x: 350,
    icon: (
      <>
        <circle cx="11" cy="11" r="8" stroke="var(--color-accent)" strokeWidth="1.8" fill="none" />
        <circle cx="11" cy="11" r="3.2" fill="var(--color-accent)" />
      </>
    ),
  },
  {
    key: "optimisation",
    x: 490,
    icon: (
      <path
        d="M4 19V13M9.5 19V8M15 19V12M20 19V4"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
  },
  {
    key: "booked",
    x: 640,
    icon: (
      <path
        d="M4 12l5 5 9-9"
        stroke="var(--color-accent)"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Static data                                                       */
/* ------------------------------------------------------------------ */
const KPIS = [
  {
    label: "Enquiries",
    value: 312,
    suffix: "%",
    prefix: "+",
    sparkline: [20, 35, 28, 45, 60, 55, 72, 85, 90, 100],
  },
  {
    label: "Conversion",
    value: 4.3,
    suffix: "%",
    prefix: "",
    sparkline: [30, 40, 35, 50, 55, 60, 65, 70, 68, 75],
  },
  {
    label: "Page load",
    value: 1.1,
    suffix: "s",
    prefix: "",
    sparkline: [90, 80, 75, 65, 55, 50, 45, 40, 38, 35],
  },
  {
    label: "Return on ad spend",
    value: 4.6,
    suffix: "x",
    prefix: "",
    sparkline: [15, 25, 30, 40, 50, 55, 65, 70, 75, 80],
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Growth Audit",
    desc: "We look at your site, your traffic and your competitors. You get a clear picture of where enquiries leak.",
    items: ["Site speed & mobile", "Conversion paths", "Competitor benchmarks", "Tracking gaps"],
  },
  {
    step: "02",
    title: "Growth Foundation",
    desc: "We rebuild the parts that matter most: a fast, conversion-focused site with proper tracking wired end-to-end.",
    items: ["Responsive design", "Clear CTAs", "Speed-optimised", "Analytics & tracking"],
  },
  {
    step: "03",
    title: "Growth Engine",
    desc: "Monthly traffic, testing and tuning. We run Google Ads, test copy and layouts, and improve your numbers every month.",
    items: ["Google Ads management", "A/B testing", "Monthly reporting", "Continuous improvement"],
  },
];

const CASE_STUDY_BEFORE = [
  "Template site, no clear CTA",
  "No tracking on calls or forms",
  "Bounce rate over 70%",
  "Zero visibility on ad spend ROI",
];

const CASE_STUDY_AFTER = [
  "Custom site built to convert",
  "Every call, form and click tracked",
  "Bounce rate down to 32%",
  "4.6x return on ad spend",
];

const CASE_STUDY_STATS = [
  { label: "Enquiries / month", value: "47" },
  { label: "Conversion rate", value: "4.3%" },
  { label: "Cost per lead", value: "£12" },
  { label: "ROAS", value: "4.6x" },
];

const TESTIMONIALS = [
  {
    quote: "Within six weeks we had more enquiries than we'd had in the previous six months. The tracking means I can actually see where the work comes from now.",
    name: "James Marlow",
    role: "Marlow & Co Electrical",
    metric: "+312% enquiries",
  },
  {
    quote: "They didn't just build us a website. They built a system that brings in jobs every single week. I wish I'd found them years ago.",
    name: "Sarah Chen",
    role: "ClearView Windows",
    metric: "47 leads/month",
  },
  {
    quote: "I was sceptical about spending on ads, but the numbers don't lie. Every pound I put in comes back fourfold. That's never happened before.",
    name: "David Okafor",
    role: "Okafor Plumbing",
    metric: "4.6x ROAS",
  },
  {
    quote: "The monthly reports are genuinely useful. No waffle, just what's working, what's not, and what they're doing about it. Proper partner.",
    name: "Emma Watts",
    role: "Watts Landscaping",
    metric: "1.1s load time",
  },
];

const FAQS = [
  {
    q: "What kind of businesses do you work with?",
    a: "Trade and service businesses: electricians, plumbers, builders, landscapers, cleaners, and similar. If your customers find you online and you do the work locally, we're a good fit.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the scope, but most clients invest between £800 and £2,000 per month for the full system. We'll give you a clear number on the discovery call, no surprises.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see a measurable uplift within the first 4–6 weeks. The system compounds over time; month three is always better than month one.",
  },
  {
    q: "Do I need to do anything?",
    a: "Very little. We handle the website, the ads, the tracking and the optimisation. You answer the phone when it rings and do the work you’re great at.",
  },
  {
    q: "What if it doesn't work?",
    a: "We don't lock you into long contracts. If the numbers aren't where they should be after 90 days, you can walk away. But honestly, that hasn't happened yet.",
  },
];

/* ------------------------------------------------------------------ */
/*  Sparkline component                                               */
/* ------------------------------------------------------------------ */
function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const h = 32;
  const w = 80;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="opacity-50">
      <polyline
        points={points}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Count-up hook                                                     */
/* ------------------------------------------------------------------ */
function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { ref, value };
}

/* ------------------------------------------------------------------ */
/*  KPI Card                                                          */
/* ------------------------------------------------------------------ */
function KpiCard({
  label,
  value: target,
  suffix,
  prefix,
  sparkline,
}: (typeof KPIS)[number]) {
  const { ref, value } = useCountUp(target);
  const isDecimal = target % 1 !== 0;
  const displayed = isDecimal ? value.toFixed(1) : Math.round(value).toString();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-1)]"
    >
      <Sparkline data={sparkline} />
      <div className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,42px)] font-extrabold tracking-[-0.03em] text-[var(--color-ink)]">
        {prefix}
        {displayed}
        {suffix}
      </div>
      <div className="text-sm font-medium text-[var(--color-ink-muted)]">
        {label}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                         */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  /* Testimonial slider */
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);
  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="home" />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section
        className="relative box-border px-6 pb-16 pt-[60px] text-center"
        style={{
          background:
            "radial-gradient(60% 42% at 50% 0%, rgba(226,229,222,0.9), transparent 72%)",
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              We build the system that brings you enquiries.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[620px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Most trade businesses have a website that sits there doing
              nothing. We build one that drives traffic, converts visitors and
              tracks every enquiry, so your phone actually rings.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/book">Get your free audit</Button>
              <Button href="/results" variant="ghost">
                See real results
              </Button>
            </div>
          </Reveal>
        </div>

        {/* System flow illustration: a signal travels through each stage */}
        <Reveal className="mx-auto mt-14 max-w-[640px]">
          <svg viewBox="0 0 700 140" className="h-auto w-full" aria-hidden="true">
            <path
              d={FLOW_PATH}
              fill="none"
              stroke="var(--color-hairline)"
              strokeWidth="2"
              strokeDasharray="1 9"
              strokeLinecap="round"
            />
            {FLOW_NODES.map((node, i) => (
              <g
                key={node.key}
                className="flow-node"
                style={{
                  animationDelay: `${(i / (FLOW_NODES.length - 1)) * 7}s`,
                }}
              >
                <circle
                  cx={node.x}
                  cy="70"
                  r="22"
                  fill="var(--color-surface)"
                  stroke="var(--color-hairline)"
                  strokeWidth="1.5"
                />
                <g transform={`translate(${node.x - 11}, 59)`}>{node.icon}</g>
              </g>
            ))}
            <circle r="6" fill="var(--color-accent)" className="flow-dot">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.45 0 0.55 1"
                path={FLOW_PATH}
              />
            </circle>
          </svg>
        </Reveal>
      </section>

      {/* ============================================================ */}
      {/*  KPI TRUST BAND                                              */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-24 pt-8">
        <Reveal className="mb-10 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
            What we measure
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Numbers, not promises
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <Reveal key={kpi.label}>
              <KpiCard {...kpi} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-24 pt-20">
        <div className="mx-auto max-w-[1160px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              How it works
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              One system. Three stages.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((item) => (
              <Reveal key={item.step}>
                <div className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
                  {/* Mini UI illustration area */}
                  <div className="mb-5 rounded-[var(--radius-lg)] bg-[var(--color-surface-sunken)] p-4">
                    {item.step === "01" && (
                      /* Checklist UI */
                      <div className="flex flex-col gap-2">
                        {item.items.map((it, idx) => (
                          <div key={it} className="flex items-center gap-2.5">
                            <span
                              className={cn(
                                "flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] text-[10px]",
                                idx < 3
                                  ? "bg-[var(--color-accent)] text-white"
                                  : "border border-[var(--color-hairline)] bg-white",
                              )}
                            >
                              {idx < 3 ? "✓" : ""}
                            </span>
                            <span className="text-xs text-[var(--color-ink-muted)]">
                              {it}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.step === "02" && (
                      /* Wireframe UI */
                      <div className="space-y-2">
                        <div className="h-2.5 w-3/4 rounded bg-[var(--color-hairline)]" />
                        <div className="h-2.5 w-1/2 rounded bg-[var(--color-hairline)]" />
                        <div className="mt-3 flex gap-2">
                          <div className="h-8 flex-1 rounded-[var(--radius-sm)] bg-[var(--color-accent)] opacity-80" />
                          <div className="h-8 flex-1 rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-white" />
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-1.5">
                          {[1, 2, 3].map((n) => (
                            <div key={n} className="h-10 rounded-[var(--radius-sm)] bg-[var(--color-hairline)]" />
                          ))}
                        </div>
                      </div>
                    )}
                    {item.step === "03" && (
                      /* Bar chart */
                      <div className="flex items-end justify-between gap-2 px-1" style={{ height: 80 }}>
                        {[35, 50, 42, 65, 58, 80, 72, 90].map((h, idx) => (
                          <div
                            key={idx}
                            className="flex-1 rounded-t-[3px] bg-[var(--color-accent)] opacity-70"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-accent)]">
                    Stage {item.step}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/system" variant="ghost">
              See the full system
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CASE STUDY BEFORE / AFTER                                   */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-24 pt-20">
        <Reveal className="mb-4 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
            A worked example
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Marlow &amp; Co Electrical
          </h2>
        </Reveal>

        {/* Process strip */}
        <Reveal className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[var(--color-ink-muted)]">
            {["Before", "Problems identified", "Changes made", "Measured"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-4 py-2">
                    {step}
                  </span>
                  {i < 3 && (
                    <span className="text-[var(--color-hairline)]">&rarr;</span>
                  )}
                </div>
              ),
            )}
          </div>
        </Reveal>

        {/* Before / After cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
              {/* Mini browser wireframe */}
              <div className="mb-5 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface-sunken)]">
                <div className="flex items-center gap-1.5 border-b border-[var(--color-hairline)] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#E57373]" />
                  <span className="h-2 w-2 rounded-full bg-[#FFB74D]" />
                  <span className="h-2 w-2 rounded-full bg-[#81C784]" />
                  <span className="ml-2 h-3 flex-1 rounded bg-[var(--color-hairline)]" />
                </div>
                <div className="space-y-2 p-4">
                  <div className="h-3 w-3/4 rounded bg-[var(--color-hairline)]" />
                  <div className="h-3 w-1/2 rounded bg-[var(--color-hairline)]" />
                  <div className="h-16 w-full rounded bg-[var(--color-hairline)] opacity-60" />
                </div>
              </div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-[#E57373]">
                Before
              </div>
              <ul className="flex flex-col gap-2.5">
                {CASE_STUDY_BEFORE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-[1.5] text-[var(--color-ink-muted)]"
                  >
                    <span className="mt-0.5 text-[#E57373]">&times;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
              {/* Mini browser wireframe - improved */}
              <div className="mb-5 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-accent)]/30 bg-[var(--color-surface-sunken)]">
                <div className="flex items-center gap-1.5 border-b border-[var(--color-hairline)] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#E57373]" />
                  <span className="h-2 w-2 rounded-full bg-[#FFB74D]" />
                  <span className="h-2 w-2 rounded-full bg-[#81C784]" />
                  <span className="ml-2 h-3 flex-1 rounded bg-[var(--color-hairline)]" />
                </div>
                <div className="space-y-2 p-4">
                  <div className="h-3 w-3/4 rounded bg-[var(--color-accent)] opacity-60" />
                  <div className="h-3 w-1/2 rounded bg-[var(--color-accent)] opacity-40" />
                  <div className="flex gap-2">
                    <div className="h-8 w-24 rounded-[var(--radius-sm)] bg-[var(--color-accent)] opacity-70" />
                    <div className="h-8 flex-1 rounded-[var(--radius-sm)] bg-[var(--color-hairline)]" />
                  </div>
                </div>
              </div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-[var(--color-accent)]">
                After
              </div>
              <ul className="flex flex-col gap-2.5">
                {CASE_STUDY_AFTER.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-[1.5] text-[var(--color-ink-muted)]"
                  >
                    <span className="mt-0.5 font-bold text-[var(--color-accent)]">
                      &check;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal>
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-6 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] md:grid-cols-4">
            {CASE_STUDY_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-display)] text-2xl font-extrabold">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-8 text-center">
          <Button href="/results" variant="ghost">
            More client results
          </Button>
        </Reveal>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                */}
      {/* ============================================================ */}
      <section className="bg-[var(--color-canvas-deep)] px-6 pb-24 pt-20">
        <div className="mx-auto max-w-[800px]">
          <Reveal className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
              What clients say
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Don&apos;t take our word for it
            </h2>
          </Reveal>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-1)] sm:p-10">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-1">
                    <blockquote className="mb-6 text-[18px] font-medium leading-[1.65] text-[var(--color-ink)]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <div className="text-[15px] font-semibold text-[var(--color-ink)]">
                          {t.name}
                        </div>
                        <div className="text-sm text-[var(--color-ink-muted)]">
                          {t.role}
                        </div>
                      </div>
                      <span className="rounded-[var(--radius-pill)] bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-bold text-[var(--color-accent)]">
                        {t.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <ButtonEl
                variant="ghost"
                onClick={prevTestimonial}
                className="h-10 w-10 !p-0"
                aria-label="Previous testimonial"
              >
                &larr;
              </ButtonEl>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setActiveTestimonial(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === activeTestimonial
                        ? "w-6 bg-[var(--color-primary)]"
                        : "w-2 bg-[var(--color-hairline)] hover:bg-[var(--color-ink-faint)]",
                    )}
                  />
                ))}
              </div>
              <ButtonEl
                variant="ghost"
                onClick={nextTestimonial}
                className="h-10 w-10 !p-0"
                aria-label="Next testimonial"
              >
                &rarr;
              </ButtonEl>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-24 pt-20">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
          {/* Left: accordion */}
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
                    className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left text-[17px] font-semibold text-[var(--color-ink)] transition-colors"
                  >
                    {item.q}
                    <span className="text-[22px] text-[var(--color-ink-muted)]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-[22px] text-base leading-[1.6] text-[var(--color-ink-muted)]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: sidebar */}
          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-1)]">
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-bold">
                Still not sure?
              </h3>
              <p className="mb-5 text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                Get a free 30-minute audit. No pitch, no obligation. We&apos;ll
                give you a straight answer on whether we can help.
              </p>
              <div className="mb-4">
                <Button href="/book" className="w-full text-center">
                  Get your free audit
                </Button>
              </div>
              <div className="text-center text-sm text-[var(--color-ink-muted)]">
                or email{" "}
                <a
                  href="mailto:hello@tandemm.co.uk"
                  className="font-semibold text-[var(--color-ink)] no-underline"
                >
                  hello@tandemm.co.uk
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                   */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-20">
        <Reveal>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] px-8 py-14 text-center text-[var(--color-on-primary)] shadow-[var(--shadow-2)] sm:px-14">
            <h2 className="mx-auto max-w-[560px] font-[family-name:var(--font-display)] text-[clamp(24px,3.2vw,34px)] font-extrabold leading-[1.12] tracking-[-0.02em]">
              Let&apos;s find where your business is losing enquiries
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-base leading-[1.6] text-white/70">
              A free 30-minute call. We&apos;ll look at your site, show you
              what&apos;s leaking, and tell you whether we can help.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/book"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Get your free audit
              </Button>
              <Button href="/results" variant="secondary">
                See real results
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
