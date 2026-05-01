export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-panel via-black to-panel p-10 sm:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-magenta/10 blur-[120px]" />

          <div className="relative">
            <div className="text-xs font-mono tracking-[0.3em] text-cyan mb-5">
              ◢ STOP MISSING THE RUNNERS
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Every minute you wait <br />
              <span className="text-gradient">is someone else's 50x</span>.
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
              The bot is calling right now. You can read about it for another month or you can be in the group when the next $SCAM 973x prints.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-base font-bold text-black bg-gradient-to-r from-cyan via-purple to-magenta hover:opacity-90 transition-all"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan via-purple to-magenta blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
                <span className="relative">GET ACCESS NOW</span>
                <span className="relative">→</span>
              </a>
            </div>
            <p className="mt-6 text-xs font-mono tracking-wider text-white/40">
              INSTANT LICENSE KEY · TG GROUP ACCESS · CANCEL ANYTIME
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
