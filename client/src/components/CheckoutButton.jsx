import React from 'react';

import { useNavigate } from 'react-router-dom';


const CheckoutButton = ({ cartItems }) => {

 const navigate = useNavigate();


 

 const handleProceed = () => {

   navigate('/delivery', { state: { cartItems } });

 };


 

 return (

   <button className="btn btn-success mt-3" onClick={handleProceed}>

     Checkout & Pay

   </button>

 );

};


 

export default CheckoutButton;


 