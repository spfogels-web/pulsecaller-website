const PIPELINE = [
  {
    n: "01",
    title: "Scanner",
    sub: "Helius + Pump.fun stream",
    detail: "Sweeps every new Solana launch every 90 seconds. Auto-feeds candidates into the gauntlet.",
    accent: "green",
    icon: "📡",
  },
  {
    n: "02",
    title: "Rules Engine",
    sub: "Foundation Scorer",
    detail: "5 weighted components → 0-100 score. Hard threshold gate.",
    accent: "cyan",
    icon: "⚙",
  },
  {
    n: "03",
    title: "Wallet Intel",
    sub: "Dune + 6,288-wallet DB",
    detail: "Smart money · winners · snipers · clusters · bundles.",
    accent: "magenta",
    icon: "👥",
  },
  {
    n: "04",
    title: "Deployer Check",
    sub: "History + reputation",
    detail: "Rugger flag · serial deployer · verified or first-launch.",
    accent: "amber",
    icon: "🔍",
  },
  {
    n: "05",
    title: "Curve Stream",
    sub: "Live pump.fun status",
    detail: "Pre-bond eligible · bonded · post-graduation. Killed if stream ended.",
    accent: "purple",
    icon: "📈",
  },
  {
    n: "06",
    title: "Claude Forensic",
    sub: "Qualitative thesis",
    detail: "Independent narrative read · pattern recognition · risk synthesis.",
    accent: "cyan",
    icon: "🧠",
  },
  {
    n: "07",
    title: "GPT-4o Decision",
    sub: "Final verdict",
    detail: "All upstream signals → CALL or SKIP. Disagreement = no call.",
    accent: "magenta",
    icon: "✦",
  },
];

const DIMENSIONS = [
  {
    icon: "🚀",
    title: "Launch Quality",
    weight: 30,
    score: 71,
    gradFrom: "#22e07a",
    gradTo: "#22e0ff",
    metrics: [
      ["Mint Revoked", "✓", "green"],
      ["Freeze Revoked", "✓", "green"],
      ["Unique Buyers", "70%", "green"],
      ["Age", "<5min", "amber"],
    ],
  },
  {
    icon: "👥",
    title: "Wallet Structure",
    weight: 35,
    score: 54,
    gradFrom: "#ff2bd6",
    gradTo: "#8b5cf6",
    metrics: [
      ["Dev Wallet", "2.5%", "green"],
      ["Top10 Holders", "20.6%", "green"],
      ["Sniper Wallets", "9", "amber"],
      ["Bundle Risk", "LOW", "green"],
    ],
  },
  {
    icon: "📈",
    title: "Market Behavior",
    weight: 20,
    score: 61,
    gradFrom: "#22e0ff",
    gradTo: "#8b5cf6",
    metrics: [
      ["Buy Ratio (1h)", "49%", "amber"],
      ["Vol Velocity", "1.00", "white"],
      ["Price 5m", "+171%", "green"],
      ["Volume 24h", "$21.2K", "white"],
    ],
  },
  {
    icon: "💬",
    title: "Social Narrative",
    weight: 15,
    score: 90,
    gradFrom: "#ffe14d",
    gradTo: "#ffb020",
    metrics: [
      ["Website", "✓", "green"],
      ["Twitter / X", "✓", "green"],
      ["Telegram", "—", "white"],
      ["Tags", "ANIMAL · CAT", "white"],
    ],
  },
];

const FOUNDATION = [
  {
    label: "Volume Velocity",
    sub: "Buys/min acceleration",
    score: 32,
    max: 35,
    color: "#22e0ff",
    rows: [
      ["+17.16", "Velocity base", "bv = 3.35/min"],
      ["+4.50", "5m accel vs 1h avg", "ratio = 12.00x"],
      ["+3.60", "Momentum shift", "+31.35% / min"],
      ["+3.09", "Sustained buy pressure", "201 buys/1h"],
    ],
  },
  {
    label: "Buy vs Sell Pressure",
    sub: "Demand vs manipulation",
    score: 10,
    max: 25,
    color: "#ff2bd6",
    rows: [
      ["+6.99", "Buy ratio base", "br = 49.4%"],
      ["+3.00", "Transaction depth", "407 txns / 1h"],
    ],
  },
  {
    label: "Wallet Quality",
    sub: "Winner wallet conviction",
    score: 12,
    max: 20,
    color: "#8b5cf6",
    rows: [
      ["+12.00", "Wallet cleanliness (cold DB fallback)", "clusters = 0 · coord = 0.00"],
    ],
  },
  {
    label: "Holder Distribution",
    sub: "Dev % · Top10 spread",
    score: 13,
    max: 12,
    color: "#22e07a",
    rows: [
      ["+8.28", "Dev wallet %", "dev = 2.53%"],
      ["+4.99", "Top10 holders (healthy)", "top10 = 20.6%"],
    ],
  },
  {
    label: "Liquidity Health",
    sub: "LP ratio · lock status",
    score: 5,
    max: 8,
    color: "#ffe14d",
    rows: [
      ["+4.91", "Liq/MCap ratio", "ratio = 61.8%"],
    ],
  },
];

const RISK_METRICS = [
  ["Bundle Risk", "LOW", "green"],
  ["Sniper Wallets", "9", "amber"],
  ["Dev Wallet %", "2.53%", "green"],
  ["Top 10 Holders", "20.6%", "green"],
  ["Mint Authority", "REVOKED", "green"],
  ["Freeze Authority", "REVOKED", "green"],
  ["LP Locked", "Unknown", "amber"],
  ["Cluster Wallets", "0", "green"],
  ["Coordination", "—", "white"],
  ["Trap Severity", "NONE", "green"],
  ["Stealth Detected", "NO", "green"],
  ["Confidence Penalty", "−0", "green"],
];

const TP_LEVELS = [
  { label: "STOP LOSS", sub: "−25%", value: "$6.2K", color: "red" },
  { label: "TP1", sub: "2x", value: "$16.4K", color: "cyan" },
  { label: "TP2", sub: "5x", value: "$41.1K", color: "magenta" },
  { label: "TP3", sub: "10x", value: "$82.2K", color: "green" },
];

const SOURCES = [
  { name: "Helius", role: "RPC stream" },
  { name: "Dune", role: "wallet PnL" },
  { name: "Birdeye", role: "market data" },
  { name: "Solscan", role: "onchain" },
  { name: "Pump.fun", role: "curve" },
  { name: "GPT-4o", role: "decision" },
  { name: "Claude", role: "forensic" },
];

const accentMap = {
  cyan: { text: "text-cyan", border: "border-cyan/40", bg: "bg-cyan", grad: "from-cyan/20 via-cyan/5", dot: "bg-cyan", glow: "shadow-[0_0_30px_rgba(34,224,255,0.25)]" },
  magenta: { text: "text-magenta", border: "border-magenta/40", bg: "bg-magenta", grad: "from-magenta/20 via-magenta/5", dot: "bg-magenta", glow: "shadow-[0_0_30px_rgba(255,43,214,0.25)]" },
  amber: { text: "text-amber", border: "border-amber/40", bg: "bg-amber", grad: "from-amber/20 via-amber/5", dot: "bg-amber", glow: "shadow-[0_0_30px_rgba(255,176,32,0.25)]" },
  green: { text: "text-green", border: "border-green/40", bg: "bg-green", grad: "from-green/20 via-green/5", dot: "bg-green", glow: "shadow-[0_0_30px_rgba(34,224,122,0.25)]" },
  purple: { text: "text-purple", border: "border-purple/40", bg: "bg-purple", grad: "from-purple/20 via-purple/5", dot: "bg-purple", glow: "shadow-[0_0_30px_rgba(139,92,246,0.25)]" },
  red: { text: "text-red", border: "border-red/40", bg: "bg-red", grad: "from-red/20 via-red/5", dot: "bg-red", glow: "shadow-[0_0_30px_rgba(255,59,107,0.25)]" },
  white: { text: "text-white/70", border: "border-white/20", bg: "bg-white/40", grad: "from-white/10 via-white/5", dot: "bg-white/40", glow: "" },
};

function ScoreRing({ value, gradFrom, gradTo, size = 96, id }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 96 96" width={size} height={size}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={gradFrom} />
            <stop offset="1" stopColor={gradTo} />
          </linearGradient>
        </defs>
        <g transform="rotate(-90 48 48)">
          <circle cx="48" cy="48" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
          <circle
            cx="48"
            cy="48"
            r={r}
            stroke={`url(#${id})`}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            style={{ filter: `drop-shadow(0 0 10px ${gradTo}aa)` }}
          />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-white leading-none">{value}</div>
        <div className="text-[9px] font-mono text-white/40 mt-0.5 tracking-[0.2em]">/100</div>
      </div>
    </div>
  );
}

function PanelHeader({ eyebrowColor, eyebrow, title, right }) {
  const a = accentMap[eyebrowColor];
  return (
    <div className="flex items-start justify-between mb-6 flex-wrap gap-3 pb-5 border-b border-white/5">
      <div>
        <div className={`text-[10px] font-mono tracking-[0.3em] ${a.text} mb-2 flex items-center gap-2`}>
          <span className={`w-1 h-3 ${a.bg} rounded-full`} />
          {eyebrow}
        </div>
        <div className="text-white/55 text-sm max-w-2xl leading-relaxed">{title}</div>
      </div>
      {right && <div className="text-right">{right}</div>}
    </div>
  );
}

export default function DecisionEngine() {
  return (
    <section id="engine" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-purple/10 blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan/10 blur-[140px]" />
        <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple/30 bg-purple/5 text-[10px] font-mono tracking-[0.3em] text-purple mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple" />
            </span>
            ◢ THE DECISION ENGINE
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Seven stages. Two AIs. <br />
            <span className="text-gradient">One verdict.</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Most caller bots post a ticker and pray. Pulse runs every candidate through a quantified scoring stack and a dual-AI forensic — only the calls that survive every gate ever reach your Telegram.
          </p>
          <div className="mt-7 flex items-center justify-center gap-6 text-[11px] font-mono tracking-[0.2em] text-white/40 flex-wrap">
            <span className="text-cyan">7 STAGES</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-magenta">7 DATA SOURCES</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-purple">2-AI CONSENSUS</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-amber">FULLY AUDITABLE</span>
          </div>
        </div>

        {/* PIPELINE */}
        <div className="relative rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-6 overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-purple/60 to-transparent" />
          <PanelHeader
            eyebrowColor="purple"
            eyebrow="EVALUATION PIPELINE"
            title="Every token gets walked through 7 sequential gates. Failure at any stage = no call. Each stage is logged with its reasoning so the brain can audit itself."
            right={
              <div className="text-[10px] font-mono tracking-[0.25em] text-white/40">
                SEQUENTIAL · GATED · AUDITABLE
              </div>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3 relative">
            {PIPELINE.map((p, i) => {
              const a = accentMap[p.accent];
              return (
                <div
                  key={p.n}
                  className={`group relative rounded-2xl border ${a.border} bg-gradient-to-b ${a.grad} to-black/40 p-5 hover:bg-black/60 transition-all hover:-translate-y-0.5 ${a.glow}`}
                >
                  <div className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent ${a.grad} to-transparent`} />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`text-[10px] font-mono tracking-[0.25em] ${a.text}`}>
                        STAGE
                      </div>
                      <div className={`text-2xl font-bold ${a.text} font-mono leading-none mt-0.5`}>
                        {p.n}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg opacity-60">{p.icon}</span>
                      <span className={`relative flex h-1.5 w-1.5`}>
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${a.dot} opacity-75`} />
                        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${a.dot}`} />
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold leading-tight mb-1">{p.title}</h3>
                  <div className={`text-[11px] font-mono ${a.text} mb-3 opacity-80`}>{p.sub}</div>
                  <p className="text-xs text-white/55 leading-relaxed">{p.detail}</p>

                  {i < PIPELINE.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-2 -translate-y-1/2 z-20">
                      <div className="w-4 h-px bg-gradient-to-r from-white/30 to-white/10" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-3 text-[11px] font-mono">
            <div className="flex items-center gap-3 text-white/40">
              <span>INPUT</span>
              <span className="text-cyan">→</span>
              <span className="text-white">~3,200 candidates / 24h</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <span>OUTPUT</span>
              <span className="text-magenta">→</span>
              <span className="text-white">~25 calls / 24h posted</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <span>YIELD</span>
              <span className="text-green">→</span>
              <span className="text-white">~0.8% pass rate · curated by design</span>
            </div>
          </div>
        </div>

        {/* 4 DIMENSIONS */}
        <div className="relative rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-6 overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
          <PanelHeader
            eyebrowColor="cyan"
            eyebrow="STRUCTURE ANALYSIS · 4 WEIGHTED DIMENSIONS"
            title="The four lenses Pulse uses to look at every token. Weights reflect what actually predicts winners — wallet structure carries the heaviest vote."
            right={
              <div className="text-[10px] font-mono tracking-[0.25em] text-white/40">
                LIVE EXAMPLE · ACTUAL READOUT
              </div>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIMENSIONS.map((d, i) => (
              <div
                key={d.title}
                className="relative rounded-2xl border border-white/10 bg-black/40 p-5 hover:border-white/20 transition-colors"
              >
                <div className="absolute top-3 right-3 text-[10px] font-mono tracking-[0.2em] text-white/40 px-2 py-0.5 rounded-full border border-white/10 bg-black/40">
                  {d.weight}%
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <ScoreRing value={d.score} gradFrom={d.gradFrom} gradTo={d.gradTo} id={`ring-${i}`} />
                  <div className="min-w-0 pt-2">
                    <div className="text-2xl mb-1">{d.icon}</div>
                    <div className="text-white font-bold leading-tight text-sm">{d.title}</div>
                  </div>
                </div>
                <div className="space-y-2 pt-3 border-t border-white/5">
                  {d.metrics.map(([k, v, c]) => {
                    const a = accentMap[c];
                    return (
                      <div key={k} className="flex justify-between items-center text-[12px] font-mono">
                        <span className="flex items-center gap-2 text-white/55">
                          <span className={`w-1 h-1 rounded-full ${a.dot}`} />
                          {k}
                        </span>
                        <span className={a.text}>{v}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOUNDATION SCORER */}
        <div className="relative rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-6 overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-green/60 to-transparent" />
          <PanelHeader
            eyebrowColor="green"
            eyebrow="FOUNDATION SCORER · HOW THIS SCORE WAS BUILT"
            title="Five components. Each broken into traceable sub-metrics. No black box — every point is defended by math you can read."
            right={
              <div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-white/40 mb-1">FOUNDATION</div>
                <div className="flex items-baseline gap-1.5 justify-end">
                  <span className="text-5xl font-bold text-gradient leading-none">72.1</span>
                  <span className="text-white/40 text-sm">/100</span>
                </div>
              </div>
            }
          />

          <div className="space-y-6">
            {FOUNDATION.map((f) => {
              const pct = Math.min(100, (f.score / f.max) * 100);
              return (
                <div key={f.label}>
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-8 rounded-full"
                        style={{ background: f.color, boxShadow: `0 0 10px ${f.color}88` }}
                      />
                      <div>
                        <div className="text-white font-semibold">{f.label}</div>
                        <div className="text-[11px] text-white/40 font-mono tracking-wider">{f.sub}</div>
                      </div>
                    </div>
                    <div className="font-mono text-base flex items-baseline gap-1">
                      <span className="text-white font-bold" style={{ color: f.color, textShadow: `0 0 8px ${f.color}66` }}>
                        {f.score}
                      </span>
                      <span className="text-white/30">/ {f.max}</span>
                    </div>
                  </div>
                  <div className="relative h-2.5 rounded-full bg-white/5 overflow-hidden mb-4 border border-white/5">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-all"
                      style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${f.color}33, ${f.color})`,
                        boxShadow: `0 0 16px ${f.color}99, inset 0 0 4px ${f.color}cc`,
                      }}
                    />
                  </div>
                  <div className="space-y-1 pl-4 border-l-2 border-white/5">
                    {f.rows.map(([delta, name, calc]) => (
                      <div key={name} className="flex items-baseline gap-3 text-[12px] font-mono">
                        <span className="text-green w-12 flex-none font-semibold">{delta}</span>
                        <span className="text-white/70 flex-1 truncate">{name}</span>
                        <span className="text-cyan/60 truncate hidden sm:block">{calc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RISK + AI ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* RISK LAYER */}
          <div className="relative rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-8 overflow-hidden">
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-red/60 to-transparent" />
            <div className="mb-6 pb-5 border-b border-white/5">
              <div className="text-[10px] font-mono tracking-[0.3em] text-red mb-2 flex items-center gap-2">
                <span className="w-1 h-3 bg-red rounded-full" />
                ⚠ TRAP DETECTOR · RISK LAYER
              </div>
              <div className="text-white/55 text-sm leading-relaxed">
                Hard rules that override score. If any of these flip red, the call dies regardless of foundation.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              {RISK_METRICS.map(([k, v, c]) => {
                const a = accentMap[c];
                return (
                  <div
                    key={k}
                    className="flex justify-between items-center text-[12px] font-mono py-2 border-b border-white/5 last:border-b-0"
                  >
                    <span className="flex items-center gap-2.5 text-white/55">
                      <span
                        className={`relative flex h-1.5 w-1.5`}
                        title={c}
                      >
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${a.dot} opacity-50`} />
                        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${a.dot}`} />
                      </span>
                      {k}
                    </span>
                    <span className={`${a.text} font-semibold tracking-wide`}>{v}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI CONSENSUS */}
          <div className="relative rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-8 overflow-hidden">
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-purple/60 to-transparent" />
            <div className="mb-6 pb-5 border-b border-white/5">
              <div className="text-[10px] font-mono tracking-[0.3em] text-purple mb-2 flex items-center gap-2">
                <span className="w-1 h-3 bg-purple rounded-full" />
                🧠 DUAL-AI CONSENSUS
              </div>
              <div className="text-white/55 text-sm leading-relaxed">
                Two independent reasoning models check each other's math. Disagreement = no call. The final filter before your Telegram.
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 via-cyan/5 to-transparent p-5 shadow-[0_0_30px_rgba(34,224,255,0.12)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan to-cyan/40 flex items-center justify-center font-black text-black text-sm shadow-[0_0_20px_rgba(34,224,255,0.5)]">
                      C
                    </div>
                    <div>
                      <div className="text-cyan font-bold leading-tight">Claude Forensic</div>
                      <div className="text-[10px] font-mono tracking-widest text-cyan/60 mt-0.5">QUALITATIVE THESIS</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan/70 px-2 py-0.5 rounded-full border border-cyan/30">
                    PASS 1
                  </span>
                </div>
                <p className="text-[13px] text-white/65 leading-relaxed">
                  Independent thesis writer. Reads the wallet structure, narrative quality, launch shape, and risk surface — returns its own verdict (bull / bear / neutral) with a paragraph of reasoning.
                </p>
              </div>

              <div className="flex items-center gap-3 px-3">
                <span className="h-px flex-1 bg-gradient-to-r from-cyan/30 via-white/20 to-magenta/30" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-white/40">AGREEMENT GATE</span>
                <span className="h-px flex-1 bg-gradient-to-r from-magenta/30 via-white/20 to-cyan/30" />
              </div>

              <div className="rounded-2xl border border-magenta/30 bg-gradient-to-br from-magenta/10 via-magenta/5 to-transparent p-5 shadow-[0_0_30px_rgba(255,43,214,0.12)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-magenta to-magenta/40 flex items-center justify-center font-black text-black text-sm shadow-[0_0_20px_rgba(255,43,214,0.5)]">
                      G
                    </div>
                    <div>
                      <div className="text-magenta font-bold leading-tight">GPT-4o Decision</div>
                      <div className="text-[10px] font-mono tracking-widest text-magenta/60 mt-0.5">FINAL VERDICT</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-magenta/70 px-2 py-0.5 rounded-full border border-magenta/30">
                    PASS 2
                  </span>
                </div>
                <p className="text-[13px] text-white/65 leading-relaxed">
                  Score-aware decision layer. Takes the foundation score, structure dimensions, risk flags, and Claude's forensic — outputs CALL or SKIP. Skipped if score &lt; 45 or AIs disagree.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SL/TP STRIP */}
        <div className="relative rounded-3xl border border-white/10 bg-panel/40 backdrop-blur p-6 sm:p-10 mb-6 overflow-hidden">
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
          <PanelHeader
            eyebrowColor="amber"
            eyebrow="🎯 AUTO-CALCULATED EXITS · STAMPED ON EVERY CALL"
            title="When Pulse posts a call, your SL and three TP levels come pre-calculated. No 'where do I sell?' — the bot already told you."
            right={
              <div className="text-[10px] font-mono tracking-[0.25em] text-white/40">
                EXAMPLE · ENTRY $8.2K MCAP
              </div>
            }
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {TP_LEVELS.map((t) => {
              const a = accentMap[t.color];
              return (
                <div
                  key={t.label}
                  className={`relative rounded-2xl border ${a.border} bg-gradient-to-br ${a.grad} to-black/60 p-6 ${a.glow}`}
                >
                  <div className={`text-[10px] font-mono tracking-[0.3em] ${a.text} mb-1`}>
                    {t.label}
                  </div>
                  <div className={`text-xs font-mono ${a.text} opacity-70 mb-3`}>{t.sub}</div>
                  <div className="text-3xl font-bold text-white">{t.value}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DATA SOURCES */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-panel via-black to-panel p-6 sm:p-8 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="relative flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="text-[10px] font-mono tracking-[0.3em] text-white/50 mb-2 flex items-center gap-2">
                <span className="w-1 h-3 bg-white/40 rounded-full" />
                ⚡ LIVE DATA SOURCES
              </div>
              <div className="text-white/40 text-sm">Real-time pipes feeding the engine. Every signal is sourced.</div>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {SOURCES.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
                  </span>
                  <span className="text-xs font-mono text-white tracking-wider">{s.name}</span>
                  <span className="text-[10px] font-mono text-white/40">·</span>
                  <span className="text-[10px] font-mono text-white/50">{s.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
