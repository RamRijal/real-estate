
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Shield, Car, Waves, Book, Trees, Gamepad, Home } from 'lucide-react';

const AmenitiesSection: React.FC = () => {
  const navigate = useNavigate();

  const amenities = [
    { icon: <Car className="w-6 h-6" />, label: 'Parking Space', filterKey: 'parking' },
    { icon: <Waves className="w-6 h-6" />, label: 'Swimming Pool', filterKey: 'pool' },
    { icon: <Shield className="w-6 h-6" />, label: 'Private Security', filterKey: 'security' },
    { icon: <Building2 className="w-6 h-6" />, label: 'Medical Center', filterKey: 'medical' },
    { icon: <Book className="w-6 h-6" />, label: 'Library Area', filterKey: 'library' },
    { icon: <Home className="w-6 h-6" />, label: 'King Size Beds', filterKey: 'king-beds' },
    { icon: <Trees className="w-6 h-6" />, label: 'Smart Homes', filterKey: 'smart-home' },
    { icon: <Gamepad className="w-6 h-6" />, label: "Kid's Playground", filterKey: 'playground' },
  ];

  const handleAmenityClick = (filterKey: string) => {
    navigate(`/properties?amenity=${filterKey}`);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#183152]">Building Amenities</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our properties feature a variety of premium amenities to enhance your living experience
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 text-center animate-fade-up cursor-pointer hover:bg-gray-100 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => handleAmenityClick(amenity.filterKey)}
            >
              <div className="w-12 h-12 mx-auto bg-[#B80002]/10 rounded-full flex items-center justify-center mb-4 text-[#B80002]">
                {amenity.icon}
              </div>
              <h3 className="font-medium text-[#B80002]">{amenity.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
