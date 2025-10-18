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
          className="font-display text-4xl md:text-[56px] lg:text-[64px] font-semibold leading-tight tracking-[-0.01em] text-white/90 [text-shadow:0_0_15px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          From{' '}
          <motion.span 
            className="bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-cyan)] bg-clip-text text-transparent bg-[length:200%_100%]"
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
          <motion.span 
            className="text-[var(--accent-green)]"
            animate={{
              textShadow: [
                "0 0 10px rgba(74,222,128,0.3)",
                "0 0 20px rgba(74,222,128,0.6)",
                "0 0 10px rgba(74,222,128,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            leading specialists
          </motion.span>,{' '}
          doctors connect and share insights on the{' '}
          <motion.span 
            className="text-[var(--accent-green)]"
            animate={{
              textShadow: [
                "0 0 10px rgba(74,222,128,0.3)",
                "0 0 20px rgba(74,222,128,0.6)",
                "0 0 10px rgba(74,222,128,0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            After Trials platform
          </motion.span>.
        </motion.h2>
      </div>
    </section>
  );
};

export default TaglineSection;