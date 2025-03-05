
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRealEstate } from '@/context/RealEstateContext';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedListings from '@/components/home/FeaturedListings';
import AmenitiesSection from '@/components/home/AmenitiesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LatestPropertiesSection from '@/components/home/LatestPropertiesSection';
import InquirySection from '@/components/home/InquirySection';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { properties, featuredProperties, loading, setFilters, searchProperties, filters } = useRealEstate();
  const navigate = useNavigate();
  const initialLoadCompleted = useRef(false);

  useEffect(() => {
    // Prevent multiple calls on re-renders
    if (!initialLoadCompleted.current && featuredProperties.length === 0) {
      initialLoadCompleted.current = true;
      searchProperties({
        location: '',
        minPrice: 0,
        maxPrice: 1000000,
        beds: null,
        baths: null,
        propertyType: 'buy',
        quickPrice: null
      });
    }
  }, [featuredProperties.length, searchProperties]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      toast({
        title: "Search Error",
        description: "Please enter a location to search",
        variant: "destructive"
      });
      return;
    }
    
    // Set the search in context and navigate to search page
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleQuickPriceSelect = (priceRange: 'low' | 'medium' | 'high' | null) => {
    setFilters({ quickPrice: priceRange });
    if (priceRange) {
      const params = new URLSearchParams();
      params.set('price', priceRange);
      navigate(`/search?${params.toString()}`);
    }
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  const handlePropertyClick = (id: string) => {
    navigate(`/properties/${id}`);
  };

  const handleViewAllProperties = () => {
    navigate('/properties');
  };

  const handleInquirySubmit = () => {
    // Additional actions after inquiry submission if needed
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          onQuickPriceSelect={handleQuickPriceSelect}
        />
        <StatsSection />
        <ServicesSection onServiceClick={handleServiceClick} />
        <FeaturedListings 
          loading={loading}
          properties={featuredProperties}
          onPropertyClick={handlePropertyClick}
          onViewAllClick={handleViewAllProperties}
        />
        <LatestPropertiesSection 
          properties={properties}
          onPropertyClick={handlePropertyClick}
          onViewAllClick={handleViewAllProperties}
        />
        <AmenitiesSection />
        <TestimonialsSection />
        <InquirySection onInquirySubmit={handleInquirySubmit} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
