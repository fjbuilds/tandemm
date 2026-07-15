"use client";

import { CSSProperties, Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { ButtonEl } from "@/components/tandemm/Button";
import { Input } from "@/components/tandemm/Input";
import { Select } from "@/components/tandemm/Select";
import { cn } from "@/lib/utils";

const bookPaletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

/* ── Calendar (July 2026, today = the 15th) ──────────────────────── */
const DAYS_IN_MONTH = 31;
const START_OFFSET = 2; // July 1 2026 falls on a Wednesday
const TODAY = 15;
// We hold back the next 48 hours so we can audit the site before we talk.
const EARLIEST_BOOKABLE = TODAY + 3;
const FULLY_BOOKED = new Set([22, 23, 29, 30]);
const SLOTS = ["09:00", "10:30", "13:00", "15:00", "16:30"];
const WEEKDAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

const TRADES = [
  { value: "", label: "Choose your trade…" },
  { value: "electrical", label: "Electrical" },
  { value: "plumbing", label: "Plumbing / Heating" },
  { value: "roofing", label: "Roofing" },
  { value: "building", label: "Building / Renovation" },
  { value: "landscaping", label: "Landscaping / Driveways" },
  { value: "decorating", label: "Painting / Decorating" },
  { value: "joinery", label: "Joinery / Carpentry" },
  { value: "loft", label: "Loft Conversions / Extensions" },
  { value: "other", label: "Other trade" },
];

const FRUSTRATIONS = [
  { value: "", label: "Choose one…" },
  { value: "few-enquiries", label: "The phone isn't ringing enough" },
  { value: "traffic-no-leads", label: "Homeowners land on the site, but they don't call" },
  { value: "outdated", label: "The site looks dated" },
  { value: "slow", label: "The site is slow or clunky" },
  { value: "no-tracking", label: "I can't tell which ads are earning me money" },
  { value: "other", label: "Something else" },
];

/* ─────────────────────────────────────────────────────────── */
/*  How it works (one route, shown at top of page)             */
/* ─────────────────────────────────────────────────────────── */

const PROCESS_STEPS = [
  { n: 1, title: "Your details", desc: "Your site, trade, area and what's frustrating you.", time: "2 min" },
  { n: 2, title: "Book your chat", desc: "Pick a slot. We hold the next 48 hours to prep.", time: "30 min" },
  { n: 3, title: "We audit first", desc: "We score your site, ads and rankings by hand.", time: "Before we talk" },
  { n: 4, title: "We talk it through", desc: "A straight read and a plan. Yours to keep.", time: "On the call" },
];

const FAQS = [
  {
    q: "Is the audit really free?",
    a: "Yes. It's how we work out whether we can help. No charge, no card, no obligation.",
  },
  {
    q: "Why can't I get on a call sooner?",
    a: "We hold the next 48 hours back on purpose. That's the time we spend going through your site, ads and Google rankings by hand, so the call is a proper read on your business, not a cold intro.",
  },
  {
    q: "Will I get a sales pitch?",
    a: "No hard sell. We give you a straight read on the site, your ads and your rankings. If we can help, we say how. If we can't, we say that too.",
  },
  {
    q: "What do I need to prepare?",
    a: "Nothing. We'll have been through your site by hand before we speak, so the 30 minutes is you talking about your business, not you briefing us.",
  },
];

export default function BookPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={bookPaletteOverride}
    >
      <Nav active="book" />
      <Suspense fallback={<div className="mx-auto max-w-[1160px] px-6 pt-24 text-center text-[15px] text-[var(--color-ink-muted)]">Loading…</div>}>
        <BookContent />
      </Suspense>
      <Footer />
    </div>
  );
}

function BookContent() {
  const searchParams = useSearchParams();
  const prefillWebsite = searchParams.get("website") ?? "";

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section
        className="relative box-border px-6 pb-8 pt-[60px] text-center"
        style={{
          background:
            "radial-gradient(60% 42% at 50% 0%, rgba(226,229,222,0.9), transparent 72%)",
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              Get started, free audit
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              One way in.
              <br className="hidden sm:inline" />
              Built to be worth your time.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Tell us about your business, we audit it by hand before we
              speak, then you book a follow-up chat with the person doing
              the work. Same route for everyone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS GRAPHIC */}
      <section className="mx-auto max-w-[1160px] px-6 pb-10 pt-6">
        <Reveal>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden border-t-2 border-dashed border-[var(--color-hairline)] lg:block" />
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.n}
                className="relative z-10 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-1)]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-[11px] font-bold text-white">
                    {s.n}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-faint)]">
                    {s.time}
                  </span>
                </div>
                <div className="font-[family-name:var(--font-display)] text-[14px] font-bold">
                  {s.title}
                </div>
                <div className="mt-0.5 text-[12px] leading-[1.45] text-[var(--color-ink-muted)]">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-20 pt-6">
        <BookFlow prefillWebsite={prefillWebsite} />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[820px] box-border px-6 pb-[104px] pt-6">
        <Reveal className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
            Before you start
          </h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const open = openFaq === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left text-[17px] font-semibold text-[var(--color-ink)] transition-colors"
                >
                  {item.q}
                  <span className="text-[22px] text-[var(--color-ink-muted)]">
                    {open ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-200 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-[22px] text-base leading-[1.6] text-[var(--color-ink-muted)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  The one route: details → calendar → confirmed              */
/* ─────────────────────────────────────────────────────────── */

type BookStep = 1 | 2 | 3;

function BookFlow({ prefillWebsite }: { prefillWebsite: string }) {
  const [step, setStep] = useState<BookStep>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    website: prefillWebsite,
    trade: "",
    frustration: "",
  });

  useEffect(() => {
    if (prefillWebsite && !form.website) {
      setForm((f) => ({ ...f, website: prefillWebsite }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefillWebsite]);

  const detailsOk =
    form.name.trim() && form.business.trim() && form.email.trim() && form.trade;
  const canConfirm = selectedDay !== null && selectedTime !== null;

  const calendarCells = useMemo(() => {
    const blanks = Array.from({ length: START_OFFSET }, () => null);
    const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, []);

  return (
    <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[0.85fr_1.15fr]">
      {/* Left rail */}
      <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-9 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
        <div className="mb-[22px] inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/[0.14] px-3.5 py-[7px] text-[11px] font-bold uppercase tracking-[0.06em]">
          Free · 30 minutes
        </div>
        <div className="mb-1.5 font-[family-name:var(--font-display)] text-[22px] font-bold">
          Your audit call
        </div>
        <div className="mb-7 text-sm text-white/70">
          Video or phone, your choice
        </div>
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.05em] text-white/55">
          What we'll cover
        </div>
        <div className="flex flex-col gap-4">
          {[
            { n: 1, title: "Where you are now", body: "Your business, your area, the jobs you want more of." },
            { n: 2, title: "Where enquiries go missing", body: "Gaps in your site, ads and Google rankings we found in the audit." },
            { n: 3, title: "What we'd do next", body: "A clear, honest recommendation. Or none, if you don't need us." },
          ].map((item) => (
            <div key={item.n} className="flex items-start gap-3">
              <span className="text-base font-bold text-[var(--color-accent)]">
                {item.n}
              </span>
              <div>
                <div className="text-[15px] font-semibold">{item.title}</div>
                <div className="text-sm leading-[1.5] text-white/70">
                  {item.body}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-7 h-px bg-white/[0.16]" />
        <div className="text-sm leading-[1.55] text-white/70">
          Prefer to talk now? Email{" "}
          <a
            href="mailto:hello@tandemm.co.uk"
            className="font-semibold text-white"
          >
            hello@tandemm.co.uk
          </a>
          .
        </div>
      </div>

      {/* Main */}
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-9 shadow-[var(--shadow-2)]">
        {/* Step indicator */}
        <div className="mb-7 flex items-center gap-2">
          {[1, 2, 3].map((n, i) => (
            <span key={n} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  "h-[9px] w-[9px] rounded-full",
                  step >= n ? "bg-[var(--color-primary)]" : "bg-[var(--color-hairline)]",
                )}
              />
              {i < 2 && (
                <span className="h-px flex-1 bg-[var(--color-hairline)]" />
              )}
            </span>
          ))}
        </div>

        {/* STEP 1, details first */}
        {step === 1 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Tell us about your business
            </div>
            <div className="mb-6 text-sm text-[var(--color-ink-muted)]">
              So we can audit your site by hand before we speak.
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Your name"
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
              <Input
                label="Business name"
                placeholder="Smith & Co"
                value={form.business}
                onChange={(e) => setForm((f) => ({ ...f, business: e.target.value }))}
              />
              <Input
                label="Email"
                type="email"
                placeholder="jane@business.co.uk"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
              <Input
                label="Website"
                placeholder="yourbusiness.co.uk"
                value={form.website}
                onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
              />
              <Select
                label="Your trade"
                options={TRADES}
                value={form.trade}
                onChange={(e) => setForm((f) => ({ ...f, trade: e.target.value }))}
              />
              <Select
                label="Biggest frustration right now"
                options={FRUSTRATIONS}
                value={form.frustration}
                onChange={(e) => setForm((f) => ({ ...f, frustration: e.target.value }))}
              />
            </div>
            <div className="mt-7 flex justify-end">
              <ButtonEl
                disabled={!detailsOk}
                onClick={() => detailsOk && setStep(2)}
              >
                Continue to booking
              </ButtonEl>
            </div>
          </div>
        )}

        {/* STEP 2, integrated calendar */}
        {step === 2 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Book your follow-up chat
            </div>
            <div className="mb-4 text-sm text-[var(--color-ink-muted)]">
              July 2026 · all times London (BST)
            </div>
            <div className="mb-6 flex items-start gap-2.5 rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] px-4 py-3 text-[13px] leading-[1.5] text-[var(--color-ink)]">
              <span className="mt-[2px] shrink-0 text-[var(--color-accent)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <span>
                The next 48 hours are greyed out on purpose. That's the time
                we take to audit your site, ads and rankings properly before
                we talk.
              </span>
            </div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-2 grid grid-cols-7 gap-1.5">
                  {WEEKDAY_LABELS.map((d, i) => (
                    <div
                      key={i}
                      className="text-center text-[11px] font-semibold text-[var(--color-ink-faint)]"
                    >
                      {d}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {calendarCells.map((day, i) => {
                    if (day === null) return <div key={`blank-${i}`} />;
                    const disabled =
                      day < EARLIEST_BOOKABLE || FULLY_BOOKED.has(day);
                    const selected = selectedDay === day;
                    const isToday = day === TODAY;
                    return (
                      <button
                        type="button"
                        key={day}
                        disabled={disabled}
                        onClick={() => {
                          setSelectedDay(day);
                          setSelectedTime(null);
                        }}
                        className={cn(
                          "relative rounded-[var(--radius-sm)] border border-transparent py-2.5 text-center text-sm font-semibold transition-colors",
                          disabled && "cursor-default text-[var(--color-ink-faint)] opacity-45",
                          !disabled && !selected && "cursor-pointer bg-[var(--color-surface-muted)] text-[var(--color-ink)] hover:border-[var(--color-primary)]",
                          selected && "cursor-pointer bg-[var(--color-primary)] text-[var(--color-on-primary)]",
                          isToday && !selected && "ring-1 ring-inset ring-[var(--color-accent)]",
                        )}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-[var(--color-ink-muted)]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-[3px] ring-1 ring-inset ring-[var(--color-accent)]" />
                    Today
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-[var(--color-surface-muted)] opacity-45" />
                    Held back or full
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  {selectedDay ? `July ${selectedDay}` : "Select a date"}
                </div>
                <div className="flex flex-col gap-2">
                  {selectedDay ? (
                    SLOTS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          "rounded-[var(--radius-sm)] border py-[11px] text-center text-sm font-semibold transition-colors",
                          selectedTime === t
                            ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                            : "border-[var(--color-hairline)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-primary)]",
                        )}
                      >
                        {t}
                      </button>
                    ))
                  ) : (
                    <div className="rounded-[var(--radius-sm)] border border-dashed border-[var(--color-hairline)] px-4 py-6 text-center text-[13px] text-[var(--color-ink-faint)]">
                      Pick a day to see open times.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <ButtonEl variant="ghost" onClick={() => setStep(1)}>
                Back
              </ButtonEl>
              <ButtonEl
                disabled={!canConfirm}
                onClick={() => canConfirm && setStep(3)}
              >
                Confirm booking
              </ButtonEl>
            </div>
          </div>
        )}

        {/* STEP 3, confirmation */}
        {step === 3 && (
          <div className="px-0 py-6 text-center">
            <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--color-success-soft)] text-[var(--color-success)]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold">
              You are booked in.
            </div>
            <div className="mx-auto mb-6 max-w-[420px] text-base leading-[1.55] text-[var(--color-ink-muted)]">
              Your audit call is confirmed for July {selectedDay}, 2026 at{" "}
              {selectedTime} (London time). A calendar invite is on its way to
              your inbox now.
            </div>
            <div className="mx-auto max-w-[440px] rounded-[var(--radius-md)] bg-[var(--color-surface-sunken)] p-5 text-left">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                What happens next
              </div>
              <div className="flex flex-col gap-2.5 text-sm leading-[1.5] text-[var(--color-ink)]">
                <div>1. A calendar invite with the video link lands in your inbox now.</div>
                <div>2. We audit your site, ads and Google rankings by hand before we speak.</div>
                <div>3. We call at the agreed time and walk you through what we found.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
