
import React from 'react';
import { Users, Award, BookOpen, Clock, Map, BadgeCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { icon: <Clock className="w-6 h-6" />, value: '33+', label: 'Years of Experience' },
    { icon: <Users className="w-6 h-6" />, value: '123+', label: 'Happy Clients' },
    { icon: <Map className="w-6 h-6" />, value: '15+', label: 'Cities Covered' },
    { icon: <Award className="w-6 h-6" />, value: '42+', label: 'Awards Won' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',
      bio: 'With over 20 years in real estate, Sarah founded our company with a vision to transform the industry with transparency and client-first service.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Sales Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop',
      bio: 'Michael brings 15 years of experience in luxury property sales and has personally closed over $500 million in residential transactions.'
    },
    {
      name: 'Jessica Martinez',
      position: 'Head of Property Management',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop',
      bio: 'Jessica oversees our property management division, ensuring exceptional service for both property owners and tenants alike.'
    },
    {
      name: 'David Wilson',
      position: 'Senior Investment Advisor',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&h=200&auto=format&fit=crop',
      bio: 'David specializes in helping clients build wealth through strategic real estate investments and portfolio management.'
    }
  ];

  const values = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: 'Integrity',
      description: "We operate with honesty and transparency in every interaction, putting our clients' interests first."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Expertise',
      description: 'Our team brings deep industry knowledge and continuous education to deliver exceptional results.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Focused',
      description: "We listen carefully to our clients' needs and tailor our services to exceed their expectations."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in all we do, from property marketing to customer service.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=400"
              alt="Team meeting"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="container-custom relative z-10 text-center">
            <Users className="w-16 h-16 text-primary mb-6 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Learn more about our company, our mission, and the dedicated team of professionals working to make your real estate dreams a reality.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1990, our real estate agency has grown from a small family business to one of the region's most trusted property firms. Through economic ups and downs, we've maintained our commitment to exceptional client service and integrity.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began when Sarah Johnson, our founder, recognized the need for a more personalized approach to real estate. With just a small office and big dreams, she built relationships based on trust and expertise that have lasted generations.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have helped thousands of families find their perfect homes and guided countless investors toward financial success through real estate. Our growth reflects our clients' trust in our values and commitment to excellence.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&h=700"
                  alt="Office team meeting"
                  className="w-full h-auto rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-up bg-white p-6 rounded-lg shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-100">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
