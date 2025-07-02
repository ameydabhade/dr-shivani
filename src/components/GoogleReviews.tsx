import Image from 'next/image';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      review: "Dr. Shivani is an exceptional dentist! Got my dental implant done at Meera Dental Clinic and the experience was completely painless. The clinic has the latest laser technology and digital scanners. The staff is friendly and professional. Highly recommend Meera Dental Clinic for any dental treatment."
    },
    {
      name: "Rajesh Patel",
      rating: 5,
      review: "Best dental clinic in Navi Mumbai! Dr. Shivani explained everything clearly and made me feel comfortable throughout my treatment. The clinic has all the latest equipment including digital intra-oral scanners and follows strict hygiene protocols. Very happy with the results!"
    },
    {
      name: "Anjali Desai", 
      rating: 5,
      review: "Had a great experience at Meera Dental Clinic. Dr. Shivani is very gentle and patient. Got my smile design done with zirconia crowns - absolutely beautiful results! The clinic is spacious, modern and conveniently located in Seawoods West. Definitely recommend!"
    },
    {
      name: "Vikram Joshi",
      rating: 5,
      review: "Excellent service and advanced technology at Meera Dental Clinic. Dr. Shivani's expertise in implantology is remarkable. The laser dentistry was completely painless and healed much faster. EMI options through SAVEin app made it very affordable. 5 stars!"
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      review: "Fantastic experience with Dr. Shivani for my full mouth rehabilitation. The digital scanning technology made everything so precise. The clinic environment is very friendly and appointments are flexible. Insurance was accepted without any hassles. Highly recommended!"
    },
    {
      name: "Amit Kumar",
      rating: 5,
      review: "Dr. Shivani is highly skilled and uses the most advanced equipment. Got my aligners here and the results are amazing. The clinic is easily accessible in Navi Mumbai and the staff is very courteous. Best dental care experience I've ever had!"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="flex text-yellow-400 text-2xl">
              {"★".repeat(5)}
            </div>
            <span className="text-3xl font-bold text-gray-900">4.9/5</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 md:text-lg">
            Reviews from satisfied patients at Meera Dental Clinic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Join hundreds of satisfied patients at Meera Dental Clinic
          </p>
          <a 
            href="https://www.google.com/search?q=meera+dental+clinic+navi+mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}