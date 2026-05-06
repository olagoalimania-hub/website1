import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-brand-orange rounded-sm flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-brand-black rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-black tracking-tighter uppercase italic text-white flex items-center">
                  OLAGOAL <span className="text-brand-orange font-light ml-2 not-italic">OIL & GAS</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase mt-0.5">Ventures</span>
              </div>
            </Link>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed max-w-xs">
              Delivering precision energy solutions and industrial excellence across the oil and gas value chain.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-orange transition-colors flex items-center justify-center text-white hover:text-black">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-orange transition-colors flex items-center justify-center text-white hover:text-black">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-orange transition-colors flex items-center justify-center text-white hover:text-black">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Operations', 'Safety', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-brand-orange text-[11px] font-bold uppercase tracking-widest transition-all flex items-center group">
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-xs mb-8">Services</h4>
            <ul className="space-y-4">
              {['Petroleum Supply', 'Logistics', 'Marine Support', 'Procurement', 'Engineering'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-wider text-xs mb-8">Corporate Office</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                <span className="text-sm">6, Ole-Ilu Oyinbo Avenue, Magbon, LFTZ, Ibeju-Lekki, Lagos Nigeria</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm">+234 808 895 5135</span>
                  <span className="text-sm">+234 803 991 9383</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-sm">info@olagoalventures.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs font-mono">
            &copy; {new Date().getFullYear()} OLAGOAL OIL & GAS VENTURES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-6 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
