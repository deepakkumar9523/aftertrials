"use client";

import { useState } from "react";
import { Github, Download, FileText, Copy } from "lucide-react";

// SVGs for technology icons
const TypeScriptIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#3178C6" />
    <path
      d="M9.225 17.1188V8.32502H11.6625V10.725L13.5375 8.32502H16.5938L14.1562 11.2125L16.8188 17.1188H13.65L12.2625 14.7188L11.6625 15.3938V17.1188H9.225ZM17.2031 11.775C17.3438 11.55 17.4141 11.3063 17.4141 11.0438C17.4141 10.5375 17.2219 10.125 16.8375 9.80627C16.4531 9.48752 15.9141 9.32815 15.2188 9.32815H13.2562V11.7563H14.925C15.45 11.7563 15.8531 11.775 16.1188 11.8313C16.3844 11.8875 16.6125 11.975 16.8031 12.0938L17.2031 11.775Z"
      fill="white"
    />
  </svg>
);

const PythonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.25 7.50002C14.25 6.00002 12.75 4.50002 11.25 4.50002H7.5V7.50002H11.25C11.642 7.50002 12 7.85802 12 8.25002C12 8.64202 11.642 9.00002 11.25 9.00002H6V15H11.25C13.0409 15 14.5205 13.526 14.226 11.751L13.875 9.56252C14.1111 9.49279 14.25 9.2458 14.25 8.96252V7.50002Z"
      fill="#3776AB"
    />
    <path
      d="M9.75 16.5C9.75 18 11.25 19.5 12.75 19.5H16.5V16.5H12.75C12.358 16.5 12 16.142 12 15.75C12 15.358 12.358 15 12.75 15H18V9H12.75C10.9591 9 9.47951 10.474 9.77399 12.249L10.125 14.4375C9.88887 14.5072 9.75 14.7542 9.75 15.0375V16.5Z"
      fill="#FFD43B"
    />
  </svg>
);

const CurlIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="11" fontWeight="bold">
      cURL
    </text>
  </svg>
);

const ReactIcon = () => (
  <svg width="20" height="20" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const codeSnippets = {
  typescript: (
    <>
      <CodeLine lineNumber={1}><span className="text-text-tertiary">npm install @vapi-ai/server-sdk</span></CodeLine>
      <CodeLine lineNumber={2} />
      <CodeLine lineNumber={3}>
        <span className="text-text-tertiary">import</span> {'{'} <span className="text-accent-cyan">VapiClient</span> {'}'} <span className="text-text-tertiary">from</span> <span className="text-accent-green">"@vapi-ai/server-sdk"</span>
      </CodeLine>
      <CodeLine lineNumber={4} />
      <CodeLine lineNumber={5}>
        <span className="text-text-tertiary">const</span> <span className="text-text-primary">vapi</span> = <span className="text-accent-cyan">new</span> <span className="text-accent-cyan">VapiClient</span>({'{'}
      </CodeLine>
      <CodeLine lineNumber={6}>
        {'  '}<span className="text-text-primary">token</span>: <span className="text-accent-green">'YOUR_PRIVATE_API_KEY'</span> <span className="text-text-tertiary">{'//'} Get your private api key from the dashboard</span>
      </CodeLine>
      <CodeLine lineNumber={7}>
        {'}'});
      </CodeLine>
      <CodeLine lineNumber={8} />
      <CodeLine lineNumber={9}>
        <span className="text-text-tertiary">async function</span> <span className="text-accent-cyan">createCall</span>() {'{'}
      </CodeLine>
      <CodeLine lineNumber={10}>
        {'  '}<span className="text-text-tertiary">const</span> <span className="text-text-primary">call</span> = <span className="text-text-tertiary">await</span> vapi.calls.create({'{'}
      </CodeLine>
      <CodeLine lineNumber={11}>
        {'    '}<span className="text-text-primary">phoneNumberId</span>: <span className="text-accent-green">'YOUR_PHONE_NUMBER_ID'</span>, <span className="text-text-tertiary">{'//'} Create a free phone number in the dashboard</span>
      </CodeLine>
      <CodeLine lineNumber={12}>
        {'    '}<span className="text-text-primary">customer</span>: {'{'} <span className="text-text-primary">number</span>: <span className="text-accent-green">'+1234567890'</span> {'}'}, <span className="text-text-tertiary">{'//'} Your customer's phone number</span>
      </CodeLine>
      <CodeLine lineNumber={13}>
        {'    '}<span className="text-text-primary">assistant</span>: {'{'}
      </CodeLine>
      <CodeLine lineNumber={14}>
        {'      '}<span className="text-text-primary">model</span>: {'{'}
      </CodeLine>
      <CodeLine lineNumber={15}>
        {'        '}<span className="text-text-primary">provider</span>: <span className="text-accent-green">'openai'</span>,
      </CodeLine>
      <CodeLine lineNumber={16}>
        {'        '}<span className="text-text-primary">model</span>: <span className="text-accent-green">'gpt-4o'</span>,
      </CodeLine>
      <CodeLine lineNumber={17}>
        {'        '}<span className="text-text-primary">messages</span>: [
      </CodeLine>
      <CodeLine lineNumber={18}>
        {'          {'}
      </CodeLine>
      <CodeLine lineNumber={19}>
        {'            '}<span className="text-text-primary">role</span>: <span className="text-accent-green">'system'</span>,
      </CodeLine>
      <CodeLine lineNumber={20}>
        {'            '}<span className="text-text-primary">content</span>: <span className="text-accent-green">'You are a helpful AI assistant. Keep your responses concise and friendly.'</span>
      </CodeLine>
      <CodeLine lineNumber={21}>
        {'          }'}
      </CodeLine>
      <CodeLine lineNumber={22}>
        {'        ]'}
      </CodeLine>
      <CodeLine lineNumber={23}>
        {'      }'}
      </CodeLine>
      <CodeLine lineNumber={24}>
        {'    }'}
      </CodeLine>
      <CodeLine lineNumber={25}>
        {'  }'});
      </CodeLine>
      <CodeLine lineNumber={26}>
        {'}'}
      </CodeLine>
    </>
  ),
  python: <CodeLine lineNumber={1}>Python code snippet coming soon...</CodeLine>,
  curl: <CodeLine lineNumber={1}>cURL command coming soon...</CodeLine>,
  react: <CodeLine lineNumber={1}>React Web SDK example coming soon...</CodeLine>,
};

type TabId = keyof typeof codeSnippets;

const tabs: { id: TabId; name: string; icon: JSX.Element }[] = [
  { id: "typescript", name: "TypeScript", icon: <TypeScriptIcon /> },
  { id: "python", name: "Python", icon: <PythonIcon /> },
  { id: "curl", name: "cURL", icon: <CurlIcon /> },
  { id: "react", name: "React (web SDK)", icon: <ReactIcon /> },
];

function CodeLine({ lineNumber, children }: { lineNumber: number; children?: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="w-5 text-right text-text-tertiary select-none">{lineNumber}</span>
      <span className="flex-1">{children || <>&nbsp;</>}</span>
    </div>
  );
}

export default function ApiDescriptionSection() {
  const [activeTab, setActiveTab] = useState<TabId>("typescript");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // This is a simplified copy function.
    // In a real app, you'd extract the raw text from the JSX.
    const textToCopy = `
      npm install @vapi-ai/server-sdk
      import { VapiClient } from "@vapi-ai/server-sdk"
      const vapi = new VapiClient({ token: 'YOUR_PRIVATE_API_KEY' })
      // ...etc
    `.trim();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-background-primary py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}></div>
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.05em] text-accent-purple">API</span>
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-[56px] lg:leading-tight text-center max-w-4xl mx-auto">
          Making voice AI simple <br /> and accessible.
        </h2>
        <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-[800px] mx-auto text-center">
          The most configurable API to build leading voice AI products and scale phone operations.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative w-full overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max mx-auto space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2.5 whitespace-nowrap px-4 py-2.5 rounded-full font-mono text-sm leading-none
                    border transition-colors duration-200
                    ${activeTab === tab.id
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-border-subtle text-foreground hover:bg-secondary'
                    }
                  `}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 relative rounded-2xl border border-border-subtle overflow-hidden">
             <div className="absolute inset-0 z-0" style={{
                backgroundImage: 'radial-gradient(var(--border-subtle) 0.5px, transparent 0.5px)',
                backgroundSize: '16px 16px',
            }}></div>
            <div className="relative bg-code-background/80 backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-2 p-4 border-b border-border-subtle">
                  <a href="https://github.com/VapiAI/server-sdk-typescript" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-secondary border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary transition-colors">
                    <Github className="w-3.5 h-3.5" />
                    View on Github
                  </a>
                   <a href="https://github.com/VapiAI/server-sdk-typescript/archive/refs/heads/main.zip" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-secondary border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary transition-colors">
                    <Download className="w-3.5 h-3.5" />
                    Download ZIP
                  </a>
                  <a href="https://docs.vapi.ai/sdks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-secondary border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    Client SDK
                  </a>
                  <a href="https://docs.vapi.ai/server-sdks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-secondary border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    Server SDK
                  </a>
                </div>
                <div className="relative p-6">
                    <pre className="font-mono text-sm leading-relaxed text-left overflow-x-auto">
                        <code>
                            {codeSnippets[activeTab]}
                        </code>
                    </pre>
                    <button onClick={handleCopy} className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-secondary border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary transition-colors">
                       <Copy className="w-3.5 h-3.5" />
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}