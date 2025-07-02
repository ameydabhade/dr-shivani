import Image from 'next/image';

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 md:py-6">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <div className="relative w-48 h-16 mx-auto mb-4 md:mb-0 md:mx-0">
            <Image 
              src="/images/logo.png" 
              alt="Meera Dental Clinic Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold text-primary-600 mb-1">Meera Dental Clinic</h1>
            <p className="text-sm text-primary-600 mb-2 md:mb-0">
              📍 Bhakti Avenue, Shop 10, Plot No 3B, Sector 46A, Seawoods West, Navi Mumbai
            </p>
            <p className="text-xs text-gray-600">
              Working Hours: 10 AM - 2 PM | 5:30 PM - 9:30 PM
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+918108404057" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors text-center">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </header>
  );
}