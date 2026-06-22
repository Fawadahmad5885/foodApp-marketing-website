export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const platformLinks: NavLink[] = [
  {
    label: "Modern POS & RMS",
    href: "/platform/pos-rms",
    description: "Cloud POS, menus, inventory & multi-store",
  },
  {
    label: "Online Ordering",
    href: "/platform/online-ordering",
    description: "Branded website, checkout & promotions",
  },
  {
    label: "Fleet & Driver Management",
    href: "/platform/fleet-management",
    description: "Dispatch, live tracking & route optimization",
  },
  {
    label: "Loyalty & CRM",
    href: "/platform/loyalty-crm",
    description: "Points, segmentation & SMS/push",
  },
  {
    label: "Analytics & BI",
    href: "/platform/analytics",
    description: "Sales reports & customer insights",
  },
  {
    label: "Branded Apps",
    href: "/platform/branded-ordering",
    description: "iOS & Android ordering apps",
  },
  {
    label: "Payments",
    href: "/platform/payments",
    description: "Gateways, cards & reconciliation",
  },
];

export const solutionsLinks: NavLink[] = [
  {
    label: "Restaurants",
    href: "/solutions/restaurants",
    description: "Reduce commissions, own your customers",
  },
  {
    label: "Supermarkets",
    href: "/solutions/supermarkets",
    description: "Deli, bakery & ready-meal ordering",
  },
  {
    label: "Cloud Kitchens",
    href: "/solutions/cloud-kitchens",
    description: "Delivery-first operations at scale",
  },
  {
    label: "Multi-Location",
    href: "/solutions/enterprise",
    description: "Centralized control for chains",
  },
  {
    label: "Other F&B",
    href: "/solutions/food-beverage",
    description: "Cafés, bakeries & food halls",
  },
];

export const primaryNav: NavGroup[] = [
  { label: "Platform", children: platformLinks },
  { label: "Solutions", children: solutionsLinks },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/faq" },
  { label: "Company", href: "/about" },
];

export const footerProductLinks = platformLinks;
export const footerSolutionLinks = solutionsLinks;

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Partners", href: "/partners" },
];
