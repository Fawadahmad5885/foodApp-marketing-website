export type PlatformCapability = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  gradient: string;
};

export const platformCapabilities: PlatformCapability[] = [
  {
    title: "Modern POS & RMS",
    description:
      "Cloud-based point of sale with menus, inventory, and multi-store management.",
    href: "/platform/pos-rms",
    image: "/images/platformoverview/pos-rms.png",
    imageAlt: "Modern POS and restaurant management system",
    gradient: "from-orange-500/20 via-amber-400/10 to-transparent",
  },
  {
    title: "Online Ordering",
    description:
      "Branded ordering website with checkout, promotions, and order management.",
    href: "/platform/online-ordering",
    image: "/images/platformoverview/online-orders.png",
    imageAlt: "Online ordering and branded checkout",
    gradient: "from-violet-500/20 via-purple-400/10 to-transparent",
  },
  {
    title: "Fleet Management",
    description:
      "Rider dispatch, live tracking, and delivery optimization for in-house fleets.",
    href: "/platform/fleet-management",
    image: "/images/platformoverview/fleet-management.png",
    imageAlt: "Delivery fleet management and tracking",
    gradient: "from-sky-500/20 via-blue-400/10 to-transparent",
  },
  {
    title: "Loyalty & CRM",
    description:
      "Points, promotions, customer segmentation, SMS and push notifications.",
    href: "/platform/loyalty-crm",
    image: "/images/platformoverview/loyality-and-crm.png",
    imageAlt: "Loyalty programs and customer relationship management",
    gradient: "from-rose-500/20 via-pink-400/10 to-transparent",
  },
  {
    title: "Analytics & BI",
    description:
      "Sales reports, product performance, and actionable customer insights.",
    href: "/platform/analytics",
    image: "/images/platformoverview/analytics.png",
    imageAlt: "Business analytics and reporting dashboard",
    gradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
  },
  {
    title: "Payments",
    description:
      "Integrated payment gateways, card payments, and reconciliation.",
    href: "/platform/payments",
    image: "/images/platformoverview/payments.png",
    imageAlt: "Integrated payment processing",
    gradient: "from-amber-500/20 via-yellow-400/10 to-transparent",
  },
];

export type BusinessTouchpoint = {
  label: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const businessTouchpoints: BusinessTouchpoint[] = [
  {
    label: "Branded website & app",
    description:
      "Grow your customer base with your own AI-optimised, direct-to-consumer ordering website and mobile app. Built to maximise conversions and keep your brand front and centre, our platforms are fast, intuitive, and SEO-friendly, helping you capture more orders without giving up margin to third-party marketplaces.",
    image: "/images/platformoverview/Branded-website-&-app.png",
    imageAlt: "Branded ordering website and mobile app",
  },
  {
    label: "Loyalty & retention",
    description:
      "Keep customers coming back with automated, personalised marketing campaigns that run while you focus on service. Powered by AI, our loyalty tools deliver tailored rewards, points programs, and special offers at just the right moment to drive repeat purchases and build long-term customer relationships.",
    image: "/images/platformoverview/loyality-and-crm.png",
    imageAlt: "Loyalty and retention tools",
  },
  {
    label: "Automated upsell",
    description:
      "Boost your average order value effortlessly with intelligent add-on suggestions driven by customer purchase history and real-time ordering behaviour. Whether it's recommending sides, drinks, or desserts, Fiesta helps you sell more without adding pressure to your staff.",
    image: "/images/platformoverview/analytics.png",
    imageAlt: "Automated upsell recommendations",
  },
  {
    label: "Delivery network",
    description:
      "No drivers? No problem. Instantly expand your delivery radius with our fully integrated partners like Uber Direct, Stuart, and others. Orders are automatically dispatched, tracked, and delivered under your brand, so you keep the customer relationship while offering a fast, reliable delivery experience.",
    image: "/images/platformoverview/fleet-management.png",
    imageAlt: "Integrated delivery network dashboard",
  },
  {
    label: "Marketing Tools",
    description:
      "Outrank your competitors and get discovered by more customers with our proven, data-driven marketing toolkit. From SEO optimisation and Google Business integration to social media campaigns, every feature is designed to maximise your online visibility and help you outpace the competition.",
    image: "/images/platformoverview/loyality-and-crm.png",
    imageAlt: "Marketing tools and campaigns",
  },
];

export const businessTypes = [
  {
    title: "Restaurants",
    description:
      "Cut aggregator commissions and build direct relationships with diners through your own branded channel.",
    href: "/solutions/restaurants",
    image: "🍽️",
    highlight: "Save up to 30% on commissions",
  },
  {
    title: "Supermarkets",
    description:
      "Sell deli, bakery, and ready meals online with inventory-aware POS that syncs across locations.",
    href: "/solutions/supermarkets",
    image: "🛒",
    highlight: "Inventory-synced ordering",
  },
  {
    title: "Other F&B",
    description:
      "Cafés, bakeries, food halls, and specialty retailers — one platform for every format.",
    href: "/solutions/food-beverage",
    image: "☕",
    highlight: "Flexible for any format",
  },
];

export const testimonials = [
  {
    quote:
      "We moved 40% of our orders to our own channel in three months. Fiesta paid for itself within the first quarter.",
    author: "Ahmed Al-Rashid",
    role: "Owner, Spice Route Kitchen",
    location: "Dubai, UAE",
  },
  {
    quote:
      "Managing 12 locations from one dashboard changed how we operate. Real-time reporting alone saved us hours every week.",
    author: "Sarah Mitchell",
    role: "Operations Director, FreshBite Chain",
    location: "London, UK",
  },
  {
    quote:
      "Our in-house delivery fleet went from chaos to controlled. Live tracking and auto-dispatch cut delivery times by 25%.",
    author: "Omar Hassan",
    role: "CEO, QuickBite Delivery",
    location: "Riyadh, KSA",
  },
];

export const stats = [
  { value: "2M+", label: "Orders processed" },
  { value: "30%", label: "Avg. commission saved" },
  { value: "500+", label: "Businesses onboarded" },
  { value: "15+", label: "Countries served" },
];

export const pricingTeasers = [
  {
    product: "Modern POS & RMS",
    plans: ["Starter", "Professional", "Enterprise"],
    startingFrom: "$49",
    period: "/location/mo",
    popular: "Professional",
    href: "/pricing?product=pos",
  },
  {
    product: "Online Ordering",
    plans: ["Essentials", "Growth", "Scale"],
    startingFrom: "$29",
    period: "/location/mo",
    popular: "Growth",
    href: "/pricing?product=ordering",
  },
  {
    product: "Fleet Management",
    plans: ["Basic", "Pro", "Enterprise"],
    startingFrom: "$39",
    period: "/location/mo",
    popular: "Pro",
    href: "/pricing?product=fleet",
  },
];

export const trustPartnerLogos = [
  { src: "/images/leading-partners/stripe.png", alt: "Stripe" },
  { src: "/images/leading-partners/visa.png", alt: "Visa" },
  { src: "/images/leading-partners/google-pay.png", alt: "Google Pay" },
  { src: "/images/leading-partners/hyperpay.png", alt: "HyperPay" },
] as const;
