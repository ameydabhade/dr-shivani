import Image from 'next/image';

export default function ImplantTypes() {
  const servicesData = [
    {
      title: "Dental Implants",
      image: "/images/implant/single.png",
      description: "Premium dental implants for natural-looking, long-lasting tooth replacement:",
      benefits: [
        "Single tooth implants from ₹25,000",
        "Multiple teeth implants available", 
        "Full mouth rehabilitation",
        "Latest implant technology"
      ]
    },
    {
      title: "Smile Design", 
      image: "/images/implant/Multiple.png",
      description: "Transform your smile with advanced cosmetic dentistry techniques:",
      benefits: [
        "Digital smile planning",
        "Zirconia crowns starting ₹8,000",
        "Aesthetic restoration", 
        "Customized treatment plans"
      ]
    },
    {
      title: "Aligners & Orthodontics",
      image: "/images/implant/supported.png", 
      description: "Straighten your teeth with modern clear aligner technology:",
      benefits: [
        "Clear, removable aligners",
        "Comfortable treatment",
        "Digital treatment planning",
        "Flexible appointment scheduling"
      ]
    },
    {
      title: "Laser Dentistry",
      image: "/images/implant/all_in.png",
      description: "Advanced laser technology for precise, painless dental treatments:",
      benefits: [
        "Minimally invasive procedures",
        "Faster healing time", 
        "Reduced discomfort",
        "Latest laser equipment"
      ]
    }
  ];

  return (
    <section className="bg-primary-600 text-white p-4 md:p-8 lg:p-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-purple-300 mb-4">
          Comprehensive Dental Care at <em>Meera Dental Clinic</em>
        </h2>
        <p className="text-center text-primary-100 mb-8 md:text-lg max-w-3xl mx-auto">
          At Meera Dental Clinic, Dr. Shivani offers comprehensive dental solutions using advanced 
          technology including laser dentistry, digital intra-oral scanners, and latest equipment 
          in a friendly, comfortable environment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white text-gray-800 p-4 md:p-6 rounded-lg">
              <div className="bg-primary-50/80 rounded-lg mb-4 relative aspect-[4/3] w-full">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-bold text-center mb-3 md:text-lg">{service.title}</h3>
              <p className="text-center mb-3 text-sm md:text-base">{service.description}</p>
              <ul className="space-y-1">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500">✓</span>
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-yellow-300 mb-6">
            Complete Dental Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Full Mouth Rehabilitation</h4>
              <p className="text-primary-100 text-sm">Complete oral health restoration</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Digital Intra Oral Scanner</h4>
              <p className="text-primary-100 text-sm">Precise 3D digital impressions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Flexible Payment Options</h4>
              <p className="text-primary-100 text-sm">Insurance & SAVEin EMI available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}