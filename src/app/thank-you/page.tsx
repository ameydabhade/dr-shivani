'use client';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Interest!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your appointment request has been received. Our team at Meera Dental Clinic will contact you shortly to confirm your consultation with Dr. Shivani.
          </p>
        </div>

        {/* Doctor Info Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="md:flex md:items-center md:gap-6">
            <div className="text-center mb-6 md:mb-0">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image 
                  src="/images/doctor.png" 
                  alt="Dr. Shivani"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Shivani</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium">MDS, BDS</p>
                <p className="font-medium">Fellowship in Oral Implantology</p>
                <p className="font-medium">MSc in Facial Cosmetology</p>
              </div>
            </div>
            <div className="md:flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                With extensive expertise in advanced dental care, Dr. Shivani specializes in 
                implantology and facial cosmetology. Her commitment to using cutting-edge 
                technology including laser dentistry and digital intra-oral scanners ensures 
                optimal treatment outcomes in a friendly, comfortable environment.
              </p>
              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-bold text-primary-600 mb-2">What to Expect:</h4>
                <ul className="text-sm text-primary-800 space-y-1">
                  <li>• Comprehensive oral health evaluation</li>
                  <li>• Digital scanning and X-rays if needed</li>
                  <li>• Personalized treatment plan</li>
                  <li>• Advanced technology demonstration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary-600 mb-3">📞 Phone Numbers</h3>
              <div className="space-y-2">
                <a href="tel:+918108404057" className="block text-primary-600 font-bold hover:underline">
                  +91 81084 04057
                </a>
                <a href="tel:+918108404058" className="block text-primary-600 font-bold hover:underline">
                  +91 81084 04058
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3">🕒 Working Hours</h3>
              <div className="text-gray-600">
                <p>Morning: 10:00 AM - 2:00 PM</p>
                <p>Evening: 5:30 PM - 9:30 PM</p>
                <p className="text-sm text-gray-500 mt-1">Monday to Saturday</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-primary-600 mb-3">📍 Clinic Address</h3>
            <p className="text-gray-600">
              Meera Dental Clinic<br />
              Bhakti Avenue, Shop 10, Plot No 3B<br />
              Sector 46A, Seawoods West<br />
              Navi Mumbai - 400706
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">We&apos;ll Call You</h3>
              <p className="text-sm text-primary-100">Our team will contact you within 24 hours to confirm your appointment</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Visit Our Clinic</h3>
              <p className="text-sm text-primary-100">Experience our advanced technology and friendly environment</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Start Treatment</h3>
              <p className="text-sm text-primary-100">Begin your journey to a healthier, more beautiful smile</p>
            </div>
          </div>
        </div>

        {/* Call Now CTA */}
        <div className="text-center mt-8">
          <a 
            href="tel:+918108404057" 
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-all"
          >
            📞 CALL NOW
          </a>
        </div>
      </div>
    </div>
  );
} 