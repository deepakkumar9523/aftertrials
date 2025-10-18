"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Video, Stethoscope, Users, Heart } from "lucide-react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative flex w-full flex-col items-center gap-10 overflow-hidden bg-gradient-to-b from-background-primary via-background-primary to-background-secondary pt-24 pb-32 text-text-primary md:gap-16 md:pt-32 md:pb-40 xl:gap-20 xl:pt-40">
      {/* Floating Medical Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 360 
            }}
            animate={{
              y: [null, `${Math.random() * 20 - 10}%`],
              rotate: [null, Math.random() * 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {i % 4 === 0 && <Stethoscope size={48} />}
            {i % 4 === 1 && <Users size={48} />}
            {i % 4 === 2 && <Heart size={48} />}
            {i % 4 === 3 && <Video size={48} />}
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:gap-14 xl:gap-16">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent-green/10 px-6 py-3 text-sm font-medium text-accent-green"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>Join 50,000+ Healthcare Professionals</span>
          </motion.div>

          <h1 className="hero-h1 max-w-5xl bg-gradient-to-br from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
            Where Healthcare
            <br />
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Professionals Connect
            </span>
          </h1>

          <p className="text-lg max-w-2xl text-text-secondary md:text-xl">
            Network with peers, share clinical insights, collaborate on cases, and advance your medical career on the most trusted platform for healthcare professionals.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-accent-green px-10 py-4 text-base font-semibold uppercase tracking-wide text-background-primary shadow-xl transition-all"
          >
            <span className="relative z-10">Join Free Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border-2 border-text-primary px-10 py-4 text-base font-semibold uppercase tracking-wide text-text-primary transition-all hover:bg-text-primary hover:text-background-primary"
          >
            Explore Network
          </motion.button>
        </motion.div>

        {/* Social Proof Images Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative mt-8 w-full max-w-6xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 p-1"
              >
                <div className="h-full w-full rounded-xl bg-background-secondary flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold bg-gradient-to-br from-accent-green to-accent-cyan bg-clip-text text-transparent mb-2">
                      {i === 1 && "2M+"}
                      {i === 2 && "180+"}
                      {i === 3 && "50K+"}
                      {i === 4 && "100+"}
                    </div>
                    <div className="text-xs text-text-tertiary uppercase tracking-wider">
                      {i === 1 && "Discussions"}
                      {i === 2 && "Countries"}
                      {i === 3 && "Doctors"}
                      {i === 4 && "Specialties"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 text-sm"
        >
          {[
            "HIPAA Compliant",
            "Verified Professionals Only",
            "CME Credits Available",
            "Global Network"
          ].map((feature, i) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="rounded-full bg-background-secondary px-4 py-2 text-text-tertiary border border-border-subtle"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}