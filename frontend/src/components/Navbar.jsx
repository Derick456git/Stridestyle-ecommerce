// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible,setVisible] = useState(false);

//     const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
      
//       <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

//       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//             <p>HOME</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//             <p>PRODUCTS</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//             <p>ABOUT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//             <p>CONTACT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>

//       </ul>

//       <div className='flex items-center gap-6'>
//             <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            
//             <div className='group relative'>
//                 <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
//                 {/* Dropdown Menu */}
//                 {token && 
//                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                     <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
//                         <p className='cursor-pointer hover:text-black'>My Profile</p>
//                         <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                         <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                     </div>
//                 </div>}
//             </div> 
//             <Link to='/cart' className='relative'>
//                 <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//                 <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//             </Link> 
//             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
//       </div>

//         {/* Sidebar menu for small screens */}
//         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar










// import React, { useContext, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   return (
//     <div className="flex items-center justify-between py-5 px-8 bg-gradient-to-r from-gray-400 via-blue-300 to-indigo-300 shadow-lg rounded-b-lg">

//       {/* Logo */}
//       <Link to="/">
//         <img src={assets.logo} className="w-[230px] h-[80px]" alt="Logo" />
//       </Link>

//       {/* Desktop Menu */}
//       <ul className="hidden sm:flex gap-8 text-sm text-black">
//         <NavLink to="/" className="nav-button">
//           <p>Home</p>
//         </NavLink>
//         <NavLink to="/collection" className="nav-button">
//           <p>Products</p>
//         </NavLink>
//         <NavLink to="/about" className="nav-button">
//           <p>About</p>
//         </NavLink>
//         <NavLink to="/contact" className="nav-button">
//           <p>Contact</p>
//         </NavLink>
//       </ul>

//       {/* Search and Cart */}
//       <div className="flex items-center gap-6">
//         <img
//           onClick={() => {
//             setShowSearch(true);
//             navigate('/collection');
//           }}
//           src={assets.search_icon}
//           className="w-5 cursor-pointer"
//           alt="Search Icon"
//         />

//         <div className="relative group">
//           <img
//             onClick={() => (token ? null : navigate('/login'))}
//             className="w-5 cursor-pointer"
//             src={assets.profile_icon}
//             alt="Profile Icon"
//           />
//           {/* Dropdown Menu */}
//           {token && (
//             <div className="group-hover:block hidden absolute right-0 pt-4 w-36 bg-slate-100 text-gray-500 rounded shadow-lg">
//               <div className="flex flex-col gap-2 p-3">
//                 {/* <p className="cursor-pointer hover:text-black">My Profile</p> */}
//                 <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
//                  My Orders
//                 </p>
//                 <p onClick={logout} className="cursor-pointer hover:text-black">
//                   Logout
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         <Link to="/cart" className="relative">
//           <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//             {getCartCount()}
//           </p>
//         </Link>

//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-5 cursor-pointer sm:hidden"
//           alt="Menu Icon"
//         />
//       </div>

//       {/* Sidebar menu for small screens */}
//       <div
//         className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
//       >
//         <div className="flex flex-col text-gray-600">
//           <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
//             <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/">
//             Home
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/collection">
//             Products
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/about">
//             About
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/contact">
//             Contact
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;














import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems, userName } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  // If you want to display the logged-in user's name
  const userDisplayName = userName || (token && localStorage.getItem('userName')); // Adjust accordingly based on where the name is stored

  return (
    <div className="flex items-center justify-between py-5 px-8 bg-gradient-to-r from-gray-400 via-blue-300 to-indigo-300 shadow-lg rounded-b-lg">

      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-[230px] h-[80px]" alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 text-sm text-black">
        <NavLink to="/" className="nav-button">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="nav-button">
          <p>PRODUCTS</p>
        </NavLink>
        <NavLink to="/about" className="nav-button">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="nav-button">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Search and Cart */}
      <div className="flex items-center gap-6">
        {/* Display username if logged in */}
        {userDisplayName && (
          <p className="text-sm text-gray-700 mr-4">Welcome, {userDisplayName}</p>
        )}

        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />

        <div className="relative group">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="Profile Icon"
          />
          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-4 w-36 bg-slate-100 text-gray-500 rounded shadow-lg">
              <div className="flex flex-col gap-2 p-3">
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                  My Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute right-[-10px] bottom-[-9px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[7px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/collection">
            Products
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="sidebar-item" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
