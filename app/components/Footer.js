export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-mono text-sm tracking-[0.2em] text-white">
              PULSE<span className="text-magenta">CALLER</span>
            </div>
            <p className="mt-3 text-white/50 text-sm max-w-md leading-relaxed">
              AI-powered Solana caller bot. We find the signal — you take the win.
              57% win rate. 973x best call. Live in your Telegram.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono tracking-widest text-white/40 mb-3">EXPLORE</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#track-record" className="text-white/70 hover:text-cyan transition-colors">Track Record</a></li>
              <li><a href="#features" className="text-white/70 hover:text-cyan transition-colors">Features</a></li>
              <li><a href="#how" className="text-white/70 hover:text-cyan transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-cyan transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-cyan transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono tracking-widest text-white/40 mb-3">CONNECT</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Telegram</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">X / Twitter</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyan transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Pulse Caller. All rights reserved.</div>
          <div className="font-mono tracking-wider">
            NOT FINANCIAL ADVICE · CRYPTO IS VOLATILE · DYOR
          </div>
        </div>
      </div>
    </footer>
  );
}
