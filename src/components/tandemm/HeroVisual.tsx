"use client";

/* ------------------------------------------------------------------ */
/*  Chart geometry                                                    */
/* ------------------------------------------------------------------ */
const BASELINE = [12, 11, 13, 12, 12, 14, 13, 12, 13, 12, 14, 13];
const PROJECTED = [12, 13, 15, 18, 22, 27, 31, 35, 39, 42, 45, 48];

function toPath(values: number[], w: number, h: number, max: number) {
  const stepX = w / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * stepX;
      const y = h - (v / max) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function toArea(values: number[], w: number, h: number, max: number) {
  const line = toPath(values, w, h, max);
  return `${line} L${w.toFixed(1)},${h.toFixed(1)} L0,${h.toFixed(1)} Z`;
}

/* ------------------------------------------------------------------ */
/*  Donut (score ring)                                                */
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
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      className="audit-donut-svg"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--color-hairline-soft)"
        strokeWidth={stroke}
      />
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
/*  Findings — visibility first, then speed, then conversion          */
/* ------------------------------------------------------------------ */
const FINDINGS: {
  severity: "critical" | "warn" | "ok";
  title: string;
  desc: string;
}[] = [
  {
    severity: "critical",
    title: "8 service pages invisible to Google",
    desc: "Missing titles and descriptions — search skips past them.",
  },
  {
    severity: "critical",
    title: "Site takes 4.2s to load on a phone",
    desc: "About 6 in 10 homeowners tap back to Google before the page opens.",
  },
  {
    severity: "warn",
    title: "No enquiry form on the homepage",
    desc: "Visitors have to hunt through the menu to get in touch.",
  },
  {
    severity: "warn",
    title: "Reviews sit at the bottom of every page",
    desc: "Trust signals belong up top, where people decide.",
  },
  {
    severity: "ok",
    title: "Domain and business name are well established",
    desc: "Solid foundation. Worth building on, not replacing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export function HeroVisual() {
  const CHART_W = 560;
  const CHART_H = 90;
  const CHART_MAX = 55;
  const baselinePath = toPath(BASELINE, CHART_W, CHART_H, CHART_MAX);
  const projectedPath = toPath(PROJECTED, CHART_W, CHART_H, CHART_MAX);
  const projectedArea = toArea(PROJECTED, CHART_W, CHART_H, CHART_MAX);

  return (
    <div className="audit-report" aria-label="Sample Growth Audit report">
      {/* Stacked sheets underneath for PDF feel */}
      <div className="audit-sheet-back audit-sheet-back--2" aria-hidden="true" />
      <div className="audit-sheet-back audit-sheet-back--1" aria-hidden="true" />

      <div className="audit-sheet">
        {/* Letterhead */}
        <div className="audit-letterhead">
          <div className="audit-brand">
            <span className="audit-brand-mark" aria-hidden="true" />
            <div>
              <div className="audit-brand-name">Tandemm</div>
              <div className="audit-brand-role">Growth Audit</div>
            </div>
          </div>
        </div>

        <div className="audit-rule" />

        {/* Human-voiced margin note — signals a real person looked */}
        <div className="audit-note">
          <span className="audit-note-mark" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 12 L9 5 L11 7 L4 14 Z M9 5 L10.5 3.5 L12.5 5.5 L11 7 Z"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          </span>
          <span className="audit-note-text">
            Nothing broken. Four quick wins would put the phone back on the ring.
          </span>
        </div>

        {/* Cover row: prepared for + overall score */}
        <div className="audit-cover">
          <div className="audit-cover-info">
            <div className="audit-eyebrow">Prepared for</div>
            <div className="audit-company">Marlow &amp; Co Electrical</div>
            <div className="audit-domain">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                aria-hidden="true"
                fill="none"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="4.5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M1.5 6h9M6 1.5c1.6 1.4 1.6 7.6 0 9M6 1.5c-1.6 1.4-1.6 7.6 0 9"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              marlowelectrical.co.uk
            </div>
            <p className="audit-summary">
              A solid base, but homeowners are landing and leaving before you
              hear from them. Fix the four items below and jobs typically lift
              three to four times inside 90 days.
            </p>
          </div>

          <div className="audit-overall">
            <div className="audit-overall-ring">
              <Donut size={112} stroke={9} score={62} tone="warn" />
              <div className="audit-overall-value">
                <span className="audit-overall-num">62</span>
                <span className="audit-overall-den">/ 100</span>
              </div>
            </div>
            <div className="audit-overall-tag">Growth score</div>
            <div className="audit-overall-checks">
              Scored across 80 checks in 8 categories
            </div>
          </div>
        </div>

        {/* Findings */}
        <div className="audit-block">
          <div className="audit-block-head">
            <div className="audit-block-num">01</div>
            <div>
              <div className="audit-block-title">
                Where you&rsquo;re losing work
              </div>
              <div className="audit-block-sub">
                Ranked by impact on jobs. Plain English, no jargon.
              </div>
            </div>
          </div>

          <ul className="audit-findings">
            {FINDINGS.map((f) => (
              <li key={f.title} className={`audit-finding audit-finding--${f.severity}`}>
                <span className="audit-finding-dot" aria-hidden="true">
                  {f.severity === "critical" ? "!" : f.severity === "warn" ? "•" : "✓"}
                </span>
                <div className="audit-finding-body">
                  <div className="audit-finding-title">{f.title}</div>
                  <div className="audit-finding-desc">{f.desc}</div>
                </div>
                <span className="audit-finding-chevron" aria-hidden="true">
                  ›
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projection chart */}
        <div className="audit-block audit-block--chart">
          <div className="audit-block-head">
            <div className="audit-block-num">02</div>
            <div>
              <div className="audit-block-title">
                What happens after we fix this
              </div>
              <div className="audit-block-sub">
                Based on 40+ trade sites. Jobs per month, 12 weeks after
                launch.
              </div>
            </div>
          </div>

          <div className="audit-chart">
            <div className="audit-chart-legend">
              <span className="audit-chart-key audit-chart-key--now">
                <span /> Now · 12 / mo
              </span>
              <span className="audit-chart-key audit-chart-key--proj">
                <span /> Projected · 48 / mo
              </span>
            </div>
            <svg
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              preserveAspectRatio="none"
              className="audit-chart-svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="auditProjFill" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0.32"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              {/* Grid */}
              {[0.25, 0.5, 0.75].map((f) => (
                <line
                  key={f}
                  x1="0"
                  x2={CHART_W}
                  y1={CHART_H * f}
                  y2={CHART_H * f}
                  stroke="var(--color-hairline-soft)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />
              ))}

              {/* Projected area + line */}
              <path d={projectedArea} fill="url(#auditProjFill)" />
              <path
                d={projectedPath}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Baseline */}
              <path
                d={baselinePath}
                fill="none"
                stroke="var(--color-ink-muted)"
                strokeWidth="1.4"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
            </svg>
            <div className="audit-chart-axis">
              <span>Wk 1</span>
              <span>Wk 4</span>
              <span>Wk 8</span>
              <span>Wk 12</span>
            </div>
          </div>
        </div>

        {/* Foot */}
        <div className="audit-foot">
          <span>Page 1 of 8</span>
          <span className="audit-foot-mid">
            Continues: speed report, page-by-page SEO, mobile checks,
            conversion path
          </span>
          <span>Prepared by Tandemm</span>
        </div>
      </div>
    </div>
  );
}
