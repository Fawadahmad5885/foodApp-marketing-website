import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Clients } from "@/components/home/Clients";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BusinessTypes } from "@/components/home/BusinessTypes";
import { SocialProof } from "@/components/home/SocialProof";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Clients />
      <PlatformOverview />
      <HowItWorks />
      <BusinessTypes />
      <SocialProof />
      <PricingTeaser />
      <FinalCta />
    </>
  );
}
