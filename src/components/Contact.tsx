import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
              </div>
              <button type="submit" className="btn btn-blue w-full">Send Message</button>
            </form>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary mr-2" />
              <span>alexander@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-primary mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-primary mr-2" />
              <span>123 Web Dev Street, Coding City, 12345</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;