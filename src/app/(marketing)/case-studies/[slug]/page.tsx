import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { caseStudies, caseStudiesNote } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  return {
    title: study ? `${study.company} case study | Ringside` : "Ringside",
    description: study?.headline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {study.industry}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {study.headline}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {caseStudiesNote}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 rounded-2xl border border-border bg-white p-8">
            {study.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-4 text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-primary pl-6 text-lg font-medium leading-8 text-primary">
            &ldquo;{study.quote}&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">
            {study.attribution}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" withArrow>
              Book a demo
            </Button>
            <Button href="/case-studies" variant="secondary">
              View all case studies
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
