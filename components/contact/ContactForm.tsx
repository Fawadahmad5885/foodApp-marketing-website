"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SelectField, TextAreaField, TextField } from "@/components/ui/Field";
import { businessTypes, countries } from "@/lib/constants/contact";

type FormState = {
  name: string;
  email: string;
  phone: string;
  country: string;
  businessName: string;
  businessType: string;
  message: string;
  consent: boolean;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  country: "",
  businessName: "",
  businessType: "restaurant",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // Placeholder until a contact API endpoint is wired up.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm(initialFormState);
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-7 w-7 text-success" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-foreground">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out. Our team will get back to you within one
          business day.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <TextField
        id="contact-name"
        name="name"
        label="Full name"
        autoComplete="name"
        placeholder="Your name"
        value={form.name}
        onChange={(event) => updateField("name", event.target.value)}
        required
      />

      <TextField
        id="contact-email"
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        placeholder="you@business.com"
        value={form.email}
        onChange={(event) => updateField("email", event.target.value)}
        required
      />

      <TextField
        id="contact-phone"
        name="phone"
        type="tel"
        label="Phone"
        autoComplete="tel"
        placeholder="+971 50 000 0000"
        value={form.phone}
        onChange={(event) => updateField("phone", event.target.value)}
      />

      <SelectField
        id="contact-country"
        name="country"
        label="Country"
        value={form.country}
        onChange={(event) => updateField("country", event.target.value)}
        required
      >
        <option value="" disabled>
          Select country
        </option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </SelectField>

      <TextField
        id="contact-business-name"
        name="businessName"
        label="Business name"
        autoComplete="organization"
        placeholder="Your business name"
        value={form.businessName}
        onChange={(event) => updateField("businessName", event.target.value)}
        required
      />

      <SelectField
        id="contact-business-type"
        name="businessType"
        label="Business type"
        value={form.businessType}
        onChange={(event) => updateField("businessType", event.target.value)}
        required
      >
        {businessTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </SelectField>

      <TextAreaField
        id="contact-message"
        name="message"
        label="Message"
        placeholder="How can we help you?"
        value={form.message}
        onChange={(event) => updateField("message", event.target.value)}
        required
      />

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border border-border text-primary accent-primary outline-none"
        />
        <span>
          I agree to Fiesta processing my data to respond to this inquiry. See
          our{" "}
          <Link href="/privacy" className="font-medium text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Looking for a product demo?{" "}
          <Link href="/book-demo" className="font-medium text-primary hover:underline">
            Book a demo
          </Link>{" "}
          instead.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:shrink-0">
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
