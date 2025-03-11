
import React from 'react';
import { Home, Key, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  onServiceClick: (path: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  const services = [
    {
      title: 'Buy A Home',
      description: 'Find your dream home with our extensive listings of properties for sale.',
      icon: <Home className="w-6 h-6" />,
      path: '/properties/buy'
    },
    {
      title: 'Rent A Home',
      description: 'Explore rental properties that match your lifestyle and budget.',
      icon: <Key className="w-6 h-6" />,
      path: '/properties/rent'
    },
    {
      title: 'Sell A Home',
      description: 'Get the best value for your property with our expert agents.',
      icon: <DollarSign className="w-6 h-6" />,
      path: '/services'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#183152]">Our Main Services</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We help you navigate the complex real estate market with expert guidance and personalized service at every step.
        </p>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 animate-fade-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-[#B80002]/10 rounded-full flex items-center justify-center mb-4 text-[#B80002] mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#B80002]">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button
                  variant="default"
                  className="bg-[#B80002] hover:bg-[#B80002]/90 text-white"
                  onClick={() => onServiceClick(service.path)}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
