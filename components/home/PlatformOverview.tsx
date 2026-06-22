import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { platformCapabilities } from "@/lib/constants/home";

export function PlatformOverview() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Platform"
          title="Everything you need to run and grow"
          description="One unified ecosystem — from the counter to the customer's door. No more juggling disconnected tools."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map((capability) => {
            return (
              <Card
                key={capability.title}
                href={capability.href}
                hover
                className="relative overflow-hidden border-border/60 bg-surface"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-linear-to-br",
                    capability.gradient,
                  )}
                  aria-hidden
                />
                <div className="relative">
                  <div className="mb-4 w-full">
                    <Image
                      src={capability.image}
                      alt={capability.imageAlt}
                      width={1008}
                      height={623}
                      className="h-auto w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {capability.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
