import "server-only";
import { unstable_cache } from "next/cache";

const BOT_API_BASE =
  process.env.BOT_API_BASE || "https://caller-bot-production.up.railway.app";
const BOT_API_USER = process.env.BOT_API_USER;
const BOT_API_PASS = process.env.BOT_API_PASS;

// Shown if the bot API is unreachable or creds are missing.
const DEFAULT_STATS = {
  wins: 1247,
  losses: 941,
  bestCall: 973,
  avgPeak: 6.52,
  walletsTracked: 6288,
  winRate: 1247 / (1247 + 941),
};

function authHeader() {
  if (!BOT_API_USER || !BOT_API_PASS) return null;
  const token = Buffer.from(`${BOT_API_USER}:${BOT_API_PASS}`).toString("base64");
  return `Basic ${token}`;
}

async function fetchJson(path) {
  const auth = authHeader();
  if (!auth) throw new Error("missing bot api credentials");
  const res = await fetch(`${BOT_API_BASE}${path}`, {
    headers: { Authorization: auth },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`${path}: HTTP ${res.status}`);
  return res.json();
}

function num(v) {
  if (v == null) return null;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : null;
}

function parsePercent(s) {
  if (s == null) return null;
  const n = parseFloat(String(s).replace("%", ""));
  return Number.isFinite(n) ? n / 100 : null;
}

async function fetchStats() {
  if (!BOT_API_USER || !BOT_API_PASS) return DEFAULT_STATS;
  try {
    const [statsRes, callsRes, walletsRes] = await Promise.all([
      fetchJson("/api/stats"),
      fetchJson("/api/calls?limit=1000"),
      fetchJson("/api/wallets"),
    ]);
    const s = statsRes.stats || {};
    const rows = callsRes.rows || [];
    const peaks = rows.map((r) => num(r.peak_multiple)).filter((p) => p != null);
    const bestCall = peaks.length ? Math.max(...peaks) : null;
    const avgPeak = peaks.length ? peaks.reduce((a, b) => a + b, 0) / peaks.length : null;
    const wins = num(s.winCount);
    const losses = num(s.lossCount);
    const resolved = (wins ?? 0) + (losses ?? 0);
    const apiWinRate = parsePercent(s.winRate);
    const walletsTracked = num(walletsRes.stats?.total);
    return {
      wins: wins ?? DEFAULT_STATS.wins,
      losses: losses ?? DEFAULT_STATS.losses,
      bestCall: bestCall ?? DEFAULT_STATS.bestCall,
      avgPeak: avgPeak ?? DEFAULT_STATS.avgPeak,
      walletsTracked: walletsTracked ?? DEFAULT_STATS.walletsTracked,
      winRate: apiWinRate ?? (resolved > 0 ? wins / resolved : DEFAULT_STATS.winRate),
    };
  } catch (err) {
    console.error("[stats] bot api fetch failed:", err);
    return DEFAULT_STATS;
  }
}

export const getStats = unstable_cache(fetchStats, ["pulse-stats"], {
  revalidate: 3600,
  tags: ["stats"],
});
