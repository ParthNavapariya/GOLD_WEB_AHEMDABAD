import { useState, useEffect } from 'react';
import { X, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [purity, setPurity] = useState<'24K' | '22K' | '18K'>('24K');
  const [intent, setIntent] = useState<string>('Buy Bullion (Bars/Coins)');
  const [weight, setWeight] = useState<number>(100);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const ratePerGram = purity === '24K' ? 7420 : purity === '22K' ? 6802 : 5565;
  const estimatedTotal = weight * ratePerGram;

  const quickWeights = [
    { label: '10g', val: 10 },
    { label: '50g', val: 50 },
    { label: '100g', val: 100 },
    { label: '500g', val: 500 },
    { label: '1 Kg', val: 1000 },
  ];

  const handleWhatsAppQuote = () => {
    const msg = `Hi Ahmedabad Gold Process, I would like to get a formal quote/rate lock:%0A- Requirement: ${encodeURIComponent(intent)}%0A- Purity: ${purity} Gold%0A- Quantity: ${weight} grams%0A- Indicative Benchmark: ₹${estimatedTotal.toLocaleString('en-IN')}%0A- Name / Firm: ${encodeURIComponent(name || 'Trader')}%0A- Contact: ${encodeURIComponent(phone || 'WhatsApp Desk')}`;
    window.open(`https://wa.me/918905064477?text=${msg}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const existingStr = localStorage.getItem('ahmedabad_enquiries_local') || '[]';
      const existing = JSON.parse(existingStr);
      const newEntry = {
        id: Date.now(),
        name: name.trim() || 'Quote Request',
        phone: phone.trim() || '—',
        email: '',
        enquiry_type: `Quote Lock (${intent})`,
        purity,
        quantity: `${weight} grams (₹${estimatedTotal.toLocaleString('en-IN')})`,
        message: `Indicative request for ${weight}g ${purity} Gold (${intent})`,
        created_at: new Date().toISOString(),
      };
      localStorage.setItem('ahmedabad_enquiries_local', JSON.stringify([newEntry, ...existing]));
    } catch {}

    try {
      fetch('/api/contact/quote-modal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Quote Request',
          phone: phone.trim(),
          enquiryType: `Quote Lock (${intent})`,
          purity,
          quantity: `${weight}g`,
          message: `Indicative total ₹${estimatedTotal.toLocaleString('en-IN')}`,
        }),
      }).catch(() => {});
    } catch {}

    setTimeout(() => {
      // auto reset after 4s
      setIsSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[#0e1320] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 text-white my-8">
        {/* Top gold bar glow */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-full" />

        {/* Modal Header */}
        <div className="p-6 sm:p-7 pb-4 flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              INSTANT BENCHMARK QUOTE
            </div>
            <h2 className="font-serif text-2xl font-bold text-white tracking-tight">
              Get a Trade Quote
            </h2>
            <p className="text-xs text-slate-400 mt-0.5 font-light">
              Manek Chowk Bullion Execution Desk • Real-time MCX Spot Peg
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-600 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Quote Request Received!</h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed font-light">
              Our Manek Chowk desk execution officer will contact you within 15 minutes during market hours.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3 rounded-xl bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#c59b27] transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Connect Immediately on WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
            {/* Requirement Intent */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Transaction Requirement
              </label>
              <select
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                className="w-full bg-[#161c2e] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#d4af37]"
              >
                <option value="Buy Bullion (Bars/Coins)">Buy Bullion (999.00 Bars & Minted Coins)</option>
                <option value="Sell Old Gold / Melt Scrap">Sell Old Gold / Liquidate Scrap</option>
                <option value="Institutional Fire Assay / Lab">Institutional Fire Assay / XRF Lab Testing</option>
                <option value="Gold Loan / Bullion Leasing">Gold Loan / Bullion Leasing Facility</option>
              </select>
            </div>

            {/* Purity & Weight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Karat Purity */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Gold Karat Purity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['24K', '22K', '18K'] as const).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setPurity(k)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        purity === k
                          ? 'bg-[#d4af37] text-slate-950 border-[#d4af37] shadow-sm'
                          : 'bg-[#161c2e] text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight in Grams */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Weight (Grams)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="50000"
                    value={weight || ''}
                    onChange={(e) => setWeight(Number(e.target.value) || 0)}
                    placeholder="100"
                    required
                    className="w-full bg-[#161c2e] border border-slate-700 rounded-xl pl-3.5 pr-12 py-2 text-xs font-mono font-bold text-white focus:outline-none focus:border-[#d4af37]"
                  />
                  <span className="absolute right-3.5 top-2 text-xs text-slate-400 font-medium">
                    Gms
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Weight Chips */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase text-slate-400">Quick:</span>
                {quickWeights.map((qw) => (
                  <button
                    key={qw.label}
                    type="button"
                    onClick={() => setWeight(qw.val)}
                    className={`px-2.5 py-1 text-[11px] rounded-lg font-mono transition-all ${
                      weight === qw.val
                        ? 'bg-[#d4af37] text-slate-950 font-bold'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {qw.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="bg-[#141a2a] p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#d4af37]">
                  ESTIMATED BENCHMARK VALUATION
                </span>
                <div className="font-serif text-2xl font-bold text-white mt-0.5">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-slate-400">
                  @ ₹{ratePerGram.toLocaleString('en-IN')}/g (Excl. 3% GST)
                </span>
              </div>

              <div className="text-right">
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-[9px] font-bold uppercase text-emerald-400">
                  Live Rate
                </span>
              </div>
            </div>

            {/* Contact Details (Optional or Fast) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Your Name / Firm
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Jewellers"
                  className="w-full bg-[#161c2e] border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Mobile / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#161c2e] border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> Lock & Send on WhatsApp
              </button>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-semibold tracking-wider text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Request Call Back from Desk
              </button>
            </div>

            {/* Footer Institutional Link */}
            <div className="pt-2 text-center">
              <Link
                to="/contact"
                onClick={onClose}
                className="text-[11px] text-slate-400 hover:text-[#d4af37] transition-colors inline-flex items-center gap-1"
              >
                Need institutional bullion contracts exceeding 1 Kg? Visit Contact Desk <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
