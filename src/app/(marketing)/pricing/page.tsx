import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/Icons";
import { pricingTiers, pricingFaqs } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing | Ringside",
  description:
    "Simple, user-based pricing for Ringside. Start with a 14-day free trial, no credit card required.",
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Simple pricing that scales with your team"
              description="Priced by number of users, not per rep. Every plan includes UK/EU data residency. Start with a 14-day free trial — no credit card required."
              align="center"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-8 ${
                    tier.featured
                      ? "border-primary bg-primary text-primary-foreground shadow-xl lg:-translate-y-3"
                      : "border-border bg-white shadow-sm"
                  }`}
                >
                  {tier.featured && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Most popular
                    </span>
                  )}
                  <h3
                    className={`text-lg font-semibold ${tier.featured ? "text-primary-foreground" : "text-primary"}`}
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span
                      className={`ml-2 text-sm ${tier.featured ? "text-white/70" : "text-muted-foreground"}`}
                    >
                      {tier.period}
                    </span>
                  </p>
                  <p
                    className={`mt-3 text-sm ${tier.featured ? "text-white/80" : "text-muted-foreground"}`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <IconCheck
                          className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-white" : "text-primary"}`}
                        />
                        <span
                          className={`text-sm ${tier.featured ? "text-white/90" : "text-muted-foreground"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="/contact"
                      variant={tier.featured ? "secondary" : "primary"}
                      className={
                        tier.featured
                          ? "w-full !border-white/30 !text-primary-foreground hover:!bg-white/10"
                          : "w-full"
                      }
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-border">
            {pricingFaqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 60}>
                <div className="py-6">
                  <h3 className="text-base font-semibold text-primary">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Still deciding on a plan?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Talk to our team and we&apos;ll recommend the right plan for
              your team&apos;s size and goals.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                withArrow
                className="!border-white/30 !text-primary-foreground hover:!bg-white/10"
              >
                Talk to sales
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
