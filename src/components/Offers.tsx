import React from 'react';
import { Calendar, Percent, Tag } from 'lucide-react';

type OfferType = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

const offers: OfferType[] = [
  {
    id: 1,
    title: "Weekend Getaway Package",
    description: "Enjoy 20% off room rates for weekend stays plus complimentary breakfast for two.",
    icon: <Calendar className="w-8 h-8 text-hyatt-blue" />,
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Delhi City Explorer Package",
    description: "Experience Delhi with our exclusive package including city tour, airport transfers, and special dining discounts.",
    icon: <Percent className="w-8 h-8 text-hyatt-blue" />,
    image: "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Park, Stay & Play Package",
    description: "Free parking and $25 daily credit to use at our restaurant or bar during your stay.",
    icon: <Tag className="w-8 h-8 text-hyatt-blue" />,
    image: "https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const Offers: React.FC = () => {
  return (
    <section id="offers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hyatt-navy mb-4">Special Offers</h2>
          <p className="text-lg text-hyatt-darkGray max-w-3xl mx-auto">
            Enjoy exclusive offers and packages designed to enhance your luxury stay at The Imperial Gateway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white border border-hyatt-border rounded-lg overflow-hidden shadow-sm hover:shadow-hyatt transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full">
                  {offer.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-hyatt-navy mb-3">{offer.title}</h3>
                <p className="text-hyatt-darkGray mb-4">{offer.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a 
                    href="#" 
                    className="text-hyatt-blue hover:text-hyatt-navy font-medium transition-colors duration-200"
                  >
                    Learn More
                  </a>
                  <a 
                    href="#" 
                    className="bg-hyatt-blue hover:bg-hyatt-navy text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-hyatt-lightBlue p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-hyatt-navy mb-2">Sign Up for Exclusive Offers</h3>
              <p className="text-hyatt-darkGray">
                Subscribe to our newsletter to receive exclusive offers, latest news, and updates from The Imperial Gateway.
              </p>
            </div>
            <div className="md:w-2/5">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded border border-hyatt-border focus:outline-none focus:ring-2 focus:ring-hyatt-blue"
                />
                <button 
                  type="submit"
                  className="bg-hyatt-blue hover:bg-hyatt-navy text-white font-medium px-6 py-2 rounded transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;