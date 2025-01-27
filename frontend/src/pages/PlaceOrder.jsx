// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const PlaceOrder = () => {

//     const [method, setMethod] = useState('cod');
//     const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         street: '',
//         city: '',
//         state: '',
//         zipcode: '',
//         country: '',
//         phone: ''
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name
//         const value = event.target.value
//         setFormData(data => ({ ...data, [name]: value }))
//     }

//     const initPay = (order) => {
//         const options = {
//             key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//             amount: order.amount,
//             currency: order.currency,
//             name:'Order Payment',
//             description:'Order Payment',
//             order_id: order.id,
//             receipt: order.receipt,
//             handler: async (response) => {
//                 console.log(response)
//                 try {
                    
//                     const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay',response,{headers:{token}})
//                     if (data.success) {
//                         navigate('/orders')
//                         setCartItems({})
//                     }
//                 } catch (error) {
//                     console.log(error)
//                     toast.error(error)
//                 }
//             }
//         }
//         const rzp = new window.Razorpay(options)
//         rzp.open()
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault()
//         try {

//             let orderItems = []

//             for (const items in cartItems) {
//                 for (const item in cartItems[items]) {
//                     if (cartItems[items][item] > 0) {
//                         const itemInfo = structuredClone(products.find(product => product._id === items))
//                         if (itemInfo) {
//                             itemInfo.size = item
//                             itemInfo.quantity = cartItems[items][item]
//                             orderItems.push(itemInfo)
//                         }
//                     }
//                 }
//             }

//             let orderData = {
//                 address: formData,
//                 items: orderItems,
//                 amount: getCartAmount() + delivery_fee
//             }
            

//             switch (method) {

//                 // API Calls for COD
//                 case 'cod':
//                     const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
//                     if (response.data.success) {
//                         setCartItems({})
//                         navigate('/orders')
//                     } else {
//                         toast.error(response.data.message)
//                     }
//                     break;

//                 case 'stripe':
//                     const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
//                     if (responseStripe.data.success) {
//                         const {session_url} = responseStripe.data
//                         window.location.replace(session_url)
//                     } else {
//                         toast.error(responseStripe.data.message)
//                     }
//                     break;

//                 case 'razorpay':

//                     const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, {headers:{token}})
//                     if (responseRazorpay.data.success) {
//                         initPay(responseRazorpay.data.order)
//                     }

//                     break;

//                 default:
//                     break;
//             }


//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }


//     return (
//         <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//             {/* ------------- Left Side ---------------- */}
//             <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

//                 <div className='text-xl sm:text-2xl my-3'>
//                     <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//                 </div>
//                 <div className='flex gap-3'>
//                     <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
//                     <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
//                 </div>
//                 <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
//                 <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
//                 <div className='flex gap-3'>
//                     <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
//                     <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
//                 </div>
//                 <div className='flex gap-3'>
//                     <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
//                     <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
//                 </div>
//                 <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
//             </div>

//             {/* ------------- Right Side ------------------ */}
//             <div className='mt-8'>

//                 <div className='mt-8 min-w-80'>
//                     <CartTotal />
//                 </div>

//                 <div className='mt-12'>
//                     <Title text1={'PAYMENT'} text2={'METHOD'} />
//                     {/* --------------- Payment Method Selection ------------- */}
//                     <div className='flex gap-3 flex-col lg:flex-row'>
//                         <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//                             <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
//                         </div>
//                         <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//                             <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
//                         </div>
//                         <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//                             <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//                         </div>
//                     </div>

//                     <div className='w-full text-end mt-8'>
//                         <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default PlaceOrder









import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti'; // Import react-confetti
import { useWindowSize } from '@react-hook/window-size';

const showSuccessMessage = (setShowConfetti) => {
    setShowConfetti(true); // Trigger Confetti
    toast.success(
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Order placed successfully!</span>
        </div>,
        {
            position: "top-center",
            autoClose: 3000, // Closes after 3 seconds
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        }
    );
};

const PlaceOrder = () => {
    const [method, setMethod] = useState('');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    });
    const [showConfetti, setShowConfetti] = useState(false); // State to control confetti
    const [width, height] = useWindowSize(); // Get window size for confetti

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!method) {
            toast.error('Please select a payment method');
            return;
        }

        try {
            let orderItems = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find((product) => product._id === items));
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee,
            };

            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
                    if (response.data.success) {
                        setCartItems({}); // Clear the cart
                        showSuccessMessage(setShowConfetti); // Show success message and confetti
                        setTimeout(() => {
                            setShowConfetti(false); // Stop confetti after navigation
                            navigate('/orders');
                        }, 3000);
                    } else {
                        toast.error(response.data.message); // Show error if unsuccessful
                    }
                    break;

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
                    if (responseStripe.data.success) {
                        const { session_url } = responseStripe.data;
                        window.location.replace(session_url); // Redirect for Stripe payment
                    } else {
                        toast.error(responseStripe.data.message);
                    }
                    break;

                // case 'razorpay':
                //     const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
                //     if (responseRazorpay.data.success) {
                //         showSuccessMessage(setShowConfetti); // Show success message and confetti
                //         initPay(responseRazorpay.data.order); // Initialize Razorpay payment
                //     } else {
                //         toast.error(responseRazorpay.data.message);
                //     }
                //     break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <>
            {showConfetti && <Confetti width={width} height={height} />} {/* Render Confetti */}
            <form
                onSubmit={onSubmitHandler}
                className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
            >
                {/* ------------- Left Side ---------------- */}
                <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                    <div className="text-xl sm:text-2xl my-3">
                        <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                    </div>
                    <div className="flex gap-3">
                        <input
                            required
                            onChange={onChangeHandler}
                            name="firstName"
                            value={formData.firstName}
                            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                            type="text"
                            placeholder="First name"
                        />
                        <input
                            required
                            onChange={onChangeHandler}
                            name="lastName"
                            value={formData.lastName}
                            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                    <input
                        required
                        onChange={onChangeHandler}
                        name="email"
                        value={formData.email}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        required
                        onChange={onChangeHandler}
                        name="street"
                        value={formData.street}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="text"
                        placeholder="Street"
                    />
                    <div className="flex gap-3">
                        <input
                            required
                            onChange={onChangeHandler}
                            name="city"
                            value={formData.city}
                            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                            type="text"
                            placeholder="City"
                        />
                        <input
                            onChange={onChangeHandler}
                            name="state"
                            value={formData.state}
                            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                            type="text"
                            placeholder="State"
                        />
                    </div>
                    <div className="flex gap-3">
                        <input
                            required
                            onChange={onChangeHandler}
                            name="zipcode"
                            value={formData.zipcode}
                            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                            type="number"
                            placeholder="Zipcode"
                        />
                        <input
                            required
                            onChange={onChangeHandler}
                            name="country"
                            value={formData.country}
                            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                            type="text"
                            placeholder="Country"
                        />
                    </div>
                    <input
                        required
                        onChange={onChangeHandler}
                        name="phone"
                        value={formData.phone}
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="number"
                        placeholder="Phone"
                    />
                </div>

                {/* ------------- Right Side ------------------ */}
                <div className="mt-8">
                    <div className="mt-8 min-w-80">
                        <CartTotal />
                    </div>

                    <div className="mt-12">
                        <Title text1={'PAYMENT'} text2={'METHOD'} />
                        {/* Payment Method Dropdown */}
                        <select
                            required
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                            className="border border-gray-300 rounded py-2 px-4 w-full mt-4"
                        >
                            <option value="" disabled>
                                Select a payment method
                            </option>
                            <option value="stripe">Stripe</option>
                            {/* <option value="razorpay">Razorpay</option> */}
                            <option value="cod">Cash on Delivery</option>
                        </select>

                        <div className="w-full text-end mt-8">
                            <button
                                type="submit"
                                className="w-full py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
                             transform transition-all duration-300 ease-in-out shadow-xl hover:scale-105 hover:from-blue-600 hover:to-indigo-700 
                             focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-700 hover:shadow-2xl"
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default PlaceOrder;
