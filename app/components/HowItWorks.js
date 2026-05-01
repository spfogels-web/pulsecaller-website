const STEPS = [
  {
    n: "01",
    title: "Grab a license",
    body: "Pick monthly or lifetime. Pay with card or crypto. You get a license key on the spot — no waiting, no DMs to chase.",
    accent: "cyan",
  },
  {
    n: "02",
    title: "Activate in Telegram",
    body: "DM the Pulse Caller bot, paste your key, get auto-invited to the private signal group. Takes about 30 seconds.",
    accent: "magenta",
  },
  {
    n: "03",
    title: "Start receiving calls",
    body: "Real-time calls hit the group with mcap, scorer breakdown, and entry. Exit-liquidity alerts when tracked wallets dump. Brain Analyzer commands work straight in the chat.",
    accent: "purple",
  },
];

const accentMap = {
  cyan: { text: "text-cyan", border: "border-cyan/40", glow: "shadow-[0_0_40px_rgba(34,224,255,0.15)]" },
  magenta: { text: "text-magenta", border: "border-magenta/40", glow: "shadow-[0_0_40px_rgba(255,43,214,0.15)]" },
  purple: { text: "text-purple", border: "border-purple/40", glow: "shadow-[0_0_40px_rgba(139,92,246,0.15)]" },
};

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-[0.3em] text-cyan mb-4">
            ◢ HOW IT WORKS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            From key <span className="text-gradient">to calls</span> in 30 seconds.
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            No onboarding deck, no Discord bouncer. Three steps and you're in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <div
                key={s.n}
                className={`relative rounded-2xl border ${a.border} bg-panel/40 backdrop-blur p-8 ${a.glow}`}
              >
                <div className={`text-6xl font-bold font-mono ${a.text} opacity-30 mb-4`}>
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/20 text-2xl">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
