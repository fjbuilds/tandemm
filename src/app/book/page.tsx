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

const SLOTS = ["09:00", "10:30", "13:00", "15:00", "16:30"];
const WEEKDAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

const TRADES = [
  { value: "", label: "Choose your trade" },
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

const TEAM_SIZE = [
  { value: "", label: "Choose one" },
  { value: "1", label: "Just me" },
  { value: "2-5", label: "2 to 5 people" },
  { value: "5-10", label: "5 to 10 people" },
  { value: "10+", label: "10+ people" },
];

const FLOW_STEPS = [
  { n: 1, title: "Tell us about you", desc: "Site, trade, area. Under two minutes." },
  { n: 2, title: "We prep your audit", desc: "48 hours to score your site, ads and rankings by hand." },
  { n: 3, title: "Pick a follow-up slot", desc: "Book the walkthrough on the calendar below." },
  { n: 4, title: "We walk you through it", desc: "30 minutes. Plain English. No pitch until the end." },
];

const FAQS = [
  {
    q: "Why can't I book a call straight away?",
    a: "The 48-hour window is us going through your site, ads and rankings by hand before we speak. That way the follow-up call is a walkthrough of your actual audit, not a discovery chat where you brief us on your business.",
  },
  {
    q: "Is the audit really free?",
    a: "Yes. It is how we work out whether we can help. No charge, no card, no obligation.",
  },
  {
    q: "Will I get a sales pitch?",
    a: "No hard sell. We give you a straight read on the site, your ads and your rankings. If we can help, we say how. If we can't, we say that too.",
  },
  {
    q: "What do I need to prepare?",
    a: "Nothing. We have been through your site by hand before we speak, so the 30 minutes is you talking about your business, not you briefing us.",
  },
];

export default function BookPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={bookPaletteOverride}
    >
      <Nav active="book" />
      <Suspense fallback={<div className="mx-auto max-w-[1160px] px-6 pt-24 text-center text-[15px] text-[var(--color-ink-muted)]">Loading</div>}>
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
              One route in.
              <br className="hidden sm:inline" />
              Straight to your audit.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Tell us your site and trade. We score everything by hand over
              the next 48 hours. Then you pick the walkthrough slot that
              suits you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FLOW GRAPHIC */}
      <section className="mx-auto max-w-[1160px] px-6 pb-10 pt-6">
        <Reveal>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden border-t-2 border-dashed border-[var(--color-hairline)] lg:block" />
            {FLOW_STEPS.map((s) => (
              <div
                key={s.n}
                className="relative z-10 rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-1)]"
              >
                <div className="mb-2 flex items-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-[11px] font-bold text-white">
                    {s.n}
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

      {/* MAIN FLOW */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-20 pt-4">
        <UnifiedPath prefillWebsite={prefillWebsite} />
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
/*  Unified path: details -> calendar -> confirmation          */
/* ─────────────────────────────────────────────────────────── */

type Step = 1 | 2 | 3;

function UnifiedPath({ prefillWebsite }: { prefillWebsite: string }) {
  const [step, setStep] = useState<Step>(1);
  const [details, setDetails] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: prefillWebsite,
    trade: "",
    teamSize: "",
    postcodes: "",
    services: "",
    notes: "",
  });
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    if (prefillWebsite && !details.website) {
      setDetails((d) => ({ ...d, website: prefillWebsite }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefillWebsite]);

  const detailsOk =
    details.name.trim() &&
    details.business.trim() &&
    details.email.trim() &&
    details.phone.trim() &&
    details.website.trim() &&
    details.trade &&
    details.teamSize &&
    details.postcodes.trim();

  const canBook = selectedDay !== null && selectedTime !== null;

  /* Calendar: today is 15 July 2026 (Wed). Grey out the next 48h. */
  const CAL_MONTH_LABEL = "July 2026";
  const DAYS_IN_MONTH = 31;
  const START_OFFSET = 2; /* July 1 2026 is a Wednesday */
  const TODAY = 15;
  const FIRST_BOOKABLE = 18; /* 48h out */
  const DISABLED_WEEKENDS = new Set([4, 5, 11, 12, 18, 19, 25, 26]);

  const calendarCells = useMemo(() => {
    const blanks = Array.from({ length: START_OFFSET }, () => null);
    const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, []);

  return (
    <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[0.85fr_1.15fr]">
      {/* Left rail: what you get */}
      <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-9 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
        <div className="mb-[22px] inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/[0.14] px-3.5 py-[7px] text-[11px] font-bold uppercase tracking-[0.06em]">
          Free · One route
        </div>
        <div className="mb-1.5 font-[family-name:var(--font-display)] text-[22px] font-bold">
          What you get
        </div>
        <div className="mb-7 text-sm text-white/70">
          A scored audit, in your hands, whatever happens next.
        </div>
        <div className="flex flex-col gap-4">
          {[
            { n: 1, title: "A scored audit of your site", body: "Speed, conversion, tracking. Ranked by impact on jobs." },
            { n: 2, title: "A read on your ads", body: "Structure, waste, and where your budget is going." },
            { n: 3, title: "Local search ranking", body: "Where you sit for the jobs homeowners search in your postcodes." },
            { n: 4, title: "A 30 minute walkthrough", body: "Plain English. You keep the audit either way." },
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
          Questions before you start? Email{" "}
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
              {i < 2 && <span className="h-px flex-1 bg-[var(--color-hairline)]" />}
            </span>
          ))}
        </div>

        {/* STEP 1: details */}
        {step === 1 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Tell us about your business
            </div>
            <div className="mb-6 text-sm text-[var(--color-ink-muted)]">
              Everything we need to score your site and prep the walkthrough.
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Your name"
                placeholder="Jane Smith"
                value={details.name}
                onChange={(e) => setDetails((d) => ({ ...d, name: e.target.value }))}
              />
              <Input
                label="Business name"
                placeholder="Smith & Co"
                value={details.business}
                onChange={(e) => setDetails((d) => ({ ...d, business: e.target.value }))}
              />
              <Input
                label="Email"
                type="email"
                placeholder="jane@business.co.uk"
                value={details.email}
                onChange={(e) => setDetails((d) => ({ ...d, email: e.target.value }))}
              />
              <Input
                label="Mobile"
                type="tel"
                placeholder="07..."
                value={details.phone}
                onChange={(e) => setDetails((d) => ({ ...d, phone: e.target.value }))}
              />
              <div className="sm:col-span-2">
                <Input
                  label="Website"
                  placeholder="yourbusiness.co.uk"
                  value={details.website}
                  onChange={(e) => setDetails((d) => ({ ...d, website: e.target.value }))}
                />
              </div>
              <Select
                label="Your trade"
                options={TRADES}
                value={details.trade}
                onChange={(e) => setDetails((d) => ({ ...d, trade: e.target.value }))}
              />
              <Select
                label="Team size"
                options={TEAM_SIZE}
                value={details.teamSize}
                onChange={(e) => setDetails((d) => ({ ...d, teamSize: e.target.value }))}
              />
              <div className="sm:col-span-2">
                <Input
                  label="Postcodes you cover"
                  placeholder="e.g. SW11, SE22, N16"
                  value={details.postcodes}
                  onChange={(e) => setDetails((d) => ({ ...d, postcodes: e.target.value }))}
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  label="Services you offer (optional)"
                  placeholder="e.g. rewires, EV chargers, emergency callouts"
                  value={details.services}
                  onChange={(e) => setDetails((d) => ({ ...d, services: e.target.value }))}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-medium text-[var(--color-ink-muted)]">
                    Anything else we should know? (optional)
                  </span>
                  <textarea
                    placeholder="Existing agencies, upcoming holidays, jobs you want more or less of..."
                    value={details.notes}
                    onChange={(e) => setDetails((d) => ({ ...d, notes: e.target.value }))}
                    rows={3}
                    className="rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 text-[15px] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]"
                  />
                </label>
              </div>
            </div>
            <div className="mt-7 flex justify-end">
              <ButtonEl
                disabled={!detailsOk}
                onClick={() => detailsOk && setStep(2)}
              >
                Continue to calendar
              </ButtonEl>
            </div>
          </div>
        )}

        {/* STEP 2: calendar */}
        {step === 2 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Pick your walkthrough slot
            </div>
            <div className="mb-2 text-sm text-[var(--color-ink-muted)]">
              {CAL_MONTH_LABEL} · all times London (BST)
            </div>
            <div className="mb-6 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-4 py-3 text-[13px] leading-[1.5] text-[var(--color-ink)]">
              <span className="font-semibold">The next 48 hours are blocked out.</span>{" "}
              We use that time to score your site, ads and rankings by hand,
              so the call is a walkthrough of your actual audit, not a
              discovery chat.
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
                    const inPrepWindow = day >= TODAY && day < FIRST_BOOKABLE;
                    const past = day < TODAY;
                    const weekend = DISABLED_WEEKENDS.has(day);
                    const disabled = past || inPrepWindow || weekend;
                    const selected = selectedDay === day;
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
                          inPrepWindow && "bg-[var(--color-surface-muted)]",
                          !disabled && !selected && "cursor-pointer bg-[var(--color-surface-muted)] text-[var(--color-ink)] hover:border-[var(--color-primary)]",
                          selected && "cursor-pointer bg-[var(--color-primary)] text-[var(--color-on-primary)]",
                        )}
                        aria-label={
                          inPrepWindow
                            ? `July ${day}, blocked for audit prep`
                            : `July ${day}`
                        }
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[var(--color-ink-muted)]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-[var(--color-surface-muted)] opacity-45" />
                    Blocked for audit prep
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-[var(--color-surface-muted)]" />
                    Available
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-[var(--color-primary)]" />
                    Selected
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                  {selectedDay ? `July ${selectedDay}` : "Select a date"}
                </div>
                <div className="flex flex-col gap-2">
                  {selectedDay &&
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
                    ))}
                </div>
              </div>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <ButtonEl variant="ghost" onClick={() => setStep(1)}>
                Back
              </ButtonEl>
              <ButtonEl
                disabled={!canBook}
                onClick={() => canBook && setStep(3)}
              >
                Confirm booking
              </ButtonEl>
            </div>
          </div>
        )}

        {/* STEP 3: confirmation */}
        {step === 3 && (
          <div className="py-2">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--color-success-soft)] text-[var(--color-success)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                You are booked in.
              </div>
              <div className="mx-auto max-w-[440px] text-base leading-[1.55] text-[var(--color-ink-muted)]">
                Walkthrough locked in for July {selectedDay}, 2026 at{" "}
                {selectedTime} (London). Audit prep starts now.
              </div>
            </div>

            <ConfirmationEmailPreview
              to={details.email || "you@yourbusiness.co.uk"}
              name={details.name || "there"}
              business={details.business || "your business"}
              website={details.website || "yourbusiness.co.uk"}
              day={selectedDay ?? undefined}
              time={selectedTime ?? undefined}
            />

            <div className="mx-auto mt-6 max-w-[440px] rounded-[var(--radius-md)] bg-[var(--color-surface-sunken)] p-5 text-left">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                What happens next
              </div>
              <div className="flex flex-col gap-2.5 text-sm leading-[1.5] text-[var(--color-ink)]">
                <div>1. Confirmation email in your inbox, right now.</div>
                <div>2. We score your site, ads and rankings by hand over the next 48 hours.</div>
                <div>3. Walkthrough on July {selectedDay} at {selectedTime}. You keep the audit either way.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Confirmation email preview                                 */
/* ─────────────────────────────────────────────────────────── */

function ConfirmationEmailPreview({
  to,
  name,
  business,
  website,
  day,
  time,
}: {
  to: string;
  name: string;
  business: string;
  website: string;
  day?: number;
  time?: string;
}) {
  return (
    <div className="mx-auto max-w-[520px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-white shadow-[var(--shadow-1)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
          Inbox
        </span>
      </div>
      <div className="border-b border-[var(--color-hairline-soft)] px-5 py-4 text-[12px] text-[var(--color-ink-muted)]">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-[var(--color-ink)]">Tandemm</span>{" "}
            &lt;hello@tandemm.co.uk&gt;
          </div>
          <span>Just now</span>
        </div>
        <div className="mt-1">
          To: <span className="text-[var(--color-ink)]">{to}</span>
        </div>
        <div className="mt-2 font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-ink)]">
          Your Tandemm audit is booked in
        </div>
      </div>
      <div className="px-5 py-5 text-[14px] leading-[1.6] text-[var(--color-ink)]">
        <p>Hi {name},</p>
        <p className="mt-3">
          Confirming your walkthrough for <strong>{business}</strong>
          {day && time ? (
            <>
              {" "}on <strong>July {day}, 2026 at {time}</strong> (London).
            </>
          ) : (
            "."
          )}
        </p>
        <p className="mt-3">
          Between now and then we will be going through {website} by hand,
          scoring the site, your ads and your Google rankings. You will get
          the full audit PDF on the call, yours to keep.
        </p>
        <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-hairline-soft)] bg-[var(--color-surface-muted)] px-4 py-3">
          <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--color-ink-muted)]">
            Your slot
          </div>
          <div className="mt-1 font-[family-name:var(--font-display)] text-[15px] font-bold">
            {day ? `July ${day}, 2026` : "July 2026"}{time ? ` · ${time}` : ""}
          </div>
          <div className="mt-0.5 text-[12px] text-[var(--color-ink-muted)]">
            30 minutes · Video or phone, your choice
          </div>
        </div>
        <p className="mt-4">Any questions before then, just reply to this email.</p>
        <p className="mt-3">
          Speak soon,
          <br />
          The Tandemm team
        </p>
      </div>
    </div>
  );
}
