import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import {
  TrendingUp, ShieldCheck, Award, CheckCircle2,
  MessageCircle, ArrowRight, Lock, ChevronRight
} from 'lucide-react';

interface LiveRate {
  purity: string;
  label: string;
  perGram: number;
  per10g: number;
  change: number;
}

export default function HomePage() {
  const site = 'https://ahmedabadgoldprocess.com';

  const [liveRates, setLiveRates] = useState<LiveRate[]>([
    { purity: '24K', label: '24 Karat (999.00)', perGram: 7420, per10g: 74200, change: 45 },
    { purity: '22K', label: '22 Karat (916)', perGram: 6802, per10g: 68020, change: 41 },
    { purity: '18K', label: '18 Karat (750)', perGram: 5565, per10g: 55650, change: 34 },
  ]);

  useEffect(() => {
    fetch('/api/gold-rates')
      .then((r) => r.json())
      .then((res) => {
        if (res.success && res.data?.rates) {
          setLiveRates(res.data.rates);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Helmet>
        <title>Ahmedabad Gold Process — Trusted Bullion Dealer & Gold Refinery in Manek Chowk</title>
        <meta
          name="description"
          content="Gujarat's premier institutional bullion refiner. Live MCX gold rates, certified 999.00 24K bars, minted coins, and precision assay in Manek Chowk."
        />
        <link rel="canonical" href={site} />
      </Helmet>

      <main className="bg-[#fcfbf9] text-slate-800">
        {/* HERO SECTION */}
        <section className="bg-[#0b0f19] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
          {/* Subtle gold glow overlay */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  MANEK CHOWK BULLION BENCHMARK • EST. 1998
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                  Ahmedabad's Trusted Gold Trading &{' '}
                  <span className="font-serif italic font-normal text-[#d4af37]">Refining Partner</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-xl font-light leading-relaxed">
                  Bulk bullion supply for jewellers, retailers, and treasury managers. Transparent MCX-pegged pricing, certified 999.00 purity, and three decades of unbroken trust.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Link
                    to="/gold-rates"
                    className="px-6 py-3 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center gap-2"
                  >
                    Check Today's Rates <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/918905064477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#d4af37]" /> WhatsApp Desk
                  </a>
                </div>

                {/* 3 Trust Badges */}
                <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" /> Certified Gold
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <Award className="w-4 h-4 text-[#d4af37]" /> 25 Years of Trust
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" /> 1000+ Jeweller Clients
                  </span>
                </div>
              </div>

              {/* Right Bullion Live Card */}
              <div className="lg:col-span-5 bg-[#101524] p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      LIVE BENCHMARK
                    </span>
                    <h3 className="font-serif text-base font-bold text-white">Physical Spot Matrix</h3>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    OPEN TRADING
                  </span>
                </div>

                {/* 3 Rates */}
                <div className="space-y-3">
                  {liveRates.map((r) => (
                    <div
                      key={r.purity}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-[#d4af37]/40 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-slate-200 uppercase">{r.purity} Gold</span>
                        <p className="text-[10px] text-slate-400">{r.label}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-lg font-bold text-white">
                          ₹{r.per10g.toLocaleString('en-IN')}
                        </p>
                        <p className="text-[10px] text-slate-400">₹{r.perGram.toLocaleString('en-IN')}/g</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Excl. 3% GST • Delivered Ahmedabad</span>
                  <Link to="/gold-rates" className="font-bold text-[#d4af37] hover:underline flex items-center gap-1">
                    Full Board <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 4 KEY METRICS */}
        <section className="py-8 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl font-extrabold text-slate-900">1998</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">ESTABLISHED YEAR</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-extrabold text-[#d4af37]">500+</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">JEWELLER HOUSES</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-extrabold text-slate-900">10,000+ kg</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">BULLION CLEARED</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-extrabold text-emerald-600">0.01%</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">ASSAY ACCURACY</p>
            </div>
          </div>
        </section>

        {/* SECTION: REFINING & PRODUCTS SHOWCASE */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                CORE CAPABILITIES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Refining, Testing & Bullion Products
              </h2>
            </div>
            <Link to="/products" className="text-xs font-bold text-[#d4af37] hover:underline flex items-center gap-1">
              View All Products & Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: 10g Bar */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <img
                  src="/airo-assets/images/pages/home/hero"
                  alt="Gold Bars"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    BULLION CAST BARS
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mt-2">
                    Investment Gold Bars (1g to 1kg)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Accredited 999.00 purity cast bars and vacuum-sealed certicards stamped with unique serial numbers.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/products"
                  className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 text-center block hover:bg-[#c59b27] transition-colors"
                >
                  Explore Gold Bars
                </Link>
              </div>
            </div>

            {/* Card 2: Refining */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <img
                  src="/airo-assets/images/pages/services/hero"
                  alt="Induction Refining"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    MELTING & ASSAY
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mt-2">
                    Induction Refining & Fire Assay
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Homogenous induction melting of scrap gold lots with rapid 30-second XRF verification and 0.01% cupellation.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/services"
                  className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 text-center block transition-colors"
                >
                  Explore Refining
                </Link>
              </div>
            </div>

            {/* Card 3: Minted Coins */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <img
                  src="/airo-assets/images/pages/home/gold-bars-coins"
                  alt="Minted Gold Coins"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    MINTED COINS
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mt-2">
                    Minted Gold Coins (1g to 50g)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Mirror-finish 24K and 22K coins optimal for wedding muhurats, corporate rewards, and auspicious shagun.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/products"
                  className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 text-center block transition-colors"
                >
                  Explore Coins
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WHY CHOOSE US (HERITAGE & CREDENTIALS) */}
        <section className="py-16 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                THE BENCHMARK STANDARD
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1 mb-4 leading-tight">
                Operating in the Heart of Manek Chowk Since 1998
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Zaveri Bazaar and Manek Chowk have stood as Western India's gold epicenter for generations. Ahmedabad Gold Process bridges this traditional bazaar integrity with modern spectrometric science, providing certified liquidity to over 1,000 jeweller clients.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Refinery Assay & Laser Serial</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Precision laboratory assay pedigree guaranteeing 999, 916 and 750 standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                  <TrendingUp className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Direct Live MCX Pegging</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Real-time spot ticks with zero retrospective spread widening on trade executions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                  <Lock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Insured Vault & Same-Day RTGS</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Instant counter liquidation and armored courier dispatch across Gujarat.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <img
                  src="/airo-assets/images/pages/home/why-choose-us"
                  alt="Ahmedabad Gold Process Vault"
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 bg-[#0b0f19] text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                      MANEK CHOWK VAULT
                    </span>
                    <p className="font-serif text-sm font-semibold mt-0.5">
                      Class-A Physical Depository & Assay Floor
                    </p>
                  </div>
                  <Link
                    to="/about"
                    className="px-3.5 py-1.5 rounded text-xs font-bold uppercase bg-[#d4af37] text-slate-950 hover:bg-[#c59b27] transition-colors"
                  >
                    Our Story →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CALLOUT */}
        <section className="bg-[#0b0f19] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                DIRECT INSTITUTIONAL DESK
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Book Live MCX Rates Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Execute physical bullion orders directly with our Manek Chowk floor. WhatsApp us for 60-second price locks or visit our trading counter.
              </p>
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
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                Visit Our Counter <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}