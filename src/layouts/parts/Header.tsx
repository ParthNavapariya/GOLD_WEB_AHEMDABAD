import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from '../../components/QuoteModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Gold Rates', href: '/gold-rates' },
    { label: 'About Us', href: '/about' },
    { label: 'Market Insights', href: '/market-insights' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-md">
        {/* TOP ANNOUNCEMENT TICKER BAR */}
        <div className="bg-[#0b0f19] text-slate-300 text-xs border-b border-slate-800/80 py-1.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-bold tracking-wider text-[#d4af37] text-[11px] uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live MCX
              </span>
              <span className="text-slate-300 text-[11px]">
                24K: <strong className="text-white">₹74,200</strong>/10g
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 text-[11px]">
                22K: <strong className="text-white">₹68,020</strong>/10g
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <div className="hidden md:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>HOURS: MON-SAT 11:00 AM - 8:00 PM</span>
              </div>
              <span className="hidden md:inline text-slate-600">|</span>
              <a
                href="tel:+918905064477"
                className="flex items-center gap-1.5 text-slate-200 hover:text-[#d4af37] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>+91 89050 64477</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="bg-[#101524] border-b border-slate-800 text-white backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* LOGO */}
              <Link to="/" className="flex items-center shrink-0">
                <img
                  src="/airo-assets/images/logo/horizontal"
                  alt="Ahmedabad Gold Process"
                  className="block h-auto max-h-12 w-auto max-w-full object-contain"
                />
              </Link>

              {/* DESKTOP NAV LINKS */}
              <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`text-sm font-medium transition-all py-1 border-b-2 ${
                        active
                          ? 'text-[#d4af37] border-[#d4af37] font-semibold'
                          : 'text-slate-300 border-transparent hover:text-white hover:border-slate-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA BUTTON */}
              <div className="hidden sm:flex items-center">
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-md bg-[#d4af37] hover:bg-[#c59b27] text-slate-950 shadow-md shadow-[#d4af37]/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Get a Quote
                </button>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden p-2 rounded-md bg-slate-800 text-slate-200 hover:text-white cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* MOBILE NAV DROPDOWN */}
            {isMenuOpen && (
              <nav
                aria-label="Mobile navigation"
                className="lg:hidden py-4 border-t border-slate-800 bg-[#0d121f]"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          active
                            ? 'bg-[#d4af37]/15 text-[#d4af37] font-semibold'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsQuoteOpen(true);
                    }}
                    className="mt-3 mx-2 px-4 py-2.5 text-xs font-bold uppercase rounded-md bg-[#d4af37] text-slate-950 text-center tracking-wider cursor-pointer"
                  >
                    Get a Quote
                  </button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* INTERACTIVE QUOTE MODAL POPUP */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
