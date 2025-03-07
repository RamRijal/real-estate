
import React from 'react';
import { Quote, Stars, StarsIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop",
    text: "Working with RealEstate was an absolute pleasure! They made buying my first home so much easier than I expected. The team was responsive, knowledgeable, and truly cared about finding me the perfect place."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
    text: "I've worked with many real estate companies over the years, but none compare to the professionalism and dedication of RealEstate. They've helped me find profitable investment properties time and again."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Home Seller",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop",
    text: "Selling our family home was an emotional process, but RealEstate made it smooth and stress-free. They secured a great price and handled everything with care and attention to detail."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#183152]">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-5 left-6 bg-red-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              <p className="text-gray-700 italic mb-6 pt-4">{testimonial.text}</p>

              <div className="flex gap-1 w-5 h-5 my-4">
                  <img src='/star-svgrepo-com.svg' alt="Star Icon" />
                  <img src='/star-svgrepo-com.svg' alt="Star Icon" />
                  <img src='/star-svgrepo-com.svg' alt="Star Icon" />
                  <img src='/star-svgrepo-com.svg' alt="Star Icon" />
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#183152]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
