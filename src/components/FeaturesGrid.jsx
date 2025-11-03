import React from 'react';
import { Shield, Clock, Globe, Send } from 'lucide-react';

const features = [
  {
    icon: Send,
    title: 'Lightning fast to Nepal',
    desc: 'Optimized routes to Nepali bank accounts and wallets for speedy delivery.'
  },
  {
    icon: Globe,
    title: 'Real exchange rates',
    desc: 'Get the mid‑market rate with no hidden markups—always transparent.'
  },
  {
    icon: Shield,
    title: 'Bank‑grade security',
    desc: 'Protecting your transfers with strong encryption and smart monitoring.'
  },
  {
    icon: Clock,
    title: 'Track every step',
    desc: 'Live status updates from send to receive so you never lose sight.'
  }
];

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-[#0B0C10] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold sm:text-3xl">Why choose us</h2>
          <p className="max-w-md text-sm text-white/60">Designed with a Nepal‑first mindset, combining global standards with local reliability.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/20 text-orange-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
