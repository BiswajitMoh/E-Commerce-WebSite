import React, { useEffect, useState, useContext } from 'react';

import { useParams } from 'react-router-dom';

import api from '../services/api';

import { useAuth } from '../contexts/AuthContext';

import { AppointmentContext } from '../context/AppointmentContext';


 

const ServiceDetailPage = () => {

  const { id } = useParams();

  const [service, setService] = useState(null);

  const { user } = useAuth();

  const { bookAppointment } = useContext(AppointmentContext);


 

  // State to show "Appointment Booked" message

  const [booked, setBooked] = useState(false);


 

  useEffect(() => {

    const fetchService = async () => {

      try {

        const res = await api.get(`/services/${id}`);

        setService(res.data);

      } catch (err) {

        console.error('Error fetching service details:', err);

      }

    };


 

    fetchService();

  }, [id]);


 

  const handleBook = () => {

    if (service) {

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

    }

  };


 

  if (!service) return <div className="container mt-5">Loading service...</div>;


 

  return (

    <div className="container mt-5">

      <h2>{service.name}</h2>

      <div className="row">

        <div className="col-md-6">

          {service.imageUrl && (

            <img

              src={service.imageUrl}

              alt={service.name}

              className="img-fluid rounded"

              style={{ maxHeight: '400px', objectFit: 'cover' }}

            />

          )}

        </div>

        <div className="col-md-6">

          <p><strong>Description:</strong> {service.description}</p>

          <p><strong>Category:</strong> {service.category}</p>

          <p><strong>Price:</strong> ₹{service.price}</p>


 

          {user?.role !== 'vendor' && (

            <>

              {/* Show confirmation message */}

              {booked && (

                <div style={{ color: 'green', marginBottom: '8px' }}>

                  Appointment Booked

                </div>

              )}


 

              <button className="btn btn-success mt-3" onClick={handleBook}>

                Book Appointment

              </button>

            </>

          )}

        </div>

      </div>

    </div>

  );

};


 

export default ServiceDetailPage;


 