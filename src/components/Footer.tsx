import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <div className="relative w-32 md:w-48 h-12 md:h-16 mx-auto mb-4">
            <Image 
              src="/images/logo.png" 
              alt="Meera Dental Clinic Logo" 
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-primary-600 mb-2">Meera Dental Clinic</h2>
          <p className="text-primary-600">Advanced Dental Care with Latest Technology</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-primary-600 mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+918108404057" className="block text-primary-600 font-bold md:text-lg hover:text-primary-700 transition-colors">+91 81084 04057</a>
            <a href="tel:+918108404058" className="block text-primary-600 font-bold md:text-lg hover:text-primary-700 transition-colors">+91 81084 04058</a>
            <p className="text-primary-600">meeradentalclinic@gmail.com</p>
          </div>

          <div>
            <h3 className="font-bold text-primary-600 mb-2 md:text-lg">Working Hours</h3>
            <p className="text-primary-600 md:text-lg">Morning: 10:00 AM - 2:00 PM</p>
            <p className="text-primary-600 md:text-lg">Evening: 5:30 PM - 9:30 PM</p>
            <p className="text-primary-600 text-sm mt-2">Monday to Saturday</p>
          </div>

          <div>
            <h3 className="font-bold text-primary-600 mb-2 md:text-lg">Location</h3>
            <p className="text-primary-600 font-bold">
              📍 Meera Dental Clinic, Bhakti Avenue, Shop 10, Plot No 3B, Sector 46A, Seawoods West, Navi Mumbai - 400706
            </p>
            <p className="text-primary-600 mt-2">
              <strong>Payment Options:</strong> All methods accepted, Insurance & EMI through SAVEin App
            </p>
          </div>
        </div>

        {/* Google Maps Embed - Updated for new address */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8274934532625!2d73.01947607516894!3d19.075334182142744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1c74fef7a77%3A0x4d8d4d5d3c8b8c8b!2sSector%2046A%2C%20Seawoods%20West%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1748290801057!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Meera Dental Clinic Location"
          ></iframe>
        </div>

        {/* Services and Payment Info */}
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-6">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-primary-600 mb-2">Our Services & Pricing</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-primary-600 mb-2">Dental Implants</h4>
              <p className="text-2xl font-bold text-primary-600">₹25,000</p>
              <p className="text-sm text-gray-600">Per Implant</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-primary-600 mb-2">Wisdom Teeth Removal</h4>
              <p className="text-2xl font-bold text-primary-600">₹5,000 - ₹7,000</p>
              <p className="text-sm text-gray-600">Lower Wisdom Teeth</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-primary-600 mb-2">Zirconia Crown</h4>
              <p className="text-2xl font-bold text-primary-600">Starting ₹8,000</p>
              <p className="text-sm text-gray-600">Premium Quality</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}