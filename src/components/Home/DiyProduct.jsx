import React, { useState } from "react";
import { IoIosHeart } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
const DiyProduct = () => {
  const navigate=useNavigate();
  const [isLoveClicked, setLoveClicked] = useState(false);

  const handleLoveClick = () => {
    console.log("hello")
    setLoveClicked(!isLoveClicked);
  };

  return (
    <div style={styles.card} onClick={()=>console.log("hiii")}>
     
      <div style={{ position: "relative" }}>
        <img
          src="https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU"
          alt="Product"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <div
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
        </div>
      </div>
     

      <span className="mt-3 ml-3 bg-gray-500 rounded-lg text-xs p-[2px] text-white justify-center flex w-[60px]">
        Home
      </span>
      <h3 style={styles.heading} className="pl-3 text-black font-semibold">
        2 Module 23A Touch Switchboard White/Black
      </h3>
      <div className="flex flex-row gap-2">
        <p style={styles.price} className="ml-3">
          Rs 6,999/-
        </p>{" "}
        <p style={styles.pricee} className="text-red-500">
          {" "}
          <s> Rs 10,999/-</s>
        </p>
      </div>
      <div style={styles.rating} className="ml-3">
        ⭐⭐⭐⭐⭐
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
