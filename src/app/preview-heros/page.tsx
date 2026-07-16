"use client";

import { CSSProperties } from "react";
import { HeroVisual } from "@/components/tandemm/HeroVisual";

/* ------------------------------------------------------------------ */
/*  Shared donut                                                      */
/* ------------------------------------------------------------------ */
function Donut({
  size,
  stroke,
  score,
  tone,
}: {
  size: number;
  stroke: number;
  score: number;
  tone: "success" | "warn" | "danger" | "primary";
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const toneVar =
    tone === "success"
      ? "var(--color-success)"
      : tone === "danger"
      ? "var(--color-danger)"
      : tone === "warn"
      ? "var(--color-accent)"
      : "var(--color-primary)";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-hairline-soft)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={toneVar}
        strokeWidth={stroke}
        strokeDasharray={`${(c * pct).toFixed(2)} ${c.toFixed(2)}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  A · Growth Cockpit (live-looking client dashboard)                */
/* ------------------------------------------------------------------ */
const COCKPIT_TREND = [18, 22, 24, 28, 34, 38, 42, 47];

function HeroCockpit() {
  const w = 560;
  const h = 60;
  const max = 55;
  const stepX = w / (COCKPIT_TREND.length - 1);
  const line = COCKPIT_TREND.map((v, i) => {
    const x = i * stepX;
    const y = h - (v / max) * h;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <div className="alt alt--cockpit">
      <div className="alt-head">
        <div className="alt-head-left">
          <div className="alt-brand">
            <span className="alt-brand-mark" aria-hidden="true" />
            <div>
              <div className="alt-brand-name">Marlow &amp; Co Electrical</div>
              <div className="alt-brand-sub">Growth cockpit · This month</div>
            </div>
          </div>
        </div>
        <div className="alt-live">
          <span />
          Live
        </div>
      </div>

      <div className="alt-hero-metric">
        <div>
          <div className="alt-metric-label">Enquiries this month</div>
          <div className="alt-metric-value">
            47 <span className="alt-metric-delta">▲ 312%</span>
          </div>
          <div className="alt-metric-sub">vs. this time last quarter · target 40</div>
        </div>
        <div className="alt-mini-donut">
          <Donut size={72} stroke={7} score={117} tone="success" />
          <div className="alt-mini-donut-val">
            <span>117%</span>
            <span>of target</span>
          </div>
        </div>
      </div>

      <div className="alt-tiles">
        <div className="alt-tile">
          <div className="alt-tile-lbl">Jobs booked</div>
          <div className="alt-tile-val">31</div>
          <div className="alt-tile-delta alt-tile-delta--up">+12 vs Oct</div>
        </div>
        <div className="alt-tile">
          <div className="alt-tile-lbl">Attributed £</div>
          <div className="alt-tile-val">£42.8k</div>
          <div className="alt-tile-delta alt-tile-delta--up">+£11.4k</div>
        </div>
        <div className="alt-tile">
          <div className="alt-tile-lbl">Conversion</div>
          <div className="alt-tile-val">4.6×</div>
          <div className="alt-tile-delta alt-tile-delta--up">from 0.8%</div>
        </div>
      </div>

      <div className="alt-chart">
        <div className="alt-chart-head">
          <div>
            <div className="alt-chart-title">Enquiries , last 8 weeks</div>
            <div className="alt-chart-sub">Tandemm, week after week</div>
          </div>
          <div className="alt-chart-tag">▲ 4× baseline</div>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="alt-chart-svg">
          <defs>
            <linearGradient id="cockpitFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#cockpitFill)" />
          <path d={line} fill="none" stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="alt-workline">
        <div className="alt-workline-head">Tandemm , working on this week</div>
        <ul>
          <li>
            <span className="alt-work-dot alt-work-dot--doing" />
            <span className="alt-work-title">Publishing Croydon boiler service page</span>
            <span className="alt-work-when">Wed</span>
          </li>
          <li>
            <span className="alt-work-dot alt-work-dot--test" />
            <span className="alt-work-title">A/B testing new homepage hero + CTA</span>
            <span className="alt-work-when">Live</span>
          </li>
          <li>
            <span className="alt-work-dot alt-work-dot--done" />
            <span className="alt-work-title">Fixed schema on 12 pages → indexed</span>
            <span className="alt-work-when">Done</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  B · Phone with enquiries stacking in                              */
/* ------------------------------------------------------------------ */
type Notif = {
  channel: "whatsapp" | "call" | "email" | "site";
  who: string;
  msg: string;
  time: string;
};

const NOTIFS: Notif[] = [
  {
    channel: "whatsapp",
    who: "Sarah T.",
    msg: "Hi, can you come out and look at our fuse box tomorrow?",
    time: "just now",
  },
  {
    channel: "call",
    who: "Missed call · 07923 449 812",
    msg: "Voicemail: 32s , new build wiring quote",
    time: "2m ago",
  },
  {
    channel: "site",
    who: "Website , new enquiry",
    msg: "Chris G. booked a callback for Thu 10am",
    time: "8m ago",
  },
  {
    channel: "email",
    who: "hello@marlowelectrical.co.uk",
    msg: "Quote request: EV charger install, Wandsworth",
    time: "23m ago",
  },
];

function channelIcon(c: Notif["channel"]) {
  switch (c) {
    case "whatsapp":
      return "💬";
    case "call":
      return "📞";
    case "email":
      return "✉";
    case "site":
      return "🌐";
  }
}

function HeroPhone() {
  return (
    <div className="alt alt--phone">
      <div className="alt-phone-shell">
        <div className="alt-phone-notch" aria-hidden="true" />
        <div className="alt-phone-screen">
          <div className="alt-phone-status">
            <span>9:41</span>
            <span className="alt-phone-status-right">
              <span className="alt-phone-signal" />
              <span className="alt-phone-battery" />
            </span>
          </div>

          <div className="alt-phone-head">
            <div className="alt-phone-head-title">Today · enquiries</div>
            <div className="alt-phone-head-count">
              <span>12</span> new
            </div>
          </div>

          <ul className="alt-phone-notifs">
            {NOTIFS.map((n) => (
              <li key={n.who} className={`alt-notif alt-notif--${n.channel}`}>
                <span className="alt-notif-icon">{channelIcon(n.channel)}</span>
                <div className="alt-notif-body">
                  <div className="alt-notif-top">
                    <span className="alt-notif-who">{n.who}</span>
                    <span className="alt-notif-time">{n.time}</span>
                  </div>
                  <div className="alt-notif-msg">{n.msg}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="alt-phone-strap">
            <div className="alt-phone-strap-row">
              <span>This week</span>
              <b>47 enquiries</b>
            </div>
            <div className="alt-phone-strap-row alt-phone-strap-row--muted">
              <span>Same week last quarter</span>
              <b>11</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  C · Hybrid stack , monthly report + audit peek + enquiries feed   */
/* ------------------------------------------------------------------ */
function HeroStack() {
  return (
    <div className="alt alt--stack">
      {/* Back-left: audit peek */}
      <div className="alt-stack-card alt-stack-card--audit">
        <div className="alt-stack-eyebrow">Growth audit</div>
        <div className="alt-stack-h">Marlow &amp; Co</div>
        <div className="alt-stack-audit-row">
          <div className="alt-stack-donut">
            <Donut size={44} stroke={5} score={62} tone="warn" />
            <div className="alt-stack-donut-val">62</div>
          </div>
          <div>
            <div className="alt-stack-tiny">Growth score</div>
            <div className="alt-stack-tiny alt-stack-tiny--dim">24 issues found</div>
          </div>
        </div>
      </div>

      {/* Back-right: live feed peek */}
      <div className="alt-stack-card alt-stack-card--feed">
        <div className="alt-stack-eyebrow alt-stack-eyebrow--live">
          <span /> Live enquiries
        </div>
        <ul className="alt-stack-feed">
          <li>
            <span>💬</span> Sarah T. , fuse box
          </li>
          <li>
            <span>📞</span> Missed · 07923…
          </li>
          <li>
            <span>🌐</span> Chris G. , callback
          </li>
          <li>
            <span>✉</span> EV charger quote
          </li>
        </ul>
        <div className="alt-stack-feed-count">
          <b>12</b> today
        </div>
      </div>

      {/* Front: monthly report */}
      <div className="alt-stack-card alt-stack-card--front">
        <div className="alt-stack-front-head">
          <div>
            <div className="alt-stack-eyebrow">November report</div>
            <div className="alt-stack-front-title">
              47 enquiries. £42.8k booked.
            </div>
            <div className="alt-stack-front-sub">
              3× last quarter · Tandemm week after week
            </div>
          </div>
          <div className="alt-stack-front-badge">
            <Donut size={64} stroke={7} score={117} tone="success" />
            <div className="alt-stack-front-badge-val">
              <span>117%</span>
              <span>of target</span>
            </div>
          </div>
        </div>

        <div className="alt-stack-front-tiles">
          <div>
            <div className="alt-stack-tile-lbl">Jobs booked</div>
            <div className="alt-stack-tile-val">31</div>
          </div>
          <div>
            <div className="alt-stack-tile-lbl">Revenue</div>
            <div className="alt-stack-tile-val">£42.8k</div>
          </div>
          <div>
            <div className="alt-stack-tile-lbl">Conversion</div>
            <div className="alt-stack-tile-val">4.6×</div>
          </div>
        </div>

        <div className="alt-stack-front-foot">
          Tandemm shipped: Croydon page · EV landing · schema fix (12 pages)
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

export default function PreviewHerosPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)] pb-32"
      style={paletteOverride}
    >
      <div className="mx-auto max-w-[820px] px-6 pt-16 pb-10">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight">
          Hero visual , options
        </h1>
        <p className="mt-3 text-[var(--color-ink-muted)]">
          Same left-hand copy across all four so you can compare the visual on
          the right. Nothing here is wired into the live homepage yet.
        </p>
      </div>

      <PreviewSlot label="0 · Current , Growth Audit PDF">
        <HeroVisual />
      </PreviewSlot>

      <PreviewSlot label="A · Growth Cockpit , live client dashboard">
        <HeroCockpit />
      </PreviewSlot>

      <PreviewSlot label="B · Phone , enquiries buzzing in">
        <HeroPhone />
      </PreviewSlot>

      <PreviewSlot label="C · Hybrid stack , report + audit + feed">
        <HeroStack />
      </PreviewSlot>
    </div>
  );
}

function PreviewSlot({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="preview-slot">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="preview-slot-label">{label}</div>
        <div className="preview-slot-grid">
          <div className="preview-slot-copy">
            <h2 className="preview-slot-title">
              You&rsquo;re good
              <br />
              at the job.
            </h2>
            <p className="preview-slot-sub">
              We make sure the right people{" "}
              <span className="preview-slot-em">see</span> it.
            </p>
            <p className="preview-slot-desc">
              More than ads. More than marketing. A Tandemm stream of work,
              month after month.
            </p>
          </div>
          <div className="preview-slot-visual">
            <div className="hero-glass">
              <div className="hero-glass-highlight" aria-hidden="true" />
              {children}
              <div className="hero-glass-fade" aria-hidden="true" />
              <div className="hero-glass-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
