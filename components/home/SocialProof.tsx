import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stats, testimonials } from "@/lib/constants/home";

export function SocialProof() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Social Proof"
          title="Trusted by operators who made the switch"
          description="Real businesses, real results — from independent restaurants to multi-location chains."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-background p-6 text-center"
            >
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-border bg-background p-8"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-6">
                <cite className="not-italic">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                  <p className="text-xs text-muted/70">{testimonial.location}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
