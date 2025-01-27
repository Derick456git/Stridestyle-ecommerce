// import React from 'react'

// const Title = ({text1,text2}) => {
//   return (
//     <div className='inline-flex gap-2 items-center mb-3'>
//       <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
//       <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
//     </div>
//   )
// }

// export default Title



import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-4 items-center mb-5'>
      <p className='text-lg sm:text-xl font-bold text-gray-800 tracking-wide'>
        {text1}{' '}
        <span className='text-red-500 font-extrabold'>{text2}</span>
      </p>
      <div className=' h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl transform transition-all duration-300'></div>
    </div>
  );
};

export default Title;
