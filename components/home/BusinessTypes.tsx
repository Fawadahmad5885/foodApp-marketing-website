import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { businessTypes } from "@/lib/constants/home";

export function BusinessTypes() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Solutions"
          title="Built for every food business"
          description="Whether you run a single café or a 50-location chain, Fiesta adapts to your model."
          className="[&_h2]:text-surface [&_p]:text-surface/70"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {businessTypes.map((type) => (
            <Link
              key={type.title}
              href={type.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-white/10"
            >
              <span className="text-4xl" role="img" aria-hidden>
                {type.image}
              </span>
              <p className="mt-4 inline-block rounded-full bg-tertiary/20 px-3 py-1 text-xs font-semibold text-tertiary">
                {type.highlight}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-surface">
                {type.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface/70">
                {type.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore solution
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
