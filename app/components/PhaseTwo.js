const FEATURES = [
  {
    icon: "⚡",
    title: "Sub-second execution",
    body: "From the moment Pulse posts a call, the auto-executor fires the order in under one second. Beat every other Telegram trader to the same entry — by minutes.",
    accent: "cyan",
  },
  {
    icon: "🔐",
    title: "Non-custodial — your keys, your coins",
    body: "Connects via secure session keys. Pulse never touches your private keys, your seed, or your funds. You're always one click from disconnecting.",
    accent: "purple",
  },
  {
    icon: "🎯",
    title: "Auto SL / TP at the levels Pulse sets",
    body: "Stop-loss and three take-profit orders auto-placed at the exact mcap targets the caller bot calculates. No manual exits. No 'where do I sell?' anymore.",
    accent: "magenta",
  },
  {
    icon: "🛡",
    title: "Configurable risk per trade",
    body: "Set max position size, slippage tolerance, daily loss cap, blacklist tokens, time-of-day windows. The bot trades only within the rules you give it.",
    accent: "amber",
  },
  {
    icon: "🌐",
    title: "Multi-venue routing",
    body: "Photon · BullX · Trojan · Maestro · GMGN. Auto-routes through whatever bot or DEX aggregator gets the best fill at the moment of the call.",
    accent: "green",
  },
  {
    icon: "📊",
    title: "Live PnL dashboard",
    body: "Real-time portfolio across every Pulse-triggered trade. Filter by win/loss, time period, mcap range, venue, holding time. Export anytime.",
    accent: "cyan",
  },
];

const STATS = [
  { label: "TARGET LATENCY", value: "< 1s", accent: "cyan" },
  { label: "EXECUTION VENUES", value: "5+", accent: "magenta" },
  { label: "RISK CONTROLS", value: "FULL", accent: "amber" },
  { label: "CUSTODY", value: "YOURS", accent: "green" },
];

const accentMap = {
  cyan: { text: "text-cyan", border: "border-cyan/30", bg: "bg-cyan/10", glow: "shadow-[0_0_30px_rgba(34,224,255,0.2)]" },
  magenta: { text: "text-magenta", border: "border-magenta/30", bg: "bg-magenta/10", glow: "shadow-[0_0_30px_rgba(255,43,214,0.2)]" },
  amber: { text: "text-amber", border: "border-amber/30", bg: "bg-amber/10", glow: "shadow-[0_0_30px_rgba(255,176,32,0.2)]" },
  green: { text: "text-green", border: "border-green/30", bg: "bg-green/10", glow: "shadow-[0_0_30px_rgba(34,224,122,0.2)]" },
  purple: { text: "text-purple", border: "border-purple/30", bg: "bg-purple/10", glow: "shadow-[0_0_30px_rgba(139,92,246,0.2)]" },
};

function VisorSVG() {
  return (
    <svg
      viewBox="0 0 900 360"
      className="w-full max-w-3xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pulse auto-executor HUD visor"
    >
      <defs>
        <linearGradient id="ph2-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22e0ff" />
          <stop offset="0.5" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#ff2bd6" />
        </linearGradient>
        <linearGradient id="ph2-lensL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(34,224,255,0.55)" />
          <stop offset="1" stopColor="rgba(10,13,20,0.95)" />
        </linearGradient>
        <linearGradient id="ph2-lensR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(255,43,214,0.55)" />
          <stop offset="1" stopColor="rgba(10,13,20,0.95)" />
        </linearGradient>
        <filter id="ph2-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="ph2-clipL">
          <ellipse cx="290" cy="180" rx="170" ry="95" />
        </clipPath>
        <clipPath id="ph2-clipR">
          <ellipse cx="610" cy="180" rx="170" ry="95" />
        </clipPath>
      </defs>

      {/* side temple stems */}
      <line x1="20" y1="170" x2="120" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <line x1="780" y1="160" x2="880" y2="170" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

      {/* helmet hint behind */}
      <path
        d="M 90 180 Q 90 60 290 60 L 610 60 Q 810 60 810 180 Q 810 300 610 300 L 290 300 Q 90 300 90 180 Z"
        fill="rgba(15,19,28,0.6)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />

      {/* LEFT LENS */}
      <ellipse
        cx="290"
        cy="180"
        rx="170"
        ry="95"
        fill="url(#ph2-lensL)"
        stroke="url(#ph2-rim)"
        strokeWidth="2.5"
        filter="url(#ph2-glow)"
      />
      <g clipPath="url(#ph2-clipL)">
        {/* chart line inside left lens */}
        <polyline
          points="140,220 175,205 205,215 235,180 265,195 295,150 325,170 355,130 385,155 415,120 445,140"
          fill="none"
          stroke="#22e0ff"
          strokeWidth="2.5"
          opacity="0.85"
        />
        {/* ticker labels */}
        <text x="160" y="135" fontFamily="ui-monospace, monospace" fontSize="11" fill="#22e0ff" opacity="0.85">$SCAM</text>
        <text x="160" y="148" fontFamily="ui-monospace, monospace" fontSize="11" fill="#22e0ff" opacity="0.6">+ 973x</text>
        <text x="370" y="245" fontFamily="ui-monospace, monospace" fontSize="10" fill="rgba(34,224,255,0.7)">SIG ▲</text>
        {/* scan line */}
        <line x1="120" y1="180" x2="460" y2="180" stroke="rgba(34,224,255,0.3)" strokeWidth="0.5" strokeDasharray="3 3" />
      </g>

      {/* RIGHT LENS */}
      <ellipse
        cx="610"
        cy="180"
        rx="170"
        ry="95"
        fill="url(#ph2-lensR)"
        stroke="url(#ph2-rim)"
        strokeWidth="2.5"
        filter="url(#ph2-glow)"
      />
      <g clipPath="url(#ph2-clipR)">
        {/* crosshair / target */}
        <circle cx="610" cy="180" r="50" fill="none" stroke="#ff2bd6" strokeWidth="1.5" opacity="0.8" />
        <circle cx="610" cy="180" r="30" fill="none" stroke="#ff2bd6" strokeWidth="1.2" opacity="0.6" />
        <circle cx="610" cy="180" r="6" fill="#ff2bd6" opacity="0.95">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />
        </circle>
        <line x1="540" y1="180" x2="585" y2="180" stroke="#ff2bd6" strokeWidth="1" opacity="0.6" />
        <line x1="635" y1="180" x2="680" y2="180" stroke="#ff2bd6" strokeWidth="1" opacity="0.6" />
        <line x1="610" y1="115" x2="610" y2="155" stroke="#ff2bd6" strokeWidth="1" opacity="0.6" />
        <line x1="610" y1="205" x2="610" y2="245" stroke="#ff2bd6" strokeWidth="1" opacity="0.6" />
        {/* execution labels */}
        <text x="480" y="135" fontFamily="ui-monospace, monospace" fontSize="11" fill="#ff2bd6" opacity="0.85">EXEC</text>
        <text x="480" y="148" fontFamily="ui-monospace, monospace" fontSize="11" fill="#ff2bd6" opacity="0.6">0.84s</text>
        <text x="690" y="245" fontFamily="ui-monospace, monospace" fontSize="10" fill="rgba(255,43,214,0.7)">FILL ✓</text>
      </g>

      {/* BRIDGE between lenses */}
      <rect x="455" y="170" width="10" height="20" rx="2" fill="url(#ph2-rim)" filter="url(#ph2-glow)" />
      <rect x="435" y="172" width="20" height="16" rx="2" fill="rgba(15,19,28,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="445" y="174" width="10" height="2" rx="1" fill="rgba(34,224,255,0.6)" />
      <rect x="445" y="184" width="10" height="2" rx="1" fill="rgba(255,43,214,0.6)" />

      {/* status text above bridge */}
      <text x="450" y="100" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="rgba(255,255,255,0.5)" letterSpacing="3">
        AUTO-EXECUTOR · v2
      </text>

      {/* ear cup hints */}
      <circle cx="120" cy="180" r="22" fill="#0f131c" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="780" cy="180" r="22" fill="#0f131c" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <circle cx="120" cy="180" r="4" fill="#22e07a">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="780" cy="180" r="4" fill="#ff2bd6">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default function PhaseTwo() {
  return (
    <section id="phase-2" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-magenta/12 blur-[160px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan/12 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple/15 blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* ANNOUNCE PILL */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-magenta/40 bg-gradient-to-r from-cyan/10 via-purple/10 to-magenta/10 backdrop-blur-md text-[10px] font-mono tracking-[0.35em] text-white shadow-[0_0_30px_rgba(255,43,214,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta" />
            </span>
            ◢ PHASE 2 · INCOMING · BUILDING NOW
          </div>
        </div>

        {/* VISOR */}
        <div className="flex justify-center mb-12 px-4">
          <VisorSVG />
        </div>

        {/* HEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            We find the calls. <br />
            <span className="text-gradient">The bot takes them.</span>
          </h2>
          <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl mx-auto">
            The Pulse auto-executor wires directly into the caller. The moment Pulse posts, your wallet's already in. Sub-second execution. SL and TP auto-placed. Risk fully under your control.
          </p>
          <p className="mt-4 text-base text-white/55 max-w-2xl mx-auto">
            This isn't a token. It's a disruptor — the next evolution of how retail trades onchain.
          </p>
        </div>

        {/* STATS STRIP */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {STATS.map((s) => {
            const a = accentMap[s.accent];
            return (
              <div
                key={s.label}
                className={`relative rounded-2xl border ${a.border} bg-black/40 backdrop-blur p-5 text-center ${a.glow}`}
              >
                <div className="text-[10px] font-mono tracking-[0.25em] text-white/50 mb-2">{s.label}</div>
                <div className={`text-3xl sm:text-4xl font-bold ${a.text}`}>{s.value}</div>
              </div>
            );
          })}
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {FEATURES.map((f) => {
            const a = accentMap[f.accent];
            return (
              <article
                key={f.title}
                className={`group relative rounded-2xl border ${a.border} bg-panel/40 backdrop-blur p-6 transition-all hover:-translate-y-0.5 ${a.glow}`}
              >
                <div className={`absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-current to-transparent ${a.text} opacity-50`} />
                <div className="flex items-start gap-4">
                  <div className={`flex-none w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center text-xl`}>
                    {f.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-lg font-bold ${a.text} mb-2 leading-tight`}>{f.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BEAR MARKET QUOTE */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-[10px] font-mono tracking-[0.3em] text-white/40 mb-4">◇ THE THESIS</div>
          <blockquote className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white/30">"</span>
            <span className="text-gradient">Bear market? What bear market?</span>
            <span className="text-white/30">"</span>
          </blockquote>
          <p className="mt-6 text-white/55 text-base leading-relaxed">
            When the market's slow, the bot's faster. The auto-executor doesn't sleep, doesn't second-guess, doesn't get rugged by emotion. Capital deployed at the optimal moment. Exits stamped before the dump. While retail panics, the bot prints.
          </p>
        </div>

        {/* CTA / WAITLIST */}
        <div className="relative rounded-3xl overflow-hidden border border-magenta/40 bg-gradient-to-br from-panel via-black to-panel p-8 sm:p-12">
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-magenta/15 blur-[120px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="text-[10px] font-mono tracking-[0.3em] text-magenta mb-3 flex items-center gap-2">
                <span className="w-1 h-3 bg-magenta rounded-full" />
                ⚡ EARLY ACCESS · LIFETIME HOLDERS GET IT FREE
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                Reserve your spot at the <span className="text-gradient">front of the queue</span>.
              </h3>
              <p className="text-white/60 leading-relaxed">
                Auto-executor goes live to <span className="text-magenta font-semibold">Lifetime members first</span>. Monthly subscribers next. Public last. Get on the waitlist now to lock your slot — or grab a Lifetime license to skip the line entirely.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-bold tracking-wider text-black bg-gradient-to-r from-cyan via-purple to-magenta hover:opacity-90 transition-all"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan via-purple to-magenta blur-md opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
                <span className="relative">JOIN THE WAITLIST</span>
                <span className="relative">→</span>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold tracking-wider text-white border border-white/15 hover:border-magenta hover:text-magenta transition-colors"
              >
                Skip the line · Go Lifetime
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
