import React, { useEffect, useState } from 'react';
import { Building2, Home, Search, Bed, Bath, ArrowUpDownIcon, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRealEstate } from '@/context/RealEstateContext';
import Loader from '@/components/Loader';

const BuyProperties = () => {
  const { 
    setPropertyType, 
    filters, 
    setFilters, 
    searchProperties, 
    paginatedProperties, 
    loading, 
    currentPage, 
    setCurrentPage, 
    totalPages 
  } = useRealEstate();
  
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    setPropertyType('buy');
    // Initial search when component mounts
    searchProperties({...filters, propertyType: 'buy'});
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchProperties({...filters, propertyType: 'buy'});
  };

  const getSortedProperties = () => {
    if (sortOption === 'default') return paginatedProperties;
    
    return [...paginatedProperties].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
      
      if (sortOption === 'price-asc') return priceA - priceB;
      if (sortOption === 'price-desc') return priceB - priceA;
      
      // Sort by number of bedrooms
      if (sortOption === 'beds') {
        const bedsA = parseInt(a.specs.beds);
        const bedsB = parseInt(b.specs.beds);
        return bedsB - bedsA;
      }
      
      return 0;
    });
  };

  const handlePropertyClick = (propertyId: number) => {
    // Implement property click handling logic here
    console.log(`Property ${propertyId} clicked`);
  };

  // Pagination handlers
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center mb-12">
            <Building2 className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Properties For Sale</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
              Browse our selection of premium properties available for purchase. Find your dream home today!
            </p>
            
            {/* Search and filter controls */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-12">
              <form onSubmit={handleSearch}>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <Input 
                      placeholder="Enter location" 
                      value={filters.location}
                      onChange={(e) => setFilters({ location: e.target.value })}
                      className="w-full"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90" type="submit">
                    <Search className="w-4 h-4 mr-2" />
                    Search Properties
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:w-auto w-full"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
                
                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 animate-fade-up">
                    <div>
                      <label className="block text-sm font-medium mb-1">Min Price</label>
                      <Input 
                        type="number" 
                        placeholder="Min price"
                        value={filters.minPrice === 0 ? '' : filters.minPrice}
                        onChange={(e) => setFilters({ minPrice: Number(e.target.value) || 0 })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Max Price</label>
                      <Input 
                        type="number" 
                        placeholder="Max price"
                        value={filters.maxPrice === 0 ? '' : filters.maxPrice}
                        onChange={(e) => setFilters({ maxPrice: Number(e.target.value) || 0 })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Sort By</label>
                      <select 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                      >
                        <option value="default">Default</option>
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                        <option value="beds">Most Bedrooms</option>
                      </select>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            {/* Loading state */}
            {loading ? (
              <Loader text="Loading properties..." />
            ) : (
              <>
                {/* Property count */}
                <div className="w-full max-w-6xl flex-col md:flex justify-between items-center mb-6">
                  <p className="text-gray-600 mb-2">
                    Showing <span className="font-semibold">{paginatedProperties.length}</span> properties
                    {totalPages > 1 && (
                      <span> (Page {currentPage} of {totalPages})</span>
                    )}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Sort:</span>
                    <select 
                      className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="default">Default</option>
                      <option value="price-asc">Price (Low to High)</option>
                      <option value="price-desc">Price (High to Low)</option>
                      <option value="beds">Most Bedrooms</option>
                    </select>
                  </div>
                </div>

                {/* Property listings */}
                {paginatedProperties.length === 0 ? (
                  <div className="w-full max-w-6xl bg-white rounded-lg shadow p-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setFilters({
                          location: '',
                          minPrice: 0,
                          maxPrice: 1000000,
                          beds: null,
                          baths: null,
                          propertyType: 'buy'
                        });
                        setTimeout(() => searchProperties({...filters, propertyType: 'buy', location: ''}), 100);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                      {getSortedProperties()
                        .filter(property => !property.price.includes('/mo'))
                        .map((property, index) => (
                          <div
                            key={property.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => handlePropertyClick(property.id)}
                          >
                            <div className="relative h-56">
                              <img
                                src={property.image}
                                alt={property.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                For Sale
                              </div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                              <div className="flex items-center mb-3 text-gray-600">
                                <Home className="w-4 h-4 mr-1" />
                                <span className="text-sm">{property.location}</span>
                              </div>
                              <p className="text-primary font-bold text-xl mb-4">{property.price}</p>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {property.description}
                              </p>
                              <div className="flex justify-between text-gray-600 text-sm border-t pt-4">
                                <div className="flex items-center">
                                  <Bed className="w-4 h-4 mr-1" />
                                  <span>{property.specs.beds} Beds</span>
                                </div>
                                <div className="flex items-center">
                                  <Bath className="w-4 h-4 mr-1" />
                                  <span>{property.specs.baths} Baths</span>
                                </div>
                                <div>
                                  <span>{property.specs.sqft} Sq Ft</span>
                                </div>
                              </div>
                              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Pagination controls */}
                    {totalPages > 1 && (
                      <div className="flex justify-center mt-10 gap-2">
                        <Button
                          variant="outline"
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                          className="flex items-center gap-1"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        
                        <div className="flex gap-1">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                              key={page}
                              variant={currentPage === page ? "default" : "outline"}
                              className={`w-10 h-10 p-0 ${currentPage === page ? 'bg-primary text-white' : ''}`}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </Button>
                          ))}
                        </div>
                        
                        <Button
                          variant="outline"
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                          className="flex items-center gap-1"
                        >
                          Next
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyProperties;
