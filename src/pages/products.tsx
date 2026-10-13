import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';
import {
  ShieldCheck, MessageCircle, Phone, Award, Landmark, TrendingUp
} from 'lucide-react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'bars' | 'coins' | 'industrial' | 'schemes'>('all');

  const goldBars = [
    {
      name: 'Gold Bar 1g',
      weight: '1.00g',
      purity: '999.00 24K',
      desc: 'Ideal for gifting, trade tokens, and starter physical accumulations.',
      cert: 'Assay Certified & Sealed',
      rate: '₹7,420*',
      popular: false,
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
    {
      name: 'Gold Bar 5g',
      weight: '5.00g',
      purity: '999.00 24K',
      desc: 'Popular retail investment bar with optimal liquidity and minimal spread.',
      cert: 'Assay Certified & Sealed',
      rate: '₹37,100*',
      popular: false,
      img: '/airo-assets/images/pages/home/why-choose-us',
    },
    {
      name: 'Gold Bar 10g',
      weight: '10.00g',
      purity: '999.00 24K',
      desc: 'The standard household bullion asset. Highest trading volume in Gujarat retail.',
      cert: 'Serialized Assay Certicard',
      rate: '₹74,200*',
      popular: true,
      img: '/airo-assets/images/pages/home/hero',
    },
    {
      name: 'Gold Bar 50g',
      weight: '50.00g',
      purity: '999.00 24K',
      desc: 'Preferred for intermediate positions and artisan fabricator day allocations.',
      cert: 'Refinery Assay Slip',
      rate: '₹3,71,000*',
      popular: false,
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
    {
      name: 'Gold Bar 100g',
      weight: '100.00g',
      purity: '999.00 24K',
      desc: 'Substantial bench-cast bar denomination. Wholesale physical delivery framework.',
      cert: 'LBMA-Aligned Assay & Laser Inscription',
      rate: '₹7,42,000*',
      popular: false,
      img: '/airo-assets/images/pages/home/why-choose-us',
    },
    {
      name: 'Gold Bar 1kg',
      weight: '1,000.00g (1 Kg)',
      purity: '999.00 24K',
      desc: 'Institutional and treasury asset holding. Direct treasury delivery with invoice.',
      cert: 'Assay Pack + Fineness Documentation',
      rate: '₹74,20,000*',
      popular: false,
      commercial: true,
      img: '/airo-assets/images/pages/home/hero',
    },
  ];

  const mintedCoins = [
    {
      name: 'Gold Coin 1g',
      weight: '1.00g',
      purity: '999.00 24K',
      desc: 'Festive gifting favourite for shagun, auspicious beginnings, and family pujas.',
      cert: 'Certified Assay Card',
      rate: '₹7,440*',
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
    {
      name: 'Gold Coin 2g',
      weight: '2.00g',
      purity: '999.00 24K',
      desc: 'Wedding season gifting favorite, sealed with individual authenticity certificate.',
      cert: 'Certified Assay Card',
      rate: '₹14,880*',
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
    {
      name: 'Gold Coin 5g',
      weight: '5.00g',
      purity: '999.00 24K',
      desc: 'Diwali & Dhanteras special. High demand for festive ritual investment.',
      cert: 'Certified Assay Card',
      rate: '₹37,200*',
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
    {
      name: 'Gold Coin 10g',
      weight: '10.00g',
      purity: '999.00 24K',
      desc: 'Premium gift coin symmetry and mirror lustrum with guaranteed re-pawn.',
      cert: 'Certified Assay Card',
      rate: '₹74,400*',
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
    {
      name: 'Gold Coin 20g',
      weight: '20.00g',
      purity: '999.00 24K',
      desc: 'High value wedding legacy gifting with long-term family wealth preservation.',
      cert: 'Certified Assay Card',
      rate: '₹1,48,700*',
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
    {
      name: 'Gold Coin 22K 8g',
      weight: '8.00g (1 Sovereign)',
      purity: '916 22K',
      desc: 'Jewellery-grade standard Guine/Pavan for traditional wedding ensembles.',
      cert: 'Refinery Assay Certified',
      rate: '₹54,450*',
      img: '/airo-assets/images/pages/home/gold-bars-coins',
    },
  ];

  const industrialBullion = [
    {
      title: 'Gold Granules 24K',
      desc: 'For precision casting, alloy blending, and uniform melting in induction furnaces.',
      denom: 'Net 100g, 1 kg',
      app: 'Lost-wax casting',
      img: '/airo-assets/images/pages/services/hero',
    },
    {
      title: 'Gold Wire 22K',
      desc: 'Drawn to exact gauges for filigree, chain manufacture, and artisan joinery.',
      denom: 'Per Gram / 50g',
      app: 'Jewellery Workshops',
      img: '/airo-assets/images/pages/about/team-trading-floor',
    },
    {
      title: 'Gold Sheet 18K',
      desc: 'Cold-rolled precision-rolled sheets for stamping and die-cut jewellery components.',
      denom: 'Per 10g, 50g',
      app: 'Sheet Metal Pressing',
      img: '/airo-assets/images/pages/home/why-choose-us',
    },
    {
      title: 'Gold Alloy 22K',
      desc: 'Master alloy blended with pure gold for consistent color and workability in mass production.',
      denom: 'Net 100g, 1 kg',
      app: 'Automated Casting',
      img: '/airo-assets/images/pages/home/hero',
    },
  ];

  const schemes = [
    {
      title: 'Monthly Gold SIP',
      desc: 'Accumulate gold systematically with transparent monthly pricing. Converts into certified physical coins or bars without hidden making charges.',
      tag: 'WEALTH ACCUMULATION',
    },
    {
      title: 'Gold Savings Scheme',
      desc: 'Structured 11-month savings program where the 12th installment bonus is contributed by Ahmedabad Gold Process on physical redemption.',
      tag: 'JEWELLERY INCENTIVE',
    },
    {
      title: 'Bulk Purchase Plan',
      desc: 'Advance bullion allocation pricing for commercial jewellers and manufacturers with volume rebates and deferred delivery schedules.',
      tag: 'MANUFACTURERS',
    },
    {
      title: 'Gold Loan Against Bullion',
      desc: 'Short-term institutional working capital liquidity against physical bullion holdings with zero prepayment penalties and competitive interest rates.',
      tag: 'LIQUIDITY DESK',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Premium Gold Products — Bullion Bars, Coins & Industrial Gold | Ahmedabad Gold Process</title>
        <meta
          name="description"
          content="Wholesale gold bars 1g to 1kg, 24K minted coins, 22K bullion, and industrial gold granules in Manek Chowk, Ahmedabad."
        />
        <link rel="canonical" href="https://ahmedabadgoldprocess.com/products" />
      </Helmet>

      <main className="bg-[#fcfbf9] text-slate-800">
        {/* HERO SECTION */}
        <section className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                SPOT PRICE BACKED WHOLESALE BULLION SUPPLY
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-1 leading-tight">
                Premium Gold Products for Jewellers & Investors
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-2xl">
                Refinery certified 999.00 purity — every bar, coin, and industrial bullion lot is backed by laboratory assay testing and transparent volume-tiered pricing from Manek Chowk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/918905064477?text=Hi%2C%20I%20want%20to%20enquire%20about%20gold%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 hover:bg-[#c59b27] transition-colors flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp for Rates
              </a>
              <a
                href="tel:+918905064477"
                className="px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> +91 89050 64477
              </a>
            </div>
          </div>

          {/* 4 Trust Badges */}
          <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
              <div>
                <p className="font-bold text-slate-900 text-xs">Assay Certified</p>
                <p className="text-[11px] text-slate-500">100% Certified 24K & 916</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#d4af37]" />
              <div>
                <p className="font-bold text-slate-900 text-xs">SEBI Registered</p>
                <p className="text-[11px] text-slate-500">Authorized Institutional Desk</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-5 h-5 text-[#d4af37]" />
              <div>
                <p className="font-bold text-slate-900 text-xs">MCX-Linked</p>
                <p className="text-[11px] text-slate-500">Transparent Spot Spreads</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Landmark className="w-5 h-5 text-[#d4af37]" />
              <div>
                <p className="font-bold text-slate-900 text-xs">Since 1998</p>
                <p className="text-[11px] text-slate-500">25+ Years in Manek Chowk</p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER TABS */}
        <section className="bg-white border-b border-slate-200 sticky top-20 z-30 px-4 sm:px-6 lg:px-8 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 overflow-x-auto py-3">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'bars', label: 'Gold Bars' },
              { id: 'coins', label: 'Minted Coins' },
              { id: 'industrial', label: 'Certified Bullion' },
              { id: 'schemes', label: 'Investment Schemes' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#d4af37] text-slate-950 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 1: INVESTMENT-GRADE GOLD BARS */}
        {(activeTab === 'all' || activeTab === 'bars') && (
          <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  CERTIFIED MINT CAST BARS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                  Investment-Grade Gold Bars
                </h2>
                <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                  Sourced directly from accredited refineries with certified purity standards. Vacuum sealed with serialized certicard numbers.
                </p>
              </div>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                • Live Liquidity Ready
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {goldBars.map((bar) => (
                <div
                  key={bar.name}
                  className={`bg-white rounded-2xl border overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative ${
                    bar.popular ? 'border-[#d4af37] ring-1 ring-[#d4af37]' : 'border-slate-200'
                  }`}
                >
                  {bar.popular && (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded bg-[#d4af37] text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow">
                      MOST POPULAR
                    </div>
                  )}
                  {bar.commercial && (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      COMMERCIAL LOT
                    </div>
                  )}

                  <div>
                    <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                      <img
                        src={bar.img}
                        alt={bar.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] font-mono text-[#d4af37] font-bold">
                        Weight: {bar.weight}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-serif font-bold text-lg text-slate-900">{bar.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800">
                          {bar.purity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">{bar.desc}</p>

                      <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                        <div className="flex justify-between">
                          <span className="text-[11px] text-slate-400">Certification:</span>
                          <span className="font-semibold text-slate-800 text-[11px]">{bar.cert}</span>
                        </div>
                        <div className="flex justify-between items-baseline pt-1">
                          <span className="text-xs text-slate-500 font-semibold">Indicative Rate:</span>
                          <span className="font-serif text-xl font-bold text-slate-900">{bar.rate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <a
                      href={`https://wa.me/918905064477?text=Enquire%20for%20${encodeURIComponent(bar.name)}%20at%20Ahmedabad%20Gold%20Process`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 text-center block hover:bg-[#c59b27] shadow transition-colors"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: MINTED GOLD COINS */}
        {(activeTab === 'all' || activeTab === 'coins') && (
          <section className="py-14 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    MINTED HERITAGE MEDALLIONS
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                    Minted Gold Coins
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                    Minted with tamper-proof packaging, mirror-polish finishes, and certificate of authenticity. Optimal for weddings, Diwali, and corporate gifting.
                  </p>
                </div>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" /> Certicard Sealed Purity
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mintedCoins.map((coin) => (
                  <div
                    key={coin.name}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                        <img
                          src={coin.img}
                          alt={coin.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] font-mono text-[#d4af37] font-bold">
                          Weight: {coin.weight}
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-serif font-bold text-lg text-slate-900">{coin.name}</h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800">
                            {coin.purity}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">{coin.desc}</p>

                        <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                          <div className="flex justify-between">
                            <span className="text-[11px] text-slate-400">Certification:</span>
                            <span className="font-semibold text-slate-800 text-[11px]">{coin.cert}</span>
                          </div>
                          <div className="flex justify-between items-baseline pt-1">
                            <span className="text-xs text-slate-500 font-semibold">Indicative Rate:</span>
                            <span className="font-serif text-xl font-bold text-slate-900">{coin.rate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <a
                        href={`https://wa.me/918905064477?text=Enquire%20for%20${encodeURIComponent(coin.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 text-center block hover:bg-[#c59b27] shadow transition-colors"
                      >
                        Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: CERTIFIED INDUSTRIAL BULLION */}
        {(activeTab === 'all' || activeTab === 'industrial') && (
          <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                JEWELLERY WORKSHOP MATERIALS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                Certified Industrial Bullion
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                High-purity raw bullion formats engineered for manufacturing goldsmiths, karigars, and jewelry manufacturing units. Full spectrometer purity certificate with every lot.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrialBullion.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-serif font-bold text-base text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1.5 mb-3">{item.desc}</p>
                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Denomination:</span>
                          <span className="font-semibold text-slate-800">{item.denom}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Application:</span>
                          <span className="font-semibold text-slate-800">{item.app}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <a
                      href={`https://wa.me/918905064477?text=Request%20Lot%20Rate%20for%20${encodeURIComponent(item.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded text-xs font-bold uppercase tracking-wider bg-amber-50 hover:bg-[#d4af37] text-amber-900 hover:text-slate-950 border border-amber-200 text-center block transition-colors"
                    >
                      Request Lot Rate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: SYSTEMATIC INVESTMENT & FINANCING SCHEMES */}
        {(activeTab === 'all' || activeTab === 'schemes') && (
          <section className="py-14 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  STRUCTURED BULLION FINANCING
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
                  Systematic Investment & Financing Schemes
                </h2>
                <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                  Institutional gold accumulation schemes designed for regular savers, high-volume traders, and businesses leveraging idle bullion inventory.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {schemes.map((scheme) => (
                  <div
                    key={scheme.title}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {scheme.tag}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-slate-900 mt-3 mb-2">{scheme.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{scheme.desc}</p>
                    </div>

                    <a
                      href={`https://wa.me/918905064477?text=Inquire%20about%20${encodeURIComponent(scheme.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full py-2 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 text-center block transition-colors"
                    >
                      Enquire Scheme
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM CALLOUT BANNER */}
        <section className="bg-[#0b0f19] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                REAL-TIME DESK EXECUTION
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Get Today's Best Rates
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Call or WhatsApp our Manek Chowk dealing desk for live pricing on any coin, bar, or bullion lot. Wholesale and corporate orders receive tailored preferential rates.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>• Strict Delivery Timelines</span>
                <span>• Insured Transit Insurance</span>
                <span>• Formal GST Invoicing</span>
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
                <Phone className="w-4 h-4" /> +91 89050 64477
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
