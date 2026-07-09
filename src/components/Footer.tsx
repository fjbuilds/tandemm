import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerLinks } from "@/lib/nav-links";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Sales enablement built for teams who close. Made in London,
              trusted by revenue teams across the UK.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-primary">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 ease-out hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ringside. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            London, United Kingdom
          </p>
        </div>
      </Container>
    </footer>
  );
}
