import { motion } from 'motion/react';
import CTA from '../components/CTA';

export default function About() {
  return (
    <div className="bg-brand-black pt-32">
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            A TRADITION OF <span className="text-brand-orange">POWER.</span>
          </motion.h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Olagoal Oil and Gas Ventures was founded on the principles of engineering excellence and logistical precision. Today, we stand as a beacon of reliability in the energy sector, supporting the infrastructure that moves industries forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8">
            <div className="aspect-video overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1000" 
                alt="Our History" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <h2 className="text-3xl font-display font-bold text-white">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To be the premier independent energy solutions provider in West Africa, recognized for our commitment to safety, innovation, and sustainable industrial growth.
            </p>
          </div>
          <div className="space-y-8 flex flex-col justify-end">
            <h2 className="text-3xl font-display font-bold text-white">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To deliver high-quality petroleum products and engineering services with unparalleled operational efficiency, ensuring our clients receive the energy they need exactly when they need it.
            </p>
            <div className="aspect-video overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Mission" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </div>

        <div className="bg-brand-navy p-12 md:p-20 rounded-[3rem] border border-white/5">
          <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', desc: 'We maintain absolute transparency in every transaction and operation.' },
              { title: 'Safety', desc: 'Our HSE protocols are non-negotiable and integrated into every workflow.' },
              { title: 'Innovation', desc: 'Utilizing modern technology to optimize energy supply chains.' }
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-brand-orange font-bold text-lg mb-4 uppercase tracking-[0.2em]">{value.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
