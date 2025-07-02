'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

// Define types for the Google Script response and the window object
interface GoogleScriptResponse {
  result: 'success' | 'error';
  message: string;
}

declare global {
  interface Window {
    handleGoogleScriptResponse?: (response: GoogleScriptResponse) => void;
  }
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'dental-implants'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // For now, we'll just close the popup and show an alert
    alert('Thank you for your interest! We will contact you soon.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header with Countdown */}
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="text-center">
            <div className="bg-yellow-400 text-primary-900 px-4 py-1 rounded-full text-sm font-bold mb-3 inline-block">
              🎉 Limited Time Offer
            </div>
            <h2 className="text-2xl font-bold mb-2">Free Consultation + Digital Scan</h2>
            <p className="text-primary-100 mb-4">Worth ₹1500 - Absolutely FREE!</p>
            
            {/* Countdown Timer */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4">
              <p className="text-sm mb-2">Offer expires in:</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs">MINUTES</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs">SECONDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="dental-implants">Dental Implants</option>
                <option value="smile-design">Smile Design</option>
                <option value="aligners">Aligners</option>
                <option value="laser-dentistry">Laser Dentistry</option>
                <option value="full-mouth-rehabilitation">Full Mouth Rehabilitation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white py-3 px-6 rounded-lg font-bold hover:from-primary-600 hover:to-purple-600 transition-all hover:scale-105"
            >
              Book My Free Consultation
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">
              📞 Or call us directly:
            </p>
            <div className="space-y-1">
              <a href="tel:+918108404057" className="block text-primary-600 font-bold hover:underline">
                +91 81084 04057
              </a>
              <a href="tel:+918108404058" className="block text-primary-600 font-bold hover:underline">
                +91 81084 04058
              </a>
            </div>
          </div>

          <div className="mt-4 text-center bg-primary-50 p-4 rounded-lg">
            <p className="text-primary-100">Book your consultation with Dr. Shivani</p>
            <p className="text-xs text-primary-400 mt-1">
              MDS, BDS, Fellowship in Oral Implantology, MSc in Facial Cosmetology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}