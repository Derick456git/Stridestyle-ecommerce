// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'
// import { assets } from '../assets/assets'

// const Orders = ({ token }) => {

//   const [orders, setOrders] = useState([])

//   const fetchAllOrders = async () => {

//     if (!token) {
//       return null;
//     }

//     try {

//       const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
//       if (response.data.success) {
//         setOrders(response.data.orders.reverse())
//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       toast.error(error.message)
//     }


//   }

//   const statusHandler = async ( event, orderId ) => {
//     try {
//       const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value}, { headers: {token}})
//       if (response.data.success) {
//         await fetchAllOrders()
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(response.data.message)
//     }
//   }

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token])

//   return (
//     <div>
//       <h3>Order Page</h3>
//       <div>
//         {
//           orders.map((order, index) => (
//             <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
//               <img className='w-12' src={assets.parcel_icon} alt="" />
//               <div>
//                 <div>
//                   {order.items.map((item, index) => {
//                     if (index === order.items.length - 1) {
//                       return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span> {item.size} </span> </p>
//                     }
//                     else {
//                       return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span> {item.size} </span> ,</p>
//                     }
//                   })}
//                 </div>
//                 <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
//                 <div>
//                   <p>{order.address.street + ","}</p>
//                   <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
//                 </div>
//                 <p>{order.address.phone}</p>
//               </div>
//               <div>
//                 <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
//                 <p className='mt-3'>Method : {order.paymentMethod}</p>
//                 <p>Payment : { order.payment ? 'Done' : 'Pending' }</p>
//                 <p>Date : {new Date(order.date).toLocaleDateString()}</p>
//               </div>
//               <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
//               <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='p-2 font-semibold'>
//                 <option value="Order Placed">Order Placed</option>
//                 <option value="Packing">Packing</option>
//                 <option value="Shipped">Shipped</option>
//                 <option value="Out for delivery">Out for delivery</option>
//                 <option value="Delivered">Delivered</option>
//               </select>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders










import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3 className="text-3xl font-semibold text-gray-800 mb-6">Order Management</h3>
      <div className="space-y-4">

        {
          orders.map((order, index) => (
            <div key={index} className="flex flex-col sm:flex-row lg:flex-row gap-4 items-start border border-gray-200 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition ease-in-out duration-300">
              <div className="flex-shrink-0">
                <img className="w-16 h-16 object-cover rounded-md" src={assets.parcel_icon} alt="Parcel Icon" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-lg text-gray-800">{order.items.map((item, idx) => (
                  <span key={idx}>{item.name} x {item.quantity} <span className="text-gray-500">({item.size})</span>{idx < order.items.length - 1 ? ', ' : ''}</span>
                ))}</div>
                <p className="mt-3 text-gray-600">{order.address.firstName} {order.address.lastName}</p>
                <div>
                  <p className="text-sm text-gray-500">{order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                  <p className="text-sm text-gray-500">Phone: {order.address.phone}</p>
                </div>
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/4 text-right sm:text-center">
                <p className="text-sm text-gray-600">Items: {order.items.length}</p>
                <p className="mt-3 text-gray-600">Method: {order.paymentMethod}</p>
                <p className="text-sm text-gray-600">Payment: {order.payment ? 'Done' : 'Pending'}</p>
                <p className="mt-2 text-sm text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
                <p className="text-lg font-semibold text-gray-900 mt-3">{currency}{order.amount}</p>
              </div>
              <div className="w-full sm:w-1/4 mt-4 sm:mt-0">
                <select 
                  onChange={(event) => statusHandler(event, order._id)} 
                  value={order.status} 
                  className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Orders;
