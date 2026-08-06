"use client";

import { useEffect, useRef, useState } from "react";

/* Organic, non-linear connector that draws itself in as it scrolls into view.
 * Alternating direction gives an irregular hand-drawn feel rather than a
 * straight spine. */
export function FlowConnector({ flip = false }: { flip?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Irregular, wandering curve. not a symmetric S.
  const d = flip
    ? "M70,2 C74,26 96,30 88,48 C82,62 58,64 62,86 C64,100 78,104 74,118"
    : "M50,2 C46,26 24,30 32,48 C38,62 62,64 58,86 C56,100 42,104 46,118";

  return (
    <div className="v2-flow-connector" aria-hidden="true">
      <svg
        ref={ref}
        viewBox="0 0 120 120"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className={drawn ? "is-drawn" : ""}
      >
        <path
          className="v2-flow-connector-path"
          d={d}
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          className="v2-flow-connector-dot"
          cx={flip ? 74 : 46}
          cy="118"
          r="4"
          fill="var(--color-accent)"
        />
      </svg>
    </div>
  );
}
