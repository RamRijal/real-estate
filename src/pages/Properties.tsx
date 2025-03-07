
import React from 'react';
import { Building2, Home, Key, MapPin, Bed, Bath, ArrowRight, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRealEstate } from '@/context/RealEstateContext';
import Loader from '@/components/Loader';

const Properties = () => {
  const navigate = useNavigate();
  const { properties, loading } = useRealEstate();

  const handlePropertyClick = (id: string) => {
    navigate(`/properties/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center">
            <Building2 className="w-16 h-16 text-[#B80002] mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Our Properties</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
              Browse through our extensive collection of premium properties designed to meet your unique needs and preferences.
            </p>

            <div className="flex justify-center gap-4 mb-12">
              <Button
                className="bg-[#B80002] hover:bg-[#B80002]/90"
                onClick={() => navigate('/properties/buy')}
              >
                <Home className="mr-2 h-5 w-5" />
                For Sale
              </Button>
              <Button
                className="bg-[#183152] hover:bg-[#183152]/90"
                onClick={() => navigate('/properties/rent')}
              >
                <Key className="mr-2 h-5 w-5" />
                For Rent
              </Button>
            </div>

            {loading ? (
              <Loader text="Loading properties..." />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {properties.map((property, index) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => handlePropertyClick(property.id)}
                  >
                    <div className="relative h-48">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute flex items-center top-4 left-4 ${property.price.includes('/mo') ? 'bg-white text-[#183152]' : 'bg-white text-[#B80002]'}  px-3 py-1 rounded-full text-sm font-semibold`}>
                        <MapPin className={`w-4 h-4 ${property.price.includes('/mo') ? 'bg-white text-[#183152]' : 'bg-white text-[#B80002]'}  mr-1`} />
                        {property.location}
                      </div>
                      <div className={`absolute top-4 right-4 ${property.price.includes('/mo') ? 'bg-[#183152]' : 'bg-[#B80002]'} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {property.price.includes('/mo') ? 'For Rent' : 'For Sale'}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-[#183152]">{property.title}</h3>
                      <p className={`font-semibold text-lg mb-4 ${property.price.includes('/mo') ? 'text-[#183152]' : 'text-[#B80002]'}`}>{property.price}</p>
                      <div className="flex justify-between text-gray-600 text-sm">
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.specs.beds} Beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{property.specs.baths} Baths</span>
                        </div>
                        <span>{property.specs.sqft} Sq Ft</span>
                      </div>
                      {/* <div className="flex items-center justify-between gap-2 p-2 mt-4 rounded-lg bg-gray-200">
                        <div className="flex gap-1 items-center">
                          <img className='object-cover h-8 w-8 rounded-full border-2 border-red-500' src={property.agent.image} />
                          <div className="flex flex-col">
                            <span className='text-md font-semibold'>{property.agent.name}</span>
                            <span className='text-xs font-medium text-gray-500 -mt-1'>Agent</span>
                          </div>
                        </div>
                        <Phone className={`w-6 h-6 ${property.price.includes('/mo') ? ' text-[#183152]' : ' text-[#B80002]'}  mr-1`} />
                      </div> */}
                      <Button
                        className={`w-full mt-4 ${property.price.includes('/mo') ? 'bg-[#183152] hover:bg-[#183152]/90' : 'bg-[#B80002] hover:bg-[#B80002]/90'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePropertyClick(property.id);
                        }}
                      >
                        View Details<ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
