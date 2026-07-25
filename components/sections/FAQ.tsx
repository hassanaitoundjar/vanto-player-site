'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "Does Vanto Player contain any channels? Where can I get a good playlist?",
    answer: "Vanto Player APP and any administrator do not help you to find a good playlist. Also, we don't provide any kind of playlists. We are not responsible for the content uploaded to our APP. Please don't buy the app when you don't have any playlist or Media for the APP, because no channels are included after the activation in this app. Your payment will not be refunded if you buy it without having any list or something is not working."
  },
  {
    question: "My MAC address has changed after I switched to another connection type.",
    answer: "Each TV has 2 MAC addresses (1st is WiFi, 2nd is Ethernet) and a 2nd MAC has activated automatically after you switch to another connection type and restart the app. MAC address is unique for every TV and cannot be changed manually."
  },
  {
    question: "Why is the app not working when the PLAYLIST worked on my computer?",
    answer: "This can be caused because of the ISP lock if your computer is on a different Network. But when the network is the same as your computer and it is not working it can be caused because of your TV's supported format. Not every Smart-TV supports all contents. Every TV model is totally different or may not support specific stream formats!"
  },
  {
    question: "My playlist won't open, freezes or slows down. What to do?",
    answer: "Make sure your playlist is working and active, that it has no limitations or problems. For privacy reasons we do not have access to the playlists, we do not provide any assistance on them."
  },
  {
    question: "Why I can not start the APP?",
    answer: "This is maybe because of your internet connection, please check at first your internet connection before you contact your provider. Many times it is caused because of the connection and not because of the provider!"
  },
  {
    question: "Does the Vanto Player APP have an EPG-SYSTEM?",
    answer: "No, the app didn't have an EPG system integrated but if your provider has an EPG - READY system then it would work with our platform."
  },
  {
    question: "\"Unable to Stream\" Error sorry playlist not working . This message appears when there are restrictions on a playlist.",
    answer: "For privacy reasons we do not have access to the playlists, we do not provide any assistance on them."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#3b82f6] shadow-[0_4px_20px_rgb(59,130,246,0.1)]' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:bg-white/5 rounded-xl transition-all"
                >
                  <span className="font-bold text-[15px] text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-gray-300">
                    {isOpen ? <X className="w-5 h-5 text-gray-900" / aria-hidden="true"> : <Plus className="w-5 h-5" / aria-hidden="true">}
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
