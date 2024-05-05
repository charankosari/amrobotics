import React, { useState,useEffect } from "react";
import { IoIosHeart } from 'react-icons/io';
import { useNavigate } from "react-router-dom";


const DiyProduct = (props) => {
  const navigate=useNavigate()
  const {product}=props
  const {
    name,
    description,
    price,
    images,
    category,
    rating,
    stock,
    _id
} = product;

  

  return (
    <div 
    onClick={() => {
      navigate(`/marketplace/${_id}`);
    }}
    style={styles.card}>
     
      <div style={{ position: "relative" }}>
        <img
          src={images[0]}
          alt="Product"
          style={{
            width: "300px",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
        </div>
      </div>
     

      <span className="mt-3 ml-3 bg-gray-500 rounded-lg text-xs p-[2px] text-white justify-center flex w-[60px]">
       {category}
      </span>
      <h3
  style={{
    ...styles.heading,
    whiteSpace: 'nowrap', // Prevent line breaks
    overflow: 'hidden',   // Hide overflow text
    textOverflow: 'ellipsis' // Add ellipsis for overflow
  }}
  className="pl-3 text-black font-semibold text-left "
>
  {name} 
</h3>
      <div className="flex flex-row gap-2">
        <p style={styles.price} className="ml-3">
          Rs {price}
        </p>{" "}
        <p style={styles.pricee} className="text-red-500">
            {" "}
            <s> {(parseInt((price) * 0.15))+price}</s>
          </p>
      </div>
      <div style={styles.rating} className="ml-3 text-black">
  {rating > 0 ? "⭐".repeat(rating) : "No reviews yet"}
</div>
      <div style={styles.buttons}>
        <button style={styles.buttonn}>Buy Now</button>
        <button style={styles.button}>Add cart</button>
      </div>
     
    </div>
  );
};

const styles = {
  card: {
    width: "100%",
    height: "auto",
    maxWidth: "300px",
    margin: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
 
  },

  heading: {
    fontSize: "18px",
    margin: "10px 0",
    textAlign:"left"
  },
  price: {
    fontSize: "16px",
    color: "green",
  },
  pricee: {
    fontSize: "16px",
  },
  rating: {
    fontSize: "20px",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    padding: "10px",
  },
  button: {
    padding: "8px 8px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "gray",
    borderRadius: "10px",
    color: "white",
  },
  buttonn: {
    padding: "8px 8px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "orange",
    borderRadius: "10px",
    color: "white",
  },
};

export default DiyProduct;
