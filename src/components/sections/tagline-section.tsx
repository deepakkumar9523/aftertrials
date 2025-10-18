import React from 'react';

const TaglineText = () => (
  <h2 className="font-display text-4xl md:text-[56px] lg:text-[64px] font-semibold leading-tight tracking-[-0.01em] text-white/90 [text-shadow:0_0_15px_rgba(255,255,255,0.1)]">
    Teams at{' '}
    <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)] bg-clip-text text-transparent">
      trail-blazing
    </span>{' '}
    startups to <span className="text-[var(--accent-green)]">Fortune 500</span> companies deploy voice
    agents on the <span className="text-[var(--accent-green)]">Vapi platform</span>.
  </h2>
);

/**
 * NOTE: This component uses a custom 'marquee' animation.
 * Please ensure the following is added to your `tailwind.config.js` file for the animation to work:
 *
 * module.exports = {
 *   theme: {
 *     extend: {
 *       animation: {
 *         marquee: 'marquee 45s linear infinite',
 *       },
 *       keyframes: {
 *         marquee: {
 *           '0%': { transform: 'translateX(0%)' },
 *           '100%': { transform: 'translateX(-100%)' },
 *         },
 *       },
 *     },
 *   },
 *   plugins: [],
 * }
 * 
 * ---
 * An alternative setup for seamless looping:
 * `to: { transform: 'translateX(-50%)' }` if the content is duplicated exactly once.
 * The current implementation duplicates the content within a single animated element,
 * so the translateX value depends on how the content is laid out.
 * A simpler implementation is used here:
 *
 * <div className="flex animate-marquee">
 *   <div className="min-w-full flex-shrink-0">
 *     <TaglineText />
 *   </div>
 *   <div className="min-w-full flex-shrink-0">
 *     <TaglineText />
 *   </div>
 * </div>
 *
 * To make this work with `translateX(-100%)`, we might need to adjust the structure.
 * Let's assume the keyframes are set from `0%` to `-100%` on a container with two full-width children.
 * This is a common pattern.
 */

const TaglineSection = () => {
    const TaglineContent = () => (
        <div className="mx-4 flex-shrink-0">
          <TaglineText />
        </div>
      );

  return (
    <section className="bg-background-primary py-20 md:py-28 overflow-hidden">
      <div className="text-center mb-12">
        <span className="font-body text-xs font-medium text-text-tertiary uppercase tracking-[0.05em]">
          API
        </span>
      </div>
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        }}
      >
        <div className="flex animate-[marquee_45s_linear_infinite] whitespace-nowrap">
            <TaglineContent />
            <TaglineContent />
            <TaglineContent />
            <TaglineContent />
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;