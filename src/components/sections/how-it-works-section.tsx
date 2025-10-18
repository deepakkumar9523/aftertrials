"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cardData = [
  {
    number: "001",
    imageSrc: "https://vapi.ai/how-it-works/steps/0/image.png",
    imageAlt: "Create your profile",
    title: "Create your profile",
    description: "Verify your medical credentials and join a trusted network of healthcare professionals.",
  },
  {
    number: "002",
    imageSrc: "https://vapi.ai/how-it-works/steps/1/image.png",
    imageAlt: "Connect & Share",
    title: "Connect & Share",
    description: "Join specialty groups, share insights, and collaborate on complex cases with peers worldwide.",
  },
  {
    number: "003",
    imageSrc: "https://vapi.ai/how-it-works/steps/2/image.png",
    imageAlt: "Advance Care",
    title: "Advance Care",
    description: "Access latest research, attend webinars, and bring cutting-edge knowledge to your practice.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-background-secondary to-background-primary py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p 
            className="inline-block font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent-cyan px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5"
            whileHover={{ scale: 1.05 }}
          >
            How It Works
          </motion.p>
          <h2 className="mt-6 text-4xl leading-[1.1] tracking-[-0.02em] text-text-primary sm:text-5xl lg:text-[64px]">
            Join in <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">minutes</span>.
            <br />
            Connect <span className="bg-gradient-to-r from-accent-green to-accent-cyan bg-clip-text text-transparent">instantly</span>.
          </h2>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cardData.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col rounded-3xl border border-border-subtle bg-gradient-to-b from-background-secondary to-background-primary p-8 transition-all duration-300 hover:border-accent-green/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-green/0 via-accent-cyan/0 to-accent-blue/0 opacity-0 transition-opacity duration-300 group-hover:from-accent-green/5 group-hover:via-accent-cyan/5 group-hover:to-accent-blue/5 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-green/30 bg-accent-green/5 font-mono text-sm text-accent-green transition-all duration-300 group-hover:border-accent-green group-hover:bg-accent-green group-hover:text-black group-hover:shadow-lg group-hover:shadow-accent-green/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {card.number}
                </motion.div>
                
                <div className="relative my-12 flex h-[140px] items-center justify-center md:my-14">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      width={160}
                      height={140}
                      className="h-full w-auto object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
                
                <div className="flex flex-grow flex-col">
                  <h3 className="text-2xl font-semibold text-text-primary transition-colors group-hover:text-accent-green">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;