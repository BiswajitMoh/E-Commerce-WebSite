import React, { useState } from 'react';

import api from '../services/api';

import { useAuth } from '../contexts/AuthContext';

import '../styles/AddProduct.css';


 

const AddProductForm = () => {

  const { user } = useAuth();


 

  const [formData, setFormData] = useState({

    name: '',

    description: '',

    price: '',

    category: '',

    quantity: '', // 🔹 Add quantity

  });


 

  const [image, setImage] = useState(null);

  const [message, setMessage] = useState('');


 

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


 

  const handleImageChange = (e) => setImage(e.target.files[0]);


 

  const handleSubmit = async (e) => {

    e.preventDefault();


 

    const data = new FormData();

    for (let key in formData) {

      data.append(key, formData[key]);

    }


 

    data.append('vendorId', user._id);

    if (image) data.append('image', image);


 

    try {

      await api.post('/products/add', data, {

        headers: { 'Content-Type': 'multipart/form-data' },

      });


 

      setMessage('Product added successfully!');

      setFormData({

        name: '',

        description: '',

        price: '',

        category: '',

        quantity: '', // clear quantity

      });

      setImage(null);

    } catch (err) {

      console.error(err.response?.data || err);

      setMessage('Failed to add product');

    }

  };


 

  return (

    <div className="add-product-container">

      <div className="form-wrapper">

        <h2 className="form-title">Add New Product</h2>


 

        {message && (

          <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} fade show`}>

            {message}

          </div>

        )}


 

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="product-form">

          <div className="form-floating mb-3">

            <input

              type="text"

              className="form-control"

              id="name"

              name="name"

              placeholder="Product Name"

              value={formData.name}

              onChange={handleChange}

              required

            />

            <label htmlFor="name">Product Name</label>

          </div>


 

          <div className="form-floating mb-3">

            <textarea

              className="form-control"

              id="description"

              name="description"

              placeholder="Description"

              value={formData.description}

              onChange={handleChange}

              style={{ height: '100px' }}

              required

            />

            <label htmlFor="description">Description</label>

          </div>


 

          <div className="form-floating mb-3">

            <input

              type="number"

              className="form-control"

              id="price"

              name="price"

              placeholder="Price"

              value={formData.price}

              onChange={handleChange}

              required

            />

            <label htmlFor="price">Price (₹)</label>

          </div>


 

          {/* 🔹 Add Quantity Field */}

          <div className="form-floating mb-3">

            <input

              type="number"

              className="form-control"

              id="quantity"

              name="quantity"

              placeholder="Quantity"

              value={formData.quantity}

              onChange={handleChange}

              required

              min="0"

            />

            <label htmlFor="quantity">Quantity</label>

          </div>


 

          <div className="form-floating mb-3">

            <select

              className="form-select"

              id="category"

              name="category"

              value={formData.category}

              onChange={handleChange}

              required

            >

              <option value="" disabled>Select a category</option>

              <option value="Electronics">Electronics</option>

              <option value="Clothing">Fashion</option>

              <option value="Home">Home & Kitchen</option>

              <option value="Books">Books</option>

              <option value="Beauty">Beauty</option>

              <option value="Sports">Sports</option>

            </select>

            <label htmlFor="category">Category</label>

          </div>


 

          <div className="mb-3">

            <label htmlFor="image" className="form-label">Product Image</label>

            <input

              type="file"

              className="form-control"

              id="image"

              accept="image/*"

              onChange={handleImageChange}

            />

          </div>


 

          <button type="submit" className="btn btn-primary w-100">

            Add Product

          </button>

        </form>

      </div>

    </div>

  );

};


 

export default AddProductForm;