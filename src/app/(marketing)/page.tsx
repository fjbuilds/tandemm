import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { DarkFeatureCard } from "@/components/DarkFeatureCard";
import { LogoBar } from "@/components/LogoBar";
import { TopoHero } from "@/components/TopoHero";
import { GrowthStats } from "@/components/GrowthStats";
import { GeometricBlurMesh } from "@/components/GeometricBlurMesh";
import { Reveal } from "@/components/Reveal";
import {
  IconArrowRight,
  IconBolt,
  IconChart,
  IconLayers,
  IconTarget,
} from "@/components/Icons";
import { pricingTiers } from "@/lib/pricing";

const features = [
  {
    icon: <IconLayers className="h-5 w-5" />,
    title: "Playbooks that write themselves",
    description:
      "Ringside listens to your top reps' calls and turns their approach into repeatable playbooks — automatically.",
  },
  {
    icon: <IconBolt className="h-5 w-5" />,
    title: "Content on demand",
    description:
      "Generate one-pagers, proposals, and follow-up emails in your brand voice in seconds, not hours.",
  },
  {
    icon: <IconTarget className="h-5 w-5" />,
    title: "Real-time deal guidance",
    description:
      "Live prompts during calls surface the next best objection handle or question, so reps never miss a beat.",
  },
  {
    icon: <IconChart className="h-5 w-5" />,
    title: "Manager visibility",
    description:
      "See which plays are working, where deals stall, and exactly who needs coaching this week.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your stack",
    description:
      "Link your CRM, dialer, and calendar in minutes. No engineering effort required.",
  },
  {
    number: "02",
    title: "Ringside learns your best reps",
    description:
      "Our models analyse your top-performing calls and deals to build playbooks specific to your team.",
  },
  {
    number: "03",
    title: "Every rep gets guided",
    description:
      "Reps see live prompts and content suggestions in-call, while managers track adoption and impact.",
  },
];

export default function Home() {
  return (
    <>
      <TopoHero />

      <section className="dark relative overflow-hidden border-t border-border bg-background py-24">
        <Container className="relative z-10">
          <Reveal className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              How it feels mid-call
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Guidance that stays out of the way, until you need it
            </h2>
          </Reveal>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
            <Reveal delay={80} className="flex justify-center">
              <GeometricBlurMesh className="h-72 w-72 opacity-80 sm:h-96 sm:w-96" />
            </Reveal>

            <div className="flex flex-col gap-5">
              <Reveal
                delay={160}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconBolt className="h-4 w-4" />
                </div>
                <p className="mt-4 text-base font-semibold text-card-foreground">
                  Under 400ms
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  From objection to prompt on screen — fast enough that reps
                  never break eye contact with the conversation.
                </p>
              </Reveal>
              <Reveal
                delay={240}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconTarget className="h-4 w-4" />
                </div>
                <p className="mt-4 text-base font-semibold text-card-foreground">
                  Never scripted
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Every prompt adapts to what the prospect just said — no
                  dashboards to babysit, no fixed decision tree.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-white py-14">
        <Container>
          <Reveal>
            <LogoBar />
          </Reveal>
        </Container>
      </section>

      <section className="dark border-y border-border bg-background py-24">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Why Ringside
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Everything your team needs to sell like your best rep
                </h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground">
                Ringside combines AI-generated playbooks with live in-call
                guidance, so every rep on your team performs like your top
                performer.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {features.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i * 80}
                className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <DarkFeatureCard {...feature} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Live in under a week"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <div className="group text-center sm:text-left">
                  <span className="inline-block font-sans text-sm font-bold text-primary transition-transform duration-300 ease-out group-hover:translate-x-1">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground transition-colors duration-300 ease-out group-hover:text-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <figure className="group mx-auto mt-20 max-w-2xl border-l-4 border-primary/40 pl-8 transition-colors duration-300 ease-out hover:border-primary">
              <blockquote className="font-serif text-2xl italic leading-snug text-primary sm:text-3xl">
                &ldquo;Our new reps hit quota two months faster once they had
                Ringside guiding their first calls. It&apos;s like giving
                everyone a seat next to our best closer.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                Head of Sales, Series B SaaS company &middot; Illustrative
                example
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <GrowthStats />
      </Reveal>

      <section className="border-t border-border bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Plans built for teams of every size"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ease-out hover:-translate-y-1 ${
                    tier.featured
                      ? "border-primary bg-primary text-primary-foreground shadow-xl hover:shadow-2xl"
                      : "border-border bg-white shadow-sm hover:border-primary/30 hover:shadow-lg"
                  }`}
                >
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
                  <div className="mt-8">
                    <Button
                      href="/pricing"
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
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80"
            >
              Compare full plan details
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-20">
        <Container>
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to see your team close more?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/70">
                Book a 20-minute demo and we&apos;ll show you exactly how
                Ringside would work with your team&apos;s current process.
              </p>
            </div>
            <Button
              href="/contact"
              variant="secondary"
              withArrow
              className="w-fit shrink-0 !border-white/30 !text-primary-foreground hover:!bg-white/10"
            >
              Book a demo
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
