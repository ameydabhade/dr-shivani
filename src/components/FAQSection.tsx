'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Meera Dental Clinic different from other clinics in Navi Mumbai?",
      answer: "Dr. Shivani combines 10+ years of specialized experience with state-of-the-art technology at our Seawoods West location. We're one of the few clinics in Navi Mumbai offering advanced laser dentistry, digital intra-oral scanning, and computer-guided implant surgery. Our unique approach includes personalized treatment planning, 0% EMI financing through SAVEin, and same-day consultations for emergency cases."
    },
    {
      question: "What are your treatment costs and pricing structure?",
      answer: "Our transparent pricing includes: Single dental implants ₹25,000-40,000 (varies by brand - Hiossen, Nobel Biocare, Straumann), Root canal treatment ₹7,500-13,500, Zirconia crowns ₹12,000-18,000, Teeth cleaning & scaling ₹2,000-4,000, Wisdom tooth extraction ₹5,000-15,000. We offer free initial consultation, accept insurance, and provide 0% EMI options through SAVEin app."
    },
    {
      question: "What dental procedures and specializations do you offer?",
      answer: "We provide comprehensive dental care: Advanced dental implants (single, multiple, All-on-4), laser-assisted gum treatment, digital smile designing, clear aligners & Invisalign, painless root canal therapy, cosmetic dentistry & veneers, pediatric dentistry, oral surgery & extractions, full mouth rehabilitation, and preventive dental care. Dr. Shivani specializes in oral implantology and facial cosmetology."
    },
    {
      question: "What are your clinic timings and how do I book an appointment?",
      answer: "We're open Monday to Saturday: 10:00 AM - 2:00 PM and 5:30 PM - 9:30 PM. Sunday closed. Located at Bhakti Avenue, Shop 10, Plot No 3B, Sector 46A, Seawoods West, Navi Mumbai - 400706. Book appointments via phone: 81084 04057 / 81084 04058, WhatsApp, or walk-in for emergencies. We also offer weekend emergency consultations."
    },
    {
      question: "Do you accept insurance and what financing options are available?",
      answer: "Yes, we accept most dental insurance plans and all major payment methods (cash, cards, UPI, net banking). For expensive treatments like implants and full mouth rehabilitation, we partner with SAVEin fintech to offer 0% EMI options with minimal documentation. Treatment costs can be divided into 3-24 month installments, making quality dental care affordable for everyone."
    },
    {
      question: "Is dental treatment safe and what precautions do you take?",
      answer: "Absolutely! We follow strict sterilization protocols with autoclave sterilization, disposable instruments where applicable, and maintain international hygiene standards. Dr. Shivani uses advanced laser technology for minimally invasive procedures, digital X-rays for reduced radiation, and computer-guided surgery for precise implant placement. All treatments are painless with modern anesthesia techniques."
    },
    {
      question: "How long do dental implants last and what is the success rate?",
      answer: "Dental implants have a 95-98% success rate when placed by experienced specialists like Dr. Shivani. With proper care, implants can last 20-25 years or even a lifetime. We use premium brands like Nobel Biocare and Straumann, provide detailed post-operative care instructions, and offer regular follow-up visits. Most patients return to normal eating within 2-3 months after implant placement."
    },
    {
      question: "Do you provide emergency dental services?",
      answer: "Yes, we handle dental emergencies including severe toothache, broken teeth, lost fillings, swollen gums, and trauma cases. Emergency consultations are available during working hours and we try to accommodate urgent cases on weekends. For after-hours emergencies, you can WhatsApp us at 81084 04057 and we'll guide you on immediate pain relief until you can visit the clinic."
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