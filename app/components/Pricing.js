const PLANS = [
  {
    name: "MONTHLY",
    tag: "TRY THE BOT",
    price: "$84.99",
    cadence: "/ month",
    blurb: "Cancel anytime. License key auto-renews. Lowest barrier to entry.",
    cta: "Start Monthly",
    accent: "cyan",
    badge: null,
    features: [
      ["📡", "Real-time AI calls in private TG group"],
      ["🧠", "Brain Analyzer — drop any contract address"],
      ["👥", "Wallet Intel Scanner — full 6,288-wallet DB"],
      ["🐋", "Whale Funding + Midcap Harvester signals"],
      ["⚠", "Exit-liquidity alerts the moment whales dump"],
      ["⚙", "Self-improving scorer — auto-tuned every 6h"],
      ["✕", "Cancel any time, no questions asked"],
    ],
    footnote: null,
  },
  {
    name: "LIFETIME",
    tag: "THE PLAY",
    price: "$799",
    cadence: "one-time · forever",
    blurb: "Pay once. Never pay again. Every future drop included. Best value for serious traders.",
    cta: "Get Lifetime Access",
    accent: "magenta",
    badge: "MOST POPULAR",
    features: [
      ["♾", "Everything in Monthly — forever"],
      ["🚀", "All future feature drops included free"],
      ["⚡", "Priority support channel"],
      ["✦", "Early access to new agents (Hunter v2, Critic v2)"],
      ["📞", "Direct line to ops for custom asks"],
      ["🔒", "Locked-in pricing — zero renewals, ever"],
      ["💎", "Pays back in ~9 months · then free forever"],
    ],
    footnote: "≈ 9 months of monthly = lifetime. Then every month after is pure edge.",
  },
];

const accentMap = {
  cyan: {
    border: "border-cyan/30",
    text: "text-cyan",
    bg: "bg-cyan",
    glow: "shadow-[0_0_60px_rgba(34,224,255,0.15)]",
    btn: "bg-cyan text-black hover:bg-cyan/90",
    grad: "from-cyan/10 via-cyan/5",
    ring: "ring-cyan/20",
  },
  magenta: {
    border: "border-magenta/50",
    text: "text-magenta",
    bg: "bg-magenta",
    glow: "shadow-[0_0_100px_rgba(255,43,214,0.3)]",
    btn: "bg-gradient-to-r from-cyan via-purple to-magenta text-black hover:opacity-90",
    grad: "from-magenta/15 via-purple/10",
    ring: "ring-magenta/40",
  },
};

const TRUST_SIGNALS = [
  { icon: "⚡", label: "Instant Activation" },
  { icon: "💳", label: "Card or Crypto" },
  { icon: "📨", label: "License Key Delivered" },
  { icon: "🔓", label: "TG Auto-Invite" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-magenta/10 blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-magenta/30 bg-magenta/5 text-[10px] font-mono tracking-[0.3em] text-magenta mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-magenta opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-magenta" />
            </span>
            ◢ PRICING
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Pick your <span className="text-gradient">edge</span>.
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Subscribe monthly or pay once for life. Either way, license-key delivery is instant and the bot is in your Telegram in under a minute.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 items-stretch">
          {PLANS.map((p) => {
            const a = accentMap[p.accent];
            const isFeatured = p.accent === "magenta";
            return (
              <div
                key={p.name}
                className={`relative rounded-3xl border ${a.border} bg-gradient-to-b ${a.grad} to-panel/80 backdrop-blur p-8 sm:p-10 ${a.glow} transition-all hover:-translate-y-1 ${
                  isFeatured ? "md:scale-[1.02] md:-translate-y-2" : ""
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-current to-transparent ${a.text}`}
                />

                {/* Badge ribbon */}
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-[0.3em] text-black bg-gradient-to-r from-cyan via-purple to-magenta shadow-[0_0_30px_rgba(255,43,214,0.5)] flex items-center gap-1.5">
                    <span>★</span>
                    {p.badge}
                    <span>★</span>
                  </div>
                )}

                {/* Plan tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-[10px] font-mono tracking-[0.3em] ${a.text}`}>
                    {p.name}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-white/40 px-2.5 py-1 rounded-full border border-white/10">
                    {p.tag}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-6xl sm:text-7xl font-bold leading-none ${
                        isFeatured ? "text-gradient" : "text-white"
                      }`}
                      style={isFeatured ? {} : { textShadow: "0 0 30px rgba(34,224,255,0.3)" }}
                    >
                      {p.price}
                    </span>
                    <span className="text-white/50 text-sm font-mono">{p.cadence}</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-7">{p.blurb}</p>

                {/* CTA */}
                <a
                  href="#"
                  className={`group relative block w-full text-center py-4 rounded-full font-bold text-sm tracking-wider transition-all ${a.btn}`}
                >
                  {isFeatured && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan via-purple to-magenta blur-md opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
                  )}
                  <span className="relative inline-flex items-center justify-center gap-2">
                    {p.cta.toUpperCase()}
                    <span>→</span>
                  </span>
                </a>

                {/* Divider */}
                <div className="relative my-7">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 bg-panel/80 text-[10px] font-mono tracking-[0.3em] text-white/40">
                    INCLUDED
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3.5">
                  {p.features.map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3 text-sm">
                      <span
                        className={`flex-none w-7 h-7 rounded-lg border ${a.border} ${a.text} bg-black/30 flex items-center justify-center text-xs`}
                      >
                        {icon}
                      </span>
                      <span className="text-white/75 leading-relaxed pt-0.5">{text}</span>
                    </li>
                  ))}
                </ul>

                {p.footnote && (
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <div className="text-[11px] font-mono text-white/45 leading-relaxed text-center">
                      {p.footnote}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* TRUST SIGNALS */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-panel/60 via-black/40 to-panel/60 backdrop-blur p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_SIGNALS.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <div className="flex-none w-10 h-10 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-lg">
                  {t.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm leading-tight">{t.label}</div>
                  <div className="text-[10px] font-mono tracking-widest text-white/40 mt-0.5">
                    UNDER 60s
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap text-[11px] font-mono tracking-[0.25em] text-white/50">
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-black/40">VISA</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-black/40">MASTERCARD</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-black/40">USDC</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-black/40">SOL</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-black/40">ETH</span>
          <span className="px-3 py-1.5 rounded-full border border-white/10 bg-black/40">BTC</span>
        </div>
      </div>
    </section>
  );
}
