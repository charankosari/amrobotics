import React from 'react';

function Checkout() {
  return (
    <div className='pt-5 pl-10 pr-10 flex flex-row '>
      <div className="w-[50%] ">
      <div className='flex flex-row justify-between mb-5'>
      <h1 className='text-center text-xl font-bold '>Select your address for delivery</h1>
      <button className='bg-orange-500 text-white p-1.5 rounded-sm font-semibold text-sm'>Add Address</button>
      </div>
      <div className='flex felx-row gap-2 flex-wrap sm:flex-nowrap'>

        <div className='bg-gray-200 rounded-sm shadow-sm p-2'>
          <p className='text-sm'>India</p>
          <p className='text-sm'>Telangana</p>
          <p className='text-sm'>kompally</p>
          <p className='text-sm'>50001</p>
          <p className='text-sm'>kompally, near vivekananda statue,</p>     
        </div>

        <div className='bg-gray-200 rounded-sm shadow-sm p-2'>
          <p className='text-sm'>India</p>
          <p className='text-sm'>Telangana</p>
          <p className='text-sm'>kompally</p>
          <p className='text-sm'>50001</p>
          <p className='text-sm'>kompally, near vivekananda statue,</p>     
        </div>

        <div className='bg-gray-200 rounded-sm shadow-sm p-2'>
          <p className='text-sm'>India</p>
          <p className='text-sm'>Telangana</p>
          <p className='text-sm'>kompally</p>
          <p className='text-sm'>50001</p>
          <p className='text-sm'>kompally, near vivekananda statue,</p>     
        </div>

      </div>
      <div className='bg-gray-100 h-[60vh] mt-2 flex flex-col pl-10 pt-5'>
      <div className='flex flex-row items-center mb-2'>
        <p>Country : </p>
        <p> India</p>
      </div>
      <div className='flex flex-row items-center mb-2'>
        <p>State :</p>
        <p> Telangana</p>
      </div>
      <div className='flex flex-row items-center mb-2'>
        <p>City :</p>
        <p> Kompally</p>
      </div>
      <div className='flex flex-row items-center mb-2'>
        <p>Pin :</p>
        <p> 50001</p>
      </div>
      <div className='flex flex-row items-center mb-2'>
        <p>address</p>
        <p>kompally, near vivekananda statue,</p>
      </div>
      </div>

      </div>

      <div className='w-[50%] pl-10 pr-10 flex flex-col justify-center'>
        <h1 className='mb-3'>Select type of Payment</h1>
       <div className='flex gap-4 mb-4'>
       <div className='flex flex-row gap-2 items-center'>
         <input name="payment-type" type="radio"/>
         <label>Online</label>
       </div>
       <div className='flex flex-row gap-2 items-center'>
         <input name="payment-type" type="radio"/>
         <label>COD</label>
       </div>
       </div>

       <div className='flex flex-row gap-2 items-center justify-between'>
         <h1>Amount :</h1>
         <p>12,345/-</p>
       </div>
       <div className='flex flex-row gap-2 items-center justify-between'>
         <h1>Added Tax :</h1>
         <p>----</p>
       </div>
       <div className='flex flex-row gap-2 items-center justify-between'>
         <h1>Delivery Charge :</h1>
         <p>----</p>
       </div>
       <hr className='text-red-200 bg-gray-500 mt-5 mb-5'/>
       <div className='flex flex-row gap-2 items-center justify-between'>
         <h1>Total Amount :</h1>
         <p>12,345/-</p>
       </div>

      <div className='flex justify-end mt-5'>
       <button className='p-1.5 rounded-sm bg-orange-500 font-semibold text-sm text-white'>Proceed</button>
      </div>
      </div>
      
    </div>
  )
}

export default Checkout
