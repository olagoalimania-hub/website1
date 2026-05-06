import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden pt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0 border-l border-brand-orange pl-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-orange font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
              Strategic Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white italic tracking-tighter leading-tight">
              A COMPLETE ECOSYSTEM FOR <br/> <span className="text-brand-orange">ENERGY</span> EXCELLENCE
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-xs font-bold uppercase tracking-widest leading-relaxed">
            From upstream procurement to downstream logistics, we provide critical support across the entire petroleum value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 bento-card overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[350px]"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-[60px] font-black italic select-none">0{index + 1}</div>
                </div>

                <div>
                  <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-10 group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                    {IconComponent && <IconComponent className="w-6 h-6 text-brand-orange group-hover:text-black transition-colors" />}
                  </div>
                  
                  <h4 className="text-2xl font-display font-black italic text-white mb-4 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[90%]">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <button className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-brand-orange transition-colors">
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
