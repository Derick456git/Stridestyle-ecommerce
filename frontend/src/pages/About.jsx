import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const missionText = ". To provide more than just products — we strive to create an experience that combines convenience, quality, and exceptional service to make every shopping journey remarkable.";

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      const interval = setInterval(() => {
        setTypedText((prevText) => prevText + missionText[index]);
        index += 1;
        if (index === missionText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setTypedText(''); // Clear the text after typing finishes
            index = 0; // Reset index
            typeText(); // Restart the typing effect
          }, 1000); // Delay before restarting the typing effect
        }
      }, 50); // Adjust typing speed
    };

    typeText(); // Initial call to start typing

    return () => clearInterval(); // Clean up the interval on unmount
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div className="bg-gray-50 py-20">
      {/* Hero Section */}
      <div className="relative bg-gray-100 text-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative inline-block">
            <span className="absolute inset-0 transform -skew-x-6 bg-indigo-500 rounded-md"></span>
            <h1 className="relative text-4xl font-extrabold text-white px-6 py-2">
              Get to Know Us
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Learn more about who we are, our journey, and how StrideStyle aims to provide an exceptional online shopping experience.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <img
          className="w-64 h-64 rounded-full shadow-lg object-cover transform transition-transform hover:scale-105 duration-300"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="text-gray-700 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Our Journey</h2>
          <p>
            StrideStyle was created with the vision of transforming the way people shop for shoes online. What started as a passion project has quickly evolved into a trusted brand, providing customers worldwide with a seamless, stylish, and high-quality shopping experience.
          </p>
          <p>
            We take pride in offering a carefully selected range of premium footwear that ensures every purchase is a perfect fit for your style and comfort, making each shopping experience truly exceptional.
          </p>
        </div>
      </div>

      {/* Mission Section with Typing Effect */}
      <div className="py-16 bg-gray-900">
  <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
    <h2 className="text-4xl font-extrabold text-white mb-8">
      Our Mission
    </h2>
    <div className="border-t-4 border-indigo-500 inline-block pt-4 mt-4">
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
        {typedText}
      </p>
    </div>
  </div>
</div>


      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Why Choose Us</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-gray-700">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Unmatched Quality</h3>
              <p className="text-gray-600">
                Each product is carefully selected and tested to ensure it meets the highest standards, giving you confidence in every purchase.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-gray-700">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Effortless Shopping</h3>
              <p className="text-gray-600">
                Our easy-to-use platform allows you to browse and shop seamlessly, saving you time and effort.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-gray-700">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Exceptional Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is always ready to assist, ensuring your experience is smooth and worry-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
   
          <NewsletterBox />
        </div>
     
  );
};

export default About;
