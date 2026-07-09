"use client";

import { useRef, useState } from "react";

const SHAPES = [
  { rotateZ: 0, scaleZ: 1 },
  { rotateZ: 25, scaleZ: 1.15 },
  { rotateZ: -18, scaleZ: 0.7 },
];

const RINGS = [
  { size: 176, transform: "rotateX(62deg)" },
  { size: 132, transform: "rotateX(62deg) rotateY(55deg)" },
  { size: 88, transform: "rotateX(62deg) rotateY(110deg)" },
];

export function GeometricBlurMesh({ className = "" }: { className?: string }) {
  const [shapeIndex, setShapeIndex] = useState(0);
  const [blur, setBlur] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: React.MouseEvent<HTMLDivElement>) {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = Math.max(rect.width, rect.height) / 2;
    const proximity = Math.max(0, 1 - distance / maxDistance);
    setBlur(proximity * 5);
  }

  function handlePointerLeave() {
    setBlur(0);
  }

  function handleClick() {
    setShapeIndex((i) => (i + 1) % SHAPES.length);
  }

  const shape = SHAPES[shapeIndex];

  return (
    <div
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Live signal graphic — click to change shape"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className={`cursor-pointer ${className}`}
      style={{
        filter: `blur(${blur}px)`,
        transition: "filter 120ms ease-out",
        perspective: "700px",
      }}
    >
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateZ(${shape.rotateZ}deg) scaleZ(${shape.scaleZ})`,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="mesh-spin relative flex items-center justify-center"
          style={{ width: "176px", height: "176px", transformStyle: "preserve-3d" }}
        >
          {RINGS.map((ring, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary/60"
              style={{
                width: `${ring.size}px`,
                height: `${ring.size}px`,
                transform: ring.transform,
              }}
            />
          ))}
          <div
            className="pulse-dot absolute h-3 w-3 rounded-full bg-primary"
            style={{ transform: "translateZ(1px)" }}
          />
        </div>
      </div>
    </div>
  );
}
