// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400 mt-8'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero



// import React from 'react';
// import { assets } from '../assets/assets';

// const Hero = () => {
//   return (
//     <div className="flex flex-col sm:flex-row border border-gray-400 mt-8">
//       {/* Hero Left Side */}
//       <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
//         <div className="text-[#414141] space-y-4">
//           <div className="flex items-center gap-2">
//             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//             <p className="font-medium text-sm md:text-base tracking-wide">OUR BESTSELLERS</p>
//           </div>
//           <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold">
//             Step Into Style
//           </h1>
//           <p className="text-sm md:text-base leading-relaxed">
//             Discover our latest collection of footwear designed for comfort and elegance.
//           </p>
//           <div className="flex items-center gap-2">
//             <p className="font-semibold text-sm md:text-base hover:text-[#555] cursor-pointer">
//               SHOP NOW
//             </p>
//             <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
//           </div>
//         </div>
//       </div>

//       {/* Hero Right Side */}
//       <div className="relative w-full sm:w-1/2 overflow-hidden">
//         <img
//           className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
//           src={assets.hero_img}
//           alt="Footwear Collection"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React, { useEffect, useState } from 'react';
// import { assets } from '../assets/assets';

// const Hero = () => {
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     // Trigger the animation after the component is mounted
//     setShowText(true);
//   }, []);

//   return (
//     <div className="relative flex flex-col sm:flex-row items-center bg-gray-50 py-12">
//       {/* Text Content */}
//       <div className={`absolute z-10 top-1/3 left-8 sm:left-12 text-white max-w-sm transition-transform duration-1000 ease-out ${showText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50%]'}`}>
//         <div className="space-y-4">
//           <div className="flex items-center gap-2">
//             <p className="h-[2px] bg-white"></p>
//             <p className="font-medium text-sm md:text-base tracking-wide uppercase">
//               Bestseller Picks
//             </p>
//           </div>
//           <h1 className="text-4xl sm:text-6xl font-bold leading-tight drop-shadow-lg">
//             Walk Your Way to Perfection
//           </h1>
//           <p className="text-sm md:text-base leading-relaxed drop-shadow-lg">
//             Unveiling the latest footwear for every occasion—designed for comfort and elegance.
//           </p>
//           <button className="mt-4 px-6 py-2 bg-white text-[#414141] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Background Image */}
//       <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden">
//         <img
//           className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out transform translate-x-0 hover:translate-x-[-10%]"
//           src={assets.hero_img}
//           alt="Footwear Collection"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from 'react';
// import { assets } from '../assets/assets';

// const Hero = () => {
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     setShowText(true);
//   }, []);

//   const splitText = (text) => {
//     return text.split(' ').map((word, index) => (
//       <span
//         key={index}
//         className={`inline-block opacity-0 transform ${
//           showText ? `animate-fadeInUp animate-delay-${index * 100}` : ''
//         }`}
//       >
//         {word}&nbsp;
//       </span>
//     ));
//   };

//   return (
//     <div className="relative flex flex-col sm:flex-row h-screen bg-gray-100">
//       {/* Left Content */}
//       <div className="flex flex-col justify-center items-start text-left px-8 sm:px-16 lg:px-24 w-full sm:w-1/2 space-y-6 bg-white">
//         <div className="inline-flex items-center gap-2">
//           <p className="text-sm uppercase text-indigo-600 font-medium tracking-wider bg-indigo-100 px-3 py-1 rounded-full">
//             Exclusive Collection
//           </p>
//         </div>
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
//           {splitText("Bringing global trends to your doorstep with StrideStyle")}
//         </h1>
//         <p className="text-base sm:text-lg text-gray-600 mt-4">
//           {splitText(
//             "Discover comfort and elegance in every step with our latest footwear collection."
//           )}
//         </p>
//         <button className="mt-4 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
//           Explore Now
//         </button>
//       </div>

//       {/* Right Image Section */}
//       <div className="relative w-full sm:w-1/2 h-full">
//         <img
//           src={assets.hero_img}
//           alt="Footwear Collection"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Left Panel */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-indigo-700 transition-transform duration-[1500ms] ease-in-out ${
          loaded ? '-translate-x-full' : 'translate-x-0'
        }`}
      ></div>

      {/* Right Panel */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-purple-700 transition-transform duration-[1500ms] ease-in-out ${
          loaded ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>

      {/* Hero Image */}
      <img
        src={assets.hero_img}
        alt="Footwear Collection"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default Hero;
