import React, { useContext } from 'react';

import { AppointmentContext } from '../context/AppointmentContext';

import CheckoutButton from '../components/CheckoutButton';

import { useNavigate } from 'react-router-dom';


 

import '../styles/CartPage.css'; // Reuse cart styling


 

const AppointmentPage = () => {

  const { appointments, removeAppointment } = useContext(AppointmentContext);

  const navigate = useNavigate();

  const total = appointments.reduce((sum, item) => sum + item.price, 0);


 

  return (

    <div className="cart-container container py-5">

      <div className="cart-wrapper">

        <div className="cart-header">

          <h2 className="cart-title">Your Appointments</h2>

          <span className="cart-count">

            {appointments.length} {appointments.length === 1 ? 'appointment' : 'appointments'}

          </span>

        </div>


 

        {appointments.length === 0 ? (

          <div className="empty-cart">

            <i className="bi bi-calendar-x"></i>

            <p>No appointments booked yet.</p>

            <button className="btn btn-primary" onClick={() => navigate('/services')}>

              Browse Services

            </button>

          </div>

        ) : (

          <>

            <div className="cart-items">

              {appointments.map((item, idx) => (

                <div key={idx} className="cart-item">

                  <div className="item-image">

                    <img src={item.image || 'https://via.placeholder.com/80'} alt={item.name} />

                  </div>

                  <div className="item-details">

                    <h3 className="item-name">{item.name}</h3>

                    <p className="item-description">{item.description}</p>

                    <p className="item-date">

                      <strong>Booked At:</strong> {new Date(item.bookedAt).toLocaleString()}

                    </p>

                  </div>

                  <div className="item-price">

                    <span className="current-price">₹{item.price}</span>

                    {/* Remove button */}

                    <button

                      className="btn btn-sm btn-danger mt-2"

                      onClick={() => removeAppointment(item.id)}

                    >

                      Remove

                    </button>

                  </div>

                </div>

              ))}

            </div>


 

            <div className="cart-summary">

              <div className="summary-row">

                <span>Service Total</span>

                <span>₹{total.toFixed(2)}</span>

              </div>


 

              <div className="summary-row">

                <span>Additional Fees</span>

                <span>FREE</span>

              </div>


 

              <div className="summary-row total">

                <span>Total</span>

                <span>₹{total.toFixed(2)}</span>

              </div>


 

              <CheckoutButton cartItems={appointments} />

            </div>

          </>

        )}

      </div>

    </div>

  );

};


 

export default AppointmentPage;


 