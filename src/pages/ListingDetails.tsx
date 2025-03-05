
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  MapPin, BedDouble, Bath, SquareCode, Check, Clock, ArrowLeft,
  Phone, Mail, Award, Camera, Home, Star, MapIcon, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRealEstate } from '@/context/RealEstateContext';
import Loader from '@/components/Loader';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, loading, contactAgent } = useRealEstate();
  const [property, setProperty] = useState<any>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: 'I am interested in this property. Please contact me with more information.'
  });
  const [submitting, setSubmitting] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [similarProperties, setSimilarProperties] = useState<any[]>([]);

  // Mock property details for demonstration
  const mockPropertyDetails = {
    agent: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@realestate.com",
      experience: "8 years"
    },
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop"
    ],
    highlights: [
      "Recently renovated",
      "Modern kitchen with granite countertops",
      "Large backyard with deck",
      "Energy-efficient windows and appliances",
      "Close to schools and shopping",
      "Finished basement"
    ],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  };

  useEffect(() => {
    // Find the property by ID
    const foundProperty = properties.find(p => p.id === id);
    if (foundProperty) {
      // Merge with mock data for demonstration
      setProperty({
        ...foundProperty,
        images: mockPropertyDetails.images,
        agent: mockPropertyDetails.agent,
        highlights: mockPropertyDetails.highlights,
        coordinates: mockPropertyDetails.coordinates
      });

      // Find similar properties (same location or similar price)
      const similar = properties
        .filter(p => p.id !== id)
        .filter(p =>
          p.location.includes(foundProperty.location.split(',')[0]) ||
          (Math.abs(parseInt(p.price.replace(/[^0-9]/g, '')) -
            parseInt(foundProperty.price.replace(/[^0-9]/g, ''))) < 100000)
        )
        .slice(0, 3);

      setSimilarProperties(similar);
    }
  }, [id, properties]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    contactAgent(contactForm.name, contactForm.email, contactForm.message);

    // Reset form after submission
    setTimeout(() => {
      setSubmitting(false);
      setContactForm({
        ...contactForm,
        message: 'I am interested in this property. Please contact me with more information.'
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePrevImage = () => {
    setActiveImageIndex(prev =>
      prev === 0 ? (property.images.length - 1) : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex(prev =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  if (loading || !property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Loader text="Loading property details..." />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Breadcrumbs */}
        <nav className="bg-gray-100 py-3">
          <div className="container-custom">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-[#B80002]">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/properties" className="hover:text-[#B80002]">Properties</Link>
              <span className="mx-2">/</span>
              <Link
                to={property.price.includes('/mo') ? "/properties/rent" : "/properties/buy"}
                className="hover:text-[#B80002]"
              >
                {property.price.includes('/mo') ? 'Rent' : 'Buy'}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#B80002] font-medium">{property.title}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-r from-[#183152] to-[#183152]/90 flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="container-custom relative z-10 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{property.title}</h1>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#B80002] mr-2" />
                <span className="text-white text-lg">{property.location}</span>
              </div>
              <p className="text-3xl font-bold text-white">{property.price}</p>
            </div>
          </div>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[#183152]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </section>

        {/* Property Details */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="md:col-span-2">
                {/* Photo Gallery */}
                <div className="bg-gray-100 p-8 rounded-lg mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#183152]">Photo Gallery</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 text-[#183152]"
                    >
                      <Camera className="w-4 h-4" />
                      <span>View All Photos</span>
                    </Button>
                  </div>

                  <div className="relative rounded-lg overflow-hidden h-[400px]">
                    <img
                      src={property.images[activeImageIndex]}
                      alt={`Property view ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {property.images.map((_, index: number) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full ${activeImageIndex === index ? 'bg-[#B80002]' : 'bg-white/70'}`}
                          onClick={() => setActiveImageIndex(index)}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 mt-4">
                    {property.images.map((img: string, index: number) => (
                      <div
                        key={index}
                        className={`h-20 rounded-md overflow-hidden cursor-pointer transition-all ${activeImageIndex === index ? 'ring-2 ring-[#B80002]' : 'opacity-70 hover:opacity-100'
                          }`}
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-gray-100 p-8 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-[#183152]">Overview</h2>
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                      <BedDouble className="w-8 h-8 text-[#183152] mb-2" />
                      <span className="text-lg font-semibold">{property.specs.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                      <Bath className="w-8 h-8 text-[#183152] mb-2" />
                      <span className="text-lg font-semibold">{property.specs.baths} Baths</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                      <SquareCode className="w-8 h-8 text-[#183152] mb-2" />
                      <span className="text-lg font-semibold">{property.specs.sqft} Sq Ft</span>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {property.description}
                  </p>
                </div>

                {/* Property Highlights */}
                <div className="bg-gray-100 p-8 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-[#183152]">Property Highlights</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {property.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Star className="w-5 h-5 text-[#B80002] mr-2" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="bg-gray-100 p-8 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-[#183152]">Amenities</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {property.amenities.map((amenity: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-[#B80002] mr-2" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Map */}
                <div className="bg-gray-100 p-8 rounded-lg mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-[#183152]">Location</h2>
                  {/* Map placeholder - would be replaced with actual map component */}
                  <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <MapIcon className="w-16 h-16 text-gray-400 mb-4" />
                      <p className="text-gray-500">Map view would display here</p>
                      <p className="text-gray-500 text-sm">Coordinates: {property.coordinates.lat}, {property.coordinates.lng}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <MapPin className="w-5 h-5 text-[#B80002] inline mr-2" />
                    {property.location}
                  </p>
                </div>

                {/* Similar Properties */}
                {similarProperties.length > 0 && (
                  <div className="bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-[#183152]">Similar Properties</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {similarProperties.map((similar) => (
                        <div
                          key={similar.id}
                          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => navigate(`/properties/${similar.id}`)}
                        >
                          <div className="h-40 overflow-hidden">
                            <img src={similar.image} alt={similar.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-[#183152] mb-1">{similar.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{similar.location}</p>
                            <p className="font-bold text-[#B80002]">{similar.price}</p>
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                              <span>{similar.specs.beds} beds</span>
                              <span>{similar.specs.baths} baths</span>
                              <span>{similar.specs.sqft} sqft</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                {/* Agent Information */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6 sticky top-20">
                  <h3 className="text-xl font-bold mb-4 text-[#183152]">Listing Agent</h3>
                  <div className="flex items-center mb-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-[#183152]">{property.agent.name}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Award className="w-4 h-4 mr-1" />
                        <span>{property.agent.experience} experience</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-[#B80002] mr-2" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-[#B80002] mr-2" />
                      <span className="text-sm">{property.agent.email}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Contact Form */}
                  <h3 className="text-xl font-bold mb-4 text-[#183152]">Contact Agent</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B80002]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B80002]"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B80002]"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#B80002] hover:bg-[#B80002]/90"
                    >
                      {submitting ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </Button>
                  </form>
                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Our agent will contact you shortly after receiving your message.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetails;
