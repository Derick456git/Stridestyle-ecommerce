import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-[20%] min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600 shadow-lg flex flex-col items-center">
      <div className="pt-8">
       
        {/* Navigation Links */}
        <div className="flex flex-col gap-6 w-full px-4">
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `flex items-center gap-4 py-3 px-6 rounded-lg text-white font-medium text-lg transition-all duration-300 ${
                isActive ? 'bg-white text-indigo-600 shadow-lg' : 'hover:bg-indigo-700'
              }`
            }
          >
            <img className="w-6 h-6" src={assets.add_icon} alt="Add Items" />
            <span className="hidden lg:block">Add Items</span>
          </NavLink>

          <NavLink
            to="/list"
            className={({ isActive }) =>
              `flex items-center gap-4 py-3 px-6 rounded-lg text-white font-medium text-lg transition-all duration-300 ${
                isActive ? 'bg-white text-indigo-600 shadow-lg' : 'hover:bg-indigo-700'
              }`
            }
          >
            <img className="w-6 h-6" src={assets.order_icon} alt="List Items" />
            <span className="hidden lg:block">List Items</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center gap-4 py-3 px-6 rounded-lg text-white font-medium text-lg transition-all duration-300 ${
                isActive ? 'bg-white text-indigo-600 shadow-lg' : 'hover:bg-indigo-700'
              }`
            }
          >
            <img className="w-6 h-6" src={assets.order_icon} alt="Orders" />
            <span className="hidden lg:block">View Orders</span>
          </NavLink>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-auto mb-8 text-white text-sm text-center">
        <p>&copy; 2025 YourBrand</p>
        <p className="text-xs">All rights reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;
