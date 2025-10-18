"use client";

import { Users, MessageSquare, FileText, Video } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="relative bg-gradient-to-b from-background-primary via-background-primary to-background-secondary py-24 sm:py-32 lg:py-40">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(var(--border-subtle) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}></div>
      
      {/* Gradient orb effect */}
      <motion.div 
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/5 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span 
            className="inline-block text-xs font-medium uppercase tracking-[0.15em] text-accent-green px-4 py-1.5 rounded-full border border-accent-green/20 bg-accent-green/5"
            whileHover={{ scale: 1.05 }}
          >
            Platform Features
          </motion.span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-[64px] lg:leading-[1.1] text-center max-w-5xl mx-auto"
        >
          Connecting healthcare professionals{" "}
          <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
            worldwide
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-[900px] mx-auto text-center leading-relaxed"
        >
          A secure, professional platform designed exclusively for doctors to collaborate, learn, and advance patient care together.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            return (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
                whileHover={{ y: -4 }}
                className={`
                  group relative p-6 rounded-2xl border transition-all duration-300 text-left overflow-hidden
                  ${isActive
                    ? 'bg-gradient-to-br from-accent-green/10 to-accent-cyan/5 border-accent-green shadow-[0_0_30px_rgba(74,222,128,0.15)]'
                    : 'bg-background-secondary/50 border-border-subtle hover:border-accent-green/30 hover:bg-background-secondary'
                  }
                `}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${!isActive && 'group-hover:opacity-100'} bg-gradient-to-br from-accent-green/5 to-transparent`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`mb-4 inline-flex p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-accent-green text-black shadow-lg shadow-accent-green/30' 
                        : 'bg-accent-green/10 text-accent-green group-hover:bg-accent-green/20'
                    }`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-green transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-green to-accent-cyan"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}