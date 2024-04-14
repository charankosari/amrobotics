import React from 'react';
import Product from './Product';
import './ProductContainer.css'
function Products(props) {
  const { products } = props;
  const limitedProducts = products.length > 15 ? products.slice(0, 15) : products;

  return (

    <div className='px-6 '>
    
    <h1 className='ml-3 font-bold text-black xl:text-6xl text-2xl ' id='text'>Featured products</h1>
    <div className='overflow-auto' id='no-scrollbar'>
    <div className="carousel rounded-box ">
    {limitedProducts.map((each) => (
            <div key={each.id} className="carousel-item">
              <Product product={each} />
            </div>
          ))}
  </div>
</div>
</div>
  );
}

export default Products;
