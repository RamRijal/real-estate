
import { toast } from "@/hooks/use-toast";
import { PropertyFilters } from "@/types/realEstate";
import { Property } from "@/types/property";
import { dummyProperties } from "@/data/propertyData";

/**
 * Search for properties based on the provided filters
 */
export const searchProperties = (
  searchFilters: PropertyFilters,
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  setLoading(true);
  
  // Simulate API call with timeout
  setTimeout(() => {
    try {
      let filtered = dummyProperties.filter(property => {
        // Filter by property type (buy/rent)
        if (searchFilters.propertyType === 'buy' && property.price.includes('/mo')) return false;
        if (searchFilters.propertyType === 'rent' && !property.price.includes('/mo')) return false;
        
        // Filter by location if specified
        if (searchFilters.location && !property.location.toLowerCase().includes(searchFilters.location.toLowerCase())) return false;
        
        // Filter by price range
        const numericPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
        if (numericPrice < searchFilters.minPrice) return false;
        if (searchFilters.maxPrice > 0 && numericPrice > searchFilters.maxPrice) return false;
        
        // Apply quick price filter if specified
        if (searchFilters.quickPrice) {
          if (searchFilters.propertyType === 'buy') {
            if (searchFilters.quickPrice === 'low' && numericPrice > 300000) return false;
            if (searchFilters.quickPrice === 'medium' && (numericPrice < 300000 || numericPrice > 600000)) return false;
            if (searchFilters.quickPrice === 'high' && numericPrice < 600000) return false;
          } else {
            // Rent prices
            if (searchFilters.quickPrice === 'low' && numericPrice > 1500) return false;
            if (searchFilters.quickPrice === 'medium' && (numericPrice < 1500 || numericPrice > 3000)) return false;
            if (searchFilters.quickPrice === 'high' && numericPrice < 3000) return false;
          }
        }
        
        // Filter by beds if specified
        if (searchFilters.beds !== null) {
          const beds = parseInt(property.specs.beds);
          if (beds < searchFilters.beds) return false;
        }
        
        // Filter by baths if specified
        if (searchFilters.baths !== null) {
          const baths = parseInt(property.specs.baths);
          if (baths < searchFilters.baths) return false;
        }
        
        return true;
      });
      
      setProperties(filtered);
      
      toast({
        title: "Search Complete",
        description: `Found ${filtered.length} properties matching your criteria.`
      });
    } catch (error) {
      console.error("Error searching properties:", error);
      toast({
        title: "Search Error",
        description: "There was an error searching properties. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, 1000);
};

/**
 * Get featured properties from the list of properties
 */
export const getFeaturedProperties = (properties: Property[]): Property[] => {
  return properties.filter(property => property.featured);
};

/**
 * Get properties by type (buy or rent)
 */
export const getPropertiesByType = (properties: Property[], type: 'buy' | 'rent'): Property[] => {
  return properties.filter(property => {
    if (type === 'buy') return !property.price.includes('/mo');
    if (type === 'rent') return property.price.includes('/mo');
    return true;
  });
};

/**
 * Paginate properties
 */
export const paginateProperties = (
  properties: Property[],
  page: number,
  perPage: number = 12
): {
  paginatedProperties: Property[],
  totalPages: number
} => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedProperties = properties.slice(startIndex, endIndex);
  const totalPages = Math.ceil(properties.length / perPage);
  
  return {
    paginatedProperties,
    totalPages
  };
};
