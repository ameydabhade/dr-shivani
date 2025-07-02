import Image from 'next/image';

interface TransformingSmilesProps {
  onBookAppointment: () => void;
}

export default function TransformingSmiles({ onBookAppointment }: TransformingSmilesProps) {
  const transformations = [
    {
      beforeAfterImage: "/images/results/1.png",
      title: "Dental Implant Transformation",
      description: "Single tooth replacement with perfect aesthetics",
      treatment: "Single Dental Implant + Zirconia Crown"
    },
    {
      beforeAfterImage: "/images/results/2.png", 
      title: "Multiple Implants Bridge",
      description: "Multiple missing teeth restored with implant bridge",
      treatment: "3 Dental Implants + Custom Bridge"
    },
    {
      beforeAfterImage: "/images/results/3.png",
      title: "Full Smile Rehabilitation", 
      description: "Complete smile makeover with implants and crowns",
      treatment: "All-on-4 Implants + Full Arch Restoration"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
            ✨ Patient Results
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Smiles
          </h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            Results from our satisfied patients. Witness the before and after magic 
            of our painless dental implants at Meera Dental Clinic!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              {/* Before/After Image */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Before & After</h3>
                <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src={transformation.beforeAfterImage}
                    alt={`${transformation.title} - Before and After Results`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="text-center">
                <button 
                  onClick={onBookAppointment}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-600 transition-all hover:scale-105 w-full"
                >
                  Get Your Transformation
                </button>
              </div>
            </div>
          ))}
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