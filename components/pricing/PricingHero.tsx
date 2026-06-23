import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-tertiary/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative py-16 text-center lg:py-20">
        <Badge variant="tertiary" className="mb-6">
          Pricing
        </Badge>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
          Plans that scale with{" "}
          <span className="text-primary">your business</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Transparent per-location pricing across POS, online ordering, and fleet
          management. Switch between monthly and yearly billing — save 10% when
          you pay annually.
        </p>
      </Container>
    </section>
  );
}
