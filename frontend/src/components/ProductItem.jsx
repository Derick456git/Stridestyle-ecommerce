// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import {Link} from 'react-router-dom'

// const ProductItem = ({id,image,name,price}) => {
    
//     const {currency} = useContext(ShopContext);

//   return (
//     <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//       <div className=' overflow-hidden'>
//         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
//       </div>
//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className=' text-sm font-medium'>{currency}{price}</p>
//     </Link>
//   )
// }

// export default ProductItem


import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      {/* Fixed-size Image Container with Transition */}
      <div className="relative w-[280px] h-[360px] overflow-hidden rounded-md bg-gray-200 group">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={image[0]}
          alt={name}
        />
      </div>
      {/* Product Title and Price */}
      <p className="pt-3 pb-1 text-sm font-medium text-center">{name}</p>
      <p className="text-sm font-medium text-center">
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;

