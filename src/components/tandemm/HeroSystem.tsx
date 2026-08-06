"use client";

/**
 * HeroSystem — isometric "one system" scene for the home hero.
 * A central Tandemm hub with four clusters that pop up in sequence
 * (Website → SEO/Reach → Duo app → Fuel), joined by pipes, inside an
 * orbiting ring with floating particles. Pure SVG + CSS animation.
 */

const C = {
  topLight: "#E9EFF6",
  topLit: "#F4F8FC",
  right: "#3B5D77", // front-right face (lit navy)
  left: "#274762", // front-left face (shadow navy)
  hubTop: "#FFFFFF",
  hubRight: "#2E4E67",
  hubLeft: "#20384D",
  accent: "#C1662C",
  accentSoft: "#E1A26C",
  ring: "#2E4E67",
  pipe: "#D6E0EC",
  pipeEdge: "#B7C8D8",
  label: "#FFFFFF",
};

type P = [number, number];

function faces(cx: number, cy: number, hw: number, t: number) {
  const hh = hw / 2;
  const T: P = [cx, cy - hh];
  const R: P = [cx + hw, cy];
  const B: P = [cx, cy + hh];
  const L: P = [cx - hw, cy];
  return {
    top: `${T} ${R} ${B} ${L}`,
    right: `${R} ${B} ${cx},${cy + hh + t} ${cx + hw},${cy + t}`,
    left: `${L} ${B} ${cx},${cy + hh + t} ${cx - hw},${cy + t}`,
    T,
    R,
    B,
    L,
  };
}

/** transform that lays unit-square [0,1]² content flat onto a tile's top face */
function topMatrix(cx: number, cy: number, hw: number) {
  const hh = hw / 2;
  return `matrix(${hw},${-hh},${hw},${hh},${cx - hw},${cy})`;
}

function Tile({
  cx,
  cy,
  hw,
  t,
  top = C.topLight,
  right = C.right,
  left = C.left,
  children,
}: {
  cx: number;
  cy: number;
  hw: number;
  t: number;
  top?: string;
  right?: string;
  left?: string;
  children?: React.ReactNode;
}) {
  const f = faces(cx, cy, hw, t);
  return (
    <g>
      <polygon points={f.left} fill={left} />
      <polygon points={f.right} fill={right} />
      <polygon points={f.top} fill={top} />
      {children}
    </g>
  );
}

/** small icon drawn in [0,1]² and laid onto a tile top */
function TopIcon({
  cx,
  cy,
  hw,
  children,
}: {
  cx: number;
  cy: number;
  hw: number;
  children: React.ReactNode;
}) {
  return (
    <g transform={topMatrix(cx, cy, hw)}>
      <g
        stroke={C.hubRight}
        strokeWidth={0.06}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {children}
      </g>
    </g>
  );
}

type IconFn = (p: { cx: number; cy: number; hw: number }) => React.ReactNode;

/** two distinct chips sitting on a cluster platform — "what you get" */
function ClusterChips({
  cx,
  cy,
  icons,
}: {
  cx: number;
  cy: number;
  icons: [IconFn, IconFn];
}) {
  const hw = 25;
  const a = { cx: cx - 27, cy: cy - 9 }; // back-left chip (taller)
  const b = { cx: cx + 25, cy: cy + 7 }; // front-right chip
  return (
    <>
      <Tile cx={a.cx} cy={a.cy} hw={hw} t={22} top={C.topLit}>
        {icons[0]({ cx: a.cx, cy: a.cy, hw })}
      </Tile>
      <Tile cx={b.cx} cy={b.cy} hw={hw} t={15} top={C.topLit}>
        {icons[1]({ cx: b.cx, cy: b.cy, hw })}
      </Tile>
    </>
  );
}

/* ── cluster top-face icons: each shows what that layer delivers ── */
// Website: a built site
const iconWebsite: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <rect x={0.24} y={0.24} width={0.52} height={0.5} rx={0.06} />
    <path d="M0.24 0.36 H0.76" />
    <rect x={0.3} y={0.44} width={0.4} height={0.08} rx={0.02} fill={C.accent} stroke="none" />
    <path d="M0.3 0.6 H0.62" />
  </TopIcon>
);
// Website: laptop screen
const iconGallery: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    {/* laptop base */}
    <path d="M0.22 0.72 H0.78" />
    {/* screen frame */}
    <rect x={0.28} y={0.28} width={0.44} height={0.36} rx={0.04} />
    {/* url bar */}
    <path d="M0.28 0.38 H0.72" />
    <rect x={0.34} y={0.44} width={0.32} height={0.06} rx={0.02} fill={C.accent} stroke="none" />
    <path d="M0.34 0.56 H0.6" />
  </TopIcon>
);
// SEO: search
const iconSearch: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <circle cx={0.44} cy={0.42} r={0.16} />
    <path d="M0.56 0.54 L0.7 0.68" />
    <circle cx={0.44} cy={0.42} r={0.06} fill={C.accent} stroke="none" />
  </TopIcon>
);
// SEO: climbing rank
const iconRank: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <rect x={0.28} y={0.56} width={0.11} height={0.18} rx={0.02} />
    <rect x={0.45} y={0.44} width={0.11} height={0.3} rx={0.02} />
    <rect x={0.62} y={0.3} width={0.11} height={0.44} rx={0.02} fill={C.accent} stroke="none" />
  </TopIcon>
);
// Duo: enquiry phone
const iconPhone: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <rect x={0.36} y={0.24} width={0.3} height={0.5} rx={0.05} />
    <path d="M0.44 0.34 H0.58" />
    <circle cx={0.62} cy={0.26} r={0.05} fill={C.accent} stroke="none" />
  </TopIcon>
);
// Duo: enquiry / chat
const iconChat: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <path d="M0.26 0.3 H0.74 V0.6 H0.5 L0.4 0.72 V0.6 H0.26 Z" />
    <circle cx={0.4} cy={0.45} r={0.025} fill={C.accent} stroke="none" />
    <circle cx={0.5} cy={0.45} r={0.025} fill={C.accent} stroke="none" />
    <circle cx={0.6} cy={0.45} r={0.025} fill={C.accent} stroke="none" />
  </TopIcon>
);
// Fuel: ads spark
const iconFuel: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <path d="M0.52 0.24 L0.36 0.52 H0.5 L0.44 0.76 L0.64 0.44 H0.5 Z" fill={C.accent} stroke={C.accent} />
  </TopIcon>
);
// Fuel: lead volume dial
const iconVolume: IconFn = ({ cx, cy, hw }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <rect x={0.28} y={0.6} width={0.09} height={0.14} rx={0.02} />
    <rect x={0.41} y={0.5} width={0.09} height={0.24} rx={0.02} />
    <rect x={0.54} y={0.4} width={0.09} height={0.34} rx={0.02} />
    <rect x={0.67} y={0.3} width={0.09} height={0.44} rx={0.02} fill={C.accent} stroke="none" />
  </TopIcon>
);

/* floating label on the ground plane beside a cluster */
function GroundLabel({
  x,
  y,
  text,
  dir,
}: {
  x: number;
  y: number;
  text: string;
  dir: "left" | "right";
}) {
  const matrix = dir === "left" ? "matrix(1,0.5,0,1," : "matrix(1,-0.5,0,1,";
  return (
    <text
      transform={`${matrix}${x},${y})`}
      textAnchor={dir === "left" ? "end" : "start"}
      fontFamily="Archivo, sans-serif"
      fontWeight={800}
      fontSize={15}
      letterSpacing="0.06em"
      fill={C.hubLeft}
    >
      {text}
    </text>
  );
}

/* ── cluster: platform + chips + floating label ─────────────── */
function Cluster({
  cx,
  cy,
  label,
  labelX,
  labelY,
  labelDir,
  icons,
  cls,
}: {
  cx: number;
  cy: number;
  label: string;
  labelX: number;
  labelY: number;
  labelDir: "left" | "right";
  icons: [IconFn, IconFn];
  cls: string;
}) {
  return (
    <g className={`iso-cluster ${cls}`}>
      <Tile cx={cx} cy={cy} hw={66} t={13} />
      <ClusterChips cx={cx} cy={cy - 4} icons={icons} />
      <GroundLabel x={labelX} y={labelY} text={label} dir={labelDir} />
    </g>
  );
}

export function HeroSystem() {
  // pipe from hub to a cluster point (rounded elbow)
  const pipe = (x1: number, y1: number, x2: number, y2: number) => {
    const mx = (x1 + x2) / 2;
    return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  };
  const ringPath = "M320,235 a230,110 0 1,0 0.1,0"; // ellipse path for orbit dot

  return (
    <div className="hero-iso" aria-hidden="true">
      <svg viewBox="30 112 690 394" className="hero-iso-svg" role="img">
        {/* orbiting ring */}
        <ellipse
          cx={320}
          cy={345}
          rx={252}
          ry={118}
          fill="none"
          stroke={C.ring}
          strokeOpacity={0.35}
          strokeWidth={6}
        />

        {/* pipes hub → clusters */}
        <g fill="none" strokeLinecap="round">
          {[
            [255, 300, 165, 250],
            [385, 300, 475, 270],
            [270, 335, 185, 400],
            [370, 335, 480, 405],
          ].map((p, i) => (
            <g key={i}>
              <path d={pipe(p[0], p[1], p[2], p[3])} stroke={C.pipeEdge} strokeWidth={11} />
              <path d={pipe(p[0], p[1], p[2], p[3])} stroke={C.pipe} strokeWidth={7} />
            </g>
          ))}
        </g>

        {/* BACK clusters */}
        <Cluster
          cx={165}
          cy={250}
          label="WEBSITE"
          labelX={150}
          labelY={180}
          labelDir="left"
          icons={[iconWebsite, iconGallery]}
          cls="iso-c1"
        />
        <Cluster
          cx={478}
          cy={272}
          label="TANDEMM REACH"
          labelX={512}
          labelY={180}
          labelDir="right"
          icons={[iconRank, iconSearch]}
          cls="iso-c2"
        />

        {/* HUB */}
        <g className="iso-hub">
          {/* base platform */}
          <Tile cx={320} cy={330} hw={118} t={12} top={C.topLight} />
          {/* raised chip */}
          <g transform="translate(0,-34)">
            <Tile cx={320} cy={318} hw={92} t={30} top={C.hubTop} right={C.hubRight} left={C.hubLeft} />
            {/* Tandemm favicon mark, kept at right-angle (not skewed
                onto the isometric top face) so the two diamonds read
                cleanly. Sits centred on the raised hub chip. */}
            <g transform="translate(320 318) scale(0.14) translate(-500 -500)">
              <path
                d="M350,260 L590,500 L350,740 L110,500 Z M650,260 L890,500 L650,740 L410,500 Z"
                fill="#0B1220"
              />
            </g>
          </g>
        </g>

        {/* FRONT clusters */}
        <Cluster
          cx={185}
          cy={400}
          label="DUO"
          labelX={150}
          labelY={476}
          labelDir="left"
          icons={[iconChat, iconPhone]}
          cls="iso-c3"
        />
        <Cluster
          cx={480}
          cy={406}
          label="TANDEMM FUEL"
          labelX={512}
          labelY={476}
          labelDir="right"
          icons={[iconVolume, iconFuel]}
          cls="iso-c4"
        />

        {/* orbiting dot */}
        <circle r={7} fill={C.accent}>
          <animateMotion dur="7s" repeatCount="indefinite" path={ringPath} rotate="auto" />
        </circle>

        {/* floating particles */}
        <g className="iso-particles">
          {[
            [105, 205, C.accent],
            [558, 205, C.ring],
            [120, 420, C.ring],
            [545, 435, C.accent],
            [305, 158, C.accentSoft],
            [80, 330, C.ring],
            [582, 330, C.accentSoft],
          ].map((p, i) => (
            <g key={i} transform={`translate(${p[0]},${p[1]})`}>
              <path
                d="M0,-6 L5,3 L-5,3 Z"
                fill={p[2] as string}
                fillOpacity={0.85}
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
