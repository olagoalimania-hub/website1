import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="bg-brand-black pt-32">
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
            >
              LET'S FUEL YOUR <span className="text-brand-orange">SUCCESS.</span>
            </motion.h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Our team is ready to provide the technical expertise and logistical support your operation demands. Reach out for a consultation.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">Corporate Headquarters</h4>
                  <p className="text-gray-400 max-w-xs">6, Ole-Ilu Oyinbo Avenue, Magbon, LFTZ, Ibeju-Lekki, Lagos Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">Operational Support</h4>
                  <p className="text-gray-400">+234 808 895 5135</p>
                  <p className="text-gray-400">+234 803 991 9383</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">Direct Inquiry</h4>
                  <p className="text-gray-400">info@olagoalventures.com</p>
                  <p className="text-gray-400">sales@olagoalventures.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-8">Send Inquiries</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-all"
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-all"
                    placeholder="name@company.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Company Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-all"
                  placeholder="Your Organization" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-all"
                  placeholder="How can we support your operation?"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-brand-orange text-white rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-3 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full grayscale contrast-125 opacity-50 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
         <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="World Map" 
         />
         <div className="absolute inset-0 bg-brand-black/40" />
      </section>
    </div>
  );
}
