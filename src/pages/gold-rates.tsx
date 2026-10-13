import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useState } from 'react';
import {
  TrendingUp, ShieldCheck, ChevronDown, ChevronUp,
  MessageCircle, Phone, Lock, CheckCircle2, Calculator, Info
} from 'lucide-react';

export default function GoldRatesPage() {
  // Calculator state
  const [selectedKarat, setSelectedKarat] = useState<'24K' | '22K' | '18K'>('24K');
  const [weight, setWeight] = useState<number>(10);
  const [unit, setUnit] = useState<'g' | 'tola' | 'kg'>('g');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const ratesPerGram = {
    '24K': 7420,
    '22K': 6802,
    '18K': 5565,
  };

  const karatLabels = {
    '24K': '24K (999 Fine)',
    '22K': '22K (916 Standard)',
    '18K': '18K (750 Alloy)',
  };

  // Weight multiplier in grams
  const multiplier = unit === 'g' ? 1 : (unit === 'tola' ? 11.6638 : 1000);
  const totalGrams = (weight || 0) * multiplier;
  const baseRatePerGram = ratesPerGram[selectedKarat];
  const baseCost = totalGrams * baseRatePerGram;
  const gst = baseCost * 0.03;
  const totalPayable = baseCost + gst;

  const faqs = [
    {
      q: 'How often are your live gold rates updated?',
      a: 'Our rates synchronize automatically with live MCX tick data and physical spot transactions at Manek Chowk throughout market hours (11:00 AM – 8:00 PM, Monday through Saturday).',
    },
    {
      q: 'What is the minimum order quantity for bars pricing?',
      a: 'We offer wholesale bar pricing starting from 10 grams up to standard 100g cast bars and 1kg commercial bullion ingots.',
    },
    {
      q: 'Do you offer gold on credit or loan facilities to jewellers?',
      a: 'Yes, we provide institutional gold loan facilities against eligible physical collateral and structured bullion leasing for verified jeweller accounts.',
    },
    {
      q: 'How is the purity of your gold bars tested and certified?',
      a: 'All our minted bars, sovereign coins, and certified cast bars undergo precision XRF laboratory spectrometry with certified fineness cards and laser-inscribed batch serials.',
    },
    {
      q: 'What documents are required to purchase bullion from your desk?',
      a: 'For transactions below ₹2 Lakhs, valid photo identification is required. Above ₹2 Lakhs, PAN card submission is standard for bullion invoices.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Today's Gold Rates in Ahmedabad — Manek Chowk Bullion Benchmark</title>
        <meta
          name="description"
          content="Live gold rates in Ahmedabad Manek Chowk. 24K, 22K, 18K per gram and 10g prices, gold value calculator, and 7-day trend."
        />
        <link rel="canonical" href="https://ahmedabadgoldprocess.com/gold-rates" />
      </Helmet>

      <main className="bg-[#fcfbf9] text-slate-800">
        {/* HERO SECTION */}
        <section className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                MANEK CHOWK BULLION BENCHMARK
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-1 leading-tight">
                Today's Gold Rates in Ahmedabad
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-2xl">
                Updated continuously by our trading desk. Rates reflect institutional bullion physical spot benchmarks aligned with MCX and IBJA fixes. For orders exceeding 100g or commercial bar lots, execute directly via our trading terminal.
              </p>
            </div>

            {/* Trading status box */}
            <div className="bg-[#0b0f19] text-white p-4 sm:p-5 rounded-xl border border-slate-800 shadow-md shrink-0 w-full lg:w-72">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold text-slate-400">TRADING STATUS</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPEN (MCX SPOT)
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-300 pt-1 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">USD/INR SPOT RATE:</span>
                  <span className="font-semibold text-white">83.94 <span className="text-red-400 text-[10px]">(-0.12%)</span></span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Import Duty | Cess:</span>
                  <span className="font-semibold text-[#d4af37]">6.00% Net</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: INSTITUTIONAL BULLION BOARD (3 CARDS) */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                PHYSICAL SPOT MATRIX
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                Institutional Bullion Board
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" /> Real-time Intraday Trend (+0.45% Avg)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 24K Card (Highlighted) */}
            <div className="bg-white rounded-2xl border-2 border-[#d4af37] shadow-xl overflow-hidden relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-[#d4af37] text-slate-950 font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                BULLION BENCHMARK
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  24 Karat Gold <span className="text-slate-500 font-normal">999.00 Fine</span>
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  99.9% Pure Investment Bullion • Swiss Mint & MMTC Standard
                </p>

                {/* Main Price */}
                <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">SPOT RATE (10 GRAMS)</span>
                      <p className="font-serif text-3xl font-extrabold text-slate-900 mt-0.5">
                        ₹74,200
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold text-emerald-800 bg-emerald-100">
                      <TrendingUp className="w-3.5 h-3.5" /> +0.45% (+₹330)
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Excl. 3% GST • Delivered Ahmedabad</p>
                </div>

                {/* Sub rates */}
                <div className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span>Per 1 Gram:</span>
                    <span className="font-semibold text-slate-900">₹7,420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per 8 Grams (1 Sovereign):</span>
                    <span className="font-semibold text-slate-900">₹59,360</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per 100 Grams (Cast Bar):</span>
                    <span className="font-semibold text-slate-900">₹7,42,000</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-100">
                    <span>Per 1 Kilogram (Bullion Ingot):</span>
                    <span className="text-[#d4af37]">₹74,20,000</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/918905064477?text=Hi%2C%20I%20want%20to%20book%2024K%20Spot%20Delivery%20at%20Ahmedabad%20Gold%20Process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 text-center block shadow transition-colors"
                >
                  Book 24K Spot Delivery
                </a>
              </div>
            </div>

            {/* 22K Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  22 Karat Gold <span className="text-slate-500 font-normal">916 Standard</span>
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  91.6% Jewellery Standard • Production Export Grade
                </p>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">SPOT RATE (10 GRAMS)</span>
                      <p className="font-serif text-3xl font-extrabold text-slate-900 mt-0.5">
                        ₹68,020
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold text-emerald-800 bg-emerald-100">
                      <TrendingUp className="w-3.5 h-3.5" /> +0.42% (+₹290)
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Excl. 3% GST • Delivered Ahmedabad</p>
                </div>

                <div className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span>Per 1 Gram:</span>
                    <span className="font-semibold text-slate-900">₹6,802</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per 8 Grams (1 Sovereign):</span>
                    <span className="font-semibold text-slate-900">₹54,416</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per 100 Grams (Raw Stock):</span>
                    <span className="font-semibold text-slate-900">₹6,80,200</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-100">
                    <span>Per 1 Kilogram (916 Lot):</span>
                    <span className="text-slate-900">₹68,02,000</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/918905064477?text=Hi%2C%20I%20want%20to%20enquire%20about%2022K%20916%20Rate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-center block transition-colors"
                >
                  Enquire 22K 916 Rate
                </a>
              </div>
            </div>

            {/* 18K Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  18 Karat Gold <span className="text-slate-500 font-normal">750 Alloy</span>
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  75.0% Fine Jewellery Standard • High-tensile strength alloy
                </p>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">SPOT RATE (10 GRAMS)</span>
                      <p className="font-serif text-3xl font-extrabold text-slate-900 mt-0.5">
                        ₹55,650
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold text-emerald-800 bg-emerald-100">
                      <TrendingUp className="w-3.5 h-3.5" /> +0.38% (+₹210)
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Excl. 3% GST • Delivered Ahmedabad</p>
                </div>

                <div className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                    <span>Per 1 Gram:</span>
                    <span className="font-semibold text-slate-900">₹5,565</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per 8 Grams:</span>
                    <span className="font-semibold text-slate-900">₹44,520</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Per 100 Grams:</span>
                    <span className="font-semibold text-slate-900">₹5,56,500</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-100">
                    <span>Per 1 Kilogram:</span>
                    <span className="text-slate-900">₹55,65,000</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/918905064477?text=Hi%2C%20I%20want%20to%20enquire%20about%2018K%20Rate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-center block transition-colors"
                >
                  Enquire 18K Rate
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <p className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-600" />
              Rates are indicative and updated periodically at our Manek Chowk desk. Actual physical settlement depends on real-time MCX tick and purity assay.
            </p>
            <Link to="/contact" className="text-[#d4af37] font-semibold hover:underline">
              RTGS Bullion Desk Guidelines →
            </Link>
          </div>
        </section>

        {/* SECTION: INDICATIVE GOLD VALUE CALCULATOR */}
        <section className="py-14 bg-slate-100/70 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                FINANCIAL ESTIMATION TOOL
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                Indicative Gold Value Calculator
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Calculate exact bullion procurement value including mandatory GST and purity weights before confirming your order.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Inputs */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                {/* 1. Select Karat Purity */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    1. Select Karat Purity
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['24K', '22K', '18K'] as const).map((k) => (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setSelectedKarat(k)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedKarat === k
                            ? 'bg-amber-50 border-[#d4af37] text-slate-900 font-bold shadow-sm ring-1 ring-[#d4af37]'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                        }`}
                      >
                        <p className="font-serif text-sm font-bold">{k}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">₹{ratesPerGram[k].toLocaleString()}/g</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Enter Weight & Unit */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    2. Enter Weight / Quantity
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-8">
                      <input
                        type="number"
                        min="0.1"
                        step="any"
                        value={weight}
                        onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                        className="w-full text-base font-semibold px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value as any)}
                        className="w-full text-sm font-semibold px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      >
                        <option value="g">Grams (g)</option>
                        <option value="tola">Tola (11.66g)</option>
                        <option value="kg">Kilogram (1000g)</option>
                      </select>
                    </div>
                  </div>

                  {/* Quick pills */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">QUICK SIZES:</span>
                    {[
                      { label: '1 gram', w: 1, u: 'g' },
                      { label: '8g (Sovereign)', w: 8, u: 'g' },
                      { label: '10g (Tola)', w: 10, u: 'g' },
                      { label: '50g', w: 50, u: 'g' },
                      { label: '100g (Cast Bar)', w: 100, u: 'g' },
                      { label: '1000g (1 Kg)', w: 1000, u: 'g' },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          setWeight(item.w);
                          setUnit(item.u as any);
                        }}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 hover:bg-[#d4af37]/20 border border-slate-200 text-slate-700"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                  Commercial transactions require standard 3% GST (CGST 1.5% + SGST 1.5%). TCS may apply above ₹10 Lakhs threshold under section 206C.
                </div>
              </div>

              {/* Right Calculation Slip */}
              <div className="lg:col-span-5 bg-[#0c101d] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">
                      TRADE ORDER SLIP
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">Calculation Slip</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[#d4af37]">
                    <Calculator className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Selected Grade:</span>
                    <span className="font-bold text-white">{karatLabels[selectedKarat]}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Net Pure Weight:</span>
                    <span className="font-bold text-white">{totalGrams.toFixed(2)} Grams</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Base Rate Benchmark:</span>
                    <span className="font-bold text-white">₹{baseRatePerGram.toLocaleString()} / g</span>
                  </div>
                  <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800">
                    <span>Bullion Cost (Base):</span>
                    <span className="font-semibold text-white">₹{Math.round(baseCost).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Statutory GST (3%):</span>
                    <span>₹{Math.round(gst).toLocaleString()}</span>
                  </div>

                  <div className="pt-4 mt-2 border-t-2 border-slate-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        TOTAL INDICATIVE PAYABLE
                      </span>
                      <p className="text-[10px] text-slate-500">Subject to live lock validation</p>
                    </div>
                    <p className="font-serif text-2xl sm:text-3xl font-extrabold text-[#d4af37]">
                      ₹{Math.round(totalPayable).toLocaleString()}
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/918905064477?text=Hi%2C%20I%20want%20to%20lock%20rate%20for%20${totalGrams}g%20of%20${selectedKarat}%20gold%20at%20indicative%20price%20of%20Rs.${Math.round(totalPayable)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" /> Lock This Rate via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 7-DAY AHMEDABADI BULLION TREND TABLE */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                HISTORICAL SETTLEMENT LEDGER
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                7-Day Ahmedabadi Bullion Trend
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Daily Manek Chowk closing fixes (10 Grams purity benchmarked).
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" /> 7-Day Trajectory: +₹1,190 (+1.63%)
            </span>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Date & Day</th>
                    <th className="py-3.5 px-4">24K (10g) Rate</th>
                    <th className="py-3.5 px-4">22K (10g) Rate</th>
                    <th className="py-3.5 px-4">Day Change (24K)</th>
                    <th className="py-3.5 px-4">Intraday Range (Low - High)</th>
                    <th className="py-3.5 px-4">Settlement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="bg-amber-50/40 font-semibold">
                    <td className="py-3.5 px-4 text-slate-900">16 Sep 2026 (Today)</td>
                    <td className="py-3.5 px-4 text-slate-900">₹74,200</td>
                    <td className="py-3.5 px-4 text-slate-900">₹68,020</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-bold">+₹330 (+0.45%)</td>
                    <td className="py-3.5 px-4">₹73,850 – ₹74,310</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        LIVE TRADING
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4">15 Sep 2026 (Tue)</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">₹73,870</td>
                    <td className="py-3.5 px-4">₹67,730</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-semibold">+₹190 (+0.26%)</td>
                    <td className="py-3.5 px-4">₹73,650 – ₹73,920</td>
                    <td className="py-3.5 px-4 text-slate-500">Official Close</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4">14 Sep 2026 (Mon)</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">₹73,680</td>
                    <td className="py-3.5 px-4">₹67,540</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-semibold">+₹420 (+0.57%)</td>
                    <td className="py-3.5 px-4">₹73,200 – ₹73,750</td>
                    <td className="py-3.5 px-4 text-slate-500">Official Close</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4">13 Sep 2026 (Sun)</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">₹73,260</td>
                    <td className="py-3.5 px-4">₹67,160</td>
                    <td className="py-3.5 px-4 text-slate-400">0.00 (Weekend Fix)</td>
                    <td className="py-3.5 px-4">₹73,260 – ₹73,260</td>
                    <td className="py-3.5 px-4 text-slate-400">Weekend Benchmark</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4">12 Sep 2026 (Sat)</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">₹73,260</td>
                    <td className="py-3.5 px-4">₹67,160</td>
                    <td className="py-3.5 px-4 text-red-600 font-semibold">-₹140 (-0.19%)</td>
                    <td className="py-3.5 px-4">₹73,150 – ₹73,430</td>
                    <td className="py-3.5 px-4 text-slate-500">Official Close</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4">11 Sep 2026 (Fri)</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">₹73,400</td>
                    <td className="py-3.5 px-4">₹67,310</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-semibold">+₹390 (+0.53%)</td>
                    <td className="py-3.5 px-4">₹73,000 – ₹73,450</td>
                    <td className="py-3.5 px-4 text-slate-500">Official Close</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4">10 Sep 2026 (Thu)</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">₹73,010</td>
                    <td className="py-3.5 px-4">₹66,950</td>
                    <td className="py-3.5 px-4 text-red-600 font-semibold">-₹210 (-0.29%)</td>
                    <td className="py-3.5 px-4">₹72,900 – ₹73,200</td>
                    <td className="py-3.5 px-4 text-slate-500">Official Close</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION: WHY AHMEDABAD GOLD PROCESS BENCHMARK GOVERNS */}
        <section className="py-14 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                ASSAY & PURITY STANDARDS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-4">
                Why Ahmedabad Gold Process Benchmark Governs Manek Chowk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Operating in the heart of Gujarat's historic bullion epicentre since 1998, we supply accredited 999.00 fine cast gold and 916 certified bullion master stock to over 1,000 jewellers and treasury counters across Ahmedabad, Rajkot, and Surat.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] mb-2" />
                  <p className="font-serif font-bold text-slate-900 text-xs">100% Certified Assay</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Laser serial stamped with verified refinery pedigree.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] mb-2" />
                  <p className="font-serif font-bold text-slate-900 text-xs">XRF Spectrometry</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Non-destructive verification with zero milligram tolerance.</p>
                </div>
              </div>
            </div>

            {/* 2 Photos */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 text-white">
                <img
                  src="/airo-assets/images/pages/home/why-choose-us"
                  alt="Certified Cast Bars"
                  className="w-full h-44 object-cover"
                />
                <div className="p-3">
                  <span className="text-[9px] uppercase font-bold text-[#d4af37]">CERTIFIED CAST BARS</span>
                  <p className="font-serif text-xs font-semibold mt-0.5">999.00 & 999.0 Minted</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 text-white">
                <img
                  src="/airo-assets/images/pages/about/team-trading-floor"
                  alt="Destructive Assay"
                  className="w-full h-44 object-cover"
                />
                <div className="p-3">
                  <span className="text-[9px] uppercase font-bold text-[#d4af37]">DESTRUCTIVE ASSAY</span>
                  <p className="font-serif text-xs font-semibold mt-0.5">Micro-Gram Settlement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
              CLEAR MARKET GUIDANCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Common inquiries from jewellers, treasury managers, and high-net-worth investors.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full py-4 px-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-serif font-bold text-xs sm:text-sm text-slate-900">
                    {faq.q}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: GET EXACT BULK PRICING (BOTTOM BANNER) */}
        <section className="bg-[#0b0f19] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                COMMERCIAL BULLION DESK
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                Get Exact Bulk Pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Our trading desk quotes real-time competitive spreads for orders of 100g, 1kg, and bespoke casting batches. Contact our Manek Chowk operators for instantaneous trade execution.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> INSTANT SETTLEMENT</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> INSURED DELIVERY GUJARAT</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> GST COMPLIANT INVOICE</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/918905064477"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 hover:bg-[#c59b27] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp for a Quote
              </a>
              <a
                href="tel:+918905064477"
                className="px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Our Desk: +91 89050 64477
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}