
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BranchCard = ({ name, address, image, hours, phone, email, mapLink }: { 
  name: string; 
  address: string; 
  image: string; 
  hours: string; 
  phone: string; 
  email: string; 
  mapLink: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-gray-700">{address}</p>
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              View on Map
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3 mb-3">
          <Clock className="w-5 h-5 text-primary mt-0.5" />
          <p className="text-gray-700">{hours}</p>
        </div>
        
        <div className="flex items-start gap-3 mb-3">
          <Phone className="w-5 h-5 text-primary mt-0.5" />
          <a href={`tel:${phone}`} className="text-gray-700 hover:text-primary">{phone}</a>
        </div>
        
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-primary mt-0.5" />
          <a href={`mailto:${email}`} className="text-gray-700 hover:text-primary">{email}</a>
        </div>
      </div>
    </div>
  );
};

const Branches = () => {
  const branches = [
    {
      name: 'Downtown Headquarters',
      address: '123 Main Street, Downtown, New York, NY 10001',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3',
      hours: 'Monday - Friday: 9AM - 6PM, Saturday: 10AM - 4PM',
      phone: '+1 (212) 555-1234',
      email: 'downtown@realestate.com',
      mapLink: 'https://maps.google.com'
    },
    {
      name: 'Westside Office',
      address: '456 West Avenue, Chelsea, New York, NY 10011',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      hours: 'Monday - Friday: 9AM - 6PM, Saturday: 10AM - 3PM',
      phone: '+1 (212) 555-5678',
      email: 'westside@realestate.com',
      mapLink: 'https://maps.google.com'
    },
    {
      name: 'Uptown Branch',
      address: '789 North Boulevard, Upper East Side, New York, NY 10028',
      image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      hours: 'Monday - Friday: 9AM - 7PM, Saturday: 10AM - 5PM',
      phone: '+1 (212) 555-9012',
      email: 'uptown@realestate.com',
      mapLink: 'https://maps.google.com'
    },
    {
      name: 'Brooklyn Office',
      address: '321 Atlantic Avenue, Brooklyn, NY 11217',
      image: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3',
      hours: 'Monday - Friday: 9AM - 6PM, Saturday: 11AM - 4PM',
      phone: '+1 (718) 555-3456',
      email: 'brooklyn@realestate.com',
      mapLink: 'https://maps.google.com'
    },
    {
      name: 'Queens Branch',
      address: '555 Astoria Boulevard, Astoria, Queens, NY 11103',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3',
      hours: 'Monday - Friday: 10AM - 6PM, Saturday: 10AM - 3PM',
      phone: '+1 (718) 555-7890',
      email: 'queens@realestate.com',
      mapLink: 'https://maps.google.com'
    },
    {
      name: 'Long Island City',
      address: '123 Vernon Boulevard, Long Island City, NY 11101',
      image: 'https://images.unsplash.com/photo-1542993551-46b16a810062?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      hours: 'Monday - Friday: 9AM - 6PM, Saturday: 10AM - 4PM',
      phone: '+1 (718) 555-2345',
      email: 'lic@realestate.com',
      mapLink: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center">
            <MapPin className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Our Branches</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
              With multiple branches across the city, we're always close to you. Visit any of our offices for personalized real estate assistance and expert advice.
            </p>

            {/* Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
              {branches.map((branch, index) => (
                <BranchCard 
                  key={index}
                  name={branch.name}
                  address={branch.address}
                  image={branch.image}
                  hours={branch.hours}
                  phone={branch.phone}
                  email={branch.email}
                  mapLink={branch.mapLink}
                />
              ))}
            </div>

            {/* Global Presence */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Global Presence</h2>
              <p className="text-gray-600 text-center mb-6">
                Beyond our local branches, we have a network of partner agencies in major cities worldwide. 
                Whether you're looking to invest internationally or relocate abroad, we can connect you 
                with trusted professionals in your destination city.
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="World Map" 
                  className="rounded-lg max-h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Branches;
