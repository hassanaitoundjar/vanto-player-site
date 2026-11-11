'use client';

import { Mail, Clock, MessageSquare, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import FAQSection from '@/components/sections/FAQ';

export default function ContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', device: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Contact Hero */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-8 xl:px-12 overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#a855f7]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Support Desk
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Touch</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a question about Vanto Player, need technical setup assistance, or want to report an issue? Our engineering team is here to assist.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full py-20 px-6 md:px-8 xl:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Info (Left Side - 2 Cols) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Email Support</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Our engineering and support team typically responds within 24 hours on business days. Please specify your device model and app version for technical inquiries.
                </p>
                <a 
                  href="mailto:support@vantoplayer.com" 
                  className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-2 text-sm"
                >
                  support@vantoplayer.com <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-xl">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                <div className="text-gray-400 text-sm leading-relaxed space-y-1">
                  <p>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM (EST)</p>
                  <p>Weekend Coverage: Critical bug reports &amp; license issues</p>
                </div>
              </div>

              <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-xl">
                <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 text-red-400 border border-red-500/20">
                  <ShieldAlert className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Brand &amp; Abuse Reports</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Report clone websites or unauthorized services illicitly selling streams using our brand.
                </p>
                <a 
                  href="mailto:dmca@vantoplayer.com" 
                  className="text-red-400 font-bold hover:text-red-300 transition-colors flex items-center gap-2 text-sm"
                >
                  dmca@vantoplayer.com <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Contact Form (Right Side - 3 Cols) */}
            <div className="lg:col-span-3 bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-400" aria-hidden="true" /> Send an Inquiry
              </h2>

              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center py-16 animate-in fade-in duration-500">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out. We have logged your support request. Our support team will follow up via email at <span className="text-white font-medium">{formData.email || 'your email'}</span>.
                  </p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', device: '', message: '' }); }}
                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors text-sm"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="device" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Device &amp; Operating System</label>
                    <input 
                      type="text" 
                      id="device" 
                      value={formData.device}
                      onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                      placeholder="e.g. Firestick 4K Max, Samsung Smart TV Tizen, Android TV"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry, bug report, or licensing question in detail..."
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#3b82f6] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-blue-600 transition-all text-sm tracking-wide shadow-lg shadow-blue-500/20 mt-2"
                  >
                    Submit Support Ticket
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
