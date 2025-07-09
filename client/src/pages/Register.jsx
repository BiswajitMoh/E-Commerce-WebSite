import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ role: 'customer' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await registerUser(form);
      navigate('/login');
    } catch (err) {
      // Show backend error message if available
      const message = err.response?.data?.message || 'Registration failed';
      alert(message);
    }
  };

  return (
    <div className="container my-5 register-container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-4">
              <h2 className="mb-0">Create Your Account</h2>
              <p className="mb-0 mt-2">Join our community of shoppers</p>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">I am a</label>
                  <div className="row gx-2">
                    <div className="col-6">
                      <div
                        className={`border rounded p-3 text-center position-relative ${
                          form.role === 'customer' ? 'border-primary bg-light' : 'border-secondary'
                        }`}
                        onClick={() => setForm({ ...form, role: 'customer' })}
                        style={{ cursor: 'pointer' }}
                      >
                        <i className="bi bi-person-fill mb-2 d-block" style={{ fontSize: '24px' }}></i>
                        <div className="fw-bold">Customer</div>
                        <small className="text-muted">Shop with us</small>
                        {form.role === 'customer' && (
                          <span className="position-absolute top-0 end-0 p-2">
                            <i className="bi bi-check-circle-fill text-primary"></i>
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className={`border rounded p-3 text-center position-relative ${
                          form.role === 'vendor' ? 'border-primary bg-light' : 'border-secondary'
                        }`}
                        onClick={() => setForm({ ...form, role: 'vendor' })}
                        style={{ cursor: 'pointer' }}
                      >
                        <i className="bi bi-shop mb-2 d-block" style={{ fontSize: '24px' }}></i>
                        <div className="fw-bold">Vendor</div>
                        <small className="text-muted">Sell with us</small>
                        {form.role === 'vendor' && (
                          <span className="position-absolute top-0 end-0 p-2">
                            <i className="bi bi-check-circle-fill text-primary"></i>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {form.role === 'customer' && (
                  <div className="mb-4">
                    <label className="form-label">Full Name</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter your full name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {form.role === 'vendor' && (
                  <>
                    <div className="mb-4">
                      <label className="form-label">Vendor Name</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person-badge"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="vendorName"
                          placeholder="Enter vendor name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">GST Number</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-card-list"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="gstNo"
                          placeholder="Enter GST number"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Shop Name</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-shop"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="shopName"
                          placeholder="Enter shop name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Mobile Number</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-phone"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          placeholder="Enter mobile number"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email address"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Create a password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <small className="form-text text-muted">Password must be at least 8 characters long</small>
                </div>

                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock-fill"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Repeat your password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="termsCheck" required />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and{' '}
                    <a href="#" className="text-decoration-none">Privacy Policy</a>
                  </label>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Create Account
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer bg-light text-center py-3">
              <p className="mb-0">
                Already have an account? <a href="/login" className="text-decoration-none">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
