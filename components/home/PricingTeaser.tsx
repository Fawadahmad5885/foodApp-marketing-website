import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricingTeasers } from "@/lib/constants/home";

export function PricingTeaser() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Pricing"
          title="Plans that scale with your business"
          description="Transparent pricing across POS, online ordering, and fleet management. Bundle products and save."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingTeasers.map((product) => (
            <div
              key={product.product}
              className="flex flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {product.product}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted">From</span>
                <span className="text-4xl font-bold text-foreground">
                  {product.startingFrom}
                </span>
                <span className="text-sm text-muted">{product.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {product.plans.map((plan) => (
                  <li key={plan} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    <span className="text-foreground/80">{plan}</span>
                    {plan === product.popular && (
                      <Badge variant="tertiary" className="ml-auto normal-case">
                        Popular
                      </Badge>
                    )}
                  </li>
                ))}
              </ul>

              <Link
                href={product.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                View plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/pricing" variant="outline" size="lg">
            Compare all plans
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
