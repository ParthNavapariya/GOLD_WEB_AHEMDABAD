import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import {
  ShieldCheck, Award, CheckCircle2,
  Building2, Lock, Clock, ArrowRight, FileCheck, Check
} from 'lucide-react';

export default function AboutPage() {
  const site = 'https://ahmedabadgoldprocess.com';
  const url = `${site}/about`;

  return (
    <>
      <Helmet>
        <title>About Us — Trusted by Ahmedabad's Jewellers for Over 25 Years | Ahmedabad Gold Process</title>
        <meta
          name="description"
          content="Founded in 1998 in Manek Chowk, Ahmedabad Gold Process is Gujarat's benchmark institutional bullion refiner and gold trading desk."
        />
        <link rel="canonical" href={url} />
      </Helmet>

      <main className="bg-[#fcfbf9] text-slate-800">
        {/* HERO SECTION */}
        <section className="bg-[#0b0f19] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb & Pill */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-[#d4af37] transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-slate-200">ABOUT US</span>
              <span className="text-slate-600">•</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] font-semibold text-[11px] tracking-wider uppercase">
                OUR STORY — SINCE 1998
              </span>
            </div>

            {/* Headline and Lead paragraph */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
              <div className="lg:col-span-8">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                  Trusted by Ahmedabad's Jewellers for Over{' '}
                  <span className="font-serif italic font-normal text-[#d4af37]">25 Years.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pt-2">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  Founded in 1998 in the heart of Zaveri Bazaar & Manek Chowk, Ahmedabad Gold Process has grown from a single bullion desk to Gujarat's most respected institutional gold refiner.
                </p>
              </div>
            </div>

            {/* 4 Stat Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#121727] border border-slate-800 rounded-lg p-5 hover:border-[#d4af37]/50 transition-all">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37]">
                  FOUNDATIONAL YEAR
                </span>
                <p className="font-serif text-3xl font-bold text-white mt-1">1998</p>
                <p className="text-xs text-slate-400 mt-1">First Counter in Manek Chowk</p>
              </div>

              <div className="bg-[#121727] border border-slate-800 rounded-lg p-5 hover:border-[#d4af37]/50 transition-all">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37]">
                  ACTIVE CLIENT NETWORK
                </span>
                <p className="font-serif text-3xl font-bold text-white mt-1">1000+</p>
                <p className="text-xs text-slate-400 mt-1">Active Jeweller & Retail Clients</p>
              </div>

              <div className="bg-[#121727] border border-slate-800 rounded-lg p-5 hover:border-[#d4af37]/50 transition-all">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37]">
                  PEAK LIQUIDITY
                </span>
                <p className="font-serif text-3xl font-bold text-white mt-1">10,000+ <span className="text-base font-normal">kg</span></p>
                <p className="text-xs text-slate-400 mt-1">Bullion Cleared & Tested</p>
              </div>

              <div className="bg-[#121727] border border-slate-800 rounded-lg p-5 hover:border-[#d4af37]/50 transition-all">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37]">
                  TREASURY OPERATIONS
                </span>
                <p className="font-serif text-3xl font-bold text-white mt-1">6 Days</p>
                <p className="text-xs text-slate-400 mt-1">Active Physical Trading Desk / Wk</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: HOW WE STARTED */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <img
                  src="/airo-assets/images/pages/about/hero"
                  alt="Historic Manek Chowk Zaveri Bazaar"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-slate-900 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    ZAVERI BAZAAR 1998
                  </span>
                  <p className="font-serif text-sm font-semibold text-slate-200 mt-0.5">
                    Founded by Shri Kantilal Shah
                  </p>
                </div>
                <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                  <Building2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Old Stock Exchange Precinct — Heart of Manek Chowk Bullion Market</span>
                </div>
              </div>
            </div>

            {/* Right Story & Pillars */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#d4af37] mb-2">
                <span>HERITAGE GENESIS</span>
                <span>•</span>
                <span>EST. 1998</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                How We Started: From a Single Desk to Regional Benchmark
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Ahmedabad Gold Process was founded in 1998 by <strong>Shri Kantilal Shah</strong>, a third-generation gold trader from Zaveri Bazaar. What began as an intimate bullion trading desk serving local artisans and jewellers has grown into one of Gujarat's most respected institutions for certified metal refining, assay accuracy, and physical wholesale liquidity.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Over the past 25 years, our footprint has expanded across Ahmedabad, Surat, Vadodara, and Rajkot, servicing more than 1,000 jewellers, large corporate retailers, and institutional asset allocators. In a market where fractional variances determine fortunes, our sterling longevity rests firmly upon three unbending pillars:
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200/70">
                  <p className="font-serif font-bold text-slate-900 text-sm mb-1">Live MCX & IBJA Rates</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Real-time benchmark synchronization with complete transparent execution spreads.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200/70">
                  <p className="font-serif font-bold text-slate-900 text-sm mb-1">Fire & XRF Assay</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spectrometric exactitude resolving metal purity down to 0.01% exactitude.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200/70">
                  <p className="font-serif font-bold text-slate-900 text-sm mb-1">Generational Trust</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Assay and settlements spanning three decades of unbroken delivery commitments.
                  </p>
                </div>
              </div>

              {/* Facility Callout */}
              <div className="p-4 rounded-lg bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    OPERATIONAL INFRASTRUCTURE
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Trading floor, assay lab & insured vault under one single roof in Manek Chowk.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="px-4 py-2 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 hover:bg-[#c59b27] transition-colors shrink-0 flex items-center gap-1.5"
                >
                  Explore Facility <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: INSTITUTIONAL GOLD PROCESSING (3 PHOTOS) */}
        <section className="py-20 bg-slate-100/70 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
                  OPERATIONAL BASES
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Institutional Gold Processing Inside Manek Chowk
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                A physical overview inside our 12-pressure crucibles, robotic bullion scale suites, and high-frequency settlement terminal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Photo 1: Assay */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/airo-assets/images/pages/about/team-trading-floor"
                  alt="Certified XRF Spectrometry"
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    ASSAY & CHEMISTRY
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-lg mt-1 mb-2">
                    Certified XRF Spectrometry
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Non-destructive elemental breakdown validating karat composition within 30 seconds.
                  </p>
                </div>
              </div>

              {/* Photo 2: Casting */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/airo-assets/images/pages/services/hero"
                  alt="Homogenous Induction Casting"
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    REFINERY EXCELLENCE
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-lg mt-1 mb-2">
                    Homogenous Induction Casting
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Precision bar casting adhering to Indian Good Delivery bullion standards.
                  </p>
                </div>
              </div>

              {/* Photo 3: Vault */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/airo-assets/images/pages/home/why-choose-us"
                  alt="Two-Tiered Vault Infrastructure"
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    PHYSICAL SECURITY
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-lg mt-1 mb-2">
                    Two-Tiered Vault Infrastructure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reinforced biometric vault logs and multi-layered physical custody protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: REGULATORY CREDENTIALS & STANDARDS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
              VERIFIED & CERTIFIED
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1 mb-3">
              Regulatory Credentials & Standards
            </h2>
            <p className="text-sm text-slate-600">
              Every bullion lot, assay lot settlement, and physical delivery is governed by strict statutory compliance and institutional audit frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Laboratory Assay */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <ShieldCheck className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    PRECISION ASSAY
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                  Refinery Assay Certification
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All minted gold bars, coins, and bullion lots supplied by Ahmedabad Gold Process carry precision laboratory assay certificates, guaranteeing fineness across 999, 916, and 750 grades.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> 100% PURITY GUARANTEED
              </div>
            </div>

            {/* 2. SEBI */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    REGULATED
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                  SEBI Registered Desk
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully compliant and transactional settlement advisory and gold pooling protocol tailored to support domestic institutional allocation and hedged bullion mechanisms safely.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> FINANCIAL GOVERNANCE
              </div>
            </div>

            {/* 3. ISO */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    QUALITY AUDIT
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certified quality management framework governing chain-of-custody intake, smelting, spectrometric analysis, vault custody, and systematic batch dispatching.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> AUDITED 04/2026
              </div>
            </div>

            {/* 4. IBJA */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    MEMBER APEX
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                  IBJA Bullion Member
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active participant in the India Bullion and Jewellers Association, executing trade accordance according to national settlement benchmarks and domestic trade integrity norms.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> ACTIVE TRADE ACCORD
              </div>
            </div>

            {/* 5. GST */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <FileCheck className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    TRANSPARENCY
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                  GST Compliant Billing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  100% transparent inventory tax tracking with clear serialized bar identification on each e-way bill. Zero unaccounted formulas, zero off-book reconciliation.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> ZERO CASH TRADES
              </div>
            </div>

            {/* 6. Insured Vault */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Lock className="w-8 h-8 text-[#d4af37]" />
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    SECURE ASSET
                  </span>
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-base mb-2">
                  Insured Vault Facility
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Entire consignments and unallocated gold holdings are shielded by comprehensive underwriter policy coverage through leading Indian insurers within our Class-A physical depository.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> FULL UNDERWRITER SANCTION
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT WE STAND FOR */}
        <section className="py-20 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
                OUR PRINCIPLES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
                What We Stand For
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                In bullion trading, reputation is our actual currency. It is proven in milligram accuracy, unyielding quotes, and same-day liquidation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 01 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-2xl font-bold text-[#d4af37]">01</span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-2 mb-2">
                  Transparency
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Every bullion trade is strictly pegged to live MCX and IBJA spot quotes. No synthetic markups, no retrospective spread shifts; what you lock is what is invoiced.
                </p>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-amber-800 bg-amber-50">
                  Direct MCX Feed
                </span>
              </div>

              {/* 02 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-2xl font-bold text-[#d4af37]">02</span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-2 mb-2">
                  Precision
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Our Manek Chowk laboratory delivers purity results accurate to 0.01% via rigorous fire assay and spectrophotometry — because in precious metals, every single decimal carries value.
                </p>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-emerald-800 bg-emerald-50">
                  &gt;99.99% Fineness
                </span>
              </div>

              {/* 03 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-2xl font-bold text-[#d4af37]">03</span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-2 mb-2">
                  Trust
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Over 1,000 jeweller houses have traded continuously with our desk for more than ten years. That repeat commitment through market cycles is our most revered credential.
                </p>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-blue-800 bg-blue-50">
                  25+ Yrs Stability
                </span>
              </div>

              {/* 04 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="font-serif text-2xl font-bold text-[#d4af37]">04</span>
                <h3 className="font-serif font-bold text-slate-900 text-base mt-2 mb-2">
                  Speed
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Same-day liquidity for verified clients, instant scrap evaluation, rapid RTGS/IMPS settlement, and immediate counter handover without delay or slippage.
                </p>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-purple-800 bg-purple-50">
                  Same Day Cleared
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CONNECTING GUJARAT'S PREMIER GOLD BAZAARS */}
        <section className="bg-[#0b0f19] text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                REGIONAL REACH ACROSS GUJARAT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                Connecting Gujarat's Premier Gold Bazaars
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed mb-5">
                While our roots are anchored at Manek Chowk in Ahmedabad, our insured logistics network and daily physical settlement facilitate an integrated bullion supply platform to jeweller clusters throughout the state.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-white text-xs font-semibold">
                  • Ahmedabad (HQ)
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold">
                  • Surat
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold">
                  • Vadodara
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold">
                  • Rajkot
                </span>
              </div>
            </div>

            <div className="space-y-4 shrink-0 bg-slate-900/80 p-5 rounded-xl border border-slate-800 w-full lg:w-80">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Insured Transit Assurance</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Armored delivery vehicles with active GPS & dedicated security escorts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">11:00 AM - 8:00 PM Active Window</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Continuous order execution syncing with spot market trading hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PARTNER WITH US (BOTTOM CTA) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                TRADE INQUIRIES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
                Partner With Us
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Whether you are a jeweller sourcing bulk certified bullion, an artisan requiring precise fire assay verification, or an investor allocating a physical gold reserve, our Manek Chowk desk is ready to assist.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Direct MCX Spot</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Insured Delivery Routing</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Guaranteed 999.00 Refined Purity</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-md transition-all text-center"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-all text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
