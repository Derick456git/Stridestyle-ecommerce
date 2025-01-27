// import React from 'react'
// import {assets} from '../assets/assets'

// const Navbar = ({setToken}) => {
//   return (
//     <div className='flex items-center py-2 px-[4%] justify-between'>
//         <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
//         <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
//     </div>
//   )
// }

// export default Navbar







import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="w-[max(17%,100px)] rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          src={assets.logo}
          alt="Logo"
        />
        <h1 className="ml-4 text-white font-bold text-lg sm:text-xl tracking-wide">
          StrideStyle
        </h1>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => setToken('')}
        className="bg-white text-indigo-600 font-semibold py-2 px-6 sm:px-8 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
