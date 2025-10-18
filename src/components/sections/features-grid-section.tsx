"use client";

import { motion } from "framer-motion";
import { Shield, Users, MessageSquare, Video, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security ensures all your data and discussions remain confidential and compliant.",
    color: "from-accent-green to-accent-cyan",
    gradient: "bg-gradient-to-br from-accent-green/20 to-accent-cyan/20"
  },
  {
    icon: Users,
    title: "Verified Network",
    description: "Every member is credential-verified. Connect confidently with real healthcare professionals.",
    color: "from-accent-cyan to-accent-blue",
    gradient: "bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20"
  },
  {
    icon: MessageSquare,
    title: "Specialty Forums",
    description: "Join focused discussions in your field. Over 100+ specialty-specific communities available.",
    color: "from-accent-purple to-accent-pink",
    gradient: "bg-gradient-to-br from-accent-purple/20 to-accent-pink/20"
  },
  {
    icon: Video,
    title: "Virtual Rounds",
    description: "Participate in live case presentations and grand rounds with colleagues worldwide.",
    color: "from-accent-blue to-accent-purple",
    gradient: "bg-gradient-to-br from-accent-blue/20 to-accent-purple/20"
  },
  {
    icon: Award,
    title: "CME Credits",
    description: "Earn continuing education credits through courses, webinars, and verified learning activities.",
    color: "from-accent-yellow to-accent-orange",
    gradient: "bg-gradient-to-br from-accent-yellow/20 to-accent-orange/20"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with 50,000+ professionals across 180+ countries. Break down geographical barriers.",
    color: "from-accent-green to-accent-blue",
    gradient: "bg-gradient-to-br from-accent-green/20 to-accent-blue/20"
  }
];

export default function FeaturesGridSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background-secondary py-40 text-text-primary">
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
            Built for Healthcare
            <br />
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary">
            Every feature designed with your needs in mind—secure, compliant, and purpose-built for medical collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border border-border-subtle p-8 transition-all duration-500 hover:border-accent-green/50 hover:shadow-2xl ${feature.gradient}`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${feature.color} p-4`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>

              {/* Glow effect on hover */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.15 }}
                transition={{ duration: 0.6 }}
                className={`absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-br ${feature.color} blur-3xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}