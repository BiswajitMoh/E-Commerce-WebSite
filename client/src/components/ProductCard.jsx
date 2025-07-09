import React, { useContext, useState } from 'react';

import { CartContext } from '../context/CartContext';

import { useAuth } from '../contexts/AuthContext';

import { Link } from 'react-router-dom';


 

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  const { user } = useAuth();


 

  // Local state to track if product was added to cart

  const [added, setAdded] = useState(false);


 

  const handleAdd = () => {

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


 

    // Hide the message after 2 seconds

    setTimeout(() => setAdded(false), 2000);

  };


 

  return (

    <div className="card m-2" style={{ width: '18rem' }}>

      <Link to={`/products/${product._id}`}>

        {product.imageUrl && (

          <img

            src={product.imageUrl}

            className="card-img-top"

            alt={product.name}

            style={{ height: '180px', objectFit: 'cover' }}

          />

        )}

      </Link>


 

      <div className="card-body">

        <h5 className="card-title">{product.name}</h5>

        <p className="card-text">{product.description}</p>

        <h6>₹{product.price}</h6>


 

        {product.quantity === 0 ? (

          <button className="btn btn-danger" disabled>

            Out of Stock

          </button>

        ) : (

          user?.role !== 'vendor' && (

            <>

              {/* Show added message above the button */}

              {added && (

                <div style={{ color: 'green', marginBottom: '8px' }}>

                  Added to Cart

                </div>

              )}


 

              <button className="btn btn-primary" onClick={handleAdd}>

                Add to Cart

              </button>

            </>

          )

        )}

      </div>

    </div>

  );

};


 

export default ProductCard;


 