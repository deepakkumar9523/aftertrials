"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background-primary to-background-secondary py-40 text-text-primary">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 h-96 w-96 rounded-full bg-gradient-to-br from-accent-green to-accent-cyan blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple blur-3xl"
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent-green/10 px-6 py-3 text-sm font-medium text-accent-green"
        >
          <Sparkles className="h-4 w-4" />
          <span>Join 50,000+ Verified Healthcare Professionals</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 text-5xl md:text-7xl font-bold leading-tight"
        >
          Ready to Transform
          <br />
          <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
            Your Network?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto"
        >
          Start connecting with peers, sharing knowledge, and advancing your medical career today. It's free to join.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-accent-green px-10 py-5 text-lg font-bold uppercase tracking-wide text-background-primary shadow-2xl transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-green"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border-2 border-text-primary px-10 py-5 text-lg font-bold uppercase tracking-wide text-text-primary transition-all hover:bg-text-primary hover:text-background-primary"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-text-tertiary"
        >
          <span>✓ Free to join</span>
          <span>✓ Verified professionals only</span>
          <span>✓ HIPAA compliant</span>
          <span>✓ Cancel anytime</span>
        </motion.div>
      </div>
    </section>
  );
}