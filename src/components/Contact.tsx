import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-100 opacity-50 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                      placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                      placeholder="your.email@example.com"
                  />
                </div>
                <div>

                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary bg-white bg-opacity-50"
                      placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-blue w-full py-3 text-lg">Send Message</button>
              </form>
            </div>
            <div className="bg-gray-800 bg-opacity-100 backdrop-filter backdrop-blur-lg text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="font-medium">alexander@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="font-medium">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <p className="font-medium">123 Web Dev Street, Coding City, 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;