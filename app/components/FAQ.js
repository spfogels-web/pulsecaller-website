"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What's the actual win rate?",
    a: "57% lifetime across 278 calls (159 wins / 119 losses). Average peak across all wins: 6.52x. Best single call: $SCAM at 973x. We post every call live — wins AND losses — so you can verify the math yourself.",
  },
  {
    q: "What chain does this work on?",
    a: "Solana. Optimized for pump.fun + Raydium liquidity, with full bonding-curve lifecycle tracking (eligible ≤ $35K mcap, bonded ≥ $44K).",
  },
  {
    q: "How do I get access after I pay?",
    a: "You receive a license key the moment payment confirms. DM the Pulse Caller bot on Telegram, paste your key, and the bot auto-invites you to the private signal group. Total time: under a minute.",
  },
  {
    q: "Is this just another caller bot?",
    a: "No. Most caller bots post tickers and pray. Pulse Caller runs 9 systems together — wallet intel, smart-money tracking, whale-funding detection, midcap harvesting, exit-liquidity alerts, brain analyzer, and a self-improving scorer that rewrites its own parameters every 6 hours. The calls are the output. The intel stack is the moat.",
  },
  {
    q: "What's the 'self-improving brain'?",
    a: "A dual-AI agent system. Bot A (Hunter) finds candidates. Bot B (Critic) reviews wins and losses, then proposes parameter changes — scoring weights, threshold gates, concentration blocks, late-pump penalties. Low-risk changes auto-apply. Everything is logged with reasoning so you can see why the bot adjusted itself.",
  },
  {
    q: "Can I cancel the monthly subscription?",
    a: "Yes, anytime. Your license stays active until the end of the paid period, then the bot kicks the key automatically.",
  },
  {
    q: "Why is the lifetime tier 'best value'?",
    a: "Pays for itself in roughly 9 months at the monthly rate. After that it's free forever — including every new feature we ship. Locked-in pricing, no renewals, no gotchas.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Pulse Caller is a signal/intel tool. Calls are not investment advice. You're responsible for your own trades. Crypto is volatile — most memecoins go to zero. Don't trade money you can't afford to lose.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-mono tracking-[0.3em] text-cyan mb-4">
            ◢ FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Common <span className="text-gradient">questions</span>.
          </h2>
        </div>

        <div className="space-y-2">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border bg-panel/40 backdrop-blur transition-colors ${
                  isOpen ? "border-cyan/40" : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold">{item.q}</span>
                  <span
                    className={`flex-none w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-transform ${
                      isOpen ? "border-cyan text-cyan rotate-45" : "border-white/30 text-white/50"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-white/70 leading-relaxed text-sm">
                    {item.a}
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
