"use client";

import React from "react";
import { motion } from "framer-motion";

const TaglineSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background-primary py-16 md:py-20">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05),transparent_70%)]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="font-display text-4xl md:text-[56px] lg:text-[64px] font-semibold leading-tight tracking-[-0.01em] text-text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          From{' '}
          <motion.span 
            className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan bg-clip-text text-transparent bg-[length:200%_100%]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            resident physicians
          </motion.span>{' '}
          to{' '}
          <span className="text-accent-green">
            leading specialists
          </span>,{' '}
          doctors connect and share insights on the{' '}
          <span className="text-accent-green">
            After Trials platform
          </span>.
        </motion.h2>
      </div>
    </section>
  );
};

export default TaglineSection;