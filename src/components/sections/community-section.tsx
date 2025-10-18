import Link from 'next/link';
import React from 'react';

const DotMatrixIcon = ({ pattern, className }: { pattern: string[]; className?: string }) => {
  if (!pattern || pattern.length === 0 || !pattern[0]) {
    return null;
  }

  const colorMap: Record<string, string> = {
    'W': 'bg-white',
    // Using a pinkish/fuchsia color as per instructions "pink".
    'P': 'bg-fuchsia-400', 
    'C': 'bg-accent-cyan',
  };

  return (
    <div
      className={`grid auto-rows-[4px] ${className}`}
      style={{
        gridTemplateColumns: `repeat(${pattern[0].length}, 4px)`,
        gap: '2px', // 2px gap between 4px dots
      }}
    >
      {pattern.flatMap((row, rowIndex) =>
        row.split('').map((char, colIndex) => {
          const colorClass = colorMap[char];
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`h-1 w-1 rounded-full ${colorClass || ''}`} // h-1 w-1 is 4px
            />
          );
        })
      )}
    </div>
  );
};

// Based on "book" in design instructions, this is a document icon
const docsPattern = [
  "    WWWWWWWWWWWW    ",
  "   W            WP  ",
  "  W              WW ",
  " W                W ",
  " W  WWWW          W ",
  " W  W             W ",
  " W  WWWW  C       W ",
  " W  W             W ",
  " W  WWWW          W ",
  " W                W ",
  " W                W ",
  "  W              W  ",
  "   W            W   ",
  "    WWWWWWWWWWWW    ",
  "                    ",
];

// Based on "chat" in design instructions
const communityPattern = [
  "      WWWWWWWW      ",
  "    WW        WW    ",
  "  WW            WW  ",
  " WW              WW ",
  " W                W ",
  " W       C        W ",
  " W                W ",
  " WW     P         WW ",
  "  WW            WW  ",
  "    WW        WW    ",
  "      WWWWWWWW      ",
  "          WW        ",
  "        WW          ",
  "      WW            ",
  "                    ",
];

// Based on "profile" in design instructions
const profilePattern = [
  "                    ",
  "      WWWWWW        ",
  "    WW      WW      ",
  "   W          W     ",
  "   W     P      W   ",
  "    WW      WW      ",
  "      WWWWWW        ",
  "                    ",
  "   WWWWWWWWWWWW     ",
  "  W            W    ",
  " WW     C        WW ",
  " W                W ",
  " W                W ",
  "  WWWWWWWWWWWWWW    ",
  "                    ",
];

const communityData = [
  {
    label: "CONFIGURATION POINTS",
    value: "4.2K+",
    platform: "Docs",
    href: "https://docs.vapi.ai/welcome",
    icon: docsPattern,
  },
  {
    label: "SUPPORT TOPICS",
    value: "13K+",
    platform: "Community",
    href: "https://vapi.ai/community",
    icon: communityPattern,
  },
  {
    label: "FOLLOWERS",
    value: "9.6K+",
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/vapi-ai",
    icon: profilePattern,
  },
];

const CommunitySection = () => {
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.05em] text-accent-purple">
            Community
          </p>
          <h2 className="mt-4 font-display text-[56px] font-bold leading-[1.1] tracking-tight text-white sm:text-[64px]">
            250,000+ devs are already <br className="hidden sm:inline" />here. Join the movement.
          </h2>
        </div>

        <div className="mx-auto mt-20 grid max-w-none grid-cols-1 gap-6 lg:grid-cols-3">
          {communityData.map((item) => (
            <Link
              key={item.platform}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-[380px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-[#1A1A1A] p-10 border-[#2A2A2A] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-zinc-700 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between font-mono text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>

              <div className="mt-auto">
                <DotMatrixIcon pattern={item.icon} />
                <p className="mt-8 font-display text-xl font-medium text-white">
                  {item.platform}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;