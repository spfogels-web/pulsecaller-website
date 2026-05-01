"use client";

import { useEffect, useRef } from "react";

const WINS = [
  { ticker: "$SCAM",   peak: "973x",  size: 220, color: "yellow"  },
  { ticker: "$SLURS",  peak: "30.1x", size: 132, color: "magenta" },
  { ticker: "$TRUMP",  peak: "28.4x", size: 128, color: "magenta" },
  { ticker: "$IF",     peak: "27.6x", size: 124, color: "magenta" },
  { ticker: "$AGI",    peak: "26.5x", size: 122, color: "green"   },
  { ticker: "$Closed", peak: "23.3x", size: 116, color: "cyan"    },
  { ticker: "$Dunald", peak: "22.3x", size: 112, color: "magenta" },
  { ticker: "$THUD",   peak: "22.1x", size: 110, color: "purple"  },
  { ticker: "$STOCKM", peak: "20.6x", size: 104, color: "green"   },
  { ticker: "$TRUMPI", peak: "18.9x", size: 96,  color: "cyan"    },
  { ticker: "$CASINO", peak: "15.4x", size: 90,  color: "magenta" },
  { ticker: "$BP",     peak: "14.8x", size: 86,  color: "cyan"    },
  { ticker: "$Xing",   peak: "12.2x", size: 80,  color: "green"   },
  { ticker: "$BASED",  peak: "11.2x", size: 76,  color: "purple"  },
  { ticker: "$parano", peak: "10.6x", size: 72,  color: "magenta" },
];

const colorMap = {
  yellow:  { hex: "#ffe14d", glow: "rgba(255,225,77,0.55)",  text: "text-yellow"  },
  magenta: { hex: "#ff2bd6", glow: "rgba(255,43,214,0.45)",  text: "text-magenta" },
  cyan:    { hex: "#22e0ff", glow: "rgba(34,224,255,0.45)",  text: "text-cyan"    },
  green:   { hex: "#22e07a", glow: "rgba(34,224,122,0.45)",  text: "text-green"   },
  purple:  { hex: "#8b5cf6", glow: "rgba(139,92,246,0.45)",  text: "text-purple"  },
};

function dexUrl(ticker) {
  const q = ticker.replace(/^\$/, "");
  return `https://dexscreener.com/search?q=${encodeURIComponent(q)}`;
}

export default function WinsBubbles() {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const stateRef = useRef([]);
  const rafRef = useRef(null);
  const interactingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Initialize physics state for each bubble
    const items = nodeRefs.current.map((node, i) => {
      if (!node) return null;
      const w = WINS[i];
      const r = w.size / 2;
      return {
        node,
        r,
        x: r + Math.random() * Math.max(1, width - 2 * r),
        y: r + Math.random() * Math.max(1, height - 2 * r),
        vx: (Math.random() - 0.5) * 0.7 + (Math.random() > 0.5 ? 0.2 : -0.2),
        vy: (Math.random() - 0.5) * 0.7 + (Math.random() > 0.5 ? 0.2 : -0.2),
      };
    }).filter(Boolean);
    stateRef.current = items;

    // Resolve initial overlaps so bubbles aren't stacked at start
    for (let pass = 0; pass < 30; pass++) {
      let any = false;
      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          const a = items[i], b = items[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.01;
          const min = a.r + b.r + 1;
          if (dist < min) {
            any = true;
            const nx = dx / dist, ny = dy / dist;
            const push = (min - dist) / 2;
            a.x -= nx * push; a.y -= ny * push;
            b.x += nx * push; b.y += ny * push;
          }
        }
      }
      if (!any) break;
    }

    const tick = () => {
      const speedMul = interactingRef.current ? 0.25 : 1;

      for (const it of items) {
        it.x += it.vx * speedMul;
        it.y += it.vy * speedMul;

        if (it.x - it.r < 0)        { it.x = it.r;          it.vx = Math.abs(it.vx); }
        if (it.x + it.r > width)    { it.x = width - it.r;  it.vx = -Math.abs(it.vx); }
        if (it.y - it.r < 0)        { it.y = it.r;          it.vy = Math.abs(it.vy); }
        if (it.y + it.r > height)   { it.y = height - it.r; it.vy = -Math.abs(it.vy); }
      }

      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          const a = items[i], b = items[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          const min = a.r + b.r;
          if (dist > 0 && dist < min) {
            const nx = dx / dist, ny = dy / dist;
            const overlap = (min - dist) / 2;
            a.x -= nx * overlap; a.y -= ny * overlap;
            b.x += nx * overlap; b.y += ny * overlap;

            // Elastic 1D collision along normal (equal masses)
            const va = a.vx * nx + a.vy * ny;
            const vb = b.vx * nx + b.vy * ny;
            const diff = vb - va;
            a.vx += diff * nx; a.vy += diff * ny;
            b.vx -= diff * nx; b.vy -= diff * ny;

            // Cap velocity to prevent runaway
            const cap = 1.4;
            for (const x of [a, b]) {
              const sp = Math.hypot(x.vx, x.vy);
              if (sp > cap) { x.vx = (x.vx / sp) * cap; x.vy = (x.vy / sp) * cap; }
            }
          }
        }
      }

      for (const it of items) {
        it.node.style.transform = `translate3d(${it.x - it.r}px, ${it.y - it.r}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      for (const it of items) {
        it.x = Math.min(Math.max(it.r, it.x), width - it.r);
        it.y = Math.min(Math.max(it.r, it.y), height - it.r);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480px] sm:h-[520px] overflow-hidden rounded-2xl"
      onMouseEnter={() => (interactingRef.current = true)}
      onMouseLeave={() => (interactingRef.current = false)}
    >
      {WINS.map((w, i) => {
        const c = colorMap[w.color];
        return (
          <a
            key={w.ticker}
            ref={(el) => (nodeRefs.current[i] = el)}
            href={dexUrl(w.ticker)}
            target="_blank"
            rel="noopener noreferrer"
            title={`${w.ticker} ${w.peak} — open on DexScreener`}
            className="group absolute top-0 left-0 flex flex-col items-center justify-center rounded-full bg-black/40 backdrop-blur font-mono cursor-pointer transition-transform hover:scale-110 hover:z-10 will-change-transform"
            style={{
              width: w.size,
              height: w.size,
              border: `1.5px solid ${c.hex}`,
              boxShadow: `0 0 30px ${c.glow}, inset 0 0 12px ${c.glow}`,
              color: c.hex,
            }}
          >
            <span className="text-xs sm:text-sm font-bold leading-none">{w.ticker}</span>
            <span className="text-[10px] sm:text-xs opacity-80 mt-1 leading-none">{w.peak}</span>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              ↗ DEX
            </span>
          </a>
        );
      })}
    </div>
  );
}
