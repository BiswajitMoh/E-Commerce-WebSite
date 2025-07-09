import React, { useEffect, useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import '../styles/ProductCarousel.css';

import { useNavigate } from 'react-router-dom';


 

const ProductCarousel = ({ products }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();


 

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);

    }, 5000);


 

    return () => clearInterval(interval);

  }, [products.length]);


 

  const handlePrevious = () => {

    setCurrentIndex((prevIndex) =>

      prevIndex === 0 ? products.length - 1 : prevIndex - 1

    );

  };


 

  const handleNext = () => {

    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);

  };


 

  return (

    <div className="product-carousel-container">

      {products.map((product, index) => (

        <div

          key={product.id}

          className={`product-slide ${index === currentIndex ? 'active' : ''}`}

          style={{ backgroundImage: `url(${product.image})` }}

        >

          <div className="product-overlay"></div>

          <div className="product-content">

            <h2 className="product-title">{product.title}</h2>

            <p className="product-subtitle">{product.subtitle}</p>

            <button className={`product-button ${product.color}`}

            onClick={() => navigate('/products')}

            >

              {product.buttonText}

            </button>

          </div>

        </div>

      ))}


 

      <div className="product-indicators">

        {products.map((_, index) => (

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


 

export default ProductCarousel;


 