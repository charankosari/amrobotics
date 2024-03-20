import React, { useState, useEffect } from 'react';
import { getWishlist,sendToWishlistApi,deleteAllWishlist} from '../../helper';
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import {ThreeDots} from 'react-loader-spinner'
import emptycart from '../assets/emptycart.png'
import "./cart.css"


const handleIncrement = (itemId) => {
  // Increment item quantity logic
};

const handleDecrement = (itemId) => {
  // Decrement item quantity logic
};





// cart item component 
const WishlistItem=(props)=>{
  const {handleDelete,each}=props
  const{name,images,stock,price,id}=each
  const navigate=useNavigate()

  return(
    <div onClick={
      ()=>{
          navigate(`/marketplace/${id}`)
      }
  } className='flex flex-row bg-white rounded-md p-3 items-center justify-between' >
    <img className='w-28 rounded-md mr-6' src={images[0]?.url} />
    <div>
       <h1 className='text-base font-bold'>{name}</h1>
       <p className='text-base font-bold'>{price}</p>
    </div>
    <div className='flex gap-5 items-center'>
    
      <p className='text-2xl'>stock <span className='text-xl font-bold'>({stock})</span></p>
 
    </div>
    <MdDeleteOutline onClick={()=>handleDelete(id)} className=' deleteall-icon text-2xl' />

   </div>
  )
}

const Wishlist = () => {
  const [wishDetails, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails();
    
  }, []);

  const getDetails = async () => {
    const response = await getWishlist();
     console.log(response)
    if (response.status == 200) {
      setLoading(false);
      setDetails(response.data.data);
    }
  };
 
  // delete cart item______
  const handleDelete = async(id) => {
    const response = await sendToWishlistApi(id)
    const newDetails=wishDetails.filter((each)=>each.id!=id)
    // const newDetails=id.map((item)=>details.filter((each)=>each.id!=item))
   setDetails(newDetails)

 };

 const deleteWishlist=async()=>{
  const response=await deleteAllWishlist()
  if(response.status==200)
  setDetails([])
  // console.log(response)
 }
 

 
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

  const EmptyWishlistView=()=>{
    return(
      <div className='flex flex-col items-center'>
        <img  src={emptycart}/>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl font-bold'>Your Wishlist is Empty</h1>
          <p className='text-md w-50'>Looks like you have not  added any anything to the Wishlist Go ahead & Explore top Categories</p>
        </div>
      </div>
    )
  }

  const successView=()=>{
   return(
      <div className='px-10 py-5 flex flex-col h-full'>
       <div className='flex flex-row justify-between '>
       <h1 className='text-black font-black text-2xl'>Wishlist Details</h1>
      {
           wishDetails.length<=0?<></>: <button onClick={deleteWishlist} className='flex flex-row items-center gap-1 bg-[#434142] px-2 py-1.5 rounded-md'> <MdDeleteOutline className=' deleteall-icon text-2xl' /><span className='text-lg text-white'>Delete All</span> </button>
      }
      
      
       </div>

       {/* cart items part */}
      <div className='cart-items-container mt-4 flex flex-col gap-5 h-70 overflow-scroll'>
        {
         
       wishDetails.length<=0?EmptyWishlistView():wishDetails.map((each)=><WishlistItem each={each} key={each.id} handleDelete={handleDelete}/>)
          
        }

      </div>

    </div>
   )
  }


 
  if (loading) {
    return loadingView();
  } else {
    return successView();
  }
};

export default Wishlist;
