interface PromotionalPackagesProps {
  onBookAppointment: () => void;
}

export default function PromotionalPackages({ onBookAppointment }: PromotionalPackagesProps) {
  const packages = [
    {
      title: "Single Implant Package",
      originalPrice: "₹35,000",
      offerPrice: "₹28,000",
      savings: "₹7,000",
      features: [
        "Swiss implant system (Hiossen/Nobel)",
        "Free consultation + Digital scan",
        "3D CBCT planning included",
        "Zirconia crown included",
        "Lifetime warranty on implant"
      ],
      popular: true
    },
    {
      title: "Multiple Implants Package",
      originalPrice: "₹90,000",
      offerPrice: "₹75,000",
      savings: "₹15,000",
      features: [
        "3 premium implants included",
        "Digital implant planning",
        "Computer-guided surgery",
        "Custom implant bridge",
        "6-month follow-up care"
      ],
      popular: false
    },
    {
      title: "All-on-4 Complete Package",
      originalPrice: "₹2,50,000",
      offerPrice: "₹2,00,000",
      savings: "₹50,000",
      features: [
        "4 implants per arch",
        "Fixed denture on same day",
        "Swiss implant system",
        "Digital smile design",
        "1-year comprehensive warranty"
      ],
      popular: false
    },
    {
      title: "Implant-Supported Dentures",
      originalPrice: "₹1,20,000",
      offerPrice: "₹95,000",
      savings: "₹25,000",
      features: [
        "2-4 implants for stability",
        "Removable denture system",
        "Enhanced chewing ability",
        "Prevents bone loss",
        "Easy maintenance"
      ],
      popular: false
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-purple-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
            🎁 Exclusive Dental Implant Packages
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Smiles with Dental Implants
          </h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            Choose from our comprehensive dental implant packages featuring Swiss implant systems, 
            digital technology, and lifetime warranties. All packages include free consultation 
            and digital scan worth ₹1,500.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                pkg.popular ? 'border-purple-300 transform scale-105' : 'border-gray-100'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-lg">{pkg.originalPrice}</span>
                  <div className="text-3xl font-bold text-primary-600">{pkg.offerPrice}</div>
                  <span className="text-green-600 font-semibold text-sm">Save {pkg.savings}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onBookAppointment}
                className={`w-full py-3 rounded-lg font-bold transition-all hover:scale-105 ${
                  pkg.popular 
                    ? 'bg-purple-500 text-white hover:bg-purple-600' 
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
              >
                Book This Package
              </button>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Dental Implant Financing Available</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">3-Month EMI Available</h4>
                <p className="text-sm opacity-90">No-cost financing</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Insurance Accepted</h4>
                <p className="text-sm opacity-90">Multiple plans</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
          
                <p className="text-sm opacity-90">Save more upfront</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Questions about our packages? Call us at{' '}
            <a href="tel:+918108404057" className="text-primary-600 font-bold hover:underline">
              81084 04057
            </a>{' '}
            or{' '}
            <a href="tel:+918108404058" className="text-primary-600 font-bold hover:underline">
              81084 04058
            </a>
          </p>
          <button 
            onClick={onBookAppointment}
            className="bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 transition-all hover:scale-105 inline-flex items-center gap-2 group"
          >
            Book Implant Consultation + Free Digital Scan
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
} 