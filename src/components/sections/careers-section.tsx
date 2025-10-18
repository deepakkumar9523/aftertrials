"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CareersSection = () => {
  const teamImageUrl = 'https://vapi.ai/_next/image?url=%2Fcareers%2FteamImage.png&w=3840&q=75';

  return (
    <section className="relative overflow-hidden bg-[#FFF9F0] py-24 sm:py-32 lg:py-40 text-[#111113]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(10, 10, 11, 0.05) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-5xl flex-col items-center gap-6"
        >
          <motion.p 
            className="inline-block font-mono text-xs font-medium uppercase tracking-[0.15em] text-[#FF6B35] px-4 py-1.5 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/5"
            whileHover={{ scale: 1.05 }}
          >
            Careers at After Trials
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(3rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-[#0A0A0B]"
          >
            Innovate healthcare.{" "}
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] bg-clip-text text-transparent">
              Build community
            </span>.{" "}
            <br />
            Make impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl leading-relaxed text-neutral-600"
          >
            Join our mission to connect healthcare professionals worldwide and transform how doctors collaborate and share knowledge.
          </motion.p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-neutral-900/20 bg-white px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-900/30"
          >
            See open roles
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-20 h-[350px] w-full lg:h-[550px]"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${teamImageUrl})`,
            filter: 'grayscale(1) contrast(1.1)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(10, 10, 11, 0.25) 1.5px, transparent 1.5px)',
            backgroundSize: '5px 5px',
          }}
        />
      </motion.div>
    </section>
  );
};

export default CareersSection;