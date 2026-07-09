import { TiltedShowcase } from "./TiltedShowcase";
import { IconChart } from "./Icons";

const stats = [
  { label: "Win rate", value: "+18%", note: "vs. last quarter" },
  { label: "Ramp time", value: "6 wks", note: "down from 4 months" },
  { label: "Active playbooks", value: "32", note: "across 6 segments" },
];

export function AnalyticsShowcase() {
  return (
    <TiltedShowcase maxWidth="880px" baseTilt={44}>
      <div
        className="rounded-[22px] border border-border bg-card px-8 pb-10 pt-8 sm:px-10"
        style={{ boxShadow: "0 70px 100px -20px rgba(0,0,0,0.85)" }}
      >
        <div className="mb-7 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <IconChart className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold text-card-foreground">
            Manager analytics
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-foreground/5 px-5 py-5"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </TiltedShowcase>
  );
}
