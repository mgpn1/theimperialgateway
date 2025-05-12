import React from 'react';
import heroImage from '../../images_m/hero.jpg';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 relative h-[80vh] min-h-[600px]">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to The Imperial Gateway
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Experience luxury and elegance in the heart of Delhi, just minutes from major landmarks and business districts. Our 5-star hotel offers unparalleled views of the city skyline and world-class amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">

            <a 
              href="#" 
              className="bg-white hover:bg-hyatt-gray text-hyatt-navy font-medium px-6 py-3 rounded transition-colors duration-200 text-center"
            >
              View Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;