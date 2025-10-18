import Image from "next/image";

const allLogos = [
  { name: "OpenAI", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-552143-image.png?" },
  { name: "Anthropic", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-926639-image.png?" },
  { name: "11 Labs", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-182012-image.png?" },
  { name: "Deepgram", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-245843-image.png?" },
  { name: "Assembly AI", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-110055-image.png?" },
  { name: "PlayHT", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-589047-image.png?" },
  { name: "Azure", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-946517-image.png?" },
  { name: "Gemini", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-249588-image.png?" },
  { name: "Groq", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-924309-image.png?" },
  { name: "Perplexity", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-814030-image.png?" },
  { name: "Gladia", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-492433-image.png?" },
  { name: "Langfuse", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-665225-image.png?" },
  { name: "Twilio", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-675891-image.png?" },
  { name: "Make", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-672910-image.png?" },
];

const topRowLogos = allLogos.slice(0, 7);
const bottomRowLogos = allLogos.slice(7);

const IntegrationsSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 90s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 90s linear infinite;
          }
        `}
      </style>
      <section className="relative bg-background-primary py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs text-text-tertiary">
              INTEGRATIONS
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display text-text-primary">
              Integrate with more <br className="sm:hidden" /> than 40+ apps in a snap.
            </h2>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-y-8">
          <div className="w-full [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <ul className="flex justify-center flex-shrink-0 min-w-full items-center gap-x-8 md:gap-x-12 animate-scroll-right hover:[animation-play-state:paused]">
              {[...topRowLogos, ...topRowLogos].map((logo, index) => (
                <li key={index} className="flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={64}
                    className="h-10 w-auto object-contain transition-all duration-300 hover:scale-110 hover:brightness-125 md:h-16"
                  />
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <ul className="flex justify-center flex-shrink-0 min-w-full items-center gap-x-8 md:gap-x-12 animate-scroll-left hover:[animation-play-state:paused]">
              {[...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
                <li key={index} className="flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={64}
                    className="h-10 w-auto object-contain transition-all duration-300 hover:scale-110 hover:brightness-125 md:h-16"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationsSection;