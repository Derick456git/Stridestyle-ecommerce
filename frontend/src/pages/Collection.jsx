// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {

//   const { products , search , showSearch } = useContext(ShopContext);
//   const [showFilter,setShowFilter] = useState(false);
//   const [filterProducts,setFilterProducts] = useState([]);
//   const [category,setCategory] = useState([]);
//   const [subCategory,setSubCategory] = useState([]);
//   const [brand,setBrand] = useState([]);
//   const [sortType,setSortType] = useState('relavent')

//   const toggleCategory = (e) => {

//     if (category.includes(e.target.value)) {
//         setCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev,e.target.value])
//     }

//   }

//   const toggleSubCategory = (e) => {

//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setSubCategory(prev => [...prev,e.target.value])
//     }
//   }

//   const toggleBrand = (e) => {

//     if (brand.includes(e.target.value)) {
//       setBrand(prev=> prev.filter(item => item !== e.target.value))
//     }
//     else{
//       setBrand(prev => [...prev,e.target.value])
//     }
//   }

//   const applyFilter = () => {

//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
//     }

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }

//     if (subCategory.length > 0 ) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
//     }

//     if (brand.length > 0 ) {
//       productsCopy = productsCopy.filter(item => brand.includes(item.brand))
//     }

//     setFilterProducts(productsCopy)

//   }

//   const sortProduct = () => {

//     let fpCopy = filterProducts.slice();

//     switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
//         break;

//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
//         break;

//       default:
//         applyFilter();
//         break;
//     }

//   }

//   useEffect(()=>{
//       applyFilter();
//   },[category,subCategory,brand,search,showSearch,products])

//   useEffect(()=>{
//     sortProduct();
//   },[sortType])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
//       {/* Filter Options */}
//       <div className='min-w-60'>
//         <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//         </p>
//         {/* Category Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> kids
//             </p>
//           </div>
//         </div>
//         {/* SubCategory Filter */}
        
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Formals'} onChange={toggleSubCategory}/> Formals
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Casuals'} onChange={toggleSubCategory}/> Casuals
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Sneakers'} onChange={toggleSubCategory}/> Sneakers
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Heels'} onChange={toggleSubCategory}/> Heels
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Flats'} onChange={toggleSubCategory}/> Flats
//             </p>
//           </div>
//         </div>
      

//       {/*Brand Filter*/}
//       <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>BRAND</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Nike'} onChange={toggleBrand}/> Nike
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Puma'} onChange={toggleBrand}/> Puma
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Adidas'} onChange={toggleBrand}/> Adidas
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Van Heusen'} onChange={toggleBrand}/> Van Heusen
//             </p>
//           </div>
//         </div>
//         </div>
//       {/* Right Side */}
//       <div className='flex-1'>

//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//             <Title text1={'ALL'} text2={'PRODUCTS'} />
//             {/* Porduct Sort */}
//             <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//               <option value="relavent">Sort by: Relavent</option>
//               <option value="low-high">Sort by: Low to High</option>
//               <option value="high-low">Sort by: High to Low</option>
//             </select>
//         </div>

//         {/* Map Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {
//             filterProducts.map((item,index)=>(
//               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//             ))
//           }
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Collection

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [brand, setBrand] = useState([]);
//   const [sortType, setSortType] = useState('relavent');

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setSubCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const toggleBrand = (e) => {
//     if (brand.includes(e.target.value)) {
//       setBrand(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setBrand(prev => [...prev, e.target.value]);
//     }
//   };

//   const applyFilter = () => {
//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     }

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }

//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
//     }

//     if (brand.length > 0) {
//       productsCopy = productsCopy.filter(item => brand.includes(item.brand));
//     }

//     setFilterProducts(productsCopy);
//   };

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();

//     switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
//         break;
//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
//         break;
//       default:
//         applyFilter();
//         break;
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, brand, search, showSearch, products]);

//   useEffect(() => {
//     sortProduct();
//   }, [sortType]);

//   return (
//     <div className="pt-10">
//       {/* Title Section */}
//       <div className="mb-10 text-center">
//         <Title text1={'ALL'} text2={'PRODUCTS'} />
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-row w-full space-x-6">
//         {/* Products Grid (Center) */}
//         <div className="flex-1">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
//             {filterProducts.map((item, index) => (
//               <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//             ))}
//           </div>
//         </div>

//         {/* Filter Section (Right Side) */}
//         <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg hidden sm:block">
//           <p className="text-2xl font-semibold text-gray-700 mb-4">Filters</p>

//           {/* Category Filter */}
//           <div className="space-y-2">
//             <p className="text-lg font-semibold text-gray-600">Category</p>
//             <div className="grid grid-cols-2 gap-2">
//               {['Men', 'Women', 'Kids'].map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => toggleCategory({ target: { value: cat } })}
//                   className={`px-4 py-2 rounded-lg text-sm ${category.includes(cat) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Type Filter */}
//           <div className="space-y-2">
//             <p className="text-lg font-semibold text-gray-600">Type</p>
//             <div className="grid grid-cols-2 gap-2">
//               {['Formals', 'Casuals', 'Sneakers', 'Heels', 'Flats'].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => toggleSubCategory({ target: { value: type } })}
//                   className={`px-4 py-2 rounded-lg text-sm ${subCategory.includes(type) ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Brand Filter */}
//           <div className="space-y-2">
//             <p className="text-lg font-semibold text-gray-600">Brand</p>
//             <div className="grid grid-cols-2 gap-2">
//               {['Nike', 'Puma', 'Adidas'].map((brandName) => (
//                 <button
//                   key={brandName}
//                   onClick={() => toggleBrand({ target: { value: brandName } })}
//                   className={`px-4 py-2 rounded-lg text-sm ${brand.includes(brandName) ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
//                 >
//                   {brandName}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Sort By */}
//           <div className="mt-4">
//             <p className="text-lg font-semibold text-gray-600">Sort By</p>
//             <select
//               onChange={(e) => setSortType(e.target.value)}
//               className="border-2 border-gray-300 text-sm px-2 py-1 w-full rounded-md"
//             >
//               <option value="relavent">Relevant</option>
//               <option value="low-high">Low to High</option>
//               <option value="high-low">High to Low</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;







import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import BestSeller from '../components/BestSeller'; // Import the BestSeller component

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="pt-0">
      {/* Best Seller Section */}
      <div className="mb-10">
        <BestSeller /> {/* Add BestSeller component here */}
      </div>

      {/* Title Section */}
      <div className="mb-5 text-center">
        <Title text1={'ALL'} text2={'PRODUCTS'} />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-row w-full space-x-6">
        {/* Products Grid (Center) */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Filter Section (Right Side) */}
        <div className="w-1/4 bg-white p-6 rounded-lg shadow-lg hidden sm:block">
          <p className="text-2xl font-semibold text-gray-700 mb-4">Filters</p>

          {/* Category Filter */}
          <div className="space-y-2">
            <p className="text-lg font-semibold text-gray-600">Category</p>
            <div className="grid grid-cols-2 gap-2">
              {['Men', 'Women'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleCategory({ target: { value: cat } })}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    category.includes(cat) ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="space-y-2">
            <p className="text-lg font-semibold text-gray-600">Type</p>
            <div className="grid grid-cols-2 gap-2">
              {['Formals', 'Casuals', 'Sneakers', 'Heels', 'Flats'].map((type) => (
                <button
                  key={type}
                  onClick={() => toggleSubCategory({ target: { value: type } })}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    subCategory.includes(type) ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-600">Sort By</p>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2 py-1 w-full rounded-md"
            >
              <option value="relavent">Relevant</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
