import Image from "next/image";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-805230-image.png?",
    alt: "Unity AI",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-808407-image.png?",
    alt: "NY Life",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-110306-image.png?",
    alt: "Intuit",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-215823-image.png?",
    alt: "Instawork",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-223393-image.png?",
    alt: "Housecall Pro",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-119740-image.png?",
    alt: "Cherry",
  },
];

const CompanyLogosSection = () => {
  const duplicatedLogos = [...logos, ...logos];

  const animationStyles = `
    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 80s linear infinite;
    }
    @media (max-width: 768px) {
      .animate-scroll {
        animation-duration: 60s;
      }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div className="bg-[#0A0A0A] pt-4 pb-12 md:pb-24">
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_5%,#000_95%,transparent_100%)]">
          <div className="flex w-fit flex-nowrap animate-scroll items-center">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-7 md:px-10"
                style={{ height: 'auto' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  className="h-10 w-auto object-contain opacity-70 grayscale transition-opacity duration-300 hover:opacity-100 md:h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLogosSection;