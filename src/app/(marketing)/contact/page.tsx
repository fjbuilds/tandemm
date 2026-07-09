import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { IconClock, IconShield, IconUsers } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Book a demo | Ringside",
  description:
    "Book a 20-minute demo to see how Ringside can help your sales team sell like your best rep.",
};

const reassurances = [
  {
    icon: <IconClock className="h-5 w-5" />,
    title: "20-minute demo",
    description: "A focused walkthrough tailored to your team, not a generic pitch.",
  },
  {
    icon: <IconUsers className="h-5 w-5" />,
    title: "Talk to a real team",
    description: "You'll speak with our London-based team, not a call centre script.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "No pressure, no spam",
    description: "We'll follow up once, then let you decide what's next.",
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Book a demo
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              See Ringside working with your own sales process
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
              Tell us a bit about your team and we&apos;ll set up a demo built
              around a real playbook from your CRM and calls.
            </p>

            <div className="mt-10 space-y-6">
              {reassurances.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
