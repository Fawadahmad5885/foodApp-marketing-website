import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorksSteps } from "@/lib/constants/home";

export function HowItWorks() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="How It Works"
          title="From signup to first order in days, not months"
          description="A streamlined onboarding path designed for busy operators who need to move fast."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-border lg:block" aria-hidden />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-border bg-surface shadow-sm lg:mx-0">
                  <span className="text-3xl font-bold text-primary/20">
                    {step.step}
                  </span>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border lg:block"
                    aria-hidden
                  />
                )}
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
