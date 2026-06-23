import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductLine } from "@/lib/constants/pricing";

type FeatureComparisonProps = {
  product: ProductLine;
};

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check className="h-4 w-4 text-success" aria-label="Included" />
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="h-4 w-4 text-border" aria-label="Not included" />
      </span>
    );
  }

  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export function FeatureComparison({ product }: FeatureComparisonProps) {
  const tierIds = product.plans.map((p) => p.id);
  const tierNames = product.plans.map((p) => p.name);

  return (
    <div className="mt-16">
      <h3 className="text-center text-xl font-bold text-foreground sm:text-2xl">
        Compare {product.shortName} plans
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
        See what&apos;s included at each tier
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-background/60">
              <th
                scope="col"
                className="px-6 py-4 text-sm font-semibold text-muted"
              >
                Feature
              </th>
              {tierNames.map((name, i) => (
                <th
                  key={tierIds[i]}
                  scope="col"
                  className={cn(
                    "px-6 py-4 text-center text-sm font-semibold",
                    product.plans[i].popular
                      ? "text-primary"
                      : "text-foreground",
                  )}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.comparisonFeatures.map((feature, rowIndex) => (
              <tr
                key={feature.label}
                className={cn(
                  "border-b border-border last:border-b-0",
                  rowIndex % 2 === 0 ? "bg-surface" : "bg-background/40",
                )}
              >
                <th
                  scope="row"
                  className="px-6 py-4 text-sm font-medium text-foreground"
                >
                  {feature.label}
                </th>
                {tierIds.map((tierId) => (
                  <td key={tierId} className="px-6 py-4 text-center">
                    <FeatureCell value={feature.tiers[tierId] ?? false} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
