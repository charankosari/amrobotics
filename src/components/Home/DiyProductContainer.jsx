import { React, useEffect, useState } from "react";
import DiyProduct from "./DiyProduct";
import "./ProductContainer.css";
function DiyProductProductContainer(props) {
  const { products } = props; 
  return (
    
    <div className="px-6 ">
   
     
      <h1 className="ml-3 font-bold text-black lg:text-6xl text-2xl " id="homw">
        DiyProduct Robokits
      </h1>
      <div className="overflow-scroll" id="no-scrollbar">
        <div className="carousel rounded-box">
            <div className="carousel-item">

            {products.map((each) => (
            <div key={each.id} className="carousel-item">
             <DiyProduct product={each}/>
            </div>
          ))}

            </div>
        </div>
      </div>
    </div>
  );
}

export default DiyProductProductContainer;
