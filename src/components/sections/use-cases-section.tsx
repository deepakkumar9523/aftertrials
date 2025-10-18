"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
}

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState("collaboration");

  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#a855f7] mb-4">
            Use cases
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-tight lg:leading-[1.1] text-text-primary -tracking-[0.01em] max-w-2xl mx-auto">
            Connect. Collaborate.
            <br />
            Advance Care.
          </h2>
          <div className="mt-12 mb-10 w-full max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row rounded-full border border-border-subtle p-1.5 backdrop-blur-[2px]">
              <button
                onClick={() => setActiveTab("collaboration")}
                className={cn(
                  "w-full rounded-full py-3 text-sm md:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2",
                  activeTab === "collaboration"
                    ? "bg-[#00E5E0] text-black"
                    : "bg-transparent text-text-primary hover:bg-white/10"
                )}
              >
                Peer Collaboration
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={cn(
                  "w-full rounded-full py-3 text-sm md:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2",
                  activeTab === "research"
                    ? "bg-[#00E5E0] text-black"
                    : "bg-transparent text-text-primary hover:bg-white/10"
                )}
              >
                Research & Trials
              </button>
            </div>
          </div>
        </div>

        <div>
          {activeTab === "collaboration" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              <div className="lg:col-span-7 flex flex-col justify-between gap-12">
                <div className="bg-background-secondary border border-border-subtle rounded-2xl p-8">
                  <h3 className="text-text-primary font-display text-2xl mb-6">Peer Collaboration</h3>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-text-primary font-display text-4xl">After Trials</span>
                  </div>
                  <p className="text-text-secondary text-lg max-w-md">Facilitates 50,000+ daily clinical discussions. Connects doctors across 180+ countries instantly.</p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a href="#" className="flex items-center justify-center gap-2 rounded-full bg-[#F5F3ED] text-black px-6 py-3 font-mono text-sm uppercase tracking-wider font-medium group transition-transform hover:scale-105 active:scale-100">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href="#" className="flex items-center justify-center gap-3 rounded-full border border-white/20 hover:border-white/50 text-text-primary px-6 py-3 font-mono text-sm uppercase tracking-wider font-medium group transition-transform hover:scale-105 active:scale-100">
                      Join Now
                    </a>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 text-3xl font-display text-[#00E5E0]">"</div>
                  <p className="text-text-primary text-xl md:text-2xl font-display italic">
                    After Trials has transformed how I connect with peers globally. The platform's security and professional focus make it invaluable for discussing complex cases.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-680330-personalLogo.png?" alt="Dr. Sarah Chen" width={48} height={48} className="rounded-full" />
                    <div>
                      <p className="text-text-primary font-medium">Dr. Sarah Chen</p>
                      <p className="text-text-secondary text-sm">Cardiologist, Stanford Health</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="lg:col-span-5 relative min-h-[550px] lg:h-auto rounded-2xl overflow-hidden">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-407901-flow-bg.png?" alt="Flow diagram background" layout="fill" objectFit="cover" className="z-0"/>
                <div className="relative z-10 p-4 md:p-8 flex flex-col items-center h-full">
                    
                    <svg width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[88px] left-1/2 -translate-x-1/2"><path d="M1 0V41" stroke="#4F4F52" strokeWidth="1.5" strokeDasharray="4 4"/><path d="M1 41L4 36M1 41L-2 36" stroke="#4F4F52" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    <svg width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[282px] left-1/2 -translate-x-1/2"><path d="M1 0V41" stroke="#4F4F52" strokeWidth="1.5" strokeDasharray="4 4"/><path d="M1 41L4 36M1 41L-2 36" stroke="#4F4F52" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    <svg width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[445px] left-1/2 -translate-x-1/2"><path d="M1 0V41" stroke="#4F4F52" strokeWidth="1.5" strokeDasharray="4 4"/><path d="M1 41L4 36M1 41L-2 36" stroke="#4F4F52" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  
                    <div className="absolute top-8 w-[220px] bg-[#030303]/70 backdrop-blur-sm border border-border-subtle rounded-lg p-3">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#183425] shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6663 8.00001C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00001C1.33301 4.31812 4.31778 1.33334 7.99967 1.33334C11.6816 1.33334 14.6663 4.31812 14.6663 8.00001Z" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 5.33334V8.00001" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <div><p className="text-white text-sm font-medium">Join Network</p><p className="text-xs text-text-secondary">Verify Credentials</p></div>
                        </div>
                    </div>

                    <div className="absolute top-[130px] w-[280px] bg-[#030303]/70 backdrop-blur-sm border border-border-subtle rounded-lg p-3">
                        <div className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0e274e] mt-1 shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99992 1.33334H3.33325C2.59687 1.33334 1.99992 1.93029 1.99992 2.66668V13.3333C1.99992 14.0697 2.59687 14.6667 3.33325 14.6667H12.6666C13.403 14.6667 13.9999 14.0697 13.9999 13.3333V4.66668L9.99992 1.33334Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99992 1.33334V4.66668H13.9999" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <div className="flex flex-col gap-2 w-full"><p className="text-white text-sm font-medium">Share Case</p><div className="bg-[#0e274e] rounded px-2 py-1 text-xs font-mono text-[#3891ff]">Upload_medical_imaging_data</div></div>
                        </div>
                    </div>

                    <div className="absolute top-[324px] w-[220px] bg-[#030303]/70 backdrop-blur-sm border border-border-subtle rounded-lg p-3">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#383015] transform rotate-45 rounded-md shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-45"><path d="M3.33301 8L6.66634 11.3333L12.6663 5.33331" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <div><p className="text-white text-sm font-medium">Peer Review</p><p className="text-xs text-text-secondary">Get Expert Insights</p></div>
                        </div>
                    </div>

                    <div className="absolute top-[487px] w-[220px] bg-[#030303]/70 backdrop-blur-sm border border-border-subtle rounded-lg p-3">
                        <div className="flex items-center gap-3">
                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1e21] shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 7.5H11.5V13.5L16.25 16.35L16.75 15.32L12.5 12.83V7.5Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="gray"></path></svg></span>
                             <div><p className="text-white text-sm font-medium">Collaboration Complete</p></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;