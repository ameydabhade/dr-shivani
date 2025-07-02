'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the dental implant procedure like at Meera Dental Clinic?",
      answer: "The procedure involves placing a titanium implant into the jawbone using our advanced digital implantology system. We use 3D CBCT scanning for precise planning, computer-guided surgery for accuracy, and premium Swiss implant systems. The process includes consultation with Dr. Shivani, implant placement under local anesthesia, a healing period (2-3 months), and finally attachment of a customized crown. Most procedures are completed painlessly with minimal discomfort."
    },
    {
      question: "What are your dental implant costs and financing options?",
      answer: "Single dental implants range from ₹28,000-45,000 depending on the implant system (Hiossen, Nobel Biocare, Straumann). All-on-4 packages start from ₹2,00,000 per arch. We offer 3-month no-cost EMI financing, 10% discount for full payment, lifetime warranty on implants, and accept all insurance plans. Free consultation + digital scan worth ₹1,500 is included with every implant consultation."
    },
    {
      question: "Am I a suitable candidate for dental implants?",
      answer: "Dr. Shivani will assess your overall health, bone density, and oral hygiene through comprehensive examination including 3D CBCT scanning. Most adults with good general health are suitable candidates. Factors we consider include adequate bone volume, healthy gums, non-smoking status, and realistic expectations. Even patients with bone loss can often receive implants with bone grafting procedures."
    },
    {
      question: "How long do dental implants last and what is the success rate?",
      answer: "Our dental implants have a 95-98% success rate using premium Swiss implant systems. With proper care, implants can last 20-25 years or even a lifetime. We provide lifetime warranty on implant fixtures, detailed post-operative care instructions, and regular follow-up visits. Most patients return to normal eating within 2-3 months after implant placement."
    },
    {
      question: "What types of dental implants do you offer?",
      answer: "We provide all types of dental implants: Single tooth implants, Multiple implant bridges, All-on-4/All-on-6 full arch restorations, and Implant-supported dentures. We use premium brands like Nobel Biocare, Straumann, and Hiossen with digital implantology for precise placement. Each treatment is customized based on your specific needs and bone condition."
    },
    {
      question: "Are there any risks or complications with dental implants?",
      answer: "Dental implant surgery is very safe with minimal risks when performed by experienced specialists like Dr. Shivani. Potential risks include infection, implant failure, or nerve damage, but these are rare (less than 2%). We use computer-guided surgery, maintain strict sterilization protocols, and provide detailed post-operative care to minimize any complications."
    },
    {
      question: "What is the expected recovery time and aftercare for implants?",
      answer: "Initial recovery takes 24-48 hours with minimal discomfort managed by prescribed medications. Complete osseointegration (implant fusing with bone) takes 2-3 months. During this time, maintain good oral hygiene, follow a soft diet initially, avoid smoking, and attend follow-up appointments. We provide detailed aftercare instructions and 24/7 support during recovery."
    },
    {
      question: "Do you use advanced technology for dental implants?",
      answer: "Yes! We use cutting-edge digital implantology including 3D CBCT scanning for precise treatment planning, computer-guided surgery for accurate implant placement, digital intra-oral scanning for perfect crown fit, and premium Swiss implant systems. This advanced technology ensures better outcomes, faster healing, and minimal discomfort compared to traditional methods."
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
            Frequently Asked Questions about Dental Implants
          </h2>
          <p className="text-primary-600 md:text-lg">
            Get answers to common questions about dental implant procedure and treatment
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