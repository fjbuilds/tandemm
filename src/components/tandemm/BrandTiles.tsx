"use client";

const STATS = [
  { value: "312%", label: "More Enquiries" },
  { value: "4.6x", label: "Conversion Rate" },
  { value: "47", label: "Leads Per Month" },
  { value: "£1.1M", label: "Revenue Generated" },
];

export function BrandTiles() {
  return (
    <div className="brand-tiles-static">
      <div className="brand-stat-cards brand-stat-cards--visible">
        {STATS.map((s) => (
          <div key={s.label} className="brand-stat-card brand-stat-card--visible">
            <div className="brand-stat-value">{s.value}</div>
            <div className="brand-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
