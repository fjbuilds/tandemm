import { CSSProperties } from "react";
import { Nav } from "@/components/tandemm/Nav";
import { Footer } from "@/components/tandemm/Footer";

const paletteOverride = {
  "--color-canvas": "#EDEEEA",
  "--color-canvas-deep": "#E1E3DD",
  "--color-surface-muted": "#E7E8E2",
  "--color-surface-sunken": "#E3E5DE",
  "--color-hairline": "#D4D6CE",
  "--color-hairline-soft": "#E1E3DC",
} as CSSProperties;

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-10 font-[family-name:var(--font-display)] text-[22px] font-bold leading-[1.2] text-[var(--color-ink)] first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[16px] leading-[1.65] text-[var(--color-ink-muted)]">
      {children}
    </p>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 flex flex-col gap-2 pl-5 text-[16px] leading-[1.65] text-[var(--color-ink-muted)]">
      {children}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="legal" />

      <section className="px-6 pb-8 pt-[60px] text-center">
        <div className="mx-auto max-w-[760px]">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-3 max-w-[560px] text-[15px] text-[var(--color-ink-faint)]">
            Last updated: 10 July 2026
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[760px] rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-1)] sm:p-12">
          <P>
            Tandemm (&ldquo;Tandemm&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) is a website and growth studio based in
            London, UK. This policy explains what personal data we collect
            through tandemm.co.uk and when you get in touch with us, why we
            collect it, and what rights you have over it.
          </P>
          <P>
            We are the data controller for the personal data described in
            this policy. If you have any questions, contact us at{" "}
            <a
              href="mailto:hello@tandemm.co.uk"
              className="font-semibold text-[var(--color-ink)] underline"
            >
              hello@tandemm.co.uk
            </a>
            .
          </P>

          <H2>What we collect</H2>
          <P>
            <strong className="text-[var(--color-ink)]">
              Information you give us.
            </strong>{" "}
            When you request an audit, book a call, or email us, we collect
            what you provide: your name, business name, email address,
            phone number (if given), your website address, and anything you
            tell us about your business or goals.
          </P>
          <P>
            <strong className="text-[var(--color-ink)]">
              Information collected automatically.
            </strong>{" "}
            Like most websites, our server and any analytics tools we use
            may automatically log your IP address, browser and device type,
            pages viewed, and the site that referred you, via cookies or
            similar technologies.
          </P>
          <P>
            <strong className="text-[var(--color-ink)]">
              Information from your public website.
            </strong>{" "}
            When we prepare a website audit, we review information that is
            already publicly available on your business&apos;s website and
            listings.
          </P>

          <H2>How we use it</H2>
          <P>We use personal data to:</P>
          <Ul>
            <li>Respond to enquiries and provide the free audit you asked for</li>
            <li>Arrange and hold discovery calls</li>
            <li>Deliver, invoice, and support any service you engage us for</li>
            <li>Understand how our website is used, so we can improve it</li>
            <li>
              Send you information you&apos;ve asked for, and, where you&apos;ve
              agreed to it, occasional relevant updates (you can opt out at
              any time)
            </li>
            <li>Meet our legal and accounting obligations</li>
          </Ul>
          <P>
            Our legal basis for this is: performing a contract with you (or
            taking steps towards one, e.g. quoting for work); our legitimate
            interest in running and improving our business and responding to
            enquiries; your consent, where we ask for it (e.g. marketing
            emails or non-essential cookies); and complying with the law.
          </P>

          <H2>Cookies</H2>
          <P>
            We use essential cookies needed for the site to function, and,
            where enabled, analytics cookies to understand traffic and
            improve the site. Non-essential cookies are only set with your
            consent, and you can withdraw that consent at any time through
            your browser settings.
          </P>

          <H2>Who we share it with</H2>
          <P>
            We don&apos;t sell your data. We share it only with service
            providers who help us run Tandemm and this website &mdash; for
            example, hosting, email, calendar/booking, analytics, and
            advertising platforms &mdash; strictly so they can provide that
            service to us, and with professional advisers (accountants,
            legal counsel) where necessary. Some of these providers may be
            based outside the UK; where that&apos;s the case, we rely on
            approved safeguards such as Standard Contractual Clauses to
            protect your data.
          </P>
          <P>
            We may also disclose data if required by law, or to protect our
            rights, property, or safety, or that of others.
          </P>

          <H2>How long we keep it</H2>
          <P>
            We keep enquiry and client data for as long as we have an active
            relationship with you, and for a reasonable period afterwards to
            meet legal, accounting, and reporting obligations, or to
            establish, exercise, or defend legal claims. We then delete or
            anonymise it.
          </P>

          <H2>Your rights</H2>
          <P>Under UK data protection law, you have the right to:</P>
          <Ul>
            <li>Ask us what personal data we hold about you, and get a copy of it</li>
            <li>Ask us to correct inaccurate or incomplete data</li>
            <li>Ask us to delete your data, in certain circumstances</li>
            <li>Ask us to restrict or object to certain processing</li>
            <li>Ask for your data in a portable format</li>
            <li>Withdraw consent at any time, where we rely on consent</li>
          </Ul>
          <P>
            To exercise any of these rights, email{" "}
            <a
              href="mailto:hello@tandemm.co.uk"
              className="font-semibold text-[var(--color-ink)] underline"
            >
              hello@tandemm.co.uk
            </a>
            . If you&apos;re unhappy with how we&apos;ve handled your data,
            you also have the right to complain to the UK&apos;s Information
            Commissioner&apos;s Office (ico.org.uk).
          </P>

          <H2>Children</H2>
          <P>
            Our website and services are aimed at business owners and are
            not directed at children. We don&apos;t knowingly collect data
            from anyone under 16.
          </P>

          <H2>Changes to this policy</H2>
          <P>
            We may update this policy from time to time to reflect changes
            to our practices or for legal reasons. We&apos;ll update the
            date at the top when we do. Significant changes will be
            reflected here before they take effect.
          </P>

          <H2>Contact</H2>
          <P>
            Questions about this policy or your data? Email{" "}
            <a
              href="mailto:hello@tandemm.co.uk"
              className="font-semibold text-[var(--color-ink)] underline"
            >
              hello@tandemm.co.uk
            </a>
            . Tandemm is based in London, UK.
          </P>
        </div>
      </section>

      <Footer />
    </div>
  );
}
