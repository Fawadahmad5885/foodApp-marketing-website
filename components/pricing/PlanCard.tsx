"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { BillingInterval, PlanTier } from "@/lib/constants/pricing";
import {
  formatPrice,
  getAnnualTotal,
  getDiscountedMonthlyPrice,
} from "@/lib/constants/pricing";

type PlanCardProps = {
  plan: PlanTier;
  billing: BillingInterval;
};

export function PlanCard({ plan, billing }: PlanCardProps) {
  const isYearly = billing === "yearly";
  const hasPrice = plan.monthlyPrice !== null;

  const displayPrice = hasPrice
    ? isYearly
      ? getDiscountedMonthlyPrice(plan.monthlyPrice!)
      : plan.monthlyPrice!
    : null;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border bg-surface p-8 shadow-sm transition-shadow duration-300",
        plan.popular
          ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20"
          : "border-border hover:shadow-md",
      )}
    >
      {plan.popular && (
        <Badge
          variant="primary"
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-surface normal-case"
        >
          Most popular
        </Badge>
      )}

      <div>
        <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted">{plan.tagline}</p>
      </div>

      <div className="mt-6 min-h-[5.5rem]">
        {hasPrice ? (
          <>
            <div className="flex items-baseline gap-2">
              {isYearly && (
                <span className="text-lg text-muted line-through">
                  {formatPrice(plan.monthlyPrice!)}
                </span>
              )}
              <span className="text-4xl font-bold tracking-tight text-foreground">
                {formatPrice(displayPrice!)}
              </span>
              <span className="text-sm text-muted">/location/mo</span>
            </div>
            {isYearly ? (
              <p className="mt-1.5 text-xs text-muted">
                Billed annually at {formatPrice(getAnnualTotal(plan.monthlyPrice!))}
                /location
              </p>
            ) : (
              <p className="mt-1.5 text-xs text-muted">
                Billed monthly per location
              </p>
            )}
          </>
        ) : (
          <div>
            <span className="text-4xl font-bold tracking-tight text-foreground">
              Custom
            </span>
            <p className="mt-1.5 text-xs text-muted">
              Volume pricing for 21+ locations
            </p>
          </div>
        )}
      </div>

      <Button
        href={plan.cta.href}
        variant={plan.popular ? "primary" : plan.cta.variant}
        className={cn("mt-6 w-full", plan.popular && "shadow-md shadow-primary/20")}
      >
        {plan.cta.label}
      </Button>

      <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
            <span className="text-foreground/85">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
