"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import FeaturesGridSection from "@/components/sections/features-grid-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import CommunitySection from "@/components/sections/community-section";
import FaqSection from "@/components/sections/faq-section";
import FinalCtaSection from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background-primary">
      <HeroSection />
      <StatsSection />
      <FeaturesGridSection />
      <HowItWorksSection />
      <CommunitySection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}