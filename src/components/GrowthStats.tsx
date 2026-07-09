"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const winRateTrend = [
  { month: "Jan", value: 34 },
  { month: "Feb", value: 37 },
  { month: "Mar", value: 41 },
  { month: "Apr", value: 45 },
  { month: "May", value: 49 },
  { month: "Jun", value: 52 },
];

const heroStat = {
  value: "2.1%",
  label: "Call drop-off when reps disclose live AI guidance",
  note: "Prospects barely notice — most calls run their full course. That's the single stat that gets sales leaders to actually try this.",
};

const supportingStats = [
  {
    value: "38 days",
    label: "To hit full quota",
    note: "Down from 112 days",
  },
  {
    value: "48,200+",
    label: "Objections handled live",
    note: "Every month, per account",
  },
  {
    value: "+27%",
    label: "Proposal-to-close lift",
    note: "After AI-drafted follow-ups",
  },
];

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value: number }[];
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-lg">
      <span className="font-semibold text-card-foreground">
        {payload[0].value}% win rate
      </span>
    </div>
  );
}

export function GrowthStats() {
  return (
    <div className="dark relative overflow-hidden bg-background py-24">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          What actually moves a sales team
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <p className="text-7xl font-bold leading-none tracking-tight text-primary sm:text-8xl">
              {heroStat.value}
            </p>
            <p className="mt-4 max-w-sm text-xl font-semibold leading-snug text-foreground">
              {heroStat.label}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              {heroStat.note}
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
              Team win rate, last 6 months
            </p>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={winRateTrend}>
                  <defs>
                    <linearGradient id="winRateFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip content={<ChartTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#winRateFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {supportingStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground/70">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
