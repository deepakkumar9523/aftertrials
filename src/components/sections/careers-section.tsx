"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote / San Francisco",
    type: "Full-time",
    department: "Engineering"
  },
  {
    title: "Healthcare Community Manager",
    location: "Remote",
    type: "Full-time",
    department: "Community"
  },
  {
    title: "Medical Content Specialist",
    location: "Remote / New York",
    type: "Full-time",
    department: "Content"
  }
];

export default function CareersSection() {
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-green/20 px-6 py-3 text-sm font-medium text-accent-green"
          >
            <Briefcase className="h-4 w-4" />
            <span>CAREERS AT AFTER TRIALS</span>
          </motion.div>

          <h2 className="mb-6 text-5xl md:text-6xl font-bold leading-tight">
            Help Us Transform
            <br />
            <span className="bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent">
              Healthcare Collaboration
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-background-primary/70">
            Join our mission-driven team building the future of professional networking for healthcare. We're looking for passionate individuals who want to make a real impact.
          </p>
        </motion.div>

        {/* Open Positions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {openings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-block rounded-full bg-gradient-to-r from-accent-green to-accent-cyan px-4 py-1 text-xs font-semibold text-white">
                  {job.department}
                </span>
              </div>
              
              <h3 className="mb-4 text-xl font-bold">{job.title}</h3>
              
              <div className="space-y-2 mb-6 text-sm text-background-primary/60">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
              </div>

              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-2 font-semibold text-accent-green"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gradient-to-r from-accent-green to-accent-cyan px-10 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-xl transition-all"
          >
            View All Open Roles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}