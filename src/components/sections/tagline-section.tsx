"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function TaglineSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
        
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const text = "Connect with peers. Share knowledge. Advance healthcare together.";
  
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-accent-green/10 via-accent-cyan/10 to-accent-blue/10 py-12">
      <div className="relative flex whitespace-nowrap">
        <div ref={scrollRef} className="flex gap-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-3xl md:text-5xl font-bold tracking-tight">
                <span className="text-text-primary">{text.split('.')[0]}.</span>
                <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent ml-4">{text.split('.')[1]}.</span>
                <span className="text-text-primary ml-4">{text.split('.')[2]}.</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}