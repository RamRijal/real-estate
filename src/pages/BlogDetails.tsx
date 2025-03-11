/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, MessageSquare, ThumbsUp, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

// Mock blog post data - In a real app, this would come from an API
const blogPosts = [
  {
    id: '1',
    title: 'How to Stage Your Home for a Quick Sale',
    slug: 'prepare-home-for-quick-sale',
    excerpt: 'Learn the essential staging tips that can help sell your property faster and at a better price.',
    content: `
  <p class="leading-relaxed text-gray-700">
    When it comes to selling your home, first impressions are everything. A well-staged home can make all the difference in attracting potential buyers and securing a quick sale at a favorable price. In this comprehensive guide, we'll explore professional staging techniques that can transform your property into an irresistible offering in the real estate market.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Clear the Clutter</h2>
  <p class="leading-relaxed text-gray-700">
    The first step in effective home staging is decluttering. Removing personal items and excess furniture creates a sense of spaciousness and allows potential buyers to envision themselves in the space. Consider the following approaches:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Remove family photos and personal mementos</li>
    <li>Clear countertops in kitchens and bathrooms</li>
    <li>Organize closets and storage areas</li>
    <li>Remove bulky or excess furniture that makes rooms feel cramped</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Create a Neutral Canvas</h2>
  <p class="leading-relaxed text-gray-700">
    While your bold color choices might reflect your personality, they can distract buyers. Creating a neutral backdrop helps potential buyers visualize how they would personalize the space:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Repaint walls in neutral tones like beige, light gray, or warm white</li>
    <li>Replace bright accent pieces with more subdued options</li>
    <li>Consider neutral bedding and window treatments</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Focus on Curb Appeal</h2>
  <p class="leading-relaxed text-gray-700">
    The exterior of your home creates the vital first impression. Enhance your home's curb appeal with these strategies:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Pressure wash driveways, walkways, and the home's exterior</li>
    <li>Refresh landscaping with new mulch and seasonal plantings</li>
    <li>Ensure the entryway is welcoming with a fresh coat of paint on the front door</li>
    <li>Consider upgrading outdoor lighting fixtures</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Highlight Key Spaces</h2>
  <p class="leading-relaxed text-gray-700">
    Certain rooms can make or break a sale. Focus your staging efforts on these key areas:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>The living room should feel spacious yet cozy</li>
    <li>The master bedroom should become a tranquil retreat</li>
    <li>Kitchens should be immaculately clean with minimal countertop appliances</li>
    <li>Bathrooms should feel spa-like with fresh towels and subtle accessories</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    Remember, the goal of staging is to help buyers connect emotionally with your property. By implementing these professional staging techniques, you're not just selling a house – you're selling the lifestyle and possibilities that come with it.
  </p>
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'Interior Design Specialist'
    },
    date: 'May 15, 2023',
    readTime: '8 min read',
    category: 'Selling Tips',
    tags: ['Selling Tips', 'Home Improvement', 'Real Estate Market'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    likes: 245,
    comments: 58,
    relatedPosts: [2, 3, 4]
  },
  {
    id: '2',
    title: 'The Impact of Rising Interest Rates on the Housing Market',
    slug: 'impact-rising-interest-rates-housing-market',
    excerpt: 'Discover how changing interest rates affect property values and purchasing power in today\'s market.',
    content: `
  <p class="leading-relaxed text-gray-700">
    Interest rates play a crucial role in shaping the real estate market. When the Federal Reserve adjusts rates, it creates a ripple effect that influences everything from mortgage affordability to property values. In this analysis, we'll examine how the current rising interest rate environment is transforming the housing landscape.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">How Rising Rates Affect Mortgage Payments</h2>
  <p class="leading-relaxed text-gray-700">
    When interest rates increase, the monthly payment on a new mortgage also increases. This has several immediate effects:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Reduced purchasing power for buyers</li>
    <li>Higher qualification thresholds for loans</li>
    <li>Increased cost over the life of a 30-year mortgage</li>
    <li>Potential slowdown in home price appreciation</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    For example, a 1% increase in interest rates on a $300,000 mortgage can add over $100,000 to the total cost over 30 years and increase monthly payments by approximately $200.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Impact on Housing Demand</h2>
  <p class="leading-relaxed text-gray-700">
    As mortgage rates rise, we typically observe these market changes:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Fewer qualified buyers in the market</li>
    <li>Longer listing times for properties</li>
    <li>More negotiating power shifting to buyers</li>
    <li>Increased interest in adjustable-rate mortgages (ARMs)</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Property Values and Price Corrections</h2>
  <p class="leading-relaxed text-gray-700">
    Higher interest rates often lead to moderation in property values, though the effect varies by location:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Hot markets may see growth slow rather than reverse</li>
    <li>Overvalued markets face higher risks of price corrections</li>
    <li>Housing affordability becomes a more significant factor in buyer decisions</li>
    <li>Investment properties face increased scrutiny on cap rates and returns</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Strategies for Different Market Participants</h2>

  <h3 class="font-semibold text-gray-800 text-lg my-1">For Buyers:</h3>
  <ul class="list-disc list-inside text-gray-700">
    <li>Consider locking in rates if planning to purchase soon</li>
    <li>Evaluate buying power and adjust expectations</li>
    <li>Explore creative financing options</li>
  </ul>

  <h3 class="font-semibold text-gray-800 text-lg my-1">For Sellers:</h3>
  <ul class="list-disc list-inside text-gray-700">
    <li>Realistic pricing becomes more critical</li>
    <li>Enhanced marketing to stand out in a less competitive landscape</li>
    <li>Consider timing in relation to further expected rate changes</li>
  </ul>

  <h3 class="font-semibold text-gray-800 text-lg my-1">For Investors:</h3>
  <ul class="list-disc list-inside text-gray-700">
    <li>Reassess investment criteria and return calculations</li>
    <li>Consider shorter-term loans or alternative financing</li>
    <li>Look for opportunities in markets with strong fundamentals despite rate changes</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    Understanding these dynamics can help all participants in the real estate market make more informed decisions as interest rates continue to evolve.
  </p>
    `,
    image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      role: 'Financial Analyst'
    },
    date: 'June 2, 2023',
    readTime: '10 min read',
    category: 'Market Trends',
    tags: ['Interest Rates', 'Market Analysis', 'Buying Strategy', 'Investment'],
    likes: 187,
    comments: 42,
    relatedPosts: [1, 3, 5]
  },
  {
    id: '3',
    title: 'Maximizing Your Investment: Rental Property Strategies',
    slug: 'maximizing-investment-rental-property-strategies',
    excerpt: 'Expert advice on how to optimize returns from your rental properties in the current economic climate.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650',
    content: `
  <p class="leading-relaxed text-gray-700">
    Investing in rental properties continues to be one of the most reliable ways to build wealth and generate passive income. However, success requires more than just purchasing a property and finding tenants. This guide explores proven strategies to maximize your rental property investments in today's competitive market.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Selecting the Right Property</h2>
  <p class="leading-relaxed text-gray-700">
    The foundation of a successful rental investment begins with property selection:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Focus on locations with strong employment growth and population increases</li>
    <li>Research school districts, crime rates, and neighborhood amenities</li>
    <li>Analyze rent-to-price ratios to ensure positive cash flow potential</li>
    <li>Consider properties with value-add opportunities</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Financing Strategies</h2>
  <p class="leading-relaxed text-gray-700">
    How you finance your rental property significantly impacts your returns:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Compare conventional mortgages with portfolio loans and private lending</li>
    <li>Consider house hacking strategies for owner-occupied multi-family properties</li>
    <li>Explore BRRRR (Buy, Rehab, Rent, Refinance, Repeat) method for scaling</li>
    <li>Understand the tax implications of different financing approaches</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Property Management Optimization</h2>
  <p class="leading-relaxed text-gray-700">
    Effective management is crucial for long-term profitability:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Develop thorough tenant screening procedures</li>
    <li>Implement systematic maintenance schedules to reduce major repairs</li>
    <li>Consider professional property management if you own multiple properties</li>
    <li>Use technology solutions for rent collection, maintenance requests, and communication</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Maximizing Rental Income</h2>
  <p class="leading-relaxed text-gray-700">
    Beyond base rent, consider these strategies to increase returns:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Offer premium amenities that command higher rents</li>
    <li>Implement additional income streams like pet fees, storage fees, or parking</li>
    <li>Stay ahead of market trends with regular rent adjustments</li>
    <li>Consider short-term rental strategies where regulations and market support it</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Tax Strategies for Landlords</h2>
  <p class="leading-relaxed text-gray-700">
    Optimizing your tax position can dramatically improve overall returns:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Maximize depreciation benefits through cost segregation studies</li>
    <li>Track and deduct all eligible expenses</li>
    <li>Consider forming appropriate business entities for liability protection and tax benefits</li>
    <li>Explore 1031 exchanges when selling properties to defer capital gains taxes</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    By implementing these strategies, rental property investors can navigate market challenges while building a resilient portfolio that generates consistent returns over time.
  </p>
    `,
    author: {
      name: 'David Williams',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Property Investment Consultant'
    },
    date: 'May 28, 2023',
    readTime: '12 min read',
    category: 'Investment',
    tags: ['Rental Properties', 'Investment Strategies', 'Passive Income', 'Property Management'],
    likes: 315,
    comments: 73,
    relatedPosts: [2, 5, 6]
  },
  {
    id: '4',
    title: 'The Impact of Rising Interest Rates on the Housing Market',
    slug: 'impact-rising-interest-rates-housing-market',
    excerpt: 'Discover how changing interest rates affect property values and purchasing power in today\'s market.',
    image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
    content: `
  <p class="leading-relaxed text-gray-700">
    The integration of smart home technology has transformed from a luxury to an expectation for many home buyers. Strategic implementation of these technologies can not only make your home more attractive to potential buyers but also increase its market value. This guide explores the most valuable smart home upgrades that offer the best return on investment.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Smart Security Systems</h2>
  <p class="leading-relaxed text-gray-700">
    Security features consistently rank among the most desirable smart home technologies:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Smart doorbells with video capabilities</li>
    <li>Keyless entry systems with customizable access codes</li>
    <li>Motion-activated security cameras with smartphone integration</li>
    <li>Smart alarm systems with professional monitoring options</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    These security upgrades typically recover 75-90% of their cost at resale while making properties more competitive in the market.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Climate Control and Energy Efficiency</h2>
  <p class="leading-relaxed text-gray-700">
    Energy-efficient technologies appeal to both environmentally conscious and budget-minded buyers:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Smart thermostats that learn usage patterns and optimize energy consumption</li>
    <li>Zoned HVAC systems controlled via smartphone</li>
    <li>Smart ceiling fans that coordinate with heating and cooling systems</li>
    <li>Automated blinds that adjust based on time of day and temperature</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    These upgrades highlight reduced utility costs, a strong selling point that can justify premium pricing.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Lighting and Electrical Systems</h2>
  <p class="leading-relaxed text-gray-700">
    Smart lighting offers a blend of convenience, energy efficiency, and aesthetic appeal:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Voice-activated lighting throughout main living areas</li>
    <li>Programmable lighting scenes for different activities and times of day</li>
    <li>Motion-sensor lighting for practical areas like hallways and bathrooms</li>
    <li>Smart outlets and switches that can be controlled remotely</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Kitchen and Appliance Technology</h2>
  <p class="leading-relaxed text-gray-700">
    The kitchen remains a focal point for home buyers, making it an ideal area for smart upgrades:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Smart refrigerators with inventory management and touchscreen interfaces</li>
    <li>Voice-controlled faucets for touchless operation</li>
    <li>Connected ovens and cooktops that can be monitored and controlled remotely</li>
    <li>Smart dishwashers with efficiency monitoring and smartphone alerts</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Integration and User Experience</h2>
  <p class="leading-relaxed text-gray-700">
    Perhaps most importantly, how these technologies work together affects their perceived value:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Unified control systems that manage multiple device categories</li>
    <li>Voice assistant compatibility across brands and devices</li>
    <li>Intuitive interfaces that new homeowners can easily master</li>
    <li>Professional installation and documentation to ensure smooth operation</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    When marketing a smart home, emphasize not just the technology itself but how it enhances daily living and provides long-term value through convenience, security, and efficiency.
  </p>
    `,
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      role: 'Technology & Real Estate Specialist'
    },
    date: 'May 10, 2023',
    readTime: '9 min read',
    category: 'Technology',
    tags: ['Smart Homes', 'Technology', 'Property Value', 'Home Improvement'],
    likes: 278,
    comments: 45,
    relatedPosts: [1, 5, 6]
  },
  {
    id: '5',
    title: 'Understanding Property Taxes in Different Neighborhoods',
    slug: 'understanding-property-taxes-neighborhoods',
    excerpt: 'Property taxes can vary significantly between neighborhoods and can greatly impact your long-term costs as a homeowner. This guide explains what you need to know.',
    content: `
  <p class="leading-relaxed text-gray-700">
    Property taxes represent one of the most significant ongoing expenses of homeownership, yet many buyers overlook their impact when making purchasing decisions. Understanding how property taxes work, how they vary between neighborhoods, and what factors influence them can help you make more informed real estate decisions.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">How Property Taxes Are Calculated</h2>
  <p class="leading-relaxed text-gray-700">
    Property tax calculations involve several components:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Assessed property value determined by local assessors</li>
    <li>Local tax rates (millage rates) set by various jurisdictions</li>
    <li>Exemptions and credits that may reduce your tax burden</li>
    <li>Special assessments for specific local improvements</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    The formula typically multiplies your assessed value by the local tax rate, then subtracts any applicable exemptions.
  </p>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Why Taxes Vary Between Neighborhoods</h2>
  <p class="leading-relaxed text-gray-700">
    Several factors create disparities in property tax burdens:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>School district funding needs and quality</li>
    <li>Municipal services and infrastructure requirements</li>
    <li>Commercial tax base in the area</li>
    <li>Local government efficiency and spending priorities</li>
    <li>Historical assessment practices and reassessment frequency</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Researching Property Taxes Before Buying</h2>
  <p class="leading-relaxed text-gray-700">
    Take these steps to understand potential tax obligations:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Request historical tax information for properties you're considering</li>
    <li>Research pending reassessments or rate changes in the area</li>
    <li>Calculate the effective tax rate (annual taxes divided by home value)</li>
    <li>Compare effective tax rates across neighborhoods you're considering</li>
    <li>Speak with local tax assessors about exemption eligibility</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">The Impact on Affordability and Investment</h2>
  <p class="leading-relaxed text-gray-700">
    Property taxes affect both short and long-term financial planning:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Monthly housing costs and mortgage qualification</li>
    <li>Overall return on investment for property appreciation</li>
    <li>Cash flow calculations for rental properties</li>
    <li>Retirement planning and fixed-income considerations</li>
  </ul>

  <h2 class="font-semibold text-gray-800 text-xl my-2">Strategies for Managing Property Tax Burden</h2>
  <p class="leading-relaxed text-gray-700">
    Homeowners have several options to potentially reduce their tax obligations:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Appeal assessments when values appear inaccurate</li>
    <li>Apply for all eligible exemptions (homestead, senior, veteran, etc.)</li>
    <li>Monitor local government spending and tax proposals</li>
    <li>Consider tax implications when making home improvements</li>
    <li>Factor tax rates into neighborhood selection during home searches</li>
  </ul>

  <p class="leading-relaxed text-gray-700">
    By making property taxes a central consideration in your real estate decisions rather than an afterthought, you can avoid budget surprises and make more financially sound investments in your future home.
  </p>

    `,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    author: {
      name: 'Jessica Williams',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      role: 'Real Estate Tax Specialist'
    },
    date: 'February 18, 2023',
    readTime: '11 min read',
    category: 'Finance',
    tags: ['Property Taxes', 'Neighborhoods', 'Homeownership Costs', 'Financial Planning'],
    likes: 203,
    comments: 36,
    relatedPosts: [2, 3, 6]
  },
  {
    id: '6',
    title: 'Rental Market Trends: What Landlords Need to Know',
    slug: 'rental-market-trends-landlords',
    excerpt: 'The rental market continues to evolve post-pandemic. Stay informed about current trends, renter preferences, and how to position your rental property for success.',
    content: `
  <p class=" leading-relaxed text-gray-700">
    The rental market has undergone significant transformations in recent years, accelerated by the pandemic and changing demographic preferences. For landlords and property investors, staying ahead of these trends is essential for maintaining competitive properties and maximizing returns. This analysis explores the current rental landscape and provides actionable insights for property owners.
  </p>

  <h2 class=" font-semibold text-gray-800 text-xl my-2">Shifting Geographic Demand</h2>
  <p class=" leading-relaxed text-gray-700">
    Location preferences have evolved significantly:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Continued migration from high-cost urban centers to suburban and secondary markets</li>
    <li>Rising demand in "Zoom towns" with lifestyle amenities and natural attractions</li>
    <li>Renewed interest in urban cores as offices reopen with hybrid models</li>
    <li>Growing preference for regions with climate resilience and moderate weather</li>
  </ul>

  <h2 class=" font-semibold text-gray-800 text-xl my-2">Evolving Tenant Preferences</h2>
  <p class=" leading-relaxed text-gray-700">
    Today's renters prioritize different features than pre-pandemic tenants:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Dedicated home office spaces or flexible rooms that can serve multiple purposes</li>
    <li>Outdoor access through private balconies, patios, or communal green spaces</li>
    <li>High-speed internet capabilities as a non-negotiable amenity</li>
    <li>Package delivery solutions and secure storage options</li>
    <li>Health-focused amenities like enhanced air filtration and touchless features</li>
  </ul>

  <h2 class=" font-semibold text-gray-800 text-xl my-2">Technology Integration</h2>
  <p class=" leading-relaxed text-gray-700">
    Tech solutions are transforming the rental experience:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Virtual and self-guided tours becoming standard options</li>
    <li>Online application, screening, and lease signing processes</li>
    <li>Digital payment systems replacing paper checks</li>
    <li>Smart home features commanding premium rents</li>
    <li>Maintenance request platforms improving response times and tenant satisfaction</li>
  </ul>

  <h2 class=" font-semibold text-gray-800  text-xl my-2">Market Dynamics and Pricing</h2>
  <p class=" leading-relaxed text-gray-700">
    Understanding the economic factors affecting rental rates:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Supply constraints from construction delays and materials costs</li>
    <li>Impact of interest rates on the buy-vs-rent equation</li>
    <li>Wage growth patterns in different regions affecting affordability</li>
    <li>Segmentation of markets with luxury rentals performing differently than workforce housing</li>
  </ul>

  <h2 class=" font-semibold text-gray-800 text-xl my-2">Regulatory Considerations</h2>
  <p class=" leading-relaxed text-gray-700">
    The regulatory landscape continues to evolve for landlords:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Expanding tenant protection laws in many jurisdictions</li>
    <li>Short-term rental regulations affecting investment strategies</li>
    <li>Energy efficiency and sustainability requirements</li>
    <li>Fair housing enforcement and testing programs</li>
  </ul>

  <h2 class=" font-semibold text-gray-800 text-xl my-2">Strategic Recommendations for Landlords</h2>
  <p class=" leading-relaxed text-gray-700">
    Based on these trends, consider these approaches:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>Conduct competitive analyses regularly to ensure your properties remain attractive</li>
    <li>Invest in strategic upgrades that align with evolving tenant preferences</li>
    <li>Implement technology solutions to streamline operations and enhance tenant experience</li>
    <li>Develop pricing strategies that balance occupancy and rate optimization</li>
    <li>Stay informed about local regulatory changes affecting property management</li>
  </ul>

  <p class=" leading-relaxed text-gray-700">
    By understanding and adapting to these rental market trends, property owners can position their investments for sustained performance in an evolving landscape.
  </p>

    `,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    author: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      role: 'Rental Market Analyst'
    },
    date: 'January 30, 2023',
    readTime: '10 min read',
    category: 'Rental',
    tags: ['Rental Market', 'Landlord Tips', 'Property Management', 'Market Trends'],
    likes: 241,
    comments: 52,
    relatedPosts: [3, 5]
  }
];

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API fetch with a timeout
    setLoading(true);
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.slug === slug);
      setPost(foundPost || null);

      // Get related posts
      if (foundPost && foundPost.relatedPosts) {
        const related = blogPosts.filter(p =>
          foundPost.relatedPosts.includes(parseInt(p.id))
        );
        setRelatedPosts(related);
      }

      setLoading(false);
    }, 800);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center py-12">
          <Loader text="Loading article..." />
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow py-12">
          <div className="container-custom">
            <div className="text-center">
              <h1 className=" font-bold mb-4">Article Not Found</h1>
              <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/blog">Return to Blog</Link>
              </Button>
            </div>
          </div>
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
        <div className=" py-4">
          <div className="container-custom">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium truncate">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="w-full h-[40vh] md:h-[60vh] relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container-custom text-center text-white">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-4 space-x-4">
                  <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center text-xs md:text-sm">
                    <Calendar className="w-4 h-4  mr-1" />
                    {post.date}
                  </span>
                  {post.readTime && (
                    <span className='text-xs md:text-sm'>{post.readTime}</span>
                  )}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
                <div className="flex items-center justify-center">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <img src={post.author.avatar} alt={post.author.name} />
                  </Avatar>
                  <div className="ml-3 text-left">
                    <div className="text-sm font-medium">{post.author.name}</div>
                    <div className="text-xs opacity-80">{post.author.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                {/* Article content */}
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
                  <div className="prose prose-lg max-w-none text-left" dangerouslySetInnerHTML={{ __html: post.content }} />

                  {/* Tags */}
                  <div className="mt-10 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap items-center">
                      <Tag className="w-5 h-5 mr-2 text-gray-600" />
                      {post.tags && post.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="m-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Sharing */}
                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="mb-4 sm:mb-0">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-600 hover:text-primary">
                          <ThumbsUp className="w-5 h-5 mr-1" />
                          <span>{post.likes || 0}</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-primary">
                          <MessageSquare className="w-5 h-5 mr-1" />
                          <span>{post.comments || 0}</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-3">Share:</span>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500">
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900">
                          <Linkedin className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start">
                    <Avatar className="h-20 w-20 border-2 border-primary">
                      <img src={post.author.avatar} alt={post.author.name} />
                    </Avatar>
                    <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                      <h3 className="text-xl font-semibold">{post.author.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{post.author.role}</p>
                      <p className="text-gray-700">
                        An experienced professional specializing in real estate trends and property management.
                        With a passion for helping clients find their perfect home and investment opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Back to Blog */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/blog" className="flex items-center justify-center">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Blog
                    </Link>
                  </Button>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="block group">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 h-16 w-16 rounded overflow-hidden">
                              <img
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-sm font-medium group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <Calendar className="w-3 h-3 mr-1" />
                                {relatedPost.date}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-600 text-sm">No related articles found.</p>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">Categories</h3>
                  <div className="space-y-2">
                    {['Market Trends', 'Home Staging', 'Investment', 'Technology', 'Finance', 'Rental', 'Buying Guide', 'Selling Tips'].map((category) => (
                      <div key={category} className="flex items-center justify-between">
                        <Link
                          to={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-700 hover:text-primary transition-colors"
                        >
                          {category}
                        </Link>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 20) + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-primary/5 rounded-lg p-6 mt-8 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">Stay updated with the latest in real estate trends and insights.</p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button type="submit" className="w-full">Subscribe Now</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
