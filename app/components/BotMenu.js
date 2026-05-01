const MAIN_BUTTONS = [
  "📊 Analyze Token",
  "🔥 Live Calls",
  "🏆 Leaderboards",
  "👤 My Portfolio",
  "🚨 Alerts",
  "🐋 Wallet Tracking",
  "🧠 Market Intel",
  "💎 Upgrade to Pro",
  "❓ Help",
];

const SECTIONS = [
  {
    icon: "📊",
    title: "Analyze Token",
    blurb:
      "Drop any contract address. Pulse runs the full intel stack — onchain scan, holder X-ray, AI rationale — and tells you whether to ape or stay out.",
    buttons: ["Full AI Analysis", "Quick Scan", "Why Called / Skipped", "Add to Portfolio", "Set Alert"],
    commands: [
      ["/analyze", "[CA]", "Full AI token breakdown"],
      ["/scan", "[CA]", "Quick onchain scan"],
      ["/why", "[CA]", "Reasoning — why called or skipped"],
    ],
    accent: "cyan",
  },
  {
    icon: "🔥",
    title: "Live Calls",
    blurb:
      "Real-time call feed. Free users see 2x milestone posts. Pro users see entries the moment the bot decides — before the move.",
    buttons: ["Last 5 Calls", "Best Recent Calls", "Pulse Stats"],
    commands: [
      ["/calls", "", "Last 5 calls"],
      ["/top", "", "Best recent winners"],
      ["/stats", "", "Bot performance — win rate, avg X, best X"],
    ],
    accent: "red",
    proHint: "Pro: real-time entries  ·  Free: 2x milestone posts only",
  },
  {
    icon: "🏆",
    title: "Leaderboards",
    blurb:
      "Two stacks — your group's traders and the global Pulse leaderboard. The game layer. Climb it.",
    buttons: ["Group Leaderboard", "Pulse Leaderboard", "24H · 7D · 30D · ALL"],
    commands: [
      ["/lb", "[24h|7d|30d|all]", "Group leaderboard"],
      ["/pulselb", "[24h|7d|30d|all]", "Global Pulse leaderboard"],
    ],
    accent: "amber",
  },
  {
    icon: "👤",
    title: "My Portfolio",
    blurb:
      "Track every position you've taken from a Pulse call. PnL math, alert hooks, and a one-tap re-analyze on every coin.",
    buttons: ["View Portfolio", "Add Coin", "Remove Coin", "Set Alert", "Re-Analyze"],
    commands: [
      ["/portfolio", "", "View your portfolio"],
      ["/portfolio add", "[CA]", "Add a coin"],
      ["/portfolio remove", "[CA]", "Remove a coin"],
      ["/portfolio clear", "", "Wipe portfolio"],
    ],
    accent: "purple",
  },
  {
    icon: "🚨",
    title: "Alerts",
    blurb:
      "Set a target — mcap or multiple — and Pulse pings you when it hits. Works on any coin you're tracking.",
    buttons: ["Create Alert", "My Alerts", "Remove Alert"],
    commands: [
      ["/alert", "[CA] 100k", "Alert at $100K mcap"],
      ["/alert", "[CA] 5x", "Alert at 5x from entry"],
      ["/alerts", "", "List your active alerts"],
      ["/alert remove", "[id]", "Cancel an alert"],
    ],
    accent: "red",
  },
  {
    icon: "🐋",
    title: "Smart Money Tracking",
    blurb:
      "Paste any wallet — whales, smart money, snipers — and Pulse watches every buy. Get notified the second they ape.",
    buttons: ["Track Wallet", "My Wallets", "Remove Wallet"],
    commands: [
      ["/track", "[wallet]", "Track a wallet"],
      ["/mywallets", "", "View tracked wallets"],
      ["/untrack", "[wallet]", "Stop tracking"],
    ],
    accent: "cyan",
  },
  {
    icon: "🧠",
    title: "Market Intel",
    blurb:
      "Bot's read on the tape. Bull / bear / chop regime, the active watchlist, and what's trending right now.",
    buttons: ["Market Regime", "Watchlist", "Recent Trends"],
    commands: [
      ["/regime", "", "Current market condition"],
      ["/watchlist", "", "Bot's active watchlist"],
      ["/top", "", "Trending winners"],
    ],
    accent: "magenta",
  },
];

const accentMap = {
  cyan: { text: "text-cyan", border: "hover:border-cyan/50", bg: "bg-cyan/10", chip: "border-cyan/30 text-cyan" },
  red: { text: "text-red", border: "hover:border-red/50", bg: "bg-red/10", chip: "border-red/30 text-red" },
  amber: { text: "text-amber", border: "hover:border-amber/50", bg: "bg-amber/10", chip: "border-amber/30 text-amber" },
  purple: { text: "text-purple", border: "hover:border-purple/50", bg: "bg-purple/10", chip: "border-purple/30 text-purple" },
  magenta: { text: "text-magenta", border: "hover:border-magenta/50", bg: "bg-magenta/10", chip: "border-magenta/30 text-magenta" },
};

function TelegramMock() {
  return (
    <div className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-[#17212b] overflow-hidden shadow-[0_0_80px_rgba(34,224,255,0.18)]">
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-b from-[#243446] to-[#1e2a36] border-b border-black/40">
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan via-purple to-magenta flex items-center justify-center font-black text-black text-lg shadow-[0_0_20px_rgba(34,224,255,0.4)]">
          P
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-white text-sm">Pulse Caller</div>
          <div className="flex items-center gap-1.5 text-[11px] text-green">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
            </span>
            online
          </div>
        </div>
        <div className="text-white/40 text-xs font-mono">⋮</div>
      </div>

      <div
        className="p-4 bg-[#0e1621]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(34, 224, 255, 0.05), transparent 40%), radial-gradient(circle at 80% 90%, rgba(255, 43, 214, 0.05), transparent 40%)",
        }}
      >
        <div className="flex justify-start mb-3">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#182533] px-4 py-3 border border-white/5">
            <div className="text-white text-sm font-semibold mb-1">
              Welcome to <span className="text-gradient">Pulse Caller</span>
            </div>
            <div className="text-white/60 text-xs leading-relaxed">
              Your edge in Solana memecoins. Tap a menu below to get started — or type{" "}
              <span className="font-mono text-cyan">/help</span>.
            </div>
            <div className="text-[10px] font-mono text-white/30 mt-2">12:48 PM ✓✓</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {MAIN_BUTTONS.map((b, i) => (
            <div
              key={i}
              className={`text-left text-[13px] rounded-xl bg-[#2b5278]/80 hover:bg-[#3a6695] border border-white/5 text-white px-3 py-2.5 transition-colors cursor-default ${
                i === 8 ? "col-span-2 text-center" : ""
              }`}
            >
              {b}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-full bg-[#182533] border border-white/5 text-white/40 text-xs">
          <span>Message</span>
          <span className="ml-auto">📎  🎤</span>
        </div>
      </div>
    </div>
  );
}

function CommandLine({ cmd, arg, desc }) {
  return (
    <div className="font-mono text-[13px] flex items-baseline gap-2 leading-relaxed">
      <span className="text-cyan whitespace-nowrap">{cmd}</span>
      {arg && <span className="text-amber whitespace-nowrap">{arg}</span>}
      <span className="text-white/40 truncate">— {desc}</span>
    </div>
  );
}

function FeatureCard({ section }) {
  const a = accentMap[section.accent];
  return (
    <article
      className={`group relative rounded-2xl border border-white/10 bg-panel/50 backdrop-blur p-6 transition-all ${a.border}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`flex-none w-12 h-12 rounded-xl ${a.bg} border border-white/10 flex items-center justify-center text-2xl`}
        >
          {section.icon}
        </div>
        <div className="min-w-0">
          <h3 className={`text-lg font-bold ${a.text} mb-1`}>{section.title}</h3>
          <div className="text-[10px] font-mono tracking-widest text-white/40">
            MENU · {section.title.toUpperCase()}
          </div>
        </div>
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-5">{section.blurb}</p>

      {section.proHint && (
        <div className="mb-5 px-3 py-2 rounded-lg border border-amber/30 bg-amber/5 text-[11px] font-mono text-amber/90 tracking-wide">
          ◆ {section.proHint}
        </div>
      )}

      <div className="mb-5">
        <div className="text-[10px] font-mono tracking-widest text-white/40 mb-2">BUTTONS</div>
        <div className="flex flex-wrap gap-1.5">
          {section.buttons.map((b) => (
            <span
              key={b}
              className={`text-[11px] px-2.5 py-1 rounded-md border ${a.chip} bg-black/20`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/5">
        <div className="text-[10px] font-mono tracking-widest text-white/40 mb-2">COMMANDS</div>
        <div className="space-y-1">
          {section.commands.map((c, i) => (
            <CommandLine key={i} cmd={c[0]} arg={c[1]} desc={c[2]} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function BotMenu() {
  return (
    <section id="bot" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-magenta/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono tracking-[0.3em] text-cyan mb-4">
            ◢ INSIDE THE BOT
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Your trading cockpit. <span className="text-gradient">In Telegram.</span>
          </h2>
          <p className="mt-5 text-white/60 text-lg">
            Nine menus. Real commands. Built for one tap. Every signal, every wallet, every alert — already where you scroll all day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <TelegramMock />
            <div className="mt-4 text-center text-xs font-mono text-white/40 tracking-wider">
              ▲ MAIN MENU · 9 BUTTONS · ONE TAP DEEP
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECTIONS.map((s) => (
              <FeatureCard key={s.title} section={s} />
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-panel via-black to-panel overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="text-xs font-mono tracking-[0.3em] text-magenta mb-3">
                💎 FREE vs PRO
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                Watch from the cheap seats <br />
                or trade from the cockpit.
              </h3>
              <a
                href="#pricing"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-black bg-gradient-to-r from-cyan via-purple to-magenta hover:opacity-90 transition-opacity"
              >
                See Pricing →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-[10px] font-mono tracking-widest text-white/50 mb-3">
                FREE BOT
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-white/40">·</span>
                  <span>2x milestone posts after the move</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">·</span>
                  <span>Limited token analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">·</span>
                  <span>Public stats &amp; performance feed</span>
                </li>
                <li className="flex items-start gap-2 pt-2 mt-2 border-t border-white/5">
                  <span className="text-white/40">×</span>
                  <span className="text-white/40">No real-time entries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">×</span>
                  <span className="text-white/40">No wallet tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40">×</span>
                  <span className="text-white/40">No alerts or portfolio</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl border border-magenta/40 bg-gradient-to-br from-magenta/10 via-black/30 to-cyan/10 p-5 shadow-[0_0_60px_rgba(255,43,214,0.2)]">
              <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full text-[10px] font-mono tracking-widest text-black bg-gradient-to-r from-cyan to-magenta">
                RECOMMENDED
              </div>
              <div className="text-[10px] font-mono tracking-widest text-magenta mb-3">
                PRO BOT
              </div>
              <ul className="space-y-2 text-sm text-white">
                <li className="flex items-start gap-2"><span className="text-cyan">✓</span><span>Real-time calls — entries before the move</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan">✓</span><span>Full AI token analysis</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan">✓</span><span>Smart-money wallet tracking</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan">✓</span><span>Mcap &amp; multiple alerts</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan">✓</span><span>Portfolio tools &amp; PnL</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan">✓</span><span>Group + global leaderboards</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan">✓</span><span>Market regime &amp; watchlist intel</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
