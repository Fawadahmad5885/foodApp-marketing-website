# Fiesta Marketing Website — Requirements & Vision Document

**Version:** 1.0  
**Last updated:** June 19, 2026  
**Project:** `fiesta-marketing-website`  
**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4

---

## 1. Executive Summary

Fiesta is a restaurant technology platform that helps food and beverage businesses **own their digital ordering channels** instead of relying solely on third-party aggregators (Foodpanda, Uber Eats, Talabat, Careem). The platform provides a complete ecosystem: POS, online ordering, delivery management, loyalty, CRM, analytics, and branded mobile apps.

The **Fiesta Marketing Website** is the public-facing entry point for prospects. Its primary goals are to:

1. Communicate Fiesta’s value proposition clearly and persuasively.
2. Convert visitors into **demo requests** or **registered businesses**.
3. Present **pricing plans** across product lines (Modern POS & RMS, Online Ordering, Fleet & Driver Management).
4. Educate prospects on features, use cases, and industry fit (Restaurant, Supermarket, Other F&B).
5. Build trust through social proof, content, and transparent product information.

This document defines the **vision, scope, user journeys, and modules** to be implemented on the marketing website.

---

## 2. Vision & Positioning

### 2.1 Vision Statement

> Empower every restaurant and food business to take control of their digital future — own their customers, reduce aggregator dependency, and run operations from one unified platform.

### 2.2 Positioning

| Dimension | Fiesta Marketing Website |
|-----------|--------------------------|
| **Audience** | Restaurant owners, F&B operators, multi-location chains, supermarkets with prepared food |
| **Problem** | High aggregator commissions, lost customer data, fragmented tools for POS, delivery, and marketing |
| **Solution** | Branded ordering channels + cloud POS/RMS + fleet management + loyalty/CRM + analytics |
| **Differentiator** | End-to-end ownership of the digital stack, not just a single point solution |
| **Primary CTA** | Book a Demo · Register Your Business |

### 2.3 Brand Messaging Pillars

1. **Own Your Channel** — Branded website and mobile apps; direct customer relationships.
2. **Run Your Operations** — Cloud POS, RMS, inventory, and multi-store management.
3. **Deliver Your Way** — In-house fleet, rider assignment, live tracking.
4. **Grow Your Business** — Loyalty, CRM, promotions, SMS/push, analytics.
5. **Pay Your Way** — Integrated payment gateways and card payments.

---

## 3. Goals & Success Metrics

### 3.1 Business Goals

- Increase qualified demo bookings month-over-month.
- Grow self-serve business registrations with complete profile data (business type, store count, plan interest).
- Reduce sales cycle by pre-qualifying leads through registration and pricing pages.
- Support SEO and content marketing for organic acquisition.

### 3.2 Key Performance Indicators (KPIs)

| Metric | Description |
|--------|-------------|
| Demo conversion rate | % of unique visitors who complete “Book a Demo” |
| Registration completion rate | % who finish full business registration flow |
| Plan selection rate | % of registrations with at least one plan selected |
| Pricing page engagement | Time on page, plan comparison interactions, CTA clicks |
| Lead quality score | Completeness of business profile (type, stores, plan, contact) |

---

## 4. Target Personas

| Persona | Description | Primary Need |
|---------|-------------|--------------|
| **Independent Restaurant Owner** | Single location, heavy aggregator use | Reduce commissions, own customer data |
| **Multi-Location Operator** | 2–50+ stores | Centralized POS, reporting, brand consistency |
| **Supermarket / Retail F&B** | Grocery with deli, bakery, ready meals | Online ordering + inventory-aware POS |
| **Cloud Kitchen / Delivery-First** | Delivery-centric model | Fleet management, online ordering, analytics |
| **Enterprise / Franchise** | Large chains | Custom pricing, multi-brand, integrations |

---

## 5. User Journeys

### 5.1 Journey A — Book a Demo

```
Landing Page → Feature/Use Case Page → Book a Demo Form → Confirmation → Sales Follow-up
```

**Demo form fields (minimum):**

- Full name
- Business name
- Email
- Phone (with country code)
- Business type: Restaurant · Supermarket · Other Food & Beverages
- Number of stores: 1 · 2–5 · 6–20 · 21+
- Products of interest (multi-select): Modern POS & RMS · Online Ordering · Fleet & Driver Management · Loyalty & CRM · Branded Apps · Analytics
- Optional: Current POS / aggregator usage, message

**Outcomes:**

- Confirmation page with next steps and expected response time.
- Email notification to prospect and sales team.
- CRM/lead capture integration (future phase).

### 5.2 Journey B — Register Your Business

```
Landing / Pricing → Register → Business Profile → Plan Selection → Account Creation → Onboarding Welcome
```

**Registration steps:**

1. **Contact & Account** — Name, email, phone, password (or magic link).
2. **Business Profile**
   - Business legal / trading name
   - Business type: Restaurant · Supermarket · Other Food & Beverages
   - Number of stores
   - Country / city (for localization and sales routing)
   - Optional: Tax ID, website URL
3. **Plan Selection** — Choose one or more product plans (see Section 8).
4. **Review & Submit** — Summary, terms acceptance, privacy policy.
5. **Welcome** — Redirect to onboarding portal or “We’ll contact you” for enterprise/custom plans.

### 5.3 Journey C — Explore & Compare Pricing

```
Pricing Page → Filter by Business Type / Store Count → Compare Plans → Book Demo OR Register
```

---

## 6. Information Architecture

### 6.1 Primary Navigation

| Nav Item | Purpose |
|----------|---------|
| **Platform** (mega menu) | POS & RMS, Online Ordering, Fleet Management, Loyalty & CRM, Analytics, Branded Apps, Payments |
| **Solutions** | By business type: Restaurants, Supermarkets, Cloud Kitchens, Multi-Location |
| **Pricing** | Plan comparison and calculators |
| **Resources** | Blog, case studies, guides, FAQ, help center links |
| **Company** | About, careers, contact, partners |
| **Book a Demo** (button) | Primary CTA |
| **Register** (button) | Secondary CTA |

### 6.2 Footer Structure

- Product links (all platform modules)
- Solutions by industry
- Legal: Privacy Policy, Terms of Service, Cookie Policy
- Contact: email, phone, social links
- Language / region selector (future)

---

## 7. Website Modules — Complete Implementation List

Each module below is a discrete deliverable for the marketing website. Modules marked **Phase 1** are launch-critical; **Phase 2** can follow shortly after launch.

---

### Module 1 — Global Layout & Design System

**Purpose:** Consistent brand experience across all pages.

**Requirements:**

- Responsive header with logo, navigation, and dual CTAs (Book a Demo, Register).
- Footer with sitemap, legal links, and contact.
- Design tokens: colors, typography, spacing, breakpoints (Tailwind theme).
- Reusable UI components: Button, Card, Badge, Input, Select, Checkbox, Modal, Accordion, Tabs, Tooltip.
- Dark/light mode support (optional Phase 2).
- Accessibility: WCAG 2.1 AA target (focus states, contrast, semantic HTML, ARIA where needed).

**Deliverables:**

- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `components/ui/*`
- `app/globals.css` theme configuration

#### Design Tokens — Fiesta Signature Theme

The official color theme for the Fiesta marketing website. It balances **hospitality warmth** (food & celebration), **SaaS credibility** (trust & professionalism), and **conversion-focused CTAs**.

##### Brand Colors

| Token | Name | Hex | Usage |
|-------|------|-----|--------|
| `primary` | Fiesta Coral | `#E8432A` | Primary CTAs (Book a Demo, Register), links, key highlights, active states |
| `secondary` | Deep Navy | `#0F172A` | Header, footer, hero backgrounds, headings on light surfaces |
| `tertiary` | Golden Amber | `#F5A623` | Badges, plan highlights (“Popular”), icons, secondary accents |

##### Supporting Colors

| Token | Name | Hex | Usage |
|-------|------|-----|--------|
| `background` | Warm White | `#FAFAF8` | Page background |
| `surface` | Pure White | `#FFFFFF` | Cards, modals, form fields |
| `foreground` | Ink | `#1A1A2E` | Body text, primary content |
| `muted` | Slate | `#64748B` | Secondary text, captions, placeholders |
| `border` | Light Gray | `#E2E8F0` | Dividers, input borders, card outlines |
| `success` | Green | `#16A34A` | Success states, confirmation messages |
| `error` | Red | `#DC2626` | Validation errors, destructive actions |
| `warning` | Amber | `#D97706` | Warnings, pending states |

##### Semantic Usage Guide

| Element | Token | Hex |
|---------|-------|-----|
| Primary button (filled) | `primary` | `#E8432A` |
| Primary button text | `surface` | `#FFFFFF` |
| Secondary button (outline) | `primary` border + text | `#E8432A` |
| Navbar / footer background | `secondary` | `#0F172A` |
| Navbar / footer text | `surface` | `#FFFFFF` |
| “Popular plan” badge | `tertiary` | `#F5A623` |
| Page background | `background` | `#FAFAF8` |
| Section heading text | `foreground` | `#1A1A2E` |
| Subtext / meta | `muted` | `#64748B` |

##### CSS Custom Properties

Implemented in `app/globals.css`:

```css
:root {
  /* Brand */
  --fiesta-primary:   #E8432A;
  --fiesta-secondary: #0F172A;
  --fiesta-tertiary:  #F5A623;

  /* Supporting */
  --fiesta-background: #FAFAF8;
  --fiesta-surface:    #FFFFFF;
  --fiesta-foreground: #1A1A2E;
  --fiesta-muted:      #64748B;
  --fiesta-border:     #E2E8F0;
  --fiesta-success:    #16A34A;
  --fiesta-error:      #DC2626;
  --fiesta-warning:    #D97706;
}
```

##### Tailwind CSS 4 Theme Mapping

Tailwind utility classes are available via `@theme inline` in `globals.css`:

| Utility class | Resolves to |
|---------------|-------------|
| `bg-primary` / `text-primary` | `#E8432A` |
| `bg-secondary` / `text-secondary` | `#0F172A` |
| `bg-tertiary` / `text-tertiary` | `#F5A623` |
| `bg-background` | `#FAFAF8` |
| `bg-surface` | `#FFFFFF` |
| `text-foreground` | `#1A1A2E` |
| `text-muted` | `#64748B` |
| `border-border` | `#E2E8F0` |

##### Accessibility Notes

- **White on Primary (`#FFFFFF` on `#E8432A`):** Passes WCAG AA for button labels.
- **White on Secondary (`#FFFFFF` on `#0F172A`):** Passes WCAG AAA.
- **Tertiary (`#F5A623`):** Use for badges, icons, and small accents only — not for body text on white backgrounds (contrast ratio is below AA for small text).

##### Alternative Themes (Future Reference)

These are documented for potential A/B testing or sub-brand use; **Fiesta Signature** is the default.

| Theme | Primary | Secondary | Tertiary |
|-------|---------|-----------|----------|
| Fresh Growth | `#059669` | `#1E293B` | `#EA580C` |
| Premium Tech | `#4F46E5` | `#0B1220` | `#D4A017` |

---

### Module 2 — Homepage

**Purpose:** Primary landing page; communicate value and drive conversion.

**Sections:**

1. **Hero** — Headline, subheadline, primary CTA (Book a Demo), secondary CTA (Register), hero visual (product mockup or video).
2. **Trust bar** — Logos of customers or “As seen in” / integration partners.
3. **Problem / Solution** — Aggregator dependency vs. owning your channel.
4. **Platform overview** — Six core capabilities (cards linking to feature pages).
5. **How it works** — 3–4 step flow (Register → Configure → Launch → Grow).
6. **Business types** — Restaurant, Supermarket, Other F&B with tailored messaging.
7. **Social proof** — Testimonials, stats (orders processed, commission saved, etc.).
8. **Pricing teaser** — Summary cards with link to full Pricing page.
9. **Final CTA** — Book a Demo + Register.

**Routes:** `/`

---

### Module 3 — Platform / Feature Pages

**Purpose:** Deep-dive pages for each Fiesta product capability.

| Page | Route | Content Focus |
|------|-------|---------------|
| Branded Ordering & Mobile Apps | `/platform/branded-ordering` | Website + iOS/Android apps, commission savings, customer ownership |
| Modern POS & RMS | `/platform/pos-rms` | Cloud POS, menus, inventory, operations, multi-store |
| Online Ordering | `/platform/online-ordering` | Direct ordering, checkout, promotions, order management |
| Fleet & Driver Management | `/platform/fleet-management` | Rider management, dispatch, live tracking, delivery optimization |
| Loyalty & CRM | `/platform/loyalty-crm` | Points, promotions, segmentation, SMS, push notifications |
| Analytics & BI | `/platform/analytics` | Sales reports, product performance, customer insights |
| Payment Integration | `/platform/payments` | Gateways, card payments, reconciliation |

**Each page includes:**

- Hero with feature-specific headline
- Benefit bullets and comparison vs. status quo
- Product screenshots / illustrations
- Use case snippets
- Related plans (link to Pricing)
- CTA: Book a Demo · Register

---

### Module 4 — Solutions by Business Type

**Purpose:** Tailored messaging for different verticals.

| Page | Route |
|------|-------|
| Restaurants | `/solutions/restaurants` |
| Supermarkets | `/solutions/supermarkets` |
| Other Food & Beverages | `/solutions/food-beverage` |
| Multi-Location / Enterprise | `/solutions/enterprise` |
| Cloud Kitchens | `/solutions/cloud-kitchens` |

**Requirements:**

- Industry-specific pain points and Fiesta solutions.
- Recommended plan bundles per vertical.
- Case study or testimonial where available.
- Registration pre-fill: business type passed via query param (e.g. `/register?type=restaurant`).

---

### Module 5 — Pricing Page

**Purpose:** Transparent plan comparison across Fiesta product lines.

**Product Lines & Plan Structure:**

#### 5.1 Modern POS & RMS

| Tier | Target | Highlights |
|------|--------|------------|
| **Starter** | Single store | Core POS, basic menu, reports |
| **Professional** | Growing businesses | Multi-user, inventory, advanced reports |
| **Enterprise** | Chains | Multi-store, API, dedicated support, custom SLA |

#### 5.2 Online Ordering System

| Tier | Target | Highlights |
|------|--------|------------|
| **Essentials** | Direct ordering website | Branded site, menu sync, basic promotions |
| **Growth** | Website + apps | Branded iOS/Android apps, loyalty hooks |
| **Scale** | High volume | Advanced promotions, multi-brand, priority support |

#### 5.3 Fleet & Driver Management

| Tier | Target | Highlights |
|------|--------|------------|
| **Basic** | Small in-house fleet | Rider list, manual assignment, status tracking |
| **Pro** | Active delivery ops | Auto-dispatch, live map, route optimization |
| **Enterprise** | Large fleets | Multi-zone, integrations, analytics |

**Pricing Page Features:**

- Tabbed or segmented view by product line (POS & RMS · Online Ordering · Fleet Management).
- Monthly / annual billing toggle (if applicable).
- Feature comparison matrix per product line.
- “Recommended for you” based on business type and store count (interactive selector).
- Store-count multiplier or tier note (e.g. per location pricing).
- FAQ accordion (billing, contracts, upgrades, trials).
- CTAs on each plan: **Register** (pre-select plan) · **Book a Demo** (enterprise/custom).
- Optional: pricing calculator (stores × plan = estimated monthly cost).

**Route:** `/pricing`

---

### Module 6 — Book a Demo

**Purpose:** Capture high-intent leads for sales outreach.

**Requirements:**

- Dedicated page: `/book-demo`
- Multi-step or single-page form (prefer single page for lower friction).
- Fields: see Section 5.1.
- Client-side validation; server-side validation on submit.
- Honeypot / rate limiting for spam protection.
- Success state: confirmation message, calendar link (optional), email sent.
- UTM parameter capture for attribution.
- Embed variant for inline use on homepage and feature pages (`<BookDemoForm />`).

**API / Integration (Phase 1 stub, Phase 2 live):**

- `POST /api/leads/demo` — store lead, notify sales (email, webhook, CRM).

---

### Module 7 — Business Registration

**Purpose:** Self-serve signup with business profiling and plan selection.

**Requirements:**

- Route: `/register`
- Multi-step wizard:
  1. Account (email, password, name, phone)
  2. Business profile (name, type, store count, location)
  3. Plan selection (one or more from POS, Online Ordering, Fleet)
  4. Review & accept terms
- Business type options:
  - **Restaurant**
  - **Supermarket**
  - **Other Food & Beverages**
- Number of stores options:
  - 1
  - 2–5
  - 6–20
  - 21+
- Plan cards with feature summaries; allow multiple selections (bundle).
- Query param support: `?type=restaurant&stores=2-5&plan=pos-professional`
- Validation at each step; progress indicator.
- Success: welcome page + email verification flow (if auth enabled).

**API / Integration:**

- `POST /api/register` — create lead/account, trigger onboarding email.
- Future: redirect to Fiesta admin/onboarding portal with SSO.

---

### Module 8 — Authentication (Optional Phase 2)

**Purpose:** Returning users manage demo requests or continue registration.

**Scope (if in scope):**

- Login / logout
- Email verification
- Password reset
- “My account” stub linking to product portal

**Route:** `/login`, `/account`

---

### Module 9 — Resources & Content

**Purpose:** SEO, education, and trust building.

| Sub-module | Route | Description |
|------------|-------|-------------|
| Blog listing | `/blog` | Article grid with categories |
| Blog post | `/blog/[slug]` | MDX or CMS-driven articles |
| Case studies | `/case-studies`, `/case-studies/[slug]` | Customer success stories |
| FAQ | `/faq` | Common questions; link from Pricing |
| Help / Docs link | External or `/docs` | Link to product documentation |

**Phase 1:** Static FAQ page + 2–3 placeholder case studies.  
**Phase 2:** Full blog with CMS (Contentful, Sanity, or MDX).

---

### Module 10 — Company Pages

| Page | Route |
|------|-------|
| About Us | `/about` |
| Contact | `/contact` |
| Careers | `/careers` |
| Partners | `/partners` |

**Contact page:** General inquiry form (distinct from demo form).

---

### Module 11 — Legal & Compliance

| Page | Route |
|------|-------|
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |
| Cookie Policy | `/cookies` |

**Requirements:**

- Linked from footer and registration flow.
- Cookie consent banner (GDPR / regional compliance).
- Data processing notice on forms.

---

### Module 12 — Integrations & Partners Showcase

**Purpose:** Highlight payment gateways, aggregators (migration story), hardware, and tech partners.

**Route:** `/integrations`

**Content:**

- Payment gateways supported
- POS hardware compatibility (if applicable)
- “Switch from Foodpanda / Uber Eats / Talabat / Careem” migration narrative

---

### Module 13 — Comparison / Why Fiesta

**Purpose:** Competitive positioning without naming-only attacks.

**Route:** `/why-fiesta` or `/compare`

**Content:**

- Fiesta vs. aggregator-only model (commission, data ownership)
- Fiesta vs. point solutions (POS-only, ordering-only)
- Feature checklist table

---

### Module 14 — Localization & Regionalization (Phase 2)

**Purpose:** Support multiple markets (e.g. UAE, KSA, Pakistan).

**Requirements:**

- Language switcher (EN, AR minimum for MENA)
- RTL layout support for Arabic
- Region-specific pricing currency and contact details
- hreflang tags for SEO

---

### Module 15 — SEO, Analytics & Marketing Tags

**Requirements:**

- Per-page metadata (title, description, Open Graph, Twitter cards).
- Structured data: Organization, Product, FAQ, BreadcrumbList.
- XML sitemap and robots.txt.
- Google Analytics 4 / Plausible / Mixpanel.
- Meta Pixel, LinkedIn Insight Tag (configurable via env).
- UTM preservation across CTAs and forms.

---

### Module 16 — Performance & Technical Foundation

**Requirements:**

- Next.js App Router with static generation where possible; ISR for blog.
- Image optimization (`next/image`).
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Mobile-first responsive design.
- Form submissions via Route Handlers (`app/api/*`).
- Environment-based config (API URLs, analytics IDs).
- Error boundaries and custom 404 / 500 pages.

---

## 8. Plan Selection Matrix (Registration & Pricing)

When a user registers or selects a plan, the following data must be captured and passed to sales/onboarding:

| Field | Values |
|-------|--------|
| Business type | Restaurant · Supermarket · Other Food & Beverages |
| Number of stores | 1 · 2–5 · 6–20 · 21+ |
| POS & RMS plan | Starter · Professional · Enterprise · None |
| Online Ordering plan | Essentials · Growth · Scale · None |
| Fleet plan | Basic · Pro · Enterprise · None |
| Billing preference | Monthly · Annual (optional at registration) |

**Business rules:**

- At least one product plan must be selected OR “Not sure — contact me” option for demo-led sales.
- Enterprise store counts (21+) may show “Contact sales” instead of self-serve checkout.
- Bundling discount messaging on Pricing page when multiple products selected.

---

## 9. Forms & Data Model (Marketing Leads)

### 9.1 Demo Lead

```typescript
type DemoLead = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: "restaurant" | "supermarket" | "other_fnb";
  storeCount: "1" | "2-5" | "6-20" | "21+";
  productsOfInterest: Array<
    "pos_rms" | "online_ordering" | "fleet" | "loyalty_crm" | "branded_apps" | "analytics"
  >;
  message?: string;
  source?: string; // page URL
  utm?: Record<string, string>;
  createdAt: string;
};
```

### 9.2 Business Registration

```typescript
type BusinessRegistration = {
  // Account
  fullName: string;
  email: string;
  phone: string;
  password?: string;

  // Business
  businessName: string;
  businessType: "restaurant" | "supermarket" | "other_fnb";
  storeCount: "1" | "2-5" | "6-20" | "21+";
  country: string;
  city?: string;

  // Plans
  plans: {
    posRms?: "starter" | "professional" | "enterprise";
    onlineOrdering?: "essentials" | "growth" | "scale";
    fleet?: "basic" | "pro" | "enterprise";
  };

  acceptedTerms: boolean;
  utm?: Record<string, string>;
  createdAt: string;
};
```

---

## 10. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| **Availability** | 99.9% uptime (hosting on Vercel or equivalent) |
| **Security** | HTTPS, CSRF protection on forms, input sanitization, no secrets in client |
| **Privacy** | GDPR-ready consent, privacy policy, data retention policy |
| **Accessibility** | WCAG 2.1 AA |
| **Browsers** | Latest Chrome, Firefox, Safari, Edge; iOS Safari, Android Chrome |
| **Performance** | Lighthouse performance score ≥ 90 on homepage |
| **Maintainability** | Component-driven architecture, TypeScript strict mode |

---

## 11. Content Requirements

Copy and assets needed before launch:

- [ ] Fiesta logo (light/dark variants)
- [ ] Product screenshots and app mockups
- [ ] Hero video or animation (optional)
- [ ] Customer logos and testimonials
- [ ] Pricing figures (or “Starting from” placeholders)
- [ ] Legal pages reviewed by counsel
- [ ] FAQ content (minimum 15 questions)
- [ ] Feature page copy for all 7 platform modules
- [ ] Email templates: demo confirmation, registration welcome

---

## 12. Implementation Phases

### Phase 1 — Launch MVP (8–10 weeks indicative)

| Priority | Modules |
|----------|---------|
| P0 | Module 1 (Layout/Design System), Module 2 (Homepage), Module 5 (Pricing), Module 6 (Book a Demo), Module 7 (Registration), Module 11 (Legal) |
| P1 | Module 3 (Feature pages — all 7), Module 4 (Solutions — 3 core types), Module 15 (SEO/Analytics), Module 16 (Technical foundation) |
| P2 | Module 10 (Company pages), Module 12 (Integrations), Module 13 (Why Fiesta), Module 9 (FAQ) |

### Phase 2 — Growth

- Module 8 (Auth), Module 9 (Blog/CMS), Module 14 (Localization)
- Live CRM integration (HubSpot, Salesforce, or custom)
- A/B testing on hero and pricing CTAs
- Live chat / chatbot

### Phase 3 — Optimization

- Personalization by business type
- Pricing calculator
- Customer portal SSO
- Advanced analytics and lead scoring

---

## 13. Out of Scope (Marketing Website)

The following belong to the **Fiesta product platform**, not this marketing site:

- POS application UI
- Restaurant admin dashboard (except links/redirects post-registration)
- Order processing, payment processing, delivery dispatch
- Customer-facing ordering apps (except marketing previews)
- Internal sales CRM (integrate only via API/webhook)

---

## 14. Open Questions & Decisions Needed

| # | Question | Owner |
|---|----------|-------|
| 1 | Final pricing numbers and currency per region? | Product / Finance |
| 2 | Self-serve payment at registration or sales-assisted only? | Sales |
| 3 | CRM tool for lead routing (HubSpot, Salesforce, custom)? | Sales / Engineering |
| 4 | Arabic / RTL required at launch? | Product |
| 5 | Free trial period offered on marketing site? | Product |
| 6 | SSO redirect URL for post-registration onboarding? | Engineering |

---

## 15. Appendix — Route Map Summary

```
/                           Homepage
/platform/*                 Feature pages (7)
/solutions/*                Industry solutions (5)
/pricing                    Pricing & plan comparison
/book-demo                  Demo request form
/register                   Business registration wizard
/login                      Login (Phase 2)
/blog, /blog/[slug]         Content (Phase 2)
/case-studies/[slug]        Case studies
/faq                        FAQ
/about, /contact, /careers, /partners
/integrations
/why-fiesta
/privacy, /terms, /cookies
/api/leads/demo             Demo submission API
/api/register               Registration API
```

---

## 16. Document Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Product Owner | | | |
| Engineering Lead | | | |
| Design Lead | | | |
| Marketing Lead | | | |

---

*This document is the single source of truth for Fiesta marketing website scope. Updates should be versioned and communicated to all stakeholders.*
