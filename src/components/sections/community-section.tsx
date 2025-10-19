"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const DotMatrixIcon = ({ pattern, className }: { pattern: string[]; className?: string }) => {
  if (!pattern || pattern.length === 0 || !pattern[0]) {
    return null;
  }

  const colorMap: Record<string, string> = {
    'W': 'bg-text-primary',
    'P': 'bg-accent-purple', 
    'C': 'bg-accent-cyan',
  };

  return (
    <div
      className={`grid auto-rows-[4px] ${className}`}
      style={{
        gridTemplateColumns: `repeat(${pattern[0].length}, 4px)`,
        gap: '2px',
      }}
    >
      {pattern.flatMap((row, rowIndex) =>
        row.split('').map((char, colIndex) => {
          const colorClass = colorMap[char];
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`h-1 w-1 rounded-full ${colorClass || ''}`}
            />
          );
        })
      )}
    </div>
  );
};

// Based on "book" in design instructions, this is a document icon
const docsPattern = [
  "    WWWWWWWWWWWW    ",
  "   W            WP  ",
  "  W              WW ",
  " W                W ",
  " W  WWWW          W ",
  " W  W             W ",
  " W  WWWW  C       W ",
  " W  W             W ",
  " W  WWWW          W ",
  " W                W ",
  " W                W ",
  "  W              W  ",
  "   W            W   ",
  "    WWWWWWWWWWWW    ",
  "                    ",
];

// Based on "chat" in design instructions
const communityPattern = [
  "      WWWWWWWW      ",
  "    WW        WW    ",
  "  WW            WW  ",
  " WW              WW ",
  " W                W ",
  " W       C        W ",
  " W                W ",
  " WW     P         WW ",
  "  WW            WW  ",
  "    WW        WW    ",
  "      WWWWWWWW      ",
  "          WW        ",
  "        WW          ",
  "      WW            ",
  "                    ",
];

// Based on "profile" in design instructions
const profilePattern = [
  "                    ",
  "      WWWWWW        ",
  "    WW      WW      ",
  "   W          W     ",
  "   W     P      W   ",
  "    WW      WW      ",
  "      WWWWWW        ",
  "                    ",
  "   WWWWWWWWWWWW     ",
  "  W            W    ",
  " WW     C        WW ",
  " W                W ",
  " W                W ",
  "  WWWWWWWWWWWWWW    ",
  "                    ",
];

const communityData = [
  {
    label: "ACTIVE PHYSICIANS",
    value: "50K+",
    platform: "Members",
    href: "#",
    icon: docsPattern,
  },
  {
    label: "CLINICAL DISCUSSIONS",
    value: "2M+",
    platform: "Community",
    href: "#",
    icon: communityPattern,
  },
  {
    label: "MEDICAL SPECIALTIES",
    value: "100+",
    platform: "Specialties",
    href: "#",
    icon: profilePattern,
  },
];

const CommunitySection = () => {
  return (
    <section className="relative bg-gradient-to-b from-background-primary to-background-secondary py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-[100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.p 
            className="inline-block font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-purple px-4 py-1.5 rounded-full border border-accent-purple/20 bg-accent-purple/5 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Community
          </motion.p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-text-primary">
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">50,000+ doctors</span> are already here.{" "}
            <br className="hidden sm:inline" />
            Join the community.
          </h2>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-none grid-cols-1 gap-6 lg:grid-cols-3">
          {communityData.map((item, index) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link
                href={item.href}
                className="group relative flex h-[400px] cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-br from-background-secondary to-background-primary p-10 border-border-subtle transition-all duration-300 ease-in-out hover:border-accent-green/50 hover:shadow-[0_20px_60px_rgba(74,222,128,0.15)]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/0 via-accent-cyan/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:from-accent-green/5 group-hover:via-accent-cyan/5 group-hover:opacity-100" />
                
                <div className="relative z-10 flex items-center justify-between font-mono text-xs font-medium uppercase tracking-[0.15em] text-text-tertiary">
                  <span>{item.label}</span>
                  <motion.span 
                    className="text-accent-green"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.value}
                  </motion.span>
                </div>

                <div className="relative z-10 mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DotMatrixIcon pattern={item.icon} />
                  </motion.div>
                  <p className="mt-8 font-display text-xl font-medium text-text-primary group-hover:text-accent-green transition-colors">
                    {item.platform}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;