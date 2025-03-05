
import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';
import { Property } from '@/types/property';
import { PropertyType, PropertyFilters, RealEstateContextType, defaultFilters } from '@/types/realEstate';
import { dummyProperties } from '@/data/propertyData';
import { searchProperties, getFeaturedProperties, paginateProperties } from '@/services/propertyService';
import { contactAgent as contactAgentService } from '@/services/contactService';

// Create the context
const RealEstateContext = createContext<RealEstateContextType | undefined>(undefined);

// Provider component
export const RealEstateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFiltersState] = useState<PropertyFilters>(defaultFilters);
  const [propertyType, setPropertyTypeState] = useState<PropertyType>('buy');
  const [loading, setLoading] = useState<boolean>(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage] = useState<number>(12);
  const initialLoadCompleted = useRef(false);
  
  // Load properties initially - prevent infinite loading loop
  useEffect(() => {
    // Only load properties once, not on every render
    if (!initialLoadCompleted.current) {
      initialLoadCompleted.current = true;
      setProperties(dummyProperties);
    }
  }, []);

  // Paginate properties
  const { paginatedProperties, totalPages } = paginateProperties(
    properties,
    currentPage,
    perPage
  );

  const setFilters = (newFilters: Partial<PropertyFilters>) => {
    setFiltersState((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const resetFilters = () => {
    setFiltersState(defaultFilters);
  };

  const setPropertyType = (type: PropertyType) => {
    setPropertyTypeState(type);
    setFiltersState(prev => ({
      ...prev,
      propertyType: type
    }));
    // Reset to first page when changing property type
    setCurrentPage(1);
  };

  const handleSearchProperties = (searchFilters: PropertyFilters) => {
    // Reset to first page when searching
    setCurrentPage(1);
    searchProperties(searchFilters, setProperties, setLoading);
  };

  const handleContactAgent = (name: string, email: string, message: string) => {
    contactAgentService(name, email, message, setLoading);
  };

  // Get featured properties
  const featuredProperties = getFeaturedProperties(properties);

  return (
    <RealEstateContext.Provider
      value={{
        filters,
        setFilters,
        resetFilters,
        propertyType,
        setPropertyType,
        loading,
        setLoading,
        properties,
        featuredProperties,
        currentPage,
        setCurrentPage,
        perPage,
        totalPages,
        paginatedProperties,
        searchProperties: handleSearchProperties,
        contactAgent: handleContactAgent
      }}
    >
      {children}
    </RealEstateContext.Provider>
  );
};

// Custom hook to use the context
export const useRealEstate = () => {
  const context = useContext(RealEstateContext);
  if (context === undefined) {
    throw new Error('useRealEstate must be used within a RealEstateProvider');
  }
  return context;
};
