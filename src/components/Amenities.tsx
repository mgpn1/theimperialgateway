import React from 'react';
import { Wifi, Coffee, Dumbbell, Utensils, ParkingMeter as Parking, MountainSnow, Tv, ShowerHead } from 'lucide-react';

type AmenityType = {
  id: number;
  icon: React.ReactNode;
  name: string;
  description: string;
};

const amenities: AmenityType[] = [
  {
    id: 1,
    icon: <Wifi className="w-10 h-10 text-hyatt-blue" />,
    name: "Free Wi-Fi",
    description: "Stay connected with complimentary high-speed internet access throughout the hotel."
  },
  {
    id: 2,
    icon: <Coffee className="w-10 h-10 text-hyatt-blue" />,
    name: "Breakfast",
    description: "Start your day right with our delicious breakfast options available in the Gallery Kitchen."
  },
  {
    id: 3,
    icon: <Dumbbell className="w-10 h-10 text-hyatt-blue" />,
    name: "24/7 Fitness Center",
    description: "Maintain your workout routine in our well-equipped fitness center, open 24 hours a day."
  },
  {
    id: 4,
    icon: <Utensils className="w-10 h-10 text-hyatt-blue" />,
    name: "Restaurant & Bar",
    description: "Enjoy a variety of dining options at our on-site restaurant and relax with a drink at the bar."
  },
  {
    id: 5,
    icon: <Parking className="w-10 h-10 text-hyatt-blue" />,
    name: "Parking",
    description: "Convenient on-site parking available for hotel guests (fees may apply)."
  },
  {
    id: 6,
    icon: <MountainSnow className="w-10 h-10 text-hyatt-blue" />,
    name: "Pool & Hot Tub",
    description: "Relax and unwind in our indoor swimming pool and hot tub."
  },
  {
    id: 7,
    icon: <Tv className="w-10 h-10 text-hyatt-blue" />,
    name: "In-Room Entertainment",
    description: "49-inch HDTV with premium channels and streaming capabilities in every room."
  },
  {
    id: 8,
    icon: <ShowerHead className="w-10 h-10 text-hyatt-blue" />,
    name: "Luxury Bathroom",
    description: "Enjoy our luxurious bathrooms with KenetMD bath amenities."
  },
];

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-16 bg-hyatt-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hyatt-navy mb-4">Hotel Amenities</h2>
          <p className="text-lg text-hyatt-darkGray max-w-3xl mx-auto">
            Enjoy a range of amenities designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <div 
              key={amenity.id} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-hyatt transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-hyatt-navy mb-2">{amenity.name}</h3>
              <p className="text-hyatt-darkGray">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-hyatt-navy mb-4">Imperial Gateway Rewards</h3>
              <p className="text-hyatt-darkGray mb-4">
                As an Imperial Gateway Rewards member, you'll enjoy exclusive benefits during your stay at The Imperial Gateway.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-hyatt-blue mr-2">•</span>
                  <span>Earn 5 Base Points for every ₹100 spent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hyatt-blue mr-2">•</span>
                  <span>Member rates when you book direct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hyatt-blue mr-2">•</span>
                  <span>Free Wi-Fi and Airport Transfers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hyatt-blue mr-2">•</span>
                  <span>Complimentary Breakfast</span>
                </li>
              </ul>
              <a 
                href="#" 
                className="inline-block mt-6 bg-hyatt-blue hover:bg-hyatt-navy text-white px-6 py-2 rounded font-medium transition-colors duration-200"
              >
                Join Rewards Program
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hotel Lobby" 
                className="w-full h-64 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;