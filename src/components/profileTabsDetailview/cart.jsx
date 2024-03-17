import React, { useState, useEffect } from 'react';
import { getCartDetails,deleteCart } from '../../helper';
import { MdDeleteOutline } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import {ThreeDots} from 'react-loader-spinner'
import emptycart from '../assets/emptycart.png'
import {updateCart} from '../../helper'
import "./cart.css"


const handleIncrement = (itemId) => {
  // Increment item quantity logic
};

const handleDecrement = (itemId) => {
  // Decrement item quantity logic
};



// cart item component 
const CartItem=(props)=>{
  const {handleDelete,each,updateCartQuantity}=props
  const{name,images,quantity,price,id}=each
  return(
    <div className='flex flex-row bg-white rounded-md p-3 items-center justify-between text-black' >
    <img className='w-28 rounded-md mr-6' src={images[0]?.url} />
    <div>
       <h1 className='text-base font-bold'>{name}</h1>
       <p className='text-base font-bold'>{price}</p>
    </div>
    <div className='flex gap-5 items-center'>
      <button onClick={()=>{updateCartQuantity({id,operation:"inc"})}}>
      <FiPlusCircle className="text-2xl"/>
      </button>
      <p className='text-2xl'>{quantity}</p>
      <button onClick={()=>{updateCartQuantity({id,operation:"dec"})}}>
        <LuMinusCircle className="text-2xl"/>
      </button>
    </div>
    <MdDeleteOutline onClick={()=>handleDelete(id)} className=' deleteall-icon text-2xl' />

   </div>
  )
}

const Cart = () => {
  const [CartDetails, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await getCartDetails();
    console.log(response);
    if (response.status == 200) {
      setDetails(response.data.data);
      setLoading(false);
    }
  };

  // delete cart item______
  const handleDelete = async(id) => {
    const response = await deleteCart(id)
    const newDetails=CartDetails.filter((each)=>each.id!=id)
    // const newDetails=id.map((item)=>details.filter((each)=>each.id!=item))
    setDetails(newDetails)
 };

// increment the quantity of the cart item
const updateCartQuantity = async(a) => {
    const response=await updateCart(a)
    console.log(response)
};


 
  const loadingView = () => {
  
      return (
        <div className='w-full h-full flex flex-row justify-center items-center'>
        <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ff9f1c"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
        </div>
      )

  }

  const emptyCartView=()=>{
    return(
      <div className='flex flex-col items-center'>
        <img  src={emptycart}/>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl font-bold'>Your Cart is Empty</h1>
          <p className='text-md w-50'>Looks like you have not  added any anything to the cart Go ahead & Explore top Categories</p>
        </div>
      </div>
    )
  }

  const successView=()=>{
   return(
      <div className='px-10 py-5 flex flex-col h-full'>
       <div className='flex flex-row justify-between '>
       <h1 className='text-black font-black text-2xl'>Cart Details</h1>
      {
           CartDetails.length<=0?<></>: <button  className='flex flex-row items-center gap-1 bg-[#434142] px-2 py-1.5 rounded-md'> <MdDeleteOutline className=' deleteall-icon text-2xl' /><span className='text-lg text-white'>Delete All</span> </button>
      }
      
      
       </div>

       {/* cart items part */}
      <div className='cart-items-container mt-4 flex flex-col gap-5 h-70 overflow-scroll'>
        {
          // console.log(details.lenght)
          CartDetails.length<=0? emptyCartView():CartDetails.map((each)=><CartItem each={each} key={each.id} handleDelete={handleDelete} updateCartQuantity={updateCartQuantity}/>)
          
        }

      </div>

      {/* chackout part */}
     {
      CartDetails.length<=0?<></>: <div className='self-end mt-auto'>
      <h1 className='font-bold text-xl'>{`Sub Total : ₹ ${ CartDetails.reduce((accumulator, currentValue) => accumulator + (currentValue.price*currentValue.quantity), 0)}/-`}</h1>
      <button className=' bg-[#ff9f1c] px-2 py-1.5 rounded-md  font-bold'>Check Out</button>
      </div>

     }
    </div>
   )
  }


 
  if (loading) {
    return loadingView();
  } else {
    return successView();
  }
};

export default Cart;
