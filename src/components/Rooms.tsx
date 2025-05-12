import React from 'react';
import { Check } from 'lucide-react';
import roomKing from '../../images_m/room_king.jpg';
import roomDouble from '../../images_m/room_double.jpg';
import roomSuite from '../../images_m/room_suite.jpg';

type RoomType = {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  price: string;
};

const roomData: RoomType[] = [
  {
    id: 1,
    name: "King Bed Room",
    description: "Elegant room with a king-size bed, featuring panoramic views of Delhi's skyline and luxurious amenities.",
    image: roomKing,
    features: ["High-Speed Wi-Fi", "55\" Smart HDTV", "Luxury Linens", "Executive Work Desk", "Minibar", "City View"],
    price: "₹12,900",
  },
  {
    id: 2,
    name: "Two Queen Beds Room",
    description: "Luxurious room with two queen beds, perfect for families or groups. Features a private balcony with city views.",
    image: roomDouble,
    features: ["High-Speed Wi-Fi", "55\" Smart HDTV", "Luxury Linens", "Executive Work Desk", "Minibar", "Private Balcony", "City View"],
    price: "₹14,900",
  },
  {
    id: 3,
    name: "King Suite",
    description: "Luxury suite with separate living room and bedroom featuring a king-size bed. Includes a private balcony with panoramic city views.",
    image: roomSuite,
    features: ["High-Speed Wi-Fi", "55\" Smart HDTV", "Luxury Linens", "Executive Work Desk", "Minibar", "Private Balcony", "City View", "Butler Service"],
    price: "₹18,900",
  },
];

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hyatt-navy mb-4">Rooms & Suites</h2>
          <p className="text-lg text-hyatt-darkGray max-w-3xl mx-auto">
            Experience luxury and sophistication in our opulent rooms and suites, designed to provide the ultimate comfort and convenience for discerning travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomData.map((room) => (
            <div key={room.id} className="bg-white border border-hyatt-border rounded-lg overflow-hidden shadow-sm hover:shadow-hyatt transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-hyatt-navy mb-2">{room.name}</h3>
                <p className="text-hyatt-darkGray mb-4">{room.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-hyatt-darkGray mb-2">Room Features:</h4>
                  <ul className="space-y-1">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="text-hyatt-blue w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <span className="block text-sm text-hyatt-darkGray">Starting from</span>
                    <span className="text-xl font-bold text-hyatt-navy">{room.price}<span className="text-sm font-normal"> / night</span></span>
                  </div>
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

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border-2 border-hyatt-blue text-hyatt-blue hover:bg-hyatt-blue hover:text-white font-medium px-6 py-3 rounded transition-colors duration-200"
          >
            View All Rooms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rooms;