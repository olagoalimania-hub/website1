import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Operations', href: '/operations' },
  { name: 'Safety', href: '/safety' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        scrolled 
          ? 'bg-[#0a111a]/80 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <motion.div 
            initial={{ rotate: -15, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            className="w-10 h-10 bg-brand-orange rounded-sm flex items-center justify-center transform rotate-45"
          >
            <div className="w-4 h-4 bg-brand-black rounded-full" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-black tracking-tighter uppercase italic text-white flex items-center">
              OLAGOAL <span className="text-brand-orange font-light ml-2 not-italic">OIL & GAS</span>
            </span>
            <span className="text-[9px] tracking-[0.4em] font-bold text-slate-500 uppercase leading-none">Ventures</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-orange tracking-wide',
                location.pathname === link.href ? 'text-brand-orange' : 'text-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/quote"
            className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:scale-105 active:scale-95 flex items-center space-x-2"
          >
            <span>Request Quote</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-navy border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-display font-bold',
                    location.pathname === link.href ? 'text-brand-orange' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-brand-orange text-white text-center rounded-lg font-bold uppercase tracking-widest"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
