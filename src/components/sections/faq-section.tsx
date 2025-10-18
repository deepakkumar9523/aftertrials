"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    value: "item-1",
    question: "What is Vapi?",
    answer: "Vapi is a comprehensive platform for developers to build, test, and deploy advanced voice AI agents. It provides a robust API, SDKs, and a suite of tools to create human-like conversational experiences that can be integrated into any application or workflow.",
  },
  {
    value: "item-2",
    question: "How is this more cost-effective for my organisation?",
    answer: "By leveraging Vapi, organizations can automate a significant portion of their voice-based interactions, reducing the need for large call center staff. Our optimized infrastructure and pay-as-you-go pricing model ensure you only pay for what you use, leading to substantial cost savings compared to traditional solutions or building from scratch.",
  },
  {
    value: "item-3",
    question: "What is the difference from other AI voice competitors?",
    answer: "Vapi distinguishes itself with its developer-first approach, offering unparalleled flexibility and customization. Unlike black-box solutions, we provide deep control over every component, from transcription and LLMs to voice synthesis. Our platform is designed for rapid iteration, robust testing, and seamless scalability.",
  },
  {
    value: "item-4",
    question: "I need holistic customization, what types of support does your platform offer?",
    answer: "Our platform is built for holistic customization. You can bring your own models (BYOM), use custom tools via API calls, define complex conversational flows, and fine-tune every aspect of the agent's behavior and voice. For enterprise clients, we offer dedicated support and forward-deployed engineers to assist with bespoke integrations.",
  },
  {
    value: "item-5",
    question: "Is it difficult to set up?",
    answer: "Not at all. You can get started in minutes. Our comprehensive documentation, pre-made templates, and intuitive SDKs for popular languages like TypeScript and Python make the initial setup straightforward. A basic voice agent can be up and running with just a few lines of code.",
  },
];

const FaqIcon = () => (
  <div className="relative h-6 w-6 shrink-0 text-white transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45">
    <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-current" />
    <span className="absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-current" />
  </div>
);


const FaqSection = () => {
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-text-primary sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Your questions,<br />
              answered.
            </h2>
          </div>
          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem 
                  key={item.value} 
                  value={item.value} 
                  className="border-b border-[#2A2A2A]"
                >
                  <AccordionTrigger className="group flex w-full items-center justify-between py-6 text-left text-base font-semibold text-white hover:text-white/80 hover:no-underline md:text-lg">
                    <span className="pr-4">{item.question}</span>
                    <FaqIcon />
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="max-w-[800px] pt-4 text-base text-text-secondary">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;