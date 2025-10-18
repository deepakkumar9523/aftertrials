import Image from "next/image";

const featureData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-059838-image.png?",
    title: "Multilingual",
    description: "Talk to agents in English, Spanish, Mandarin, or one of 100+ other supported languages.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-011454-image.png?",
    title: "API-native",
    description: "Everything is exposed as an API, with 1000s of configurations and integrations.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-277506-image.png?",
    title: "Automated testing",
    description: "Design test suites of simulated voice agents to identify hallucination risks before going to production.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-758205-image.png?",
    title: "Bring your own models",
    description: "Bring your own API keys for transcription, LLM, or text-to-speech models. Or, plug in your own self-hosted models.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-201528-image.png?",
    title: "Tool calling",
    description: "Plug in your APIs as tools to intelligently fetch data and perform actions on your server.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-153603-image.png?",
    title: "A/B experiments",
    description: "Test different variations of prompts, voices, and flows to continuously optimize performance.",
  },
];

export default function FeaturesGridSection() {
  return (
    <section className="bg-background-secondary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16 lg:mb-20">
          <p className="text-xs text-accent-yellow mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary leading-[1.2] md:leading-[1.1] tracking-tight">
            Flexible for engineers. <br /> Easy for business users.
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {featureData.map((feature, index) => (
            <div key={index} className="group text-left transition-colors duration-300">
              <Image
                src={feature.iconSrc}
                alt={`${feature.title} icon`}
                width={48}
                height={48}
                className="mb-4 transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
              />
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}