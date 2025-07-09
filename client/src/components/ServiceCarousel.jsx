import React, { useEffect, useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import '../styles/ServiceCarousel.css';

import { useNavigate } from 'react-router-dom';



 

const ServiceCarousel = ({ services }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();



 

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);

    }, 5000);


 

    return () => clearInterval(interval);

  }, [services.length]);


 

  const handlePrevious = () => {

    setCurrentIndex((prevIndex) =>

      prevIndex === 0 ? services.length - 1 : prevIndex - 1

    );

  };


 

  const handleNext = () => {

    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);

  };


 

  return (

    <div className="service-carousel-container">

      {services.map((service, index) => (

        <div

          key={service.id}

          className={`service-slide ${index === currentIndex ? 'active' : ''}`}

          style={{ backgroundImage: `url(${service.image})` }}

        >

          <div className="service-overlay"></div>

          <div className="service-content">

            <h2 className="service-title">{service.title}</h2>

            <p className="service-subtitle">{service.subtitle}</p>

            <button className={`service-button ${service.color}`}

              onClick={() => navigate('/services')}

            >

              {service.buttonText}

            </button>

          </div>

        </div>

      ))}


 

      <div className="service-indicators">

        {services.map((_, index) => (

          <button

            key={index}

            className={`indicator ${index === currentIndex ? 'active' : ''}`}

            onClick={() => setCurrentIndex(index)}

          ></button>

        ))}

      </div>


 

      <button className="carousel-control prev-control" onClick={handlePrevious}>

        <ChevronLeft size={24} />

      </button>


 

      <button className="carousel-control next-control" onClick={handleNext}>

        <ChevronRight size={24} />

      </button>

    </div>

  );

};


 

export default ServiceCarousel;


 