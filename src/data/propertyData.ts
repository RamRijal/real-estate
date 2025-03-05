
import { Property } from "@/types/property";

// Dummy data for properties
export const dummyProperties: Property[] = [
  {
    id: "1",
    title: 'Modern Family Home',
    location: 'Downtown',
    price: '$650,000',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '4', baths: '3', sqft: '2,200' },
    description: 'A beautiful modern family home in the heart of downtown. Features open concept living, high ceilings, and premium finishes throughout. This property offers an ideal combination of luxury and convenience, with easy access to schools, shopping centers, and public transportation.',
    amenities: ['Parking', 'Garden', 'Security System', 'Central AC', 'Hardwood Floors', 'Home Office', 'Smart Home Features'],
    featured: true
  },
  {
    id: "2",
    title: 'Luxury Villa with Pool',
    location: 'Hillside',
    price: '$1,500,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '6', baths: '5', sqft: '4,500' },
    description: 'Spectacular luxury villa with breathtaking views, infinity pool, and premium amenities. Perfect for those seeking privacy and comfort. This exclusive property boasts state-of-the-art finishes, expansive living areas, and meticulously landscaped grounds that create a personal resort-like experience.',
    amenities: ['Swimming Pool', 'Home Theater', 'Wine Cellar', 'Guest House', 'Smart Home Features', 'Outdoor Kitchen', 'Gym'],
    featured: true
  },
  {
    id: "3",
    title: 'Cozy Suburban House',
    location: 'Suburbs',
    price: '$350,000',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '3', baths: '2', sqft: '1,800' },
    description: 'Charming suburban home with a beautiful backyard, updated kitchen, and comfortable living spaces. This family-friendly property is located in a highly-rated school district and features a fenced yard, fresh paint throughout, and updated appliances that make it move-in ready.',
    amenities: ['Backyard', 'Updated Kitchen', 'Garage', 'Fireplace', 'Family Room', 'Deck', 'Storage Shed'],
    featured: true
  },
  {
    id: "4",
    title: 'Downtown Loft',
    location: 'City Center',
    price: '$425,000',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '1', baths: '1', sqft: '950' },
    description: 'Urban loft with industrial details, high ceilings, and city views. Perfect for young professionals. This trendy space features exposed brick walls, polished concrete floors, and massive windows that flood the space with natural light while providing panoramic views of the city skyline.',
    amenities: ['Exposed Brick', 'Concrete Floors', 'City Views', 'Open Floor Plan', 'Building Gym', 'Rooftop Access', 'Concierge'],
  },
  {
    id: "5",
    title: 'Waterfront Cottage',
    location: 'Lakeside',
    price: '$575,000',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '2', baths: '2', sqft: '1,200' },
    description: 'Charming cottage on the lake with private dock, cozy interior, and panoramic water views. This idyllic retreat offers the perfect balance of rustic charm and modern conveniences, with a recently renovated kitchen, updated bathrooms, and a stone fireplace that creates a warm, inviting atmosphere.',
    amenities: ['Private Dock', 'Deck', 'Stone Fireplace', 'Updated Kitchen', 'Boat House', 'Outdoor Shower', 'Fire Pit'],
  },
  {
    id: "6",
    title: 'Modern City Apartment',
    location: 'Downtown',
    price: '$1,800/mo',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '2', baths: '1', sqft: '950' },
    description: 'Contemporary urban apartment with modern amenities, premium appliances, and a convenient downtown location. This stylish unit features floor-to-ceiling windows, hardwood floors throughout, and a gourmet kitchen with stainless steel appliances and quartz countertops.',
    amenities: ['Fitness Center', 'Rooftop Terrace', 'Concierge', 'In-Unit Laundry', 'Pet Friendly', 'Package Reception', 'Bike Storage'],
    featured: true
  },
  {
    id: "7",
    title: 'Luxury High-Rise Condo',
    location: 'Financial District',
    price: '$3,200/mo',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '3', baths: '2', sqft: '1,500' },
    description: 'Luxurious high-rise condo with panoramic city views, high-end finishes, and exclusive building amenities. This premium residence offers a sophisticated urban lifestyle with designer finishes, smart home technology, and a spectacular view that spans the entire city skyline.',
    amenities: ['24-Hour Doorman', 'Indoor Pool', 'Sauna', 'Private Balcony', 'Valet Parking', 'Business Center', 'Wine Room'],
    featured: true
  },
  {
    id: "8",
    title: 'Suburban Family Home',
    location: 'Parkside',
    price: '$2,400/mo',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&h=500',
    specs: { beds: '4', baths: '2', sqft: '1,800' },
    description: 'Spacious family home in a quiet suburban neighborhood with a large yard, updated features, and nearby parks. This rental property is perfect for families, with multiple living areas, a fully fenced backyard with a play structure, and a two-car garage with additional storage space.',
    amenities: ['Large Yard', 'Finished Basement', 'Double Garage', 'Near Schools', 'Updated Kitchen', 'Patio', 'Storage Shed'],
    featured: true
  },
];
