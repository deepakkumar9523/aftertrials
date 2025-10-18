"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Healthcare Professionals",
    color: "from-accent-green to-accent-cyan",
    description: "Verified doctors, nurses, and medical researchers"
  },
  {
    icon: MessageSquare,
    value: "2M+",
    label: "Clinical Discussions",
    color: "from-accent-cyan to-accent-blue",
    description: "Active threads and case collaborations monthly"
  },
  {
    icon: Globe,
    value: "180+",
    label: "Countries",
    color: "from-accent-blue to-accent-purple",
    description: "Global network spanning every continent"
  }
];

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background-secondary py-32 text-text-primary">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
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
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-background-primary border border-border-subtle p-10 text-center transition-all duration-300 hover:border-accent-green/50 hover:shadow-2xl hover:shadow-accent-green/20"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 360 }}
                className={`mb-6 mx-auto inline-flex rounded-full bg-gradient-to-br ${stat.color} p-5`}
              >
                <stat.icon className="h-10 w-10 text-white" />
              </motion.div>

              {/* Value */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                className={`mb-3 text-6xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <h3 className="mb-3 text-xl font-bold uppercase tracking-wide">{stat.label}</h3>

              {/* Description */}
              <p className="text-sm text-text-tertiary leading-relaxed">{stat.description}</p>

              {/* Glow effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.15 }}
                transition={{ duration: 0.6 }}
                className={`absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${stat.color} blur-3xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}