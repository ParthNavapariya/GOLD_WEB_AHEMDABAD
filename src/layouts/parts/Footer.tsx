import { Link } from 'react-router';
import { Phone, Mail, Clock, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f19] text-slate-300 border-t border-slate-800">
      {/* Top golden decorative line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/airo-assets/images/logo/horizontal"
                alt="Ahmedabad Gold Process"
                className="block h-auto max-h-12 w-auto max-w-full object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Ahmedabad's most trusted gold trading and bullion partner since 1998. Providing institutional assay standards, certified 999.00 purity, and wholesale liquidity from the historic corridors of Manek Chowk.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-[#d4af37]/40 text-[#d4af37]">
                <ShieldCheck className="w-3 h-3" /> 999.00 Certified Purity
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-700 text-slate-300">
                <Award className="w-3 h-3 text-amber-400" /> ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-700 text-slate-300">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Manek Chowk Est. 1998
              </span>
            </div>
          </div>

          {/* Column 2: Trading & Operations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">
              Trading & Operations
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Bullion Desk
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Institutional Refining & Assay
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Bullion Bars & Minted Coins
                </Link>
              </li>
              <li>
                <Link to="/gold-rates" className="hover:text-white transition-colors">
                  Live MCX Spot Rates
                </Link>
              </li>
              <li>
                <Link to="/market-insights" className="hover:text-white transition-colors">
                  Treasury Reports & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Governance */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">
              Company Governance
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Heritage & Leadership Since 1998
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Bullion Vault & Trading Desk
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Assay Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  KYC & Compliance Gateway
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Wholesale Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Manek Chowk Trading Desk */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-4">
              Manek Chowk Trading Desk
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <p className="font-semibold text-slate-200">Corporate Office & Vaults:</p>
                <p className="mt-0.5 leading-relaxed">
                  Near Old Stock Exchange, Manek Chowk, Khadia, Ahmedabad, Gujarat 380001
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="tel:+918905064477" className="text-slate-200 hover:text-[#d4af37] transition-colors font-medium">
                  +91 89050 64477
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="mailto:info@ahmedabadgoldprocess.com" className="hover:text-white transition-colors">
                  info@ahmedabadgoldprocess.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Mon-Sat: 11:00 AM – 8:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#080b13] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 1998–{currentYear} Ahmedabad Gold Process (ahmedabadgoldprocess.com). All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              AML Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}