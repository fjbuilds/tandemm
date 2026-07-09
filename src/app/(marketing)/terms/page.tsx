import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service | Ringside",
};

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Terms of Service
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          This is placeholder content. Ringside&apos;s full terms of service
          will be published here before launch.
        </p>
      </Container>
    </section>
  );
}
