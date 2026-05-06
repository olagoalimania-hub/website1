import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import CTA from '../components/CTA';

export default function Services() {
  return (
    <div className="bg-brand-black pt-32">
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            INDUSTRIAL <span className="text-brand-orange">SOLUTIONS.</span>
          </motion.h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We provide a specialized suite of services designed to address the complex challenges of the modern energy landscape. Our solutions are built for durability, efficiency, and safety.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <h2 className="text-4xl font-display font-bold text-white tracking-tight">{service.title}</h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {service.description} This service involves end-to-end management of energy requirements, ensuring your operations never face downtime due to supply constraints or technical failures.
                  </p>
                  <ul className="space-y-4">
                    {['Strategic fulfillment', 'HSE certified transport', '24/7 technical monitoring', 'Optimized delivery routes'].map((feature) => (
                      <li key={feature} className="flex items-center space-x-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 bg-brand-navy/30 relative group">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + index * 1000}?auto=format&fit=crop&q=80&w=1000`} 
                      alt={service.title}
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <CTA />
    </div>
  );
}
