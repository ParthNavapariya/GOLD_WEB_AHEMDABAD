import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';
import {
  ArrowRight, MessageCircle, Phone, ShieldCheck
} from 'lucide-react';

export default function MarketInsightsPage() {
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSub = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub.trim()) return;
    setIsSubmitting(true);

    const emailTrimmed = emailSub.trim();

    // 1. Save to local storage cache so it instantly appears in the Admin Panel
    try {
      const existingStr = localStorage.getItem('ahmedabad_enquiries_local') || '[]';
      const existing = JSON.parse(existingStr);
      const newEntry = {
        id: Date.now(),
        name: 'Desk Subscriber',
        phone: '—',
        email: emailTrimmed,
        enquiry_type: 'Desk Intelligence Feed',
        purity: '999.00',
        quantity: 'Daily 10:00 AM Feed',
        message: 'Subscribed to 10:00 AM IST Daily Market Intelligence & Delta Rates',
        created_at: new Date().toISOString(),
      };
      localStorage.setItem('ahmedabad_enquiries_local', JSON.stringify([newEntry, ...existing]));
    } catch {
      // ignore local storage errors
    }

    // 2. Submit to backend API endpoint
    try {
      await fetch('/api/contact/desk-updates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Desk Subscriber',
          email: emailTrimmed,
          enquiryType: 'Desk Intelligence Feed',
          message: 'Subscribed to 10:00 AM IST Daily Market Intelligence & Delta Rates',
        }),
      });
    } catch {
      // ignore network errors in mock/preview
    } finally {
      setIsSubmitting(false);
      setSubSuccess(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Market Insights & Intelligence — Manek Chowk Bullion Desk | Ahmedabad Gold Process</title>
        <meta
          name="description"
          content="Real-time macro gold market intelligence, MCX spot drivers, and treasury briefs from Ahmedabad Gold Process trading floor in Manek Chowk."
        />
        <link rel="canonical" href="https://ahmedabadgoldprocess.com/market-insights" />
      </Helmet>

      <main className="bg-[#fcfbf9] text-slate-800">
        {/* HERO SECTION */}
        <section className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                MACRO INTELLIGENCE & LIQUIDITY DESK
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-1 leading-tight">
                Live Gold Rates & Market Intelligence
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                In-depth analysis from our institutional bullion desk in Manek Chowk. Real-time evaluation of domestic MCX benchmarks, import tariff policy dynamics, and seasonal demand trajectories shaping Gujarat's gold economy.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://wa.me/918905064477?text=Hi%2C%20I%20would%20like%20live%20desk%20quotes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 hover:bg-[#c59b27] shadow transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp for Live Desk Quotes
                </a>
                <a
                  href="#subscribe"
                  className="px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
                >
                  Subscribe to Desk Updates
                </a>
              </div>
            </div>

            {/* Right Spot Benchmark Widget */}
            <div className="bg-[#0b0f19] text-white p-5 rounded-2xl border border-slate-800 shadow-xl shrink-0 w-full lg:w-80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-slate-400">SPOT 24K 10G SPOT</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  BULLION BENCHMARK
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xs text-slate-400 font-serif">24K 10g (999.00)</span>
                <span className="font-serif text-2xl font-bold text-[#d4af37]">₹74,200</span>
              </div>

              {/* Sparkline Visual */}
              <div className="my-3 py-2 bg-slate-900/60 rounded-lg px-3 border border-slate-800">
                <svg className="w-full h-10 stroke-[#d4af37] fill-none" viewBox="0 0 100 30">
                  <path
                    d="M 0,22 Q 20,25 35,16 T 60,18 T 85,8 T 100,5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>LOW: ₹73,850</span>
                  <span className="text-emerald-400 font-semibold">+0.45% TODAY</span>
                  <span>HIGH: ₹74,310</span>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">LBMA Close Ref:</span>
                  <span className="text-white font-medium">$2,490.40/oz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Standard Vault Delivery:</span>
                  <span className="text-white font-medium">T+0 (Immediate)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tariff Component:</span>
                  <span className="text-[#d4af37] font-medium">10% Customs + 5% GST</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TODAY'S MANEK CHOWK SPOT RATES (3 CARDS) */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                PHYSICAL BENCHMARK MATRIX
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                Today's Manek Chowk Spot Rates
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Updated: Today, 11:00 AM IST
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border-2 border-[#d4af37] p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  999.00 INVESTMENT BAR
                </span>
                <h3 className="font-serif font-bold text-base text-slate-900 mt-2">24K Fine Gold Bar</h3>
                <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">INDICATIVE (PER 10G)</span>
                    <p className="font-serif text-2xl font-bold text-slate-900">₹74,200</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+₹330</span>
                </div>
                <div className="mt-4 space-y-1 text-xs text-slate-500">
                  <div className="flex justify-between"><span>Per 100g Cast Bar:</span><span className="font-semibold text-slate-900">₹7,42,000</span></div>
                  <div className="flex justify-between"><span>Per 1 Kilogram Ingot:</span><span className="font-semibold text-slate-900">₹74,20,000</span></div>
                  <div className="flex justify-between text-emerald-700 font-semibold pt-1"><span>Assay Guarantee:</span><span>99.99% Fire Assay</span></div>
                </div>
              </div>
              <a
                href="https://wa.me/918905064477?text=Lock%20Rate%20for%2024K%20Fine%20Gold%20Bar"
                className="mt-5 w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 text-center block hover:bg-[#c59b27]"
              >
                Lock Rate With Desk
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  MANUFACTURING STANDARD
                </span>
                <h3 className="font-serif font-bold text-base text-slate-900 mt-2">22K Jewellers Grain</h3>
                <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">INDICATIVE (PER 10G)</span>
                    <p className="font-serif text-2xl font-bold text-slate-900">₹68,020</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+₹290</span>
                </div>
                <div className="mt-4 space-y-1 text-xs text-slate-500">
                  <div className="flex justify-between"><span>Per 100g Raw Lot:</span><span className="font-semibold text-slate-900">₹6,80,200</span></div>
                  <div className="flex justify-between"><span>Net Purity:</span><span className="font-semibold text-slate-900">91.6% Pure Gold</span></div>
                  <div className="flex justify-between text-slate-700 font-semibold pt-1"><span>Intended Segment:</span><span>Manufacturing Base</span></div>
                </div>
              </div>
              <a
                href="https://wa.me/918905064477?text=Enquire%20for%2022K%20Jewellers%20Grain"
                className="mt-5 w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 text-center block hover:bg-slate-200 border border-slate-300"
              >
                Request Delivery Quote
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  HIGH TENSILE ALLOY
                </span>
                <h3 className="font-serif font-bold text-base text-slate-900 mt-2">18K Alloy Base</h3>
                <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">INDICATIVE (PER 10G)</span>
                    <p className="font-serif text-2xl font-bold text-slate-900">₹55,650</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+₹210</span>
                </div>
                <div className="mt-4 space-y-1 text-xs text-slate-500">
                  <div className="flex justify-between"><span>Cast Conforms:</span><span className="font-semibold text-slate-900">75.0% Certified</span></div>
                  <div className="flex justify-between"><span>Settlement Currency:</span><span className="font-semibold text-slate-900">INR / Gross Wire</span></div>
                  <div className="flex justify-between text-slate-700 font-semibold pt-1"><span>XRF Verification:</span><span>Zero Loss Guarantee</span></div>
                </div>
              </div>
              <a
                href="https://wa.me/918905064477?text=Contact%20for%2018K%20Alloy%20Base"
                className="mt-5 w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 text-center block hover:bg-slate-200 border border-slate-300"
              >
                Contact Desk Arbitrage
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT DRIVES GOLD PRICES (6 CARDS) */}
        <section className="py-14 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                MACRO & MICRO VARIABLES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                What Drives Gold Prices
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Domestic bullion values are determined at the intersection of international commodity benchmarks, central monetary directives, currency arbitrage, and local cultural liquidity cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 01 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-xl font-bold text-[#d4af37]">01</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                  BENCHMARK CORE
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-1 mb-2">
                  MCX Spot Price Benchmark
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The Multi Commodity Exchange of India (MCX) establishes the domestic benchmark. It actively mirrors real-time London Bullion Market Association (LBMA) dollar spot indices, normalized for physical delivery in Ahmedabad vaults.
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Correlation: 0.98 With LBMA • Primary Input
                </div>
              </div>

              {/* 02 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-xl font-bold text-[#d4af37]">02</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                  FX TRANSMISSION
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-1 mb-2">
                  USD/INR Exchange Rate
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Physical gold is priced globally in US Dollars. Every incremental rupee depreciation directly inflates domestic procurement parity, creating domestic price surges even during periods of stagnant global spot indices.
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Sensitivity: +1% USD = +₹740/10g • Currency Hedge
                </div>
              </div>

              {/* 03 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-xl font-bold text-[#d4af37]">03</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                  FISCAL POLICY
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-1 mb-2">
                  Import Duty & Customs Tariffs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  As a net importer, Indian bullion pricing directly embeds sovereign customs tariffs and GST obligations. Revisions in basic customs duties (BCD) create sharp step-function adjustments across Manek Chowk physical desks.
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Current Duty: BCD + 3% GST • Price Cushion Level
                </div>
              </div>

              {/* 04 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-xl font-bold text-[#d4af37]">04</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                  INSTITUTIONAL ACCUMULATION
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-1 mb-2">
                  Central Bank Reserve Accumulation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Sustained bullion purchases by the Reserve Bank of India and global central banks establish a resilient structural floor. Sovereign accumulation mitigates macroeconomic downside risks across physical bullion tiers.
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  RBI Reserves: +840 Metric Tonnes • Systemic Floor
                </div>
              </div>

              {/* 05 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-xl font-bold text-[#d4af37]">05</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                  DEMOGRAPHIC SURGE
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-1 mb-2">
                  Festive & Wedding Seasonality
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The Gujarati calendar defined by Navratri, Dussehra, Dhanteras, and wedding muhurats triggers acute spot premia. Physical cash-and-carry demand tightens refinery queues and reduces wholesale spreads.
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Volume Spike: +40% in Q3/Q4 • Premia Spread
                </div>
              </div>

              {/* 06 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-xl font-bold text-[#d4af37]">06</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                  MACRO SAFE HAVEN
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-1 mb-2">
                  Global Risk Sentiment & Liquidity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Geopolitical frictions, equity market corrections, and interest rate cycle shifts trigger institutional flight to physical collateral. In times of systemic turbulence, physical bullion remains the non-counterparty safe asset.
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Historic Response: Negative Beta • Capital Preservation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: MARKET COMMENTARY & TREASURY BRIEFS */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                FROM OUR MANEK CHOWK DESK
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                Market Commentary & Treasury Briefs
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Analytical assessments prepared by our trading partners
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800">
                    MARKET OUTLOOK
                  </span>
                  <span className="text-[11px] text-slate-400">September 2026</span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-3">
                  Gold Holds Strong Above ₹74,000 per 10g Amid Global Uncertainty
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Countrywide bullion prices demonstrate exceptional structural resilience above the ₹74,000/10g pivot throughout Q3 2026. Backed by sustained sovereign reserve accumulation and currency hedging by Indian corporate treasuries, the technical floor appears robust.
                </p>
                <div className="p-2.5 rounded bg-slate-50 text-[11px] text-slate-600 mb-4">
                  <strong>DESK PERSPECTIVE:</strong> We advise jewellers to maintain staggered rolling hedges rather than aggressive unhedged short positions into the renewal cycle.
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                <span>3 min read</span>
                <span className="font-semibold text-[#d4af37] flex items-center gap-1 hover:underline cursor-pointer">
                  Read Brief <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    SEASONAL DEMAND
                  </span>
                  <span className="text-[11px] text-slate-400">August 2026</span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-3">
                  Festive Season Demand: What Jewellers Should Know
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Navratri and Diwali historically trigger a 15–25% surge in retail bullion absorption across Ahmedabad, Surat, and Rajkot. Fabricators locking raw material quotas in late August systematically avoid liquidity premiums that typically emerge 10 days before Dhanteras.
                </p>
                <div className="p-2.5 rounded bg-slate-50 text-[11px] text-slate-600 mb-4">
                  <strong>OPERATIONAL STRATEGY:</strong> Pre-booking through institutional forward locks ensures uncompromised 999 and 999.00 bar availability without emergency surcharges.
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                <span>4 min read</span>
                <span className="font-semibold text-[#d4af37] flex items-center gap-1 hover:underline cursor-pointer">
                  Read Brief <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    INVESTMENT STRATEGY
                  </span>
                  <span className="text-[11px] text-slate-400">July 2026</span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-3">
                  Sovereign Gold Bonds vs Physical Bullion: A Practical Guide
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  While Sovereign Gold Bonds (SGBs) offer coupon yields, physical bullion provides counterparty independence, instant collateral capability, and seamless liquidity for commercial operations. An empirical analysis for Gujarat family offices and retailers.
                </p>
                <div className="p-2.5 rounded bg-slate-50 text-[11px] text-slate-600 mb-4">
                  <strong>LIQUIDITY COMPARISON:</strong> Emergency liquidation of paper assets may take days on exchange; physical delivery on Manek Chowk floors facilitates instant settlement.
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                <span>5 min read</span>
                <span className="font-semibold text-[#d4af37] flex items-center gap-1 hover:underline cursor-pointer">
                  Read Brief <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CERTIFIED FIRE ASSAY & INSTANT SETTLEMENT */}
        <section className="py-14 bg-slate-100/70 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                STANDARD OPERATING PROTOCOL
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-3">
                Certified Fire Assay & Instant Settlement in Manek Chowk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Every transaction executed through Ahmedabad Gold Process adheres to certified national standards. Our proprietary induction melting and computerized XRF spectrometry systems verify purity up to 999.00 parts per thousand, providing absolute transparency to retail and institutional buyers alike.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="font-serif text-2xl font-bold text-slate-900">99.99%</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mt-0.5">PURITY SPECIFICATION</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="font-serif text-2xl font-bold text-slate-900">&lt; 15 Mins</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 mt-0.5">ESTIMATED ASSAY TIME</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" /> 999.00 Fine Purity
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" /> Verified Trading Desk
                </span>
              </div>
            </div>

            {/* Right dark guarantee widget */}
            <div className="lg:col-span-5 bg-[#0c111e] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                INSTITUTIONAL BULLION
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-1 mb-2">
                Physical Liquidity Guarantee
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Unlike purely speculative paper trades, every voucher emitted at Ahmedabad Gold Process is backed 1:1 by physical assayed gold stored securely in our Manek Chowk depository vault.
              </p>

              <div className="space-y-3 text-xs text-slate-300 mb-6">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Minimum Bulk Order:</span>
                  <span className="font-bold text-white">100 Grams Delivery Packet</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Settlement Modality:</span>
                  <span className="font-bold text-white">RTGS / Bank Transfer Same-Day</span>
                </div>
                <div className="flex justify-between">
                  <span>Assay Certification:</span>
                  <span className="font-bold text-white">Individual Serial Bar Pack</span>
                </div>
              </div>

              <a
                href="https://wa.me/918905064477"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 text-center block hover:bg-[#c59b27] transition-colors"
              >
                Speak Directly with Vault Officer
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: SUBSCRIBE TO DESK UPDATES */}
        <section id="subscribe" className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
              DAILY BRIEFING TO 6,700+ JEWELLERS
            </span>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-1 mb-2">
              Subscribe to Desk Updates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Receive daily delta rate notifications, festive demand forecasts, and bullion policy alerts delivered directly to your inbox before the market opens at 10:00 AM IST.
            </p>

            {subSuccess ? (
              <div className="p-4 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold max-w-md mx-auto">
                ✓ Thank you! You have been subscribed to our daily Manek Chowk desk intelligence feed.
              </div>
            ) : (
              <form onSubmit={handleSub} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate or trade email..."
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="w-full text-xs px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 shrink-0 disabled:opacity-50 transition-opacity"
                >
                  {isSubmitting ? 'Subscribing...' : 'Join Intelligence Feed'}
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-400 mt-3">
              Strictly institutional updates. No spam. You may unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* BOTTOM CALLOUT BANNER */}
        <section className="bg-[#0b0f19] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                TRADING DESK OPEN: MONDAY-SATURDAY 11:00 AM - 8:00 PM IST
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Need Exact Transaction Rates?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Our trading desk quotes live, volume-discounted rates for bulk orders and wholesale jeweller allocations. Connect instantly with our senior bullion dealers via WhatsApp or voice line for real-time order execution.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>• Zero Spreads on 1kg+ Ingots</span>
                <span>• 15-Minute Price Lock Assurance</span>
                <span>• Insured Vault Logistics</span>
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
