// Layout.jsx

import React from 'react';

import { Outlet, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Layout.css'; // Make sure this file includes the CSS above


 

const Layout = () => {

    return (

        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">

                <div className="container">

                    <Link to="/" className="navbar-brand">

                        <span className="text-primary">Uni</span>

                        <span className="text-secondary">Box</span>

                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">

                                <Link to="/productpage" className="nav-link">Products</Link>

                            </li>

                            <li className="nav-item">

                                <Link to="/vendorpage" className="nav-link">Services</Link>

                            </li>

                            <li className="nav-item">

                                <Link to="/about" className="nav-link">About Us</Link>

                            </li>

                            <li className="nav-item">


 

                            <Link to="/contact" className="nav-link">Contact Us</Link>

                        </li>

                        </ul>

                       

                        <div className="d-flex">

                            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>

                            <Link to="/register" className="btn btn-primary">Register</Link>

                        </div>

                    </div>

                </div>

            </nav>


 

            {/* Layout content wrapper to avoid navbar overlap */}

            <div className="layout-content">

                <Outlet />

            </div>

        </>

    );

};


 

export default Layout;


 