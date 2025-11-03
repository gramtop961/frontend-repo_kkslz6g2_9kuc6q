import React from 'react';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '1',
    title: 'Set up your transfer',
    text: 'Choose the amount and the currency you want to send to Nepal (NPR receives).'
  },
  {
    step: '2',
    title: 'Add recipient details',
    text: 'Enter a Nepali bank account or wallet number securely and accurately.'
  },
  {
    step: '3',
    title: 'Pay and track',
    text: 'Complete payment using your preferred method and track delivery in real-time.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="w-full bg-[#0B0C10] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
        <p className="mt-2 max-w-2xl text-white/70">A streamlined flow that mirrors the best parts of Wise, tailored exclusively for Nepal.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.step} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500/10" />
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-semibold">{s.step}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-orange-300">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
