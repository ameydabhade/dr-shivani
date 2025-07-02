interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white p-8 md:p-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-400 opacity-10 rounded-full -ml-20 -mb-20"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-8">
          <span className="inline-block bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🎉 Free Consultation + Digital Scan worth ₹1500
          </span>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Transform Your Smile with Advanced Technology!
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <div className="text-3xl md:text-5xl font-bold text-yellow-300 mb-2">
              Dr. Shivani
            </div>
            <p className="text-yellow-100 text-lg">MDS, BDS | Fellowship in Oral Implantology</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-primary-800/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-purple-300">
                Premium Services & Pricing
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Dental Implants: ₹25,000</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Zirconia Crowns: From ₹8,000</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Wisdom Teeth: ₹5,000 - ₹7,000</span>
                </li>
              </ul>
              <div className="mt-2 text-yellow-300 font-bold">
                Competitive Pricing with Quality Care
              </div>
            </div>

            <div className="bg-primary-800/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2 text-purple-300">
                Advanced Technology & Payment
              </h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Laser Dentistry Available</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>Digital Intra Oral Scanner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-300">✓</span>
                  <span>EMI via SAVEin App</span>
                </li>
              </ul>
              <div className="mt-2 text-purple-300 font-bold">
                Insurance & All Payment Methods Accepted
              </div>
            </div>
          </div>

          <button 
            onClick={onBookAppointment}
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg transition-all hover:scale-105 w-full md:w-auto inline-flex items-center justify-center gap-2 group"
          >
            Book Your Free Consultation + Digital Scan
            <span className="group-hover:translate-x-1 transition-transform">➤</span>
          </button>
          
          <p className="mt-4 text-sm text-primary-100">
            *Flexible appointments available. Contact us at 81084 04057
          </p>
        </div>
      </div>
    </section>
  );
} 