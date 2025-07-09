import React, { useEffect, useState, useContext } from 'react';

import { useParams } from 'react-router-dom';

import api from '../services/api';

import { useAuth } from '../contexts/AuthContext';

import { CartContext } from '../context/CartContext';


 

const ProductDetailPage = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { user } = useAuth();

  const { addToCart } = useContext(CartContext);


 

  // State to show "Added to Cart" message

  const [added, setAdded] = useState(false);


 

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await api.get(`/products/${id}`);

        setProduct(res.data);

      } catch (err) {

        console.error('Error fetching product details:', err);

      }

    };


 

    fetchProduct();

  }, [id]);


 

  const handleAddToCart = () => {

    if (product) {

      addToCart({

        id: product._id,

        name: product.name,

        image: product.imageUrl,

        price: product.price,

        quantity: 1,

        maxQuantity: product.quantity,

        type: 'Product',

      });


 

      setAdded(true);


 

      // Hide message after 2 seconds

      setTimeout(() => setAdded(false), 2000);

    }

  };


 

  if (!product) return <div className="container mt-5">Loading product...</div>;


 

  return (

    <div className="container mt-5">

      <h2>{product.name}</h2>

      <div className="row">

        <div className="col-md-6">

          {product.imageUrl && (

            <img

              src={product.imageUrl}

              alt={product.name}

              className="img-fluid rounded"

              style={{ maxHeight: '400px', objectFit: 'cover' }}

            />

          )}

        </div>

        <div className="col-md-6">

          <p><strong>Description:</strong> {product.description}</p>

          <p><strong>Category:</strong> {product.category}</p>

          <p><strong>Price:</strong> ₹{product.price}</p>

          <p><strong>Available Stock:</strong> {product.quantity}</p>


 

          {user?.role !== 'vendor' && (

            <>

              {/* Show added message above button */}

              {added && (

                <div style={{ color: 'green', marginBottom: '8px' }}>

                  Added to Cart

                </div>

              )}


 

              {product.quantity > 0 ? (

                <button className="btn btn-primary mt-3" onClick={handleAddToCart}>

                  Add to Cart

                </button>

              ) : (

                <button className="btn btn-danger mt-3" disabled>

                  Out of Stock

                </button>

              )}

            </>

          )}

        </div>

      </div>

    </div>

  );

};


 

export default ProductDetailPage;


 