// pages/ServiceListPage.js

import React, { useEffect, useState } from 'react';

import api from '../services/api';

import ServiceCard from '../components/ServiceCard';

import { useAuth } from '../contexts/AuthContext';


 

const ServiceListPage = () => {

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [services, setServices] = useState([]);

  const { user } = useAuth();


 

  useEffect(() => {

    const fetchInitialData = async () => {

      try {

        // Fetch all categories

        const catRes = await api.get('/categories/service-categories');

        setCategories(catRes.data);


 

        // Fetch all services

        const serviceRes = await api.get('/services');

        setServices(serviceRes.data);

      } catch (err) {

        console.error('Error fetching initial data:', err);

      }

    };


 

    if (user?.role === 'customer') {

      fetchInitialData();

    }

  }, [user]);


 

  const handleCategorySelect = async (category) => {

    setSelectedCategory(category);

    try {

      const res = await api.get(`/categories/${category}`);

      setServices(res.data.services || []);

    } catch (err) {

      console.error('Error fetching category services:', err);

    }

  };


 

  return (

    <div className="container mt-4">

      <h4>Select a Category</h4>

      <div className="d-flex flex-wrap gap-2 mb-4">

        {categories.map((cat) => (

          <button

            key={cat}

            className={`btn btn-${selectedCategory === cat ? 'primary' : 'outline-primary'}`}

            onClick={() => handleCategorySelect(cat)}

          >

            {cat}

          </button>

        ))}

      </div>


 

      <div className="row">

        {services.map((service) => (

          <div className="col-md-4 mb-3" key={service._id}>

            <ServiceCard service={service} />

          </div>

        ))}

      </div>

    </div>

  );

};


 

export default ServiceListPage;


 