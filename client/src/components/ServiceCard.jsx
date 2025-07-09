import React, { useContext, useState } from 'react';

import { useAuth } from '../contexts/AuthContext';

import { AppointmentContext } from '../context/AppointmentContext';

import { Link } from 'react-router-dom';


 

const ServiceCard = ({ service }) => {

  const { bookAppointment } = useContext(AppointmentContext);

  const { user } = useAuth();


 

  // State to show booking confirmation message

  const [booked, setBooked] = useState(false);


 

  const handleBook = () => {

    bookAppointment({

      id: service._id,

      name: service.name,

      image: service.imageUrl,

      price: service.price,

      description: service.description,

      bookedAt: new Date().toISOString(),

    });


 

    setBooked(true);


 

    // Hide message after 2 seconds

    setTimeout(() => setBooked(false), 2000);

  };


 

  return (

    <div className="card m-2" style={{ width: '18rem' }}>

      <Link to={`/services/${service._id}`}>

        {service.imageUrl && (

          <img

            src={service.imageUrl}

            className="card-img-top"

            alt={service.name}

            style={{ height: '180px', objectFit: 'cover' }}

          />

        )}

      </Link>


 

      <div className="card-body">

        <h5 className="card-title">{service.name}</h5>

        <p className="card-text">{service.description}</p>

        <h6>₹{service.price}</h6>


 

        {user?.role !== 'vendor' && (

          <>

            {/* Show booked message above the button */}

            {booked && (

              <div style={{ color: 'green', marginBottom: '8px' }}>

                Appointment Booked

              </div>

            )}


 

            <button className="btn btn-success" onClick={handleBook}>

              Book Appointment

            </button>

          </>

        )}

      </div>

    </div>

  );

};


 

export default ServiceCard;


 