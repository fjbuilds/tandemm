"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { IconCheck } from "./Icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <IconCheck className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-xl font-semibold text-primary">
          Thanks — we&apos;ll be in touch shortly
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          A member of our London team will reach out within one business day
          to find a time for your demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground transition-colors duration-200 ease-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary"
          >
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground transition-colors duration-200 ease-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-primary"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground transition-colors duration-200 ease-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="teamSize"
            className="block text-sm font-medium text-primary"
          >
            Sales team size
          </label>
          <select
            id="teamSize"
            name="teamSize"
            required
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground transition-colors duration-200 ease-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              Select team size
            </option>
            <option value="1-10">1–10</option>
            <option value="11-25">11–25</option>
            <option value="26-50">26–50</option>
            <option value="51+">51+</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary"
        >
          What are you hoping to solve?
          <span className="ml-1 font-normal text-muted-foreground">
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-foreground transition-colors duration-200 ease-out focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          We&apos;ll only use these details to reach out about your demo.
        </p>
        <Button type="submit" className="shrink-0">
          {submitting ? "Sending…" : "Book a demo"}
        </Button>
      </div>
    </form>
  );
}
