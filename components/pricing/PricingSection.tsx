"use client";

import { useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Layers, Sparkles } from "lucide-react";
import { BillingToggle } from "@/components/pricing/BillingToggle";
import { FeatureComparison } from "@/components/pricing/FeatureComparison";
import { PlanCard } from "@/components/pricing/PlanCard";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  productLines,
  type BillingInterval,
  type ProductLineId,
} from "@/lib/constants/pricing";

const validProductIds = new Set<ProductLineId>(
  productLines.map((p) => p.id),
);

function resolveProductId(param: string | null): ProductLineId {
  if (param && validProductIds.has(param as ProductLineId)) {
    return param as ProductLineId;
  }
  return "pos";
}

export function PricingSection() {
  const searchParams = useSearchParams();
  const initialProduct = resolveProductId(searchParams.get("product"));

  const [billing, setBilling] = useState<BillingInterval>("monthly");
  const [activeProductId, setActiveProductId] =
    useState<ProductLineId>(initialProduct);

  const activeProduct =
    productLines.find((p) => p.id === activeProductId) ?? productLines[0];

  const selectProduct = useCallback((id: ProductLineId) => {
    setActiveProductId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("product", id);
    window.history.replaceState(null, "", url);
  }, []);

  return (
    <section className="bg-background py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center">
          <BillingToggle value={billing} onChange={setBilling} />
          <p className="mt-3 text-center text-sm text-muted">
            {billing === "yearly"
              ? "Prices shown are monthly equivalents — billed annually with 10% savings."
              : "Pay month-to-month with no long-term commitment."}
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Product lines"
        >
          {productLines.map((product) => {
            const isActive = product.id === activeProductId;

            return (
              <button
                key={product.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectProduct(product.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "border-primary bg-primary text-surface shadow-sm shadow-primary/25"
                    : "border-border bg-surface text-foreground hover:border-primary/40 hover:bg-primary/5",
                )}
              >
                {product.shortName}
              </button>
            );
          })}
        </div>

        <div
          className={cn(
            "relative mt-10 overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10",
           
            activeProduct.accent,
          )}
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {activeProduct.name}
            </h2>
            <p className="mt-2 text-muted">{activeProduct.description}</p>
          </div>

          <div
            className="mt-10 grid gap-6 lg:grid-cols-3"
            role="tabpanel"
            aria-label={`${activeProduct.name} plans`}
          >
            {activeProduct.plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>

          <FeatureComparison product={activeProduct} />
        </div>

        {/* <div className="mt-12 rounded-2xl border border-border bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Layers className="h-6 w-6 text-primary" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Bundle & save 15%
              </h3>
              <p className="mt-1 max-w-xl text-sm text-muted">
                Combine two or more Fiesta products — POS, Online Ordering, and
                Fleet Management — and unlock an additional 15% bundle discount
                on top of annual savings.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm shadow-primary/25 transition-colors hover:bg-primary/90 sm:mt-0"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Talk to sales
          </a>
        </div> */}

        <PricingFaq />
      </Container>
    </section>
  );
}
