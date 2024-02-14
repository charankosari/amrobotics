import React from 'react';
import HomesAutoProducts from './HomesAutoProducts';
import './ProductContainer.css'
function Products() {
  return (

    <div className='px-6 '>
    
    <h1 className='ml-3 font-bold text-black lg:text-6xl text-2xl '>Home Automation</h1>
    <div className='overflow-auto' id='no-scrollbar'>
    <div className="carousel rounded-box">
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div>
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div>
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div> 
  <div className="carousel-item">
  <HomesAutoProducts />
  </div>
</div>
</div>
</div>
  );
}

export default Products;
