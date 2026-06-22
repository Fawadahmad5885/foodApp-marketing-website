"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b bg-white border-gray-200 ">
      <Container as="div">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center"
            aria-label="Fiesta home"
          >
            <Image
              src="/logo/fiestaa-logo.png"
              alt="Fiestaa"
              width={1000}
              height={500}
              className="h-9 w-auto transition-transform group-hover:scale-105 lg:h-10"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {primaryNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-primary"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-80 rounded-2xl border border-border p-2 shadow-2xl shadow-black/20">
                        {item.children.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-background"
                          >
                            <span className="block text-sm font-semibold ">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="mt-0.5 block text-xs text-muted">
                                {link.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-primary"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/contact"
              variant="ghost"
              size="sm"
              className=" hover:bg-white/10 "
            >
              Register
            </Button>
            <Button href="/contact" size="sm">
              Book a Demo
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-surface lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-secondary transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {primaryNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <p className="px-3 text-xs font-semibold uppercase tracking-wider text-surface/50">
                    {item.label}
                  </p>
                  {item.children.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-surface/90 hover:bg-white/10"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-surface hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Button
                href="/contact"
                variant="outline"
                className="w-full border-surface/30 text-surface hover:bg-white/10"
              >
                Register
              </Button>
              <Button href="/contact" className="w-full">
                Book a Demo
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
