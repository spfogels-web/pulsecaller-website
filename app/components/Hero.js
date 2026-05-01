import Image from "next/image";
import CABar from "./CABar";

const STATS = [
  { label: "WIN RATE", value: "57%", accent: "cyan" },
  { label: "BEST CALL", value: "973x", accent: "magenta" },
  { label: "WALLETS TRACKED", value: "6,288", accent: "purple" },
  { label: "AVG PEAK", value: "6.52x", accent: "green" },
];

const accentMap = {
  cyan: "text-cyan glow-text-cyan",
  magenta: "text-magenta",
  purple: "text-purple",
  green: "text-green",
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-magenta/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-20 sm:pb-28">
        <CABar />
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-3xl aspect-[2172/724]">
            <Image
              src="/pulse-logo.png"
              alt="Pulse Caller"
              fill
              priority
              className="object-contain animate-heartbeat"
              sizes="(max-width: 768px) 90vw, 768px"
            />
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-wider text-white/60 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            LIVE · SCANNING SOLANA · 90s POLL
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient">We find the signal.</span>
            <br />
            <span className="text-white">You take the win.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            An AI-powered Solana caller bot that hunts runners before they pump.
            <span className="text-white"> Live wallet intel</span>,
            <span className="text-white"> smart-money tracking</span>,
            <span className="text-white"> exit-liquidity alerts</span> —
            wired straight into your Telegram.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-black bg-gradient-to-r from-cyan via-purple to-magenta hover:opacity-90 transition-all"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan via-purple to-magenta blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
              <span className="relative">GET ACCESS NOW</span>
              <span className="relative">→</span>
            </a>
            <a
              href="#track-record"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/15 hover:border-cyan hover:text-cyan transition-colors"
            >
              See The Calls
            </a>
          </div>

          <p className="mt-6 text-xs font-mono tracking-wider text-white/40">
            WINNING CALLS · REAL · TIME · REAL RESULTS
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="relative rounded-2xl border border-white/10 bg-panel/80 backdrop-blur p-5 hover:border-white/20 transition-colors"
            >
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="text-[10px] font-mono tracking-[0.2em] text-white/50">
                {s.label}
              </div>
              <div className={`mt-2 text-3xl sm:text-4xl font-bold ${accentMap[s.accent]}`}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
