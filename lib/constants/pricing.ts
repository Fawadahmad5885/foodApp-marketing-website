export const YEARLY_DISCOUNT_PERCENT = 10;

export type BillingInterval = "monthly" | "yearly";

export type ProductLineId = "pos" | "ordering" | "fleet";

export type PlanTier = {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  popular?: boolean;
  cta: { label: string; href: string; variant: "primary" | "outline" };
  features: string[];
};

export type ProductLine = {
  id: ProductLineId;
  name: string;
  shortName: string;
  description: string;
  accent: string;
  plans: PlanTier[];
  comparisonFeatures: ComparisonFeature[];
};

export type ComparisonFeature = {
  label: string;
  tiers: Record<string, boolean | string>;
};

export const productLines: ProductLine[] = [
  {
    id: "pos",
    name: "Modern POS & RMS",
    shortName: "POS & RMS",
    description:
      "Cloud point of sale with menus, inventory, and multi-store management.",
    accent: "from-orange-500/15 via-amber-400/5 to-transparent",
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "Single store getting started",
        monthlyPrice: 49,
        cta: {
          label: "Get started",
          href: "/contact?plan=pos-starter",
          variant: "outline",
        },
        features: [
          "Core POS & checkout",
          "Menu & category management",
          "Basic sales reports",
          "Single location",
          "Email support",
        ],
      },
      {
        id: "professional",
        name: "Professional",
        tagline: "Growing businesses with more control",
        monthlyPrice: 99,
        popular: true,
        cta: {
          label: "Get started",
          href: "/contact?plan=pos-professional",
          variant: "primary",
        },
        features: [
          "Everything in Starter",
          "Multi-user roles & permissions",
          "Inventory & stock tracking",
          "Advanced reporting & exports",
          "Kitchen display system",
          "Priority email support",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tagline: "Chains & franchise operations",
        monthlyPrice: null,
        cta: {
          label: "Contact sales",
          href: "/contact?plan=pos-enterprise",
          variant: "outline",
        },
        features: [
          "Everything in Professional",
          "Multi-store central dashboard",
          "API & third-party integrations",
          "Custom SLA & dedicated support",
          "Onboarding & training",
          "Volume pricing",
        ],
      },
    ],
    comparisonFeatures: [
      {
        label: "Locations",
        tiers: { starter: "1", professional: "Up to 5", enterprise: "Unlimited" },
      },
      {
        label: "Staff accounts",
        tiers: { starter: "3", professional: "15", enterprise: "Unlimited" },
      },
      {
        label: "Menu management",
        tiers: { starter: true, professional: true, enterprise: true },
      },
      {
        label: "Inventory tracking",
        tiers: { starter: false, professional: true, enterprise: true },
      },
      {
        label: "Kitchen display (KDS)",
        tiers: { starter: false, professional: true, enterprise: true },
      },
      {
        label: "Advanced analytics",
        tiers: { starter: false, professional: true, enterprise: true },
      },
      {
        label: "Multi-store dashboard",
        tiers: { starter: false, professional: false, enterprise: true },
      },
      {
        label: "API access",
        tiers: { starter: false, professional: false, enterprise: true },
      },
      {
        label: "Dedicated account manager",
        tiers: { starter: false, professional: false, enterprise: true },
      },
    ],
  },
  {
    id: "ordering",
    name: "Online Ordering",
    shortName: "Online Ordering",
    description:
      "Branded ordering website and apps with checkout, promotions, and order management.",
    accent: "from-violet-500/15 via-purple-400/5 to-transparent",
    plans: [
      {
        id: "essentials",
        name: "Essentials",
        tagline: "Direct ordering website",
        monthlyPrice: 29,
        cta: {
          label: "Get started",
          href: "/contact?plan=ordering-essentials",
          variant: "outline",
        },
        features: [
          "Branded ordering website",
          "Menu sync from POS",
          "Online checkout & payments",
          "Basic promotions",
          "Order notifications",
        ],
      },
      {
        id: "growth",
        name: "Growth",
        tagline: "Website plus mobile apps",
        monthlyPrice: 79,
        popular: true,
        cta: {
          label: "Get started",
          href: "/contact?plan=ordering-growth",
          variant: "primary",
        },
        features: [
          "Everything in Essentials",
          "Branded iOS & Android apps",
          "Loyalty program hooks",
          "Advanced promotions & coupons",
          "Customer accounts & order history",
          "Priority support",
        ],
      },
      {
        id: "scale",
        name: "Scale",
        tagline: "High-volume & multi-brand",
        monthlyPrice: 149,
        cta: {
          label: "Get started",
          href: "/contact?plan=ordering-scale",
          variant: "outline",
        },
        features: [
          "Everything in Growth",
          "Multi-brand storefronts",
          "A/B testing & conversion tools",
          "Advanced SEO optimization",
          "White-glove onboarding",
          "SLA-backed uptime",
        ],
      },
    ],
    comparisonFeatures: [
      {
        label: "Branded website",
        tiers: { essentials: true, growth: true, scale: true },
      },
      {
        label: "iOS & Android apps",
        tiers: { essentials: false, growth: true, scale: true },
      },
      {
        label: "Loyalty integration",
        tiers: { essentials: false, growth: true, scale: true },
      },
      {
        label: "Promotions & coupons",
        tiers: { essentials: "Basic", growth: "Advanced", scale: "Advanced" },
      },
      {
        label: "Multi-brand support",
        tiers: { essentials: false, growth: false, scale: true },
      },
      {
        label: "SEO tools",
        tiers: { essentials: false, growth: false, scale: true },
      },
      {
        label: "Conversion analytics",
        tiers: { essentials: false, growth: true, scale: true },
      },
      {
        label: "Custom domain",
        tiers: { essentials: true, growth: true, scale: true },
      },
      {
        label: "Priority support",
        tiers: { essentials: false, growth: true, scale: true },
      },
    ],
  },
  {
    id: "fleet",
    name: "Fleet & Driver Management",
    shortName: "Fleet Management",
    description:
      "Rider dispatch, live tracking, and delivery optimization for in-house fleets.",
    accent: "from-sky-500/15 via-blue-400/5 to-transparent",
    plans: [
      {
        id: "basic",
        name: "Basic",
        tagline: "Small in-house fleet",
        monthlyPrice: 39,
        cta: {
          label: "Get started",
          href: "/contact?plan=fleet-basic",
          variant: "outline",
        },
        features: [
          "Rider list & profiles",
          "Manual order assignment",
          "Delivery status tracking",
          "Basic delivery reports",
          "Rider mobile app",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        tagline: "Active delivery operations",
        monthlyPrice: 89,
        popular: true,
        cta: {
          label: "Get started",
          href: "/contact?plan=fleet-pro",
          variant: "primary",
        },
        features: [
          "Everything in Basic",
          "Auto-dispatch engine",
          "Live map & GPS tracking",
          "Route optimization",
          "Delivery time estimates",
          "Customer live tracking link",
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tagline: "Large fleets & multi-zone",
        monthlyPrice: null,
        cta: {
          label: "Contact sales",
          href: "/contact?plan=fleet-enterprise",
          variant: "outline",
        },
        features: [
          "Everything in Pro",
          "Multi-zone management",
          "Third-party fleet integrations",
          "Advanced delivery analytics",
          "Custom workflows",
          "Dedicated support & SLA",
        ],
      },
    ],
    comparisonFeatures: [
      {
        label: "Active riders",
        tiers: { basic: "Up to 10", pro: "Up to 50", enterprise: "Unlimited" },
      },
      {
        label: "Auto-dispatch",
        tiers: { basic: false, pro: true, enterprise: true },
      },
      {
        label: "Live GPS tracking",
        tiers: { basic: false, pro: true, enterprise: true },
      },
      {
        label: "Route optimization",
        tiers: { basic: false, pro: true, enterprise: true },
      },
      {
        label: "Customer tracking link",
        tiers: { basic: false, pro: true, enterprise: true },
      },
      {
        label: "Multi-zone delivery",
        tiers: { basic: false, pro: false, enterprise: true },
      },
      {
        label: "Third-party integrations",
        tiers: { basic: false, pro: false, enterprise: true },
      },
      {
        label: "Delivery analytics",
        tiers: { basic: "Basic", pro: "Advanced", enterprise: "Advanced" },
      },
      {
        label: "Dedicated support",
        tiers: { basic: false, pro: false, enterprise: true },
      },
    ],
  },
];

export const pricingFaqs = [
  {
    question: "How does per-location pricing work?",
    answer:
      "All listed prices are per location per month. Multi-location businesses can add locations at the same plan rate. Enterprise customers with 21+ locations receive volume pricing — contact our sales team for a custom quote.",
  },
  {
    question: "What is included in the yearly discount?",
    answer:
      "When you choose annual billing, you save 10% on your subscription. You are billed once per year at the discounted rate, equivalent to 10% off the monthly price.",
  },
  {
    question: "Can I bundle multiple Fiesta products?",
    answer:
      "Yes. Many businesses combine POS, Online Ordering, and Fleet Management. Bundle two or more products and save an additional 15% — ask our team when you register or book a demo.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a guided onboarding period for new customers. Book a demo to see the platform in action and discuss trial options for your business size and needs.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Plans can be changed at any time. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle. Our team will help migrate your data seamlessly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards and bank transfers for annual contracts. Enterprise customers can arrange invoicing with net-30 terms.",
  },
];

export function getDiscountedMonthlyPrice(monthlyPrice: number): number {
  return Math.round(monthlyPrice * (1 - YEARLY_DISCOUNT_PERCENT / 100));
}

export function getAnnualTotal(monthlyPrice: number): number {
  return getDiscountedMonthlyPrice(monthlyPrice) * 12;
}

export function formatPrice(amount: number): string {
  return `$${amount}`;
}

export function getProductLineById(id: ProductLineId): ProductLine | undefined {
  return productLines.find((p) => p.id === id);
}
