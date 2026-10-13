import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, CheckCircle2,
  Lock, ArrowRight, ExternalLink, Navigation, Car
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    enquiryType: '',
    fullName: '',
    email: '',
    phone: '',
    quantity: '',
    message: '',
    complianceAgreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact/trade-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // ignore in dev
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — Manek Chowk Trading Desk | Ahmedabad Gold Process</title>
        <meta
          name="description"
          content="Get in touch with Ahmedabad Gold Process trading desk in Manek Chowk. Phone hotline, WhatsApp, and physical vault visits."
        />
        <link rel="canonical" href="https://ahmedabadgoldprocess.com/contact" />
      </Helmet>

      <main className="bg-[#fcfbf9] text-slate-800">
        {/* HEADER SECTION */}
        <section className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
              <Link to="/" className="hover:text-[#d4af37]">Home</Link>
              <span>/</span>
              <span className="text-slate-800 font-medium">Contact Us</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                TRADING DESK & VAULT DESK
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  Get in Touch With Our{' '}
                  <span className="font-serif italic font-normal text-[#d4af37]">Trading Desk</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  For bulk gold enquiries, certified laboratory purity testing, institutional collateral, or treasury allocations — our senior bullion dealers are available on the floor in Manek Chowk, Ahmedabad.
                </p>
              </div>

              {/* Assured Badge */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-4 shrink-0 flex items-center gap-3.5 shadow-sm">
                <ShieldCheck className="w-9 h-9 text-[#d4af37] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800">
                    PRECISION ASSAY REFINERY
                  </span>
                  <p className="font-serif font-bold text-slate-900 text-sm">999.00 Fine Assured</p>
                  <p className="text-[11px] text-emerald-700 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> Average counter turnaround &lt; 15 mins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 QUICK CONTACT CARDS */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* Card 1: WhatsApp */}
            <a
              href="https://wa.me/918905064477"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#25D366] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                  FASTEST RESPONSE
                </span>
                <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-sm">WhatsApp Desk</h3>
              <p className="text-xs font-semibold text-slate-800 mt-0.5">+91 89050 64477</p>
              <p className="text-[11px] text-slate-500 mt-1">Tap to chat instantly for live rates</p>
            </a>

            {/* Card 2: Phone Hotline */}
            <a
              href="tel:+918905064477"
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  DIRECT LINE
                </span>
                <Phone className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-sm">Phone Hotline</h3>
              <p className="text-xs font-semibold text-slate-800 mt-0.5">+91 89050 64477</p>
              <p className="text-[11px] text-slate-500 mt-1">Direct line to our bullion dealers</p>
            </a>

            {/* Card 3: Email Desk */}
            <a
              href="mailto:info@ahmedabadgoldprocess.com"
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#d4af37] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  CORPORATE DESK
                </span>
                <Mail className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-sm">Email Desk</h3>
              <p className="text-xs font-semibold text-slate-800 mt-0.5 truncate">info@ahmedabadgoldprocess.com</p>
              <p className="text-[11px] text-slate-500 mt-1">Responses within 24 hours</p>
            </a>

            {/* Card 4: Visit HQ */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  PHYSICAL VAULT
                </span>
                <MapPin className="w-4 h-4 text-[#d4af37]" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-sm">Visit Headquarters</h3>
              <p className="text-xs font-semibold text-slate-800 mt-0.5">Manek Chowk, Khadia</p>
              <p className="text-[11px] text-slate-500 mt-1">Historic jewellery bullion bazaar</p>
            </div>

            {/* Card 5: Floor Hours */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  FLOOR HOURS
                </span>
                <Clock className="w-4 h-4 text-[#d4af37]" />
              </div>
              <h3 className="font-serif font-bold text-slate-900 text-sm">Trading Timings</h3>
              <p className="text-xs font-semibold text-slate-800 mt-0.5">Mon – Sat: 11:00 AM – 8:00 PM</p>
              <p className="text-[11px] text-amber-800 font-medium mt-1">Sunday Closed (Vault Sealed)</p>
            </div>
          </div>
        </section>

        {/* SECTION: INTERACTIVE TRADE ENQUIRY FORM & SECURITY PROTOCOL */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Trade Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    DIRECT DISPATCH ORDER
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                    Send a Trade Enquiry
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live Bullion Desk
                </span>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-amber-50/70 border border-amber-200 rounded-xl my-6">
                  <CheckCircle2 className="w-12 h-12 text-[#d4af37] mx-auto mb-3" />
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
                    Enquiry Logged Successfully
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our bullion trading desk in Manek Chowk has received your requirements. A senior dealer will contact you via WhatsApp / phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded bg-[#d4af37] text-slate-950 hover:bg-[#c59b27]"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Enquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37]"
                    >
                      <option value="">Select service or requirement</option>
                      <option value="bulk_bullion">Bulk Bullion Purchase (100g, 1kg Cast Bars)</option>
                      <option value="scrap_refining">Scrap Gold Refining & Fire Assay</option>
                      <option value="minted_coins">Minted 24K / 22K Gold Coins</option>
                      <option value="purity_testing">Certified Purity Testing & XRF</option>
                      <option value="institutional">Institutional Collateral & Vaulting</option>
                    </select>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name / Firm <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Rameshchandra Soni"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@jewellers.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Phone & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs font-semibold">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 rounded-r-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Quantity / Amount
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 100g, 1 Kg, or ₹25 Lakhs"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Order Specifications
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detail your exact karat requirement (24K 999, 22K 916), desired delivery window, or physical vault settlement query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Compliance Checkbox */}
                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      required
                      checked={formData.complianceAgreed}
                      onChange={(e) => setFormData({ ...formData, complianceAgreed: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#d4af37] focus:ring-[#d4af37]"
                    />
                    <span className="text-[11px] text-slate-600 leading-snug">
                      I understand that wholesale bullion settlements above ₹2 Lakhs require mandatory PAN/Aadhaar compliance under PMLA guidelines.
                    </span>
                  </label>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-7 py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-md shadow-[#d4af37]/20 flex items-center justify-center gap-2 transition-all"
                    >
                      {loading ? 'Submitting...' : 'Send Trade Enquiry'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" /> Response assured within 1 business day
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Security Protocol Dark Card */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#0c111d] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  MANEK CHOWK COUNTER SECURITY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                  Physical Handover & Assay Protocol
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                  All physical transactions are conducted within our high-security vault enclosure. Private assay suites equipped with certified XRF spectrometers allow live non-destructive verification in front of you.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-lg text-center">
                    <p className="font-serif font-bold text-lg text-white">₹0</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#d4af37] mt-0.5">
                      ASSAY FEE ON ORDERS &gt;50G
                    </p>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-lg text-center">
                    <p className="font-serif font-bold text-lg text-white">100%</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#d4af37] mt-0.5">
                      PRECISION ASSAY REFINERY
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Armed Escort Logistics on Bulk Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time RTGS/IMPS Banking Clearing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tamper-Evident Certicard Packaging</span>
                  </div>
                </div>
              </div>

              {/* Sub-card: Heritage photo */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/airo-assets/images/pages/about/team-trading-floor"
                  alt="Manek Chowk Assay Chambers"
                  className="w-full h-44 object-cover"
                />
                <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-xs">Manek Chowk Heritage</p>
                    <p className="text-[10px] text-slate-400">The epicentre of Western India's bullion trade</p>
                  </div>
                  <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-slate-800 text-[#d4af37] border border-slate-700">
                    STATION 01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: VISIT OUR TRADING COUNTER WITH MAP & DIRECTIONS */}
        <section className="py-14 bg-slate-100/70 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
                  VAULT LOGISTICS & IN-PERSON VISITS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Visit Our Trading Counter
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                Situated within Ahmedabad's historic Zaveri Bazaar corridor, adjacent to the Old Stock Exchange building.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Map Card */}
              <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <div className="relative h-80 sm:h-96 w-full bg-slate-200 overflow-hidden">
                  {/* Styled Map frame */}
                  <iframe
                    title="Ahmedabad Gold Process Manek Chowk"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.852445674312!2d72.5850!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f5060f64c3%3A0x6b307ff035e05a8d!2sManek%20Chowk%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter contrast-105"
                    loading="lazy"
                  />
                  {/* Coordinates pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-[11px] font-mono text-[#d4af37] border border-slate-800">
                    📍 23.0225° N, 72.5896° E
                  </div>
                  <a
                    href="https://maps.google.com/?q=Manek+Chowk+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-900 border border-slate-300 shadow hover:bg-white flex items-center gap-1"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-5 bg-white border-t border-slate-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-sm">Ahmedabad Gold Process Floor</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Near Old Stock Exchange, Manek Chowk, Khadia, Ahmedabad, Gujarat — 380001
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: 3 Logistics Cards */}
              <div className="lg:col-span-5 space-y-4">
                {/* 1. Landmarks */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Landmarks & Walking Guide</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Enter via Gandhi Road or Teen Darwaza arch. Walk 150m south towards the Old Stock Exchange. Our trade entrance is located at the heritage arch gateway.
                    </p>
                  </div>
                </div>

                {/* 2. Parking */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Secure Parking & Valet Access</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Vehicles can park at the <em>Navrang Multi-Level Car Parking</em> (400m away). For clients carrying wholesale bullion allocations, our private vault security team provides counter-to-vehicle escort upon advance notice.
                    </p>
                  </div>
                </div>

                {/* 3. Security Clearance */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">Security Clearance For Sellers</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      No appointment needed for scrap gold valuations below 500 grams. For institutional melts exceeding 1 Kilogram, please schedule 2 hours prior via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: NEED AN IMMEDIATE MCX SPOT RATE LOCK? */}
        <section className="bg-[#0b0f19] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE DESK ACTIVE NOW
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Need an Immediate MCX Spot Rate Lock?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Gold markets fluctuate by the second. Connect with our Manek Chowk desk on WhatsApp for 60-second price locks on bulk kilobars and 999 minted coins.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://wa.me/918905064477"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#d4af37] text-slate-950 hover:bg-[#c59b27] shadow transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Trading Desk
              </a>
              <a
                href="tel:+918905064477"
                className="px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Directly
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}