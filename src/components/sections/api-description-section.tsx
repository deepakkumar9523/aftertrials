"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Briefcase, Calendar, Award, Shield } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: MessageSquare,
    title: "Clinical Discussions",
    description: "Join specialty-specific forums, share insights, and learn from peers worldwide",
    color: "from-accent-cyan to-accent-blue"
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Connect with colleagues, build your professional circle, and expand opportunities",
    color: "from-accent-green to-accent-cyan"
  },
  {
    icon: Briefcase,
    title: "Case Collaboration",
    description: "Share challenging cases, get second opinions, and collaborative treatment approaches",
    color: "from-accent-purple to-accent-cyan"
  },
  {
    icon: Award,
    title: "CME & Learning",
    description: "Access continuing education, earn credits, and stay updated with latest research",
    color: "from-accent-yellow to-accent-orange"
  }
];

export default function ApiDescriptionSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-background-primary py-40 text-text-primary">
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
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Connect & Grow
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary">
            A complete platform designed specifically for healthcare professionals to network, learn, and collaborate securely.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActiveFeature(index)}
              className={`group relative overflow-hidden rounded-3xl border border-border-subtle p-8 transition-all duration-500 hover:border-accent-green/50 ${
                activeFeature === index ? "bg-gradient-to-br from-accent-green/5 to-accent-cyan/5" : "bg-background-secondary"
              }`}
            >
              <div className="relative z-10">
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${feature.color} p-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Animated gradient orb */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={activeFeature === index ? { scale: 1.5, opacity: 0.1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${feature.color} blur-3xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-border-subtle"
        >
          <div className="flex items-center gap-3 text-text-secondary">
            <Shield className="h-6 w-6 text-accent-green" />
            <span className="text-sm font-medium">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-3 text-text-secondary">
            <Users className="h-6 w-6 text-accent-cyan" />
            <span className="text-sm font-medium">Verified Professionals Only</span>
          </div>
          <div className="flex items-center gap-3 text-text-secondary">
            <Award className="h-6 w-6 text-accent-purple" />
            <span className="text-sm font-medium">ACCME Accredited</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}