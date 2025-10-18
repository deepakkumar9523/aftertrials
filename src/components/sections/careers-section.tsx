import React from 'react';

const CareersSection = () => {
  const teamImageUrl = 'https://vapi.ai/_next/image?url=%2Fcareers%2FteamImage.png&w=3840&q=75';

  return (
    <section className="relative overflow-hidden bg-[#FFF9F0] py-20 text-[#111113]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(10, 10, 11, 0.07) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.05em] text-[#FF6B35]">
            CAREERS AT AFTER TRIALS
          </p>
          <h2 className="font-display text-[clamp(3.5rem,5vw,4rem)] font-bold leading-tight tracking-tighter text-[#0A0A0B]">
            Innovate healthcare. Build community. Make impact.
          </h2>
          <p className="max-w-2xl text-lg text-neutral-600">
            Join our mission to connect healthcare professionals worldwide and transform how doctors collaborate and share knowledge.
          </p>
          <a
            href="#"
            className="mt-2 inline-flex items-center justify-center rounded-full border border-neutral-900/20 bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-100"
          >
            See open roles
          </a>
        </div>
      </div>

      <div className="relative mt-20 h-[300px] w-full lg:h-[500px]">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${teamImageUrl})`,
            filter: 'grayscale(1)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(10, 10, 11, 0.3) 1.5px, transparent 1.5px)',
            backgroundSize: '4px 4px',
          }}
        />
      </div>
    </section>
  );
};

export default CareersSection;