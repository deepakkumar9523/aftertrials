"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featureData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-059838-image.png?",
    title: "HIPAA Compliant",
    description: "End-to-end encryption and strict compliance with healthcare privacy regulations worldwide.",
    color: "from-accent-purple/20 to-accent-purple/5",
    glowColor: "group-hover:shadow-accent-purple/20"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-011454-image.png?",
    title: "Verified Network",
    description: "Every member is a verified healthcare professional. No spam, no noise—just trusted peers.",
    color: "from-accent-cyan/20 to-accent-cyan/5",
    glowColor: "group-hover:shadow-accent-cyan/20"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-277506-image.png?",
    title: "Specialty Groups",
    description: "Join groups for your specialty—cardiology, oncology, surgery, and 100+ more medical fields.",
    color: "from-accent-green/20 to-accent-green/5",
    glowColor: "group-hover:shadow-accent-green/20"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-758205-image.png?",
    title: "Case Collaboration",
    description: "Share de-identified cases, get second opinions, and collaborate on treatment approaches securely.",
    color: "from-accent-orange/20 to-accent-orange/5",
    glowColor: "group-hover:shadow-accent-orange/20"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-201528-image.png?",
    title: "CME Credits",
    description: "Earn continuing medical education credits through webinars, discussions, and learning modules.",
    color: "from-accent-yellow/20 to-accent-yellow/5",
    glowColor: "group-hover:shadow-accent-yellow/20"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-153603-image.png?",
    title: "Research Access",
    description: "Stay updated with latest clinical trials, research papers, and evidence-based medicine.",
    color: "from-accent-blue/20 to-accent-blue/5",
    glowColor: "group-hover:shadow-accent-blue/20"
  },
];

export default function FeaturesGridSection() {
  return (
    <section className="relative bg-background-secondary py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div 
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent-green/10 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-20"
        >
          <motion.p 
            className="inline-block text-xs font-medium uppercase tracking-[0.15em] text-accent-yellow px-4 py-1.5 rounded-full border border-accent-yellow/20 bg-accent-yellow/5 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Features
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-display text-text-primary leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent">Secure</span> for doctors.{" "}
            <br />
            <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">Powerful</span> for collaboration.
          </h2>
        </motion.div>
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative p-8 rounded-2xl border border-border-subtle bg-gradient-to-br ${feature.color} text-left transition-all duration-300 hover:border-accent-green/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${feature.glowColor}`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-green/0 to-accent-cyan/0 opacity-0 transition-opacity duration-300 group-hover:from-accent-green/5 group-hover:to-accent-cyan/5 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-5"
                >
                  <Image
                    src={feature.iconSrc}
                    alt={`${feature.title} icon`}
                    width={56}
                    height={56}
                    className="transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_20px_rgba(74,222,128,0.5)]"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 transition-colors group-hover:text-accent-green">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}