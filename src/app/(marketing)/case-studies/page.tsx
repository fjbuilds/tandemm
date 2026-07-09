import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight } from "@/components/Icons";
import { caseStudies, caseStudiesNote } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Ringside",
  description:
    "See how sales teams use Ringside to ramp reps faster, win more deals, and give managers real visibility.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Case studies"
              title="Results from teams using Ringside"
              description={caseStudiesNote}
              align="center"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 80}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold text-primary">
                    {study.company}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {study.industry}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold leading-6 text-primary">
                    {study.headline}
                  </h3>
                  <div className="mt-6 flex gap-6">
                    {study.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-bold text-primary">
                          {stat.value}
                        </p>
                        <p className="text-xs leading-4 text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read case study
                    <IconArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
