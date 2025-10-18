"use client";

import { motion } from "framer-motion";
import { Microscope, Stethoscope, Brain, Heart, Dna, Activity, Users, BookOpen } from "lucide-react";

const specialties = [
  { name: "Cardiology", icon: Heart, count: "8,200+", color: "from-red-500 to-pink-500" },
  { name: "Neurology", icon: Brain, count: "6,400+", color: "from-purple-500 to-indigo-500" },
  { name: "Oncology", icon: Activity, count: "5,800+", color: "from-blue-500 to-cyan-500" },
  { name: "Pediatrics", icon: Users, count: "7,100+", color: "from-green-500 to-emerald-500" },
  { name: "Radiology", icon: Microscope, count: "4,900+", color: "from-yellow-500 to-orange-500" },
  { name: "Surgery", icon: Stethoscope, count: "9,300+", color: "from-teal-500 to-cyan-500" },
  { name: "Genetics", icon: Dna, count: "3,200+", color: "from-violet-500 to-purple-500" },
  { name: "Research", icon: BookOpen, count: "4,600+", color: "from-cyan-500 to-blue-500" }
];

export default function IntegrationsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background-primary py-40 text-text-primary">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
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
            Connect with
            <br />
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              100+ Medical Specialties
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary">
            Find and connect with professionals in your field. Join specialty-specific communities and collaborate with experts worldwide.
          </p>
        </motion.div>

        {/* Specialty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-background-secondary to-background-primary border border-border-subtle p-8 text-center transition-all duration-300 hover:border-accent-green/50 hover:shadow-2xl hover:shadow-accent-green/10 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`mb-4 mx-auto inline-flex rounded-full bg-gradient-to-br ${specialty.color} p-4`}
              >
                <specialty.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Name */}
              <h3 className="mb-2 text-lg font-bold">{specialty.name}</h3>

              {/* Count */}
              <p className="text-sm text-text-tertiary">{specialty.count} members</p>

              {/* Glow effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.1 }}
                transition={{ duration: 0.6 }}
                className={`absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${specialty.color} blur-2xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-12 p-8 rounded-3xl bg-gradient-to-r from-accent-green/10 to-accent-cyan/10 border border-accent-green/20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-sm text-text-tertiary uppercase tracking-wider">Specialties</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-sm text-text-tertiary uppercase tracking-wider">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent mb-2">
              180+
            </div>
            <div className="text-sm text-text-tertiary uppercase tracking-wider">Countries</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}