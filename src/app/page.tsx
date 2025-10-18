"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/hero-section";
import CompanyLogosSection from "@/components/sections/company-logos-section";
import StatsSection from "@/components/sections/stats-section";
import TaglineSection from "@/components/sections/tagline-section";
import ApiDescriptionSection from "@/components/sections/api-description-section";
import UseCasesSection from "@/components/sections/use-cases-section";
import IntegrationsSection from "@/components/sections/integrations-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import FeaturesGridSection from "@/components/sections/features-grid-section";
import EnterpriseSection from "@/components/sections/enterprise-section";
import CommunitySection from "@/components/sections/community-section";
import CareersSection from "@/components/sections/careers-section";
import FaqSection from "@/components/sections/faq-section";
import FinalCtaSection from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background-primary">
      <HeroSection />
      <CompanyLogosSection />
      <StatsSection />
      <TaglineSection />
      <ApiDescriptionSection />
      <UseCasesSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <EnterpriseSection />
      <CommunitySection />
      <CareersSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}