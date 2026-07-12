"use client";

import { CSSProperties, useMemo, useState } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";
import { Reveal } from "@/components/tandemm/Reveal";
import { ButtonEl } from "@/components/tandemm/Button";
import { Input } from "@/components/tandemm/Input";
import { Select } from "@/components/tandemm/Select";
import { cn } from "@/lib/utils";

// Book page uses a slightly cooler canvas/surface palette than the rest of
// the Tandemm site — overridden locally to match the source design.
const bookPaletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

const DAYS_IN_MONTH = 31;
const START_OFFSET = 2; // July 2026 starts on a Wednesday (Mon-first grid)
const DISABLED_DAYS = new Set([4, 5, 11, 12, 18, 19, 25, 26]); // weekends
const PAST_CUTOFF = 6; // days before "today" shown as past
const SLOTS = ["09:00", "10:30", "13:00", "15:00", "16:30"];
const WEEKDAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

const FRUSTRATIONS = [
  { value: "", label: "Choose one…" },
  { value: "few-enquiries", label: "The phone isn't ringing enough" },
  { value: "traffic-no-leads", label: "Visitors turn up, but they don't call" },
  { value: "outdated", label: "The site looks dated" },
  { value: "slow", label: "The site is slow or clunky" },
  { value: "no-tracking", label: "I can't tell which ads pay back" },
  { value: "other", label: "Something else" },
];

const FAQS = [
  {
    q: "Is the call really free?",
    a: "Yes. It's how we work out whether we can help. No charge, no card, no commitment to book anything after.",
  },
  {
    q: "Will I get a sales pitch?",
    a: "No hard sell. We give you a straight read on the site, your ads and your rankings. If we can help, we say how. If we can't, we say that too.",
  },
  {
    q: "What do I need to prepare?",
    a: "Nothing. We'll have already been through your site before we speak, so you can spend the 30 minutes talking about the business, not briefing us.",
  },
];

type Step = 1 | 2 | 3;

export default function BookPage() {
  const [step, setStep] = useState<Step>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    website: "",
    frustration: "",
  });

  const canContinue = selectedDay !== null && selectedTime !== null;

  const goToStep = (n: Step) => {
    setStep(n);
  };

  const calendarCells = useMemo(() => {
    const blanks = Array.from({ length: START_OFFSET }, () => null);
    const days = Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, []);

  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={bookPaletteOverride}
    >
        <Nav active="book" />

        {/* HERO */}
        <section
          className="relative box-border px-6 pb-8 pt-[60px] text-center"
          style={{
            background:
              "radial-gradient(60% 42% at 50% 0%, rgba(226,229,222,0.9), transparent 72%)",
          }}
        >
          <div className="mx-auto max-w-[820px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-white/70 px-3.5 py-[7px] text-[13px] font-semibold tracking-[0.02em] text-[var(--color-ink-muted)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Get your free audit
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              A straight read on your website. Free.
            </h1>
            <p className="mx-auto mt-[22px] max-w-[600px] text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
              30 minutes. No pitch deck, no obligation. We&apos;ll tell you
              where your enquiries are leaking and whether we can help, even
              if the answer is &quot;you don&apos;t need us.&quot;
            </p>
          </div>
        </section>

        {/* REASSURANCE STRIP */}
        <section className="mx-auto max-w-[1160px] box-border px-6 pb-10 pt-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "30 minutes, video or phone",
              "No hard sell, one month's notice on anything you take on",
              "Talk to the person doing the work, not a sales rep",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-[18px] py-2.5 text-sm text-[var(--color-ink)]"
              >
                <span className="font-bold text-[var(--color-accent-hover)]">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING WIDGET */}
        <section className="mx-auto max-w-[1160px] box-border px-6 pb-24 pt-6">
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT: expectations */}
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-9 text-[var(--color-on-primary)] shadow-[var(--shadow-2)]">
              <div className="mb-[22px] inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/[0.14] px-3.5 py-[7px] text-[11px] font-bold uppercase tracking-[0.06em]">
                Free · 30 minutes
              </div>
              <div className="mb-1.5 font-[family-name:var(--font-display)] text-[22px] font-bold">
                Discovery call
              </div>
              <div className="mb-7 text-sm text-white/70">
                30 min · Tandemm, London
              </div>
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.05em] text-white/55">
                What we&apos;ll cover
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    n: 1,
                    title: "Where you are now",
                    body: "Your business, your area, the jobs you want more of.",
                  },
                  {
                    n: 2,
                    title: "Where the enquiries go missing",
                    body: "The gaps in your site, ads and rankings we can already see.",
                  },
                  {
                    n: 3,
                    title: "What we'd do next",
                    body: "A clear, honest recommendation. Or none, if you don't need us.",
                  },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-3">
                    <span className="text-base font-bold text-[var(--color-accent)]">
                      {item.n}
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold">
                        {item.title}
                      </div>
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

            {/* RIGHT: calendar + form */}
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-9 shadow-[var(--shadow-2)]">
              {/* STEP INDICATOR */}
              <div className="mb-7 flex items-center gap-2">
                <span
                  className={cn(
                    "h-[9px] w-[9px] rounded-full",
                    step >= 1 ? "bg-[var(--color-primary)]" : "bg-[var(--color-hairline)]",
                  )}
                />
                <span className="h-px flex-1 bg-[var(--color-hairline)]" />
                <span
                  className={cn(
                    "h-[9px] w-[9px] rounded-full",
                    step >= 2 ? "bg-[var(--color-primary)]" : "bg-[var(--color-hairline)]",
                  )}
                />
                <span className="h-px flex-1 bg-[var(--color-hairline)]" />
                <span
                  className={cn(
                    "h-[9px] w-[9px] rounded-full",
                    step >= 3 ? "bg-[var(--color-primary)]" : "bg-[var(--color-hairline)]",
                  )}
                />
              </div>

              {/* STEP 1: date + time */}
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
                          const disabled =
                            DISABLED_DAYS.has(day) || day <= PAST_CUTOFF;
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
                                disabled &&
                                  "cursor-default text-[var(--color-ink-faint)] opacity-45",
                                !disabled &&
                                  !selected &&
                                  "cursor-pointer bg-[var(--color-surface-muted)] text-[var(--color-ink)] hover:border-[var(--color-primary)]",
                                selected &&
                                  "cursor-pointer bg-[var(--color-primary)] text-[var(--color-on-primary)]",
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
                      onClick={() => canContinue && goToStep(2)}
                    >
                      Continue
                    </ButtonEl>
                  </div>
                </div>
              )}

              {/* STEP 2: qualification form */}
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
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                    />
                    <Input
                      label="Business name"
                      placeholder="Smith & Co"
                      value={form.business}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, business: e.target.value }))
                      }
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="jane@business.co.uk"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                    <Input
                      label="Website"
                      placeholder="yourbusiness.co.uk"
                      value={form.website}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, website: e.target.value }))
                      }
                    />
                  </div>
                  <div className="mt-4">
                    <Select
                      label="What's your biggest frustration right now?"
                      options={FRUSTRATIONS}
                      value={form.frustration}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, frustration: e.target.value }))
                      }
                    />
                  </div>
                  <div className="mt-7 flex items-center justify-between">
                    <ButtonEl variant="ghost" onClick={() => goToStep(1)}>
                      ← Back
                    </ButtonEl>
                    <ButtonEl onClick={() => goToStep(3)}>
                      Confirm booking
                    </ButtonEl>
                  </div>
                </div>
              )}

              {/* STEP 3: confirmation */}
              {step === 3 && (
                <div className="px-0 py-6 text-center">
                  <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--color-success-soft)] text-[30px] text-[var(--color-success)]">
                    ✓
                  </div>
                  <div className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                    You&apos;re booked in.
                  </div>
                  <div className="mx-auto mb-6 max-w-[400px] text-base leading-[1.55] text-[var(--color-ink-muted)]">
                    Your audit call is confirmed for July {selectedDay}, 2026
                    at {selectedTime} (London time). The invite is on its way
                    to your inbox now.
                  </div>
                  <div className="mx-auto max-w-[420px] rounded-[var(--radius-md)] bg-[var(--color-surface-sunken)] p-5 text-left">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.05em] text-[var(--color-ink-muted)]">
                      What happens next
                    </div>
                    <div className="flex flex-col gap-2.5 text-sm leading-[1.5] text-[var(--color-ink)]">
                      <div>
                        1 · A calendar invite lands in your inbox with the
                        video link.
                      </div>
                      <div>
                        2 · We go through your site, ads and rankings before
                        we speak.
                      </div>
                      <div>
                        3 · We call at the agreed time. No prep needed on your
                        end.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[820px] box-border px-6 pb-[104px] pt-6">
          <Reveal className="mb-10 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.02em]">
              Before you book
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
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                    }}
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

        <Footer />
    </div>
  );
}
