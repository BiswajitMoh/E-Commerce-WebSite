import React, { createContext, useState, useEffect } from 'react';


 

export const CartContext = createContext();


 

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {

    const savedCart = sessionStorage.getItem('cart');

    return savedCart ? JSON.parse(savedCart) : [];

  });


 

  useEffect(() => {

    sessionStorage.setItem('cart', JSON.stringify(cart));

  }, [cart]);


 

  const addToCart = (item) => {

    setCart(prev => {

      const existing = prev.find(p => p.id === item.id);

      if (existing) {

        if (existing.quantity + 1 <= item.maxQuantity) {

          return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);

        }

        return prev;

      }

      return [...prev, item];

    });

  };


 

  const updateQuantity = (id, quantity) => {

    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));

  };


 

  const removeFromCart = (id) => {

    setCart(prev => prev.filter(item => item.id !== id));

  };


 

  const clearCart = () => {

    setCart([]);

    sessionStorage.removeItem('cart');

  };


 

  return (

    <CartContext.Provider value={{ cart, addToCart, clearCart, updateQuantity, removeFromCart }}>

      {children}

    </CartContext.Provider>

  );

};


 