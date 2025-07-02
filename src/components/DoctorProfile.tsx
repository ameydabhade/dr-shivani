import Image from 'next/image';

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary-100 text-primary-400 px-6 py-2 rounded-full text-sm font-bold mb-4">
            Leading Implant Specialist in Navi Mumbai
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Meet Our Chief Implantologist
          </h2>
          <p className="text-primary-400 md:text-lg">
            Digital Implantology Expert with Swiss Implant System
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="md:flex md:gap-12 md:items-start mb-10">
            {/* Doctor's Image & Basic Info */}
            <div className="text-center mb-8 md:mb-0 md:flex-shrink-0 md:w-1/3">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl mx-auto mb-6 p-2">
                  <div className="w-full h-full overflow-hidden rounded-xl relative">
                    <Image 
                      src="/images/doctor.png" 
                      alt="Dr. Shivani - Dental Specialist" 
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-md">
                  <h3 className="text-xl font-bold text-primary-400">Dr. Shivani</h3>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-purple-600 font-semibold text-lg mb-2">Founder & Chief Implantologist</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p className="font-medium">MDS, BDS</p>
                  <p className="font-medium">Fellowship in Oral Implantology</p>
                  <p className="font-medium">MSc in Facial Cosmetology</p>
                  <p className="font-medium">Advanced Digital Implantology Training</p>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">500+</div>
                    <div className="text-sm text-gray-600">Implants Placed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor's Info & Expertise */}
            <div className="md:flex-grow">
              <div className="prose max-w-none">
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p className="text-lg">
                    Dr. Shivani is the Founder & Chief Implantologist at Meera Dental Clinic with extensive 
                    experience of 10+ years in advanced implantology. She has completed her MDS and BDS, 
                    along with specialized Fellowship in Oral Implantology and MSc in Facial Cosmetology, 
                    with advanced training in digital implantology techniques.
                  </p>
                  
                  <p className="text-lg">
                    At her practice, she concentrates on all types of dental implants, digital dentistry, 
                    and 3D implant planning. Her expertise in digital implantology and Swiss implant systems 
                    ensures precision placement and optimal outcomes. She has successfully placed 500+ implants 
                    with a 98% success rate using cutting-edge technology.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-primary-800 mb-4">Implant Specializations</h3>
                    <ul className="space-y-3">
                      {[
                        "Single Dental Implants",
                        "Multiple Implant Bridges",
                        "All-on-4 / All-on-6 Systems",
                        "Implant-Supported Dentures",
                        "Immediate Implant Placement",
                        "Computer-Guided Surgery"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="bg-primary-200 p-1 rounded-full">
                            <svg className="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span className="text-primary-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Digital Implantology</h3>
                    <ul className="space-y-3">
                      {[
                        "3D CBCT Scanning",
                        "Computer-Guided Surgery",
                        "Digital Treatment Planning",
                        "Swiss Implant Systems",
                        "3D Printing Technology",
                        "Lifetime Warranty"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="bg-purple-200 p-1 rounded-full">
                            <svg className="w-4 h-4 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span className="text-purple-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button 
              onClick={onBookAppointment}
              className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 group"
            >
              Book Your Consultation with Dr. Shivani
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="mt-3 text-primary-400 font-medium">
              Free Consultation + Digital Scan Worth ₹1500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}