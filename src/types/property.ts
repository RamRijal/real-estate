export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  images?: string[];
  specs: {
    beds: string;
    baths: string;
    sqft: string;
  };
  description: string;
  amenities: string[];
  featured?: boolean;
  agent?: {
    name: string;
    image: string;
    phone: string;
    email: string;
    experience: string;
  };
  highlights?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}
