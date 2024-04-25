import React, { useState } from "react";
import { X } from "react-feather";
import axios from "axios";
import "./Modals.css";

function Modal2({ onClose }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [stock, setStock] = useState();
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [sku, setProductSku] = useState("");
  const [insideBox, setInsideBox] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  // const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
  };

  // Uploading multiple image files
  const uploadButton = async () => {
    if (imageFiles.length > 0) {
      setLoading(true);
      const formData = new FormData();
      const uploadPromises = imageFiles.map((file) => {
        formData.append("file", file);
        formData.append("upload_preset", "u5nrykhh");
        formData.append("folder", "amrobotics");
        return axios
          .post(
            "https://api.cloudinary.com/v1_1/charankosari77/image/upload",
            formData
          )
          .then((response) => response.data.secure_url)
          .catch((error) => {
            console.error("Error uploading image:", error);
            return null;
          });
      });

      try {
        const uploadedUrls = await Promise.all(uploadPromises);
        const successfulUrls = uploadedUrls.filter((url) => url !== null);
        // setImageUrls(successfulUrls);
        console.log(successfulUrls);
        // If image upload is successful, proceed with form submission
        handleSubmitForm(successfulUrls);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    } else {
      alert("Please select at least one image before uploading.");
    }
  };

  // Handle form submission
  const handleSubmitForm = async (imageUrls) => {
    const formData = {
      name: productName,
      price: productPrice,
      category: productCategory,
      description: productDescription,
      insideBox,
      sku,
      images: imageUrls,
      stock,
    };
    console.log(formData);

    // Send formData to parent component or backend API
    // You can either pass the data back using the onClose callback function or make an API request directly here

    // Example of sending formData to the server:
    try {
      const authToken = localStorage.getItem("jwtToken");
      await axios.post("http://localhost:5080/api/v1/product/new", formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      alert("added a product");
      
      

      // If the request is successful, close the modal and refresh the parent component's product list
     
      onClose(); // Close the modal after adding the product
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center bg-gray-900 bg-opacity-50 h-full">
      <div className="bg-white p-6 rounded-lg shadow-md text-black w-[70%] h-[70%]">
        <button
          onClick={onClose}
          className="absolute mt-1 mr-2 text-red-500 focus:outline-none sm:ml-[65%] ml-[54%]"
        >
          <X />
        </button>
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter your product name"
            className="p-2 bg-white text-black border"
          />
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter product price"
            className="p-2 bg-white text-black border"
          />
          <input
            type="text"
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            placeholder="Enter product category"
            className="p-2 bg-white text-black border"
          />
          <input
            type="text"
            id="productSku"
            value={sku}
            onChange={(e) => setProductSku(e.target.value)}
            placeholder="Enter product SKU"
            className="p-2 bg-white text-black border"
          />
          <input
            type="text"
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Enter product description"
            className="p-2 bg-white text-black border"
          />
          <input
            type="text"
            id="insideBox"
            value={insideBox}
            onChange={(e) => setInsideBox(e.target.value)}
            placeholder="Enter inside box"
            className="p-2 bg-white text-black border"
          />
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter the stock"
            className="p-2 bg-white text-black border"
          />
          <input
            className="p-2 bg-white text-black border"
            type="file"
            id="images"
            multiple
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
          />
          <label htmlFor="images">Upload images</label>
        </form>
        {loading && (
          <div className="loader-overlay">
            <div className="loader"></div>
            <div style={{ color: "white" }}>Uploading...</div>
          </div>
        )}{" "}
        {/* Loading spinner */}
        <button
          onClick={uploadButton}
          className="bg-blue-500 text-white px-3 py-1 rounded mt-4"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Modal2;
