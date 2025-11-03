import React, { useRef } from 'react';
import Hero from './components/Hero';
import TransferCalculator from './components/TransferCalculator';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';

export default function App() {
  const calcRef = useRef(null);

  const handleGetStarted = () => {
    calcRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Hero onGetStarted={handleGetStarted} />
      <div ref={calcRef}>
        <TransferCalculator />
      </div>
      <FeaturesGrid />
      <HowItWorks />

      <footer className="border-t border-white/10 bg-[#0B0C10] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Nepal Transfer. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#how" className="hover:text-white">How it works</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
