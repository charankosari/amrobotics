import React, { useState } from 'react';

const AdminProducts = () => {
  // Sample products data
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
  ]);

  // Form state
  const [formData, setFormData] = useState({ id: '', name: '', price: '' });
  const [editMode, setEditMode] = useState(false);

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

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find(product => product.id === productId);
    setFormData(productToEdit);
    setEditMode(true);
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map(product =>
      product.id === formData.id ? formData : product
    );
    setProducts(updatedProducts);
    setFormData({ id: '', name: '', price: '' });
    setEditMode(false);
  };

  return (
    <div className="container mx-auto p-4 lg:w-[90%]] xl:w-[66%] w-[50%] block">
      <h2 className="text-2xl font-bold mb-4">Admin Products</h2>
      
      <form className="mb-4">
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Product Name" className="w-full p-2 mb-2 border rounded" />
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" className="w-full p-2 mb-2 border rounded" />
        {editMode ? (
          <button type="button" onClick={handleUpdateProduct} className="bg-blue-500 text-white px-4 py-2 rounded">Update Product</button>
        ) : (
          <button type="button" onClick={handleAddProduct} className="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>
        )}
      </form>

      {/* Product list */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Products</h3>
        <ul>
          {products.map(product => (
            <li key={product.id} className="flex items-center justify-between border-b py-2">
              <div>
                <p className="text-lg">{product.name}</p>
                <p className="text-gray-500">Price: ${product.price}</p>
              </div>
              <div>
                <button onClick={() => handleEditProduct(product.id)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminProducts;
