import { Property } from "@/types/property";

// Dummy data for properties
export const dummyProperties: Property[] = [
  {
    id: "1",
    title: "Modern Family Home",
    location: "Downtown",
    price: "$650,000",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "4", baths: "3", sqft: "2,200" },
    description:
      "A beautiful modern family home in the heart of downtown. Features open concept living, high ceilings, and premium finishes throughout. This property offers an ideal combination of luxury and convenience, with easy access to schools, shopping centers, and public transportation.",
    amenities: [
      "Parking",
      "Garden",
      "Security System",
      "Central AC",
      "Hardwood Floors",
      "Home Office",
      "Smart Home Features",
    ],
    featured: true,
    agent: {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      experience: "10 years",
    },
    highlights: ["Close to downtown", "High-end finishes", "Spacious layout"],
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    location: "Hillside",
    price: "$1,500,000",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "6", baths: "5", sqft: "4,500" },
    description:
      "Spectacular luxury villa with breathtaking views, infinity pool, and premium amenities. Perfect for those seeking privacy and comfort. This exclusive property boasts state-of-the-art finishes, expansive living areas, and meticulously landscaped grounds that create a personal resort-like experience.",
    amenities: [
      "Swimming Pool",
      "Home Theater",
      "Wine Cellar",
      "Guest House",
      "Smart Home Features",
      "Outdoor Kitchen",
      "Gym",
    ],
    featured: true,
    agent: {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&h=500",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      experience: "15 years",
    },
    highlights: ["Panoramic views", "Infinity pool", "Private and secure"],
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: "3",
    title: "Cozy Suburban House",
    location: "Suburbs",
    price: "$350,000",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "3", baths: "2", sqft: "1,800" },
    description:
      "Charming suburban home with a beautiful backyard, updated kitchen, and comfortable living spaces. This family-friendly property is located in a highly-rated school district and features a fenced yard, fresh paint throughout, and updated appliances that make it move-in ready.",
    amenities: [
      "Backyard",
      "Updated Kitchen",
      "Garage",
      "Fireplace",
      "Family Room",
      "Deck",
      "Storage Shed",
    ],
    featured: true,
    agent: {
      name: "Emily Johnson",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&h=500",
      phone: "555-123-4567",
      email: "emily.johnson@example.com",
      experience: "8 years",
    },
    highlights: ["Family-friendly", "Updated appliances", "Large backyard"],
    coordinates: { lat: 41.8781, lng: -87.6298 },
  },
  {
    id: "4",
    title: "Downtown Loft",
    location: "City Center",
    price: "$425,000",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93648?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "1", baths: "1", sqft: "950" },
    description:
      "Urban loft with industrial details, high ceilings, and city views. Perfect for young professionals. This trendy space features exposed brick walls, polished concrete floors, and massive windows that flood the space with natural light while providing panoramic views of the city skyline.",
    amenities: [
      "Exposed Brick",
      "Concrete Floors",
      "City Views",
      "Open Floor Plan",
      "Building Gym",
      "Rooftop Access",
      "Concierge",
    ],
    agent: {
      name: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&h=500",
      phone: "555-987-6543",
      email: "michael.brown@example.com",
      experience: "12 years",
    },
    highlights: ["Industrial design", "City views", "High ceilings"],
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: "5",
    title: "Waterfront Cottage",
    location: "Lakeside",
    price: "$575,000",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "2", baths: "2", sqft: "1,200" },
    description:
      "Charming cottage on the lake with private dock, cozy interior, and panoramic water views. This idyllic retreat offers the perfect balance of rustic charm and modern conveniences, with a recently renovated kitchen, updated bathrooms, and a stone fireplace that creates a warm, inviting atmosphere.",
    amenities: [
      "Private Dock",
      "Deck",
      "Stone Fireplace",
      "Updated Kitchen",
      "Boat House",
      "Outdoor Shower",
      "Fire Pit",
    ],
    agent: {
      name: "Sarah Davis",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&h=500",
      phone: "555-321-6549",
      email: "sarah.davis@example.com",
      experience: "7 years",
    },
    highlights: ["Lake views", "Private dock", "Cozy interior"],
    coordinates: { lat: 43.6532, lng: -79.3832 },
  },
  {
    id: "6",
    title: "Modern City Apartment",
    location: "Downtown",
    price: "$1,800/mo",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "2", baths: "1", sqft: "950" },
    description:
      "Contemporary urban apartment with modern amenities, premium appliances, and a convenient downtown location. This stylish unit features floor-to-ceiling windows, hardwood floors throughout, and a gourmet kitchen with stainless steel appliances and quartz countertops.",
    amenities: [
      "Fitness Center",
      "Rooftop Terrace",
      "Concierge",
      "In-Unit Laundry",
      "Pet Friendly",
      "Package Reception",
      "Bike Storage",
    ],
    featured: true,
    agent: {
      name: "David Wilson",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&h=500",
      phone: "555-456-7890",
      email: "david.wilson@example.com",
      experience: "9 years",
    },
    highlights: ["Modern design", "Downtown location", "Premium appliances"],
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "7",
    title: "Luxury High-Rise Condo",
    location: "Financial District",
    price: "$3,200/mo",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "3", baths: "2", sqft: "1,500" },
    description:
      "Luxurious high-rise condo with panoramic city views, high-end finishes, and exclusive building amenities. This premium residence offers a sophisticated urban lifestyle with designer finishes, smart home technology, and a spectacular view that spans the entire city skyline.",
    amenities: [
      "24-Hour Doorman",
      "Indoor Pool",
      "Sauna",
      "Private Balcony",
      "Valet Parking",
      "Business Center",
      "Wine Room",
    ],
    featured: true,
    agent: {
      name: "Laura Clark",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=500",
      phone: "555-789-1234",
      email: "laura.clark@example.com",
      experience: "11 years",
    },
    highlights: [
      "Panoramic city views",
      "High-end finishes",
      "Exclusive amenities",
    ],
    coordinates: { lat: 40.706, lng: -74.0089 },
  },
  {
    id: "8",
    title: "Suburban Family Home",
    location: "Parkside",
    price: "$2,400/mo",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&h=500",
    images: [
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&h=500",
    ],
    specs: { beds: "4", baths: "2", sqft: "1,800" },
    description:
      "Spacious family home in a quiet suburban neighborhood with a large yard, updated features, and nearby parks. This rental property is perfect for families, with multiple living areas, a fully fenced backyard with a play structure, and a two-car garage with additional storage space.",
    amenities: [
      "Large Yard",
      "Finished Basement",
      "Double Garage",
      "Near Schools",
      "Updated Kitchen",
      "Patio",
      "Storage Shed",
    ],
    featured: true,
    agent: {
      name: "Robert Lee",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500",
      phone: "555-234-5678",
      email: "robert.lee@example.com",
      experience: "6 years",
    },
    highlights: ["Family-friendly", "Large yard", "Updated features"],
    coordinates: { lat: 41.8781, lng: -87.6298 },
  },
];
