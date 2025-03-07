import React from 'react';
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onEnquiryClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onEnquiryClick }) => {
  return (
    <section className="bg-[#183152] py-16 relative">
      <div className="absolute inset-0 bg-cover bg-center
      bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')]">
        <div className="absolute inset-0 bg-[#183152] bg-opacity-70"></div>
      </div>
      <div className="container-custom flex justify-between text-center items-center text-white relative z-10">
        <div className='text-left'>
          <h2 className="text-5xl font-bold mb-2">Looking For A Dream House?</h2>
          <p className="text-xl  opacity-90">We can help you realize your dream of a new home</p>
        </div>
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
