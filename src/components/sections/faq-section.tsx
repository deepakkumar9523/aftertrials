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
    question: "What is After Trials?",
    answer: "After Trials is a secure social media platform exclusively for verified healthcare professionals. It enables doctors to connect globally, share clinical insights, discuss complex cases, and access the latest medical research—all within a HIPAA-compliant environment.",
  },
  {
    value: "item-2",
    question: "How do you verify medical credentials?",
    answer: "We verify every member through multiple medical licensing databases and credential checks. Physicians must provide their medical license number, NPI, and institutional affiliation. Our verification team confirms credentials before granting platform access.",
  },
  {
    value: "item-3",
    question: "Is patient information protected?",
    answer: "Absolutely. After Trials is fully HIPAA compliant with end-to-end encryption. All case discussions must use de-identified information. Our platform is designed with healthcare privacy regulations at its core, ensuring patient confidentiality is never compromised.",
  },
  {
    value: "item-4",
    question: "Can I earn CME credits on the platform?",
    answer: "Yes! After Trials offers accredited continuing medical education through webinars, expert-led discussions, and interactive learning modules. Track your CME credits directly within your profile and receive certificates for completed activities.",
  },
  {
    value: "item-5",
    question: "How much does it cost to join?",
    answer: "After Trials offers a free tier for individual physicians with access to core networking features. Premium memberships unlock advanced features like unlimited case consultations, exclusive research access, and priority support. Institutional plans are available for hospitals and medical groups.",
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