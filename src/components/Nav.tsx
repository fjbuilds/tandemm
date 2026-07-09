"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { IconClose, IconMenu } from "./Icons";
import { navLinks } from "@/lib/nav-links";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="dark sticky top-0 z-50 bg-background/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="Ringside home"
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`cursor-pointer text-sm font-medium transition-colors duration-200 ease-out hover:text-primary ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 ease-out hover:text-primary"
          >
            Log in
          </Link>
          <Button href="/contact" className="!py-2.5">
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-md p-2 text-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors duration-200 ease-out hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
              <Link
                href="/contact"
                className="cursor-pointer px-2 text-base font-medium text-muted-foreground"
              >
                Log in
              </Link>
              <Button href="/contact" className="w-full">
                Book a demo
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
