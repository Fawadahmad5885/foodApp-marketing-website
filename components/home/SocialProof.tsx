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
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex size-28 flex-col items-center justify-center rounded-2xl  bg-background p-3 text-center sm:size-32 lg:size-48"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl xl:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 lg:mt-2 xl:mt-3 text-xs text-muted sm:text-sm lg:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
