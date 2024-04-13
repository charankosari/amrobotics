import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import axios from 'axios';

function Modal({ onClose, product }) {
    // Define state variables for form data and image files
    const [formData, setFormData] = useState({
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        stock: product.stock,
        insideBox: product.insideBox,
        images: product.images || [],
    });
    const [imageFiles, setImageFiles] = useState([]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    // Handle image file changes
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles(files);
    };

    // Upload images and update image URLs in formData
    const uploadImages = async () => {
        if (imageFiles.length > 0) {
            const formData = new FormData();
            const uploadPromises = imageFiles.map((file) => {
                formData.append('file', file);
                formData.append('upload_preset', 'u5nrykhh');
                formData.append('folder', 'amrobotics');
                return axios.post('https://api.cloudinary.com/v1_1/charankosari77/image/upload', formData)
                    .then((response) => response.data.secure_url)
                    .catch((error) => {
                        console.error('Error uploading image:', error);
                        return null;
                    });
            });

            try {
                const uploadedUrls = await Promise.all(uploadPromises);
                const successfulUrls = uploadedUrls.filter((url) => url !== null);

                // Update formData images with the new uploaded URLs
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    images: [...prevFormData.images, ...successfulUrls],
                }));
                console.log('Uploaded image URLs:', successfulUrls);
            } catch (error) {
                console.error('Error uploading images:', error);
            }
        }
    };

    // Handle form submission (update)
    const handleUpdate = async () => {
        // Upload images if any files were uploaded and update formData.images
        if (imageFiles.length > 0) {
            await uploadImages();
        }

        // Log the updated JSON object
        console.log('Updated data:', formData);

        try {
            const authToken = localStorage.getItem('jwtToken');
            // Send a PUT request to update the product
            const response = await axios.put(`http://localhost:5080/api/v1/product/${product._id}`, formData, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                alert('Product updated successfully');
            } else {
                alert(`Failed to update product: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('An error occurred while updating the product');
        }

        // Close the modal after updating the product
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-center bg-gray-900 bg-opacity-50 h-full">
            <div className="bg-white p-6 rounded-lg shadow-md text-black w-[50%] h-[60%]">
                <button onClick={onClose} className="absolute mt-1 mr-2 text-red-500 focus:outline-none sm:ml-[45%] ml-[34%]">
                    <X />
                </button>
                <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Product name"
                        className="p-2 bg-white text-black border"
                    />
                    <input
                        type="number"
                        id="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Product price"
                        className="p-2 bg-white text-black border"
                    />
                    <input
                        type="text"
                        id="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        placeholder="Product category"
                        className="p-2 bg-white text-black border"
                    />
                    <input
                        type="text"
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Product description"
                        className="p-2 bg-white text-black border"
                    />
                    <input
                        type="number"
                        id="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        placeholder="Product stock"
                        className="p-2 bg-white text-black border"
                    />
                    <input
                        type="text"
                        id="insideBox"
                        value={formData.insideBox}
                        onChange={handleInputChange}
                        placeholder="Inside box"
                        className="p-2 bg-white text-black border"
                    />
                    <label htmlFor="images">Update picture</label>
                    <input
                        className="p-2 bg-white text-black border"
                        type="file"
                        id="images"
                        multiple
                        accept=".jpg, .jpeg, .png"
                        onChange={handleImageChange}
                    />
                </div>
                <button onClick={handleUpdate} className="bg-gray-500 text-white px-3 py-1 rounded mt-4">
                    Update
                </button>
            </div>
        </div>
    );
}

export default Modal;
