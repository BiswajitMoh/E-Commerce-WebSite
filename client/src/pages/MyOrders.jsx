import React, { useEffect, useState } from 'react';

import api from '../services/api';

import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

import '../styles/MyOrders.css'; // Ensure to import the custom CSS

import { useAuth } from '../contexts/AuthContext'; // Import the Auth context


 

const MyOrders = () => {

 const { user } = useAuth(); // Get the user from Auth context

 const [orders, setOrders] = useState([]);


 

 useEffect(() => {

   const fetchOrders = async () => {

     try {

       if (user?.role === 'customer') {

         // Fetch customer orders

         const res = await api.get('/orders/myorders');

         setOrders(res.data);

       } else if (user?.role === 'vendor') {

         // Fetch sold products for vendor

         const res = await api.get('/orders/vendor/myorders');

         setOrders(res.data);

       }

     } catch (error) {

       console.error('Error fetching orders:', error);

     }

   };


 

   fetchOrders();

 }, [user]);


 

 const downloadInvoice = async (orderId) => {

   try {

     const response = await api.get(`/orders/invoice/${orderId}`, { responseType: 'blob' });

     const url = window.URL.createObjectURL(new Blob([response.data]));

     const link = document.createElement('a');

     link.href = url;

     link.setAttribute('download', `invoice_${orderId}.pdf`);

     document.body.appendChild(link);

     link.click();

     link.remove();

   } catch (err) {

     alert('Failed to download invoice');

     console.error(err);

   }

 };


 

 return (

   <div className="container mt-4">

     <h3 className="text-center mb-4 text-primary">{user?.role === 'vendor' ? 'Products Sold' : 'My Orders'}</h3>

     {orders.length === 0 ? (

       <p className="text-center text-danger">You have no orders yet.</p>

     ) : (

       <div className="table-responsive">

         <table className="table table-bordered table-hover">

           <thead className="table-dark">

             <tr>

               <th>Order ID</th>

               <th>Items</th>

               <th>Total</th>

               <th>Status</th>

               <th>{user?.role === 'vendor' ? 'Customer' : 'Address'}</th>

               <th>Action</th>

             </tr>

           </thead>

           <tbody>

             {orders.map(order => (

               <tr key={order._id}>

                 <td>{order._id}</td>

                 <td>

                   <ul className="list-unstyled">

                     {order.cartItems.map((item, idx) => (

                       <li key={idx}>

                         {item.name} × {item.quantity}

                       </li>

                     ))}

                   </ul>

                 </td>

                 <td>₹{order.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</td>

                 <td>{order.status}</td>

                 <td>

                   {user?.role === 'vendor' ? order.customerId : (

                     <>

                       {order.deliveryAddress?.name},<br />

                       {order.deliveryAddress?.street},<br />

                       {order.deliveryAddress?.city}

                     </>

                   )}

                 </td>

                 <td>

                   {user?.role === 'customer' && (

                     <button

                       className="btn btn-sm btn-outline-success"

                       onClick={() => downloadInvoice(order._id)}

                     >

                       Download Invoice

                     </button>

                   )}

                 </td>

               </tr>

             ))}

           </tbody>

         </table>

       </div>

     )}

   </div>

 );

};


 

export default MyOrders;