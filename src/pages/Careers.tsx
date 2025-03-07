
import React from 'react';
import { Briefcase, Check, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Real Estate Agent",
      location: "New York, NY",
      type: "Full-time",
      description: "We're looking for motivated real estate agents to join our growing team. Responsibilities include generating leads, assisting clients with buying and selling properties, and negotiating contracts.",
      requirements: [
        "Valid real estate license",
        "Excellent communication and negotiation skills",
        "Self-motivated and goal-oriented",
        "1+ years of experience in real estate (preferred)"
      ]
    },
    {
      id: 2,
      title: "Property Manager",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Manage a portfolio of residential and commercial properties. Responsibilities include tenant relations, maintenance coordination, and financial reporting.",
      requirements: [
        "Property management certification",
        "Experience with property management software",
        "Strong organizational and problem-solving skills",
        "3+ years of experience in property management"
      ]
    },
    {
      id: 3,
      title: "Marketing Specialist",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Create and implement marketing strategies for our real estate listings. Manage social media accounts, create content, and analyze campaign performance.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Experience with digital marketing and social media management",
        "Knowledge of SEO and content creation",
        "2+ years of marketing experience (real estate industry preferred)"
      ]
    },
    {
      id: 4,
      title: "Administrative Assistant",
      location: "Remote",
      type: "Part-time",
      description: "Provide administrative support to our team of real estate agents. Duties include scheduling appointments, managing paperwork, and client communication.",
      requirements: [
        "High school diploma (Associate's or Bachelor's degree preferred)",
        "Proficiency in Microsoft Office and CRM systems",
        "Excellent organizational and time management skills",
        "Previous administrative experience preferred"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center mb-12">
            <Briefcase className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Join Our Team</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
              Explore exciting career opportunities and grow with one of the leading real estate companies in the nation.
            </p>

            <div className="bg-gradient-to-r from-[#183152]/10 to-[#B80002]/10 rounded-xl p-8 w-full max-w-6xl mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>Competitive compensation and benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>Professional development and training opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>Collaborative and supportive work environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>Latest tools and technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>Flexible scheduling options</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Your Resume
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
                    alt="Team working together"
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
            <div className="space-y-6 w-full max-w-6xl">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <span className="text-gray-600 text-sm">{job.location}</span>
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="space-y-1 pl-5 list-disc text-gray-700">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <a href='#'>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Apply Now
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
