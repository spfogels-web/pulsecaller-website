import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <Image
            src="/pulse-wordmark.png"
            alt="Pulse Caller"
            width={520}
            height={150}
            priority
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#track-record" className="hover:text-cyan transition-colors">Track Record</a>
          <a href="#features" className="hover:text-cyan transition-colors">Features</a>
          <a href="#engine" className="hover:text-cyan transition-colors">Engine</a>
          <a href="#brain" className="hover:text-cyan transition-colors">Brain</a>
          <a href="#bot" className="hover:text-cyan transition-colors">The Bot</a>
          <a href="#how" className="hover:text-cyan transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-cyan transition-colors">Pricing</a>
          <a href="#phase-2" className="hover:text-magenta transition-colors">Phase 2</a>
          <a href="#faq" className="hover:text-cyan transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-cyan to-magenta hover:opacity-90 transition-opacity"
          >
            Get Access
          </a>
        </div>
      </div>
    </header>
  );
}
