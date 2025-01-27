
// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import Confetti from 'react-confetti'; // Import react-confetti

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');
//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState('');
//   const [confettiVisible, setConfettiVisible] = useState(false); // State to control the visibility of the confetti

//   const fetchProductData = () => {
//     const product = products.find((item) => item._id === productId);
//     setProductData(product);
//     setImage(product?.image[0]);
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const handleAddToCart = () => {
//     if (!size) {
//       setMessage('Please select a product size!');
//       setMessageType('error');
//       setTimeout(() => setMessage(''), 3000);
//       setTimeout(() => setMessageType(''), 3000);
//       return;
//     }
//     addToCart(productData._id, size);
//     setMessage('Woohooo..Product added to cart!');
//     setMessageType('success');
//     setConfettiVisible(true); // Show confetti when product is added to cart
//     setTimeout(() => {
//       setMessage('');
//       setMessageType('');
//       setConfettiVisible(false); // Hide confetti after 3 seconds
//     }, 3000);
//   };

//   return productData ? (
//     <div className="container mx-auto px-6 py-12">
//       {/* Confetti Effect */}
//       {confettiVisible && <Confetti />} {/* Show Confetti when product is added */}

//       {/* Message Display */}
//       {message && (
//         <div
//           className={`px-6 py-4 rounded-lg text-center mb-6 transition-all duration-300 ease-in-out ${messageType === 'error' ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'}`}
//         >
//           {message}
//         </div>
//       )}

//       {/* Product Details */}
//       <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
//         {/* Product Images */}
//         <div className="flex-1 flex gap-6 flex-col sm:flex-row items-center">
//           <div className="flex sm:flex-col overflow-x-auto gap-4 w-full sm:w-1/4">
//             {productData.image.map((item, index) => (
//               <img
//                 key={index}
//                 onClick={() => setImage(item)}
//                 src={item}
//                 alt="Product Thumbnail"
//                 className="w-20 h-20 cursor-pointer object-cover rounded-xl transition-transform duration-300 transform hover:scale-105"
//               />
//             ))}
//           </div>
//           <div className="flex-1 flex justify-center items-center">
//             <img
//               className="w-full h-auto max-w-md rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
//               src={image}
//               alt="Main Product"
//             />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex-1 space-y-8">
//           <h1 className="text-3xl font-semibold text-gray-800">{productData.name}</h1>
//           <div className="flex items-center space-x-1">
//             {Array(5)
//               .fill()
//               .map((_, index) => (
//                 <img
//                   key={index}
//                   src={index < 4 ? assets.star_icon : assets.star_dull_icon}
//                   alt="Star Rating"
//                   className="w-4"
//                 />
//               ))}
//             <p className="text-gray-500">({122} Reviews)</p>
//           </div>
//           <p className="text-2xl font-medium text-gray-900">{currency}{productData.price}</p>
//           <p className="text-lg text-gray-600">{productData.description}</p>

//           {/* Select Size */}
//           <div className="flex flex-col gap-4">
//             <p className="text-gray-800">Select Size</p>
//             <div className="flex gap-4 flex-wrap">
//               {productData.sizes.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSize(item)}
//                   className={`border-2 py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform ${
//                     item === size
//                       ? 'border-orange-600 bg-orange-50 text-orange-600'
//                       : 'border-gray-300 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={handleAddToCart}
//             className="w-full py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
//              transform transition-all duration-300 ease-in-out shadow-xl hover:scale-105 hover:from-blue-600 hover:to-indigo-700 
//              focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-700 hover:shadow-2xl"
//           >
//             ADD TO CART
//           </button>

//           <hr className="my-6" />

//           {/* Product Information */}
//           <div className="text-sm text-gray-500">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* Product Description & Reviews */}
//       <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-lg">
//         <div className="flex space-x-6 mb-6">
//           <b className="text-lg font-medium border-b-2 border-gray-800 pb-2">Description</b>
//           <p className="text-sm text-gray-600">Reviews ({122})</p>
//         </div>
//         <p className="text-gray-600">{productData.description}</p>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   ) : (
//     <div className="opacity-0"></div>
//   );
// };

// export default Product;











import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    setProductData(product);
    setImage(product?.image[0]);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      setMessage('Please select a product size!');
      setMessageType('error');
      setTimeout(() => setMessage(''), 3000);
      setTimeout(() => setMessageType(''), 3000);
      return;
    }
    addToCart(productData._id, size);
    setMessage('Woohooo..Product added to cart!');
    setMessageType('success');
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  return productData ? (
    <div className="container mx-auto px-6 py-12">
      {/* Message Display */}
      {message && (
        <div
          className={`px-6 py-4 rounded-lg text-center mb-6 transition-all duration-300 ease-in-out ${messageType === 'error' ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'}`}
        >
          {message}
        </div>
      )}

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
        {/* Product Images */}
        <div className="flex-1 flex gap-6 flex-col sm:flex-row items-center">
          <div className="flex sm:flex-col overflow-x-auto gap-4 w-full sm:w-1/4">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                alt="Product Thumbnail"
                className="w-20 h-20 cursor-pointer object-cover rounded-xl transition-transform duration-300 transform hover:scale-105"
              />
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              className="w-full h-auto max-w-md rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
              src={image}
              alt="Main Product"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl font-semibold text-gray-800">{productData.name}</h1>
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={index < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="Star Rating"
                  className="w-4"
                />
              ))}
            <p className="text-gray-500">({122} Reviews)</p>
          </div>
          <p className="text-2xl font-medium text-gray-900">{currency}{productData.price}</p>
          <p className="text-lg text-gray-600">{productData.description}</p>

          {/* Select Size */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-800">Select Size</p>
            <div className="flex gap-4 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border-2 py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform ${
                    item === size
                      ? 'border-orange-600 bg-orange-50 text-orange-600'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
             transform transition-all duration-300 ease-in-out shadow-xl hover:scale-105 hover:from-blue-600 hover:to-indigo-700 
             focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-700 hover:shadow-2xl"
          >
            ADD TO CART
          </button>

          <hr className="my-6" />

          {/* Product Information */}
          <div className="text-sm text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>


      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
