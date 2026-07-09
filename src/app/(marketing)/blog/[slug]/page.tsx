import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} | Ringside Blog` : "Ringside Blog",
    description: post?.excerpt,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
              {post.tag}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-10 space-y-6 text-base leading-7 text-muted-foreground">
            <p>
              This is placeholder body copy for the Ringside blog. In a full
              rollout, this article would be written by the marketing team
              and cover {post.title.toLowerCase()} in depth, with examples
              specific to London and UK sales teams.
            </p>
            <p>
              For now, this page demonstrates the structure a real post would
              use: a tagged category, publish date, introduction, and a clear
              path back to booking a demo.
            </p>
          </div>

          <div className="mt-12">
            <Button href="/blog" variant="secondary">
              Back to blog
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
