'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Meera Dental Clinic different from other clinics?",
      answer: "At Meera Dental Clinic, Dr. Shivani combines advanced technology with personalized care. Our clinic features cutting-edge equipment including laser dentistry and digital intra-oral scanners. Dr. Shivani's extensive qualifications (MDS, BDS, Fellowship in Oral Implantology, MSc in Facial Cosmetology) ensure expert care in a friendly, comfortable environment with flexible appointment scheduling."
    },
    {
      question: "What are your prices for dental implants and other services?",
      answer: "We offer competitive pricing: Dental implants start at ₹25,000 per implant, wisdom teeth removal (lower) ranges from ₹5,000-₹7,000, and Zirconia crowns start from ₹8,000. We accept all payment methods including insurance and offer EMI options through the SAVEin application for your convenience."
    },
    {
      question: "What services do you provide at Meera Dental Clinic?",
      answer: "We provide comprehensive dental care including dental implants, full mouth rehabilitation, smile design, aligners (clear orthodontics), laser dentistry, and digital intra-oral scanning. Dr. Shivani specializes in implantology and facial cosmetology, ensuring expert care for all your dental needs."
    },
    {
      question: "What are your working hours and location?",
      answer: "We're open Monday to Saturday: Morning 10:00 AM - 2:00 PM and Evening 5:30 PM - 9:30 PM. Our clinic is located at Bhakti Avenue, Shop 10, Plot No 3B, Sector 46A, Seawoods West, Navi Mumbai - 400706. You can reach us at 81084 04057 or 81084 04058."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept all major payment methods including cash, cards, UPI, and insurance. For extensive treatments, we offer flexible EMI options through the SAVEin application with minimal documentation. This makes quality dental care accessible and affordable for everyone."
    },
    {
      question: "What advanced technology do you use?",
      answer: "We pride ourselves on using the latest dental technology including laser dentistry for minimally invasive procedures, digital intra-oral scanners for precise 3D impressions, and state-of-the-art equipment. This advanced technology ensures more comfortable treatments, faster healing, and better outcomes for our patients."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-primary-600 md:text-lg">
            Get answers to common questions about our dental services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-xl transition-all duration-300 ${
                openFAQ === index 
                  ? 'border-primary-500 shadow-lg' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 text-left font-medium flex justify-between items-center gap-4"
              >
                <span className={`flex-grow pr-4 transition-colors duration-300 ${
                  openFAQ === index ? 'text-primary-600' : 'text-gray-700'
                }`}>
                  {faq.question}
                </span>
                <span className="text-primary-600 flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              {openFAQ === index && (
                <div className="p-5 border-t border-gray-100 bg-white rounded-b-xl">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}