"use client";

import { motion } from "framer-motion";
import { Building2, Users, Globe, Lock, CheckCircle, Shield } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Hospital Networks",
    description: "Connect your entire healthcare organization with private groups and secure collaboration tools.",
    color: "from-accent-cyan to-accent-blue"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enable seamless communication between departments, specialties, and care teams.",
    color: "from-accent-green to-accent-cyan"
  },
  {
    icon: Globe,
    title: "Multi-Site Support",
    description: "Manage multiple facilities and locations from a single unified platform.",
    color: "from-accent-blue to-accent-purple"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Advanced security controls, SSO integration, and comprehensive audit logs.",
    color: "from-accent-purple to-accent-pink"
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "HIPAA, SOC 2, and international healthcare compliance standards included.",
    color: "from-accent-orange to-accent-yellow"
  }
];

export default function EnterpriseSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background-tertiary py-40 text-background-primary">
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-5xl md:text-6xl font-bold leading-tight flex flex-wrap items-center justify-center gap-4">
            <span>Secure.</span>
            <Shield className="h-12 w-12 md:h-16 md:w-16 text-accent-green inline-block" />
            <span>Scalable.</span>
            <Building2 className="h-12 w-12 md:h-16 md:w-16 text-accent-cyan inline-block" />
            <span className="bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent">Trusted.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-background-primary/70">
            Enterprise solutions built for healthcare organizations that need security, compliance, and scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
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
              <p className="text-background-primary/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-background-primary/50">
            Trusted by Leading Healthcare Organizations
          </p>
          
          {/* Logo placeholders */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-12 w-32 rounded-lg bg-background-primary/10 flex items-center justify-center"
              >
                <span className="text-xs text-background-primary/40 font-semibold">LOGO {i}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gradient-to-r from-accent-green to-accent-cyan px-10 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-xl transition-all"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);