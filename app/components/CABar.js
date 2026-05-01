"use client";

import { useState } from "react";

// Drop the real Solana contract address here when launching.
// Empty string = placeholder mode (shown as "launching soon").
const CA = "";

function truncate(addr) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}...${addr.slice(-6)}`;
}

export default function CABar() {
  const [copied, setCopied] = useState(false);
  const isLive = Boolean(CA && CA.length >= 32);

  const handleCopy = async () => {
    if (!isLive) return;
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const links = isLive
    ? [
        { label: "DEX", href: `https://dexscreener.com/solana/${CA}` },
        { label: "PUMP", href: `https://pump.fun/${CA}` },
        { label: "SOLSCAN", href: `https://solscan.io/token/${CA}` },
      ]
    : [
        { label: "DEX", href: "#" },
        { label: "PUMP", href: "#" },
        { label: "SOLSCAN", href: "#" },
      ];

  return (
    <div className="relative max-w-3xl mx-auto mb-10 px-4">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan/30 via-purple/20 to-magenta/30 blur-xl opacity-50 -z-10" />
      <div className="relative rounded-full border border-white/10 bg-black/60 backdrop-blur-md p-1.5 flex items-center gap-2 shadow-[0_0_30px_rgba(34,224,255,0.15)]">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-cyan/20 via-purple/20 to-magenta/20 border border-white/10">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isLive ? "bg-green animate-ping" : "bg-amber animate-ping"
              }`}
            />
            <span
              className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                isLive ? "bg-green" : "bg-amber"
              }`}
            />
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-white">CA</span>
        </div>

        <div className="flex-1 font-mono text-xs sm:text-sm px-2 truncate min-w-0">
          {isLive ? (
            <>
              <span className="hidden sm:inline text-white">{CA}</span>
              <span className="sm:hidden text-white">{truncate(CA)}</span>
            </>
          ) : (
            <span className="text-white/40 tracking-wider">
              <span className="text-amber">●</span> LAUNCHING SOON · ADDRESS DROPS ON GO-LIVE
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          disabled={!isLive}
          className={`flex-none flex items-center gap-1.5 text-[10px] font-mono tracking-widest px-3 py-2 rounded-full transition-colors ${
            isLive
              ? "text-cyan hover:bg-cyan/10 cursor-pointer"
              : "text-white/30 cursor-not-allowed"
          }`}
          aria-label="Copy contract address"
        >
          {copied ? "COPIED ✓" : "COPY"}
        </button>

        <div className="hidden sm:flex flex-none items-center gap-1 pr-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={isLive ? "_blank" : undefined}
              rel={isLive ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (!isLive) e.preventDefault();
              }}
              className={`text-[10px] font-mono tracking-widest px-2.5 py-2 rounded-full transition-colors ${
                isLive
                  ? "text-white/70 hover:text-magenta hover:bg-magenta/10 cursor-pointer"
                  : "text-white/25 cursor-not-allowed"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
