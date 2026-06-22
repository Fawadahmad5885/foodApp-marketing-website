import { Container } from "@/components/ui/Container";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";

export function Clients() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <Container>
      <p className="mb-6 text-center text-base font-medium uppercase tracking-wider text-gray-600">
          From local cafés to multi-outlet chains
        </p>
      </Container>

      <ClientsCarousel />
    </section>
  );
}
