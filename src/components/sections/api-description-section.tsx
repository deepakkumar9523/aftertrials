"use client";

import { Users, MessageSquare, FileText, Video } from "lucide-react";
import { useState } from "react";

const features = [
  {
    id: "networking",
    name: "Professional Networking",
    icon: Users,
    description: "Connect with doctors across all specialties worldwide",
  },
  {
    id: "discussions",
    name: "Clinical Discussions",
    icon: MessageSquare,
    description: "Engage in peer-reviewed case discussions and medical forums",
  },
  {
    id: "research",
    name: "Research & Trials",
    icon: FileText,
    description: "Share and discover the latest clinical trial results",
  },
  {
    id: "webinars",
    name: "Medical Webinars",
    icon: Video,
    description: "Join live sessions with leading healthcare experts",
  },
];

export default function ApiDescriptionSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const active = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="relative bg-background-primary py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 z-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(var(--border-subtle) 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }}></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.05em] text-accent-purple">Platform</span>
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-[56px] lg:leading-tight text-center max-w-4xl mx-auto">
          Connecting healthcare professionals <br /> worldwide.
        </h2>
        <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-[800px] mx-auto text-center">
          A secure, professional platform designed exclusively for doctors to collaborate, learn, and advance patient care together.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`
                  group relative p-6 rounded-2xl border transition-all duration-300 text-left
                  ${isActive
                    ? 'bg-accent-green/10 border-accent-green shadow-lg shadow-accent-green/20'
                    : 'bg-background-secondary border-border-subtle hover:border-accent-green/50'
                  }
                `}
              >
                <div className={`mb-4 inline-flex p-3 rounded-xl transition-colors ${
                  isActive ? 'bg-accent-green text-black' : 'bg-accent-green/20 text-accent-green'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                  {feature.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {feature.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}