import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCarousel } from "@/components/home/HeroCarousel";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge variant="tertiary" className="mb-6">
              Restaurant Technology Platform
            </Badge>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Own your digital ordering.{" "}
              <span className="text-primary">Grow on your terms.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Fiesta gives restaurants and F&B businesses a complete platform —
              branded ordering, cloud POS, fleet management, loyalty, and
              analytics — so you keep your customers and your margins.
            </p>

            <Button
              href="/register"
              variant="outline"
              size="md"
              className="mt-8 hover:bg-primary hover:text-white"
            >
              Get Started
            </Button>
          </div>

          <HeroCarousel />
        </div>
      </Container>
    </section>
  );
}
