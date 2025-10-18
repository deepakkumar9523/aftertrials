import React from 'react';
import Image from 'next/image';

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

const FeatureCard = ({ iconUrl, bgColor, title, description, alt }: typeof enterpriseFeatures[0]) => (
  <div className="flex flex-col items-center gap-5 text-center">
    <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${bgColor}`}>
      <Image src={iconUrl} alt={alt} width={44} height={44} className="h-11 w-11" />
    </div>
    <div className="flex flex-col gap-px">
      <h4 className="text-[1.5rem] font-medium leading-[2.5rem] text-black">
        {title}
      </h4>
      <p className="text-[1rem] leading-[1.6rem] text-[#666666]">
        {description}
      </p>
    </div>
  </div>
);

const LogoScroller = () => {
  const duplicatedLogos = [...hospitalLogos, ...hospitalLogos, ...hospitalLogos, ...hospitalLogos];

  return (
    <div className="relative mt-16 w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-logo-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="mx-7 flex h-8 flex-shrink-0 items-center justify-center">
            <span className="whitespace-nowrap text-2xl font-medium text-gray-400 filter grayscale transition-all hover:text-gray-800 hover:filter-none">
              {logo}
            </span>
          </div>
        ))}
      </div>
      {/* This component assumes `animate-logo-scroll` is defined in tailwind.config.js:
          theme: { extend: { 
            animation: { 'logo-scroll': 'scroll 60s linear infinite' },
            keyframes: { scroll: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } } }
          }}
      */}
    </div>
  );
};

export default function EnterpriseSection() {
  return (
    <section className="relative bg-[#FFF9F0] text-black">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:8px_8px]"></div>
      <div className="container relative z-10 mx-auto w-full px-6 pt-20 pb-[5.5rem] md:px-10 lg:px-20 lg:pt-32">
        <p className="text-center text-[0.75rem] font-medium uppercase tracking-[0.07rem] text-black/50">
          FOR INSTITUTIONS
        </p>
        <h2 className="mt-4 balance-text text-center text-[2.75rem] leading-[3.5rem] tracking-[-0.03rem]">
          Secure.
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-3.svg?"
            alt="Shield Icon"
            width={40}
            height={40}
            className="mx-4 inline-block h-10 w-10"
          />
          Compliant.
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/svgs/image-4.svg?"
            alt="Sparkle Icon"
            width={40}
            height={40}
            className="mx-4 inline-block h-10 w-10"
          />
          Trusted.
        </h2>
        
        <div className="mt-20 flex flex-col items-center">
          <div className="mt-12 grid max-w-5xl gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <LogoScroller />
      </div>
    </section>
  );
}