import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSnapshot() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Team" 
                className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full object-cover border border-white/5 bento-card aspect-square md:aspect-auto"
              />
            </motion.div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-brand-orange p-8 rounded-sm z-20 shadow-2xl"
            >
              <span className="block text-5xl font-display font-black italic text-black mb-1">15+</span>
              <span className="text-[10px] font-bold text-black uppercase tracking-[0.2em] italic">Years Industry Leadership</span>
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-[1px] bg-brand-orange" />
              <h2 className="text-brand-orange font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                Our Identity
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white italic tracking-tighter leading-[0.95]">
              COMMITTED TO THE HIGHEST STANDARDS OF <br className="hidden md:block" /> <span className="text-brand-orange">ENERGY INTEGRITY.</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Olagoal Oil and Gas Ventures is built on a foundation of reliability and technical competence. Our focus on operational efficiency and sustainable delivery has made us a trusted partner for industrial giants.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col p-6 bento-card bg-brand-charcoal/50">
                <div className="w-10 h-10 bg-brand-orange flex items-center justify-center mb-4 transform -rotate-6">
                  <ShieldCheck className="w-5 h-5 text-black" />
                </div>
                <h4 className="text-white font-black italic text-lg mb-2">Safety First</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-tight">International HSE compliance in every operation.</p>
              </div>
              <div className="flex flex-col p-6 bento-card bg-brand-charcoal/50">
                <div className="w-10 h-10 bg-brand-orange flex items-center justify-center mb-4 transform rotate-6">
                  <Award className="w-5 h-5 text-black" />
                </div>
                <h4 className="text-white font-black italic text-lg mb-2">Elite Quality</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-tight">Premium petroleum products sourced strategically.</p>
              </div>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center space-x-4 group bg-white/5 p-4 pr-8 border border-white/10 hover:border-brand-orange transition-all"
            >
              <div className="w-10 h-10 bg-brand-orange flex items-center justify-center group-hover:rotate-90 transition-all duration-500">
                <Globe className="w-5 h-5 text-black" />
              </div>
              <span className="text-white font-bold uppercase tracking-widest text-[10px] group-hover:text-brand-orange transition-colors">
                Learn About Our Heritage
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
