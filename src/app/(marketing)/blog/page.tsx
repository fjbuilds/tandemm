import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight } from "@/components/Icons";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ringside",
  description:
    "Ideas on sales enablement, ramp time, and building repeatable playbooks for revenue teams.",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Blog"
              title="Notes on selling well, at scale"
              description="Practical ideas on sales enablement, playbooks, and building a team that sells like your best rep."
              align="center"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                      {post.tag}
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-6 text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read post
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
