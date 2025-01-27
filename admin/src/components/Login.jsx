// import axios from 'axios'
// import React, { useState } from 'react'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Login = ({setToken}) => {

//     const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')

//     const onSubmitHandler = async (e) => {
//         try {
//             e.preventDefault();
//             const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
//             if (response.data.success) {
//                 setToken(response.data.token)
//             } else {
//                 toast.error(response.data.message)
//             }
             
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message)
//         }
//     }

//   return (
//     <div className='min-h-screen flex items-center justify-center w-full'>
//         <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
//             <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
//             <form onSubmit={onSubmitHandler}>
//                 <div className='mb-3 min-w-72'>
//                     <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
//                     <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
//                 </div>
//                 <div className='mb-3 min-w-72'>
//                     <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
//                     <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
//                 </div>
//                 <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type="submit"> Login </button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login








import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-blue-200 to-blue-400">
            <div className="bg-white shadow-xl rounded-lg px-8 py-6 max-w-md transition-all transform scale-95 opacity-0 animate-fadeIn">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                            type="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        className="w-full py-3 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
