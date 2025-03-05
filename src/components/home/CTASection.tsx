
import React from 'react';
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onEnquiryClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onEnquiryClick }) => {
  return (
    <section className="bg-[#183152] py-16">
      <div className="container-custom text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Looking For A Dream House?</h2>
        <p className="text-lg mb-8 opacity-90">We can help you realize your dream of a new home</p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="bg-[#B80002] text-white hover:bg-[#B80002]/90 border-none"
          onClick={onEnquiryClick}
        >
          Online Enquiry
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
