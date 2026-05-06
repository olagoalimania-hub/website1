import Hero from '../components/Hero';
import AboutSnapshot from '../components/AboutSnapshot';
import ServiceGrid from '../components/ServiceGrid';
import Industries from '../components/Industries';
import CTA from '../components/CTA';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../constants';

export default function Home() {
  return (
    <div className="bg-brand-black">
      <Hero />
      <AboutSnapshot />
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col space-y-4"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                  {item.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceGrid />
      <Industries />
      <CTA />
    </div>
  );
}
