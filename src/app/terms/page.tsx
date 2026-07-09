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

export default function TermsPage() {
  return (
    <div
      className="min-h-screen bg-[var(--color-canvas)] font-[family-name:var(--font-body)] text-[var(--color-ink)]"
      style={paletteOverride}
    >
      <Nav active="legal" />

      <section className="px-6 pb-8 pt-[60px] text-center">
        <div className="mx-auto max-w-[760px]">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,4.5vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-3 max-w-[560px] text-[15px] text-[var(--color-ink-faint)]">
            Last updated: 10 July 2026
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[760px] rounded-[var(--radius-xl)] border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-1)] sm:p-12">
          <P>
            These terms govern your use of tandemm.co.uk (the
            &ldquo;site&rdquo;), operated by Tandemm (&ldquo;Tandemm&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;), a growth studio based in
            London, UK. By using the site, you accept these terms. If you
            don&apos;t agree with them, please don&apos;t use the site.
          </P>

          <H2>Using the site</H2>
          <P>
            You may use this site to learn about our services, request a
            free audit, and get in touch with us. You agree not to misuse
            the site &mdash; including attempting to gain unauthorised
            access, scraping or copying content at scale, introducing
            malicious code, or interfering with its normal operation.
          </P>

          <H2>Intellectual property</H2>
          <P>
            The content on this site &mdash; including text, graphics,
            logos, and the underlying design and code &mdash; belongs to
            Tandemm or our licensors, unless stated otherwise. You may view
            and share pages for your own personal, non-commercial reference,
            but you may not reproduce, republish, or reuse our content
            commercially without our written permission.
          </P>

          <H2>No guaranteed results</H2>
          <P>
            The figures, case studies, and testimonials on this site (for
            example, enquiry uplifts, conversion rates, or return on ad
            spend) describe results achieved by specific clients, or are
            illustrative composites, in the circumstances described. They
            are shared to give a general sense of what&apos;s possible and
            are not a guarantee, prediction, or warranty of results for your
            business. Every business, market, and starting point is
            different.
          </P>

          <H2>Information on this site</H2>
          <P>
            We try to keep the content on this site accurate and up to date,
            but it&apos;s provided for general information only and doesn&apos;t
            constitute professional advice. You should not rely on it as a
            substitute for advice specific to your circumstances. To the
            fullest extent permitted by law, we exclude any warranties,
            express or implied, about the accuracy or completeness of the
            site&apos;s content.
          </P>

          <H2>Third-party links</H2>
          <P>
            This site may link to third-party websites (for example, a
            booking or calendar tool) for your convenience. We don&apos;t
            control those sites and aren&apos;t responsible for their
            content, policies, or practices. Visiting them is at your own
            risk and subject to their own terms.
          </P>

          <H2>Liability</H2>
          <P>
            To the fullest extent permitted by law, Tandemm won&apos;t be
            liable for any indirect, incidental, or consequential loss
            arising from your use of this site, including loss of profit,
            business, or data. Nothing in these terms excludes or limits our
            liability where it would be unlawful to do so, including for
            death or personal injury caused by our negligence, or for fraud.
          </P>

          <H2>Paid services and engagements</H2>
          <P>
            These terms cover use of the website only. If you engage
            Tandemm for paid work &mdash; a website build, ongoing
            marketing, or any other service &mdash; that engagement is
            governed by a separate, signed proposal or agreement between you
            and Tandemm, which will set out scope, fees, timelines, and each
            party&apos;s obligations. Where the two conflict, that signed
            agreement takes priority over these website terms.
          </P>

          <H2>Changes</H2>
          <P>
            We may update this site and these terms from time to time. The
            version in force is the one published here at the time you use
            the site, and we&apos;ll update the date at the top when we make
            changes.
          </P>

          <H2>Governing law</H2>
          <P>
            These terms are governed by the laws of England and Wales, and
            any disputes will be subject to the exclusive jurisdiction of
            the courts of England and Wales.
          </P>

          <H2>Contact</H2>
          <P>
            Questions about these terms? Email{" "}
            <a
              href="mailto:hello@tandemm.co.uk"
              className="font-semibold text-[var(--color-ink)] underline"
            >
              hello@tandemm.co.uk
            </a>
            .
          </P>
        </div>
      </section>

      <Footer />
    </div>
  );
}
