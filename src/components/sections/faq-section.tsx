"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Who can join After Trials?",
    answer: "After Trials is exclusively for licensed healthcare professionals including physicians, nurses, pharmacists, researchers, and medical students. All members must verify their credentials during registration to maintain our trusted community."
  },
  {
    question: "How does the verification process work?",
    answer: "After signing up, you'll submit proof of your medical credentials (license number, institution email, or medical ID). Our team reviews submissions within 24-48 hours. Once verified, you'll gain full access to the platform."
  },
  {
    question: "Is my data secure and HIPAA compliant?",
    answer: "Absolutely. We use enterprise-grade encryption and are fully HIPAA compliant. All discussions, patient data (if shared with identifiers removed), and personal information are protected with the highest security standards."
  },
  {
    question: "Can I earn CME credits on After Trials?",
    answer: "Yes! We're ACCME accredited and offer CME/CE credits through courses, webinars, and verified educational activities. Credits are automatically tracked in your profile and certificates are available for download."
  },
  {
    question: "Is After Trials free to use?",
    answer: "Basic membership is completely free and includes access to forums, networking, and select educational content. Premium memberships offer additional features like unlimited CME credits, advanced analytics, and priority support."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-background-secondary py-40 text-text-primary">
      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-5xl md:text-6xl font-bold">
            Your Questions,
            <br />
            <span className="bg-gradient-to-r from-accent-green via-accent-cyan to-accent-blue bg-clip-text text-transparent">
              Answered
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-border-subtle bg-background-primary transition-all duration-300 hover:border-accent-green/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-8 text-left transition-all"
              >
                <span className="text-xl font-bold pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-accent-green" />
                  ) : (
                    <Plus className="h-6 w-6 text-text-tertiary" />
                  )}
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}