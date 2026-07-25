import { DashboardPhone } from "./Dashboard";
import { Reveal } from "./Reveal";

const APP_FEATURES = [
  {
    title: "Every enquiry lands here",
    body: "Calls, forms, WhatsApp and missed calls, tagged by source and ready to quote.",
  },
  {
    title: "Quote and invoice on the road",
    body: "Fire out a quote from the van, take card payment on the doorstep, chase later on autopilot.",
  },
  {
    title: "Your day, planned around jobs",
    body: "Route between jobs, log arrival, and hand over notes to the office in one tap.",
  },
];

export function AppShowcase() {
  return (
    <div className="app-showcase">
      <div className="app-showcase-copy">
        <Reveal>
          <div className="app-showcase-eyebrow">
            <span className="app-showcase-dot" />
            Tandemm Base · included
          </div>
        </Reveal>
        <Reveal>
          <h2 className="section-title section-title--on-dark">
            Your workshop for<br />the office side of the job.
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-lede section-lede--on-dark">
            Tandemm Base is the app your competitors pay a separate subscription
            for, wired into the same plan you already have. Every enquiry,
            every quote, every invoice, one place. Yours the moment you sign up.
          </p>
        </Reveal>

        <ul className="app-showcase-list">
          {APP_FEATURES.map((f) => (
            <Reveal key={f.title}>
              <li>
                <span className="app-showcase-tick" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5 9-11" />
                  </svg>
                </span>
                <div>
                  <div className="app-showcase-title app-showcase-title--on-dark">{f.title}</div>
                  <div className="app-showcase-body app-showcase-body--on-dark">{f.body}</div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="app-showcase-visual">
        <Reveal>
          <div className="app-showcase-phone-stack">
            <div className="app-showcase-phone app-showcase-phone--back">
              <DashboardPhone view="list" />
            </div>
            <div className="app-showcase-phone app-showcase-phone--front">
              <DashboardPhone view="lead" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
