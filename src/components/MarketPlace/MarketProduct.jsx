/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const MarketProduct = (props) => {
  //  eslint-disable-next-line no-unused-vars
  const { _id, name, images, category, rating, price } = props.each;
  console.log(props.each._id);
  const navigate = useNavigate();
  const [isLoveClicked, setLoveClicked] = useState(false);

  const handleLoveClick = () => {
    setLoveClicked(!isLoveClicked);
  };

  return (
    <div
      onClick={() => {
        navigate(`/marketplace/${_id}`);
        window.location.reload();
      }}
      className="w-[320px] "
    >
      <div style={styles.card}>
        <button>
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
          </div>

          <span className="mt-3 ml-3 bg-gray-500 rounded-lg text-xs p-[2px] text-white justify-center flex w-[30%]">
            {category}
          </span>
{/* <<<<<<< HEAD
          <h
            style={styles.heading}
            className="pl-3 text-black font-semibold text-left text-ellipsis" 
          >
            {name}
          </h>
======= */}
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


{/* >>>>>>> 6bb31d255f59b1e4f51b9c1ff0d1ac9b1d8ee895 */}
        </button>
        <div className="flex flex-row gap-2">
          <p style={styles.price} className="ml-3">
            {price}
          </p>{" "}
          <p style={styles.pricee} className="text-red-500">
            {" "}
            <s> {(parseInt((price) * 0.15))+price}</s>
          </p>
        </div>
        <div style={styles.rating} className="ml-3">
  {rating > 0 ? "⭐".repeat(rating) : "No reviews yet"}
</div>

        <div style={styles.buttons}>
          <button style={styles.buttonn}>Buy Now</button>
          <button style={styles.button}>Add Cart</button>
        </div>
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
    color:'black'
  },
  buttons: {
    display: "flex",
    gap: "15px",
    padding: "10px",
  },

  buttonss: {
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

export default MarketProduct;
