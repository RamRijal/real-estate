
import React, { useState } from 'react';
import { Image, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryImage = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => {
  return (
    <div
      className="overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'properties', name: 'Properties' },
    { id: 'interiors', name: 'Interiors' },
    { id: 'exteriors', name: 'Exteriors' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'events', name: 'Events' }
  ];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Modern Villa',
      category: 'properties'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Luxury Kitchen',
      category: 'interiors'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Modern Living Room',
      category: 'interiors'
    },
    {
      src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Luxury Bedroom',
      category: 'interiors'
    },
    {
      src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Modern House',
      category: 'exteriors'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Apartment Building',
      category: 'properties'
    },
    {
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Cozy Apartment',
      category: 'interiors'
    },
    {
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Luxury Home Exterior',
      category: 'exteriors'
    },
    {
      src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Swimming Pool',
      category: 'amenities'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Home Office',
      category: 'interiors'
    },
    {
      src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Property Event',
      category: 'events'
    },
    {
      src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Team Building',
      category: 'events'
    }
  ];

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center">
            <Image className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Our Gallery</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
              Browse through our collection of stunning properties, interior designs, and real estate events.
              Get inspired by our portfolio of premium real estate offerings.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={activeCategory === category.id ? "bg-primary" : ""}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl mb-8">
              {filteredImages.map((image, index) => (
                <GalleryImage
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => setSelectedImage(image.src)}
                />
              ))}
            </div>

            {/* Image Modal */}
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                <div className="relative max-w-4xl max-h-screen">
                  <button
                    className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <img
                    src={selectedImage}
                    alt="Full size"
                    className="max-w-full max-h-[85vh] rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
