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
            The Tandemm App · included
          </div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            A premium field app,<br />bundled with your plan.
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-lede">
            Most agencies stop at a website. Tandemm gives you the software your
            competitors pay a subscription for, and wires it into the same
            plan you already have.
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
                  <div className="app-showcase-title">{f.title}</div>
                  <div className="app-showcase-body">{f.body}</div>
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
