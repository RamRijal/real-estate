
import React from 'react';
import { FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-center mb-12">
            <FileText className="w-16 h-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold text-center mb-6">Terms & Conditions</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
              Please read these terms and conditions carefully before using our services.
            </p>
            
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-gray-700">
                    These Terms of Service govern your use of our website and services operated by Real Estate. By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website or use our services.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
                  <p className="text-gray-700 mb-4">
                    Our services are intended for users who are at least 18 years of age. By using our services, you represent and warrant that you are at least 18 years old and are able to form legally binding contracts under applicable law.
                  </p>
                  <p className="text-gray-700">
                    You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Property Listings</h2>
                  <p className="text-gray-700 mb-4">
                    The property listings on our website are provided for informational purposes only. While we strive to provide accurate and up-to-date information, we do not warrant the accuracy, completeness, or usefulness of this information.
                  </p>
                  <p className="text-gray-700">
                    Property details, including but not limited to prices, availability, and features, are subject to change without notice. We recommend verifying all information directly with the property owner or listing agent before making any decisions.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                  <p className="text-gray-700">
                    The content on our website, including text, graphics, logos, images, and software, is the property of Real Estate and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                  <p className="text-gray-700">
                    In no event shall Real Estate, its officers, directors, employees, or agents be liable for any indirect, punitive, incidental, special, or consequential damages arising out of, or in any way connected with, your use of our services, whether based on contract, tort, strict liability, or otherwise, even if Real Estate has been advised of the possibility of such damages.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
                  <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of the state in which Real Estate operates, without regard to its conflict of law provisions.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
                  <p className="text-gray-700">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms, please contact us at legal@realestate.com.
                  </p>
                </section>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600">Last updated: June 1, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
