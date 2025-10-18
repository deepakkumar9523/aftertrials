"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Quote, Star, MapPin } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    specialty: "Cardiology",
    location: "Johns Hopkins Hospital, USA",
    image: "/placeholder-avatar.jpg",
    quote: "After Trials has transformed how I connect with peers globally. I've consulted on complex cases and discovered groundbreaking research I wouldn't have found otherwise.",
    rating: 5,
    stats: {
      connections: "2,400+",
      discussions: "340+"
    }
  },
  {
    name: "Dr. James Okafor",
    specialty: "Emergency Medicine",
    location: "Lagos University Hospital, Nigeria",
    image: "/placeholder-avatar.jpg",
    quote: "The peer collaboration features are incredible. I've learned so much from specialists around the world and contributed to improving patient outcomes through shared knowledge.",
    rating: 5,
    stats: {
      connections: "1,800+",
      discussions: "520+"
    }
  },
  {
    name: "Dr. Maria Rodriguez",
    specialty: "Pediatric Surgery",
    location: "Barcelona Medical Center, Spain",
    image: "/placeholder-avatar.jpg",
    quote: "As a researcher, After Trials has been invaluable for finding collaborators and staying current with clinical trials. The CME credits are a huge bonus!",
    rating: 5,
    stats: {
      connections: "3,200+",
      discussions: "180+"
    }
  }
];

export default function UseCasesSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
            Trusted by Healthcare
            <br />
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-text-secondary">
            Join thousands of doctors and healthcare professionals advancing their careers and improving patient care.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-background-primary border border-border-subtle p-8 transition-all duration-300 hover:border-accent-green/50 hover:shadow-2xl hover:shadow-accent-green/20"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-16 w-16 text-accent-green/10" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Avatar Placeholder */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent-green to-accent-cyan" />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-text-tertiary">{testimonial.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 text-text-tertiary" />
                      <p className="text-xs text-text-tertiary">{testimonial.location}</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-yellow text-accent-yellow" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-text-secondary leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Stats */}
                <div className="flex gap-6 pt-6 border-t border-border-subtle">
                  <div>
                    <div className="text-2xl font-bold text-accent-green">{testimonial.stats.connections}</div>
                    <div className="text-xs text-text-tertiary uppercase">Connections</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-cyan">{testimonial.stats.discussions}</div>
                    <div className="text-xs text-text-tertiary uppercase">Discussions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-accent-green px-10 py-4 text-base font-semibold uppercase tracking-wide text-background-primary shadow-xl transition-all"
          >
            Start Connecting Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}