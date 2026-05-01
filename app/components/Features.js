const FEATURES = [
  {
    tag: "AI CALLER",
    title: "Real-time call engine",
    body: "90-second Helius polling sweeps every new Solana launch. Internal scorer ranks each candidate against a multi-signal model — momentum, holder concentration, smart-money convergence, late-pump penalty — and only posts calls that clear the threshold.",
    accent: "cyan",
    stat: "554 evaluated · last 24h",
  },
  {
    tag: "WALLET INTEL",
    title: "6,288 wallets, ranked & tagged",
    body: "Sweeps Dune for profitable wallets, cross-references Solscan for live PnL, and auto-categorizes them: Whales, Smart Money, Momentum, Snipers, Clusters. Top 200 get their buys watched every 90 seconds.",
    accent: "magenta",
    stat: "335 whales · 1,018 smart $ · 1,196 momentum",
  },
  {
    tag: "BRAIN ANALYZER",
    title: "Drop a CA. Get the X-ray.",
    body: "Paste any contract address — the brain dissects every holder. Whales, smart money, snipers, clusters, exits, cross-token PnL. Built for $3M+ historic gems but works on any mcap. See exactly who's holding before you ape.",
    accent: "purple",
    stat: "Solscan-powered · cross-token PnL",
  },
  {
    tag: "WHALE FUNDING TRACKER",
    title: "Catch the burner before the buy",
    body: "Every 15 minutes, scans the top ~50 winning wallets for outgoing SOL transfers. Recipients get tagged WHALE_FUNDED — these are fresh burner wallets a whale is about to trade with. When one shows up holding a new candidate within 48h, the scorer awards bonus points.",
    accent: "green",
    stat: "Auto-detect · auto-score",
  },
  {
    tag: "MIDCAP HARVESTER",
    title: "Smart-money convergence, twice a day",
    body: "Runs a Dune query 2x/day for Solana tokens doing $500K+ 24h volume. Top 20 holders of each go straight into the wallet DB as SMART_MONEY. Wallets that show up across 2+ runs auto-promote to WINNER.",
    accent: "amber",
    stat: "Fills the gap between WIN harvester and $30M+ legends",
  },
  {
    tag: "EXIT LIQUIDITY ALERTS",
    title: "Get out before they do",
    body: "When tracked whales or smart money start dumping, you get notified. No more being the exit liquidity for someone else's 100x. The bot watches the wallets it told you to follow — and tells you when they leave.",
    accent: "red",
    stat: "Real-time · push to Telegram",
  },
  {
    tag: "SELF-IMPROVING BRAIN",
    title: "The bot tunes itself",
    body: "Dual-AI agent system — Bot A: Hunter, Bot B: Critic — reviews every win and loss. It rewrites its own scoring weights, threshold gates, and concentration blocks on a 6-hour cycle. You can ask it questions or teach it directly via the dashboard chat.",
    accent: "cyan",
    stat: "78 auto-adjustments · EXPERT level",
  },
  {
    tag: "BONDING CURVE TRACKING",
    title: "Pre-bond → post-bond visibility",
    body: "Eligible calls are flagged ≤ $35K mcap. Bonded means peak ≥ $44K (the pump.fun graduation line). The bot tracks both lifecycles separately so you know whether a call is still fresh or already past graduation.",
    accent: "magenta",
    stat: "204 eligible · 60 bonded · 29% bond rate",
  },
  {
    tag: "CONTROL & AUDIT",
    title: "Every knob. Every gate. Full audit trail.",
    body: "Tuning panel exposes every parameter: minScoreToPost, sweetSpotMax, top10ConcentrationBlock, latePump1hPenalty. Auto-applied changes are logged with reasoning so you can see why the bot adjusted. Power users can override.",
    accent: "purple",
    stat: "Transparent · auditable · operator-taught",
  },
];

const accentBorder = {
  cyan: "hover:border-cyan/50",
  magenta: "hover:border-magenta/50",
  purple: "hover:border-purple/50",
  green: "hover:border-green/50",
  amber: "hover:border-amber/50",
  red: "hover:border-red/50",
};

const accentText = {
  cyan: "text-cyan",
  magenta: "text-magenta",
  purple: "text-purple",
  green: "text-green",
  amber: "text-amber",
  red: "text-red",
};

const accentGlow = {
  cyan: "from-cyan/30",
  magenta: "from-magenta/30",
  purple: "from-purple/30",
  green: "from-green/30",
  amber: "from-amber/30",
  red: "from-red/30",
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-[0.3em] text-magenta mb-4">
            ◢ THE ARSENAL
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Nine systems. <span className="text-gradient">One brain.</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Pulse Caller is more than a call bot. It's a full intel stack — built around the wallets that actually print, learning from every call it makes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <article
              key={f.tag}
              className={`group relative rounded-2xl border border-white/10 bg-panel/40 backdrop-blur p-6 transition-colors ${accentBorder[f.accent]}`}
            >
              <div
                className={`absolute -top-px left-8 right-8 h-px bg-gradient-to-r ${accentGlow[f.accent]} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className={`text-[10px] font-mono tracking-[0.25em] ${accentText[f.accent]} mb-3`}>
                {f.tag}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {f.body}
              </p>
              <div className="mt-5 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40 tracking-wider">
                {f.stat}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
