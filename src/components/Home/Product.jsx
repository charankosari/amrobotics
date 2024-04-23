import React, { useState } from "react";
import { IoIosHeart } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate=useNavigate()
  const {product}=props
  console.log(product,"this is home product")
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
      <button>
      <div style={{ position: "relative" }}>
        <img
        src={images[0]}
          alt="Product"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <button
         
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
        </button>
      </div>

      <span className="mt-3 ml-3 bg-gray-500 rounded-lg text-xs p-[2px] text-white justify-center flex w-[60px]">
        {category}
      </span>
      <h3 style={styles.heading} className="pl-3 text-black font-semibold flex flex-row">
        {name}
      </h3>
      <div className="flex flex-col ml-3">
      <div className="flex flex-row gap-2 ">
        <p style={styles.price} className="">
          Rs {price}
        </p>{" "}
        <p style={styles.pricee} className="text-red-500">
          {" "}
          <s> Rs 10,999/-</s>
        </p>
        </div>
        <div>
        <div style={styles.rating} className="flex flex-row ">
        {"⭐".repeat(rating)}
      </div>
      </div>
      </div>
     
      <div style={styles.buttons}>
        <button style={styles.buttonn}>Buy Now</button>
        <button style={styles.button}>Add to cart</button>
      </div>
      </button>
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
    textAlign: "left"
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
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "gray",
    borderRadius: "10px",
    color: "white",
  },
  buttonn: {
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "orange",
    borderRadius: "10px",
    color: "white",
  },
};

export default Product;
