import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import api from '../services/api';

import ProductCard from '../components/ProductCard';

import ServiceCard from '../components/ServiceCard';


 

const SearchResults = () => {

 const { search } = useLocation();

 const query = new URLSearchParams(search).get('q');

 const [products, setProducts] = useState([]);

 const [services, setServices] = useState([]);


 

 useEffect(() => {

   const fetchResults = async () => {

     const [prodRes, servRes] = await Promise.all([

       api.get('/products'),

       api.get('/services'),

     ]);


 

     const lower = query.toLowerCase();

     setProducts(prodRes.data.filter(p => p.name.toLowerCase().includes(lower)));

     setServices(servRes.data.filter(s => s.name.toLowerCase().includes(lower)));

   };


 

   if (query) fetchResults();

 }, [query]);


 

 return (

   <div className="container mt-4">

     <h2>Search Results for "{query}"</h2>


 

     <h4>Products</h4>

     <div className="row">

       {products.length > 0 ? products.map(p => (

         <div className="col-md-4 mb-3" key={p._id}>

           <ProductCard product={p} />

         </div>

       )) : <p>No matching products.</p>}

     </div>


 

     <h4 className="mt-4">Services</h4>

     <div className="row">

       {services.length > 0 ? services.map(s => (

         <div className="col-md-4 mb-3" key={s._id}>

           <ServiceCard service={s} />

         </div>

       )) : <p>No matching services.</p>}

     </div>

   </div>

 );

};


 

export default SearchResults;


 