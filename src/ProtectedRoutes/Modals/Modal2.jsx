
import React, { useState } from "react";
import { X } from "react-feather";
import axios from "axios";
import "./Modals.css";

function Modal2({ onClose,fetchProducts }) {
  const [step, setStep] = useState(1);
  const [productImages, setProductImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSku, setProductSku] = useState("");
  const [description, setDescription] = useState("");
  const [insideBoxCount, setInsideBoxCount] = useState(0);
  const [insideBoxItems, setInsideBoxItems] = useState([]);
  const [hasSpecifications, setHasSpecifications] = useState(false);
  const [specificationCount, setSpecificationCount] = useState(0);
  const [specifications, setSpecifications] = useState([]);
  const [stock, setStock] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);

  const handleNextStep = () => {
    uploadButton();
    
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleAddInsideBoxItem = () => {
    const newItems = Array.from({ length: insideBoxCount }, (_, index) => ({
      id: insideBoxItems.length + index + 1,
      value: ""
    }));
    setInsideBoxItems([...insideBoxItems, ...newItems]);
  };
  

  const handleInsideBoxItemChange = (index, value) => {
    const updatedItems = insideBoxItems.map((item) =>
      item.id === index ? { ...item, value } : item
    );
    setInsideBoxItems(updatedItems);
  };

  const handleAddSpecification = () => {
    const newSpecifications = Array.from({ length: specificationCount }, (_, index) => ({
      id: specifications.length + index + 1,
      value: ""
    }));
    setSpecifications([...specifications, ...newSpecifications]);
  };
  

  const handleSpecificationChange = (index, value) => {
    const updatedSpecifications = specifications.map((spec) =>
      spec.id === index ? { ...spec, value } : spec
    );
    setSpecifications(updatedSpecifications);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
  };
  const uploadButton = async () => {
    if (imageFiles.length > 0) {
      setLoading(true);
      const formData = new FormData();
      const uploadPromises = imageFiles.map(async (file) => {
        formData.append("file", file);
        formData.append("upload_preset", "u5nrykhh");
        formData.append("folder", "amrobotics");
        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/charankosari77/image/upload",
            formData
          );
          return response.data.secure_url;
        } catch (error) {
          console.error("Error uploading image:", error);
          return null;
        }
      });
  
      try {
        const uploadedUrls = await Promise.all(uploadPromises);
        const successfulUrls = uploadedUrls.filter((url) => url !== null);
        console.log(successfulUrls);
        setProductImages(successfulUrls);
        setLoading(false);
        setStep(step + 1); // Move to the next step
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    } else {
      alert("Please select at least one image before uploading.");
    }
  };
  
  const handleFormSubmit = async () => {
    // Form data to be sent to the server
    const formData = {
      name: productName,
      price: productPrice,
      category: productCategory,
      sku: productSku,
      images:productImages,
      description,
      insideBox: insideBoxItems.map((item) => item.value),
      specifications: hasSpecifications
        ? specifications.map((spec) => spec.value)
        : [],
      stock,
      // Add any additional data here
    };

    // Simulate form submission by logging formData
    console.log(formData);

    // Perform actual form submission to the server
    // Example:
    try {
      setLoading(true);
      const authToken = localStorage.getItem("jwtToken");
          const response=  await axios.post("http://localhost:5080/api/v1/product/new", formData, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            });
      console.log("Response:", response.data);
      setLoading(false);
      onClose(); // Close the modal after successful submission
      fetchProducts();
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center bg-gray-900 bg-opacity-50 h-full overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-md text-black w-[70%] h-[70%] overflow-auto">
        <button
          onClick={onClose}
          className="absolute mt-1 mr-2 text-red-500 focus:outline-none sm:ml-[65%] ml-[54%]"
        >
          <X />
        </button>
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        {step === 1 && (
          <form className="flex flex-col gap-2">
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter your product name"
              className="p-2 bg-white text-black border"
            />
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter product price"
              className="p-2 bg-white text-black border"
            />
            <input
              type="text"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              placeholder="Enter product category"
              className="p-2 bg-white text-black border"
            />
            <input
              type="text"
              value={productSku}
              onChange={(e) => setProductSku(e.target.value)}
              placeholder="Enter product SKU"
              className="p-2 bg-white text-black border"
            />
             <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Enter the stock"
              className="p-2 bg-white text-black border"
            />
             <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
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
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-blue-500 text-white px-3 py-1 rounded mt-4 w-[120px]"
            >
              Next
            </button>
          </form>
        )}
        {step === 2 && (
          <form className="flex flex-col gap-2">
           
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={insideBoxCount}
                onChange={(e) => setInsideBoxCount(e.target.value)}
                placeholder="Number of items in box"
                className="p-2 bg-white text-black border"
              />
              <button
                type="button"
                onClick={handleAddInsideBoxItem}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Add Items
              </button>
            </div>
            {insideBoxItems.map((item) => (
              <input
                key={item.id}
                type="text"
                value={item.value}
                onChange={(e) => handleInsideBoxItemChange(item.id, e.target.value)}
                placeholder={`Item ${item.id}`}
                className="p-2 bg-white text-black border"
              />
            ))}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasSpecifications}
                onChange={(e) => setHasSpecifications(e.target.checked)}
              />
              <label htmlFor="hasSpecifications">Add Specifications</label>
            </div>
            {hasSpecifications && (
              <>
               <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={specificationCount}
                  onChange={(e) => setSpecificationCount(e.target.value)}
                  placeholder="Number of specifications"
                  className="p-2 bg-white text-black border"
                />
                <button
                  type="button"
                  onClick={handleAddSpecification}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Add Specifications
                </button>
                </div>
                {specifications.map((spec) => (
                  <input
                    key={spec.id}
                    type="text"
                    value={spec.value}
                    onChange={(e) => handleSpecificationChange(spec.id, e.target.value)}
                    placeholder={`Specification ${spec.id}`}
                    className="p-2 bg-white text-black border"
                  />
                ))}
              </>
            )}
           
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={handlePreviousStep}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleFormSubmit}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Add Product
              </button>
            </div>
          </form>
        )}
        {loading && (
          <div className="loader-overlay">
            <div className="loader"></div>
            <div style={{ color: "white" }}>Uploading...</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal2;
