import React, { useState } from "react";
import { IoIosHeart } from 'react-icons/io';

const Product = (props) => {
  const {product}=props
  console.log(product)
  const {
    name,
    description,
    price,
    images,
    category,
    rating,
    stock,
} = product;
  const [isLoveClicked, setLoveClicked] = useState(false);

  const handleLoveClick = () => {
    setLoveClicked(!isLoveClicked);
  };

  return (
    <div style={styles.card}>
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
          onClick={handleLoveClick}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          <IoIosHeart color={isLoveClicked ? "red" : "gray"}  size={24}  className="bg-white rounded-full p-[3px]"/> 
        </button>
      </div>

      <span className="mt-3 ml-3 bg-gray-500 rounded-lg text-xs p-[2px] text-white justify-center flex w-[60px]">
        {category}
      </span>
      <h3 style={styles.heading} className="pl-3 text-black font-semibold text-left">
        {name}
      </h3>
      <div className="flex flex-row gap-2">
        <p style={styles.price} className="ml-3">
          Rs {price}
        </p>{" "}
        <p style={styles.pricee} className="text-red-500">
          {" "}
          <s> Rs 10,999/-</s>
        </p>
      </div>
      <div style={styles.rating} className="ml-3">
      {"⭐".repeat(rating)}
      </div>
      <div style={styles.buttons}>
        <button style={styles.buttonn} className="bg-[#FF9F1C]">Buy Now</button>
        <button style={styles.button}>Add cart</button>
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

    textAlign:'left'
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
    borderRadius: "10px",
    color: "white",
  },
};

export default Product;
