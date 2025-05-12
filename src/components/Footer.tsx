import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hyatt-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">The Imperial Gateway</h3>
            <address className="not-italic space-y-2">
              <p>14, Connaught Place</p>
              <p>New Delhi, Delhi 110001</p>
              <p>Phone: <a href="tel:+911123456789" className="hover:text-hyatt-lightBlue transition-colors duration-200">+91 11 2345 6789</a></p>
              <p>Mobile: <a href="tel:+919876543210" className="hover:text-hyatt-lightBlue transition-colors duration-200">+91 98765 43210</a></p>
              <p>Email: <a href="mailto:info@theimperialgateway.com" className="hover:text-hyatt-lightBlue transition-colors duration-200">info@theimperialgateway.com</a></p>
            </address>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Amenities</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Dining</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Special Offers</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Gallery</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Hotel Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Business Center</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Meeting Spaces</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Fitness Center</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Transportation</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Accessibility</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Pet Policy</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">The Imperial Gateway Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Imperial Gateway Rewards</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Business Travel</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Travel Agents</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Imperial Gateway Gift Cards</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Imperial Gateway Club</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Investor Relations</a></li>
              <li><a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Development Opportunities</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-hyatt-blue opacity-20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 Pro Web Makers. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Cookie Center</a>
            <span>|</span>
            <a href="#" className="hover:text-hyatt-lightBlue transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;