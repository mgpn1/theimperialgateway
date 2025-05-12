import React from 'react';
import { MapPin, Car, Train } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hyatt-navy mb-4">Location</h2>
          <p className="text-lg text-hyatt-darkGray max-w-3xl mx-auto">
            Nestled in the heart of New Delhi, our hotel offers easy access to major business districts, historical landmarks, and cultural attractions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-hyatt-gray p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold text-hyatt-navy mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-hyatt-blue mr-2" />
                Hotel Address
              </h3>
              <address className="not-italic mb-6">
                <p className="text-lg font-medium">The Imperial Gateway</p>
                <p>14, Connaught Place</p>
                <p>New Delhi, Delhi 110001</p>
                <p className="mt-2">Phone: <a href="tel:+911123456789" className="text-hyatt-blue hover:underline">+91 11 2345 6789</a></p>
                <p>Mobile: <a href="tel:+919876543210" className="text-hyatt-blue hover:underline">+91 98765 43210</a></p>
                <p>Email: <a href="mailto:info@theimperialgateway.com" className="text-hyatt-blue hover:underline">info@theimperialgateway.com</a></p>
              </address>

              <h3 className="text-xl font-bold text-hyatt-navy mb-4 flex items-center">
                <Car className="w-5 h-5 text-hyatt-blue mr-2" />
                Directions
              </h3>
              <div className="mb-6">
                <h4 className="font-medium mb-2">From Indira Gandhi International Airport (DEL):</h4>
                <ul className="list-disc list-inside space-y-1 text-hyatt-darkGray">
                  <li>Take NH44 toward Delhi</li>
                  <li>Continue onto Ring Road</li>
                  <li>Take the Connaught Place exit</li>
                  <li>Follow signs to the hotel (approximately 20 minutes)</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-hyatt-navy mb-4 flex items-center">
                <Train className="w-5 h-5 text-hyatt-blue mr-2" />
                Public Transportation
              </h3>
              <div>
                <h4 className="font-medium mb-2">From New Delhi Railway Station:</h4>
                <ul className="list-disc list-inside space-y-1 text-hyatt-darkGray">
                  <li>Take a taxi or ride share to Connaught Place</li>
                  <li>Follow signs to the hotel (approximately 15 minutes)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-hyatt-gray rounded-lg overflow-hidden h-full">
              <div className="h-96">
                {/* This would normally be a Google Maps iframe, but for the example we'll use a placeholder image */}
                <img 
                  src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-hyatt-navy mb-6">Nearby Attractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-hyatt-border rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hudson River" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-hyatt-navy">India Gate</h4>
                <p className="text-sm text-hyatt-darkGray">1.5 km from hotel</p>
              </div>
            </div>
            
            <div className="bg-white border border-hyatt-border rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ridge Hill Shopping" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-hyatt-navy">Janpath Market</h4>
                <p className="text-sm text-hyatt-darkGray">0.5 km from hotel</p>
              </div>
            </div>
            
            <div className="bg-white border border-hyatt-border rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2224861/pexels-photo-2224861.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Untermyer Gardens" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-hyatt-navy">Untermyer Gardens</h4>
                <p className="text-sm text-hyatt-darkGray">2.5 miles from hotel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;