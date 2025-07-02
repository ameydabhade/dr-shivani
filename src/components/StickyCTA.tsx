interface StickyCTAProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCTAProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary-500 shadow-lg z-40 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-primary-600">Ready to Transform Your Smile?</h3>
          <p className="text-sm text-gray-600">Book your free consultation with Dr. Shivani today!</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={onBookAppointment}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-purple-600 transition-colors"
          >
            Book Now
          </button>
          <a href="tel:+918108404057" className="bg-primary-700 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary-700 transition-colors">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
} 