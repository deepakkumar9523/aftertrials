"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    width="107"
    height="86"
    viewBox="0 0 107 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M43 1V43C43 65.0914 24.0914 85 0 85" stroke="currentColor" strokeWidth="2" />
    <path d="M106 1V43C106 65.0914 85.0914 85 63 85" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const WaveIcon = ({ className }: { className?: string }) => {
    const bars = [20, 35, 28, 45, 30, 50, 40, 32, 25];
    return (
        <svg width="76" height="50" viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
            {bars.map((height, i) => (
                <rect key={i} x={i * 8} y={50-height} width="4" height={height} rx="2" fill="currentColor" />
            ))}
        </svg>
    )
};

const DotGridIcon = ({ className }: {className?: string}) => {
    const dots = Array.from({ length: 121 }).map((_, i) => {
        const row = Math.floor(i/11);
        const col = i % 11;
        return <circle key={i} cx={col * 10 + 5} cy={row * 10 + 5} r="1" fill="currentColor" />
    });
    return (
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
            <rect width="110" height="110" fill="transparent" />
            {dots}
        </svg>
    )
};

const stats = [
  { value: "150M+", label: "Calls" },
  { value: "1.5M+", label: "Assistants Launched" },
  { value: "350K+", label: "Developers" },
];

const StatCard = ({ stat, index }: { stat: { value: string; label: string }; index: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.dl
      ref={ref}
      className="group relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
    >
      {/* Quote decoration */}
      {index === 0 && (
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <QuoteIcon className="absolute -left-8 -top-8 h-12 w-12 text-accent-cyan/20 md:-left-12 md:-top-12 md:h-16 md:w-16" />
        </motion.div>
      )}

      <dt className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
        {stat.label}
      </dt>
      <dd className="order-first font-display text-[min(20vw,8rem)] font-medium leading-none tracking-tight text-white lg:text-[8.75rem]">
        <motion.span
          className="inline-block bg-gradient-to-r from-white via-accent-green to-white bg-clip-text text-transparent bg-[length:200%_100%]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        >
          {stat.value}
        </motion.span>
      </dd>

      <motion.div 
        className="absolute inset-[-50%] -z-10 rounded-full bg-accent-purple/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        whileHover={{
          scale: 1.2,
          opacity: 0.3,
        }}
        transition={{
          duration: 0.5,
        }}
      />
    </motion.dl>
  );
};

const StatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background-primary py-16 md:py-24 lg:py-32">
      {/* Animated background elements */}
      <motion.div 
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-accent-purple/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute right-[15%] bottom-[20%] h-80 w-80 rounded-full bg-accent-cyan/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;