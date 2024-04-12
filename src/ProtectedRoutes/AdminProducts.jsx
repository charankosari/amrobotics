import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { X } from 'react-feather';
import "./AdminStyles.css"
const AdminProducts = () => {
  
  const [products, setProducts] = useState([]);
  //fetching all products
  const fetchProducts = async () => {
    try {
      const authToken = localStorage.getItem('jwtToken'); // Replace with your actual authentication token
      const response = await axios.post('http://localhost:5080/api/v1/allproducts', {
        headers: {
        
          Authorization: `Bearer ${authToken}`  
        }
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  //deleting specific product
  
  const handleDeleteProduct = async (productId) => {
    
    try {
      const authToken = localStorage.getItem('jwtToken');
      const response = await axios.delete(`http://localhost:5080/api/v1/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
  
      if (response.status === 200 ) {
        alert('Product deleted successfully');
        fetchProducts();
      } else {
        alert(`Failed to delete Product: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error deleting Product:', error);
      alert('An error occurred while deleting the Product');
    }
  };

 

  // Form state
  const [formData, setFormData] = useState({ id: '', name: '', price: '' });
  const [editMode, setEditMode] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = () => {
    const newProduct = { ...formData, id: Date.now() };
    setProducts([...products, newProduct]);
    setFormData({ id: '', name: '', price: '' });
  };


  const handleEditProduct = (productId) => {
    const productToEdit = products.find(product => product.id === productId);
    setFormData(productToEdit);
    setEditMode(true);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditUser = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map(product =>
      product.id === formData.id ? formData : product
    );
    setProducts(updatedProducts);
    setFormData({ id: '', name: '', price: '' });
    setEditMode(false);
  };
  const Modal = ({ onClose, product }) => {
    return (  
      <div className="fixed top-0 left-0 w-full  flex items-center justify-center bg-gray-900 bg-opacity-50 h-full" >
        <div className="bg-white p-6 rounded-lg shadow-md text-black w-[50%] h-[60%] " >
        <button onClick={onClose} className="absolute  mt-1 mr-2 text-red-500 focus:outline-none sm:ml-[45%] ml-[34%]"><X /></button>
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
         <div className='flex flex-col gap-2'>
          <input type="text" placeholder={product.name} className='p-2 bg-white text-black border' />
          <input type="number" placeholder={product.price}  className='p-2 bg-white text-black border'/>
          <input type="text" placeholder={product.category} className='p-2 bg-white text-black border' />
          <input type="text" placeholder={product.description}  className='p-2 bg-white text-black border'/>
          <label htmlFor="image">update picture</label>
          <input type="file" className='p-2 bg-white text-black border'  accept="image/*"/>
          </div>
          <button onClick={onClose} className="bg-gray-500 text-white px-3 py-1 rounded mt-4">Update</button>
        </div>
      </div>
    );
  };
  const Modal2 = ({ onClose }) => {
    return (  
      <div className="fixed top-0 left-0 w-full  flex items-center justify-center bg-gray-900 bg-opacity-50 h-full" >
        <div className="bg-white p-6 rounded-lg shadow-md text-black w-[70%] h-[70%] " >
        <button onClick={onClose} className="absolute  mt-1 mr-2 text-red-500 focus:outline-none sm:ml-[65%] ml-[54%]"><X /></button>
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
         <div className='flex flex-col gap-2'>
          <input type="text" placeholder='enter your product name' className='p-2 bg-white text-black border' />
          <input type="number" placeholder='enter product price'  className='p-2 bg-white text-black border'/>
          <input type="text" placeholder='enter product category'className='p-2 bg-white text-black border' />
          <input type="text" placeholder='enter product description'  className='p-2 bg-white text-black border'/>
          <input type="text" placeholder='enter inside box'  className='p-2 bg-white text-black border'/>
          <input type="text" placeholder='enter product details'  className='p-2 bg-white text-black border'  accept="image/*"/>
           <label htmlFor="image">Upload images</label>
          <input type="file" id='image'   className='p-2 bg-white text-black border'/>
          </div>
          <button onClick={onClose} className="bg-gray-500 text-white px-3 py-1 rounded mt-4">Update</button>
        </div>
      </div>
    );
  };
  

  return (
    <div className="container mx-auto p-4 sm:w-[80%] w-[70%] h-[100vh] overflow-y-auto block" id='scroll'>
      {/* <h2 className="text-2xl font-bold mb-4">Admin Products</h2> */}
      <div className='flex sm:flex-row flex-col sm:gap-12 gap-1 ml-12 sm:ml-0 items-center '> 
      <div><h2 className="text-2xl font-bold mb-2">Product Details</h2></div>
      <div className='flex flex-row gap-1 justify-center items-center'>
        <input type="text" className='w-[200px] h-[34px] p-4 bg-white text-black rounded-md border' placeholder='enter name or email' />
        <button className='bg-blue-500 p-[5px] rounded-md text-white'>search</button>
      </div>
      </div>
     

      {/* Product list */}
      <div>
        <button className='btn bg-green-600 text-white mb-2' onClick={() => setShowModal2(true)}>Add Product</button>
        <ul>
          {products.map(product => (
            <li key={product.id} className="flex items-center justify-between border-b py-2">
              <div>
                <p className="text-lg">{product.name}</p>
                <p className="text-gray-500">Price: ${product.price}</p>
              </div>
              <div>
                <button onClick={() => handleEditUser(product)}  className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showModal2 && <Modal2 onClose={() => setShowModal2(false)} />}
      {selectedProduct && <Modal onClose={handleCloseModal} product={selectedProduct} />}
    </div>
  );
};

export default AdminProducts;
