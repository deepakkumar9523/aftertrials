"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const enterpriseFeatures = [
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-1.svg?",
    bgColor: "bg-[#E5D5FA]",
    title: "HIPAA Compliant",
    description: "End-to-end encryption ensures all patient discussions remain completely confidential.",
    alt: "shield icon"
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-2.svg?",
    bgColor: "bg-[#FAD9D3]",
    title: "Global Network",
    description: "Connect with verified doctors from 180+ countries across all medical specialties.",
    alt: "globe icon"
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-5.svg?",
    bgColor: "bg-[#D3F3F5]",
    title: "24/7 Access",
    description: "Platform available around the clock for consultations and peer discussions anytime.",
    alt: "clock icon"
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-6.svg?",
    bgColor: "bg-[#D7F3E2]",
    title: "Verified Professionals",
    description: "Every member verified through medical licensing databases and credentials check.",
    alt: "verified icon"
  },
  {
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-7.svg?",
    bgColor: "bg-[#FCF4CD]",
    title: "Enterprise Security",
    description: "Bank-level security protocols protect all medical discussions and shared content.",
    alt: "lock icon"
  }
];

const hospitalLogos = [
  "Mayo Clinic", 
  "Cleveland Clinic", 
  "Johns Hopkins", 
  "Mass General", 
  "Stanford Health"
];

const FeatureCard = ({ iconUrl, bgColor, title, description, alt, index }: typeof enterpriseFeatures[0] & { index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group flex flex-col items-center gap-5 text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/50"
  >
    <motion.div 
      className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${bgColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <Image src={iconUrl} alt={alt} width={48} height={48} className="h-12 w-12" />
    </motion.div>
    <div className="flex flex-col gap-2">
      <h4 className="text-[1.5rem] font-semibold leading-[2rem] text-black transition-colors group-hover:text-[#4ADE80]">
        {title}
      </h4>
      <p className="text-[1rem] leading-[1.6rem] text-[#666666]">
        {description}
      </p>
    </div>
  </motion.div>
);

const LogoScroller = () => {
  const duplicatedLogos = [...hospitalLogos, ...hospitalLogos, ...hospitalLogos, ...hospitalLogos];

  return (
    <div className="relative mt-20 w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-logo-scroll">
        {duplicatedLogos.map((logo, index) => (
          <motion.div 
            key={index} 
            className="mx-8 flex h-8 flex-shrink-0 items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="whitespace-nowrap text-2xl font-medium text-gray-400 filter grayscale transition-all hover:text-gray-800 hover:filter-none">
              {logo}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function EnterpriseSection() {
  return (
    <section className="relative bg-[#FFF9F0] text-black overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Gradient orbs */}
      <motion.div 
        className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#4ADE80]/10 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container relative z-10 mx-auto w-full px-6 pt-24 pb-24 md:px-10 lg:px-20 lg:pt-32 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="inline-block text-center w-full text-[0.75rem] font-medium uppercase tracking-[0.15em] text-black/50 px-4 py-1.5 rounded-full border border-black/10 bg-black/5"
            whileHover={{ scale: 1.05 }}
          >
            For Institutions
          </motion.p>
          <h2 className="mt-6 balance-text text-center text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.1] tracking-tight font-bold">
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] bg-clip-text text-transparent">Secure</span>.
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-3.svg?"
              alt="Shield Icon"
              width={48}
              height={48}
              className="mx-3 inline-block h-10 w-10 sm:h-12 sm:w-12"
            />
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">Compliant</span>.
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-4.svg?"
              alt="Sparkle Icon"
              width={48}
              height={48}
              className="mx-3 inline-block h-10 w-10 sm:h-12 sm:w-12"
            />
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent">Trusted</span>.
          </h2>
        </motion.div>
        
        <div className="mt-20 flex flex-col items-center">
          <div className="mt-12 grid max-w-6xl gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>

        <LogoScroller />
      </div>
    </section>
  );
}