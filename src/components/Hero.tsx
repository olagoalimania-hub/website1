import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Play, ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 pb-4 bg-brand-black min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-1 grid grid-cols-12 grid-rows-6 gap-3">
        {/* Main Hero Bento Case */}
        <div className="col-span-12 lg:col-span-8 row-span-4 bento-card p-8 md:p-16 relative overflow-hidden flex flex-col justify-end group">
          {/* Background Image / Pattern */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              alt="Industrial Refinery"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
          </div>

          <div className="absolute top-0 right-0 p-8 select-none pointer-events-none">
            <div className="text-[100px] md:text-[140px] font-black leading-none opacity-[0.03] italic -mr-10">ENERGY</div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-[1px] bg-brand-orange" />
              <span className="text-brand-orange font-mono text-xs font-bold tracking-[0.3em] uppercase underline-offset-4 decoration-brand-orange/30 decoration-2 underline">
                Industrial Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white italic leading-[0.95] tracking-tighter mb-8 max-w-2xl"
            >
              POWERING THE FUTURE <br className="hidden md:block" />
              <span className="text-slate-400">OF GLOBAL INFRASTRUCTURE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
            >
              Olagoal is a premier independent energy company specializing in petroleum logistics, refinery support, and large-scale fuel distribution across global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="px-8 py-4 bg-brand-orange text-black rounded-sm font-bold uppercase tracking-widest text-[10px] flex items-center group transition-all"
              >
                <span>Our Operations</span>
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-sm font-bold uppercase tracking-widest text-[10px] flex items-center group hover:bg-white/10 transition-all"
              >
                <span>Corporate Profile</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats Bento Case 2 */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bento-card p-6 flex flex-col justify-between group cursor-default">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Operational Scale</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div>
            <div className="text-5xl font-black italic text-white flex items-baseline">
              1.2M <span className="text-brand-orange text-2xl ml-1">+</span>
            </div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Metric Tons Distributed Annually</div>
          </div>
        </div>

        {/* Services High-Level Bento Case 3 */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bg-gradient-to-br from-[#141a23] to-[#0a111a] border border-white/10 p-6 flex flex-col justify-between group">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Strategic Services</span>
            <ArrowDown className="w-4 h-4 text-slate-700 group-hover:text-brand-orange transition-colors" />
          </div>
          <ul className="space-y-4">
            {['Marine Logistics', 'Petroleum Supply', 'Energy Consulting'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest group/item overflow-hidden">
                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full group-hover/item:scale-150 transition-transform" />
                <span className="text-slate-300 group-hover/item:text-brand-orange transition-colors transform group-hover/item:translate-x-1 duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Infrastructure Metric */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 row-span-2 bento-card p-6 flex flex-col justify-between">
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Infrastructure</div>
          <div>
            <div className="text-4xl font-black italic text-white mb-2 underline decoration-brand-orange/30">98.4%</div>
            <p className="text-[10px] leading-tight text-slate-500 uppercase tracking-widest">Safety Reliability Score FY24</p>
          </div>
        </div>

        {/* Partnerships Metric */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 row-span-2 bento-card p-6 flex flex-col justify-between">
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Partnerships</div>
          <div>
            <div className="text-4xl font-black italic text-white mb-2">14</div>
            <p className="text-[10px] leading-tight text-slate-500 uppercase tracking-widest">Global Energy Affiliates</p>
          </div>
        </div>

        {/* Global Reach Row / CTA Card */}
        <Link 
          to="/quote" 
          className="col-span-12 lg:col-span-6 row-span-2 bg-brand-orange text-black p-8 flex items-center justify-between group transition-transform active:scale-[0.98]"
        >
          <div>
            <h3 className="text-3xl font-black uppercase italic leading-[0.85] tracking-tighter">Ready for<br/>Deployment?</h3>
            <p className="text-xs font-bold uppercase tracking-widest mt-3 opacity-80 italic">Partner with industrial excellence</p>
          </div>
          <div className="w-20 h-20 border-4 border-black/20 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-brand-orange transition-all duration-500">
            <ArrowRight className="w-10 h-10 transition-transform group-hover:rotate-[-45deg]" />
          </div>
        </Link>
      </div>
    </section>
  );
}
