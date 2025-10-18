import Image from "next/image";

const featureData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-059838-image.png?",
    title: "HIPAA Compliant",
    description: "End-to-end encryption and strict compliance with healthcare privacy regulations worldwide.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-011454-image.png?",
    title: "Verified Network",
    description: "Every member is a verified healthcare professional. No spam, no noise—just trusted peers.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-277506-image.png?",
    title: "Specialty Groups",
    description: "Join groups for your specialty—cardiology, oncology, surgery, and 100+ more medical fields.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-758205-image.png?",
    title: "Case Collaboration",
    description: "Share de-identified cases, get second opinions, and collaborate on treatment approaches securely.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-201528-image.png?",
    title: "CME Credits",
    description: "Earn continuing medical education credits through webinars, discussions, and learning modules.",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-153603-image.png?",
    title: "Research Access",
    description: "Stay updated with latest clinical trials, research papers, and evidence-based medicine.",
  },
];

export default function FeaturesGridSection() {
  return (
    <section className="bg-background-secondary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16 lg:mb-20">
          <p className="text-xs text-accent-yellow mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary leading-[1.2] md:leading-[1.1] tracking-tight">
            Secure for doctors. <br /> Powerful for collaboration.
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