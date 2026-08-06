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
    <div className="google-pack google-pack--compact" role="img" aria-label="Illustrative Google local search result">
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

      <div className="google-pack-widget">
        <div className="google-pack-widget-head">
          <span className="google-pack-widget-title">Businesses</span>
          <span className="google-pack-widget-sub">Rating · Hours · Near me</span>
        </div>

        <div className="google-pack-widget-map" aria-hidden="true">
          <div className="google-pack-map-bg" />
          <div className="google-pack-map-road google-pack-map-road--a" />
          <div className="google-pack-map-road google-pack-map-road--b" />
          <div className="google-pack-map-road google-pack-map-road--c" />
          <div className="google-pack-map-park" />
          <div className="google-pack-map-pin google-pack-map-pin--1">1</div>
          <div className="google-pack-map-pin google-pack-map-pin--2">2</div>
          <div className="google-pack-map-pin google-pack-map-pin--3">3</div>
        </div>

        <div className="google-pack-rows">
          {LISTINGS.map((l) => (
            <div key={l.rank} className="google-pack-row">
              <div className="google-pack-row-body">
                <div className="google-pack-row-name">{l.name}</div>
                <div className="google-pack-row-rating">
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
                <div className="google-pack-row-meta">
                  {l.area} <span className="google-pack-listing-dot" /> {l.hours}
                </div>
              </div>
              <div className="google-pack-row-thumb" aria-hidden="true">
                <span className={`google-pack-row-pin google-pack-row-pin--${l.rank}`}>{l.rank}</span>
              </div>
            </div>
          ))}
          <div className="google-pack-widget-more">View all</div>
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
  const loop = [...SHOWCASE, ...SHOWCASE];
  return (
    <div className="site-showcase site-showcase--carousel">
      <div className="site-showcase-track">
        {loop.map((s, idx) => (
          <figure key={`${s.name}-${idx}`} className="site-showcase-item" aria-hidden={idx >= SHOWCASE.length}>
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
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. BaseApp — phone with realistic Tandemm Deck UI
   ───────────────────────────────────────────────────────────── */

const LEADS = [
  { name: "Sarah W.", src: "Widget", job: "Boiler swap, SW11", time: "2m", tone: "hot" as const, val: "£2,400" },
  { name: "Michael O.", src: "Missed call", job: "Radiator leak, SW4", time: "14m", tone: "warm" as const, val: "£380" },
  { name: "Priya S.", src: "WhatsApp", job: "Full bathroom, SW18", time: "1h", tone: "hot" as const, val: "£6,800" },
  { name: "David R.", src: "Google", job: "Powerflush, SW12", time: "3h", tone: "cool" as const, val: "£420" },
];

export function BaseApp({ variant = "inbox", withMic = false }: { variant?: "inbox" | "day" | "quotes" | "home"; withMic?: boolean }) {
  return (
    <div className={`base-app${withMic ? " base-app--float" : ""}`} role="img" aria-label="Illustrative Tandemm Duo app on a phone">
      <div className="base-app-frame">
        <div className="base-app-notch" />
        <div className="base-app-screen">
          {variant === "inbox" && <BaseInbox withMic={withMic} />}
          {variant === "day" && <BaseDay withMic={withMic} />}
          {variant === "quotes" && <BaseQuotes withMic={withMic} />}
          {variant === "home" && <BaseHome withMic={withMic} />}
        </div>
        <div className="base-app-home" />
      </div>
    </div>
  );
}

function BaseHome({ withMic = false }: { withMic?: boolean }) {
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
          <div className="base-app-today">Tue 12 Aug · 3 jobs on today</div>
        </div>
        <div className="base-app-avatar">AH</div>
      </div>

      {/* Map view */}
      <div className="base-home-map">
        <div className="base-day-map-bg" />
        <div className="base-day-map-route" />
        <div className="base-day-map-pin base-day-map-pin--1">1</div>
        <div className="base-day-map-pin base-day-map-pin--2">2</div>
        <div className="base-day-map-pin base-day-map-pin--3">3</div>
        <div className="base-home-map-chip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          24 mi · 3 stops
        </div>
      </div>

      {/* Weather */}
      <div className="base-home-weather">
        <span className="base-home-weather-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 18a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A3.75 3.75 0 0 0 6.5 18h11z" />
            <path d="M8 21l-1 1.5M12 21l-1 1.5M16 21l-1 1.5" />
          </svg>
        </span>
        <div className="base-home-weather-body">
          <div className="base-home-weather-temp">14° · Light rain</div>
          <div className="base-home-weather-sub">Wandsworth · dry by 2pm</div>
        </div>
        <span className="base-home-weather-hi">H 17°  L 9°</span>
      </div>

      {/* Today's enquiries */}
      <div className="base-app-section-title">
        Today&rsquo;s enquiries
        <span className="base-app-section-tag">3 new</span>
      </div>
      <div className="base-app-leads base-home-leads">
        {LEADS.slice(0, 3).map((l, i) => (
          <div key={i} className="base-app-lead">
            <span className={`base-app-lead-dot base-app-lead-dot--${l.tone}`} />
            <div className="base-app-lead-body">
              <div className="base-app-lead-name">{l.name}</div>
              <div className="base-app-lead-meta">
                {l.job} · via {l.src}
              </div>
            </div>
            <div className="base-app-lead-val">{l.val}</div>
          </div>
        ))}
      </div>
      <AppTabBar active="Inbox" withMic={withMic} />
    </>
  );
}

function BaseInbox({ withMic = false }: { withMic?: boolean }) {
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
      <AppTabBar active="Inbox" withMic={withMic} />
    </>
  );
}

function BaseDay({ withMic = false }: { withMic?: boolean }) {
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
      <AppTabBar active="Diary" withMic={withMic} />
    </>
  );
}

function BaseQuotes({ withMic = false }: { withMic?: boolean }) {
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
          <div className="base-app-hello">Quotes</div>
          <div className="base-app-today">3 pending · £12.4k pipeline</div>
        </div>
        <div className="base-app-avatar">AH</div>
      </div>
      <div className="base-app-section-title">
        Open quotes
        <span className="base-app-section-tag">3</span>
      </div>
      <div className="base-app-leads">
        <div className="base-app-lead">
          <span className="base-app-lead-dot base-app-lead-dot--hot" />
          <div className="base-app-lead-body">
            <div className="base-app-lead-name">Sarah W.</div>
            <div className="base-app-lead-job">Boiler swap · SW11</div>
            <div className="base-app-lead-meta">Sent 2h ago · Viewed</div>
          </div>
          <div className="base-app-lead-val">£2,400</div>
        </div>
        <div className="base-app-lead">
          <span className="base-app-lead-dot base-app-lead-dot--warm" />
          <div className="base-app-lead-body">
            <div className="base-app-lead-name">Priya S.</div>
            <div className="base-app-lead-job">Full bathroom · SW18</div>
            <div className="base-app-lead-meta">Sent yesterday · Opened</div>
          </div>
          <div className="base-app-lead-val">£6,800</div>
        </div>
        <div className="base-app-lead">
          <span className="base-app-lead-dot base-app-lead-dot--cool" />
          <div className="base-app-lead-body">
            <div className="base-app-lead-name">Tom B.</div>
            <div className="base-app-lead-job">Powerflush · SW12</div>
            <div className="base-app-lead-meta">Sent 3 days ago</div>
          </div>
          <div className="base-app-lead-val">£420</div>
        </div>
      </div>
      <div className="base-app-quote-total">
        <span>Pipeline total</span>
        <span>£9,620</span>
      </div>
      <AppTabBar active="Quotes" withMic={withMic} />
    </>
  );
}

function AppTabBar({ active, withMic }: { active: string; withMic: boolean }) {
  return (
    <div className="base-app-tabbar">
      <span className={active === "Inbox" ? "is-active" : ""}>Inbox</span>
      <span className={active === "Diary" ? "is-active" : ""}>Diary</span>
      {withMic && (
        <span className="base-app-mic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <line x1="12" y1="19" x2="12" y2="22" />
          </svg>
        </span>
      )}
      <span className={active === "Quotes" ? "is-active" : ""}>Quotes</span>
      <span className={active === "More" ? "is-active" : ""}>{withMic ? "More" : "Duo"}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. Report card — monthly report for Local Search page
   ───────────────────────────────────────────────────────────── */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BASELINE = [18, 20, 22, 21, 24, 26, 25, 27, 28, 30, 29, 31];
const WITH_TANDEMM = [18, 21, 26, 33, 41, 50, 58, 66, 75, 84, 92, 99];
/* enquiries/month — realistic ramp for a single trade */
const ENQUIRIES_BASE = [6, 7, 6, 8, 7, 6, 8, 7, 8, 9, 8, 9];
const ENQUIRIES_WITH = [6, 7, 8, 11, 14, 18, 21, 24, 27, 30, 32, 35];

function toPath(values: number[], w: number, h: number, max: number) {
  const step = w / (values.length - 1);
  return values.map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`).join(" ");
}
function toArea(values: number[], w: number, h: number, max: number) {
  return `${toPath(values, w, h, max)} L${w},${h} L0,${h} Z`;
}

export function ReportCard() {
  const W = 640, H = 160, MAX = 40;
  return (
    <div className="report-card" role="img" aria-label="Illustrative Tandemm monthly report">
      <div className="report-card-head">
        <div>
          <div className="report-card-tag">Your Tandemm report · one page, plain English</div>
          <div className="report-card-title">South West Heating · July</div>
        </div>
        <div className="report-card-period">
          <span>Jun → Jul</span>
        </div>
      </div>

      <div className="report-card-grid">
        <div className="report-card-kpi">
          <div className="report-card-kpi-num">32</div>
          <div className="report-card-kpi-label">New enquiries from Google</div>
          <div className="report-card-kpi-delta">▲ 11 vs last month</div>
        </div>
        <div className="report-card-kpi">
          <div className="report-card-kpi-num">18</div>
          <div className="report-card-kpi-label">Calls tracked from your listing</div>
          <div className="report-card-kpi-delta">▲ 6 vs last month</div>
        </div>
        <div className="report-card-kpi">
          <div className="report-card-kpi-num">9 / 14</div>
          <div className="report-card-kpi-label">Postcodes ranked top 3</div>
          <div className="report-card-kpi-delta">▲ 3 postcodes</div>
        </div>
      </div>

      <div className="report-card-chart">
        <div className="report-card-legend">
          <span><span className="report-card-swatch report-card-swatch--now" /> Enquiries before Tandemm</span>
          <span><span className="report-card-swatch report-card-swatch--proj" /> Enquiries with Tandemm Reach</span>
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
          <path d={toArea(ENQUIRIES_WITH, W, H, MAX)} fill="url(#rc-area)" />
          <path d={toPath(ENQUIRIES_WITH, W, H, MAX)} fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" />
          <path d={toPath(ENQUIRIES_BASE, W, H, MAX)} fill="none" stroke="var(--color-ink-muted)" strokeWidth="1.4" strokeDasharray="5 5" />
        </svg>
        <div className="report-card-axis">
          {MONTHS.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>

      <div className="report-card-notes">
        <div className="report-card-note">
          <span className="report-card-note-tag">What we did this month</span>
          <span>Posted 4 job updates, replied to 12 reviews, added 3 new service pages for SW11, SW4, SW18.</span>
        </div>
        <div className="report-card-note">
          <span className="report-card-note-tag">What&rsquo;s next</span>
          <span>Push into two new postcodes, chase reviews from June jobs, refresh boiler-install photos.</span>
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
          <span className="before-after-label before-after-label--after">After 3–6 months</span>
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

function PersonIllustration({ skin, hair, shirt }: { skin: string; hair: string; shirt: string }) {
  return (
    <svg viewBox="0 0 64 64" className="step-mock-person" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="var(--person-bg, #EAE3D6)" />
      {/* shoulders / shirt */}
      <path d="M12 64 C12 50 21 44 32 44 C43 44 52 50 52 64 Z" fill={shirt} />
      <path d="M27 42 h10 v6 a5 5 0 0 1 -10 0 Z" fill={skin} />
      {/* head */}
      <circle cx="32" cy="28" r="12" fill={skin} />
      {/* hair */}
      <path d="M20 27 C20 17 44 17 44 27 C44 22 40 18 32 18 C24 18 20 22 20 27 Z" fill={hair} />
      {/* smile */}
      <path d="M28 31 q4 3 8 0" stroke="#5A4632" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

export function StepMockCall() {
  return (
    <div className="step-mock step-mock-founder">
      <div className="step-mock-founder-callcard">
        <div className="step-mock-founder-callcard-label">Incoming call</div>
        <div className="step-mock-founder-avatar step-mock-founder-avatar--brand">
          <svg viewBox="0 0 1000 1000" aria-hidden="true">
            <path
              d="M350,260 L590,500 L350,740 L110,500 Z M650,260 L890,500 L650,740 L410,500 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div className="step-mock-founder-name">Tandemm Team</div>
        <div className="step-mock-founder-role">Real people, no queue</div>
        <div className="step-mock-founder-callbtn" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.5 2.6a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.2 1.7.4 2.6.5a2 2 0 0 1 1.7 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function StepMockPhotos() {
  return (
    <div className="step-mock step-mock-photos-real">
      <div className="step-mock-photos-msghead">
        <span className="step-mock-photos-avatar">SW</span>
        <div>
          <div className="step-mock-photos-sender">Sarah · South West Heating</div>
          <div className="step-mock-photos-time">sent you 4 photos · 09:42</div>
        </div>
      </div>
      <div className="step-mock-photos-grid">
        <div className="step-mock-photo-real step-mock-photo-real--van">
          <PhotoVan />
          <span className="step-mock-photo-grain" aria-hidden="true" />
          <span className="step-mock-photo-real-label">The van · Sarah&rsquo;s Plumbing</span>
        </div>
        <div className="step-mock-photo-real step-mock-photo-real--boiler">
          <PhotoBoiler />
          <span className="step-mock-photo-grain" aria-hidden="true" />
          <span className="step-mock-photo-real-label">Boiler install, SW11</span>
        </div>
        <div className="step-mock-photo-real step-mock-photo-real--bathroom">
          <PhotoBathroom />
          <span className="step-mock-photo-grain" aria-hidden="true" />
          <span className="step-mock-photo-real-label">Bathroom refit</span>
        </div>
        <div className="step-mock-photo-real step-mock-photo-real--team">
          <PhotoTeam />
          <span className="step-mock-photo-grain" aria-hidden="true" />
          <span className="step-mock-photo-real-label">On the tools</span>
        </div>
      </div>
      <div className="step-mock-photos-bar">
        <span className="step-mock-photos-bar-check">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5 9-11" />
          </svg>
        </span>
        Received, building your gallery
      </div>
    </div>
  );
}

/* Illustrative "photo" scenes rendered inline as SVG to feel more real
   than flat gradient tiles. Not a real photograph. */
function PhotoVan() {
  return (
    <svg viewBox="0 0 200 130" className="step-mock-photo-svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pv-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#B8CCDA" />
          <stop offset="1" stopColor="#E7EEF3" />
        </linearGradient>
        <linearGradient id="pv-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F5F7F8" />
          <stop offset="1" stopColor="#C9D2D8" />
        </linearGradient>
      </defs>
      <rect width="200" height="130" fill="url(#pv-sky)" />
      {/* horizon / kerb */}
      <rect x="0" y="98" width="200" height="32" fill="#8C9AA3" />
      <rect x="0" y="95" width="200" height="4" fill="#6C7880" />
      {/* van body */}
      <path d="M28 96 L28 60 Q28 52 36 52 L96 52 L108 40 L156 40 Q170 40 170 54 L170 96 Z" fill="url(#pv-body)" stroke="#2C3A44" strokeWidth="1.2" />
      {/* windows */}
      <path d="M108 44 L152 44 Q166 44 166 56 L166 66 L98 66 Z" fill="#3B5D77" opacity="0.7" />
      {/* side panel branding */}
      <rect x="34" y="72" width="70" height="16" rx="1" fill="#C1662C" />
      <text x="69" y="84" fontSize="9" fontWeight="800" fontFamily="Archivo, sans-serif" fill="#fff" textAnchor="middle" letterSpacing="0.05em">SARAH&rsquo;S PLUMBING</text>
      {/* wheels */}
      <circle cx="56" cy="102" r="12" fill="#1F262B" />
      <circle cx="56" cy="102" r="5" fill="#3A4650" />
      <circle cx="148" cy="102" r="12" fill="#1F262B" />
      <circle cx="148" cy="102" r="5" fill="#3A4650" />
      {/* headlight */}
      <rect x="163" y="66" width="6" height="8" rx="1" fill="#F4D46A" />
    </svg>
  );
}

function PhotoBoiler() {
  return (
    <svg viewBox="0 0 200 130" className="step-mock-photo-svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pb-wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#EFE7D9" />
          <stop offset="1" stopColor="#DDD0BB" />
        </linearGradient>
      </defs>
      <rect width="200" height="130" fill="url(#pb-wall)" />
      {/* cupboard shadow */}
      <rect x="60" y="14" width="80" height="106" fill="#C7B99E" opacity="0.35" />
      {/* boiler unit */}
      <rect x="72" y="20" width="56" height="82" rx="4" fill="#F6F7F8" stroke="#2C3A44" strokeWidth="1" />
      <rect x="72" y="20" width="56" height="14" fill="#2C3A44" />
      <circle cx="82" cy="27" r="2" fill="#7CB342" />
      <text x="118" y="30" fontSize="6" fontWeight="700" fill="#fff" textAnchor="end" fontFamily="Archivo, sans-serif">WORCESTER</text>
      {/* display */}
      <rect x="80" y="42" width="40" height="14" rx="2" fill="#0F2A1F" />
      <text x="100" y="52" fontSize="7" fontWeight="800" fill="#7CB342" textAnchor="middle" fontFamily="monospace">65°C</text>
      {/* dials */}
      <circle cx="86" cy="70" r="6" fill="#DDD" stroke="#2C3A44" strokeWidth="0.6" />
      <circle cx="100" cy="70" r="6" fill="#DDD" stroke="#2C3A44" strokeWidth="0.6" />
      <circle cx="114" cy="70" r="6" fill="#DDD" stroke="#2C3A44" strokeWidth="0.6" />
      <rect x="80" y="82" width="40" height="12" rx="2" fill="#E4E7EA" />
      {/* pipes */}
      <rect x="78" y="102" width="4" height="18" fill="#B0B7BE" />
      <rect x="88" y="102" width="4" height="18" fill="#D2A26B" />
      <rect x="98" y="102" width="4" height="18" fill="#B0B7BE" />
      <rect x="108" y="102" width="4" height="18" fill="#D2A26B" />
      <rect x="118" y="102" width="4" height="18" fill="#B0B7BE" />
    </svg>
  );
}

function PhotoBathroom() {
  return (
    <svg viewBox="0 0 200 130" className="step-mock-photo-svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="130" fill="#E9EFF1" />
      {/* tile grout */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" x2="200" y1={i * 16} y2={i * 16} stroke="#D3DBDE" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 20} x2={i * 20} y1="0" y2="90" stroke="#D3DBDE" strokeWidth="0.5" />
      ))}
      {/* floor */}
      <rect x="0" y="90" width="200" height="40" fill="#9BA3A8" />
      {/* bath */}
      <rect x="14" y="72" width="90" height="30" rx="6" fill="#FDFEFE" stroke="#2C3A44" strokeWidth="0.8" />
      <rect x="18" y="76" width="82" height="22" rx="4" fill="#DCE7EC" />
      {/* tap */}
      <rect x="20" y="64" width="4" height="8" fill="#B0B7BE" />
      <rect x="16" y="60" width="12" height="4" rx="1" fill="#B0B7BE" />
      {/* mirror */}
      <rect x="118" y="20" width="40" height="34" rx="2" fill="#CBDBE0" stroke="#2C3A44" strokeWidth="0.6" />
      {/* sink */}
      <rect x="118" y="70" width="60" height="18" rx="3" fill="#FDFEFE" stroke="#2C3A44" strokeWidth="0.6" />
      <ellipse cx="148" cy="82" rx="18" ry="4" fill="#CBDBE0" />
      {/* towel */}
      <rect x="168" y="56" width="10" height="18" fill="#C1662C" />
    </svg>
  );
}

function PhotoTeam() {
  return (
    <svg viewBox="0 0 200 130" className="step-mock-photo-svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pt-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#4C6B7F" />
          <stop offset="1" stopColor="#2C3A44" />
        </linearGradient>
      </defs>
      <rect width="200" height="130" fill="url(#pt-bg)" />
      {/* garage door */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x="0" y={i * 22} width="200" height="1.5" fill="#1F262B" opacity="0.6" />
      ))}
      {/* two figures */}
      {/* person 1 */}
      <g transform="translate(56 30)">
        <rect x="-22" y="42" width="44" height="46" rx="4" fill="#C1662C" />
        <circle cx="0" cy="30" r="16" fill="#E8B58C" />
        <path d="M-14 26 C-14 16 14 16 14 26 C14 20 8 15 0 15 C-8 15 -14 20 -14 26 Z" fill="#2A1F17" />
        {/* hi-vis stripe */}
        <rect x="-22" y="58" width="44" height="4" fill="#F4D46A" />
      </g>
      {/* person 2 */}
      <g transform="translate(120 34)">
        <rect x="-22" y="42" width="44" height="46" rx="4" fill="#24425A" />
        <circle cx="0" cy="30" r="15" fill="#C68A62" />
        <path d="M-13 26 C-13 17 13 17 13 26 C13 21 7 16 0 16 C-7 16 -13 21 -13 26 Z" fill="#1E1A16" />
        <rect x="-22" y="58" width="44" height="4" fill="#F4D46A" />
      </g>
      {/* tool tag */}
      <rect x="8" y="8" width="60" height="14" rx="3" fill="rgba(255,255,255,0.14)" />
      <text x="14" y="18" fontSize="8" fontWeight="700" fill="#fff" fontFamily="Archivo, sans-serif">GAS SAFE · 587412</text>
    </svg>
  );
}

export function StepMockPreview() {
  return (
    <div className="step-mock step-mock-site-preview">
      <div className="step-mock-site-bar">
        <span className="step-mock-site-dot" />
        <span className="step-mock-site-dot" />
        <span className="step-mock-site-dot" />
        <div className="step-mock-site-url">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#0D652D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          southwestheating.co.uk
        </div>
      </div>
      <div className="step-mock-site-body">
        <div className="step-mock-site-nav">
          <span className="step-mock-site-brand-mark" />
          <span className="step-mock-site-brand">South West Heating</span>
          <span className="step-mock-site-nav-links">
            <span>Services</span>
            <span>Areas</span>
            <span>Reviews</span>
          </span>
          <span className="step-mock-site-phone">020 3856 2211</span>
        </div>
        <div className="step-mock-site-heroshot" aria-hidden="true">
          <SitePreviewShot />
        </div>
        <div className="step-mock-site-hero">
          <span className="step-mock-site-eyebrow">Battersea · Clapham · Wandsworth</span>
          <div className="step-mock-site-headline">Boiler back on today,<br/>or the callout is free.</div>
          <div className="step-mock-site-sub">Gas Safe engineers across South West London. Same-day cover for breakdowns, no-mess installs on the diary.</div>
          <div className="step-mock-site-btns">
            <span className="step-mock-site-btn is-primary">Get a quote</span>
            <span className="step-mock-site-btn">Call now</span>
          </div>
          <div className="step-mock-site-badges">
            <span>★ 4.9 · 217 reviews</span>
            <span>Gas Safe 587412</span>
            <span>Worcester accredited</span>
          </div>
        </div>
        <div className="step-mock-site-services">
          <span>Boiler repair</span>
          <span>Boiler install</span>
          <span>Powerflush</span>
          <span>Bathroom fit</span>
        </div>
      </div>
    </div>
  );
}

function SitePreviewShot() {
  return (
    <svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sps-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#B8CCDA" />
          <stop offset="1" stopColor="#E7EEF3" />
        </linearGradient>
      </defs>
      <rect width="320" height="120" fill="url(#sps-sky)" />
      {/* houses */}
      <rect x="10" y="46" width="60" height="44" fill="#C7B99E" />
      <path d="M8 46 L40 26 L72 46 Z" fill="#8B6B4A" />
      <rect x="30" y="60" width="12" height="20" fill="#3B5D77" />
      <rect x="52" y="58" width="10" height="10" fill="#F4D46A" />
      <rect x="76" y="52" width="54" height="38" fill="#D9C6A6" />
      <path d="M74 52 L103 34 L132 52 Z" fill="#7A5B3F" />
      <rect x="94" y="66" width="12" height="24" fill="#3B5D77" />
      {/* van */}
      <rect x="150" y="66" width="80" height="24" rx="3" fill="#F5F7F8" stroke="#2C3A44" strokeWidth="0.8" />
      <path d="M204 66 L204 58 L224 58 L230 66 Z" fill="#F5F7F8" stroke="#2C3A44" strokeWidth="0.8" />
      <rect x="158" y="72" width="42" height="10" fill="#C1662C" />
      <circle cx="168" cy="92" r="6" fill="#1F262B" />
      <circle cx="220" cy="92" r="6" fill="#1F262B" />
      {/* road */}
      <rect x="0" y="92" width="320" height="28" fill="#8C9AA3" />
      <rect x="0" y="98" width="320" height="2" fill="#6C7880" />
      {/* right house */}
      <rect x="240" y="50" width="60" height="42" fill="#C7B99E" />
      <path d="M238 50 L270 32 L302 50 Z" fill="#8B6B4A" />
      <rect x="260" y="66" width="12" height="26" fill="#3B5D77" />
    </svg>
  );
}

export function StepMockLive() {
  return (
    <div className="step-mock step-mock-three-phones">
      <div className="step-mock-phone-trio">
        <div className="step-mock-phone-small">
          <BaseApp variant="inbox" />
        </div>
        <div className="step-mock-phone-small step-mock-phone-small--center">
          <BaseApp variant="day" />
        </div>
        <div className="step-mock-phone-small">
          <BaseApp variant="quotes" />
        </div>
      </div>
      <div className="step-mock-three-label">Inbox · Diary · Quotes</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Boost funnel — leads in → revenue out visualization
   ───────────────────────────────────────────────────────────── */

const FUNNEL_STAGES = [
  { label: "Ad spend", value: "£500/mo", width: 100, opacity: 0.2 },
  { label: "Impressions", value: "8,400", width: 88, opacity: 0.3 },
  { label: "Clicks", value: "340", width: 72, opacity: 0.45 },
  { label: "Leads", value: "32", width: 56, opacity: 0.65 },
  { label: "Booked jobs", value: "9", width: 40, opacity: 0.85 },
  { label: "Revenue", value: "£4,800", width: 100, opacity: 1 },
];

export function BoostFunnel() {
  return (
    <div className="boost-funnel" role="img" aria-label="Illustrative Boost ad performance funnel">
      <div className="boost-funnel-track">
        {FUNNEL_STAGES.map((s, i) => (
          <div key={s.label} className="boost-funnel-stage">
            <div
              className={`boost-funnel-bar${i === FUNNEL_STAGES.length - 1 ? " boost-funnel-bar--result" : ""}`}
              style={{ width: `${s.width}%`, opacity: s.opacity }}
            />
            <div className="boost-funnel-value">{s.value}</div>
            <div className="boost-funnel-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="boost-funnel-note">
        Illustrative · actual results depend on trade, area and spend
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Reach: "you are first" — a compact Google Maps-style card
   showing the customer's business at #1, two competitors below.
   ───────────────────────────────────────────────────────────── */

export function ReachFirstResult() {
  const rows = [
    { rank: 1, name: "Sarah's Plumbing", rating: 4.9, reviews: 217, meta: "Open · 24hr callouts", you: true },
    { rank: 2, name: "Southside Boilers", rating: 4.5, reviews: 84, meta: "Open · Closes 6pm", you: false },
    { rank: 3, name: "River Plumbing", rating: 4.3, reviews: 42, meta: "Closed · Opens 8am", you: false },
  ];
  return (
    <div className="reach-first" role="img" aria-label="Illustrative Google Maps result with your business ranked first">
      <div className="reach-first-head">
        <span className="reach-first-head-dot" />
        Google Maps · &ldquo;plumber near me&rdquo;
      </div>
      <div className="reach-first-rows">
        {rows.map((r) => (
          <div key={r.rank} className={`reach-first-row${r.you ? " is-you" : ""}`}>
            <div className={`reach-first-pin reach-first-pin--${r.rank}${r.you ? " is-you" : ""}`}>{r.rank}</div>
            <div className="reach-first-body">
              <div className="reach-first-name">
                {r.name}
                {r.you && <span className="reach-first-badge">You</span>}
              </div>
              <div className="reach-first-rating">
                <span className="reach-first-rating-num">{r.rating.toFixed(1)}</span>
                <span className="reach-first-stars">{"★★★★★".slice(0, Math.round(r.rating))}<span className="reach-first-stars-off">{"★★★★★".slice(0, 5 - Math.round(r.rating))}</span></span>
                <span className="reach-first-reviews">({r.reviews})</span>
              </div>
              <div className="reach-first-meta">{r.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="reach-first-foot">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12l5 5 9-11" />
        </svg>
        The first name they find
      </div>
    </div>
  );
}

/* Reach: "you're not showing" — the problem card, three competitors,
   your business missing */
export function ReachMissingCard() {
  const rows = [
    { rank: 1, name: "JR Heating Solutions", rating: 4.7 },
    { rank: 2, name: "HeatPro Services", rating: 4.2 },
    { rank: 3, name: "AllFix Boilers", rating: 3.9 },
  ];
  return (
    <div className="reach-missing" role="img" aria-label="Illustrative Google Maps result with your business missing from the top three">
      <div className="reach-missing-head">Google Maps · &ldquo;heating engineer near me&rdquo;</div>
      <div className="reach-missing-rows">
        {rows.map((r) => (
          <div key={r.rank} className="reach-missing-row">
            <div className="reach-missing-avatar">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <div className="reach-missing-body">
              <div className="reach-missing-name">{r.name}</div>
              <div className="reach-missing-rating">
                <span className="reach-first-stars">{"★★★★★".slice(0, Math.round(r.rating))}<span className="reach-first-stars-off">{"★★★★★".slice(0, 5 - Math.round(r.rating))}</span></span>
                <span className="reach-missing-num">{r.rating.toFixed(1)}</span>
              </div>
            </div>
            <div className="reach-missing-rank">#{r.rank}</div>
          </div>
        ))}
      </div>
      <div className="reach-missing-foot">Your business isn&rsquo;t showing</div>
    </div>
  );
}

/* Reach: postcode visibility timeline — clearer than a raw rank grid.
   Shows a small basket of postcodes moving from off-map to top 3. */
export function PostcodeProgress() {
  const rows = [
    { postcode: "SW11 4EG", area: "Battersea",   before: "Not showing", after: "Ranked #1", tone: "top" },
    { postcode: "SW4 6NE",  area: "Clapham",     before: "Page 2",      after: "Ranked #2", tone: "top" },
    { postcode: "SW18 1EG", area: "Wandsworth",  before: "Page 3+",     after: "Ranked #3", tone: "mid" },
    { postcode: "SW12 8AA", area: "Balham",      before: "Not showing", after: "Ranked #2", tone: "top" },
    { postcode: "SW6 2QD",  area: "Fulham",      before: "Page 2",      after: "Ranked #4", tone: "mid" },
  ];
  return (
    <div className="reach-postcodes" role="img" aria-label="Illustrative postcode-by-postcode visibility improvement">
      <div className="reach-postcodes-head">
        <div>
          <div className="reach-postcodes-title">Where you show up, postcode by postcode</div>
          <div className="reach-postcodes-sub">South West London · 3–6 months in Tandemm Reach</div>
        </div>
        <div className="reach-postcodes-legend">
          <span><span className="reach-postcodes-swatch reach-postcodes-swatch--before" /> Before</span>
          <span><span className="reach-postcodes-swatch reach-postcodes-swatch--after" /> After 3–6 months</span>
        </div>
      </div>
      <div className="reach-postcodes-rows">
        <div className="reach-postcodes-row reach-postcodes-row--head">
          <span>Postcode</span>
          <span>Area</span>
          <span>Before</span>
          <span>After 3–6 months</span>
        </div>
        {rows.map((r) => (
          <div key={r.postcode} className="reach-postcodes-row">
            <span className="reach-postcodes-pc">{r.postcode}</span>
            <span className="reach-postcodes-area">{r.area}</span>
            <span className="reach-postcodes-before">{r.before}</span>
            <span className={`reach-postcodes-after reach-postcodes-after--${r.tone}`}>
              <span className="reach-postcodes-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg>
              </span>
              {r.after}
            </span>
          </div>
        ))}
      </div>
      <div className="reach-postcodes-foot">
        Same business. Same trade. Same team. Just found by more of your area.
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
