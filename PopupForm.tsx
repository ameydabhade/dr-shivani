'use client';

import { useRouter } from 'next/navigation';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phoneNumber') as string,
      problem: formData.get('dentalConcern') as string, // Matches Apps Script 'problem'
      date: formData.get('preferredDate') as string,
      time: formData.get('preferredTime') as string,
    };

    // IMPORTANT: Replace with your actual Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycby-kU0u8sOXwu6-QdhrhEww-ntlwqkbzD8SLvm6scnAiDhseQyCWEfCjuHwQkyfr2P7/exec'; 
    
    const params = new URLSearchParams(data);
    // Add a callback parameter for JSONP if your script strictly requires it, 
    // or ensure your Apps Script is deployed to allow anonymous GET requests (which often handles CORS for simple GETs).
    // params.append('callback', 'handleGoogleAppsScriptResponse'); // Example for JSONP
    const fullURL = `${scriptURL}?${params.toString()}`;

    try {
      const response = await fetch(fullURL, {
        method: 'GET', 
        // mode: 'no-cors', // Consider 'no-cors' if you don't need to read the response and face CORS issues,
                           // but your script returns a meaningful response.
                           // For direct fetch to work and read response, your Apps Script deployment
                           // needs to allow access (e.g., "Execute as: Me", "Who has access: Anyone").
      });

      // Assuming the script returns JSON directly when no callback is specified in params.
      const result = await response.json(); 

      if (result.result === 'success') {
    onClose();
        router.push('/thank-you');
      } else {
        alert('There was an error submitting your appointment: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting form to Google Apps Script:', error);
      alert('An error occurred while booking your appointment. Please try again or contact support if the issue persists.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600">Book Your Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        
        <div className="bg-blue-50 p-3 md:p-4 rounded-lg mb-4 border-l-4 border-blue-200">
          <p className="text-sm md:text-base text-blue-600 text-center">
            <strong>Includes:</strong> Free Consultation & Digital scan
            <span className="text-orange-300 font-bold"> Worth ₹1,000</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-blue-600 text-white p-3 md:p-4 rounded-lg mb-4 text-center">
          <p className="text-sm md:text-base mb-1">⏰ This offer expires in:</p>
          <div className="text-2xl md:text-3xl font-bold">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
          <p className="text-xs md:text-sm mt-1">Book within the next 20 minutes for guaranteed Free Consultation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" name="fullName" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" name="phoneNumber" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Describe Your Dental Concern</label>
            <textarea name="dentalConcern" required rows={2} placeholder="Briefly describe your dental issue" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Date</label>
            <input type="date" name="preferredDate" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Time</label>
            <select name="preferredTime" required className="w-full p-2 md:p-3 border border-gray-300 rounded-lg">
              <option value="">Select Time Slot</option>
              <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
              <option value="evening">Evening (5:00 PM - 9:00 PM)</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 md:py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}