
import React, { useState } from 'react';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

const BlogPost = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            {post.date}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-sm text-gray-600">{post.author}</span>
          </div>
          <Link to={`/blog/${post.slug}`} className="text-primary font-bold hover:text-primary/80 flex items-center text-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const blogPosts: BlogPost[] = [
    {
      title: 'How to Prepare Your Home for a Quick Sale',
      slug: 'prepare-home-for-quick-sale',
      excerpt: 'Want to sell your home fast and at the best possible price? These preparation strategies can help you stage your property effectively and attract serious buyers.',
      image: 'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      author: 'Michael Rodriguez',
      date: 'May 22, 2023',
      category: 'Selling Tips'
    },
    {
      title: 'Maximizing Your Investment: Rental Property Strategies',
      slug: 'maximizing-investment-rental-property-strategies',
      excerpt: 'Expert advice on how to optimize returns from your rental properties in the current economic climate.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650',
      author: 'Emily Johnson',
      date: 'June 15, 2023',
      category: 'Buying Guide'
    },

    {
      title: 'The Impact of Rising Interest Rates on the Housing Market',
      slug: 'impact-rising-interest-rates-housing-market',
      excerpt: 'Discover how changing interest rates affect property values and purchasing power in today\'s market.',
      image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
      author: 'David Thompson',
      date: 'April 10, 2023',
      category: 'Investment'
    },
    {
      title: 'The Rise of Smart Homes: Features Buyers Want',
      slug: 'rise-of-smart-homes-features',
      excerpt: 'Smart home technology is becoming increasingly important to today\'s buyers. Discover which smart features add the most value and appeal to modern home seekers.',
      image: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      author: 'Sarah Chen',
      date: 'March 5, 2023',
      category: 'Technology'
    },
    {
      title: 'Understanding Property Taxes in Different Neighborhoods',
      slug: 'understanding-property-taxes-neighborhoods',
      excerpt: 'Property taxes can vary significantly between neighborhoods and can greatly impact your long-term costs as a homeowner. This guide explains what you need to know.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
      author: 'Jessica Williams',
      date: 'February 18, 2023',
      category: 'Finance'
    },
    {
      title: 'Rental Market Trends: What Landlords Need to Know',
      slug: 'rental-market-trends-landlords',
      excerpt: 'The rental market continues to evolve post-pandemic. Stay informed about current trends, renter preferences, and how to position your rental property for success.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      author: 'John Smith',
      date: 'January 30, 2023',
      category: 'Rental'
    },
  ];

  const categories = [
    'All',
    'Buying Guide',
    'Selling Tips',
    'Investment',
    'Rental',
    'Market Trends',
    'Finance',
    'Interior Design',
    'Technology',
    'Neighborhoods'
  ];

  // Filter blog posts based on selected category
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center">
            <BookOpen className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Real Estate Blog</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
              Stay updated with the latest real estate insights, market trends, and expert advice. Our blog offers valuable information for buyers, sellers, investors, and property enthusiasts.
            </p>

            {/* Category Filters */}
            <div className="w-full max-w-6xl mb-8 overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-primary text-white" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
              {filteredPosts.map((post, index) => (
                <BlogPost key={index} post={post} />
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 text-center mb-6">
                Get the latest real estate news, market updates, and expert advice delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 border border-gray-300 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
