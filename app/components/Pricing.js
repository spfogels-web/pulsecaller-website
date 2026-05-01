const PLANS = [
  {
    name: "MONTHLY",
    price: "$84.99",
    cadence: "/ month",
    blurb: "Try the bot. Cancel anytime. New license key auto-renewed each month.",
    cta: "Start Monthly",
    features: [
      "Real-time AI calls in private TG group",
      "Wallet Intel Scanner — full DB access",
      "Brain Analyzer — drop any CA",
      "Whale Funding + Midcap Harvester signals",
      "Exit-liquidity alerts",
      "Self-improving scorer (auto-tuned)",
      "Cancel anytime",
    ],
    accent: "cyan",
    badge: null,
  },
  {
    name: "LIFETIME",
    price: "$799",
    cadence: "one-time",
    blurb: "Pay once. License key never expires. Best value for serious traders.",
    cta: "Get Lifetime Access",
    features: [
      "Everything in Monthly — forever",
      "All future feature drops included",
      "Priority support channel",
      "Early access to new agents (Hunter v2, Critic v2)",
      "Direct line to ops for custom asks",
      "Locked-in pricing — no renewals",
      "≈ 9 months payback at monthly rate",
    ],
    accent: "magenta",
    badge: "BEST VALUE",
  },
];

const accentMap = {
  cyan: {
    border: "border-cyan/40",
    text: "text-cyan",
    bg: "bg-cyan",
    glow: "shadow-[0_0_60px_rgba(34,224,255,0.18)]",
    btn: "bg-cyan text-black hover:bg-cyan/90",
  },
  magenta: {
    border: "border-magenta/50",
    text: "text-magenta",
    bg: "bg-magenta",
    glow: "shadow-[0_0_80px_rgba(255,43,214,0.25)]",
    btn: "bg-gradient-to-r from-cyan via-purple to-magenta text-black hover:opacity-90",
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-magenta/10 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-[0.3em] text-magenta mb-4">
            ◢ PRICING
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Pick your <span className="text-gradient">edge</span>.
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Subscribe monthly or pay once. Either way, license-key delivery is instant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PLANS.map((p) => {
            const a = accentMap[p.accent];
            return (
              <div
                key={p.name}
                className={`relative rounded-3xl border ${a.border} bg-panel/60 backdrop-blur p-8 ${a.glow}`}
              >
                {p.badge && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-black bg-gradient-to-r from-cyan to-magenta">
                    {p.badge}
                  </div>
                )}
                <div className={`text-xs font-mono tracking-[0.3em] ${a.text} mb-4`}>
                  {p.name}
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold text-white">{p.price}</span>
                  <span className="text-white/50 text-sm">{p.cadence}</span>
                </div>
                <p className="text-white/60 text-sm mb-6">{p.blurb}</p>

                <a
                  href="#"
                  className={`block w-full text-center py-3 rounded-full font-bold text-sm tracking-wider transition-all ${a.btn}`}
                >
                  {p.cta.toUpperCase()}
                </a>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={`mt-0.5 ${a.text}`}>✓</span>
                      <span className="text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs font-mono text-white/40">
          PAY WITH CARD · USDC · SOL · ETH · INSTANT LICENSE-KEY DELIVERY
        </div>
      </div>
    </section>
  );
}
