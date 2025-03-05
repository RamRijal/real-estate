
import { Property } from '@/types/property';

export type PropertyType = 'buy' | 'rent';

export interface PropertyFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  beds: number | null;
  baths: number | null;
  propertyType: PropertyType;
  quickPrice?: 'low' | 'medium' | 'high' | null;
}

// Default filters as a constant export
export const defaultFilters: PropertyFilters = {
  location: '',
  minPrice: 0,
  maxPrice: 1000000,
  beds: null,
  baths: null,
  propertyType: 'buy',
  quickPrice: null,
};

export interface RealEstateContextType {
  filters: PropertyFilters;
  setFilters: (filters: Partial<PropertyFilters>) => void;
  resetFilters: () => void;
  propertyType: PropertyType;
  setPropertyType: (type: PropertyType) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  properties: Property[];
  featuredProperties: Property[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  perPage: number;
  totalPages: number;
  paginatedProperties: Property[];
  searchProperties: (filters: PropertyFilters) => void;
  contactAgent: (name: string, email: string, message: string) => void;
}
