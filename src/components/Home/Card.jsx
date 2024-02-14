import React from 'react'
import './Card.css'
import Rover from '../assets/rover_2.png'
function Card() {
  return (
    <div className='flex items-center justify-center p-10'>
    <div className='containerr  h-[400px] w-[full]  rounded-3xl ' >
      <div className='flex sm:flex-row items-center flex-col-reverse '>
        <div className=' mr-[16rem] ' id='ma'>
            <h1> <b className='text-orange-400 text-5xl  '>Unwrap the Joy: </b> <b className='text-white sm:text-5xl text-base'>Celebrate with </b></h1>
            <h1> <b className='text-white text-5xl '>Our festive Offers! </b></h1>
            <h1> <b className='text-5xl  ' >Flat 30% Off </b> <b className='text-white sm:text-5xl text-base'> on Selective Items</b></h1>
            <span className='text-white py-3 text-xs'>* Terms & Conditions Apply. </span>
        </div>
        <div>
            <img src={Rover} alt="" className=' xl:h-[300px] xl:w-[500px] sm:h-[248px] sm:w-[343px] h-[auto] w-[280px]' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
