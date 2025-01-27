// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {

//     const { products } = useContext(ShopContext);
//     const [latestProducts,setLatestProducts] = useState([]);

//     useEffect(()=>{
//         setLatestProducts(products.slice(0,10));
//     },[products])

//   return (
//     <div className='my-10'>
//       <div className='text-center py-8 text-3xl '>
//           <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//           </p>
//       </div>

//       {/* Rendering Products */}
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {
//           latestProducts.map((item,index)=>(
//             <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default LatestCollection



// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="my-16 bg-gradient-to-r from-indigo-50 to-white py-16 rounded-2xl shadow-xl">
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//         <p className="w-3/4 mx-auto mt-6 text-base sm:text-lg lg:text-xl font-light italic text-gray-600">
//           Experience the latest trends in footwear that bring together unparalleled style and comfort.
//         </p>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 sm:px-12">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;


import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const productRefs = useRef([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  useEffect(() => {
    // Set up the Intersection Observer to trigger animation when the product images come into view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a class to trigger the animation
          entry.target.classList.add('animate-slideIn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    // Observe each product image
    productRefs.current.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      // Clean up the observer when the component is unmounted
      observer.disconnect();
    };
  }, [latestProducts]);

  return (
    <div className="my-16 bg-gradient-to-r from-indigo-50 to-white py-16 rounded-2xl shadow-xl">
      {/* Title Section */}
      <div className="text-center mb-12">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-3/4 mx-auto mt-6 text-base sm:text-lg lg:text-xl font-medium text-gray-800 leading-relaxed tracking-wide italic opacity-80 hover:opacity-100 transition-opacity duration-300">
  Discover the perfect blend of style and comfort with our latest footwear collection, crafted to elevate every step you take.
</p>


      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 sm:px-12">
        {latestProducts.map((item, index) => (
          <div
            ref={(el) => productRefs.current[index] = el}
            key={index}
            className="opacity-0 transform translate-x-[-20%] transition-transform duration-700 ease-out"
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
