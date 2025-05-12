import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-blue-900 font-bold text-2xl">
              THE IMPERIAL GATEWAY
            </a>
            <span className="hidden md:block ml-2 text-sm text-gray-600">
              New Delhi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#rooms" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Rooms
            </a>
            <a href="#amenities" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Amenities
            </a>
            <a href="#location" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Location
            </a>
            <a href="#gallery" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Gallery
            </a>
            <a href="#offers" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Special Offers
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
                More <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48 right-0 rounded">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                  Contact Us
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                  Dining
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                  Events
                </a>
              </div>
            </div>
          </nav>

          {/* Header Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-hyatt-darkGray hover:text-hyatt-blue transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-hyatt-darkGray hover:text-hyatt-blue transition-colors duration-200">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-hyatt-darkGray hover:text-hyatt-blue transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-hyatt-darkGray p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-hyatt-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#rooms" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Rooms
              </a>
              <a href="#amenities" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Amenities
              </a>
              <a href="#location" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Location
              </a>
              <a href="#gallery" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Gallery
              </a>
              <a href="#offers" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Special Offers
              </a>
              <a href="#" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Contact Us
              </a>
              <a href="#" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Dining
              </a>
              <a href="#" className="text-hyatt-darkGray py-2 border-b border-hyatt-border">
                Events
              </a>
              <a href="#" className="bg-hyatt-blue text-white px-4 py-3 rounded text-center mt-2">
                Book Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;