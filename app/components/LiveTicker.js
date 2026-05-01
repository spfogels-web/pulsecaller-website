const CALLS = [
  { ticker: "$SCAM", peak: "973x", win: true },
  { ticker: "$SLURS", peak: "30.1x", win: true },
  { ticker: "$TRUMP", peak: "28.4x", win: true },
  { ticker: "$IF", peak: "27.6x", win: true },
  { ticker: "$AGI", peak: "26.5x", win: true },
  { ticker: "$Closed", peak: "23.3x", win: true },
  { ticker: "$Dunald", peak: "22.3x", win: true },
  { ticker: "$NiggaC", peak: "22.2x", win: true },
  { ticker: "$THUD", peak: "22.1x", win: true },
  { ticker: "$STOCKM", peak: "20.6x", win: true },
  { ticker: "$TRUMPI", peak: "18.9x", win: true },
  { ticker: "$CASINO", peak: "15.4x", win: true },
  { ticker: "$BP", peak: "14.8x", win: true },
  { ticker: "$Xing", peak: "12.2x", win: true },
  { ticker: "$homo", peak: "12.2x", win: true },
  { ticker: "$BASED", peak: "11.2x", win: true },
  { ticker: "$parano", peak: "10.6x", win: true },
  { ticker: "$ROBO", peak: "10.2x", win: true },
  { ticker: "$0thism", peak: "10.2x", win: true },
  { ticker: "$BRETT", peak: "8.9x", win: true },
];

export default function LiveTicker() {
  const items = [...CALLS, ...CALLS];

  return (
    <div className="relative border-y border-white/10 bg-black/60 backdrop-blur py-3 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-3 whitespace-nowrap animate-ticker">
        {items.map((c, i) => (
          <div key={i} className="flex items-center gap-2 px-4 font-mono text-sm">
            <span className="text-[10px] tracking-widest text-green">WIN</span>
            <span className="text-white">{c.ticker}</span>
            <span className={c.win ? "text-green" : "text-red"}>{c.peak}</span>
            <span className="text-white/20">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
