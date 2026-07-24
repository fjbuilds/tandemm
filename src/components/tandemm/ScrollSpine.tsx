"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A vertical accent line that grows as the reader scrolls through the
 * wrapped section. Ties multiple sections into one continuous journey.
 */
export function ScrollSpine({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport;
      const seen = viewport - rect.top;
      const p = Math.max(0, Math.min(1, seen / total));
      setProgress(p);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className={cn("scroll-spine", className)}>
      <div className="scroll-spine-track" aria-hidden="true">
        <div
          className="scroll-spine-fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>
      <div className="scroll-spine-content">{children}</div>
    </div>
  );
}

/**
 * A single stop on the spine. Places a diamond node against the line
 * and slots the section content beside it.
 */
export function SpineStop({
  index,
  eyebrow,
  children,
}: {
  index: number;
  eyebrow?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-40% 0px -50% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("spine-stop", active && "is-active")}>
      <div className="spine-stop-marker" aria-hidden="true">
        <span className="spine-stop-diamond" />
        <span className="spine-stop-index">{String(index).padStart(2, "0")}</span>
      </div>
      <div className="spine-stop-body">
        {eyebrow ? <div className="spine-stop-eyebrow">{eyebrow}</div> : null}
        {children}
      </div>
    </div>
  );
}
