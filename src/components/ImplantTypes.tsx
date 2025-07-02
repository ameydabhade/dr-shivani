import Image from 'next/image';

export default function ImplantTypes() {
  const implantTypes = [
    {
      title: "Single Implants",
      image: "/images/implant/single.png",
      description: "A Single dental implant crown is your ideal solution. It will:",
      benefits: [
        "Look and function just like a natural tooth",
        "Restore your natural chewing ability",
        "Preserve the underlying bone",
        "Save your money in the long run"
      ]
    },
    {
      title: "Multiple Implants", 
      image: "/images/implant/Multiple.png",
      description: "A Multi-implant bridge. It is ideal for filling medium-sized gaps in your smile:",
      benefits: [
        "Exceptional Strength",
        "A Permanent solution",
        "Bone Preservation", 
        "A life long replacement for your natural teeth"
      ]
    },
    {
      title: "Implant-Supported Dentures",
      image: "/images/implant/supported.png", 
      description: "Offer a stable alternative to regular dentures:",
      benefits: [
        "Snap into place over 2-4 implants",
        "Help prevent bone loss",
        "Vastly improve your chewing and confidence",
        "More stable than traditional dentures"
      ]
    },
    {
      title: "All-on-4 / All-on-6",
      image: "/images/implant/all_in.png",
      description: "All-on-4 & All-on-6 Dental Implants provide extra stability and support:",
      benefits: [
        "Resistant to wear and stains",
        "A permanent solution that does not need removal",
        "Custom-designed to attach securely to 4-6 implants per arch",
        "It looks natural and strong enough to eat hard food"
      ]
    }
  ];

  return (
    <section className="bg-primary-600 text-white p-4 md:p-8 lg:p-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-purple-300 mb-4">
          When it comes to Dental Implants, choose <em>Meera Dental Clinic</em>
        </h2>
        <p className="text-center text-primary-100 mb-8 md:text-lg max-w-3xl mx-auto">
          At Meera Dental Clinic, we specialize in providing all types of dental implants to help you 
          achieve a beautiful and functional smile using the latest procedures and technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {implantTypes.map((service, index) => (
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

        {/* Implant Features Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-yellow-300 mb-6">
            Why Choose Our Dental Implants?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Lifetime Warranty</h4>
              <p className="text-primary-100 text-sm">Swiss implant system with lifetime replacement warranty</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Digital Implantology</h4>
              <p className="text-primary-100 text-sm">3D CBCT scanning & computer-guided implant surgery</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">3-Month EMI Available</h4>
              <p className="text-primary-100 text-sm">No-cost financing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}