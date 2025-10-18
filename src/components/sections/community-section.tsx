"use client";

import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Linkedin, ArrowRight } from "lucide-react";

const platforms = [
  {
    icon: MessageCircle,
    title: "Active Forums",
    stat: "2M+",
    description: "Clinical discussions daily",
    color: "from-accent-green to-accent-cyan",
    link: "#"
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    stat: "10K+",
    description: "Research articles & resources",
    color: "from-accent-cyan to-accent-blue",
    link: "#"
  },
  {
    icon: Linkedin,
    title: "Global Network",
    stat: "50K+",
    description: "Healthcare professionals",
    color: "from-accent-purple to-accent-pink",
    link: "#"
  }
];

export default function CommunitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-background-primary py-40 text-text-primary">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              50,000+ Healthcare Pros
            </span>
            <br />
            Are Already Here
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary">
            Join the movement transforming how healthcare professionals connect, learn, and collaborate.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.title}
              href={platform.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-background-secondary to-background-primary border-2 border-border-subtle p-10 transition-all duration-500 hover:border-accent-green/50 hover:shadow-2xl hover:shadow-accent-green/20 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`mb-8 inline-flex rounded-full bg-gradient-to-br ${platform.color} p-6`}
              >
                <platform.icon className="h-10 w-10 text-white" />
              </motion.div>

              {/* Stat */}
              <div className={`mb-2 text-6xl font-bold bg-gradient-to-br ${platform.color} bg-clip-text text-transparent`}>
                {platform.stat}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold">{platform.title}</h3>

              {/* Description */}
              <p className="mb-6 text-text-secondary">{platform.description}</p>

              {/* Arrow */}
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-accent-green font-semibold"
              >
                <span>Explore</span>
                <ArrowRight className="h-5 w-5" />
              </motion.div>

              {/* Glow effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ duration: 0.6 }}
                className={`absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${platform.color} blur-3xl`}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="mb-6 text-xl text-text-secondary">
            Ready to be part of something bigger?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-accent-green px-10 py-4 text-base font-semibold uppercase tracking-wide text-background-primary shadow-xl transition-all"
          >
            Join the Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}