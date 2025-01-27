import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="space-y-10">

          {/* Easy Exchange Policy */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform transition-all duration-300">
            <img
              src={assets.exchange_icon}
              className="w-16 h-16 mr-6"
              alt="Exchange Policy"
            />
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Easy Exchange
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly exchange any product without the hassle. We make it simple and stress-free.
              </p>
            </div>
          </div>

          {/* 7 Days Return Policy */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform transition-all duration-300">
            <img
              src={assets.quality_icon}
              className="w-16 h-16 mr-6"
              alt="Return Policy"
            />
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                7 Days Return
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Return unused products within 7 days with no extra charges. Your satisfaction is our priority.
              </p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform transition-all duration-300">
            <img
              src={assets.support_img}
              className="w-16 h-16 mr-6"
              alt="Customer Support"
            />
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get round-the-clock assistance from our dedicated support team. We're always here to help.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
