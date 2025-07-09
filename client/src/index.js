import React from 'react';

import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';


import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { CartProvider } from './context/CartContext';

import { AppointmentProvider } from './context/AppointmentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>

    <AuthProvider>

      <CartProvider>

      <AppointmentProvider>

          <App />

        </AppointmentProvider>

      </CartProvider>

    </AuthProvider>

  </BrowserRouter>


 

);


 