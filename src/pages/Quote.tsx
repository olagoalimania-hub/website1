import { motion } from 'motion/react';
import { FileText, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-black pt-32 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white/5 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/10 text-center"
        >
          <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-brand-orange" />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">Request Received</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Your request for a quote has been successfully transmitted to our engineering and logistics team. A representative will contact you within 24 business hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-brand-orange font-bold uppercase tracking-widest text-xs border-b border-brand-orange/30 pb-1 hover:border-brand-orange transition-all"
          >
            Back to RFQ Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-brand-black pt-32 min-h-screen">
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter"
            >
              REQUEST A <span className="text-brand-orange">SECURE</span> QUOTE
            </motion.h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please provide complete details about your operational requirements. Our specialist team will conduct a thorough review to provide an accurate proposal.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-10 md:p-16"
          >
            <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Company Name</label>
                  <input type="text" required className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange" placeholder="Organization" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Contact Email</label>
                  <input type="email" required className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange" placeholder="name@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Industry Sector</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange appearance-none">
                    <option>Manufacturing</option>
                    <option>Construction</option>
                    <option>Marine / Offshore</option>
                    <option>Logistics / Transport</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Service Required</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange appearance-none">
                    <option>Petroleum Product Supply (AGO/PMS)</option>
                    <option>Oil & Gas Logistics</option>
                    <option>Procurement Services</option>
                    <option>Engineering Support</option>
                    <option>Energy Consulting</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Project Scope / Volume Required</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange" placeholder="Describe the quantity, timeline, and location..."></textarea>
              </div>

              <div className="pt-6">
                <button className="w-full py-6 bg-brand-orange text-white rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-3 hover:bg-brand-orange/90 transition-all">
                  <FileText className="w-4 h-4" />
                  <span>Transmit RFQ Proposal</span>
                </button>
                <p className="text-center text-[10px] text-gray-500 mt-6 font-mono">
                  SECURE END-TO-END ENCRYPTED FORM SUBMISSION. DATA PROTECTED UNDER CORPORATE PRIVACY POLICY.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
