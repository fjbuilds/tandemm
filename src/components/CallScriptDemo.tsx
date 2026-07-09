"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowLeft, IconRefresh } from "./Icons";

const AUTO_ADVANCE_MS = 8000;
const OPENER = "Hi, it's Alex from Ringside — got 30 seconds before you go?";

const objections = [
  {
    label: "Not interested",
    objection: "We're not interested, thanks.",
    response:
      "Of course you're not interested. Most people in your position have been burnt by promises that went nowhere. What we do is different.",
  },
  {
    label: "Already sorted",
    objection: "We've already got something in place for this.",
    response:
      "Totally fair — most teams say that right up until the renewal lands on their desk. Can I ask what's working well with what you've got?",
  },
  {
    label: "Sales call?",
    objection: "Is this a sales call?",
    response:
      "It's not a pitch, it's two minutes to see if this is even relevant to you. If it's not, I'll say so myself.",
  },
];

type Message = {
  id: number;
  speaker: "rep" | "prospect";
  text: string;
};

function ConversationBubble({ message }: { message: Message }) {
  const [visible, setVisible] = useState(false);
  const isRep = message.speaker === "rep";

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 20);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div
      className={`flex flex-col gap-1 transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${isRep ? "items-start" : "items-end"}`}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        {isRep ? "You" : "Prospect"}
      </span>
      <p
        className={`max-w-[88%] rounded-2xl px-4 py-3 font-serif text-sm italic leading-[1.5] sm:text-base ${
          isRep
            ? "bg-primary/10 text-foreground"
            : "bg-foreground/10 text-muted-foreground"
        }`}
      >
        &ldquo;{message.text}&rdquo;
      </p>
    </div>
  );
}

export function CallScriptDemo({ className = "" }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playToken, setPlayToken] = useState(0);
  const [log, setLog] = useState<Message[]>([]);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  const idRef = useRef(0);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  function play(index: number) {
    setActiveIndex(index);
    setPlayToken((t) => t + 1);
  }

  useEffect(() => {
    const timers: number[] = [];
    let cancelled = false;

    const append = (speaker: Message["speaker"], text: string) => {
      if (cancelled) return;
      idRef.current += 1;
      setLog((prev) => [...prev, { id: idRef.current, speaker, text }]);
    };

    const runWhenActive = (delay: number, fn: () => void) => {
      const check = () => {
        if (cancelled) return;
        if (pausedRef.current) {
          timers.push(window.setTimeout(check, 250));
        } else {
          fn();
        }
      };
      timers.push(window.setTimeout(check, delay));
    };

    timers.push(
      window.setTimeout(() => {
        if (!cancelled) setLog([]);
      }, 0),
    );
    runWhenActive(300, () => append("rep", OPENER));
    runWhenActive(1700, () => append("prospect", objections[activeIndex].objection));
    runWhenActive(3300, () => append("rep", objections[activeIndex].response));
    runWhenActive(AUTO_ADVANCE_MS, () => {
      setActiveIndex((i) => (i + 1) % objections.length);
    });

    return () => {
      cancelled = true;
      timers.forEach(window.clearTimeout);
    };
  }, [activeIndex, playToken]);

  return (
    <div
      className={`rounded-[22px] border border-border bg-card px-6 pb-8 pt-7 sm:px-8 sm:pb-9 sm:pt-8 ${className}`}
      style={{ boxShadow: "0 80px 120px -20px rgba(0,0,0,0.85)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-lg font-semibold text-card-foreground sm:text-xl">
          Live deal guidance
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() =>
              play((activeIndex - 1 + objections.length) % objections.length)
            }
            aria-label="Previous objection"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-foreground/10 transition-colors duration-200 ease-out hover:bg-foreground/15"
          >
            <IconArrowLeft className="h-4 w-4 text-muted-foreground" />
          </button>
          <button
            type="button"
            onClick={() => play(0)}
            aria-label="Reset demo"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-foreground/10 transition-colors duration-200 ease-out hover:bg-foreground/15"
          >
            <IconRefresh className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        {objections.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i <= activeIndex ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="mb-6 flex gap-2" role="tablist" aria-label="Objection bank">
        {objections.map((obj, i) => (
          <button
            key={obj.label}
            type="button"
            role="tab"
            aria-selected={activeIndex === i}
            onClick={() => play(i)}
            className={`flex-1 cursor-pointer rounded-xl px-3 py-3 text-left text-xs font-medium transition-colors duration-200 ease-out sm:text-sm ${
              activeIndex === i
                ? "border border-primary/30 bg-primary/10 text-primary"
                : "border border-transparent bg-foreground/5 text-muted-foreground hover:bg-foreground/10"
            }`}
          >
            {obj.label}
          </button>
        ))}
      </div>

      <div
        className="relative h-[200px] overflow-hidden rounded-2xl bg-foreground/5 px-5 py-4 sm:h-[220px] sm:px-6"
        aria-live="polite"
      >
        <div className="flex h-full flex-col justify-end gap-3">
          {log.map((message) => (
            <ConversationBubble key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}
