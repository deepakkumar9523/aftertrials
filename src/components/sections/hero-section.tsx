"use client";

import { Waves } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const DotsIcon = ({ className }: {className?: string;}) =>
<svg role="presentation" width="8" height="16" className={className} viewBox="0 0 8 16">
        <g fill="currentColor">
            <circle cx="4" cy="1.5" r="1"></circle>
            <circle cx="4" cy="4.5" r="1"></circle>
            <circle cx="4" cy="7.5" r="1"></circle>
            <circle cx="4" cy="10.5" r="1"></circle>
            <circle cx="4" cy="13.5" r="1"></circle>
        </g>
    </svg>;


const DotsCircleIcon = ({ className }: {className?: string;}) =>
<svg role="presentation" width="16" height="16" className={className} viewBox="0 0 16 16">
        <g fill="currentColor">
            <circle cx="8" cy="1" r="1"></circle>
            <circle cx="12.3" cy="3.7" r="1"></circle>
            <circle cx="15" cy="8" r="1"></circle>
            <circle cx="12.3" cy="12.3" r="1"></circle>
            <circle cx="8" cy="15" r="1"></circle>
            <circle cx="3.7" cy="12.3" r="1"></circle>
            <circle cx="1" cy="8" r="1"></circle>
            <circle cx="3.7" cy="3.7" r="1"></circle>
        </g>
    </svg>;


const HeroSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center gap-10 overflow-x-hidden bg-background-primary pt-14 text-text-primary md:gap-10 md:pt-24 xl:gap-16 xl:pt-[6.5rem]">
            <div className="absolute inset-0 z-[-1]">
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(78,205,196,0.15),transparent_40%)]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(183,148,244,0.15),transparent_40%)]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08),transparent_50%)]"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            <motion.h1 
                className="font-display text-balance px-6 text-[48px] font-black leading-tight tracking-[-0.02em] text-white md:text-[72px] !whitespace-pre-line text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.span
                    className="inline-block bg-gradient-to-r from-white via-accent-cyan to-white bg-clip-text text-transparent bg-[length:200%_100%]"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    After Trials
                </motion.span>
                <br />
                <span className="text-[32px] md:text-[48px] text-text-secondary">
                    for healthcare professionals
                </span>
            </motion.h1>

            <motion.div 
                className="mx-auto flex w-full max-w-[19.375rem] flex-col items-center gap-3 px-6 sm:max-w-[35.5rem] md:flex-row md:pb-[3.5rem] xl:pb-[0.5rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                <motion.a
          href="#"
          className="group relative flex h-14 w-full flex-1 items-center justify-center gap-3 rounded-full bg-[#00E5A0] px-[32px] py-[12px] font-mono text-base font-medium uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,160,0.5)] active:scale-95 !whitespace-pre-line overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <span className="relative z-10">Join Now</span>
                    <span className="relative z-10 h-4 w-2 overflow-hidden">
                        <DotsIcon className="absolute inset-0 origin-center transition-transform duration-300 group-hover:translate-x-4" />
                        <DotsIcon className="absolute inset-0 -translate-x-4 origin-center transition-transform duration-300 group-hover:translate-x-0" />
                    </span>
                </motion.a>
                <motion.a
          href="#"
          className="group flex h-14 w-full flex-1 items-center justify-center gap-3 rounded-full border border-border bg-transparent px-[32px] py-[12px] font-mono text-base font-medium uppercase tracking-wider text-text-secondary transition-all duration-300 hover:scale-105 hover:border-text-primary hover:text-text-primary hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 !whitespace-pre-line"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
                    <span>Learn More</span>
                    <DotsCircleIcon className="origin-center transition-transform duration-300 group-hover:rotate-45" />
                </motion.a>
            </motion.div>

            <motion.div 
                className="-mt-5 w-full [mask-image:linear-gradient(90deg,_transparent,_#000_10%,_#000_90%,_transparent_100%)] sm:-mt-10 md:mt-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
                <div className="relative mx-auto min-h-[230px] w-full max-w-[96.25rem] sm:min-h-[396px]">
                    <motion.div 
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full"
                        animate={{
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                         <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover">
                            <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/videos/vapi-pattern.webm?" type="video/webm" />
                            <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/videos/vapi-pattern.mp4?" type="video/mp4" />
                         </video>
                    </motion.div>

                    <div className="absolute inset-0 grid place-items-center">
                        <div className="flex flex-col items-center gap-4">
                            <motion.button
                aria-label="Connect with peers"
                className="group relative mt-4 flex h-14 w-[13.5rem] cursor-pointer items-center justify-center gap-3 rounded-full border border-white/20 bg-black/30 font-mono text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-black/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95 sm:h-[97px] sm:w-[373px] sm:gap-4 sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                    opacity: 1, 
                    y: [0, -5, 0],
                }}
                transition={{ 
                    opacity: { duration: 0.8, delay: 0.8 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
            >
                                <span className="relative grid text-nowrap">
                                    <span className="col-start-1 row-start-1 block transition-opacity duration-250 group-hover:opacity-0">
                                        CONNECT NOW
                                    </span>
                                    <span className="col-start-1 row-start-1 opacity-0 transition-opacity duration-250 group-hover:opacity-100">
                                        START NETWORKING
                                    </span>
                                </span>
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <Waves className="h-5 shrink-0 sm:h-8" />
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>);

};

export default HeroSection;