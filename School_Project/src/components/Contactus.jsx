import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const ContactUs = () => {
  return (
    <div id="contact" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          We would love to hear from you! Feel free to reach out to us through the following contact details.
        </p>
        <div className="mt-8 flex flex-col space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-6 h-6 text-blue-500" />
            <span className="text-lg text-gray-700">9516300510</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-6 h-6 text-blue-500" />
            <span className="text-lg text-gray-700">Village kuruwa, Bina district - sagar (M.P.)</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Instagram className="w-6 h-6 text-blue-500" />
            <a
            href='https://www.instagram.com/adhyayaninternational_02/'>
            <span className="text-lg text-gray-700 hover:underline">adhyayaninternational_02</span>
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
