"use client";

import { motion } from "framer-motion";
import { UserPlus, CheckCircle, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up with your medical credentials. Verification takes just 24 hours to ensure a trusted community.",
    color: "from-accent-green to-accent-cyan"
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Connect & Engage",
    description: "Find colleagues in your specialty, join discussions, and start building your professional network.",
    color: "from-accent-cyan to-accent-blue"
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Grow Your Career",
    description: "Share insights, collaborate on cases, earn CME credits, and discover new opportunities.",
    color: "from-accent-purple to-accent-pink"
  }
];

export default function HowItWorksSection() {
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
            Get Started in
            <br />
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary">
            Join the largest verified network of healthcare professionals in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-background-secondary to-background-primary border border-border-subtle p-10 transition-all duration-500 hover:border-accent-green/50 hover:shadow-2xl hover:shadow-accent-green/20"
            >
              {/* Number Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 border border-accent-green/30"
              >
                <span className="text-2xl font-bold bg-gradient-to-br from-accent-green to-accent-cyan bg-clip-text text-transparent">
                  {step.number}
                </span>
              </motion.div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`mb-8 inline-flex rounded-2xl bg-gradient-to-br ${step.color} p-5`}
              >
                <step.icon className="h-12 w-12 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>

              {/* Animated gradient orb on hover */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ duration: 0.6 }}
                className={`absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${step.color} blur-3xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}