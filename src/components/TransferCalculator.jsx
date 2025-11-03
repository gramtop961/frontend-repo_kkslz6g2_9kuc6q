import React, { useMemo, useState } from 'react';
import { ArrowRight, Info, Send } from 'lucide-react';

const RATES = {
  USD: 133.5, // illustrative demo rate to NPR
  EUR: 142.3, // illustrative demo rate to NPR
  INR: 1.60,  // illustrative demo rate to NPR
};

const FEE_PERCENT = 0.006; // 0.6% illustrative fee
const MIN_FEE = 1.0; // min fee in source currency

export default function TransferCalculator() {
  const [from, setFrom] = useState('USD');
  const [amount, setAmount] = useState('500');

  const { fee, rate, nprReceived, total } = useMemo(() => {
    const amt = Number(amount) || 0;
    const rate = RATES[from] || 0;
    const fee = Math.max(MIN_FEE, +(amt * FEE_PERCENT).toFixed(2));
    const sendable = Math.max(0, amt - fee);
    const nprReceived = +(sendable * rate).toFixed(2);
    const total = amt;
    return { fee, rate, nprReceived, total };
  }, [from, amount]);

  return (
    <section className="relative w-full bg-[#0B0C10] py-14 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Calculate your transfer</h2>
          <p className="mt-2 max-w-lg text-white/70">
            Transparent pricing with mid-market rates. This demo uses illustrative values for preview purposes.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/70">You send</label>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                  <Send className="h-5 w-5 text-white/60" />
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    inputMode="decimal"
                    className="w-full bg-transparent text-lg outline-none placeholder:text-white/40"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">From</label>
                <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-3">
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full bg-transparent text-lg outline-none"
                  >
                    {Object.keys(RATES).map((c) => (
                      <option key={c} value={c} className="bg-[#0B0C10]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/70">Recipient gets</label>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                  <span className="text-lg font-semibold">{nprReceived.toLocaleString()} NPR</span>
                  <span className="text-sm text-white/60">@ {rate} NPR per {from}</span>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Total cost</label>
                <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                  <span className="text-lg">{fee.toFixed(2)} {from}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-2 text-sm text-white/60">
              <Info className="mt-0.5 h-4 w-4" />
              <p>
                Estimates shown for demo only. Actual rates and fees update in real-time when you create a transfer.
              </p>
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-black transition hover:bg-orange-400">
              Continue
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.04] p-6 shadow-2xl">
            <h3 className="text-lg font-semibold">Pricing breakdown</h3>
            <div className="mt-4 space-y-3 text-white/80">
              <Row label="Amount" value={`${Number(amount || 0).toFixed(2)} ${from}`} />
              <Row label="Transfer fee" value={`${fee.toFixed(2)} ${from}`} />
              <Row label="Exchange rate" value={`1 ${from} = ${RATES[from]} NPR`} />
              <div className="my-2 border-t border-white/10" />
              <Row label="Recipient receives" value={`${nprReceived.toLocaleString()} NPR`} bold />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, bold = false }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-white/60">{label}</span>
      <span className={bold ? 'font-semibold' : ''}>{value}</span>
    </div>
  );
}
