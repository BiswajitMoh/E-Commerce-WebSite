import React, { useState } from 'react';


 

import { useNavigate } from 'react-router-dom';


 

import { loginUser } from '../services/authService';


 

import { useAuth } from '../contexts/AuthContext';


 

const Login = () => {


 

 const [email, setEmail] = useState('');


 

 const [password, setPassword] = useState('');


 

 const [role, setRole] = useState('customer'); // Default role



 




 

 const { login } = useAuth();


 

 const navigate = useNavigate();



 




 

 const handleSubmit = async (e) => {


 

   e.preventDefault();


 

   try {


 

     const res = await loginUser(email, password, role);


 

     login({ ...res.user, token: res.token });


 

     navigate('/home');


 

   } catch {


 

     alert('Invalid credentials');


 

   }


 

 };



 

  return (


 

    <div className="container my-5 register-container">


 

      <div className="row justify-content-center">


 

        <div className="col-md-8 col-lg-6">


 

          <div className="card shadow-lg border-0">


 

            <div className="card-header bg-primary text-white text-center py-4">


 

              <h2 className="mb-0">Login to Your Account</h2>


 

              <p className="mb-0 mt-2">Welcome back</p>


 

            </div>


 

           


 

            <div className="card-body p-4">


 

              <form onSubmit={handleSubmit}>


 

                <div className="mb-4">


 

                  <label className="form-label">I am a</label>


 

                  <div className="row gx-2">


 

                    <div className="col-6">


 

                      <div


 

                        className={`border rounded p-3 text-center position-relative ${role === 'customer' ? 'border-primary bg-light' : 'border-secondary'}`}


 

                        onClick={() => setRole('customer')}


 

                        style={{ cursor: 'pointer' }}


 

                      >


 

                        <i className="bi bi-person-fill mb-2 d-block" style={{ fontSize: '24px' }}></i>


 

                        <div className="fw-bold">Customer</div>


 

                        <small className="text-muted">Shop with us</small>


 

                        {role === 'customer' && (


 

                          <span className="position-absolute top-0 end-0 p-2">


 

                            <i className="bi bi-check-circle-fill text-primary"></i>


 

                          </span>


 

                        )}


 

                      </div>


 

                    </div>


 

                    <div className="col-6">


 

                      <div


 

                        className={`border rounded p-3 text-center position-relative ${role === 'vendor' ? 'border-primary bg-light' : 'border-secondary'}`}


 

                        onClick={() => setRole('vendor')}


 

                        style={{ cursor: 'pointer' }}


 

                      >


 

                        <i className="bi bi-shop mb-2 d-block" style={{ fontSize: '24px' }}></i>


 

                        <div className="fw-bold">Vendor</div>


 

                        <small className="text-muted">Sell with us</small>


 

                        {role === 'vendor' && (


 

                          <span className="position-absolute top-0 end-0 p-2">


 

                            <i className="bi bi-check-circle-fill text-primary"></i>


 

                          </span>


 

                        )}


 

                      </div>


 

                    </div>


 

                  </div>


 

                </div>


 

                <div className="mb-4">


 

                  <label className="form-label">Email Address</label>


 

                  <div className="input-group">


 

                    <span className="input-group-text">


 

                      <i className="bi bi-envelope"></i>


 

                    </span>


 

                    <input


 

                      type="email"


 

                      className="form-control"


 

                      placeholder="Enter your email"


 

                      value={email}


 

                      onChange={e => setEmail(e.target.value)}


 

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


 

                      placeholder="Enter your password"


 

                      value={password}


 

                      onChange={e => setPassword(e.target.value)}


 

                      required


 

                    />


 

                  </div>


 

                </div>


 

                <div className="d-flex justify-content-between align-items-center mb-4">


 

                  <div className="form-check">


 

                    <input className="form-check-input" type="checkbox" id="rememberMe" />


 

                    <label className="form-check-label" htmlFor="rememberMe">


 

                      Remember me


 

                    </label>


 

                  </div>


 

                  <a href="#" className="text-decoration-none">Forgot password?</a>


 

                </div>

                <div className="d-grid gap-2">


 

                  <button type="submit" className="btn btn-primary btn-lg">


 

                    Login


 

                  </button>


 

                </div>


 

              </form>


 

            </div>


 

            <div className="card-footer bg-light text-center py-3">


 

              <p className="mb-0">


 

                Don't have an account? <a href="/register" className="text-decoration-none">Register here</a>


 

              </p>


 

            </div>


 

          </div>


 

        </div>


 

      </div>


 

    </div>


 

  );


 

};



 




 

export default Login;


 