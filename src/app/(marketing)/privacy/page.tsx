import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Ringside",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          This is placeholder content. Ringside&apos;s full privacy policy —
          covering what data we collect, UK/EU data residency, and how
          customer data is used — will be published here before launch.
        </p>
      </Container>
    </section>
  );
}
