import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useState } from 'react';
import {
  TrendingUp, Coins, FlaskConical, Repeat, Landmark, PieChart,
  CheckCircle2, ShieldCheck, Download, MessageCircle, ArrowRight,
  Phone, Lock, FileText, Zap
} from 'lucide-react';

export default function ServicesPage() {
  const site = 'https://ahmedabadgoldprocess.com';
  const url = `${site}/services`;

  // Interactive Calculator State
  const [selectedRate, setSelectedRate] = useState<number>(7420);
  const [selectedPurityLabel, setSelectedPurityLabel] = useState<string>('24K (999.00 Fine Bullion)');
  const [weight, setWeight] = useState<number>(100);

  const calculatedTotal = weight * selectedRate;

  const quickSizes = [
    { label: '10g', val: 10 },
    { label: '50g', val: 50 },
    { label: '100g', val: 100 },
    { label: '500g', val: 500 },
    { label: '1Kg (1,000g)', val: 1000 },
  ];

  const servicesList = [
    {
      num: '01',
      tag: 'PHYSICAL BULLION SUPPLY',
      icon: TrendingUp,
      title: 'Bullion Trading',
      desc: 'Buy and sell bullion at live MCX/IBJA market rates with absolute transparency. Structured for rapid execution whether procuring 10 grams or 10 kilograms.',
      bullets: [
        'Live MCX gold rate pricing directly linked to market feed',
        'Bulk order volume discounts for regional jewellery houses',
        'Same day settlement guarantee for RTGS verified settlements',
        'Full documentation, serialised bars, and GST compliant',
      ],
      linkText: 'Require Bullion Rates',
      linkHref: '/gold-rates',
    },
    {
      num: '02',
      tag: 'LEGAL TENDER & MINT',
      icon: Coins,
      title: 'Gold Bars & Coins',
      desc: 'Premium 24K (999.00) and 22K (916) certified gold minted in standardised investor denominations, packaged with tamper-proof certicards.',
      bullets: [
        '1g, 2g, 5g, 10g, 20g, 50g, 100g, 500g, 1kg bar availability',
        'Individually serialized assay certicards',
        'Refinery direct sourcing from accredited refiners',
        'Custom blister pack packaging for retail and festive gifting',
      ],
      linkText: 'View Minted Catalog',
      linkHref: '/products',
    },
    {
      num: '03',
      tag: 'FIRE ASSAY & SPECTRO',
      icon: FlaskConical,
      title: 'Purity Testing Lab',
      desc: 'State-of-the-art laboratory using non-destructive XRF spectrometry and classic fire assay for exact karat calculation and dispute settlement.',
      bullets: [
        'Non-destructive precision XRF spectrometry analysis',
        'Traditional cupellation fire assay to 0.001% accuracy',
        'Accredited laboratory calculated purity certificates',
        'Expedited 20-minute turn around for walk-in testing',
      ],
      linkText: 'Book Lab Testing',
      linkHref: '/contact',
    },
    {
      num: '04',
      tag: 'IMMEDIATE LIQUIDITY',
      icon: Repeat,
      title: 'Buy / Sell Gold Desk',
      desc: 'Convert old jewellery, refinery scrap, or bullion bars into instantaneous liquidity with zero hidden deductions or melting fees.',
      bullets: [
        'Spot valuation based squarely on the second-live MCX fees',
        'Accepts broken jewelry, bench gold, melt scrap, and bars',
        'Immediate disbursement via RTGS / NEFT / IMPS or cash limit',
        '100% transparent digital scale weighing in front of client',
      ],
      linkText: 'Get Spot Liquidation',
      linkHref: '/contact',
    },
    {
      num: '05',
      tag: 'CAPITAL FINANCING',
      icon: Landmark,
      title: 'Gold Lease Facility',
      desc: 'Bullion-backed capital providing working requirements without liquidating primary metal reserves. Ideal for high-security vaulted vault storage.',
      bullets: [
        'Up to 80% loan-to-value (LTV) on verified 24K/22K holdings',
        'Highly competitive institutional interest rates for jewellers',
        '100% insured vault depository inside Manek Chowk facility',
        'Flexible repayment and tenure terms ranging 3 to 24 months',
      ],
      linkText: 'Calculate Loan LTV',
      linkHref: '/gold-rates',
    },
    {
      num: '06',
      tag: 'PORTFOLIO ALLOCATION',
      icon: PieChart,
      title: 'Investment & Advisory',
      desc: 'Strategic accumulation architectures designed to hedge inflation, manage gold risk, and systematically average bullion entry prices.',
      bullets: [
        'Disciplined monthly bullion accumulation plans starting at ₹5,000',
        'Sovereign Gold Bond (SGB) secondary market navigation',
        'Goal-LTV advisory to physical conversion pathways',
        'Portfolio balancing consultations for high-net-worth clients',
      ],
      linkText: 'Start Gold SIP',
      linkHref: '/products',
    },
  ];

  const steps = [
    {
      num: '01',
      step: 'STEP 01',
      title: 'Live Quote Lock-In',
      desc: 'Connect via trading phone line or WhatsApp counter to fix spot rate pricing directly linked to real-time MCX bullion contracts.',
      badge: 'Price fixed for 30 min',
      icon: Lock,
    },
    {
      num: '02',
      step: 'STEP 02',
      title: 'Assay & Verification',
      desc: 'Physical weight check on dual-calibrated scales followed by non-destructive XRF spectroanalysis in the client\'s presence.',
      badge: '999.00 Purity Verified',
      icon: ShieldCheck,
    },
    {
      num: '03',
      step: 'STEP 03',
      title: 'Invoicing & GST',
      desc: 'Issuance of tax-compliant GST e-invoices with clear serial numbers, bar codes, and purity assay metrics stamped.',
      badge: '100% Tax Compliant',
      icon: FileText,
    },
    {
      num: '04',
      step: 'STEP 04',
      title: 'Same-Day Settlement',
      desc: 'Direct disbursement of bullion bars or instantaneous collateral remittance via RTGS straight into your primary business account.',
      badge: 'T+0 Instant Settlement',
      icon: Zap,
    },
  ];

  const handlePurityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = Number(e.target.value);
    setSelectedRate(val);
    if (val === 7420) setSelectedPurityLabel('24K (999.00 Fine Bullion)');
    else if (val === 6802) setSelectedPurityLabel('22K (916 Jewellers Gold)');
    else setSelectedPurityLabel('18K (750 Alloy Standard)');
  };

  return (
    <>
      <Helmet>
        <title>Comprehensive Gold Trading & Assaying Services — Ahmedabad Gold Process</title>
        <meta
          name="description"
          content="From bulk bullion supply to certified fire assay and structured institutional liquidity — everything a jeweller, family office, or investor needs in Manek Chowk."
        />
        <link rel="canonical" href={url} />
      </Helmet>

      <main className="bg-[#fcfbf9] text-slate-800 antialiased">
        {/* =========================================================
            HERO SECTION (Light Luxury Canvas matching Stitch Screenshot)
        ========================================================= */}
        <section className="pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-[#fdfcf9]">
          <div className="max-w-7xl mx-auto">
            {/* Top Breadcrumb & Tag */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-6">
              <Link to="/" className="hover:text-[#b38a19] transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-slate-800 font-medium">SERVICES</span>
              <span className="text-slate-400">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3e5ab]/30 border border-[#d4af37]/30 text-[#8a6808] font-semibold text-[11px] tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                TRUST, FINE BULLION & PRECISION ASSAY LAB SOLUTIONS
              </span>
            </div>

            {/* Title & Action Buttons Row */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
              <div className="max-w-3xl">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                  Comprehensive Gold Trading & Assaying Services
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal max-w-2xl">
                  From bulk bullion supply to certified fire assay and structured institutional liquidity — everything a jeweller, family office, or investor needs under one dedicated roof in Old Ahmedabad.
                </p>
              </div>

              {/* Top CTAs */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-64">
                <a
                  href="https://wa.me/918905064477?text=Hi%2C%20I%20would%20like%20to%20enquire%20with%20your%20trading%20desk%20about%20bullion%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-md shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire With Desk
                </a>
                <a
                  href="#calculator"
                  className="px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-slate-500" /> Download Services & Rates
                </a>
              </div>
            </div>

            {/* 4 Feature Value Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                  SETTLEMENT SPEED
                </span>
                <span className="font-serif text-lg font-bold text-slate-900 mt-1">
                  T+0 Same-Day
                </span>
                <span className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  RTGS / Cash Bullion
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                  ASSAY PRECISION
                </span>
                <span className="font-serif text-lg font-bold text-slate-900 mt-1">
                  99.99% Fine
                </span>
                <span className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  Accredited Assay Labs
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                  MARKET PRICE
                </span>
                <span className="font-serif text-lg font-bold text-slate-900 mt-1">
                  MCX / IBJA
                </span>
                <span className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Zero Risk Spread/Direct
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                  HEIST INDEMNITY
                </span>
                <span className="font-serif text-lg font-bold text-slate-900 mt-1">
                  100% Insured
                </span>
                <span className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Brinks-Certified Vaults
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 1: CAPABILITIES OVERVIEW (6 Cards Grid)
        ========================================================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a6808] block mb-1">
                CAPABILITIES OVERVIEW
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Institutional & Retail Solutions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-light leading-relaxed">
              Structured execution, zero-spread opacity, and laboratory-grade validation for jewellers and treasury allocators across Western India.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.num}
                  className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Number & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif text-xl font-bold text-[#b38a19]">
                        {svc.num}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[9px] font-bold tracking-wider text-slate-600 uppercase border border-slate-200">
                        {svc.tag}
                      </span>
                    </div>

                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-center mb-5 text-[#8a6808]">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Title & Desc */}
                    <h3 className="font-serif font-bold text-xl text-slate-900 mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                      {svc.desc}
                    </p>

                    {/* 4 Bullets */}
                    <div className="space-y-2.5 text-xs text-slate-700 pt-5 border-t border-slate-100">
                      {svc.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug text-slate-600">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={svc.linkHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#b38a19] transition-colors"
                    >
                      <span>{svc.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            SECTION 2: ASSAY PRECISION & INTEGRITY (2 Columns with Lab Photo)
        ========================================================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 aspect-4/3 relative bg-slate-900">
                <img
                  src="/airo-assets/images/pages/services/hero"
                  alt="Institutional Gold Testing Laboratory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      Precision Assay Centre
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Spectrometry carousel that examines raw alloy and guarantees non-destructive elemental analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#8a6808] font-bold text-[10px] tracking-widest uppercase mb-3">
                ASSAY PRECISION & INTEGRITY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Institutional Laboratory Standards for Gujarat's Leading Jewelers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-8">
                Every transaction conducted through Ahmedabad Gold Process adheres to uncompromising bullion verification protocols. Our in-house assayers have certified over 2.5 million grams of gold since 1998, offering retailers guaranteed purity authentication recognized by bullion banks and national regulators.
              </p>

              {/* 2 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#8a6808] mb-3">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                    Non-Destructive Testing
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spectrometry assesses fine metal composition without scraping, melting, or damaging precious jewellery specimens.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#8a6808] mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-slate-900 mb-1">
                    100% Insured Logistics
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Doorstep transit available across Ahmedabad and that of trusted courier hand-assets across Saurashtra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: MANEK CHOWK EXECUTION (4 Steps Protocol)
        ========================================================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a6808] block mb-1">
              MANEK CHOWK EXECUTION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              How We Work With Jewellers & Traders
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
              Our four-phase trade protocol guarantees pricing certainty, audited metrics, and rapid settlement with zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-serif font-bold text-base flex items-center justify-center mb-4">
                    {st.num}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a6808] block mb-1">
                    {st.step}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-[10px] font-semibold text-slate-700">
                    <st.icon className="w-3 h-3 text-[#b38a19]" />
                    {st.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 4: MARKET ESTIMATION (Trade Volume Calculator)
        ========================================================= */}
        <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Context & Benchmarks */}
              <div className="lg:col-span-5">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#8a6808] font-bold text-[10px] tracking-widest uppercase mb-3">
                  MARKET ESTIMATION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                  Trade Volume Calculator
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Calculate Trade Contract bar/coin denominations based on today's reference bullion benchmarks. For exact spot locking, call the counter directly.
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Indicative 24K Benchmark:</span>
                    <span className="font-bold font-mono text-slate-900">₹7,420 / gram</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Indicative 22K Benchmark:</span>
                    <span className="font-bold font-mono text-slate-900">₹6,802 / gram</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Form */}
              <div className="lg:col-span-7 bg-[#fbfaf8] p-6 sm:p-7 rounded-2xl border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {/* Select Purity */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      SELECT PURITY GRADE
                    </label>
                    <select
                      value={selectedRate}
                      onChange={handlePurityChange}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    >
                      <option value={7420}>24K (999.00 Fine Bullion) — ₹7,420/g</option>
                      <option value={6802}>22K (916 Jewellers Gold) — ₹6,802/g</option>
                      <option value={5565}>18K (750 Alloy Standard) — ₹5,565/g</option>
                    </select>
                  </div>

                  {/* Weight Quantity */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      WEIGHT QUANTITY (GRAMS)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="50000"
                        value={weight || ''}
                        onChange={(e) => setWeight(Number(e.target.value) || 0)}
                        className="w-full bg-white border border-slate-300 rounded-lg pl-3 pr-12 py-2.5 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                      <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium">
                        Gms
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Sizing Chips */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Quick Sizing:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {quickSizes.map((qs) => (
                      <button
                        key={qs.label}
                        type="button"
                        onClick={() => setWeight(qs.val)}
                        className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                          weight === qs.val
                            ? 'bg-[#d4af37] text-slate-950 font-bold shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {qs.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Black Results Slip Banner */}
                <div className="bg-[#0b0f19] p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">
                      ESTIMATED VALUATION (EXCL. GST)
                    </span>
                    <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                      ₹{calculatedTotal.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/918905064477?text=Hi%2C%20I%20want%20to%20lock%20rate%20for%20${weight}g%20of%20${encodeURIComponent(selectedPurityLabel)}%20at%20indicative%20valuation%20of%20%E2%82%B9${calculatedTotal.toLocaleString('en-IN')}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#d4af37]/20"
                  >
                    <Lock className="w-3.5 h-3.5" /> Lock Price via Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5: DARK CTA BANNER (Ready to Get Started?)
        ========================================================= */}
        <section className="bg-[#0b0f19] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              TRADING DESK ACTIVE NOW
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ready to Get Started with Ahmedabad Gold Process?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl mx-auto font-light leading-relaxed">
              Contact our Manek Chowk trading desk for institutional bulk orders, purity testing appointments, or tailored gold financing options.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="https://wa.me/918905064477"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Trading Desk
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-white hover:bg-slate-100 text-slate-900 transition-all flex items-center justify-center gap-2"
              >
                Send Enquiry Form
              </Link>
              <Link
                to="/products"
                className="text-xs sm:text-sm font-bold text-white hover:text-[#d4af37] transition-colors flex items-center gap-1 px-3 py-2"
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom 3 Assurance Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                999.00 FINE GOLD ASSURED
              </span>
              <span className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#d4af37]" />
                VALUED ASSET VAULT SECURITY
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                DIRECT DESK: +91 89050 64477
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
