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

        {/* Google Maps Embed - Meera Dental Clinic */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1641493899497!2d73.0135234!3d19.012487099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3f4349956c3%3A0xd84203cdf35e4926!2sMEERA%20DENTAL%20CLINIC%20%7C%20Dr%20Shivani%20Sherkhane!5e0!3m2!1sen!2sin!4v1751478688035!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Meera Dental Clinic - Dr Shivani Sherkhane Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}