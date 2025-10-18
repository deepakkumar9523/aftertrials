"use client";

import { motion } from "framer-motion";

const FinalCtaSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-background-secondary to-background-primary py-[80px] sm:py-24 lg:py-[140px] overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-green/10 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-[120px]"
        animate={{
          x: [0, -50, 0],
          scale: [1.3, 1, 1.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center px-6 text-center md:px-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-text-primary md:text-5xl lg:text-[64px] lg:leading-[1.1]"
          >
            Join the{" "}
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              community
            </span>{" "}
            today
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex w-full max-w-md flex-col items-center gap-4 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(74, 222, 128, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex w-full items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-r from-accent-green to-accent-cyan px-12 py-4 text-base font-semibold text-black transition-all duration-300 ease-in-out sm:w-auto"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex w-full items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-2 border-solid border-white/30 bg-transparent px-12 py-4 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:border-white/50 sm:w-auto"
            >
              <span className="relative z-10 transition-colors group-hover:text-accent-green">Learn More</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;