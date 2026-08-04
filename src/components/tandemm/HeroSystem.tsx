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

/** label on the front-right face, reading up to the right */
function FaceLabel({
  cx,
  cy,
  hw,
  t,
  text,
  size = 11,
}: {
  cx: number;
  cy: number;
  hw: number;
  t: number;
  text: string;
  size?: number;
}) {
  const hh = hw / 2;
  const mx = cx + hw * 0.42;
  const my = cy + hh * 0.42 + t * 0.62;
  return (
    <text
      transform={`matrix(1,-0.5,0,1,${mx},${my})`}
      textAnchor="end"
      fontFamily="Archivo, sans-serif"
      fontWeight={800}
      fontSize={size}
      letterSpacing="0.04em"
      fill={C.label}
    >
      {text}
    </text>
  );
}

/** two small chips sitting on a cluster platform */
function ClusterChips({
  cx,
  cy,
  icon,
}: {
  cx: number;
  cy: number;
  icon: (p: { cx: number; cy: number; hw: number }) => React.ReactNode;
}) {
  const hw = 24;
  const t = 16;
  const a = { cx: cx - 26, cy: cy - 8 };
  const b = { cx: cx + 24, cy: cy + 6 };
  return (
    <>
      <Tile cx={a.cx} cy={a.cy} hw={hw} t={t} top={C.topLit}>
        {icon({ cx: a.cx, cy: a.cy, hw })}
      </Tile>
      <Tile cx={b.cx} cy={b.cy} hw={hw} t={t} top={C.topLit}>
        {icon({ cx: b.cx, cy: b.cy, hw })}
      </Tile>
    </>
  );
}

/* ── cluster top-face icons ─────────────────────────────────── */
const iconWebsite = ({ cx, cy, hw }: { cx: number; cy: number; hw: number }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <rect x={0.24} y={0.26} width={0.52} height={0.46} rx={0.06} />
    <path d="M0.24 0.4 H0.76" />
    <circle cx={0.32} cy={0.33} r={0.02} fill={C.accent} stroke="none" />
  </TopIcon>
);
const iconSeo = ({ cx, cy, hw }: { cx: number; cy: number; hw: number }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <circle cx={0.42} cy={0.42} r={0.16} />
    <path d="M0.54 0.54 L0.68 0.68" />
    <path d="M0.3 0.7 L0.42 0.58 L0.5 0.64 L0.66 0.46" stroke={C.accent} />
  </TopIcon>
);
const iconDuo = ({ cx, cy, hw }: { cx: number; cy: number; hw: number }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <rect x={0.34} y={0.24} width={0.32} height={0.5} rx={0.06} />
    <circle cx={0.5} cy={0.63} r={0.03} fill={C.accent} stroke="none" />
    <path d="M0.42 0.36 H0.58" stroke={C.accent} />
  </TopIcon>
);
const iconFuel = ({ cx, cy, hw }: { cx: number; cy: number; hw: number }) => (
  <TopIcon cx={cx} cy={cy} hw={hw}>
    <path d="M0.52 0.24 L0.36 0.52 H0.5 L0.44 0.76 L0.64 0.44 H0.5 Z" fill={C.accent} stroke={C.accent} />
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
  icon,
  cls,
}: {
  cx: number;
  cy: number;
  label: string;
  labelX: number;
  labelY: number;
  labelDir: "left" | "right";
  icon: (p: { cx: number; cy: number; hw: number }) => React.ReactNode;
  cls: string;
}) {
  return (
    <g className={`iso-cluster ${cls}`}>
      <Tile cx={cx} cy={cy} hw={66} t={13} />
      <ClusterChips cx={cx} cy={cy - 4} icon={icon} />
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
      <svg viewBox="0 0 640 560" className="hero-iso-svg" role="img">
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
          labelY={172}
          labelDir="left"
          icon={iconWebsite}
          cls="iso-c1"
        />
        <Cluster
          cx={478}
          cy={272}
          label="TANDEMM REACH"
          labelX={512}
          labelY={196}
          labelDir="right"
          icon={iconSeo}
          cls="iso-c2"
        />

        {/* HUB */}
        <g className="iso-hub">
          {/* base platform */}
          <Tile cx={320} cy={330} hw={118} t={12} top={C.topLight} />
          {/* raised chip */}
          <g transform="translate(0,-34)">
            <Tile cx={320} cy={318} hw={92} t={30} top={C.hubTop} right={C.hubRight} left={C.hubLeft}>
              <FaceLabel cx={320} cy={318} hw={92} t={30} text="TANDEMM" size={15} />
            </Tile>
            {/* dot grid + diamond mark on top */}
            <g transform={topMatrix(320, 318, 92)}>
              {Array.from({ length: 5 }).map((_, r) =>
                Array.from({ length: 5 }).map((__, c) => (
                  <circle
                    key={`${r}-${c}`}
                    cx={0.28 + c * 0.11}
                    cy={0.16 + r * 0.11}
                    r={0.012}
                    fill={C.ring}
                    fillOpacity={0.5}
                  />
                )),
              )}
              <rect
                x={0.4}
                y={0.55}
                width={0.2}
                height={0.2}
                rx={0.03}
                transform="rotate(45 0.5 0.65)"
                fill={C.accent}
              />
            </g>
          </g>
        </g>

        {/* FRONT clusters */}
        <Cluster
          cx={185}
          cy={400}
          label="DUO APP"
          labelX={150}
          labelY={470}
          labelDir="left"
          icon={iconDuo}
          cls="iso-c3"
        />
        <Cluster
          cx={480}
          cy={406}
          label="TANDEMM FUEL"
          labelX={512}
          labelY={476}
          labelDir="right"
          icon={iconFuel}
          cls="iso-c4"
        />

        {/* orbiting dot */}
        <circle r={7} fill={C.accent}>
          <animateMotion dur="7s" repeatCount="indefinite" path={ringPath} rotate="auto" />
        </circle>

        {/* floating particles */}
        <g className="iso-particles">
          {[
            [90, 200, C.accent],
            [560, 190, C.ring],
            [110, 430, C.ring],
            [545, 430, C.accent],
            [330, 120, C.accentSoft],
            [40, 320, C.ring],
            [600, 330, C.accentSoft],
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
