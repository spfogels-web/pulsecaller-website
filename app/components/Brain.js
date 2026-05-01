const STAGES = [
  { name: "NEWBORN", short: "0–20%" },
  { name: "LEARNING", short: "20–40%" },
  { name: "SKILLED", short: "40–60%" },
  { name: "EXPERT", short: "60–85%" },
  { name: "MASTER", short: "85–100%" },
];

const CURRENT_PROGRESS = 85;
const CURRENT_STAGE_INDEX = 3;

const STATS = [
  { label: "WINS LEARNED", value: "165", accent: "green", icon: "✓" },
  { label: "LOSSES STUDIED", value: "130", accent: "red", icon: "✕" },
  { label: "PATTERNS DISCOVERED", value: "23", accent: "cyan", icon: "◇" },
  { label: "AUTO-ADJUSTMENTS", value: "78", accent: "magenta", icon: "⚙" },
];

const PATTERNS = [
  {
    type: "WIN PATTERN",
    title: "Volume velocity + buy ratio combo",
    body: "Winning calls share a tight cluster: buy/sell ratio above 0.6, volume velocity above 1.8, and peak multiples already trending above 1.5x by the 10-minute mark.",
    accent: "green",
  },
  {
    type: "LOSS PATTERN",
    title: "Sniper concentration trap",
    body: "Losing calls are dominated by sniper count >10 alongside dev wallet >5% and top-10 concentration >35%. The brain now penalizes this stack hard before scoring.",
    accent: "red",
  },
  {
    type: "TIMING SIGNAL",
    title: "First-15-min advantage",
    body: "First-15-minute entries outperform mid-curve entries by 3.2x on average peak multiple. The scorer was rewritten to weight age <15min with a +6 bonus.",
    accent: "cyan",
  },
  {
    type: "SOCIAL SIGNAL",
    title: "Telegram thinness flag",
    body: "Tokens with TG groups under 100 holders show a 47% lower win rate than groups with 500+. This now feeds the Social Narrative dimension directly.",
    accent: "magenta",
  },
  {
    type: "SEQUENCE",
    title: "Whale-funded → smart-money cluster",
    body: "When a WHALE_FUNDED wallet shows up alongside ≥2 SMART_MONEY tags within 48h of launch, win rate jumps from 57% baseline to 71%.",
    accent: "purple",
  },
  {
    type: "REGIME",
    title: "Post-bond fade",
    body: "Bonded coins (peak ≥ $44K) entered post-graduation see 38% lower realized peak vs. pre-bond entries. The brain auto-throttles bonded calls in low-momentum regimes.",
    accent: "amber",
  },
];

const ADJUSTMENTS = [
  { area: "scoring", key: "minScoreToPost", from: "45", to: "48", note: "Improved win rate +4% over 50-call window" },
  { area: "tuning", key: "sweetSpotMax", from: "55,000", to: "45,000", note: "Multiple moonshots clustered in the $20K–$40K band — tightened the gate" },
  { area: "overrides", key: "top10ConcentrationBlock", from: "block_above_28pct", to: "block_above_25pct", note: "Several losses had top10 ≥ 32% — pulled the block-line in" },
  { area: "tuning", key: "latePump1hPenalty", from: "15", to: "20", note: "Late-entry candles followed by drawdown — penalty hardened" },
  { area: "scoring", key: "earlyLaunchBonus", from: "8", to: "12", note: "Fresh launches under 5min showed 71% win rate — bonus increased" },
  { area: "weights", key: "smartMoneyConvergence", from: "1.4x", to: "1.7x", note: "Convergence (2+ smart wallets) is the single strongest predictor — boosted" },
];

const accentMap = {
  cyan: { text: "text-cyan", border: "border-cyan/40", bg: "bg-cyan", glow: "shadow-[0_0_30px_rgba(34,224,255,0.2)]", grad: "from-cyan/20 via-cyan/5" },
  magenta: { text: "text-magenta", border: "border-magenta/40", bg: "bg-magenta", glow: "shadow-[0_0_30px_rgba(255,43,214,0.2)]", grad: "from-magenta/20 via-magenta/5" },
  amber: { text: "text-amber", border: "border-amber/40", bg: "bg-amber", glow: "shadow-[0_0_30px_rgba(255,176,32,0.2)]", grad: "from-amber/20 via-amber/5" },
  green: { text: "text-green", border: "border-green/40", bg: "bg-green", glow: "shadow-[0_0_30px_rgba(34,224,122,0.2)]", grad: "from-green/20 via-green/5" },
  red: { text: "text-red", border: "border-red/40", bg: "bg-red", glow: "shadow-[0_0_30px_rgba(255,59,107,0.2)]", grad: "from-red/20 via-red/5" },
  purple: { text: "text-purple", border: "border-purple/40", bg: "bg-purple", glow: "shadow-[0_0_30px_rgba(139,92,246,0.2)]", grad: "from-purple/20 via-purple/5" },
};

export default function Brain() {
  return (
    <section id="brain" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan/10 blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-magenta/10 blur-[140px]" />
        <div className="absolute inset-0 grid-bg opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/40 bg-gradient-to-r from-cyan/10 via-purple/10 to-magenta/10 backdrop-blur text-[10px] font-mono tracking-[0.35em] text-white mb-6 shadow-[0_0_30px_rgba(34,224,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            ◢ THE BRAIN · ADAPTIVE INTELLIGENCE
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Every call makes it <span className="text-gradient">smarter</span>.
          </h2>
          <p className="mt-7 text-lg text-white/65 leading-relaxed max-w-2xl mx-auto">
            Pulse isn't a static scorer. Every 6 hours the brain reviews its wins and losses, finds patterns in the data, and rewrites its own thresholds. The more calls it makes, the better it gets at finding the next one.
          </p>
        </div>

        {/* GROWTH BAR */}
        <div className="rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-6 relative overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
          <div className="flex items-start justify-between mb-7 flex-wrap gap-3 pb-5 border-b border-white/5">
            <div>
              <div className="text-[10px] font-mono tracking-[0.3em] text-cyan mb-2 flex items-center gap-2">
                <span className="w-1 h-3 bg-cyan rounded-full" />
                ◇ INTELLIGENCE GROWTH · LEARNING · ADAPTING · EVOLVING
              </div>
              <div className="text-white/55 text-sm">
                Five-stage growth model. Each stage unlocks deeper pattern recognition, sequence memory, and self-tuning autonomy.
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono tracking-[0.3em] text-white/40 mb-1">CURRENT</div>
              <div className="flex items-baseline justify-end gap-2">
                <span className="text-3xl font-bold text-gradient">EXPERT</span>
                <span className="text-white/50 font-mono text-sm">{CURRENT_PROGRESS}%</span>
              </div>
            </div>
          </div>

          {/* Stage chips */}
          <div className="grid grid-cols-5 gap-2 mb-3">
            {STAGES.map((s, i) => {
              const isActive = i === CURRENT_STAGE_INDEX;
              const isPast = i < CURRENT_STAGE_INDEX;
              return (
                <div
                  key={s.name}
                  className={`text-center px-2 py-2 rounded-lg border transition-all ${
                    isActive
                      ? "border-cyan/60 bg-cyan/10 text-cyan shadow-[0_0_20px_rgba(34,224,255,0.3)]"
                      : isPast
                      ? "border-white/15 bg-white/5 text-white/60"
                      : "border-white/10 bg-black/20 text-white/30"
                  }`}
                >
                  <div className="text-[10px] sm:text-xs font-mono tracking-[0.2em] font-semibold leading-tight">
                    {s.name}
                  </div>
                  <div className="text-[9px] font-mono opacity-60 mt-0.5">{s.short}</div>
                </div>
              );
            })}
          </div>

          {/* Progress track */}
          <div className="relative h-3 rounded-full bg-white/5 overflow-hidden border border-white/10 mt-5">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${CURRENT_PROGRESS}%`,
                background: "linear-gradient(90deg, #22e07a 0%, #22e0ff 35%, #8b5cf6 70%, #ff2bd6 100%)",
                boxShadow: "0 0 16px rgba(34,224,255,0.55), inset 0 0 4px rgba(255,255,255,0.4)",
              }}
            />
            {/* Stage markers */}
            {[20, 40, 60, 85].map((p) => (
              <div
                key={p}
                className="absolute top-1/2 -translate-y-1/2 w-px h-3 bg-white/30"
                style={{ left: `${p}%` }}
              />
            ))}
            {/* Position pulse */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              style={{ left: `${CURRENT_PROGRESS}%` }}
            >
              <div className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-60" />
            </div>
          </div>

          <div className="mt-5 text-[11px] font-mono tracking-widest text-white/40 flex items-center justify-between flex-wrap gap-2">
            <span>NEXT: MASTER · UNLOCKS MULTI-AGENT VOTING + REGIME ROTATION</span>
            <span>SELF-TUNING CYCLE · EVERY 6h</span>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {STATS.map((s) => {
            const a = accentMap[s.accent];
            return (
              <div
                key={s.label}
                className={`relative rounded-2xl border ${a.border} bg-panel/40 backdrop-blur p-5 ${a.glow}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`flex-none w-10 h-10 rounded-xl bg-black/40 border ${a.border} flex items-center justify-center text-lg ${a.text}`}
                  >
                    {s.icon}
                  </div>
                  <div className="text-[10px] font-mono tracking-[0.25em] text-white/50">
                    {s.label}
                  </div>
                </div>
                <div className={`text-4xl sm:text-5xl font-bold ${a.text}`}>{s.value}</div>
              </div>
            );
          })}
        </div>

        {/* DISCOVERED PATTERNS */}
        <div className="rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-6 relative overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-magenta/60 to-transparent" />
          <div className="mb-7 pb-5 border-b border-white/5">
            <div className="text-[10px] font-mono tracking-[0.3em] text-magenta mb-2 flex items-center gap-2">
              <span className="w-1 h-3 bg-magenta rounded-full" />
              ◢ DISCOVERED PATTERNS · WHAT THE BRAIN HAS LEARNED
            </div>
            <div className="text-white/55 text-sm">
              Every pattern below was extracted by the brain itself — not coded by hand. As more calls land, more patterns emerge. Sequences, regimes, wallet behavior, social signals.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PATTERNS.map((p) => {
              const a = accentMap[p.accent];
              return (
                <article
                  key={p.title}
                  className={`group relative rounded-2xl border ${a.border} bg-gradient-to-b ${a.grad} to-black/40 p-5 transition-all hover:-translate-y-0.5`}
                >
                  <div className={`text-[10px] font-mono tracking-[0.25em] ${a.text} mb-2`}>
                    {p.type}
                  </div>
                  <h3 className="text-white font-bold leading-tight mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* SELF-TUNING LOG */}
        <div className="rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-10 relative overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
          <div className="flex items-start justify-between flex-wrap gap-3 mb-6 pb-5 border-b border-white/5">
            <div>
              <div className="text-[10px] font-mono tracking-[0.3em] text-amber mb-2 flex items-center gap-2">
                <span className="w-1 h-3 bg-amber rounded-full" />
                ⚙ SELF-TUNING AUDIT LOG · LAST 24h
              </div>
              <div className="text-white/55 text-sm">
                Every parameter the brain has rewritten in itself, with the data-driven reason. Fully auditable. No black box.
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
              </span>
              AUTO-APPLIED · LIVE
            </div>
          </div>

          <div className="space-y-2 font-mono">
            {ADJUSTMENTS.map((a, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-2 sm:gap-4 items-baseline px-3 sm:px-4 py-3 rounded-lg bg-black/30 border border-white/5 hover:border-white/10 transition-colors"
              >
                <span className="col-span-12 sm:col-span-1 text-[10px] tracking-widest text-amber/80 font-semibold">
                  AUTO
                </span>
                <span className="col-span-3 sm:col-span-2 text-[11px] tracking-wider text-cyan/80">
                  [{a.area}]
                </span>
                <span className="col-span-9 sm:col-span-3 text-[12px] text-white truncate">
                  {a.key}
                </span>
                <span className="col-span-12 sm:col-span-3 text-[11px] flex items-center gap-2">
                  <span className="text-white/50">{a.from}</span>
                  <span className="text-white/30">→</span>
                  <span className="text-green">{a.to}</span>
                </span>
                <span className="col-span-12 sm:col-span-3 text-[11px] text-white/45 truncate">
                  {a.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CLOSING THESIS */}
        <div className="relative rounded-3xl border border-magenta/40 bg-gradient-to-br from-panel via-black to-panel p-8 sm:p-12 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-magenta/10 blur-[140px]" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="text-[10px] font-mono tracking-[0.3em] text-magenta mb-4 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-magenta/40" />
              ◇ THE COMPOUND THESIS
              <span className="h-px w-8 bg-magenta/40" />
            </div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              <span className="text-white">Today's brain prints. </span>
              <span className="text-gradient">Next month's brain dunks.</span>
            </blockquote>
            <p className="mt-6 text-white/60 leading-relaxed">
              57% off 295 calls — and it's just warmed up. Every win is XP. Every loss is another filter locked in. The bot already printing in May is a different animal by November. Send early. Send often.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-magenta/40 bg-magenta/5 text-[11px] font-mono tracking-[0.3em] text-magenta">
              💎 LIFETIME · LOCKED IN FOREVER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
