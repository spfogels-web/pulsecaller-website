"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const LINKS = [
  { href: "#track-record", label: "Track Record" },
  { href: "#features", label: "Features" },
  { href: "#engine", label: "Engine" },
  { href: "#brain", label: "Brain" },
  { href: "#bot", label: "The Bot" },
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#phase-2", label: "Phase 2", magenta: true },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/pulse-wordmark.png"
            alt="Pulse Caller"
            width={520}
            height={150}
            priority
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${
                l.magenta ? "hover:text-magenta" : "hover:text-cyan"
              } transition-colors`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-cyan to-magenta hover:opacity-90 transition-opacity"
          >
            Get Access
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden relative w-11 h-11 rounded-lg border border-white/15 bg-black/40 backdrop-blur flex items-center justify-center hover:border-cyan/40 transition-colors"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-5 rounded-full bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drop-down panel */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 origin-top transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="border-b border-white/10 bg-black/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-3.5 text-base font-semibold border-b border-white/5 transition-colors ${
                  l.magenta
                    ? "text-white hover:text-magenta"
                    : "text-white hover:text-cyan"
                }`}
              >
                <span>{l.label}</span>
                <span
                  className={`text-xs ${
                    l.magenta ? "text-magenta" : "text-white/30"
                  }`}
                >
                  →
                </span>
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-5 mb-2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold tracking-wider text-black bg-gradient-to-r from-cyan via-purple to-magenta hover:opacity-90 transition-opacity"
            >
              GET ACCESS NOW →
            </a>
            <div className="text-center text-[10px] font-mono tracking-[0.3em] text-white/30 mt-3 mb-1">
              ◢ WINNING CALLS · REAL-TIME · REAL RESULTS
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
