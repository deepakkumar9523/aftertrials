"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// cn utility for conditional classes
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
}

// SVG Component for the VAPI text logo in the card
const VapiLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height="23" width="81" fill="white" {...props}>
    <path d="M0 23V0h11.233v11.758h21.439V0h11.232v23H32.672V12.922H11.233V23H0ZM57.518 0l11.233 23h-12.02L52.003 9.43 47.345 0h10.173Zm-9.155 9.43 4.658 13.57h-11.9l-4.658-13.57h11.9ZM75.31 0h1.83l-10.446 23h-11.23l10.446-23h9.37Z" />
  </svg>
);

// SVG for the spinner icon in "Try it now" button
const TryItNowSpinner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <circle cx="10" cy="3" r="1.5" fill="currentColor" fillOpacity="0.4" />
    <circle cx="15.3" cy="4.7" r="1.5" fill="currentColor" fillOpacity="0.5" />
    <circle cx="17" cy="10" r="1.5" fill="currentColor" fillOpacity="0.6" />
    <circle cx="15.3" cy="15.3" r="1.5" fill="currentColor" fillOpacity="0.7" />
    <circle cx="10" cy="17" r="1.5" fill="currentColor" fillOpacity="0.8" />
    <circle cx="4.7" cy="15.3" r="1.5" fill="currentColor" fillOpacity="0.9" />
    <circle cx="3" cy="10" r="1.5" fill="currentColor" />
    <circle cx="4.7" cy="4.7" r="1.5" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState("inbound");

  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#a855f7] mb-4">
            Use cases
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-tight lg:leading-[1.1] text-text-primary -tracking-[0.01em] max-w-2xl mx-auto">
            Feels human.
            <br />
            Moves the needle.
          </h2>
          <div className="mt-12 mb-10 w-full max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row rounded-full border border-border-subtle p-1.5 backdrop-blur-[2px]">
              <button
                onClick={() => setActiveTab("inbound")}
                className={cn(
                  "w-full rounded-full py-3 text-sm md:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2",
                  activeTab === "inbound"
                    ? "bg-[#00E5E0] text-black"
                    : "bg-transparent text-text-primary hover:bg-white/10"
                )}
              >
                Inbound calls
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                  <path d="M7.5 1.5V10.5M7.5 10.5L10.5 7.5M7.5 10.5L4.5 7.5M1.5 13.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => setActiveTab("outbound")}
                className={cn(
                  "w-full rounded-full py-3 text-sm md:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2",
                  activeTab === "outbound"
                    ? "bg-[#00E5E0] text-black"
                    : "bg-transparent text-text-primary hover:bg-white/10"
                )}
              >
                Outbound calls
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                  <path d="M7.5 13.5V4.5M7.5 4.5L10.5 7.5M7.5 4.5L4.5 7.5M1.5 1.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          {activeTab === "inbound" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              <div className="lg:col-span-7 flex flex-col justify-between gap-12">
                <div className="bg-background-secondary border border-border-subtle rounded-2xl p-8">
                  <h3 className="text-text-primary font-display text-2xl mb-6">Inbound calls</h3>
                  <div className="flex items-center gap-4 mb-2">
                    <VapiLogo className="h-[23px] w-[81px]" />
                    <span className="text-text-primary font-display text-4xl">FleetWorks</span>
                  </div>
                  <p className="text-text-secondary text-lg max-w-md">powers 400,000+ daily calls. saves 100s of engineering hours monthly.</p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a href="https://vapi.ai/blog/fleetworks-saves-100-engineering-hours-per-month-2" className="flex items-center justify-center gap-2 rounded-full bg-[#F5F3ED] text-black px-6 py-3 font-mono text-sm uppercase tracking-wider font-medium group transition-transform hover:scale-105 active:scale-100">
                      Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href="https://dashboard.vapi.ai/" className="flex items-center justify-center gap-3 rounded-full border border-white/20 hover:border-white/50 text-text-primary px-6 py-3 font-mono text-sm uppercase tracking-wider font-medium group transition-transform hover:scale-105 active:scale-100">
                      try it now <TryItNowSpinner className="w-5 h-5 group-hover:animate-spin" />
                    </a>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 text-3xl font-display text-[#00E5E0]">“</div>
                  <p className="text-text-primary text-xl md:text-2xl font-display italic">
                    A key technical requirement was the ability to bring our own stack — Vapi's developer-friendly API-first approach made this possible.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/images/next-680330-personalLogo.png?" alt="Quang Tran" width={48} height={48} className="rounded-full" />
                    <div>
                      <p className="text-text-primary font-medium">Quang Tran</p>
                      <p className="text-text-secondary text-sm">CTO, FleetWorks</p>
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
                            <div><p className="text-white text-sm font-medium">Receive call</p><p className="text-xs text-text-secondary">Shipper Info</p></div>
                        </div>
                    </div>

                    <div className="absolute top-[130px] w-[280px] bg-[#030303]/70 backdrop-blur-sm border border-border-subtle rounded-lg p-3">
                        <div className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0e274e] mt-1 shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99992 1.33334H3.33325C2.59687 1.33334 1.99992 1.93029 1.99992 2.66668V13.3333C1.99992 14.0697 2.59687 14.6667 3.33325 14.6667H12.6666C13.403 14.6667 13.9999 14.0697 13.9999 13.3333V4.66668L9.99992 1.33334Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99992 1.33334V4.66668H13.9999" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <div className="flex flex-col gap-2 w-full"><p className="text-white text-sm font-medium">Use tool</p><div className="bg-[#0e274e] rounded px-2 py-1 text-xs font-mono text-[#3891ff]">Fetch_available_jobs_from_broker</div></div>
                        </div>
                    </div>

                    <div className="absolute top-[324px] w-[220px] bg-[#030303]/70 backdrop-blur-sm border border-border-subtle rounded-lg p-3">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 bg-[#383015] transform rotate-45 rounded-md shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-45"><path d="M3.33301 8L6.66634 11.3333L12.6663 5.33331" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <div><p className="text-white text-sm font-medium">Condition</p><p className="text-xs text-text-secondary">Job Available?</p></div>
                        </div>
                    </div>

                    <div className="absolute top-[487px] w-[220px] bg-[#030303]/70 backdrop-blur-sm border border-border-subtle rounded-lg p-3">
                        <div className="flex items-center gap-3">
                             <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1e21] shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 7.5H11.5V13.5L16.25 16.35L16.75 15.32L12.5 12.83V7.5Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="gray"></path></svg></span>
                             <div><p className="text-white text-sm font-medium">Integrations</p></div>
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