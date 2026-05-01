import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pulse Caller — AI Crypto Caller Bot. 57% Win Rate. 973x Best Call.",
  description:
    "Pulse Caller is an AI-powered Solana caller bot that finds runners before they pump. Live wallet intel, smart money tracking, exit-liquidity alerts, and a self-improving brain — all in your Telegram.",
  metadataBase: new URL("https://pulsecaller.bot"),
  openGraph: {
    title: "Pulse Caller — Winning Calls. Real-Time. Real Results.",
    description:
      "AI-powered Solana caller bot. 57% win rate. 973x best call. Live in your Telegram.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse Caller — AI Crypto Caller Bot",
    description:
      "57% win rate. 973x best call. We find the signal — you take the win.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
