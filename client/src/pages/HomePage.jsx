import React, { useEffect, useState } from 'react';

import api from '../services/api';

import ProductCard from '../components/ProductCard';

import ServiceCard from '../components/ServiceCard';

import { useAuth } from '../contexts/AuthContext';

import '../styles/HomePage.css';

import ProductCarousel from '../components/ProductCarousel';

import ServiceCarousel from '../components/ServiceCarousel';

import { Link } from 'react-router-dom';

import g from '../assets/images/b.jpg';

import h from '../assets/images/Electronic.avif';

import i from '../assets/images/Makeup.jpeg';

import j from '../assets/images/stiching.png';

import k from '../assets/images/suumer.jpeg';

import l from '../assets/images/newArrivals.jpeg';

const productBanners = [

  {

    id: 1,

    title: "Summer Sale",

    subtitle: "Up to 50% off on selected items",

    image: k,

    buttonText: "Shop Now",

    color: "primary"

  },

  {

    id: 2,

    title: "New Arrivals",

    subtitle: "Check out the latest fashion trends",

    image: l,

    buttonText: "Explore",

    color: "success"

  },

  {

    id: 3,

    title: "Electronics Sale",

    subtitle: "Latest gadgets at unbeatable prices",

    image: g,

    buttonText: "View Deals",

    color: "warning"

  }

];


 

const serviceBanners = [

  {

    id: 1,

    title: "Electronic Repair Services",

    subtitle: "Professional repair for smartphones, laptops, and other devices",

    image: h,

    buttonText: "Book Service",

    color: "primary"

  },

  {

    id: 2,

    title: "Makeup Services",

    subtitle: "Professional makeup for weddings, parties and special events",

    image: i,

    buttonText: "Book Session",

    color: "danger"

  },

  {

    id: 3,

    title: "Stitching Services",

    subtitle: "Expert tailoring for suits, dresses, and home textiles",

    image: j,

    buttonText: "Request Quote",

    color: "success"

  }

];


 

const CustomerHomePage = ({ user }) => {

  const [loading, setLoading] = useState(true);


 

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);

  }, []);


 

  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen">

        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>

      </div>

    );

  }


 

  return (

    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-8">

        <div className="mb-10">

          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>

          <ProductCarousel products={productBanners} />

        </div>


 

        <div className="mb-10">

          <h2 className="text-2xl font-bold mb-4">Our Services</h2>

          <ServiceCarousel services={serviceBanners} />

        </div>

      </main>


 

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-section">

            <h3>UniBox</h3>

            <p>Your one-stop shop for quality products and services.</p>

          </div>


 

          <div className="footer-section">

            <h3>Quick Links</h3>

            <ul>

            <li><a href="#">Home</a></li>

  <li><Link to="/products">Products</Link></li>

  <li><Link to="/services">Services</Link></li>

  <li><Link to="/about">About Us</Link></li>

            </ul>

          </div>


 

          <div className="footer-section">

            <h3>Customer Service</h3>

            <ul>

            <li><a href="/contact">Contact Us</a></li>

            <li><a href="/faq">FAQ</a></li>

              {/* <li><a href="#">Shipping</a></li>

              <li><a href="#">Returns</a></li> */}

            </ul>

          </div>


 

          {/* <div className="footer-section">

            <h3>Stay Connected</h3>

            <div className="social-icons">

              <a href="#"><i className="fab fa-facebook-f"></i></a>

              <a href="#"><i className="fab fa-twitter"></i></a>

              <a href="#"><i className="fab fa-instagram"></i></a>

              <a href="#"><i className="fab fa-linkedin-in"></i></a>

            </div>

            <p>Subscribe to our newsletter</p>

            <input type="email" placeholder="Your email" />

          </div> */}

        </div>

        <div className="footer-bottom">

          <p>© 2025 UniBox. All rights reserved.</p>

        </div>

      </footer>

    </div>

  );

};


 

const HomePage = () => {

  const [products, setProducts] = useState([]);

  const [services, setServices] = useState([]);

  const { user } = useAuth();


 

  useEffect(() => {

    const fetchVendorItems = async () => {

      try {

        const [productRes, serviceRes] = await Promise.all([

          api.get(`/products?vendorId=${user._id}`),

          api.get(`/services?vendorId=${user._id}`)

        ]);

        setProducts(productRes.data);

        setServices(serviceRes.data);

      } catch (err) {

        console.error('Error fetching vendor items:', err);

      }

    };


 

    if (user?.role === 'vendor') {

      fetchVendorItems();

    }

  }, [user]);


 

  if (!user) return null;


 

  if (user.role === 'vendor') {

    return (

      <div className="container mt-5">

        <div className="vendor-header">

          <h3>Welcome, {user.name}</h3>

          <p className="lead">Manage your products and services below</p>

        </div>


 

        <section className="products-section">

          <h4 className="section-title">Your Products</h4>

          <div className="row g-4">

            {products.map((p) => (

              <div className="col-md-4" key={p._id}>

                <ProductCard product={p} />

              </div>

            ))}

          </div>

        </section>


 

        <section className="services-section">

          <h4 className="section-title">Your Services</h4>

          <div className="row g-4">

            {services.map((s) => (

              <div className="col-md-4" key={s._id}>

                <ServiceCard service={s} />

              </div>

            ))}

          </div>

        </section>

      </div>

    );

  }


 

  return <CustomerHomePage user={user} />;

};


 

export default HomePage;


 