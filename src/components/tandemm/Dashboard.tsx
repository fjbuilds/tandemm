"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────────────────── */
/*  Product dashboard mockups                                  */
/*  Mirrors the real Tandemm app UI: enquiry list, map view    */
/*  and the desktop equivalent.                                */
/* ─────────────────────────────────────────────────────────── */

// Drop the real app map screenshot in at this path (public/…) and it
// renders in place of the drawn fallback below. Until the file exists,
// the faithful SVG map shows and no broken image appears.
const MAP_IMAGE_SRC = "/brand/dashboard-map.png";

type Stage = "call-back" | "quote-required" | "visit-required" | "quote-sent";
type Urgency = "urgent" | "asap" | "flexible";

type Enquiry = {
  name: string;
  job: string;
  postcode: string;
  area: string;
  when: string;
  stage: Stage;
  urgency: Urgency;
  logged: string;
};

const ENQUIRIES: Enquiry[] = [
  {
    name: "James Patterson",
    job: "Emergency repair",
    postcode: "SK4 2QP",
    area: "Stockport",
    when: "Morning",
    stage: "call-back",
    urgency: "urgent",
    logged: "Today, 7:50 PM",
  },
  {
    name: "Sarah Mitchell",
    job: "Full installation",
    postcode: "M20 1LP",
    area: "Manchester",
    when: "Afternoon",
    stage: "quote-required",
    urgency: "asap",
    logged: "Today, 6:03 PM",
  },
  {
    name: "Mohammed Ali",
    job: "Emergency callout",
    postcode: "M14 5RG",
    area: "Fallowfield",
    when: "Anytime",
    stage: "visit-required",
    urgency: "urgent",
    logged: "Today, 5:08 PM",
  },
  {
    name: "Karen Williams",
    job: "Maintenance work",
    postcode: "WA15 8JQ",
    area: "Altrincham",
    when: "Morning",
    stage: "quote-sent",
    urgency: "flexible",
    logged: "1 Jun, 11:20 AM",
  },
];

const STAGE_META: Record<
  Stage,
  { label: string; dot: string; stripe: string; chipBg: string; chipText: string }
> = {
  "call-back": {
    label: "Call back",
    dot: "#3B5BDB",
    stripe: "#3B5BDB",
    chipBg: "#E7ECFD",
    chipText: "#3346B3",
  },
  "quote-required": {
    label: "Quote required",
    dot: "#9C36B5",
    stripe: "#9C36B5",
    chipBg: "#F5E9FA",
    chipText: "#7B2C93",
  },
  "visit-required": {
    label: "Visit required",
    dot: "#E8590C",
    stripe: "#E8590C",
    chipBg: "#FDEBDD",
    chipText: "#B34700",
  },
  "quote-sent": {
    label: "Quote sent",
    dot: "#3B82C4",
    stripe: "#3B82C4",
    chipBg: "#E4F0F9",
    chipText: "#2A6795",
  },
};

const URGENCY_META: Record<Urgency, { label: string; bg: string; text: string; dot: string }> = {
  urgent: { label: "Urgent", bg: "#FDEAEA", text: "#C92A2A", dot: "#E03131" },
  asap: { label: "ASAP", bg: "#FDF3E0", text: "#B35309", dot: "#F08C00" },
  flexible: { label: "Flexible", bg: "#E7F6EC", text: "#2B7A3F", dot: "#2F9E44" },
};

/* ── Small pieces ─────────────────────────────────────────── */

function PhoneIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#495057" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.72 2.83a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.25-1.29a2 2 0 0 1 2.11-.45c.91.35 1.86.59 2.83.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function RefreshIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#495057" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </svg>
  );
}

function StatCards() {
  const stats = [
    { n: "5", label: "Enquiries", color: "#212529" },
    { n: "3", label: "Needs action", color: "#B35309" },
    { n: "1", label: "Booked", color: "#2B7A3F" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-[10px] border border-[#E9ECEF] bg-white px-3 py-2.5"
        >
          <div
            className="font-[family-name:var(--font-display)] text-[19px] font-extrabold leading-none"
            style={{ color: s.color }}
          >
            {s.n}
          </div>
          <div className="mt-1 whitespace-nowrap text-[9px] text-[#868E96]">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function AppChrome({ view }: { view: "list" | "map" }) {
  return (
    <>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 pb-2 pt-1">
        <span className="font-[family-name:var(--font-display)] text-[15px] font-extrabold text-[#212529]">
          Tradesman Ltd
        </span>
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#DEE2E6] text-[9px] font-bold text-[#868E96]">
            ?
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#868E96" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E9ECEF] text-[8px] font-bold text-[#495057]">
            TL
          </span>
        </div>
      </div>

      {/* Segmented tabs */}
      <div className="grid grid-cols-2 gap-2 px-3">
        <div className="rounded-[8px] bg-[#3B5BDB] py-2 text-center text-[11px] font-bold text-white">
          Enquiries
        </div>
        <div className="flex items-center justify-center gap-1.5 rounded-[8px] border border-[#E9ECEF] bg-white py-2 text-center text-[11px] font-semibold text-[#495057]">
          Follow-ups
          <span className="rounded bg-[#E9ECEF] px-1 text-[9px] font-bold text-[#495057]">
            3
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="px-3 pt-2">
        <StatCards />
      </div>

      {/* Filter row */}
      <div className="flex items-center justify-between px-3 pt-2">
        <div className="flex items-center gap-1 rounded-[7px] border border-[#E9ECEF] bg-white px-2 py-1.5 text-[10px] font-semibold text-[#495057]">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M8 3v4M16 3v4M3 11h18" />
          </svg>
          All time
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <div className="flex items-center rounded-[7px] border border-[#E9ECEF] bg-white p-[2px]">
          <span
            className={`flex items-center gap-1 rounded-[5px] px-2 py-1 text-[10px] font-semibold ${
              view === "list" ? "bg-[#F1F3F5] text-[#212529]" : "text-[#868E96]"
            }`}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            </svg>
            List
          </span>
          <span
            className={`flex items-center gap-1 rounded-[5px] px-2 py-1 text-[10px] font-semibold ${
              view === "map" ? "bg-[#F1F3F5] text-[#212529]" : "text-[#868E96]"
            }`}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />
            </svg>
            Map
          </span>
        </div>
      </div>

      {/* Status tabs */}
      <div className="flex items-center gap-3 border-b border-[#E9ECEF] px-3 pt-2.5">
        {[
          { l: "All", n: 5, on: true },
          { l: "Needs Action", n: 3, on: false },
          { l: "In Process", n: 1, on: false },
          { l: "Booked", n: 1, on: false },
        ].map((t) => (
          <span
            key={t.l}
            className={`relative pb-1.5 text-[10px] font-semibold ${
              t.on ? "text-[#212529]" : "text-[#868E96]"
            }`}
          >
            {t.l} <span className="text-[9px] text-[#ADB5BD]">{t.n}</span>
            {t.on && (
              <span className="absolute inset-x-0 -bottom-px h-[2px] rounded bg-[#212529]" />
            )}
          </span>
        ))}
      </div>
    </>
  );
}

function EnquiryCard({ e }: { e: Enquiry }) {
  const s = STAGE_META[e.stage];
  const u = URGENCY_META[e.urgency];

  return (
    <div className="flex overflow-hidden rounded-[10px] border border-[#E9ECEF] bg-white">
      <span className="w-[3px] shrink-0" style={{ background: s.stripe }} />
      <div className="min-w-0 flex-1 px-3 py-2.5">
        <div className="flex items-start justify-between gap-2">
          <span className="truncate text-[12px] font-bold text-[#212529]">
            {e.name}
          </span>
          <span
            className="flex shrink-0 items-center gap-1 rounded-full px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-[0.04em]"
            style={{ background: u.bg, color: u.text }}
          >
            <span className="h-1 w-1 rounded-full" style={{ background: u.dot }} />
            {u.label}
          </span>
        </div>
        <div className="mt-0.5 text-[11px] text-[#495057]">{e.job}</div>
        <div className="mt-0.5 text-[10px] text-[#868E96]">
          <span className="font-semibold text-[#495057]">{e.postcode}</span>{" "}
          {e.area} · {e.when}
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span
            className="whitespace-nowrap rounded px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-[0.04em]"
            style={{ background: s.chipBg, color: s.chipText }}
          >
            {s.label}
          </span>
          <span className="shrink-0 text-[9px] text-[#ADB5BD]">{e.logged}</span>
        </div>
      </div>
      <div className="flex w-[38px] shrink-0 flex-col border-l border-[#E9ECEF]">
        <span className="flex flex-1 items-center justify-center border-b border-[#E9ECEF]">
          <PhoneIcon />
        </span>
        <span className="flex flex-1 items-center justify-center">
          <RefreshIcon />
        </span>
      </div>
    </div>
  );
}

/* ── Stylised map ─────────────────────────────────────────── */

function MapCanvas() {
  const [imgFailed, setImgFailed] = useState(false);

  // Pins roughly mirror the real screenshot: orange north of centre,
  // purple centre-left, blue centre-right, blue south-west (Altrincham),
  // green south-east (Poynton).
  const pins = [
    { x: 138, y: 92, c: "#E8590C" },
    { x: 96, y: 150, c: "#9C36B5" },
    { x: 172, y: 166, c: "#3B5BDB" },
    { x: 60, y: 206, c: "#3B82C4" },
    { x: 196, y: 236, c: "#2F9E44" },
  ];

  const labels: [number, number, string, boolean][] = [
    [96, 40, "Prestwich", false],
    [50, 66, "Pendlebury", false],
    [214, 78, "Failsworth", false],
    [36, 120, "Eccles", false],
    [120, 138, "Manchester", true],
    [214, 128, "Droylsden", false],
    [52, 168, "Stretford", false],
    [70, 200, "Sale", false],
    [34, 226, "Altrincham", false],
    [186, 188, "Stockport", false],
    [158, 214, "Cheadle", false],
    [116, 234, "Wythenshawe", false],
    [92, 258, "Airport", false],
    [150, 280, "Wilmslow", false],
    [210, 252, "Poynton", false],
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#E9E5DE]">
      {MAP_IMAGE_SRC && !imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={MAP_IMAGE_SRC}
          alt="Map of enquiries across Greater Manchester"
          className="h-full w-full object-cover"
          onError={() => setImgFailed(true)}
          ref={(el) => {
            // The error can fire before hydration attaches onError, so
            // also detect an already-broken image once mounted.
            if (el && el.complete && el.naturalWidth === 0) setImgFailed(true);
          }}
        />
      ) : (
        <svg
          viewBox="0 0 260 300"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* base land */}
          <rect x="0" y="0" width="260" height="300" fill="#E9E5DE" />

          {/* countryside / green edges */}
          <path d="M0 0 h70 v54 l-70 20 z" fill="#CBDDB0" opacity="0.8" />
          <path d="M188 0 h72 v96 l-52 -18 z" fill="#CBDDB0" opacity="0.75" />
          <path d="M0 224 l64 8 l-8 68 h-56 z" fill="#CBDDB0" opacity="0.8" />
          <path d="M196 236 l64 -14 v78 h-70 z" fill="#CBDDB0" opacity="0.85" />
          <ellipse cx="150" cy="250" rx="40" ry="30" fill="#CBDDB0" opacity="0.6" />
          <ellipse cx="60" cy="150" rx="20" ry="16" fill="#C4D9AC" opacity="0.5" />

          {/* urban core */}
          <path
            d="M64 60 C 120 44, 180 52, 206 96 C 214 150, 190 196, 132 212 C 78 210, 48 168, 46 118 C 46 92, 52 72, 64 60 Z"
            fill="#E2E0DB"
          />
          {/* parks */}
          <circle cx="118" cy="118" r="10" fill="#C4D9AC" opacity="0.75" />
          <circle cx="150" cy="150" r="7" fill="#C4D9AC" opacity="0.7" />

          {/* M60 ring motorway */}
          <path
            d="M120 46 C 176 44, 210 84, 208 138 C 206 190, 168 214, 120 214 C 74 214, 44 176, 46 124 C 48 76, 78 48, 120 46 Z"
            fill="none"
            stroke="#EBA35B"
            strokeWidth="4"
          />
          {/* radial A-roads */}
          {[
            "M120 130 L 128 40",
            "M120 130 L 214 96",
            "M120 130 L 224 150",
            "M120 130 L 196 226",
            "M120 130 L 120 292",
            "M120 130 L 44 232",
            "M120 130 L 20 150",
            "M120 130 L 40 60",
          ].map((d, i) => (
            <path key={i} d={d} stroke="#F0B876" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          ))}

          {/* minor streets */}
          {[
            "M60 100 L200 92",
            "M52 150 L206 150",
            "M64 186 L196 190",
            "M96 60 L104 210",
            "M150 56 L156 208",
          ].map((d, i) => (
            <path key={`m${i}`} d={d} stroke="#FFFFFF" strokeWidth="1.3" fill="none" opacity="0.9" />
          ))}

          {/* motorway shields */}
          {[
            [92, 150, "M60"],
            [186, 118, "A6"],
            [128, 246, "A34"],
            [150, 288, "A538"],
          ].map(([x, y, t], i) => (
            <text
              key={i}
              x={x as number}
              y={y as number}
              fontSize="6"
              fontWeight="700"
              fill="#C58A45"
              fontFamily="Arial"
            >
              {t}
            </text>
          ))}

          {/* place labels */}
          {labels.map(([x, y, t, bold], i) => (
            <text
              key={i}
              x={x}
              y={y}
              fontSize={bold ? 9 : 6.5}
              fontWeight={bold ? 700 : 400}
              fill={bold ? "#6B7076" : "#9AA0A6"}
              fontFamily="Arial"
              textAnchor="middle"
            >
              {t}
            </text>
          ))}

          {/* pins */}
          {pins.map((p, i) => (
            <g key={i}>
              <ellipse cx={p.x} cy={p.y + 10} rx="4" ry="1.6" fill="rgba(0,0,0,0.18)" />
              <path
                d={`M${p.x} ${p.y + 9} c -6 -8 -8 -11 -8 -15 a 8 8 0 0 1 16 0 c 0 4 -2 7 -8 15 z`}
                fill={p.c}
                stroke="white"
                strokeWidth="1.2"
              />
              <circle cx={p.x} cy={p.y - 6} r="2.8" fill="white" />
            </g>
          ))}
        </svg>
      )}

      {/* zoom controls */}
      <div className="absolute left-2 top-2 overflow-hidden rounded-[5px] border border-[#CED4DA] bg-white shadow-sm">
        <span className="flex h-5 w-5 items-center justify-center border-b border-[#E9ECEF] text-[12px] font-bold text-[#495057]">
          +
        </span>
        <span className="flex h-5 w-5 items-center justify-center text-[12px] font-bold text-[#495057]">
          −
        </span>
      </div>

      <span className="absolute bottom-2 left-2 rounded bg-[#212529] px-2 py-[3px] text-[9px] font-semibold text-white">
        5 pinned
      </span>

      <span className="absolute bottom-1 right-1 rounded-sm bg-white/80 px-1.5 py-[1px] text-[7px] text-[#5f6368]">
        Leaflet | © OpenStreetMap
      </span>
    </div>
  );
}

/* ── Phone ────────────────────────────────────────────────── */

export function DashboardPhone({
  view = "list",
  caption,
}: {
  view?: "list" | "map";
  caption?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[40px] border border-[#2b3240] bg-[#0e1420] p-2.5 shadow-[var(--shadow-2)]">
        <div className="relative flex h-[560px] flex-col overflow-hidden rounded-[32px] bg-[#F8F9FA]">
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-10 h-[22px] w-[110px] -translate-x-1/2 rounded-b-[14px] bg-[#0e1420]" />

          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-2 text-[9px] font-semibold text-[#495057]">
            <span>9:41</span>
            <span>100%</span>
          </div>

          <AppChrome view={view} />

          {view === "list" ? (
            <div className="flex-1 space-y-2.5 overflow-hidden px-3 pt-2.5">
              {ENQUIRIES.map((e) => {
                const s = STAGE_META[e.stage];
                return (
                  <div key={e.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.06em] text-[#868E96]">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: s.dot }}
                        />
                        {s.label}
                      </span>
                      <span className="text-[9px] text-[#ADB5BD]">1</span>
                    </div>
                    <EnquiryCard e={e} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex-1 overflow-hidden">
              <MapCanvas />
            </div>
          )}
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-center text-[12px] text-[var(--color-ink-faint)]">
          {caption}
        </p>
      )}
    </div>
  );
}

/* ── Desktop ──────────────────────────────────────────────── */

export function DashboardDesktop({ caption }: { caption?: string }) {
  return (
    <div className="mx-auto w-full">
      <div className="rounded-t-[14px] border border-[#2b3240] bg-[#0e1420] p-2 shadow-[var(--shadow-2)]">
        <div className="overflow-hidden rounded-t-[8px] bg-[#F8F9FA]">
          {/* browser bar */}
          <div className="flex items-center gap-2 border-b border-[#E9ECEF] bg-white px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-2 flex flex-1 items-center rounded-full bg-[#F1F3F5] px-3 py-1">
              <span className="text-[10px] text-[#868E96]">
                app.tandemm.co.uk / enquiries
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[150px_1fr]">
            {/* sidebar */}
            <div className="border-r border-[#E9ECEF] bg-white p-3">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#3B5BDB] text-[10px] font-bold text-white">
                  TL
                </span>
                <span className="font-[family-name:var(--font-display)] text-[11px] font-extrabold text-[#212529]">
                  Tradesman Ltd
                </span>
              </div>
              {[
                { l: "Enquiries", n: "5", on: true },
                { l: "Follow-ups", n: "3", on: false },
                { l: "Quotes", n: "", on: false },
                { l: "Calendar", n: "", on: false },
                { l: "Calls", n: "", on: false },
                { l: "Reports", n: "", on: false },
              ].map((i) => (
                <div
                  key={i.l}
                  className={`mb-1 flex items-center justify-between rounded-[7px] px-2.5 py-1.5 text-[11px] font-semibold ${
                    i.on
                      ? "bg-[#3B5BDB] text-white"
                      : "text-[#868E96]"
                  }`}
                >
                  {i.l}
                  {i.n && (
                    <span
                      className={`rounded px-1 text-[9px] font-bold ${
                        i.on ? "bg-white/25 text-white" : "bg-[#F1F3F5] text-[#868E96]"
                      }`}
                    >
                      {i.n}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* main */}
            <div className="p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="font-[family-name:var(--font-display)] text-[15px] font-extrabold text-[#212529]">
                    Enquiries
                  </div>
                  <div className="text-[10px] text-[#868E96]">
                    3 need action, 1 booked this week
                  </div>
                </div>
                <div className="flex gap-2">
                  {["All time", "List", "Map"].map((b, i) => (
                    <span
                      key={b}
                      className={`rounded-[6px] border px-2.5 py-1 text-[10px] font-semibold ${
                        i === 1
                          ? "border-[#E9ECEF] bg-[#F1F3F5] text-[#212529]"
                          : "border-[#E9ECEF] bg-white text-[#868E96]"
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3 grid grid-cols-4 gap-2">
                {[
                  { n: "5", l: "Enquiries", c: "#212529" },
                  { n: "3", l: "Needs action", c: "#B35309" },
                  { n: "1", l: "Booked", c: "#2B7A3F" },
                  { n: "£4,320", l: "Value this week", c: "#3B5BDB" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-[9px] border border-[#E9ECEF] bg-white px-3 py-2"
                  >
                    <div
                      className="font-[family-name:var(--font-display)] text-[17px] font-extrabold leading-none"
                      style={{ color: s.c }}
                    >
                      {s.n}
                    </div>
                    <div className="mt-1 text-[9px] text-[#868E96]">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* table */}
              <div className="overflow-hidden rounded-[9px] border border-[#E9ECEF] bg-white">
                <div className="grid grid-cols-[1.3fr_1fr_0.9fr_auto_auto] gap-2 border-b border-[#E9ECEF] bg-[#F8F9FA] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.05em] text-[#868E96]">
                  <span>Customer</span>
                  <span>Job</span>
                  <span>Area</span>
                  <span>Stage</span>
                  <span>Urgency</span>
                </div>
                {ENQUIRIES.map((e, i) => {
                  const s = STAGE_META[e.stage];
                  const u = URGENCY_META[e.urgency];
                  return (
                    <div
                      key={e.name}
                      className={`grid grid-cols-[1.3fr_1fr_0.9fr_auto_auto] items-center gap-2 px-3 py-2 ${
                        i > 0 ? "border-t border-[#F1F3F5]" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: s.dot }}
                        />
                        <span className="truncate text-[11px] font-bold text-[#212529]">
                          {e.name}
                        </span>
                      </span>
                      <span className="truncate text-[10px] text-[#495057]">
                        {e.job}
                      </span>
                      <span className="truncate text-[10px] text-[#868E96]">
                        {e.postcode} {e.area}
                      </span>
                      <span className="min-w-0">
                        <span
                          className="inline-block whitespace-nowrap rounded px-1.5 py-[2px] text-[8px] font-bold uppercase"
                          style={{ background: s.chipBg, color: s.chipText }}
                        >
                          {s.label}
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span
                          className="inline-block whitespace-nowrap rounded-full px-1.5 py-[2px] text-[8px] font-bold uppercase"
                          style={{ background: u.bg, color: u.text }}
                        >
                          {u.label}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-2 w-[95%] rounded-b-[10px] bg-[#0e1420]" />
      <div className="mx-auto h-1 w-[70%] rounded-b-full bg-[#0e1420]/40" />
      {caption && (
        <p className="mt-4 text-center text-[12px] text-[var(--color-ink-faint)]">
          {caption}
        </p>
      )}
    </div>
  );
}
