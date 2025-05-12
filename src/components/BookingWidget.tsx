import React from 'react';

const BookingWidget: React.FC = () => {
  return (
    <section className="bg-white shadow-hyatt py-2 sticky top-16 md:top-20 z-40">
      <div className="container mx-auto px-4">
        <a 
          href="#" 
          className="block w-full md:w-auto md:inline-block bg-hyatt-blue hover:bg-hyatt-navy text-white text-center font-medium px-6 py-2.5 rounded transition-colors duration-200"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default BookingWidget;