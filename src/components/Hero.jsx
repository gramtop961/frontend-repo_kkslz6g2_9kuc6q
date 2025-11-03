import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden bg-[#0B0C10] text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0C10]/90" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 sm:pt-28">
        {/* Top Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-orange-400" />
          Built for fast, low-cost transfers to Nepal
        </div>

        <h1 className="text-center text-4xl font-semibold leading-tight sm:text-6xl">
          Move money to Nepal
          <span className="bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent"> quickly and securely</span>
        </h1>
        
        <p className="mt-5 max-w-2xl text-center text-white/70">
          The Wise-like experience, tailored for Nepal. Real rates, transparent fees, and a sleek dark interface designed for clarity and confidence.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={onGetStarted}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-black transition hover:bg-orange-400"
          >
            Get started
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
          </button>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-medium text-white/80 transition hover:bg-white/5"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
