import { motion } from 'motion/react';
import { INDUSTRIES } from '../constants';
import * as Icons from 'lucide-react';

export default function Industries() {
  return (
    <section className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-orange font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Sectors We Power
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter mb-6">
            DRIVING GROWTH ACROSS GLOBAL <span className="italic">INDUSTRIES</span>
          </h3>
          <p className="text-gray-400">
            Our energy solutions are tailored to meet the specific demands of diverse industrial landscapes, ensuring uninterrupted productivity and operational integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = (Icons as any)[industry.icon];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden bento-card aspect-square"
              >
                {/* Background Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-60" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="w-10 h-10 bg-brand-orange/10 backdrop-blur-md rounded-sm flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:rotate-12 transition-all">
                    {IconComponent && <IconComponent className="w-5 h-5 text-brand-orange group-hover:text-black transition-colors" />}
                  </div>
                  <h4 className="text-xl font-display font-black italic text-white mb-2 tracking-tight">{industry.name}</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {industry.description}
                  </p>
                </div>

                {/* Overlying grid lines decorative */}
                <div className="absolute inset-0 z-15 pointer-events-none opacity-5">
                  <div className="grid grid-cols-3 h-full w-full">
                    <div className="border-r border-white" />
                    <div className="border-r border-white" />
                    <div className="border-r border-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
