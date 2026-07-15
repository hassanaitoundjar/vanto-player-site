'use client';

import { Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import FAQSection from '@/components/sections/FAQ';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      {/* Contact Hero */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-8 xl:px-12 overflow-hidden bg-white border-b border-gray-100">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#a855f7]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Have a question about Vanto Player, need technical support, or want to report an issue? Our team is here to help you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full py-24 px-6 md:px-8 xl:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Contact Info (Left Side - 2 Cols) */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#3b82f6]/50 hover:shadow-xl transition-all shadow-md">
                <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                  Our support team typically replies within 24 hours. Please include your device details if you have technical issues.
                </p>
                <a href="mailto:support@vantoplayer.com" className="text-[#3b82f6] font-bold hover:text-blue-700 transition-colors flex items-center gap-2">
                  support@vantoplayer.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-400/50 hover:shadow-xl transition-all shadow-md">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Support Hours</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM (EST)<br />
                  <span className="text-sm text-gray-500 mt-3 block p-3 bg-gray-50 rounded-lg border border-gray-100">* Weekend support is limited to critical issues.</span>
                </p>
              </div>
            </div>

            {/* Contact Form (Right Side - 3 Cols) */}
            <div className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-[#3b82f6]" /> Send a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center py-24 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 text-lg max-w-md mx-auto font-medium">Thank you for reaching out. Our support team has received your message and will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-[#3b82f6] font-bold hover:text-blue-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 animate-in fade-in duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all shadow-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all appearance-none cursor-pointer shadow-sm"
                    >
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Inquiry</option>
                      <option value="bug">Report a Bug</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all resize-none shadow-sm"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.5)] active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
