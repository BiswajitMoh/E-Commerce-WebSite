import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';
import '../styles/VendorDashboard.css';

const VendorDashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user.role !== 'vendor') return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [productsRes, servicesRes] = await Promise.all([
          api.get(`/products?vendorId=${user._id}`),
          api.get(`/services?vendorId=${user._id}`),
        ]);
        setProducts(productsRes.data);
        setServices(servicesRes.data);
      } catch (err) {
        setError('Failed to load products and services');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (user.role !== 'vendor') {
    return (
      <div className="access-denied">
        <div className="alert alert-danger">
          <h3>Access Denied</h3>
          <p>You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Vendor Dashboard</h2>
        <p>Welcome back, {user.name}!</p>
      </div>

      {loading ? (
        <p>Loading your products and services...</p>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <>
          <div className="dashboard-section">
            <h3>Your Products</h3>
            {products.length === 0 ? (
              <p>No products found. Add some!</p>
            ) : (
              <ul className="item-list">
                {products.map((product) => (
                  <li key={product._id}>{product.name}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="dashboard-section">
            <h3>Your Services</h3>
            {services.length === 0 ? (
              <p>No services found. Add some!</p>
            ) : (
              <ul className="item-list">
                {services.map((service) => (
                  <li key={service._id}>{service.name}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}

      <div className="dashboard-actions">
        <Link to="/vendor/add-product" className="action-card product-action">
          <div className="action-icon">
            <i className="bi bi-plus-circle"></i>
          </div>
          <div className="action-content">
            <h4>Add New Product</h4>
            <p>List a new product for sale</p>
          </div>
        </Link>

        <Link to="/vendor/add-service" className="action-card service-action">
          <div className="action-icon">
            <i className="bi bi-tools"></i>
          </div>
          <div className="action-content">
            <h4>Add New Service</h4>
            <p>Create a new service offering</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VendorDashboard;
