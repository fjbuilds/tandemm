/* High-fidelity fabricated UI mockups.
 * Realistic to make the story land — not real customer data, not real
 * ranking claims. Names, numbers and screenshots are illustrative.
 */

/* ─────────────────────────────────────────────────────────────
   1. Google local pack — neutral map pack, no self-positioning
   ───────────────────────────────────────────────────────────── */

const LISTINGS = [
  {
    rank: 1,
    name: "South West Heating Co.",
    rating: 4.9,
    reviews: 217,
    kind: "Heating engineer",
    area: "Battersea · Open now",
    hours: "Closes 8pm",
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
    highlight: "Worcester accredited",
  },
  {
    rank: 3,
    name: "River Plumbing",
    rating: 4.6,
    reviews: 42,
    kind: "Plumber",
    area: "Wandsworth · Closed",
    hours: "Opens Tue 8am",
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
          <span className="google-pack-search-q">boiler repair near me</span>
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
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
      </div>

      <div className="google-pack-body">
        <div className="google-pack-listings">
          <div className="google-pack-listing-head">
            Places <span>· near Battersea, London</span>
          </div>
          {LISTINGS.map((l) => (
            <div key={l.rank} className="google-pack-listing">
              <div className="google-pack-listing-body">
                <div className="google-pack-listing-name">{l.name}</div>
                <div className="google-pack-listing-rating">
                  <span className="google-pack-listing-rating-num">{l.rating.toFixed(1)}</span>
                  <span className="google-pack-listing-stars">
                    {"★★★★★".slice(0, Math.round(l.rating))}
                    <span className="google-pack-listing-stars-off">
                      {"★★★★★".slice(0, 5 - Math.round(l.rating))}
                    </span>
                  </span>
                  <span className="google-pack-listing-reviews">({l.reviews})</span>
                  <span className="google-pack-listing-dot" />
                  <span>{l.kind}</span>
                </div>
                <div className="google-pack-listing-meta">
                  {l.area} <span className="google-pack-listing-dot" /> {l.hours}
                </div>
                <div className="google-pack-listing-highlight">{l.highlight}</div>
              </div>
              <div className={`google-pack-listing-pin google-pack-listing-pin--${l.rank}`}>
                {l.rank}
              </div>
            </div>
          ))}
          <div className="google-pack-listings-more">More places →</div>
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
   2. Trades website preview (single, used as illustrative screenshot)
   ───────────────────────────────────────────────────────────── */

export function TradesSite() {
  return (
    <div className="trades-site" role="img" aria-label="Illustrative rebuilt trades website">
      <div className="trades-site-bar">
        <span className="trades-site-bar-dot" />
        <span className="trades-site-bar-dot" />
        <span className="trades-site-bar-dot" />
        <div className="trades-site-bar-url">southwestheating.co.uk</div>
      </div>

      <div className="trades-site-body">
        <div className="trades-site-nav">
          <div className="trades-site-brand">
            <span className="trades-site-brand-mark" />
            <span className="trades-site-brand-name">South West Heating</span>
          </div>
          <div className="trades-site-nav-links">
            <span>Services</span>
            <span>Areas</span>
            <span>Reviews</span>
            <span>About</span>
          </div>
          <span className="trades-site-cta">020 3856 2211</span>
        </div>

        <div className="trades-site-hero">
          <div className="trades-site-hero-copy">
            <span className="trades-site-hero-eyebrow">Battersea · Clapham · Wandsworth</span>
            <h3 className="trades-site-hero-title">
              Boiler back on today,<br />or the callout is free.
            </h3>
            <p className="trades-site-hero-sub">
              Gas Safe engineers across South West London. Same-day cover
              for breakdowns, no-mess installs on the diary.
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
          <div className="trades-site-hero-photo" />
        </div>

        <div className="trades-site-services">
          {["Boiler repair", "Boiler install", "Powerflush", "Bathroom fit"].map((s) => (
            <div key={s} className="trades-site-service">
              <span className="trades-site-service-icon" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. Site showcase — horizontal row of varied trades sites
   ───────────────────────────────────────────────────────────── */

type Showcase = {
  name: string;
  trade: string;
  palette: [string, string];
  accent: string;
  headline: string;
};

const SHOWCASE: Showcase[] = [
  {
    name: "South West Heating",
    trade: "Heating engineer",
    palette: ["#1B384C", "#2E5069"],
    accent: "#C1662C",
    headline: "Boiler back on today",
  },
  {
    name: "Greenpath Electrics",
    trade: "Electrical contractor",
    palette: ["#1F3A2C", "#2F5541"],
    accent: "#7CB342",
    headline: "Rewires done right",
  },
  {
    name: "Correct Plumbing",
    trade: "Plumbing & bathrooms",
    palette: ["#0F3F5F", "#1A5A80"],
    accent: "#22B8CF",
    headline: "The plumber your neighbours use",
  },
  {
    name: "Elm Kitchens",
    trade: "Kitchen fitter",
    palette: ["#3A2E22", "#5A4632"],
    accent: "#D4A24C",
    headline: "Handmade kitchens, fitted in a week",
  },
  {
    name: "Peak Roofing",
    trade: "Roofer",
    palette: ["#2A2A32", "#43434F"],
    accent: "#E24E4E",
    headline: "Watertight or we&rsquo;re back",
  },
];

export function SiteShowcase() {
  return (
    <div className="site-showcase">
      <div className="site-showcase-track">
        {SHOWCASE.map((s) => (
          <figure key={s.name} className="site-showcase-item">
            <div
              className="site-showcase-thumb"
              style={{
                background: `linear-gradient(135deg, ${s.palette[0]}, ${s.palette[1]})`,
              }}
            >
              <div className="site-showcase-thumb-bar">
                <span /> <span /> <span />
              </div>
              <div className="site-showcase-thumb-body">
                <div className="site-showcase-thumb-nav">
                  <span
                    className="site-showcase-thumb-mark"
                    style={{ background: s.accent }}
                  />
                  <span className="site-showcase-thumb-title">{s.name}</span>
                </div>
                <div
                  className="site-showcase-thumb-headline"
                  dangerouslySetInnerHTML={{ __html: s.headline }}
                />
                <div
                  className="site-showcase-thumb-btn"
                  style={{ background: s.accent }}
                >
                  Get a quote
                </div>
                <div className="site-showcase-thumb-badges">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <figcaption className="site-showcase-caption">
              <div className="site-showcase-name">{s.name}</div>
              <div className="site-showcase-trade">{s.trade}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. BaseApp — phone with realistic Tandemm Base UI
   ───────────────────────────────────────────────────────────── */

const LEADS = [
  { name: "Sarah W.", src: "Widget", job: "Boiler swap, SW11", time: "2m", tone: "hot" as const, val: "£2,400" },
  { name: "Michael O.", src: "Missed call", job: "Radiator leak, SW4", time: "14m", tone: "warm" as const, val: "£380" },
  { name: "Priya S.", src: "WhatsApp", job: "Full bathroom, SW18", time: "1h", tone: "hot" as const, val: "£6,800" },
  { name: "David R.", src: "Google", job: "Powerflush, SW12", time: "3h", tone: "cool" as const, val: "£420" },
];

export function BaseApp({ variant = "inbox" }: { variant?: "inbox" | "day" }) {
  return (
    <div className="base-app" role="img" aria-label="Illustrative Tandemm Base app on a phone">
      <div className="base-app-frame">
        <div className="base-app-notch" />
        <div className="base-app-screen">
          {variant === "inbox" ? <BaseInbox /> : <BaseDay />}
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
          <div className="base-app-today">4 new · 2 quotes out</div>
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
      <div className="base-app-tabbar">
        <span className="is-active">Inbox</span>
        <span>Diary</span>
        <span>Quotes</span>
        <span>Duo</span>
      </div>
    </>
  );
}

function BaseDay() {
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
          <div className="base-app-hello">Today</div>
          <div className="base-app-today">3 jobs · 24 mi driving</div>
        </div>
        <div className="base-app-avatar">AH</div>
      </div>
      <div className="base-day-map">
        <div className="base-day-map-bg" />
        <div className="base-day-map-route" />
        <div className="base-day-map-pin base-day-map-pin--1">1</div>
        <div className="base-day-map-pin base-day-map-pin--2">2</div>
        <div className="base-day-map-pin base-day-map-pin--3">3</div>
      </div>
      <div className="base-day-list">
        <div className="base-day-item">
          <div className="base-day-time">08:00</div>
          <div>
            <div className="base-day-name">Boiler swap · Sarah W.</div>
            <div className="base-day-meta">SW11 4EG · 5.2 mi · 3hr</div>
          </div>
        </div>
        <div className="base-day-item">
          <div className="base-day-time">12:30</div>
          <div>
            <div className="base-day-name">Radiator leak · Michael O.</div>
            <div className="base-day-meta">SW4 6NE · 2.1 mi · 1hr</div>
          </div>
        </div>
        <div className="base-day-item">
          <div className="base-day-time">15:00</div>
          <div>
            <div className="base-day-name">Site survey · Priya S.</div>
            <div className="base-day-meta">SW18 1EG · 3.4 mi · 45m</div>
          </div>
        </div>
      </div>
      <div className="base-app-tabbar">
        <span>Inbox</span>
        <span className="is-active">Diary</span>
        <span>Quotes</span>
        <span>Duo</span>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. Report card — monthly report for Local Search page
   ───────────────────────────────────────────────────────────── */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BASELINE = [18, 20, 22, 21, 24, 26, 25, 27, 28, 30, 29, 31];
const WITH_TANDEMM = [18, 21, 26, 33, 41, 50, 58, 66, 75, 84, 92, 99];

function toPath(values: number[], w: number, h: number, max: number) {
  const step = w / (values.length - 1);
  return values.map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`).join(" ");
}
function toArea(values: number[], w: number, h: number, max: number) {
  return `${toPath(values, w, h, max)} L${w},${h} L0,${h} Z`;
}

export function ReportCard() {
  const W = 640, H = 180, MAX = 110;
  return (
    <div className="report-card" role="img" aria-label="Illustrative monthly report">
      <div className="report-card-head">
        <div>
          <div className="report-card-tag">Tandemm monthly report · plain English, one page</div>
          <div className="report-card-title">Ranking moves · South West Heating</div>
        </div>
        <div className="report-card-period">
          <span>Jun → Jul</span>
        </div>
      </div>

      <div className="report-card-grid">
        <div className="report-card-kpi">
          <div className="report-card-kpi-num">128</div>
          <div className="report-card-kpi-label">Calls from Google</div>
          <div className="report-card-kpi-delta">▲ 42 vs last month</div>
        </div>
        <div className="report-card-kpi">
          <div className="report-card-kpi-num">3,940</div>
          <div className="report-card-kpi-label">Profile views</div>
          <div className="report-card-kpi-delta">▲ 720 vs last month</div>
        </div>
        <div className="report-card-kpi">
          <div className="report-card-kpi-num">11 / 14</div>
          <div className="report-card-kpi-label">Postcodes in top 3</div>
          <div className="report-card-kpi-delta">▲ 4 postcodes</div>
        </div>
      </div>

      <div className="report-card-chart">
        <div className="report-card-legend">
          <span><span className="report-card-swatch report-card-swatch--now" /> Baseline · before Tandemm</span>
          <span><span className="report-card-swatch report-card-swatch--proj" /> With Tandemm Local + Base</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="rc-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.28" />
              <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="var(--color-hairline-soft)" strokeDasharray="3 5" />
          ))}
          <path d={toArea(WITH_TANDEMM, W, H, MAX)} fill="url(#rc-area)" />
          <path d={toPath(WITH_TANDEMM, W, H, MAX)} fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" />
          <path d={toPath(BASELINE, W, H, MAX)} fill="none" stroke="var(--color-ink-muted)" strokeWidth="1.4" strokeDasharray="5 5" />
        </svg>
        <div className="report-card-axis">
          {MONTHS.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. Before/After grid — Local Search case study
   ───────────────────────────────────────────────────────────── */

const BEFORE = [3,4,4,3,5,4,4,5,4,4,3,4,5,4,3,4];
const AFTER  = [1,1,2,1,1,1,2,1,1,2,1,1,2,1,1,1];

export function BeforeAfterGrid() {
  const cell = (rank: number, i: number) => {
    let tone = "cold";
    if (rank <= 1) tone = "top";
    else if (rank <= 3) tone = "mid";
    else if (rank <= 6) tone = "warm";
    return <div key={i} className={`ba-cell ba-cell--${tone}`}>{rank}</div>;
  };
  return (
    <div className="before-after" role="img" aria-label="Illustrative postcode ranking before and after">
      <div className="before-after-block">
        <div className="before-after-head">
          <span className="before-after-label">Before</span>
          <span className="before-after-note">Average rank #4.1</span>
        </div>
        <div className="before-after-grid">
          {BEFORE.map(cell)}
        </div>
      </div>
      <div className="before-after-arrow" aria-hidden="true">→</div>
      <div className="before-after-block">
        <div className="before-after-head">
          <span className="before-after-label before-after-label--after">After 6 months</span>
          <span className="before-after-note before-after-note--after">Average rank #1.3</span>
        </div>
        <div className="before-after-grid">
          {AFTER.map(cell)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. Step mockups for Getting Started
   ───────────────────────────────────────────────────────────── */

export function StepMockSignup() {
  return (
    <div className="step-mock step-mock-signup">
      <div className="step-mock-signup-tag">The Tandemm Diagnosis · free</div>
      <div className="step-mock-signup-field">
        <label>Your website</label>
        <div className="step-mock-signup-input">https://southwestheating.co.uk</div>
      </div>
      <div className="step-mock-signup-field">
        <label>Your trade</label>
        <div className="step-mock-signup-input">Heating engineer</div>
      </div>
      <div className="step-mock-signup-field">
        <label>Mobile</label>
        <div className="step-mock-signup-input">07700 900 128</div>
      </div>
      <div className="step-mock-signup-btn">Get my Diagnosis</div>
      <div className="step-mock-signup-note">No card. Takes 2 minutes.</div>
    </div>
  );
}

export function StepMockCall() {
  return (
    <div className="step-mock step-mock-call">
      <div className="step-mock-call-bubble">Hello, welcome to Tandemm 👋</div>
      <div className="step-mock-call-avatars">
        <span className="step-mock-call-av" />
        <span className="step-mock-call-av step-mock-call-av--mid" />
        <span className="step-mock-call-av" />
      </div>
      <div className="step-mock-call-cta">
        <span className="step-mock-call-cta-dot" />
        Live · 24 min
      </div>
    </div>
  );
}

export function StepMockPhotos() {
  return (
    <div className="step-mock step-mock-photos">
      <div className="step-mock-photo step-mock-photo--a" />
      <div className="step-mock-photo step-mock-photo--b" />
      <div className="step-mock-photo step-mock-photo--c" />
      <div className="step-mock-photo-tag">A few photos of your work</div>
    </div>
  );
}

export function StepMockPreview() {
  return (
    <div className="step-mock step-mock-preview">
      <TradesSite />
      <div className="step-mock-preview-badge">Preview · your live site in 7 days</div>
    </div>
  );
}

export function StepMockLive() {
  return (
    <div className="step-mock step-mock-live">
      <div className="step-mock-live-desktop">
        <div className="step-mock-live-desktop-screen" />
        <div className="step-mock-live-desktop-stand" />
      </div>
      <div className="step-mock-live-mobile">
        <div className="step-mock-live-mobile-notch" />
        <div className="step-mock-live-mobile-screen" />
      </div>
      <div className="step-mock-live-app">
        <BaseApp variant="inbox" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. Team row — fabricated team avatars for the "real person" band
   ───────────────────────────────────────────────────────────── */

const TEAM = [
  { initials: "AH", hue: 20 },
  { initials: "JM", hue: 200 },
  { initials: "RS", hue: 150 },
  { initials: "KP", hue: 340 },
  { initials: "TB", hue: 40 },
  { initials: "NL", hue: 280 },
  { initials: "EO", hue: 100 },
  { initials: "MR", hue: 220 },
];

export function TeamRow() {
  return (
    <div className="team-row" aria-hidden="true">
      {TEAM.map((t, i) => (
        <span
          key={i}
          className="team-row-avatar"
          style={{
            background: `linear-gradient(135deg, hsl(${t.hue} 60% 60%), hsl(${t.hue} 55% 45%))`,
          }}
        >
          {t.initials}
        </span>
      ))}
    </div>
  );
}
