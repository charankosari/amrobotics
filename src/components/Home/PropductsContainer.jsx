import React from 'react';
import Product from './Product';
import './ProductContainer.css'
function Products() {
  return (

    <div className='px-6 '>
    
    <h1 className='ml-3 font-bold text-black xl:text-6xl text-2xl ' id='text'>Featured products</h1>
    <div className='overflow-auto' id='no-scrollbar'>
    <div className="carousel rounded-box ">
  <div className="carousel-item">
  <Product />
  </div> 
  <div className="carousel-item">
  <Product />
  </div> 
  <div className="carousel-item">
  <Product />
  </div> 
  <div className="carousel-item">
  <Product />
  </div> 
  <div className="carousel-item">
  <Product />
  </div> 
  <div className="carousel-item">
  <Product />
  </div> 
  <div className="carousel-item">
  <Product />
  </div>
  <div className="carousel-item">
  <Product />
  </div>
  <div className="carousel-item">
  <Product />
  </div>
  <div className="carousel-item">
  <Product />
  </div>
  <div className="carousel-item">
  <Product />
  </div>
  </div>
</div>
</div>
  );
}

export default Products;
