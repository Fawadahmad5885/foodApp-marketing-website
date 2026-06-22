import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "light",
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fiesta — Own Your Digital Ordering Channel",
    template: "%s | Fiesta",
  },
  description:
    "Fiesta helps restaurants and F&B businesses own their digital ordering — branded apps, cloud POS, fleet management, loyalty, and analytics in one platform.",
  openGraph: {
    title: "Fiesta — Own Your Digital Ordering Channel",
    description:
      "Reduce aggregator dependency. Run POS, online ordering, delivery, and loyalty from one unified platform.",
    type: "website",
    siteName: "Fiesta",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiesta — Own Your Digital Ordering Channel",
    description:
      "Reduce aggregator dependency. Run POS, online ordering, delivery, and loyalty from one unified platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} light h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
