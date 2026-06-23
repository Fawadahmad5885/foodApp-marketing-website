"use client";

import { cn } from "@/lib/utils";
import type { BillingInterval } from "@/lib/constants/pricing";
import { YEARLY_DISCOUNT_PERCENT } from "@/lib/constants/pricing";

type BillingToggleProps = {
  value: BillingInterval;
  onChange: (interval: BillingInterval) => void;
};

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  const isYearly = value === "yearly";

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <div
        className="inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-sm"
        role="group"
        aria-label="Billing interval"
      >
        <button
          type="button"
          onClick={() => onChange("monthly")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
            !isYearly
              ? "bg-secondary text-surface shadow-sm"
              : "text-muted hover:text-foreground",
          )}
          aria-pressed={!isYearly}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => onChange("yearly")}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
            isYearly
              ? "bg-secondary text-surface shadow-sm"
              : "text-muted hover:text-foreground",
          )}
          aria-pressed={isYearly}
        >
          Yearly
        </button>
      </div>

      <span
        className={cn(
          "inline-flex items-center rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success transition-opacity duration-200",
          isYearly ? "opacity-100" : "opacity-0 sm:opacity-100",
        )}
        aria-hidden={!isYearly}
      >
        Save {YEARLY_DISCOUNT_PERCENT}% on yearly
      </span>
    </div>
  );
}
