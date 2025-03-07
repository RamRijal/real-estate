
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    {
      label: 'Properties',
      href: '/properties',
      dropdown: true,
      items: [
        { label: 'Buy', href: '/properties/buy' },
        { label: 'Rent', href: '/properties/rent' },
      ]
    },
    {
      label: 'Company',
      href: '/about',
      dropdown: true,
      items: [
        { label: 'Our Blog', href: '/blog' },
        { label: 'Our Team', href: '/team' },
        { label: 'Our Branches', href: '/branches' },
        { label: 'About Us', href: '/about' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Careers', href: '/careers' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Contact Us', href: '/contact' },
      ]
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#183152] flex items-center">
            <img className="w-12 h-12 text-[#B80002] rounded-full" loading='lazy' src='/logo.png' />
            <span>Jagga<span className="text-[#B80002]">Jamin</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-[#B80002] transition-colors">
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.label} asChild>
                          <Link to={subItem.href} className="cursor-pointer">
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                    className="text-gray-600 hover:text-[#B80002] active:text-[#B80002] transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}

            <AuthModal
              trigger={
                <Button className="bg-[#B80002] hover:bg-[#B80002]/90 text-white">
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-[#B80002]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.label} className="px-4 py-2">
                    <div className="font-medium text-gray-600 mb-2">{item.label}</div>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="text-gray-600 hover:text-[#B80002] transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-600 hover:text-[#B80002] transition-colors px-4 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-4 pt-2">
                <AuthModal
                  trigger={
                    <Button className="w-full bg-[#B80002] hover:bg-[#B80002]/90 text-white">
                      <User className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
