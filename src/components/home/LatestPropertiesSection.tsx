
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Property } from '@/types/property';

interface LatestPropertiesSectionProps {
  properties: Property[];
  onViewAllClick: () => void;
  onPropertyClick: (id: string) => void;
}

const LatestPropertiesSection: React.FC<LatestPropertiesSectionProps> = ({
  properties,
  onViewAllClick,
  onPropertyClick
}) => {
  // Take the most recent 4 properties (non-featured ones)
  const latestProperties = properties
    .filter(property => !property.featured)
    .slice(0, 4);

  return (
    <section className="py-16 relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#B80002] bg-opacity-90"></div>
      </div>

      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-white">Latest Properties</h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          Discover our most recently added properties and be the first to find your perfect home
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProperties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onPropertyClick(property.id)}
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 ${property.price.includes('/mo') ? 'bg-[#B80002]' : 'bg-[#B80002]'} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {property.price.includes('/mo') ? 'For Rent' : 'For Sale'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-[#B80002] mr-1" />
                  <span className="text-gray-600 text-sm">{property.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#B80002]">{property.title}</h3>
                <p className="text-[#B80002] font-bold mb-4">{property.price}</p>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>{property.specs.beds} Beds</span>
                  <span>{property.specs.baths} Baths</span>
                  <span>{property.specs.sqft} Sq Ft</span>
                </div>
                <Button
                  className="w-full mt-4 bg-[#B80002] hover:bg-[#B80002]/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPropertyClick(property.id);
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="text-[#B80002] border-[#B80002] hover:bg-[#B80002] hover:text-white"
            onClick={onViewAllClick}
          >
            View All Properties
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestPropertiesSection;
