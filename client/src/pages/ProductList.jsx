// pages/ProductListPage.js

import React, { useEffect, useState } from 'react';

import api from '../services/api';

import ProductCard from '../components/ProductCard';

import { useAuth } from '../contexts/AuthContext';


 

const ProductListPage = () => {

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [products, setProducts] = useState([]);

  const { user } = useAuth();


 

  useEffect(() => {

    const fetchInitialData = async () => {

      try {

        // Fetch all categories

        const catRes = await api.get('/categories/product-categories');

        setCategories(catRes.data);


 

        // Fetch all products initially

        const prodRes = await api.get('/products');

        setProducts(prodRes.data);

      } catch (err) {

        console.error('Error fetching data:', err);

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

      setProducts(res.data.products || []);

    } catch (err) {

      console.error('Error fetching category products:', err);

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

        {products.map((product) => (

          <div className="col-md-4 mb-3" key={product._id}>

            <ProductCard product={product} />

          </div>

        ))}

      </div>

    </div>

  );

};


 

export default ProductListPage;


 