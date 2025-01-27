
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">All Products List</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">

        {/* ------- List Table Title ---------- */}
        <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] p-4 bg-gray-50 text-sm font-medium text-gray-600 border-b">
          <span className="text-left">Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* ------ Product List ------ */}
        <div>
          {
            list.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-4 border-b hover:bg-gray-50 transition ease-in-out duration-200">
                <img className="w-16 h-16 object-cover rounded-md" src={item.image[0]} alt={item.name} />
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className="text-gray-600">{item.category}</span>
                <span className="text-gray-800">{currency}{item.price}</span>
                <span 
                  onClick={() => removeProduct(item._id)} 
                  className="text-center text-red-600 cursor-pointer hover:text-red-800 transition-colors duration-300"
                >
                  <b>Remove</b>
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default List;
