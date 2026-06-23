import type { Metadata } from "next";
import { Suspense } from "react";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PricingHero } from "@/components/pricing/PricingHero";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Fiesta POS, Online Ordering, and Fleet Management. Compare plans, save 10% with annual billing, and bundle products to save more.",
  openGraph: {
    title: "Pricing | Fiesta",
    description:
      "Plans that scale with your business. Monthly or yearly billing with 10% annual savings.",
  },
};

function PricingSectionFallback() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto h-96 max-w-7xl animate-pulse rounded-2xl bg-border/40 px-4" />
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Suspense fallback={<PricingSectionFallback />}>
        <PricingSection />
      </Suspense>
      <FinalCta />
    </>
  );
}
