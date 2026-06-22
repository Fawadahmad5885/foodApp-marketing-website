import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-tertiary/20 blur-3xl" />

      <Container className="relative text-center">
        <h2 className="text-3xl font-bold tracking-tight text-surface sm:text-4xl lg:text-5xl">
          Ready to own your digital future?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-surface/80">
          Join hundreds of food businesses that switched from aggregator
          dependency to a platform they control. Start with a demo or register
          today.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="/book-demo"
            size="lg"
            className="bg-surface text-primary hover:bg-surface/90 shadow-xl"
          >
            Book a Demo
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            href="/register"
            variant="outline"
            size="lg"
            className="border-surface text-surface hover:bg-white/10"
          >
            Register Your Business
          </Button>
        </div>

        <p className="mt-6 text-sm text-surface/60">
          No credit card required · Setup in days · Dedicated onboarding support
        </p>
      </Container>
    </section>
  );
}
