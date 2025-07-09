// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

import Login from './pages/Login';

import Register from './pages/Register';

import HomePage from './pages/HomePage';

import CartPage from './pages/CartPage';

import './App.css'

import NavBar from './components/NavBar';

import VendorDashboard from './pages/VendorDashboard';

import AddProduct from './pages/AddProduct';

import AddService from './pages/AddService';

import ProductList from './pages/ProductList';

import ServiceList from './pages/ServiceList';

import SearchResults from './pages/SearchResults';

import Layout from './components/Layout';

import DeliveryAddressPage from './pages/DeliveryAddressPage';

import Success from './pages/Success';

import MyOrders from './pages/MyOrders';

import AboutUs from './pages/AboutUs';

import AppointmentPage from './pages/AppointmentPage';


import ProductDetailPage from './pages/ProductDetailPage';

import ServiceDetailPage from './pages/ServiceDetailPage';

import ContactUs from './pages/ContactUs';

import FAQ  from './pages/FAQ';

import VendorOverview from './pages/VendorPage'

import ProductOverview from './pages/ProductPage'



import { useAuth } from './contexts/AuthContext';

const App = () => {

 const { user } = useAuth();

 return (


   <>

     {user && <NavBar />}

     <Routes>


       <Route path="/home" element={user ? <HomePage /> : <Navigate to="/" />} />

       <Route path="/cart" element={<CartPage />} />

       <Route path="/vendor/dashboard" element={user?.role === 'vendor' ? <VendorDashboard /> : <Navigate to="/" />} />

       <Route path="/vendor/add-product" element={user?.role === 'vendor' ? <AddProduct /> : <Navigate to="/" />} />

       <Route path="/vendor/add-service" element={user?.role === 'vendor' ? <AddService /> : <Navigate to="/" />} />

       <Route path="/products" element={<ProductList />} />


       <Route path="/services" element={<ServiceList />} />



       <Route path="/search" element={<SearchResults />} />


       <Route path="/success" element={<Success />} />



       <Route path="/delivery" element={<DeliveryAddressPage />} />


       <Route path="/myorders" element={<MyOrders />} />

       <Route path="/faq" element={<FAQ />} />


       <Route path="/appointments" element={<AppointmentPage />} />

       <Route path="/vendor/myorders" element={user?.role === 'vendor' ? <MyOrders /> : <Navigate to="/" />} />

       <Route path="/products/:id" element={<ProductDetailPage />} />

       <Route path="/services/:id" element={<ServiceDetailPage />} />

       <Route path="/" element={<Layout />}>

          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/productpage" element={<ProductOverview />} />

          <Route path="/vendorpage" element={<VendorOverview />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/contact" element={<ContactUs />} />

        </Route>

     </Routes>

   </>

 );


};


export default App;
