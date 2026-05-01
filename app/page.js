import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LiveTicker from "./components/LiveTicker";
import TrackRecord from "./components/TrackRecord";
import Features from "./components/Features";
import DecisionEngine from "./components/DecisionEngine";
import BotMenu from "./components/BotMenu";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <LiveTicker />
        <TrackRecord />
        <Features />
        <DecisionEngine />
        <BotMenu />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
