export type SelectOption = {
  value: string;
  label: string;
};

export type InquiryType = SelectOption;

export const businessTypes: SelectOption[] = [
  { value: "restaurant", label: "Restaurant" },
  { value: "supermarket", label: "Supermarket" },
  { value: "other_fnb", label: "Other Food & Beverages" },
];

export const countries: SelectOption[] = [
  { value: "ae", label: "United Arab Emirates" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "pk", label: "Pakistan" },
  { value: "gb", label: "United Kingdom" },
  { value: "qa", label: "Qatar" },
  { value: "kw", label: "Kuwait" },
  { value: "bh", label: "Bahrain" },
  { value: "om", label: "Oman" },
  { value: "eg", label: "Egypt" },
  { value: "jo", label: "Jordan" },
  { value: "lb", label: "Lebanon" },
  { value: "other", label: "Other" },
];

export const inquiryTypes: InquiryType[] = [
  { value: "general", label: "General inquiry" },
  { value: "sales", label: "Sales & pricing" },
  { value: "support", label: "Product support" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press & media" },
];

export const contactDetails = {
  email: "hello@fiesta.io",
  phone: "+971 800 123 45",
  phoneHref: "tel:+97180012345",
  locations: "Dubai, UAE · London, UK · Lahore, PK",
  hours: "Sunday – Thursday, 9:00 AM – 6:00 PM (GST)",
} as const;
