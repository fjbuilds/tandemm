/* High-fidelity fabricated UI mockups.
 * Nothing here is a real customer or a real number — they read as
 * realistic so the story lands, but they are illustrative, not evidence.
 */

/* ─────────────────────────────────────────────────────────────
   1. Google local pack — Maps search result on a laptop
   ───────────────────────────────────────────────────────────── */

const LISTINGS = [
  {
    rank: 1,
    name: "Halton Heating Co.",
    tag: "You",
    rating: 4.9,
    reviews: 217,
    kind: "Heating engineer",
    area: "Battersea · Open now",
    hours: "Closes 8pm",
    phone: "020 3856 2211",
    website: "haltonheating.co.uk",
    highlight: "Corgi registered · 24hr callouts",
  },
  {
    rank: 2,
    name: "Southside Boilers",
    rating: 4.7,
    reviews: 84,
    kind: "Boiler installer",
    area: "Clapham · Open now",
    hours: "Closes 6pm",
    website: "southsideboilers.com",
    highlight: "Worcester accredited",
  },
  {
    rank: 3,
    name: "River Plumbing",
    rating: 4.6,
    reviews: 42,
    kind: "Plumber",
    area: "Wandsworth",
    hours: "Opens Tue 8am",
    website: "riverplumbing.co.uk",
    highlight: "Family run since 2011",
  },
];

export function GoogleLocalPack() {
  return (
    <div className="google-pack" role="img" aria-label="Illustrative Google local search result">
      <div className="google-pack-top">
        <div className="google-pack-logo">
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </div>
        <div className="google-pack-search">
          <span className="google-pack-search-q">boiler repair sw11</span>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="#5F6368" strokeWidth="2" fill="none" />
            <path d="M21 21l-4.3-4.3" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="google-pack-account" />
      </div>

      <div className="google-pack-tabs">
        <span className="is-active">All</span>
        <span>Maps</span>
        <span>Images</span>
        <span>News</span>
        <span>Shopping</span>
        <span>Videos</span>
      </div>

      <div className="google-pack-body">
        <div className="google-pack-listings">
          <div className="google-pack-listing-head">
            Places <span>· Battersea, London</span>
          </div>
          {LISTINGS.map((l) => (
            <div
              key={l.rank}
              className={`google-pack-listing ${l.tag === "You" ? "is-you" : ""}`}
            >
              <div className="google-pack-listing-rank">{l.rank}</div>
              <div className="google-pack-listing-body">
                <div className="google-pack-listing-name">
                  {l.name}
                  {l.tag ? <span className="google-pack-listing-tag">{l.tag}</span> : null}
                </div>
                <div className="google-pack-listing-rating">
                  <span className="google-pack-listing-stars">
                    {"★★★★★".slice(0, Math.round(l.rating))}
                    <span className="google-pack-listing-stars-off">
                      {"★★★★★".slice(0, 5 - Math.round(l.rating))}
                    </span>
                  </span>
                  <span className="google-pack-listing-rating-num">
                    {l.rating.toFixed(1)}
                  </span>
                  <span className="google-pack-listing-reviews">({l.reviews})</span>
                  <span className="google-pack-listing-dot" />
                  <span>{l.kind}</span>
                </div>
                <div className="google-pack-listing-meta">
                  {l.area} <span className="google-pack-listing-dot" /> {l.hours}
                </div>
                <div className="google-pack-listing-highlight">{l.highlight}</div>
                <div className="google-pack-listing-actions">
                  <button type="button" className="google-pack-listing-btn is-primary">Call</button>
                  <button type="button" className="google-pack-listing-btn">Directions</button>
                  <button type="button" className="google-pack-listing-btn">Website</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="google-pack-map" aria-hidden="true">
          <div className="google-pack-map-bg" />
          <div className="google-pack-map-road google-pack-map-road--a" />
          <div className="google-pack-map-road google-pack-map-road--b" />
          <div className="google-pack-map-road google-pack-map-road--c" />
          <div className="google-pack-map-park" />
          <div className="google-pack-map-water" />
          <div className="google-pack-map-pin google-pack-map-pin--1">1</div>
          <div className="google-pack-map-pin google-pack-map-pin--2">2</div>
          <div className="google-pack-map-pin google-pack-map-pin--3">3</div>
          <div className="google-pack-map-controls">
            <span>+</span>
            <span>−</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. Trades website preview — a plausible "Halton Heating" site
   ───────────────────────────────────────────────────────────── */

export function TradesSite() {
  return (
    <div className="trades-site" role="img" aria-label="Illustrative rebuilt trades website">
      <div className="trades-site-bar">
        <span className="trades-site-bar-dot" />
        <span className="trades-site-bar-dot" />
        <span className="trades-site-bar-dot" />
        <div className="trades-site-bar-url">
          <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
            <path d="M4 5V4a2 2 0 0 1 4 0v1M3 5h6v5H3z" stroke="#5F6368" strokeWidth="1" fill="none" />
          </svg>
          haltonheating.co.uk
        </div>
      </div>

      <div className="trades-site-body">
        <div className="trades-site-nav">
          <div className="trades-site-brand">
            <span className="trades-site-brand-mark" />
            <span className="trades-site-brand-name">Halton Heating</span>
          </div>
          <div className="trades-site-nav-links">
            <span>Services</span>
            <span>Areas</span>
            <span>Reviews</span>
            <span>About</span>
          </div>
          <a className="trades-site-cta">020 3856 2211</a>
        </div>

        <div className="trades-site-hero">
          <div className="trades-site-hero-copy">
            <span className="trades-site-hero-eyebrow">Battersea · Clapham · Wandsworth</span>
            <h3 className="trades-site-hero-title">
              Boiler back on today,<br />or the callout is free.
            </h3>
            <p className="trades-site-hero-sub">
              Gas Safe engineers on the road across South West London. Same-day
              cover for breakdowns, no-mess installs on the diary.
            </p>
            <div className="trades-site-hero-cta">
              <span className="trades-site-hero-btn is-primary">Get a quote</span>
              <span className="trades-site-hero-btn">Call now</span>
            </div>
            <div className="trades-site-hero-badges">
              <span>★ 4.9 · 217 reviews</span>
              <span>Gas Safe 587412</span>
              <span>Worcester accredited</span>
            </div>
          </div>
          <div className="trades-site-hero-photo">
            <div className="trades-site-hero-photo-inner">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <linearGradient id="ts-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#4a6b86" />
                    <stop offset="1" stopColor="#2f4a63" />
                  </linearGradient>
                </defs>
                <rect width="200" height="200" fill="url(#ts-sky)" />
                <rect x="40" y="60" width="120" height="120" rx="4" fill="#e9e1cd" />
                <rect x="55" y="80" width="30" height="30" fill="#3b5064" />
                <rect x="115" y="80" width="30" height="30" fill="#3b5064" />
                <rect x="80" y="120" width="40" height="60" fill="#7b3a1a" />
                <circle cx="110" cy="150" r="2" fill="#e9e1cd" />
                <rect x="0" y="180" width="200" height="20" fill="#3b6d3b" />
              </svg>
            </div>
          </div>
        </div>

        <div className="trades-site-services">
          {["Boiler repair", "Boiler install", "Powerflush", "Bathroom fit"].map((s) => (
            <div key={s} className="trades-site-service">
              <span className="trades-site-service-icon" />
              <span>{s}</span>
              <span className="trades-site-service-arrow">→</span>
            </div>
          ))}
        </div>

        <div className="trades-site-widget">
          <div className="trades-site-widget-title">
            <span className="trades-site-widget-dot" />
            Chat to Halton
          </div>
          <div className="trades-site-widget-sub">Real reply in under an hour</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. BaseApp — a phone with realistic Tandemm Base app UI
   ───────────────────────────────────────────────────────────── */

const LEADS = [
  { name: "Sarah Whitmore", src: "Widget", job: "Boiler swap, SW11", time: "2m", tone: "hot" as const, val: "£2,400" },
  { name: "Michael Ojo", src: "Missed call", job: "Radiator leak, SW4", time: "14m", tone: "warm" as const, val: "£380" },
  { name: "Priya Shah", src: "WhatsApp", job: "Full bathroom, SW18", time: "1h", tone: "hot" as const, val: "£6,800" },
  { name: "David Reid", src: "Google Ads", job: "Powerflush, SW12", time: "3h", tone: "cool" as const, val: "£420" },
];

export function BaseApp({ variant = "inbox" }: { variant?: "inbox" | "lead" }) {
  return (
    <div className="base-app" role="img" aria-label="Illustrative Tandemm Base app on a phone">
      <div className="base-app-frame">
        <div className="base-app-notch" />
        <div className="base-app-screen">
          {variant === "inbox" ? <BaseInbox /> : <BaseLead />}
        </div>
        <div className="base-app-home" />
      </div>
    </div>
  );
}

function BaseInbox() {
  return (
    <>
      <div className="base-app-status">
        <span>9:41</span>
        <span className="base-app-status-icons">
          <span className="base-app-signal" />
          <span className="base-app-wifi" />
          <span className="base-app-battery" />
        </span>
      </div>
      <div className="base-app-topbar">
        <div>
          <div className="base-app-hello">Morning, Alex</div>
          <div className="base-app-today">4 new enquiries · 2 quotes out</div>
        </div>
        <div className="base-app-avatar">AH</div>
      </div>
      <div className="base-app-summary">
        <div>
          <div className="base-app-summary-num">£9,320</div>
          <div className="base-app-summary-label">Quoted this week</div>
        </div>
        <div className="base-app-summary-sep" />
        <div>
          <div className="base-app-summary-num">£4,180</div>
          <div className="base-app-summary-label">Won so far</div>
        </div>
      </div>
      <div className="base-app-section-title">
        Today&rsquo;s enquiries
        <span className="base-app-section-tag">Live</span>
      </div>
      <div className="base-app-leads">
        {LEADS.map((l, i) => (
          <div key={i} className="base-app-lead">
            <span className={`base-app-lead-dot base-app-lead-dot--${l.tone}`} />
            <div className="base-app-lead-body">
              <div className="base-app-lead-name">{l.name}</div>
              <div className="base-app-lead-job">{l.job}</div>
              <div className="base-app-lead-meta">
                via {l.src} · {l.time} ago
              </div>
            </div>
            <div className="base-app-lead-val">{l.val}</div>
          </div>
        ))}
      </div>
      <div className="base-app-fab">
        <span>+</span> Add job
      </div>
      <div className="base-app-tabbar">
        <span className="is-active">Inbox</span>
        <span>Diary</span>
        <span>Quotes</span>
        <span>Duo</span>
      </div>
    </>
  );
}

function BaseLead() {
  return (
    <>
      <div className="base-app-status">
        <span>9:41</span>
        <span className="base-app-status-icons">
          <span className="base-app-signal" />
          <span className="base-app-wifi" />
          <span className="base-app-battery" />
        </span>
      </div>
      <div className="base-app-lead-head">
        <span className="base-app-lead-back">←</span>
        <span>Sarah Whitmore</span>
        <span className="base-app-lead-actions">···</span>
      </div>
      <div className="base-app-lead-card">
        <div className="base-app-lead-card-tag">Widget · 2 min ago</div>
        <div className="base-app-lead-card-title">Boiler swap · SW11 4EG</div>
        <div className="base-app-lead-card-quote">
          &ldquo;Boiler completely dead this morning. Two kids, hot water urgent.
          Free from Thursday if you can quote today.&rdquo;
        </div>
        <div className="base-app-lead-card-actions">
          <span className="base-app-lead-card-btn is-primary">Send quote</span>
          <span className="base-app-lead-card-btn">Call Sarah</span>
        </div>
      </div>
      <div className="base-app-quote">
        <div className="base-app-quote-head">
          <span>Quote #Q-2418</span>
          <span className="base-app-quote-total">£2,400</span>
        </div>
        <div className="base-app-quote-row">
          <span>Worcester 30i · supply &amp; fit</span>
          <span>£1,850</span>
        </div>
        <div className="base-app-quote-row">
          <span>Powerflush</span>
          <span>£380</span>
        </div>
        <div className="base-app-quote-row">
          <span>Magnetic filter</span>
          <span>£170</span>
        </div>
      </div>
      <div className="base-app-tabbar">
        <span className="is-active">Inbox</span>
        <span>Diary</span>
        <span>Quotes</span>
        <span>Duo</span>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. GrowthReport — real-feeling monthly report card
   ───────────────────────────────────────────────────────────── */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BASELINE = [18, 20, 22, 21, 24, 26, 25, 27, 28, 30, 29, 31];
const WITH_TANDEMM = [18, 21, 26, 33, 41, 50, 58, 66, 75, 84, 92, 99];

function toPath(values: number[], w: number, h: number, max: number) {
  const step = w / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * step;
      const y = h - (v / max) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}
function toArea(values: number[], w: number, h: number, max: number) {
  return `${toPath(values, w, h, max)} L${w},${h} L0,${h} Z`;
}

export function GrowthReport() {
  const W = 640;
  const H = 220;
  const MAX = 110;
  const baseline = toPath(BASELINE, W, H, MAX);
  const line = toPath(WITH_TANDEMM, W, H, MAX);
  const area = toArea(WITH_TANDEMM, W, H, MAX);

  return (
    <div className="growth-report" role="img" aria-label="Illustrative monthly report">
      <div className="growth-report-head">
        <div>
          <div className="growth-report-tag">Monthly report · Halton Heating</div>
          <div className="growth-report-title">Booked jobs, 12 months in Tandemm</div>
        </div>
        <div className="growth-report-delta">
          <span className="growth-report-delta-num">+218%</span>
          <span className="growth-report-delta-label">vs pre-Tandemm baseline</span>
        </div>
      </div>

      <div className="growth-report-legend">
        <span><span className="growth-report-swatch growth-report-swatch--now" /> Baseline · before Tandemm</span>
        <span><span className="growth-report-swatch growth-report-swatch--proj" /> With Tandemm Local + Base</span>
      </div>

      <div className="growth-report-chart">
        <svg viewBox={`0 0 ${W} ${H + 22}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="gr-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.32" />
              <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              x1="0"
              x2={W}
              y1={H * f}
              y2={H * f}
              stroke="var(--color-hairline-soft)"
              strokeDasharray="3 5"
              strokeWidth="1"
            />
          ))}
          <path d={area} fill="url(#gr-area)" />
          <path d={line} fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={baseline} fill="none" stroke="var(--color-ink-muted)" strokeWidth="1.4" strokeDasharray="5 5" />
          {WITH_TANDEMM.map((v, i) => {
            const x = (W / 11) * i;
            const y = H - (v / MAX) * H;
            if (i !== 11) return null;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="5" fill="var(--color-accent)" />
                <circle cx={x} cy={y} r="10" fill="var(--color-accent)" opacity="0.2" />
              </g>
            );
          })}
        </svg>
        <div className="growth-report-axis">
          {MONTHS.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      <div className="growth-report-kpis">
        <div className="growth-report-kpi">
          <div className="growth-report-kpi-num">99</div>
          <div className="growth-report-kpi-label">Booked jobs · this month</div>
          <div className="growth-report-kpi-delta">▲ 12 vs last month</div>
        </div>
        <div className="growth-report-kpi">
          <div className="growth-report-kpi-num">£41</div>
          <div className="growth-report-kpi-label">Cost per booked job</div>
          <div className="growth-report-kpi-delta">▼ £14 vs Jan</div>
        </div>
        <div className="growth-report-kpi">
          <div className="growth-report-kpi-num">Top&nbsp;3</div>
          <div className="growth-report-kpi-label">Map pack, 11 of 14 postcodes</div>
          <div className="growth-report-kpi-delta">▲ 7 postcodes vs Jan</div>
        </div>
      </div>
    </div>
  );
}
