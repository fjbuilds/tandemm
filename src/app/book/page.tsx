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

const DAYS_IN_MONTH = 31;
const START_OFFSET = 2;
const DISABLED_DAYS = new Set([4, 5, 11, 12, 18, 19, 25, 26]);
const PAST_CUTOFF = 6;
const SLOTS = ["09:00", "10:30", "13:00", "15:00", "16:30"];
const WEEKDAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

const FRUSTRATIONS = [
  { value: "", label: "Choose one…" },
  { value: "few-enquiries", label: "The phone isn't ringing enough" },
  { value: "traffic-no-leads", label: "Homeowners land on the site, but they don't call" },
  { value: "outdated", label: "The site looks dated" },
  { value: "slow", label: "The site is slow or clunky" },
  { value: "no-tracking", label: "I can't tell which ads are earning me money" },
  { value: "other", label: "Something else" },
];

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

const TEAM_SIZE = [
  { value: "", label: "Choose one…" },
  { value: "1", label: "Just me" },
  { value: "2-5", label: "2–5 people" },
  { value: "5-10", label: "5–10 people" },
  { value: "10+", label: "10+ people" },
];

const AD_SPEND = [
  { value: "", label: "Choose one…" },
  { value: "none", label: "Nothing yet" },
  { value: "under-500", label: "Under £500/mo" },
  { value: "500-1000", label: "£500–£1,000/mo" },
  { value: "1000-2500", label: "£1,000–£2,500/mo" },
  { value: "2500+", label: "£2,500+/mo" },
];

/* ─────────────────────────────────────────────────────────── */
/*  Signup process steps (shown at top of page)                */
/* ─────────────────────────────────────────────────────────── */

const SIGNUP_STEPS = [
  { n: 1, title: "Free audit", desc: "We check your site, ads and rankings by hand.", time: "Same week" },
  { n: 2, title: "You decide", desc: "Book a call, or fill it in yourself.", time: "30 min" },
  { n: 3, title: "We build", desc: "Site rebuild, tracking, ads, dashboard.", time: "10–14 days" },
  { n: 4, title: "Phone rings", desc: "LSA + CPC live. Enquiries in one place.", time: "Ongoing" },
];

const FAQS = [
  {
    q: "Is the audit really free?",
    a: "Yes. It's how we work out whether we can help. No charge, no card, no obligation.",
  },
  {
    q: "Will I get a sales pitch?",
    a: "No hard sell. We give you a straight read on the site, your ads and your rankings. If we can help, we say how. If we can't, we say that too.",
  },
  {
    q: "What do I need to prepare?",
    a: "Nothing. We'll have been through your site by hand before we speak, so the 30 minutes is you talking about your business, not you briefing us.",
  },
  {
    q: "Book a call or do it myself — which should I choose?",
    a: "Book a call if you have questions or want to talk it through. Do it yourself if you already know you want in and just want us to get started. Same outcome, either way.",
  },
];

type Path = "book" | "self";

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

  const [path, setPath] = useState<Path>("book");
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
            <div className="mb-7 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white/70 px-3.5 py-[7px] text-[13px] font-semibold tracking-[0.02em] text-[var(--color-ink-muted)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Get started — free audit
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Two ways to start.
              <br className="hidden sm:inline" />
              Same free audit at the end.
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              Book 30 minutes with the person doing the work, or fill it in
              yourself and we'll get everything set up in the background.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SIGNUP PROCESS GRAPHIC */}
      <section className="mx-auto max-w-[1160px] px-6 pb-10 pt-6">
        <Reveal>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden border-t-2 border-dashed border-[var(--color-hairline)] lg:block" />
            {SIGNUP_STEPS.map((s) => (
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

      {/* PATH TOGGLE */}
      <section className="mx-auto max-w-[1160px] px-6 pt-4">
        <div className="mx-auto flex w-fit rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-1 shadow-[var(--shadow-1)]">
          <button
            type="button"
            onClick={() => setPath("book")}
            className={cn(
              "rounded-[var(--radius-pill)] px-5 py-2.5 text-[14px] font-semibold transition-colors",
              path === "book"
                ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
            )}
          >
            📞 Book a call
          </button>
          <button
            type="button"
            onClick={() => setPath("self")}
            className={cn(
              "rounded-[var(--radius-pill)] px-5 py-2.5 text-[14px] font-semibold transition-colors",
              path === "self"
                ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
            )}
          >
            ✍️ Do it yourself
          </button>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1160px] box-border px-6 pb-20 pt-8">
        {path === "book" ? (
          <BookPath prefillWebsite={prefillWebsite} />
        ) : (
          <SelfPath prefillWebsite={prefillWebsite} />
        )}
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
/*  Book-a-call path                                           */
/* ─────────────────────────────────────────────────────────── */

type BookStep = 1 | 2 | 3;

function BookPath({ prefillWebsite }: { prefillWebsite: string }) {
  const [step, setStep] = useState<BookStep>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    website: prefillWebsite,
    frustration: "",
  });

  useEffect(() => {
    if (prefillWebsite && !form.website) {
      setForm((f) => ({ ...f, website: prefillWebsite }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefillWebsite]);

  const canContinue = selectedDay !== null && selectedTime !== null;

  const calendarCells = useMemo(() => {
    const blanks = Array.from({ length: START_OFFSET }, () => null);
    const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, []);

  return (
    <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[0.85fr_1.15fr]">
      {/* Left */}
      <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-9 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
        <div className="mb-[22px] inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/[0.14] px-3.5 py-[7px] text-[11px] font-bold uppercase tracking-[0.06em]">
          Free · 30 minutes
        </div>
        <div className="mb-1.5 font-[family-name:var(--font-display)] text-[22px] font-bold">
          Discovery call
        </div>
        <div className="mb-7 text-sm text-white/70">
          30 min · Video or phone, your choice
        </div>
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.05em] text-white/55">
          What we'll cover
        </div>
        <div className="flex flex-col gap-4">
          {[
            { n: 1, title: "Where you are now", body: "Your business, your area, the jobs you want more of." },
            { n: 2, title: "Where enquiries go missing", body: "Gaps in your site, ads and Google rankings we can already see." },
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

      {/* Right */}
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-9 shadow-[var(--shadow-2)]">
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

        {step === 1 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Pick a time that suits you
            </div>
            <div className="mb-6 text-sm text-[var(--color-ink-muted)]">
              July 2026 · all times London (BST)
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
                    const disabled = DISABLED_DAYS.has(day) || day <= PAST_CUTOFF;
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
                          "rounded-[var(--radius-sm)] border border-transparent py-2.5 text-center text-sm font-semibold transition-colors",
                          disabled && "cursor-default text-[var(--color-ink-faint)] opacity-45",
                          !disabled && !selected && "cursor-pointer bg-[var(--color-surface-muted)] text-[var(--color-ink)] hover:border-[var(--color-primary)]",
                          selected && "cursor-pointer bg-[var(--color-primary)] text-[var(--color-on-primary)]",
                        )}
                      >
                        {day}
                      </button>
                    );
                  })}
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
            <div className="mt-7 flex justify-end">
              <ButtonEl
                disabled={!canContinue}
                onClick={() => canContinue && setStep(2)}
              >
                Continue
              </ButtonEl>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              A few quick details
            </div>
            <div className="mb-2 text-sm text-[var(--color-ink-muted)]">
              So we can look at your site before we speak.
            </div>
            <div className="mb-6 text-sm font-semibold text-[var(--color-accent-hover)]">
              July {selectedDay}, 2026 at {selectedTime} · 30 min
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
            </div>
            <div className="mt-4">
              <Select
                label="What's your biggest frustration right now?"
                options={FRUSTRATIONS}
                value={form.frustration}
                onChange={(e) => setForm((f) => ({ ...f, frustration: e.target.value }))}
              />
            </div>
            <div className="mt-7 flex items-center justify-between">
              <ButtonEl variant="ghost" onClick={() => setStep(1)}>
                ← Back
              </ButtonEl>
              <ButtonEl onClick={() => setStep(3)}>Confirm booking</ButtonEl>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="px-0 py-6 text-center">
            <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--color-success-soft)] text-[30px] text-[var(--color-success)]">
              ✓
            </div>
            <div className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold">
              You're booked in.
            </div>
            <div className="mx-auto mb-6 max-w-[400px] text-base leading-[1.55] text-[var(--color-ink-muted)]">
              Your audit call is confirmed for July {selectedDay}, 2026 at{" "}
              {selectedTime} (London time). The invite is on its way to your
              inbox now.
            </div>
            <div className="mx-auto max-w-[420px] rounded-[var(--radius-md)] bg-[var(--color-surface-sunken)] p-5 text-left">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                What happens next
              </div>
              <div className="flex flex-col gap-2.5 text-sm leading-[1.5] text-[var(--color-ink)]">
                <div>1 · A calendar invite lands in your inbox with the video link.</div>
                <div>2 · We audit your site, ads and Google rankings by hand before we speak.</div>
                <div>3 · We call at the agreed time. No prep needed on your end.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Self-serve path (quick form → video → detailed form)       */
/* ─────────────────────────────────────────────────────────── */

type SelfStep = 1 | 2 | 3 | 4;

function SelfPath({ prefillWebsite }: { prefillWebsite: string }) {
  const [step, setStep] = useState<SelfStep>(1);
  const [quick, setQuick] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: prefillWebsite,
  });
  const [details, setDetails] = useState({
    trade: "",
    teamSize: "",
    postcodes: "",
    services: "",
    adSpend: "",
    goals: "",
    notes: "",
  });

  useEffect(() => {
    if (prefillWebsite && !quick.website) {
      setQuick((q) => ({ ...q, website: prefillWebsite }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefillWebsite]);

  const quickOk =
    quick.name.trim() &&
    quick.business.trim() &&
    quick.email.trim() &&
    quick.phone.trim();

  const detailsOk = details.trade && details.teamSize && details.postcodes.trim();

  return (
    <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[0.85fr_1.15fr]">
      {/* Left rail */}
      <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-9 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
        <div className="mb-[22px] inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/[0.14] px-3.5 py-[7px] text-[11px] font-bold uppercase tracking-[0.06em]">
          Free · Self-serve
        </div>
        <div className="mb-1.5 font-[family-name:var(--font-display)] text-[22px] font-bold">
          Do it yourself
        </div>
        <div className="mb-7 text-sm text-white/70">
          10 minutes · we take it from there
        </div>
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.05em] text-white/55">
          How it works
        </div>
        <div className="flex flex-col gap-4">
          {[
            { n: 1, title: "Quick details", body: "Name, business, email, phone. Under a minute." },
            { n: 2, title: "Watch the 2-min video", body: "How the system works, top to bottom." },
            { n: 3, title: "Tell us the details", body: "Trade, team, postcodes, current ad spend." },
            { n: 4, title: "We take it from there", body: "Audit within the week. Site build starts on your say-so." },
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
          Rather talk it through? Switch to <span className="font-semibold text-white">Book a call</span> above.
        </div>
      </div>

      {/* Main */}
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-9 shadow-[var(--shadow-2)]">
        {/* Step indicator */}
        <div className="mb-7 flex items-center gap-2">
          {[1, 2, 3, 4].map((n, i) => (
            <span key={n} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  "h-[9px] w-[9px] rounded-full",
                  step >= n ? "bg-[var(--color-primary)]" : "bg-[var(--color-hairline)]",
                )}
              />
              {i < 3 && <span className="h-px flex-1 bg-[var(--color-hairline)]" />}
            </span>
          ))}
        </div>

        {/* STEP 1 — quick details */}
        {step === 1 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Quick details, then the video
            </div>
            <div className="mb-6 text-sm text-[var(--color-ink-muted)]">
              We text you the audit when it's ready.
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Your name"
                placeholder="Jane Smith"
                value={quick.name}
                onChange={(e) => setQuick((q) => ({ ...q, name: e.target.value }))}
              />
              <Input
                label="Business name"
                placeholder="Smith & Co"
                value={quick.business}
                onChange={(e) => setQuick((q) => ({ ...q, business: e.target.value }))}
              />
              <Input
                label="Email"
                type="email"
                placeholder="jane@business.co.uk"
                value={quick.email}
                onChange={(e) => setQuick((q) => ({ ...q, email: e.target.value }))}
              />
              <Input
                label="Mobile"
                type="tel"
                placeholder="07…"
                value={quick.phone}
                onChange={(e) => setQuick((q) => ({ ...q, phone: e.target.value }))}
              />
              <div className="sm:col-span-2">
                <Input
                  label="Website (optional)"
                  placeholder="yourbusiness.co.uk"
                  value={quick.website}
                  onChange={(e) => setQuick((q) => ({ ...q, website: e.target.value }))}
                />
              </div>
            </div>
            <div className="mt-7 flex justify-end">
              <ButtonEl
                disabled={!quickOk}
                onClick={() => quickOk && setStep(2)}
              >
                Continue to video &rarr;
              </ButtonEl>
            </div>
          </div>
        )}

        {/* STEP 2 — video */}
        {step === 2 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Watch this before you go further
            </div>
            <div className="mb-6 text-sm text-[var(--color-ink-muted)]">
              2 minutes. How the whole system fits together — site,
              ads, tracking, dashboard, call handling.
            </div>

            <VideoPlaceholder />

            <div className="mt-6 rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] p-4 text-[13px] leading-[1.55] text-[var(--color-ink)]">
              <span className="font-bold">In this video:</span> the audit
              PDF you get, how we rebuild your site, where the tracking
              number goes, and what the dashboard looks like on your phone.
            </div>

            <div className="mt-7 flex items-center justify-between">
              <ButtonEl variant="ghost" onClick={() => setStep(1)}>
                ← Back
              </ButtonEl>
              <ButtonEl onClick={() => setStep(3)}>
                Skip / continue &rarr;
              </ButtonEl>
            </div>
          </div>
        )}

        {/* STEP 3 — detailed form */}
        {step === 3 && (
          <div>
            <div className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold">
              Tell us about your business
            </div>
            <div className="mb-6 text-sm text-[var(--color-ink-muted)]">
              Everything we need to build your audit and pricing.
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  label="Services you offer"
                  placeholder="e.g. rewires, EV chargers, emergency callouts"
                  value={details.services}
                  onChange={(e) => setDetails((d) => ({ ...d, services: e.target.value }))}
                />
              </div>
              <Select
                label="Current monthly ad spend"
                options={AD_SPEND}
                value={details.adSpend}
                onChange={(e) => setDetails((d) => ({ ...d, adSpend: e.target.value }))}
              />
              <Input
                label="Monthly booked-jobs goal"
                placeholder="e.g. 30 jobs"
                value={details.goals}
                onChange={(e) => setDetails((d) => ({ ...d, goals: e.target.value }))}
              />
              <div className="sm:col-span-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-medium text-[var(--color-ink-muted)]">
                    Anything else we should know?
                  </span>
                  <textarea
                    placeholder="Existing agencies, upcoming holidays, specific job types you want more or less of…"
                    value={details.notes}
                    onChange={(e) => setDetails((d) => ({ ...d, notes: e.target.value }))}
                    rows={3}
                    className="rounded-[var(--radius-sm)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-3 py-2 text-[15px] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-accent)] focus:shadow-[var(--shadow-focus)]"
                  />
                </label>
              </div>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <ButtonEl variant="ghost" onClick={() => setStep(2)}>
                ← Back
              </ButtonEl>
              <ButtonEl
                disabled={!detailsOk}
                onClick={() => detailsOk && setStep(4)}
              >
                Submit
              </ButtonEl>
            </div>
          </div>
        )}

        {/* STEP 4 — confirmation */}
        {step === 4 && (
          <div className="px-0 py-6 text-center">
            <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--color-success-soft)] text-[30px] text-[var(--color-success)]">
              ✓
            </div>
            <div className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold">
              We've got everything we need.
            </div>
            <div className="mx-auto mb-6 max-w-[440px] text-base leading-[1.55] text-[var(--color-ink-muted)]">
              We'll audit your site, ads and Google rankings by hand, and
              send you the PDF plus a proposal within the week. If you have
              any questions, we'll call you first.
            </div>
            <div className="mx-auto max-w-[440px] rounded-[var(--radius-md)] bg-[var(--color-surface-sunken)] p-5 text-left">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                What happens next
              </div>
              <div className="flex flex-col gap-2.5 text-sm leading-[1.5] text-[var(--color-ink)]">
                <div>1 · Confirmation email lands in your inbox now.</div>
                <div>2 · Audit and proposal within the week.</div>
                <div>3 · You approve, and we start the rebuild.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Video placeholder                                          */
/* ─────────────────────────────────────────────────────────── */

function VideoPlaceholder() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[#0e1420] shadow-[var(--shadow-2)]">
      {/* Fake video frame contents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#152438] via-[#0e1420] to-[#1a2438]">
        <div className="absolute inset-6 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-white/60">
            <span className="flex h-1.5 w-1.5 rounded-full bg-red-500" />
            LIVE PREVIEW · TANDEMM
          </div>
          <div>
            <div className="font-[family-name:var(--font-display)] text-[18px] font-bold text-white sm:text-[22px]">
              How Tandemm works, in 2 minutes.
            </div>
            <div className="mt-1 text-[12px] text-white/60">
              Site → ads → tracking → dashboard → call handling.
            </div>
          </div>
        </div>
      </div>

      {/* Play button */}
      <button
        type="button"
        aria-label="Play video (placeholder)"
        className="absolute inset-0 m-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-transform hover:scale-105"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--color-primary)" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      {/* Controls bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 border-t border-white/10 bg-black/40 px-4 py-2 text-[10px] text-white/70 backdrop-blur">
        <span>0:00</span>
        <div className="h-1 flex-1 rounded-full bg-white/20">
          <div className="h-full w-0 rounded-full bg-[var(--color-accent)]" />
        </div>
        <span>2:14</span>
      </div>
    </div>
  );
}
