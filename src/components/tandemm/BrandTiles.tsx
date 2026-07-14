"use client";

// Neutral placeholder tiles. Real client outcomes will replace these once
// there are published results to show. Do not add fabricated numbers here.
const TILES = [
  { value: "Diagnosis", label: "Where enquiries slip" },
  { value: "Prevention", label: "Plug the leaks" },
  { value: "Cure", label: "Ongoing engine" },
  { value: "One system", label: "Ads, SEO, site, enquiries, calls" },
];

export function BrandTiles() {
  return (
    <div className="brand-tiles-static">
      <div className="brand-stat-cards brand-stat-cards--visible">
        {TILES.map((s) => (
          <div key={s.label} className="brand-stat-card brand-stat-card--visible">
            <div className="brand-stat-value">{s.value}</div>
            <div className="brand-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
