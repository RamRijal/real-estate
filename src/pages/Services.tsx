
import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Home, 
  DollarSign, 
  Key, 
  Briefcase, 
  Building, 
  PencilRuler, 
  FileCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRealEstate } from '@/context/RealEstateContext';
import { Button } from "@/components/ui/button";
import Loader from '@/components/Loader';

const Services = () => {
  const { contactAgent, loading, setLoading } = useRealEstate();
  const [activeService, setActiveService] = useState<number>(0);
  
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Property Buying',
      description: 'Our expert agents will guide you through every step of the home buying process, from initial search to closing.',
      details: [
        'Personalized property search based on your needs',
        'Property value assessment and negotiation assistance',
        'Mortgage pre-approval guidance',
        'Comprehensive closing support'
      ]
    },
    {
      icon: <Key className="w-12 h-12" />,
      title: 'Property Rental',
      description: 'Find the perfect rental property with our extensive database and personalized search assistance.',
      details: [
        'Comprehensive rental property listings',
        'Lease negotiation and review',
        'Tenant screening services',
        'Regular property inspections'
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Property Selling',
      description: 'Maximize your property value with our expert selling services and marketing strategies.',
      details: [
        'Comparative market analysis and pricing strategy',
        'Professional photography and virtual tours',
        'Strategic marketing and advertising',
        'Negotiation and closing assistance'
      ]
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Property Management',
      description: 'Full-service property management solutions for landlords and property investors.',
      details: [
        'Tenant acquisition and screening',
        'Rent collection and financial reporting',
        'Property maintenance and repairs',
        'Legal compliance and documentation'
      ]
    },
    {
      icon: <PencilRuler className="w-12 h-12" />,
      title: 'Interior Design',
      description: 'Transform your space with our professional interior design services for residential and commercial properties.',
      details: [
        'Personalized design consultation',
        'Space planning and layout optimization',
        'Material and finish selection',
        'Furniture and decor recommendations'
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Investment Consulting',
      description: 'Make informed real estate investment decisions with our expert financial and market analysis.',
      details: [
        'Investment property identification',
        'ROI analysis and financial projections',
        'Risk assessment and mitigation strategies',
        'Portfolio diversification guidance'
      ]
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'Legal Services',
      description: 'Navigate complex real estate legal matters with our experienced legal team.',
      details: [
        'Contract review and preparation',
        'Title examination and insurance',
        'Due diligence investigations',
        'Closing representation'
      ]
    }
  ];

  const handleRequestService = () => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      contactAgent("Test User", "test@example.com", `Service inquiry: ${services[activeService].title}`);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center mb-12">
            <HeartHandshake className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
              Discover the comprehensive range of real estate services we offer to help you buy, sell, or rent properties with ease.
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 text-center ${
                    activeService === index 
                      ? 'bg-primary text-white scale-105 shadow-lg' 
                      : 'bg-white text-gray-800 shadow hover:shadow-md hover:translate-y-[-5px]'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    activeService === index ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <div className={activeService === index ? 'text-white' : 'text-primary'}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className={`text-sm ${activeService === index ? 'text-white/80' : 'text-gray-600'}`}>
                    {service.description.substring(0, 60)}...
                  </p>
                </div>
              ))}
            </div>
            
            {/* Selected Service Details */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mb-12 animate-fade-up">
              {loading ? (
                <Loader text="Loading service details..." />
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {services[activeService].icon}
                    </div>
                    <h2 className="text-2xl font-bold">{services[activeService].title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {services[activeService].description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {services[activeService].details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <p className="text-gray-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90" 
                    size="lg" 
                    onClick={handleRequestService}
                    disabled={loading}
                  >
                    Request This Service
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
