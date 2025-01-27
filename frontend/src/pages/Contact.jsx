// import React from 'react';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';

// const Contact = () => {
//   return (
//     <div>
//       {/* Page Title */}
//       <div className="text-center text-2xl pt-10 border-t">
//         <Title text1={'CONTACT'} text2={'US'} />
//       </div>

//       {/* Contact Section */}
//       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
//         <img
//           className="w-full md:max-w-[480px] rounded-lg shadow-lg object-cover"
//           src={assets.contact_img}
//           alt="StrideStyle Contact"
//         />
//         <div className="flex flex-col justify-center items-start gap-6 text-gray-700">
//           <h3 className="font-semibold text-2xl text-gray-800">
//             Get in Touch with StrideStyle
//           </h3>
//           <p>
//             At StrideStyle, we’re passionate about helping you find the perfect pair of shoes. Whether you have questions about our collections, need assistance with your order, or simply want to share feedback, our team is here for you.
//           </p>

//           {/* Store Address */}
//           <div>
//             <h4 className="font-semibold text-xl text-gray-800">Our Headquarters</h4>
//             <p>
//               123 StrideStyle Lane <br />
//               Suite 500, Los Angeles, CA 90210, USA
//             </p>
//           </div>

//           {/* Contact Details */}
//           <div>
//             <h4 className="font-semibold text-xl text-gray-800">Contact Information</h4>
//             <p>
//               Tel: +1 (555) 123-4567 <br />
//               Email: support@stridestyle.com
//             </p>
//           </div>

        

//           {/* Social Media Links */}
//           <div>
//             <h4 className="font-semibold text-xl text-gray-800">Follow Us</h4>
//             <p>
//               Stay connected with us on social media for the latest updates and exclusive deals:
//             </p>
//             <p className="flex gap-4">
//               <a
//                 href="https://www.facebook.com/stridestyle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 Facebook
//               </a>
//               <a
//                 href="https://www.instagram.com/stridestyle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-pink-500 hover:underline"
//               >
//                 Instagram
//               </a>
//               <a
//                 href="https://www.twitter.com/stridestyle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline"
//               >
//                 Twitter
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;







import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Section */}
      <div className="my-10 flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Section - Image with Overlay */}
        <div className="relative flex-1 overflow-hidden group">
          <img
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
            src={assets.contact_img}
            alt="StrideStyle Contact"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-60"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white text-center px-4 md:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Str!deStyle
            </h2>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="flex-1 flex flex-col justify-center items-start gap-8 px-8 md:px-16 bg-white shadow-lg">
          <h3 className="font-semibold text-3xl text-gray-800 transition-all duration-500 hover:text-blue-600">
            Get in Touch with StrideStyle
          </h3>
          <p className="text-gray-600">
            At StrideStyle, we’re passionate about helping you find the perfect pair of shoes. Whether you have questions about our collections, need assistance with your order, or simply want to share feedback, our team is here for you.
          </p>

          {/* Store Address */}
          <div className="transition-transform duration-500 hover:translate-x-2">
            <h4 className="font-semibold text-xl text-gray-800">
              Our Headquarters
            </h4>
            <p className="text-gray-600">
              123 StrideStyle Lane <br />
              Suite 500, Los Angeles, CA 90210, USA
            </p>
          </div>

          {/* Contact Details */}
          <div className="transition-transform duration-500 hover:translate-x-2">
            <h4 className="font-semibold text-xl text-gray-800">
              Contact Information
            </h4>
            <p className="text-gray-600">
              Tel: +1 (555) 123-4567 <br />
              Email: support@stridestyle.com
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold text-xl text-gray-800">
              Follow Us
            </h4>
            <p className="text-gray-600">
              Stay connected with us on social media for the latest updates and exclusive deals:
            </p>
            <p className="flex gap-6 mt-2">
              <a
                href="https://www.facebook.com/stridestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transform hover:scale-110 transition-all duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/stridestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transform hover:scale-110 transition-all duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com/stridestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
