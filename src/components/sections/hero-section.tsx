"use client";

import { Waves } from "lucide-react";
import React from "react";

const DotsIcon = ({ className }: {className?: string;}) =>
<svg role="presentation" width="8" height="16" className={className} viewBox="0 0 8 16">
        <g fill="currentColor">
            <circle cx="4" cy="1.5" r="1"></circle>
            <circle cx="4" cy="4.5" r="1"></circle>
            <circle cx="4" cy="7.5" r="1"></circle>
            <circle cx="4" cy="10.5" r="1"></circle>
            <circle cx="4" cy="13.5" r="1"></circle>
        </g>
    </svg>;


const DotsCircleIcon = ({ className }: {className?: string;}) =>
<svg role="presentation" width="16" height="16" className={className} viewBox="0 0 16 16">
        <g fill="currentColor">
            <circle cx="8" cy="1" r="1"></circle>
            <circle cx="12.3" cy="3.7" r="1"></circle>
            <circle cx="15" cy="8" r="1"></circle>
            <circle cx="12.3" cy="12.3" r="1"></circle>
            <circle cx="8" cy="15" r="1"></circle>
            <circle cx="3.7" cy="12.3" r="1"></circle>
            <circle cx="1" cy="8" r="1"></circle>
            <circle cx="3.7" cy="3.7" r="1"></circle>
        </g>
    </svg>;


const HeroSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center gap-10 overflow-x-hidden bg-background-primary pt-14 text-text-primary md:gap-10 md:pt-24 xl:gap-16 xl:pt-[6.5rem]">
            <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_top_left,rgba(78,205,196,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(183,148,244,0.1),transparent_30%)]"></div>

            <h1 className="font-display text-balance px-6 text-[48px] font-black leading-tight tracking-[-0.02em] text-white md:text-[72px] !whitespace-pre-line">after Trials
        <br />
      </h1>

            <div className="mx-auto flex w-full max-w-[19.375rem] flex-col items-center gap-3 px-6 sm:max-w-[35.5rem] md:flex-row md:pb-[3.5rem] xl:pb-[0.5rem]">
                <a
          href="https://dashboard.vapi.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-full flex-1 items-center justify-center gap-3 rounded-full bg-[#00E5A0] px-[32px] py-[12px] font-mono text-base font-medium uppercase tracking-wider text-black transition-transform duration-300 hover:scale-102 active:scale-95 !whitespace-pre-line">Jo


          <span className="relative h-4 w-2 overflow-hidden">
                        <DotsIcon className="absolute inset-0 origin-center transition-transform duration-300 group-hover:translate-x-4" />
                        <DotsIcon className="absolute inset-0 -translate-x-4 origin-center transition-transform duration-300 group-hover:translate-x-0" />
                    </span>
                </a>
                <a
          href="https://docs.vapi.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-full flex-1 items-center justify-center gap-3 rounded-full border border-border bg-transparent px-[32px] py-[12px] font-mono text-base font-medium uppercase tracking-wider text-text-secondary transition-all duration-300 hover:scale-102 hover:border-text-primary hover:text-text-primary active:scale-95 !whitespace-pre-line">invite


          <DotsCircleIcon className="origin-center transition-transform duration-300 group-hover:rotate-45" />
                </a>
            </div>

            <div className="-mt-5 w-full [mask-image:linear-gradient(90deg,_transparent,_#000_10%,_#000_90%,_transparent_100%)] sm:-mt-10 md:mt-0">
                <div className="relative mx-auto min-h-[230px] w-full max-w-[96.25rem] sm:min-h-[396px]">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full">
                         <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover">

                            <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/videos/vapi-pattern.webm?" type="video/webm" />
                            <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7efce45a-ee96-4f84-b716-068ff7ccd449-vapi-ai/assets/videos/vapi-pattern.mp4?" type="video/mp4" />
                         </video>
                    </div>

                    <div className="absolute inset-0 grid place-items-center">
                        <div className="flex flex-col items-center gap-4">
                            <button
                aria-label="Talk to Vapi"
                className="group relative mt-4 flex h-14 w-[13.5rem] cursor-pointer items-center justify-center gap-3 rounded-full border border-white/20 bg-black/30 font-mono text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md transition-transform duration-300 hover:scale-105 active:scale-95 sm:h-[97px] sm:w-[373px] sm:gap-4 sm:text-xl">

                                <span className="relative grid text-nowrap">
                                    <span className="col-start-1 row-start-1 block transition-opacity duration-250 group-hover:opacity-0">
                                        TALK TO VAPI
                                    </span>
                                    <span className="col-start-1 row-start-1 opacity-0 transition-opacity duration-250 group-hover:opacity-100">
                                        GIVE IT A TRY
                                    </span>
                                </span>
                                <Waves className="h-5 shrink-0 sm:h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default HeroSection;