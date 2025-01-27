import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      {/* Page Title */}
      <div className="text-center py-6 text-3xl font-bold text-gray-800">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Check if cart is empty */}
      {cartData.length === 0 ? (
        <div className="text-center text-2xl text-gray-700 my-24">
          Your cart is empty!
        </div>
      ) : (
        <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cart Items */}
          <div className="space-y-8">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);

              return (
                <div
                  key={index}
                  className="flex items-center bg-white shadow-lg rounded-lg p-6"
                >
                  <img className="w-20 h-20 rounded-lg object-cover" src={productData.image[0]} alt="" />
                  <div className="ml-6 flex-1">
                    <p className="text-xl font-semibold text-gray-800">{productData.name}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-lg text-gray-600">{currency}{productData.price}</p>
                      <p className="bg-gray-200 py-1 px-3 rounded-full text-gray-600">{item.size}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <input
                        onChange={(e) =>
                          e.target.value === '' || e.target.value === '0'
                            ? null
                            : updateQuantity(item._id, item.size, Number(e.target.value))
                        }
                        className="w-20 px-2 py-1 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                      />
                      <img
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="w-6 h-6 cursor-pointer"
                        src={assets.bin_icon}
                        alt="Remove"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-full text-lg mt-8 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
