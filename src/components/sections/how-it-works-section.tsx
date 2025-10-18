import Image from "next/image";

const cardData = [
  {
    number: "001",
    imageSrc: "https://vapi.ai/how-it-works/steps/0/image.png",
    imageAlt: "Create your profile",
    title: "Create your profile",
    description: "Verify your medical credentials and join a trusted network of healthcare professionals.",
  },
  {
    number: "002",
    imageSrc: "https://vapi.ai/how-it-works/steps/1/image.png",
    imageAlt: "Connect & Share",
    title: "Connect & Share",
    description: "Join specialty groups, share insights, and collaborate on complex cases with peers worldwide.",
  },
  {
    number: "003",
    imageSrc: "https://vapi.ai/how-it-works/steps/2/image.png",
    imageAlt: "Advance Care",
    title: "Advance Care",
    description: "Access latest research, attend webinars, and bring cutting-edge knowledge to your practice.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.05em] text-accent-purple">
            How It Works
          </p>
          <h2 className="mt-4 text-4xl leading-[1.1] tracking-[-0.01em] text-text-primary sm:text-5xl">
            Join in minutes.
            <br />
            Connect instantly.
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cardData.map((card) => (
            <div
              key={card.number}
              className="group flex flex-col rounded-2xl border border-border-subtle bg-background-secondary p-8 transition-all duration-300 hover:border-text-secondary/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-text-tertiary font-mono text-sm text-text-secondary">
                {card.number}
              </div>
              <div className="relative my-10 flex h-[120px] items-center justify-center md:my-12">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={150}
                  height={120}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-grow flex-col">
                <h3 className="text-2xl font-medium text-text-primary">
                  {card.title}
                </h3>
                <p className="mt-4 text-base text-text-secondary">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;