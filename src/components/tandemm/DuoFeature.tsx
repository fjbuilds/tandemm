import { Reveal } from "./Reveal";

const DIALOGUE = [
  {
    who: "you",
    text: "Duo, log the job at 42 Oak Rise. Boiler swap, quoted at 2,400.",
  },
  {
    who: "duo",
    text: "Logged. Homeowner is Sarah, deposit invoice going out now. I&rsquo;ll block Thursday morning.",
  },
  {
    who: "you",
    text: "And text Mike to confirm the parts run.",
  },
  {
    who: "duo",
    text: "Sent. He&rsquo;s replied yes, arriving 7:30am.",
  },
];

export function DuoFeature() {
  return (
    <div className="duo-feature">
      <div className="duo-feature-copy">
        <Reveal>
          <div className="duo-feature-eyebrow">
            <span className="duo-feature-dot" />
            Meet Duo
          </div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            The second half of your day,<br />on voice command.
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-lede">
            Duo is the voice-first side of the Tandemm app. Hands on the tools,
            paperwork off your plate. Talk to it like you&rsquo;d talk to a
            good office manager, then get on with the job.
          </p>
        </Reveal>

        <ul className="duo-feature-list">
          <Reveal>
            <li>Log jobs and notes without unlocking your phone</li>
          </Reveal>
          <Reveal>
            <li>Send quotes and invoices while you drive</li>
          </Reveal>
          <Reveal>
            <li>Book calls, chase deposits and update the diary by voice</li>
          </Reveal>
        </ul>
      </div>

      <div className="duo-feature-visual">
        <Reveal>
          <div className="duo-chat">
            <div className="duo-chat-head">
              <span className="duo-chat-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
              <div>
                <div className="duo-chat-name">Duo</div>
                <div className="duo-chat-status">Listening · on-site mode</div>
              </div>
            </div>
            <div className="duo-chat-body">
              {DIALOGUE.map((d, i) => (
                <div key={i} className={`duo-msg duo-msg--${d.who}`}>
                  <span dangerouslySetInnerHTML={{ __html: d.text }} />
                </div>
              ))}
            </div>
            <div className="duo-chat-foot">
              <span className="duo-chat-wave" aria-hidden="true">
                <span /> <span /> <span /> <span /> <span />
              </span>
              <span>Tap to talk</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
