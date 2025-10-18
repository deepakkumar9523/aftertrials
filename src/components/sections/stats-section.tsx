"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    width="107"
    height="86"
    viewBox="0 0 107 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("pointer-events-none", className)}
    aria-hidden="true"
  >
    <path d="M43 1V43C43 65.0914 24.0914 85 0 85" stroke="currentColor" strokeWidth="2" />
    <path d="M106 1V43C106 65.0914 85.0914 85 63 85" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const WaveIcon = ({ className }: { className?: string }) => {
    const bars = [20, 35, 28, 45, 30, 50, 40, 32, 25];
    return (
        <svg width="76" height="50" viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("pointer-events-none", className)} aria-hidden="true">
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
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("pointer-events-none select-none", className)} aria-hidden="true">
            <rect width="110" height="110" fill="transparent" />
            {dots}
        </svg>
    )
};

const stats = [
  {
    label: "Calls",
    value: "150M+",
  },
  {
    label: "Assistants Launched",
    value: "1.5M+",
  },
  {
    label: "Developers",
    value: "350K+",
  },
];

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0], index: number, isVisible: boolean }) => (
    <div
        className={cn(
            "group relative mx-auto flex max-w-sm flex-col gap-y-2 text-center transition-all duration-700 ease-out lg:py-8",
            "transform-gpu",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
    >
        {/* Decorative elements */}
        {index === 0 && (
            <>
                <WaveIcon className="absolute -left-12 sm:-left-20 top-1/2 -translate-y-1/2 text-white/5" />
                <DotGridIcon className="absolute -right-2 sm:-right-8 top-1/2 -translate-y-1/2 text-white/5 opacity-75" />
            </>
        )}
        {index === 1 && (
            <>
                <QuoteIcon className="absolute -left-8 sm:-left-16 top-1/2 -translate-y-1/2 scale-75 text-white/5" />
                <DotGridIcon className="absolute -right-10 sm:-right-20 top-1/2 -translate-y-1/2 text-white/5" />
            </>
        )}
        {index === 2 && (
            <>
                <WaveIcon className="absolute -left-12 sm:-left-20 top-1/2 -translate-y-1/2 text-white/5 transform scale-x-[-1]" />
                <QuoteIcon className="absolute -right-8 sm:-right-16 top-1/2 -translate-y-1/2 scale-75 text-white/5" />
            </>
        )}

        <dt className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            {stat.label}
        </dt>
        <dd className="order-first font-display text-[min(20vw,8rem)] font-medium leading-none tracking-tight text-white lg:text-[8.75rem]">
            {stat.value}
        </dd>

        <div className="absolute inset-[-50%] -z-10 rounded-full bg-accent-purple/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
    </div>
)

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-background-primary py-24 sm:py-32 overflow-x-clip">
            <div className="container mx-auto px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {stats.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
                    ))}
                </dl>
            </div>
        </section>
    );    
}