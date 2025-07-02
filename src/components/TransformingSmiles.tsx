import Image from 'next/image';

interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  const transformations = [
    {
      beforeImage: "/images/transformations/1.mp4",
      afterImage: "/images/transformations/2.mp4",
      title: "Complete Smile Makeover",
      description: "Comprehensive transformation by Dr. Shivani",
      treatment: "Dental Implants + Smile Design"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
            ✨ Real Patient Results
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Smiles with Dr. Shivani
          </h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            See the incredible transformations achieved at Meera Dental Clinic using our 
            advanced technology and Dr. Shivani's expertise in implantology and smile design.
          </p>
        </div>

        <div className="grid gap-8">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="md:flex md:items-center md:gap-8">
                {/* Video/Image Section */}
                <div className="md:flex-1 mb-6 md:mb-0">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Before</h3>
                      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={transformation.beforeImage} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="relative">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">After</h3>
                      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={transformation.afterImage} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/3">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {transformation.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {transformation.description}
                    </p>
                    <div className="bg-primary-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-primary-600 mb-2">Treatment Used:</h4>
                      <p className="text-primary-800">{transformation.treatment}</p>
                    </div>
                    <button 
                      onClick={onBookAppointment}
                      className="bg-primary-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-600 transition-all hover:scale-105 w-full md:w-auto"
                    >
                      Get Your Transformation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Proven Results with Advanced Technology
            </h3>
            <p className="text-primary-100">
              Dr. Shivani's expertise combined with cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Successful Treatments</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Patient Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9★</div>
              <div className="text-primary-100">Google Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Ready to transform your smile with advanced technology?
          </p>
          <button 
            onClick={onBookAppointment}
            className="bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 transition-all hover:scale-105 inline-flex items-center gap-2 group"
          >
            Start Your Transformation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}