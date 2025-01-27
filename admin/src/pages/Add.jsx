// import React, { useState } from 'react'
// import {assets} from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Add = ({token}) => {

//   const [image1,setImage1] = useState(false)
//   const [image2,setImage2] = useState(false)
//   const [image3,setImage3] = useState(false)
//   const [image4,setImage4] = useState(false)

//    const [name, setName] = useState("");
//    const [description, setDescription] = useState("");
//    const [price, setPrice] = useState("");
//    const [category, setCategory] = useState("Men");
//    const [subCategory, setSubCategory] = useState("Formals");
//    const [bestseller, setBestseller] = useState(false);
//    const [sizes, setSizes] = useState([]);

//    const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
      
//       const formData = new FormData()

//       formData.append("name",name)
//       formData.append("description",description)
//       formData.append("price",price)
//       formData.append("category",category)
//       formData.append("subCategory",subCategory)
//       formData.append("bestseller",bestseller)
//       formData.append("sizes",JSON.stringify(sizes))

//       image1 && formData.append("image1",image1)
//       image2 && formData.append("image2",image2)
//       image3 && formData.append("image3",image3)
//       image4 && formData.append("image4",image4)

//       const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

//       if (response.data.success) {
//         toast.success(response.data.message)
//         setName('')
//         setDescription('')
//         setImage1(false)
//         setImage2(false)
//         setImage3(false)
//         setImage4(false)
//         setPrice('')
//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//    }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
//         <div>
//           <p className='mb-2'>Upload Image</p>

//           <div className='flex gap-2'>
//             <label htmlFor="image1">
//               <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//               <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
//             </label>
//             <label htmlFor="image2">
//               <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//               <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
//             </label>
//             <label htmlFor="image3">
//               <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//               <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
//             </label>
//             <label htmlFor="image4">
//               <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//               <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
//             </label>
//           </div>
//         </div>

//         <div className='w-full'>
//           <p className='mb-2'>Product name</p>
//           <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
//         </div>

//         <div className='w-full'>
//           <p className='mb-2'>Product description</p>
//           <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
//         </div>

//         <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

//             <div>
//               <p className='mb-2'>Product category</p>
//               <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
//                   <option value="Men">Men</option>
//                   <option value="Women">Women</option>
//                   {/* <option value="Kids">Kids</option> */}
//               </select>
//             </div>

//             <div>
//               <p className='mb-2'>Sub category</p>
//               <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
//                   <option value="Formals">Formals</option>
//                   <option value="Casuals">Casuals</option>
//                   <option value="Sneakers">Sneakers</option>
//                   <option value="Heels">Heels</option>
//                   <option value="Flats">Flats</option>
//               </select>
//             </div>

//             <div>
//               <p className='mb-2'>Product Price</p>
//               <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
//             </div>

//         </div>

//         <div>
//           <p className='mb-2'>Product Sizes</p>
//           <div className='flex gap-3'>

//             <div onClick={()=>setSizes(prev => prev.includes("UK 3") ? prev.filter( item => item !== "UK 3") : [...prev,"UK 3"])}>
//               <p className={`${sizes.includes("UK 3") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 3</p>
//             </div>
            
//             <div onClick={()=>setSizes(prev => prev.includes("UK 4") ? prev.filter( item => item !== "UK 4") : [...prev,"UK 4"])}>
//               <p className={`${sizes.includes("UK 4") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 4</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("UK 5") ? prev.filter( item => item !== "UK 5") : [...prev,"UK 5"])}>
//               <p className={`${sizes.includes("UK 5") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 5</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("UK 6") ? prev.filter( item => item !== "UK 6") : [...prev,"UK 6"])}>
//               <p className={`${sizes.includes("UK 6") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 6</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("UK 7") ? prev.filter( item => item !== "UK 7") : [...prev,"UK 7"])}>
//               <p className={`${sizes.includes("UK 7") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 7</p>
//               </div>

//               <div onClick={()=>setSizes(prev => prev.includes("UK 8") ? prev.filter( item => item !== "UK 8") : [...prev,"UK 8"])}>
//               <p className={`${sizes.includes("UK 8") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 8</p>
//               </div>

//               <div onClick={()=>setSizes(prev => prev.includes("UK 9") ? prev.filter( item => item !== "UK 9") : [...prev,"UK 9"])}>
//               <p className={`${sizes.includes("UK 9") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 9</p>
//               </div>

//               <div onClick={()=>setSizes(prev => prev.includes("UK 10") ? prev.filter( item => item !== "UK 10") : [...prev,"UK 10"])}>
//               <p className={`${sizes.includes("UK 10") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 10</p>
//               </div>

//               <div onClick={()=>setSizes(prev => prev.includes("UK 11") ? prev.filter( item => item !== "UK 11") : [...prev,"UK 11"])}>
//               <p className={`${sizes.includes("UK 11") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 11</p>
//               </div>

//               <div onClick={()=>setSizes(prev => prev.includes("UK 12") ? prev.filter( item => item !== "UK 12") : [...prev,"UK 12"])}>
//               <p className={`${sizes.includes("UK 12") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>UK 12</p>
//                </div>



//           </div>
//         </div>

//         <div className='flex gap-2 mt-2'>
//           <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
//           <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//         </div>

//         <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

//     </form>
//   )
// }

// export default Add











import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Formals');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="p-6 w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-gray-200"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800">Add New Product</h2>

      {/* Image Upload Section */}
      <div className="mb-6">
        <p className="mb-3 text-gray-600 font-semibold">Upload Images</p>
        <div className="flex gap-3">
          {[image1, image2, image3, image4].map((img, index) => (
            <label key={index} className="cursor-pointer">
              <img
                className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-md object-cover"
                src={img ? URL.createObjectURL(img) : assets.upload_area}
                alt=""
              />
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (index === 0) setImage1(e.target.files[0]);
                  if (index === 1) setImage2(e.target.files[0]);
                  if (index === 2) setImage3(e.target.files[0]);
                  if (index === 3) setImage4(e.target.files[0]);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter product name"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Product Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter product description"
          rows="4"
          required
        ></textarea>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Category */}
        <div>
          <label className="block text-gray-600 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>

        {/* Subcategory */}
        <div>
          <label className="block text-gray-600 mb-2">Sub Category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="Formals">Formals</option>
            <option value="Casuals">Casuals</option>
            <option value="Sneakers">Sneakers</option>
            <option value="Heels">Heels</option>
            <option value="Flats">Flats</option>
          </select>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter product price"
          required
        />
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <p className="mb-3 text-gray-600 font-semibold">Available Sizes</p>
        <div className="flex flex-wrap gap-3">
          {['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
                )
              }
              className={`px-3 py-1 rounded-md cursor-pointer ${
                sizes.includes(size) ? 'bg-blue-100 border border-blue-400' : 'bg-gray-200'
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller(!bestseller)}
          className="mr-2"
        />
        <label htmlFor="bestseller" className="text-gray-600">
          Add to Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
