import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bestSeller.length);
        setFade(true); // Start fade-in
      }, 500); // Wait for fade-out to complete (500ms)
    }, 2000); // Change every 1 second (500ms fade-out + 500ms fade-in)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [bestSeller.length]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8 mb-8">
        <Title text1={'BEST'} text2={'SELLERS'} />
      </div>

      
      <div className="relative flex justify-center items-center h-80">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-500 ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
            <div className="mb-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
