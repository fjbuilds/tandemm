import Link from "next/link";

export const TANDEMM_WHATSAPP =
  "https://wa.me/447948091506?text=Hi%20Tandemm%2C%20I%27d%20like%20to%20check%20availability";
export const TANDEMM_PHONE = "tel:+447948091506";

const options = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    sub: "Reply from a real person, usually inside an hour",
    href: TANDEMM_WHATSAPP,
    external: true,
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.5.7 4.9 2 7L3 29l6.6-2.3c2 1.1 4.2 1.6 6.4 1.6 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 22.9c-2 0-4-.6-5.7-1.7l-.4-.2-3.9 1.4 1.3-3.8-.3-.4C6 20.5 5.3 18 5.3 15.6 5.3 9.7 10.1 4.9 16 4.9s10.7 4.8 10.7 10.7S21.9 25.9 16 25.9zm5.9-8.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.5-1-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.8-1-2.5-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z" />
      </svg>
    ),
  },
  {
    key: "call",
    label: "Speak now",
    sub: "Call the team, no gatekeeper, no queue",
    href: TANDEMM_PHONE,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1.1.4 2.2.7 3.3a2 2 0 0 1-.5 2L8 10.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c1 .4 2.1.6 3.2.7a2 2 0 0 1 1.7 2z" />
      </svg>
    ),
  },
  {
    key: "book",
    label: "Free site scan",
    sub: "See where you are losing jobs, in seconds",
    href: "/book",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M8 2.5v4M16 2.5v4" />
        <path d="M8 14l3 3 5-6" />
      </svg>
    ),
  },
];

export function ContactOptions() {
  return (
    <div className="contact-trio">
      {options.map((o) => {
        const inner = (
          <>
            <span className="contact-trio-icon">{o.icon}</span>
            <span className="contact-trio-body">
              <span className="contact-trio-label">{o.label}</span>
              <span className="contact-trio-sub">{o.sub}</span>
            </span>
            <span className="contact-trio-chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </span>
          </>
        );
        return o.external ? (
          <a
            key={o.key}
            href={o.href}
            className="contact-trio-card"
            rel="noopener noreferrer"
            target={o.href.startsWith("http") ? "_blank" : undefined}
          >
            {inner}
          </a>
        ) : (
          <Link key={o.key} href={o.href} className="contact-trio-card">
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
