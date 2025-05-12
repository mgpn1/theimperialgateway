import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type GalleryImageType = {
  id: number;
  src: string;
  alt: string;
  category: 'room' | 'exterior' | 'amenities' | 'dining';
};

const galleryImages: GalleryImageType[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "King Bedroom",
    category: 'room'
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Hotel Exterior",
    category: 'exterior'
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Swimming Pool",
    category: 'amenities'
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Restaurant",
    category: 'dining'
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Twin Bedroom",
    category: 'room'
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Bathroom",
    category: 'room'
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Fitness Center",
    category: 'amenities'
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Lobby",
    category: 'amenities'
  },
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="py-16 bg-hyatt-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hyatt-navy mb-4">Photo Gallery</h2>
          <p className="text-lg text-hyatt-darkGray max-w-3xl mx-auto mb-8">
            Explore our hotel through our photo gallery and discover what makes The Imperial Gateway special.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === 'all' 
                  ? 'bg-hyatt-blue text-white' 
                  : 'bg-white text-hyatt-darkGray hover:bg-hyatt-lightBlue'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === 'room' 
                  ? 'bg-hyatt-blue text-white' 
                  : 'bg-white text-hyatt-darkGray hover:bg-hyatt-lightBlue'
              }`}
              onClick={() => setActiveFilter('room')}
            >
              Rooms
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === 'exterior' 
                  ? 'bg-hyatt-blue text-white' 
                  : 'bg-white text-hyatt-darkGray hover:bg-hyatt-lightBlue'
              }`}
              onClick={() => setActiveFilter('exterior')}
            >
              Exterior
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === 'amenities' 
                  ? 'bg-hyatt-blue text-white' 
                  : 'bg-white text-hyatt-darkGray hover:bg-hyatt-lightBlue'
              }`}
              onClick={() => setActiveFilter('amenities')}
            >
              Amenities
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === 'dining' 
                  ? 'bg-hyatt-blue text-white' 
                  : 'bg-white text-hyatt-darkGray hover:bg-hyatt-lightBlue'
              }`}
              onClick={() => setActiveFilter('dining')}
            >
              Dining
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-hyatt-blue transition-colors duration-200"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-hyatt-blue transition-colors duration-200"
            onClick={() => navigateLightbox('prev')}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img 
            src={filteredImages[currentImageIndex].src} 
            alt={filteredImages[currentImageIndex].alt} 
            className="max-w-full max-h-[90vh] object-contain"
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-hyatt-blue transition-colors duration-200"
            onClick={() => navigateLightbox('next')}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <p className="font-medium text-lg">{filteredImages[currentImageIndex].alt}</p>
            <p className="text-sm text-gray-300">{currentImageIndex + 1} of {filteredImages.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;