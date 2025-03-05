import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (e: React.FormEvent) => void;
  onQuickPriceSelect: (priceRange: 'low' | 'medium' | 'high' | null) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  onQuickPriceSelect
}) => {
  const [currentBg, setCurrentBg] = useState(0);

  // Background images for carousel
  const bgImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3'
  ];

  // Price range options
  const priceOptions: { label: string; value: "low" | "medium" | "high" | null }[] = [
    { label: "Any Price", value: null },
    { label: "Budget (Under $200,000)", value: "low" },
    { label: "Mid-Range ($200,000 - $500,000)", value: "medium" },
    { label: "Luxury (Above $500,000)", value: "high" }
  ];

  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  const handlePriceSelect = (price: { label: string; value: 'low' | 'medium' | 'high' | null }) => {
    setSelectedPrice(price);
    onQuickPriceSelect(price.value);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Carousel Background */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={img}
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Discover the perfect property that fits your lifestyle and budget
            </p>

            {/* Search Form */}
            <form
              onSubmit={onSearch}
              className="bg-white/10 backdrop-blur-md p-4 rounded-lg mb-6 animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter location, property type, or keyword"
                    className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex space-x-2">
                  {/* Price Range Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-40">
                        {selectedPrice.label}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      {priceOptions.map((price, index) => (
                        <DropdownMenuItem
                          key={index}
                          onClick={() => handlePriceSelect(price)}
                          className="cursor-pointer"
                        >
                          {price.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </form>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <span className="text-white/80">Popular:</span>
              <button
                onClick={() => onQuickPriceSelect('low')}
                className="text-white hover:text-primary transition-colors"
              >
                Budget Homes
              </button>
              <button
                onClick={() => onQuickPriceSelect('medium')}
                className="text-white hover:text-primary transition-colors"
              >
                Family Houses
              </button>
              <button
                onClick={() => onQuickPriceSelect('high')}
                className="text-white hover:text-primary transition-colors"
              >
                Luxury Villas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
