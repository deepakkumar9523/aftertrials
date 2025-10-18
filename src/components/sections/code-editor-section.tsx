"use client";

import { useState } from "react";
import { Check, Copy, Download, Github, Server, FileText } from "lucide-react";

const CodeEditorSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const codeToCopy = `// # Install the server SDK
npm install @vapi-ai/server-sdk

import { VapiClient } from '@vapi-ai/server-sdk';
const vapi = new VapiClient('YOUR_PRIVATE_API_KEY'); // Get your private api key from the dashboard

async function createCall() {
  const call = await vapi.calls.create({
    phoneNumberId: 'YOUR_PHONE_NUMBER_ID', // Create a free phone number in the dashboard
    customer: { number: '+1234567890' }, // Your customer's phone number
    assistant: {
      model: {
        provider: 'openai',
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant. Keep your responses concise and friendly.'
          }
        ]
      }
    }
  });
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const lineNumbers = Array.from({ length: 27 }, (_, i) => i + 1);

  return (
    <section className="relative bg-background-primary py-24 sm:py-32">
      <div
        className="absolute inset-0 z-0 bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,31,35,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(31,31,35,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-20">
        <div className="text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.05em] text-accent-purple">
            API
          </p>
          <h2 className="mt-4 text-4xl font-normal leading-tight tracking-[-0.01em] text-text-primary md:text-5xl">
            Making voice AI simple <br className="hidden sm:inline" /> and
            accessible.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            The most configurable API to build leading voice AI products and
            scale phone operations.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2 rounded-full border border-border-subtle bg-background-secondary p-1">
            <button className="flex items-center gap-2.5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors">
              <div className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#2F74C0]">
                <span className="text-[9px] font-bold text-white">TS</span>
              </div>
              TypeScript
            </button>
            <button className="flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:bg-zinc-800">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[15px] w-[15px]"><path d="M7.49991 1.25012C5.97232 1.25012 5.02988 2.01257 4.39174 2.65072C4.19565 2.84681 3.99955 3.06173 3.84223 3.32297C3.76672 3.44917 3.52382 3.86333 3.57078 4.05389C3.6067 4.19794 3.73719 4.29524 3.82481 4.35415C3.99955 4.47199 4.19565 4.51065 4.39174 4.53009C5.39958 4.62728 6.30737 4.37367 7.00017 3.75037C7.49991 3.25062 7.79241 3.11181 8.35436 3.01186C8.75017 2.93635 9.16526 2.95669 9.50041 3.0909C9.74315 3.1904 9.98317 3.37525 10.1251 3.60945C10.2246 3.77458 10.3546 4.11654 10.1878 4.28339C10.0528 4.42065 9.80521 4.48152 9.61051 4.51065C8.62463 4.66594 7.61868 4.96024 6.95842 5.6259C6.43793 6.14639 6.25018 6.87541 6.25018 7.50031C6.25018 8.12522 6.43793 8.85424 6.95842 9.37473C7.61868 10.0381 8.62463 10.3347 9.61051 10.4899C9.80521 10.519 10.0528 10.5776 10.1878 10.7171C10.3546 10.8839 10.2246 11.2236 10.1251 11.391C9.98317 11.6252 9.74315 11.8077 9.50041 11.9095C9.16526 12.0437 8.75017 12.064 8.35436 11.9862C7.79241 11.8886 7.49991 11.7498 7.00017 11.2478C6.30737 10.6268 5.39958 10.3732 4.39174 10.4681C4.19565 10.4875 3.99955 10.5262 3.82481 10.644C3.73719 10.7029 3.6067 10.8002 3.57078 10.9443C3.52382 11.1371 3.76672 11.5513 3.84223 11.6775C3.99955 11.9387 4.19565 12.1536 4.39174 12.3497C5.02988 12.9879 5.97232 13.7503 7.49991 13.7503C9.0275 13.7503 9.97003 12.9879 10.6082 12.3497C10.8043 12.1536 11.0004 11.9387 11.1577 11.6775C11.2332 11.5513 11.4761 11.1371 11.4291 10.9443C11.3932 10.8002 11.2627 10.7029 11.1751 10.644C11.0004 10.5262 10.8043 10.4875 10.6082 10.4681C9.60037 10.3732 8.69258 10.6268 7.99978 11.2478C7.50004 11.7521 7.20968 11.8886 6.64564 11.9862C6.24982 12.0617 5.83473 12.0414 5.49958 11.9072C5.25684 11.8077 5.01683 11.6252 4.87487 11.391C4.77536 11.2236 4.64536 10.8839 4.81221 10.7171C4.9472 10.5776 5.19479 10.519 5.38949 10.4899C6.37537 10.3347 7.38132 10.0381 8.04158 9.37473C8.56207 8.85424 8.75 8.12522 8.75 7.50031C8.75 6.87541 8.56207 6.14639 8.04158 5.6259C7.38132 4.96251 6.37537 4.66594 5.38949 4.51065C5.19479 4.48152 4.9472 4.42292 4.81221 4.28339C4.64536 4.11654 4.77536 3.77685 4.87487 3.60945C5.01683 3.37525 5.25684 3.19275 5.49958 3.0909C5.83473 2.95669 6.24982 2.93635 6.64564 3.01186C7.20968 3.11181 7.50004 3.25062 7.99978 3.75037C8.69258 4.37367 9.60037 4.62728 10.6082 4.53009C10.8043 4.51065 11.0004 4.47199 11.1751 4.35415C11.2627 4.29524 11.3932 4.19794 11.4291 4.05389C11.4761 3.86333 11.2332 3.44917 11.1577 3.32297C11.0004 3.06173 10.8043 2.84681 10.6082 2.65072C9.97003 2.01257 9.0275 1.25012 7.49991 1.25012Z" fill="currentColor"></path></svg>
              Python
            </button>
            <button className="flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:bg-zinc-800">
             <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[15px] w-[15px]"><path d="M2.5 8.5L5.5 11.5L2.5 14.5M6.5 14.5H12.5M4 1L5.52512 4.31681C5.68817 4.75701 6.14867 5.02102 6.62123 4.89812L12.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              cURL
            </button>
            <button className="flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:bg-zinc-800">
               <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[15px] w-[15px]"><circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.5"></circle><ellipse cx="7.5" cy="7.5" rx="2.5" ry="6" transform="rotate(25 7.5 7.5)" stroke="currentColor" strokeWidth="1.5"></ellipse><ellipse cx="7.5" cy="7.5" rx="2.5" ry="6" transform="rotate(-25 7.5 7.5)" stroke="currentColor" strokeWidth="1.5"></ellipse><circle cx="7.5" cy="7.5" r="1" fill="currentColor"></circle></svg>
              React (web SDK)
            </button>
          </div>
        </div>

        <div className="relative mt-8 min-h-[400px] overflow-hidden rounded-lg border border-border-subtle bg-[#1E1E1E] shadow-[0_12px_48px_rgba(0,0,0,0.5)] md:min-h-[550px]">
          <div className="flex items-center justify-between border-b border-border-subtle p-3">
            <div className="flex flex-wrap items-center gap-2">
              <a href="https://github.com/VapiAI/server-sdk-typescript" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-zinc-700">
                <Github className="h-4 w-4" />
                View on Github
              </a>
              <a href="https://github.com/VapiAI/server-sdk-typescript/archive/refs/heads/main.zip" className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-zinc-700">
                <Download className="h-4 w-4" />
                Download ZIP
              </a>
              <a href="https://docs.vapi.ai/sdks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-zinc-700">
                <FileText className="h-4 w-4" />
                Client SDK
              </a>
              <a href="https://docs.vapi.ai/server-sdks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-zinc-700">
                <Server className="h-4 w-4" />
                Server SDK
              </a>
            </div>
            <button onClick={handleCopy} className="flex-shrink-0 rounded-md border border-zinc-700 bg-zinc-800 p-2 text-gray-300 transition-colors hover:bg-zinc-700">
              {isCopied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <div className="flex p-4 font-mono text-xs leading-7 text-[#D4D4D4] sm:text-sm">
            <div className="select-none pr-4 text-right text-gray-300/40">
              {lineNumbers.map(n => <div key={n}>{n}</div>)}
            </div>
            <pre className="flex-1 overflow-x-auto whitespace-pre">
              <code>
                <div><span className="text-[#6A9955]"># Install the server SDK</span></div>
                <div>npm install @vapi-ai/server-sdk</div>
                <div className="h-7"></div>
                <div><span className="text-[#C586C0]">import</span> <span>{` { `}</span><span className="text-[#4EC9B0]">VapiClient</span><span>{` } `}</span><span className="text-[#C586C0]">from</span> <span className="text-[#9CDCFE]">'@vapi-ai/server-sdk'</span><span>;</span></div>
                <div><span className="text-[#C586C0]">const</span><span> vapi = </span><span className="text-[#C586C0]">new</span><span> </span><span className="text-[#4EC9B0]">VapiClient</span><span>(</span><span className="text-[#9CDCFE]">'YOUR_PRIVATE_API_KEY'</span><span>); </span><span className="text-[#6A9955]">{'// Get your private api key from the dashboard'}</span></div>
                <div className="h-7"></div>
                <div><span className="text-[#C586C0]">async</span><span> </span><span className="text-[#C586C0]">function</span><span> </span><span className="text-[#DCDCAA]">createCall</span><span>() {'{'}</span></div>
                <div><span>&nbsp;&nbsp;</span><span className="text-[#C586C0]">const</span><span> call = </span><span className="text-[#C586C0]">await</span><span> vapi.calls.</span><span className="text-[#DCDCAA]">create</span><span>({'{'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">phoneNumberId</span><span>: </span><span className="text-[#9CDCFE]">'YOUR_PHONE_NUMBER_ID'</span><span>, </span><span className="text-[#6A9955]">{'// Create a free phone number in the dashboard'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">customer</span><span>: {'{'} </span><span className="text-[#9CDCFE]">number</span><span>: </span><span className="text-[#9CDCFE]">'+1234567890'</span><span> {'}'}, </span><span className="text-[#6A9955]">{'// Your customer\'s phone number'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">assistant</span><span>: {'{'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">model</span><span>: {'{'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">provider</span><span>: </span><span className="text-[#9CDCFE]">'openai'</span><span>,</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">model</span><span>: </span><span className="text-[#9CDCFE]">'gpt-4o'</span><span>,</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">messages</span><span>: [</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">role</span><span>: </span><span className="text-[#9CDCFE]">'system'</span><span>,</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-[#9CDCFE]">content</span><span>: </span><span className="text-[#9CDCFE]">'You are a helpful AI assistant. Keep your responses concise and friendly.'</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></div>
                <div><span>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></div>
                <div><span>&nbsp;&nbsp;{`});`}</span></div>
                <div><span>{'}'}</span></div>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditorSection;