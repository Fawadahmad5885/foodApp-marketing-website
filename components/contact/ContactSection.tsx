import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { contactDetails } from "@/lib/constants/contact";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactDetails.phone,
    href: contactDetails.phoneHref,
  },
  {
    icon: MapPin,
    label: "Offices",
    value: contactDetails.locations,
  },
  {
    icon: Clock,
    label: "Business hours",
    value: contactDetails.hours,
  },
] as const;

export function ContactSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <Image
        src="/hero/slide-2.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-br from-secondary/95 via-secondary/85 to-secondary/75"
        aria-hidden
      />
      <div
        className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative py-16 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-surface">
            <Badge variant="tertiary" className="mb-6">
              Contact
            </Badge>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Let&apos;s talk about your business
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-surface/80">
              Have a question about Fiesta, pricing, or partnerships? Send us a
              message and our team will get back to you shortly.
            </p>

            <ul className="mt-10 space-y-5">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-tertiary">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-surface/90">
                      {channel.value}
                    </span>
                  </>
                );

                return (
                  <li key={channel.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5 text-tertiary" />
                    </div>
                    {"href" in channel && channel.href ? (
                      <a
                        href={channel.href}
                        className="transition-colors hover:text-white"
                      >
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 text-sm text-surface/60">
              Prefer a guided walkthrough?{" "}
              <Link
                href="/book-demo"
                className="font-semibold text-tertiary transition-colors hover:text-white"
              >
                Book a demo
              </Link>{" "}
              with our sales team.
            </p>
          </div>

          <Card className="border-white/20 bg-surface/95 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-muted">
                General inquiries only — not for demo or registration requests.
              </p>
            </div>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
