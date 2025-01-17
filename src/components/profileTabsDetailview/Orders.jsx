import React, { useEffect ,useState} from 'react'
import {getMyOrders} from "../../helper"
import {ThreeDots} from 'react-loader-spinner'
import emptyorder from "../assets/emptyorder.png"
import OrderCard from './orderCard'


const Orders = () => {
  const [OrderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getDetails();
  }, []);


// getting cart details________________________________________
  const getDetails = async () => {
    const response = await getMyOrders();
    console.log(response.data.orders)
    if (response.status == 200){
      setOrderDetails(response.data.orders);
      console.log(OrderDetails)
      setLoading(false);
    }
  };

  const emptyOrderView=()=>{
    return(
      <div className='flex flex-col items-center'>
        <img  src={emptycart}/>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl font-bold'>No Orders Found!</h1>
          <p className='text-md w-50'>Looks like you have not ordered any anything  Go ahead & Explore top Categories</p>
        </div>
      </div>
    )
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

const emptyOrdersView=()=>{
  return(
    <div className='flex flex-col items-center'>
      <img className='w-[60%]' src={emptyorder}/>
      <div className='flex flex-col items-center'>
        <h1 className='text-xl font-bold'>No orders place yet....</h1>
        <p className='text-md w-50'>Looks like you have not placed any orders yet Go ahead & Explore top Categories</p>
      </div>
    </div>
  )
}

const successView=()=>{
  return (
    <div className='p-3 w-auto'>
      
      <h1 className='text-xl font-bold mb-4'>MyOrders</h1>

      <div className='flex flex-col items-center h-[60vh] overflow-scroll'>

      {
        OrderDetails.length==0?emptyOrdersView():    

        OrderDetails.map((each)=><OrderCard key={each._id} each={each}/>)
        
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

export default Orders
