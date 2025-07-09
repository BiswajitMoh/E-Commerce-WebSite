import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';

import CheckoutButton from '../components/CheckoutButton';

import '../styles/CartPage.css';

import { useNavigate } from 'react-router-dom';


 

const CartPage = () => {

  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();


 

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


 

  return (

    <div className="cart-container container py-5">

      <div className="cart-wrapper">

        <div className="cart-header">

          <h2 className="cart-title">Shopping Cart</h2>

          <span className="cart-count">{cart.length} items</span>

        </div>


 

        {cart.length === 0 ? (

          <div className="empty-cart">

            <i className="bi bi-cart-x"></i>

            <p>Your cart is empty</p>

            <button className="btn btn-primary" onClick={() => navigate('/products')}>Continue Shopping</button>

          </div>

        ) : (

          <>

            <div className="cart-items">

              {cart.map((item, idx) => (

                <div key={idx} className="cart-item">

                  <div className="item-image">

                    <img src={item.image || 'https://via.placeholder.com/80'} alt={item.name} />

                  </div>

                  <div className="item-details">

                    <h3 className="item-name">{item.name}</h3>

                    <p className="item-description">{item.description}</p>

                  </div>

                  <div className="item-quantity">

                    <button disabled={item.quantity <= 1} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>

                    <span>{item.quantity}</span>

                    <button

                      disabled={item.quantity >= item.maxQuantity}

                      onClick={() => updateQuantity(item.id, item.quantity + 1)}

                    >+</button>

                  </div>

                  <div className="item-price">

                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>

                    <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(item.id)}>Remove</button>

                  </div>

                </div>

              ))}

            </div>


 

            <div className="cart-summary">

              <div className="summary-row"><span>Subtotal</span><span>₹{total.toFixed(2)}</span></div>

              <div className="summary-row"><span>Shipping</span><span>FREE</span></div>

              <div className="summary-row total"><span>Total</span><span>₹{total.toFixed(2)}</span></div>

              <CheckoutButton cartItems={cart} />

            </div>

          </>

        )}

      </div>

    </div>

  );

};


 

export default CartPage;


 