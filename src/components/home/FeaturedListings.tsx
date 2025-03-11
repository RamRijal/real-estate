
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Loader from '@/components/Loader';
import { Property } from '@/types/property';

interface FeaturedListingsProps {
  loading: boolean;
  properties: Property[];
  onPropertyClick: (id: string) => void;
  onViewAllClick: () => void;
}

const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  loading,
  properties,
  onPropertyClick,
  onViewAllClick
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-[#183152]">Discover Popular Listings</h2>
        <p className="text-center  text-base text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our handpicked selection of premium properties popular right now
        </p>

        {loading ? (
          <Loader text="Loading featured properties..." />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.slice(0, 4).map((listing, index) => (
              <div
                key={listing.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onPropertyClick(listing.id)}
              >
                <div className="relative h-48">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${listing.price.includes('/mo') ? 'bg-[#B80002]' : 'bg-[#B80002]'} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {listing.price.includes('/mo') ? 'For Rent' : 'For Sale'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 text-[#B80002] mr-1" />
                    <span className="text-gray-600 text-sm">{listing.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#B80002]">{listing.title}</h3>
                  <p className="text-[#B80002] font-bold mb-4">{listing.price}</p>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>{listing.specs.beds} Beds</span>
                    <span>{listing.specs.baths} Baths</span>
                    <span>{listing.specs.sqft} Sq Ft</span>
                  </div>
                  <Button
                    className="w-full mt-4 bg-[#B80002] hover:bg-[#B80002]/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPropertyClick(listing.id);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

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

export default FeaturedListings;
