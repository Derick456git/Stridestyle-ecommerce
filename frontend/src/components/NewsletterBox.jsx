// import React from 'react'

// const NewsletterBox = () => {

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//     }

//   return (
//     <div className=' text-center'>
//       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
//       <p className='text-gray-400 mt-3'>
//       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       </p>
//       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
//         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
//         <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
//       </form>
//     </div>
//   )
// }

// export default NewsletterBox


import React from 'react';

const NewsletterBox = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-center p-10 rounded-lg shadow-lg">
      <p className="text-4xl font-bold text-white">Special Offer Just for You!</p>
      <p className="text-white text-opacity-90 mt-4 text-lg">
        Unlock exclusive deals and stay ahead with our latest collections.
      </p>
      <button
        className="mt-6 bg-white text-blue-500 font-semibold text-sm px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
      >
        Explore Now
      </button>
    </div>
  );
};

export default NewsletterBox;
