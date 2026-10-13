import { useState, useEffect } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import {
  Lock, RefreshCw, CheckCircle, AlertCircle, LogOut, TrendingUp, TrendingDown,
  ShieldCheck, Clock, ExternalLink, ArrowRight, Eye, EyeOff, Sparkles,
  MessageSquare, UserCheck, Mail, Copy, Check
} from 'lucide-react';

interface RateField {
  purity: string;
  label: string;
  karatBadge: string;
  perGram: string;
  per10g: string;
  change: string;
}

interface EnquiryItem {
  id: number;
  name: string;
  phone: string;
  email?: string;
  enquiry_type: string;
  purity?: string;
  quantity?: string;
  message?: string;
  created_at: string;
}

const DEFAULT_RATES: RateField[] = [
  { purity: '24K', label: '24 Karat (999.00 Fine Bullion)', karatBadge: '999.00 FINE', perGram: '', per10g: '', change: '' },
  { purity: '22K', label: '22 Karat (916 Jewellers Standard)', karatBadge: '916 PURITY', perGram: '', per10g: '', change: '' },
  { purity: '18K', label: '18 Karat (750 Alloy Standard)', karatBadge: '750 PURITY', perGram: '', per10g: '', change: '' },
];

export default function AdminGoldRates() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [rates, setRates] = useState<RateField[]>(DEFAULT_RATES);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const [source, setSource] = useState('MCX — Ahmedabad Gold Process Trading Desk');
  const [currentRates, setCurrentRates] = useState<RateField[]>(DEFAULT_RATES);
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [enquiryFilter, setEnquiryFilter] = useState<'all' | 'quotes' | 'subscribers'>('all');
  const [copiedEmails, setCopiedEmails] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchCurrentRates = async () => {
    try {
      const res = await fetch('/api/gold-rates');
      const data = await res.json();
      if (data.success && data.data?.rates) {
        const fetched: RateField[] = data.data.rates.map((r: { purity: string; label: string; perGram: number; per10g: number; change: number }) => ({
          purity: r.purity,
          label: r.label || (r.purity === '24K' ? '24 Karat (999.00 Fine Bullion)' : r.purity === '22K' ? '22 Karat (916 Jewellers Standard)' : '18 Karat (750 Alloy Standard)'),
          karatBadge: r.purity === '24K' ? '999.00 FINE' : r.purity === '22K' ? '916 PURITY' : '750 PURITY',
          perGram: String(r.perGram),
          per10g: String(r.per10g),
          change: String(r.change),
        }));
        setCurrentRates(fetched);
        setRates(fetched);
        setUpdatedAt(data.data.updatedAt);
        if (data.data.source) setSource(data.data.source);
      }
    } catch {
      // ignore
    }
  };

  const fetchEnquiries = async (pwd?: string) => {
    setLoadingEnquiries(true);
    let serverList: EnquiryItem[] = [];
    try {
      const p = pwd || password;
      const res = await fetch(`/api/enquiries?password=${encodeURIComponent(p)}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        serverList = data.data;
      }
    } catch {
      // ignore server errors, fall back to local
    }

    try {
      const localStr = localStorage.getItem('ahmedabad_enquiries_local');
      if (localStr) {
        const localList: EnquiryItem[] = JSON.parse(localStr);
        if (Array.isArray(localList)) {
          const serverKeys = new Set(
            serverList.map((e) => `${e.email || ''}_${e.phone || ''}_${e.enquiry_type}_${e.created_at}`)
          );
          const uniqueLocal = localList.filter(
            (e) => !serverKeys.has(`${e.email || ''}_${e.phone || ''}_${e.enquiry_type}_${e.created_at}`)
          );
          setEnquiries([...uniqueLocal, ...serverList]);
          setLoadingEnquiries(false);
          return;
        }
      }
    } catch {}

    setEnquiries(serverList);
    setLoadingEnquiries(false);
  };

  const isSubscriberItem = (item: EnquiryItem) =>
    item.enquiry_type.toLowerCase().includes('desk') ||
    item.enquiry_type.toLowerCase().includes('subscribe') ||
    item.enquiry_type.toLowerCase().includes('feed') ||
    item.name.toLowerCase().includes('subscriber');

  const handleCopySubscriberEmails = () => {
    const subscriberEmails = enquiries
      .filter((e) => e.email && e.email.trim() && (isSubscriberItem(e) || enquiryFilter === 'subscribers'))
      .map((e) => e.email!.trim());

    const emailsToCopy = subscriberEmails.length > 0
      ? subscriberEmails
      : enquiries.filter((e) => e.email && e.email.trim()).map((e) => e.email!.trim());

    if (emailsToCopy.length === 0) return;
    navigator.clipboard.writeText(emailsToCopy.join(', '));
    setCopiedEmails(true);
    setTimeout(() => setCopiedEmails(false), 2500);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/gold-rates/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, rates: [] }),
      });
      if (res.status === 401) {
        setLoginError('Invalid desk password. Access denied.');
        return;
      }
      setIsLoggedIn(true);
      await fetchCurrentRates();
      await fetchEnquiries(password);
    } catch {
      if (password === 'Nikul.1991') {
        setIsLoggedIn(true);
        fetchEnquiries(password);
      } else {
        setLoginError('Connection error. Server unreachable.');
      }
    }
  };

  const handleRateChange = (index: number, field: keyof RateField, value: string) => {
    const updated = [...rates];
    updated[index] = { ...updated[index], [field]: value };
    if (field === 'perGram' && value) {
      const pg = parseFloat(value);
      if (!isNaN(pg)) updated[index].per10g = String(Math.round(pg * 10));
    } else if (field === 'per10g' && value) {
      const p10 = parseFloat(value);
      if (!isNaN(p10)) updated[index].perGram = String(Math.round(p10 / 10));
    }
    setRates(updated);
  };

  const adjustRate = (index: number, delta: number) => {
    const updated = [...rates];
    const currentPg = parseFloat(updated[index].perGram) || 0;
    const newPg = Math.max(0, currentPg + delta);
    updated[index].perGram = String(newPg);
    updated[index].per10g = String(newPg * 10);
    const currentChange = parseFloat(updated[index].change) || 0;
    updated[index].change = String(currentChange + delta);
    setRates(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const payload = rates.map((r) => ({
      purity: r.purity,
      label: r.label,
      perGram: parseFloat(r.perGram),
      per10g: parseFloat(r.per10g),
      change: parseFloat(r.change) || 0,
    }));

    const invalid = payload.find((r) => isNaN(r.perGram) || isNaN(r.per10g));
    if (invalid) {
      setStatus('error');
      setMessage('Please enter valid numeric figures for all karat grades.');
      return;
    }

    try {
      const res = await fetch('/api/gold-rates/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, rates: payload, source }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setUpdatedAt(data.data.updatedAt);
        setCurrentRates(rates);
        setMessage('Rates successfully updated and saved permanently in database.');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Rate update execution failed.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Unable to dispatch rate payload.');
    }
  };

  const formatTime = (iso: string) => {
    if (!iso) return '';
    return new Date(iso).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  // -------------------------------------------------------------
  // LOGIN SCREEN (Owner Single Password Access)
  // -------------------------------------------------------------
  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Trading Desk Access — Ahmedabad Gold Process</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        <main className="min-h-screen bg-[#080c14] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full max-w-md bg-[#0f1422] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
            {/* Header / Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-block mb-5">
                <img
                  src="/airo-assets/images/logo/horizontal"
                  alt="Ahmedabad Gold Process"
                  className="h-10 w-auto mx-auto object-contain"
                />
              </Link>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OWNER DESK ACCESS
              </div>

              <h1 className="font-serif text-2xl font-bold text-white tracking-tight">
                Trading Desk Control
              </h1>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Enter your password to update live bullion rates & view client leads
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Owner Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter owner password"
                    required
                    className="w-full bg-[#161c2e] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {loginError && (
                  <p className="text-xs text-rose-400 mt-2 flex items-center gap-1.5 bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/60">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{loginError}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-lg shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" /> Authenticate & Open Dashboard
              </button>
            </form>

            {/* Footer Notice */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <Link to="/" className="hover:text-slate-300 transition-colors flex items-center gap-1">
                ← Public Site
              </Link>
              <span>Default password: <code className="text-[#d4af37] bg-slate-900 px-1.5 py-0.5 rounded">Nikul.1991</code></span>
            </div>
          </div>
        </main>
      </>
    );
  }

  // -------------------------------------------------------------
  // AUTHENTICATED DASHBOARD (Single Clean Owner Control Panel)
  // -------------------------------------------------------------
  return (
    <>
      <Helmet>
        <title>Bullion Benchmark Terminal | Ahmedabad Gold Process Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-[#080c14] text-slate-100 antialiased">
        {/* TOP TERMINAL BAR */}
        <header className="bg-[#0f1422] border-b border-slate-800 sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left Brand */}
            <div className="flex items-center gap-4">
              <Link to="/" className="shrink-0">
                <img
                  src="/airo-assets/images/logo/horizontal"
                  alt="Ahmedabad Gold Process"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>
              <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                  Trading Desk Control Panel
                </span>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>IST {currentTime || 'Live'}</span>
              </div>

              <Link
                to="/gold-rates"
                target="_blank"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 border border-slate-700"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
              </Link>

              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setPassword('');
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-800/50 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* CURRENT LIVE TICKER CARDS */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  ACTIVE PUBLIC BENCHMARK
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Current Live Bullion Quotes
                </h2>
              </div>
              {updatedAt && (
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Last saved: <strong className="text-slate-200">{formatTime(updatedAt)}</strong></span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentRates.map((r) => {
                const isPositive = parseFloat(r.change) >= 0;
                return (
                  <div
                    key={r.purity}
                    className="bg-[#0f1422] rounded-2xl border border-slate-800 p-5 shadow-lg relative overflow-hidden group hover:border-[#d4af37]/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-bold text-[#d4af37] tracking-wider uppercase">
                        {r.karatBadge}
                      </span>
                      <span className={`text-xs font-bold flex items-center gap-1 px-2 py-0.5 rounded ${
                        isPositive ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60' : 'bg-rose-950/60 text-rose-400 border border-rose-800/60'
                      }`}>
                        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {isPositive ? '+' : ''}{r.change || 0} ₹/g
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-medium mb-1">{r.label}</p>

                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl font-bold text-white tracking-tight">
                        ₹{r.perGram ? Number(r.perGram).toLocaleString('en-IN') : '—'}
                      </span>
                      <span className="text-xs text-slate-400">/ gram</span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span>Per 10 Grams:</span>
                      <span className="font-mono font-bold text-slate-200">
                        ₹{r.per10g ? Number(r.per10g).toLocaleString('en-IN') : '—'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MAIN EDIT FORM */}
          <div className="bg-[#0f1422] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  FAST PRICE UPDATE
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                  Update Gold Rates (Saves to Python Database)
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Type new numbers or use +/- buttons. Changes save permanently in the database and update the whole website immediately.
                </p>
              </div>

              <button
                type="button"
                onClick={fetchCurrentRates}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh Current Rates
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Karat Input Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {rates.map((rate, i) => (
                  <div
                    key={rate.purity}
                    className="bg-[#141a2c] rounded-2xl border border-slate-800 p-5 space-y-4 hover:border-slate-700 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <span className="font-serif text-lg font-bold text-[#d4af37]">
                          {rate.purity} Gold
                        </span>
                        <p className="text-[11px] text-slate-400">{rate.karatBadge}</p>
                      </div>

                      {/* Quick Adjust Buttons */}
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => adjustRate(i, -50)}
                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[10px] font-mono font-bold text-slate-300 cursor-pointer"
                          title="Decrease rate by ₹50"
                        >
                          -50
                        </button>
                        <button
                          type="button"
                          onClick={() => adjustRate(i, 50)}
                          className="px-2 py-1 rounded bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[10px] font-mono font-bold text-[#d4af37] cursor-pointer"
                          title="Increase rate by ₹50"
                        >
                          +50
                        </button>
                      </div>
                    </div>

                    {/* Per Gram */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Rate Per Gram (₹) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-slate-400 font-mono text-sm">₹</span>
                        <input
                          type="number"
                          step="any"
                          value={rate.perGram}
                          onChange={(e) => handleRateChange(i, 'perGram', e.target.value)}
                          placeholder="e.g. 7420"
                          required
                          className="w-full bg-[#1b2238] border border-slate-700 rounded-xl pl-8 pr-4 py-2.5 text-sm font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    {/* Per 10 Gram */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Rate Per 10 Grams (₹) *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-2.5 text-slate-400 font-mono text-sm">₹</span>
                        <input
                          type="number"
                          step="any"
                          value={rate.per10g}
                          onChange={(e) => handleRateChange(i, 'per10g', e.target.value)}
                          placeholder="e.g. 74200"
                          required
                          className="w-full bg-[#1b2238] border border-slate-700 rounded-xl pl-8 pr-4 py-2.5 text-sm font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    {/* Daily Change */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Daily Tick Change (₹/g)
                      </label>
                      <input
                        type="number"
                        step="any"
                        value={rate.change}
                        onChange={(e) => handleRateChange(i, 'change', e.target.value)}
                        placeholder="e.g. +45 or -30"
                        className="w-full bg-[#1b2238] border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Source Descriptor */}
              <div className="bg-[#141a2c] rounded-2xl border border-slate-800 p-5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Benchmark Source Note (Displayed to Visitors)
                </label>
                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="e.g. MCX — Ahmedabad Gold Process Trading Desk"
                  className="w-full bg-[#1b2238] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-800/80 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="font-semibold block">{message}</strong>
                    <span className="text-[11px] text-emerald-400/80">Saved at {formatTime(updatedAt)} to Python database.</span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-800/80 text-rose-300 text-xs sm:text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{message}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Saved directly to Python Django database.</span>
                </p>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-xl shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Saving to Database…</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Save & Publish Rates</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* CUSTOMER TRADE ENQUIRIES & LEADS TABLE */}
          {(() => {
            const subscriberCount = enquiries.filter(isSubscriberItem).length;
            const quoteCount = enquiries.filter((e) => !isSubscriberItem(e)).length;
            const filteredEnquiries = enquiries.filter((e) => {
              if (enquiryFilter === 'quotes') return !isSubscriberItem(e);
              if (enquiryFilter === 'subscribers') return isSubscriberItem(e);
              return true;
            });

            return (
              <div className="bg-[#0f1422] rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                      CLIENT INQUIRIES & DESK SUBSCRIBERS
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                      Customer Leads & Intelligence Feed Subscribers
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-light">
                      All quote requests, trade contacts, and "Subscribe to Desk Updates" emails are stored here permanently.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                    {subscriberCount > 0 && (
                      <button
                        type="button"
                        onClick={handleCopySubscriberEmails}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
                          copiedEmails
                            ? 'bg-emerald-950/80 border-emerald-600 text-emerald-300'
                            : 'bg-slate-900 border-slate-700 text-[#d4af37] hover:bg-slate-800 hover:text-amber-300'
                        }`}
                        title="Copy all subscriber email addresses to clipboard for daily briefing broadcast"
                      >
                        {copiedEmails ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied {subscriberCount} Emails!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Subscriber Emails ({subscriberCount})</span>
                          </>
                        )}
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => fetchEnquiries()}
                      disabled={loadingEnquiries}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${loadingEnquiries ? 'animate-spin' : ''}`} /> Refresh
                    </button>
                  </div>
                </div>

                {/* FILTER TABS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setEnquiryFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      enquiryFilter === 'all'
                        ? 'bg-[#d4af37] text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    All Entries ({enquiries.length})
                  </button>

                  <button
                    type="button"
                    onClick={() => setEnquiryFilter('subscribers')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      enquiryFilter === 'subscribers'
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Mail className="w-3 h-3 text-[#d4af37]" />
                    <span>Desk Subscribers ({subscriberCount})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEnquiryFilter('quotes')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      enquiryFilter === 'quotes'
                        ? 'bg-[#d4af37] text-slate-950 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    Quotes & Trade Leads ({quoteCount})
                  </button>
                </div>

                {filteredEnquiries.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 bg-slate-900/20 rounded-2xl border border-slate-800/60">
                    <UserCheck className="w-10 h-10 mx-auto text-slate-600 mb-3" />
                    <p className="text-sm font-medium text-slate-300">
                      {enquiryFilter === 'subscribers'
                        ? 'No desk subscribers recorded yet'
                        : enquiryFilter === 'quotes'
                        ? 'No quote enquiries recorded yet'
                        : 'No entries recorded yet'}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {enquiryFilter === 'subscribers'
                        ? 'When traders subscribe from the Market Insights page, their email will show up here.'
                        : 'When visitors submit a quote or contact request, they will appear here instantly.'}
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#141a2c] text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-4">Date</th>
                          <th className="py-3 px-4">Customer / Subscriber</th>
                          <th className="py-3 px-4">Channel / Contact</th>
                          <th className="py-3 px-4">Type & Details</th>
                          <th className="py-3 px-4">Allocation / Volume</th>
                          <th className="py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80">
                        {filteredEnquiries.map((enq) => {
                          const isSub = isSubscriberItem(enq);
                          return (
                            <tr
                              key={enq.id}
                              className={`transition-colors ${
                                isSub ? 'bg-amber-950/10 hover:bg-amber-950/20' : 'hover:bg-slate-900/40'
                              }`}
                            >
                              <td className="py-3 px-4 text-slate-400 font-mono">
                                {formatTime(enq.created_at)}
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-bold text-white flex items-center gap-1.5">
                                  <span>{enq.name}</span>
                                  {isSub && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-amber-500/20 text-[#d4af37] border border-[#d4af37]/30">
                                      Subscriber
                                    </span>
                                  )}
                                </div>
                                {enq.email && (
                                  <span className="block text-[11px] font-mono text-slate-300 mt-0.5">
                                    {enq.email}
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-4 font-mono text-slate-200">
                                {enq.phone && enq.phone !== '—' ? (
                                  <span>{enq.phone}</span>
                                ) : enq.email ? (
                                  <span className="text-slate-400 text-[11px]">Email Feed Only</span>
                                ) : (
                                  '—'
                                )}
                              </td>
                              <td className="py-3 px-4">
                                <span className={`font-medium ${isSub ? 'text-[#d4af37]' : 'text-slate-200'}`}>
                                  {enq.enquiry_type}
                                </span>
                                {enq.message && (
                                  <span className="block text-[11px] text-slate-400 font-normal truncate max-w-xs mt-0.5">
                                    {enq.message}
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-4 font-mono">
                                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-200 text-[11px]">
                                  {enq.quantity || '—'} {enq.purity ? `(${enq.purity})` : ''}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {enq.phone && enq.phone !== '—' && (
                                    <a
                                      href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(enq.name)}%2C%20thank%20you%20for%20contacting%20Ahmedabad%20Gold%20Process.`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 hover:bg-emerald-900 text-[11px] font-semibold transition-colors"
                                    >
                                      <MessageSquare className="w-3 h-3" /> WhatsApp
                                    </a>
                                  )}
                                  {enq.email && (
                                    <a
                                      href={`mailto:${enq.email}?subject=Daily%20Desk%20Intelligence%20Briefing%20%E2%80%94%20Ahmedabad%20Gold%20Process&body=Hi%20there%2C%0A%0AHere%20is%20today%27s%20Manek%20Chowk%20bullion%20desk%20intelligence%20briefing%20from%20Ahmedabad%20Gold%20Process.`}
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-[11px] font-semibold transition-colors"
                                      title="Send email briefing directly"
                                    >
                                      <Mail className="w-3 h-3 text-[#d4af37]" /> Email
                                    </a>
                                  )}
                                  {!enq.phone && !enq.email && <span className="text-slate-500">—</span>}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })()}

          {/* QUICK LINKS SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/gold-rates"
              target="_blank"
              className="bg-[#0f1422] p-5 rounded-2xl border border-slate-800 hover:border-[#d4af37]/50 transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  PUBLIC ENDPOINT
                </span>
                <p className="text-sm font-bold text-white mt-1">Today's Gold Rates Page</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#d4af37] transition-all" />
            </Link>

            <Link
              to="/services#calculator"
              target="_blank"
              className="bg-[#0f1422] p-5 rounded-2xl border border-slate-800 hover:border-[#d4af37]/50 transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  PUBLIC ENDPOINT
                </span>
                <p className="text-sm font-bold text-white mt-1">Trade Volume Calculator</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#d4af37] transition-all" />
            </Link>

            <Link
              to="/"
              target="_blank"
              className="bg-[#0f1422] p-5 rounded-2xl border border-slate-800 hover:border-[#d4af37]/50 transition-all group flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  PUBLIC ENDPOINT
                </span>
                <p className="text-sm font-bold text-white mt-1">Home Page Hero Rates</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#d4af37] transition-all" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
