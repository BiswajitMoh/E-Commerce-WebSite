import React from 'react';

import '../styles/ProductPage.css'; // Your custom styles

import 'bootstrap/dist/css/bootstrap.min.css';


 

const ProductsOverview = () => {

  const categories = [

    { name: 'Clothing', description: 'Explore the latest trends in men’s, women’s, and kids’ fashion including casual, formal, and seasonal wear.' },

    { name: 'Beauty', description: 'Discover beauty products including skincare, makeup, personal care, and grooming essentials.' },

    { name: 'Electronics', description: 'Find gadgets and appliances like smartphones, laptops, headphones, and home electronics.' },

    { name: 'Sports', description: 'Gear up with sportswear, fitness equipment, and outdoor essentials for an active lifestyle.' },

    { name: 'Home & Kitchen', description: 'Upgrade your home with kitchenware, decor, furniture, and cleaning essentials.' },

    { name: 'Books & Stationery', description: 'Browse a wide range of books, notebooks, pens, and study material for all ages.' },

  ];


 

  return (

    <div className="products-container">

      <div className="overlay">

        <div className="container  py-5 text-white">

        <h1 className="text-center mb-5 fw-bold text-white">Product Categories Overview</h1>

          <div className="row g-4">

            {categories.map((category, index) => (

              <div className="col-md-6 col-lg-4" key={index}>

                <div className="card category-card h-100">

                  <div className="card-body">

                    <h5 className="card-title text-light">{category.name}</h5>

                    <p className="card-text text-light">{category.description}</p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

};


 

export default ProductsOverview;


 