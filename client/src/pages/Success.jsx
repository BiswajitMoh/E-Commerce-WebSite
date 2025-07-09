import React, { useEffect, useContext, useState } from 'react';

import axios from '../services/api';

import { CartContext } from '../context/CartContext';

import { AppointmentContext } from '../context/AppointmentContext';

import '../styles/Success.css';


 

const SuccessPage = () => {

  const { clearCart } = useContext(CartContext);

  const { clearAppointments } = useContext(AppointmentContext);

  const [isOrderSaved, setIsOrderSaved] = useState(false);


 

  useEffect(() => {

    const savedData = JSON.parse(sessionStorage.getItem('deliveryData'));


 

    const saveOrder = async () => {

      try {

        if (savedData) {

          await axios.post('/orders', {

            cartItems: savedData.cartItems,

            deliveryAddress: savedData.deliveryAddress,

            stripeSessionId: savedData.sessionId,

          });


 

          clearCart();

          clearAppointments();

          sessionStorage.removeItem('deliveryData');

        }


 

        setIsOrderSaved(true);

      } catch (err) {

        console.error('Error saving order:', err);

        setIsOrderSaved(true);

      }

    };


 

    saveOrder();

  }, [clearCart, clearAppointments]);


 

  return (

    <div className="success-container">

      <div className="success-card">

        <h2 className="success-title">Payment Successful!</h2>

        <p className="success-message">Your order has been placed successfully.</p>

        {!isOrderSaved && <p className="loading-message">Saving your order...</p>}

      </div>

    </div>

  );

};


 

export default SuccessPage;


 