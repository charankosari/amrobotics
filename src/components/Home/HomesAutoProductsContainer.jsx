import React from "react";
import { useState, useEffect } from "react";
import HomesAutoProducts from "./HomesAutoProducts";
import "./ProductContainer.css";
function Products(props) {
  const { products } = props;
  console.log(products);

  return (
    <div className="px-6 ">
      <h1 className="ml-3 font-bold text-black lg:text-6xl text-2xl " id="homw">
        Home Automation
      </h1>
      <div className="overflow-auto" id="no-scrollbar">
        <div className="carousel rounded-box">
          {products.map((each) => (
            <div key={each.id} className="carousel-item">
              <HomesAutoProducts product={each} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
