import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { trustPartnerLogos } from "@/lib/constants/home";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-surface py-10">
      <Container>
        <p className="mb-6 text-center text-base font-medium uppercase tracking-wider text-gray-600">
          Trusted by <span className="font-bold text-primary">500+</span> food businesses · Integrated with leading partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustPartnerLogos.map((partner) => (
            <Image
              key={partner.src}
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={40}
              className="h-8 w-auto object-containt"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
