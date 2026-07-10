"use client";

import { useLayoutEffect, useRef } from "react";

/* Mirrors the 3-stage process used elsewhere on the site (Growth Audit /
   Foundation / Engine), previewed here as the hero illustration reveals. */
const PROCESS = [
  { title: "Growth Audit", desc: "Where enquiries leak" },
  { title: "Growth Foundation", desc: "Built to convert" },
  { title: "Growth Engine", desc: "Improves monthly" },
];

type Stop = { p: number; x: number; rotate: number; scale: number; opacity: number };

/* Scroll progress (0-1) drives three tiles:
   - Tile 0 slides in from the left, tile 1 from the right. They meet at
     the exact offsets used in the nav/footer logo mark, so the merged
     pair reads as our actual icon.
   - Tile 2 stays hidden at centre until the expand phase, then appears
     as the third tab so the reveal ends on 3 process cards. */
const TILE_STOPS: Stop[][] = [
  [
    { p: 0, x: -300, rotate: 45, scale: 1, opacity: 1 },
    { p: 0.35, x: -17, rotate: 45, scale: 1, opacity: 1 },
    { p: 0.45, x: -17, rotate: 45, scale: 1, opacity: 1 },
    { p: 0.62, x: -160, rotate: 360, scale: 2.1, opacity: 1 },
    { p: 1, x: -160, rotate: 360, scale: 2.1, opacity: 1 },
  ],
  [
    { p: 0, x: 300, rotate: 45, scale: 1, opacity: 1 },
    { p: 0.35, x: 17, rotate: 45, scale: 1, opacity: 1 },
    { p: 0.45, x: 17, rotate: 45, scale: 1, opacity: 1 },
    { p: 0.62, x: 0, rotate: 360, scale: 2.1, opacity: 1 },
    { p: 1, x: 0, rotate: 360, scale: 2.1, opacity: 1 },
  ],
  [
    { p: 0, x: 0, rotate: 45, scale: 0.001, opacity: 0 },
    { p: 0.45, x: 0, rotate: 45, scale: 0.001, opacity: 0 },
    { p: 0.62, x: 160, rotate: 360, scale: 2.1, opacity: 1 },
    { p: 1, x: 160, rotate: 360, scale: 2.1, opacity: 1 },
  ],
];

const LABEL_STOPS = [
  { p: 0, opacity: 0 },
  { p: 0.55, opacity: 0 },
  { p: 0.7, opacity: 1 },
  { p: 1, opacity: 1 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function sample<K extends string>(stops: ({ p: number } & Record<K, number>)[], p: number, key: K) {
  if (p <= stops[0].p) return stops[0][key];
  for (let i = 0; i < stops.length - 1; i++) {
    const s0 = stops[i];
    const s1 = stops[i + 1];
    if (p >= s0.p && p <= s1.p) {
      const t = s1.p === s0.p ? 0 : (p - s0.p) / (s1.p - s0.p);
      return lerp(s0[key], s1[key], t);
    }
  }
  return stops[stops.length - 1][key];
}

export function BrandTiles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    // Progress is driven by raw scroll distance from the top of the page
    // (not the illustration's own viewport position), so it starts at 0
    // on load and reaches 1 after a fixed, predictable scroll distance.
    const SCROLL_RANGE = 650;

    // Tile positions/sizes are tuned for a 700px-wide container. On
    // narrower screens, scale both the spread (x) and tile size down by
    // the same factor so the layout shrinks uniformly instead of the
    // outer tiles running off-screen or the expanded cards overlapping.
    const REFERENCE_WIDTH = 700;
    const MIN_SPREAD_SCALE = 0.45;

    const update = () => {
      rafRef.current = null;
      if (!containerRef.current) return;
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE));
      const containerWidth = containerRef.current.clientWidth || REFERENCE_WIDTH;
      const spreadScale = Math.min(
        1,
        Math.max(MIN_SPREAD_SCALE, containerWidth / REFERENCE_WIDTH),
      );

      TILE_STOPS.forEach((stops, i) => {
        const x = sample(stops, p, "x") * spreadScale;
        const rotate = sample(stops, p, "rotate");
        const scale = sample(stops, p, "scale") * spreadScale;
        const opacity = sample(stops, p, "opacity");
        const tile = tileRefs.current[i];
        if (tile) {
          tile.style.transform = `translateX(${x}px) rotate(${rotate}deg) scale(${scale})`;
          tile.style.opacity = String(opacity);
        }
      });

      const labelOpacity = sample(LABEL_STOPS, p, "opacity");
      labelRefs.current.forEach((label) => {
        if (label) label.style.opacity = String(labelOpacity);
      });
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="brand-tiles" aria-hidden="true">
      {TILE_STOPS.map((_, i) => (
        <div
          key={i}
          className="brand-tile"
          ref={(node) => {
            tileRefs.current[i] = node;
          }}
        >
          <div
            className="brand-tile-label"
            ref={(node) => {
              labelRefs.current[i] = node;
            }}
          >
            <strong>{PROCESS[i].title}</strong>
            <span>{PROCESS[i].desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
