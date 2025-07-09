import React, { useState } from 'react';

import axios from '../services/api';

import '../styles/DeliveryAddressForm.css';

import { useLocation, useNavigate } from 'react-router-dom';


 

const DeliveryAddressPage = () => {



  const { state } = useLocation();

  const navigate = useNavigate();

  const cartItems = state?.cartItems || [];

  const [address, setAddress] = useState({


 

    name: '',


 

    street: '',


 

    city: '',


 

    state: '',


 

    zip: '',


 

    country: ''


 

  });


 

  const handleChange = (e) => {


 

    setAddress({ ...address, [e.target.name]: e.target.value });


 

  };


 

  const handlePayment = async () => {


 

    // Payment handling logic preserved from original code


 

    try {

      const response = await axios.post('/payment/create-checkout-session', {

        cartItems,

        deliveryAddress: address,

      });

   

      if (response.data.url) {

        sessionStorage.setItem('deliveryData', JSON.stringify({

          cartItems,

          deliveryAddress: address,

          sessionId: response.data.sessionId,

        }));

   

        window.location.href = response.data.url;

      }

    } catch (err) {

      console.error('Payment failed:', err);

      alert('Something went wrong with payment.');

    }

  };


 

  return (


 

    <div className="delivery-container">


 

      <div className="form-card">


 

        <div className="form-header">


 

          <h3>Delivery Information</h3>


 

          <p className="text-muted">Please enter your shipping details</p>


 

        </div>


 

       


 

        <form>


 

          <div className="form-row">


 

            <div className="form-group">


 

              <label className="form-label">Full Name</label>


 

              <input


 

                type="text"


 

                name="name"


 

                className="form-control"


 

                value={address.name}


 

                onChange={handleChange}


 

                placeholder="John Doe"


 

                required


 

              />


 

            </div>


 

          </div>


 

          <div className="form-row">


 

            <div className="form-group">


 

              <label className="form-label">Street Address</label>


 

              <input


 

                type="text"


 

                name="street"


 

                className="form-control"


 

                value={address.street}


 

                onChange={handleChange}


 

                placeholder="123 Main St"


 

                required


 

              />


 

            </div>


 

          </div>


 

          <div className="form-row multi-col">


 

            <div className="form-group">


 

              <label className="form-label">City</label>


 

              <input


 

                type="text"


 

                name="city"


 

                className="form-control"


 

                value={address.city}


 

                onChange={handleChange}


 

                placeholder="New York"


 

                required


 

              />


 

            </div>


 

            <div className="form-group">


 

              <label className="form-label">State</label>


 

              <input


 

                type="text"


 

                name="state"


 

                className="form-control"


 

                value={address.state}


 

                onChange={handleChange}


 

                placeholder="NY"


 

                required


 

              />


 

            </div>


 

          </div>


 

          <div className="form-row multi-col">


 

            <div className="form-group">


 

              <label className="form-label">Zip Code</label>


 

              <input


 

                type="text"


 

                name="zip"


 

                className="form-control"


 

                value={address.zip}


 

                onChange={handleChange}


 

                placeholder="10001"


 

                required


 

              />


 

            </div>


 

            <div className="form-group">


 

              <label className="form-label">Country</label>


 

              <input


 

                type="text"


 

                name="country"


 

                className="form-control"


 

                value={address.country}


 

                onChange={handleChange}


 

                placeholder="United States"


 

                required


 

              />


 

            </div>


 

          </div>


 

          <div className="form-actions">


 

            <button type="button" className="btn-secondary" onClick={() => navigate('/cart')}>


 

              Return to Cart


 

            </button>


 

            <button type="button" className="btn-primary" onClick={handlePayment}>


 

              Proceed to Payment


 

            </button>


 

          </div>


 

        </form>


 

      </div>


 

    </div>


 

  );


 

};


 

export default DeliveryAddressPage;