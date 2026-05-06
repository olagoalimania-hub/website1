import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-brand-orange p-12 md:p-20 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          {/* Background Decorative */}
          <div className="absolute top-0 right-0 p-8 select-none pointer-events-none opacity-10">
            <div className="text-[120px] font-black leading-none italic -mr-10 text-black">CONTACT</div>
          </div>
          
          <div className="max-w-2xl text-center lg:text-left relative z-10 text-black">
            <h2 className="text-4xl md:text-6xl font-display font-black italic tracking-tighter mb-6 leading-[0.85]">
              READY TO POWER <br className="hidden md:block" /> YOUR OPERATIONS?
            </h2>
            <p className="text-black/70 text-lg mb-10 font-medium leading-relaxed">
              Speak with our energy consultants today for tailored industrial or maritime solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center transition-transform group-hover:rotate-12">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-black/60 font-bold uppercase tracking-widest leading-none mb-1">Call Operations</p>
                  <div className="flex flex-col">
                    <p className="font-display font-black italic text-lg tracking-tight leading-tight">+234 808 895 5135</p>
                    <p className="font-display font-black italic text-lg tracking-tight leading-tight">+234 803 991 9383</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center transition-transform group-hover:-rotate-12">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-black/60 font-bold uppercase tracking-widest leading-none mb-1">Email Inquiries</p>
                  <p className="font-display font-black italic text-lg tracking-tight">info@olagoalventures.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <Link
              to="/quote"
              className="px-12 py-6 bg-black text-brand-orange rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] flex items-center group shadow-2xl transition-all"
            >
              <span>Get a Secure Quote</span>
              <ArrowRight className="ml-4 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
