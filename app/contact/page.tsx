import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Fiesta team for sales, support, partnerships, and general inquiries.",
};

export default function ContactPage() {
  return <ContactSection />;
}
