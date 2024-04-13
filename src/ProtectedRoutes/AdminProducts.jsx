import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./AdminStyles.css"
import Modal from './Modals/Modal';
import Modal2 from './Modals/Modal2';
const AdminProducts = () => {
  
  const [products, setProducts] = useState([]);
  const [filteredProduct,setFilteredProducts]=useState([]);
  const [search,setSearch]=useState('');

  //fetching all products
  const fetchProducts = async () => {
    try {
      const authToken = localStorage.getItem('jwtToken'); // Replace with your actual authentication token
      const response = await axios.get('http://localhost:5080/api/v1/productsHome', {
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

  //searching for a product
  const searchProduct = () => {
    const filteredProduct = products.filter(product => {
      const searchLower = search.toLowerCase();
      return product.name.toLowerCase().includes(searchLower) || product.category.toLowerCase().includes(searchLower);
    });
    setFilteredProducts(filteredProduct);
  };

  //clearing search
  
  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  };


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

 

  const [showModal2, setShowModal2] = useState(false);

  

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditUser = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    fetchProducts();
  };

  
  

  return (
    <div className="container mx-auto p-4 sm:w-[80%] w-[70%] h-[100vh] overflow-y-auto block" id='scroll'>
      {/* <h2 className="text-2xl font-bold mb-4">Admin Products</h2> */}
      <div className='flex sm:flex-row flex-col sm:gap-12 gap-1 ml-12 sm:ml-0 items-center '> 
      <div><h2 className="text-2xl font-bold mb-2">Product Details</h2></div>
      <div className='flex flex-row gap-1 justify-center items-center'>
        <input type="text" className='w-[200px] h-[34px] p-4 bg-white text-black rounded-md border ' onChange={(e)=>{setSearch(e.target.value)}} value={search}  placeholder='enter product or category' />
        <button className='bg-blue-500 p-[5px] rounded-md text-white' onClick={searchProduct}>search</button>
        <button className='bg-yellow-500 p-[5px] rounded-md text-white'  onClick={clearSearch}>clear</button>

      </div>
      </div>
     

      {/* Product list */}
      <div>
        <button className='btn bg-green-600 text-white mb-2' onClick={() => setShowModal2(true)}>Add Product</button>
        <ul>
        {(search ? filteredProduct : products).map((product) => (
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
      {showModal2 && <Modal2 onClose={() => setShowModal2(false)} fetchProducts ={()=>{fetchProducts}}  />}
      {selectedProduct && <Modal onClose={handleCloseModal} product={selectedProduct} />}
    </div>
  );
};

export default AdminProducts;
