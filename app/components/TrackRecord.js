import WinsBubbles from "./WinsBubbles";

const RECENT = [
  { result: "WIN", ticker: "$HEALTH", mcap: "$47.5K", peak: "5.19x" },
  { result: "WIN", ticker: "$DISBELIEF", mcap: "$29.5K", peak: "1.93x" },
  { result: "WIN", ticker: "$One", mcap: "$44.7K", peak: "1.49x" },
  { result: "WIN", ticker: "$SCAM", mcap: "$18.7K", peak: "1.37x" },
  { result: "WIN", ticker: "$SCAM", mcap: "$28.8K", peak: "2.25x" },
  { result: "LOSS", ticker: "$TRUTH", mcap: "$21.7K", peak: "0.96x" },
  { result: "WIN", ticker: "$PVE", mcap: "$15.2K", peak: "2.38x" },
];

const SCOREBOARD = [
  { label: "TOTAL CALLS", value: "278" },
  { label: "WINS", value: "159", accent: "text-green" },
  { label: "LOSSES", value: "119", accent: "text-red" },
  { label: "WIN RATE", value: "57%", accent: "text-cyan" },
  { label: "AVG PEAK", value: "6.52x", accent: "text-magenta" },
  { label: "BEST PEAK", value: "973x", accent: "text-yellow" },
];

export default function TrackRecord() {
  return (
    <section id="track-record" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-[0.3em] text-cyan mb-4">
            ◢ THE TRACK RECORD
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Receipts. <span className="text-gradient">Not promises.</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Every call posted with entry mcap and peak X. No hidden trades, no pump-and-dump theater.
            Numbers below pulled live from the bot — losses included.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {SCOREBOARD.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-panel/60 p-4 hover:bg-panel transition-colors"
            >
              <div className="text-[10px] font-mono tracking-widest text-white/50">
                {s.label}
              </div>
              <div className={`mt-2 text-2xl sm:text-3xl font-bold ${s.accent || "text-white"}`}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* TOP 15 WINS — animated bubbles */}
        <div className="rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-yellow/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-magenta/10 blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between mb-6 flex-wrap gap-3 relative">
            <div>
              <div className="text-xs font-mono tracking-widest text-yellow mb-1 flex items-center gap-2">
                <span className="w-1 h-3 bg-yellow rounded-full" />
                ◇ TOP 15 WINS — LARGEST X PEAKS
              </div>
              <div className="text-white/50 text-sm">
                Each bubble = one called token. Bigger = bigger pump. <span className="text-cyan">Click any bubble → open on DexScreener ↗</span>
              </div>
            </div>
            <div className="hidden sm:block text-right text-xs font-mono text-white/50">
              <div>BEST · <span className="text-yellow font-bold">$SCAM 973x</span></div>
              <div className="mt-0.5 flex items-center justify-end gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
                </span>
                15 WINS · LIVE
              </div>
            </div>
          </div>

          <WinsBubbles />

          <div className="mt-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-white/35 flex-wrap gap-2">
            <span>↗ HOVER TO SLOW · CLICK TO OPEN ON DEXSCREENER</span>
            <span>PHYSICS LIVE · ELASTIC COLLISIONS</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs font-mono tracking-widest text-green mb-1">
                ◢ RECENT CALLS — LIVE FEED
              </div>
              <div className="text-white/50 text-sm">Latest posts from the bot. Real entry mcap, real peak X.</div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
              </span>
              LIVE
            </div>
          </div>
          <div className="space-y-1">
            {RECENT.map((r, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 px-3 sm:px-4 py-2.5 rounded-lg hover:bg-white/[0.03] font-mono text-sm border border-transparent hover:border-white/5 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                  <span
                    className={`text-[10px] tracking-widest w-12 ${r.result === "WIN" ? "text-green" : "text-red"}`}
                  >
                    {r.result}
                  </span>
                  <span className="text-white truncate">{r.ticker}</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-8 text-right">
                  <span className="text-white/50 text-xs sm:text-sm">{r.mcap}</span>
                  <span
                    className={`w-14 sm:w-16 ${r.result === "WIN" ? "text-green" : "text-red"}`}
                  >
                    {r.peak}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-white/40">
              ELIGIBLE = called ≤ $35K MCAP · BONDED = peak ≥ $44K (graduation)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
