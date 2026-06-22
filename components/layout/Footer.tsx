import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerProductLinks,
  footerSolutionLinks,
} from "@/lib/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-secondary text-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex shrink-0 items-center"
              aria-label="Fiesta home"
            >
              <Image
                src="/logo/fiestaa-white-logo.png"
                alt="Fiestaa"
                width={1000}
                height={500}
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface/70">
              Empower every restaurant and food business to own their digital
              future — reduce aggregator dependency and run operations from one
              unified platform.
            </p>
            <div className="mt-6 space-y-3 text-sm text-surface/70">
              <a
                href="mailto:hello@fiesta.io"
                className="flex items-center gap-2 transition-colors hover:text-surface"
              >
                <Mail className="h-4 w-4 shrink-0 text-tertiary" />
                hello@fiesta.io
              </a>
              <a
                href="tel:+97180012345"
                className="flex items-center gap-2 transition-colors hover:text-surface"
              >
                <Phone className="h-4 w-4 shrink-0 text-tertiary" />
                +971 800 123 45
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" />
                Dubai, UAE · London, UK · Lahore, PK
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-surface/50">
                Platform
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerProductLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface/70 transition-colors hover:text-surface"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-surface/50">
                Solutions
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerSolutionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface/70 transition-colors hover:text-surface"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-surface/50">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerCompanyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface/70 transition-colors hover:text-surface"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-surface/50">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLegalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface/70 transition-colors hover:text-surface"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-surface/50">
            © {new Date().getFullYear()} Fiesta. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-surface/50 transition-colors hover:text-surface"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
