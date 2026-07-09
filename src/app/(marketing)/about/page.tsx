import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IconBolt, IconShield, IconTarget, IconUsers } from "@/components/Icons";
import { GeometricBlurMesh } from "@/components/GeometricBlurMesh";

export const metadata: Metadata = {
  title: "About | Ringside",
  description:
    "Ringside is built in London for sales teams who want every rep to sell like their best rep.",
};

const values = [
  {
    icon: <IconTarget className="h-5 w-5" />,
    title: "Outcomes over activity",
    description:
      "We measure success in win rate and ramp time, not logins. Every feature has to move a real sales metric.",
  },
  {
    icon: <IconUsers className="h-5 w-5" />,
    title: "Built with sales teams, not just for them",
    description:
      "Our roadmap is shaped directly by the reps and managers using Ringside every day, not guessed at in isolation.",
  },
  {
    icon: <IconBolt className="h-5 w-5" />,
    title: "Fast, in every sense",
    description:
      "Fast to set up, fast to load, fast to get value from. Sales teams don't have months to wait on a rollout.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Trust by default",
    description:
      "UK/EU data residency and enterprise-grade security aren't add-ons — they're how we build from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-white py-20 sm:py-28">
        <GeometricBlurMesh className="pointer-events-auto absolute right-[-40px] top-[-20px] hidden h-64 w-64 opacity-70 sm:block lg:right-8" />
        <Container>
          <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              About Ringside
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Built in London, for teams who sell for a living
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ringside started with a simple observation: every sales team has
              a best rep, and every other rep is trying to catch up. We
              build the tools to close that gap.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our mission
              </h2>
              <div>
                <p className="text-base leading-7 text-muted-foreground">
                  Most sales knowledge lives in the heads of a handful of top
                  performers, scattered across calls, CRM notes, and Slack
                  threads. Ringside captures that knowledge automatically and
                  puts it in front of every rep at the moment they need it —
                  live, on the call, and in the content they send.
                </p>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  We&apos;re a London-based team working with sales
                  organisations across the UK who want to scale revenue
                  without scaling headcount at the same rate.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we believe"
              title="The principles behind how we build"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <div className="flex gap-4 rounded-2xl border border-border bg-background p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
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
              Come see it in action
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              We&apos;d love to show your team how Ringside fits into the way
              you already sell.
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
