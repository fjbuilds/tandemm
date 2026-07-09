import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { AnalyticsShowcase } from "@/components/AnalyticsShowcase";
import { Reveal } from "@/components/Reveal";
import {
  IconBolt,
  IconChart,
  IconLayers,
  IconShield,
  IconTarget,
  IconUsers,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Product | Ringside",
  description:
    "See how Ringside's playbooks, content generation, and real-time guidance help your sales team sell like your best rep.",
};

const capabilities = [
  {
    icon: <IconLayers className="h-5 w-5" />,
    title: "Playbook engine",
    description:
      "Ringside analyses your team's best calls and deals to generate structured playbooks per segment, persona, and deal stage.",
  },
  {
    icon: <IconBolt className="h-5 w-5" />,
    title: "Content generation",
    description:
      "Draft one-pagers, proposals, and follow-up emails on demand, pre-filled with the prospect's context and your brand voice.",
  },
  {
    icon: <IconTarget className="h-5 w-5" />,
    title: "Live call guidance",
    description:
      "Reps see the next best talk track, objection handle, or question in real time, without breaking eye contact with the prospect.",
  },
  {
    icon: <IconChart className="h-5 w-5" />,
    title: "Manager analytics",
    description:
      "Track playbook adoption, win rates by play, and where deals stall — down to the individual rep and call.",
  },
  {
    icon: <IconUsers className="h-5 w-5" />,
    title: "Team onboarding",
    description:
      "New reps ramp against your actual top performers' playbooks instead of generic training decks.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Enterprise-grade security",
    description:
      "UK/EU data residency, SSO, and granular permissions so IT and compliance sign off without friction.",
  },
];

const useCases = [
  {
    role: "SDRs",
    description:
      "Get the right cadence and messaging for every prospect, with live prompts during cold and warm calls.",
  },
  {
    role: "Account Executives",
    description:
      "Walk into every demo and negotiation with a tailored playbook and instantly generated proposal content.",
  },
  {
    role: "Sales Managers",
    description:
      "See exactly which plays are winning, where reps get stuck, and who needs coaching this week.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Product
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              One platform. Every deal, guided.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ringside combines a playbook engine, on-demand content
              generation, and real-time call guidance into a single workspace
              built for London sales teams.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" withArrow>
                Book a demo
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Everything a revenue team needs, in one workspace"
              description="Each capability works standalone, or together as a complete system for scaling what your best reps already do well."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, i) => (
              <Reveal key={capability.title} delay={i * 60}>
                <FeatureCard {...capability} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Built for every role"
              title="One workspace, tailored to each seat on the team"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
            {useCases.map((useCase, i) => (
              <Reveal key={useCase.role} delay={i * 90}>
                <div className="rounded-2xl border border-border bg-background p-6 text-center">
                  <h3 className="text-lg font-semibold text-primary">
                    {useCase.role}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="dark relative overflow-hidden bg-background py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 1200px 600px at 50% 0%, color-mix(in srgb, var(--primary) 16%, transparent) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Governed guidance, trusted outcomes
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Every play, coaching prompt, and generated document is
                tracked back to the rep, the call, and the deal — so managers
                can see exactly what&apos;s working.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="mt-16">
            <AnalyticsShowcase />
          </Reveal>
        </Container>
      </section>

      <section className="bg-primary py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              See it working with your own deals
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              We&apos;ll walk through Ringside using a real playbook built
              from your team&apos;s own calls and CRM data.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                withArrow
                className="!border-white/30 !text-primary-foreground hover:!bg-white/10"
              >
                Book a demo
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
