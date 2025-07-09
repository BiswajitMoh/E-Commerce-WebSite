import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/AddService.css';
import { useAuth } from '../contexts/AuthContext';

const AddServiceForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const data = new FormData();
    for (let key in formData) data.append(key, formData[key]);
    data.append('vendorId', user._id);
    if (image) data.append('image', image);

    try {
      await api.post('/services/add', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage('Service added successfully!');
      setFormData({ name: '', description: '', price: '', category: '' });
      setImage(null);
      navigate('/vendor/dashboard');
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to add service';
      setMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-service-container">
      <div className="form-wrapper">
        <h2 className="form-title">Add New Service</h2>

        {message && (
          <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} fade show`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="service-form">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Service Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Service Name</label>
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

          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a service category
              </option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Landscaping">Landscaping</option>
              <option value="IT Support">IT Support</option>
            </select>
            <label htmlFor="category">Category</label>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Service Image
            </label>
            <input type="file" className="form-control" id="image" accept="image/*" onChange={handleImageChange} />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Adding...' : 'Add Service'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;
