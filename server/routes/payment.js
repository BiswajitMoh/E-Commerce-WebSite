const express = require('express');

const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


 

router.post('/create-checkout-session', async (req, res) => {

 const { cartItems, deliveryAddress } = req.body;


 

 try {

   const line_items = cartItems.map(item => ({

     price_data: {

       currency: 'inr',

       product_data: {

         name: item.name,

       },

       unit_amount: item.price * 100,

     },

     quantity: item.quantity?item.quantity:1,

   }));


 

   const session = await stripe.checkout.sessions.create({

     payment_method_types: ['card'],

     line_items,

     mode: 'payment',

     success_url: `${process.env.CLIENT_URL}/success`,

     cancel_url: `${process.env.CLIENT_URL}/cancel`,

     metadata: {

       name: deliveryAddress.name,

       street: deliveryAddress.street,

       city: deliveryAddress.city,

       state: deliveryAddress.state,

       zip: deliveryAddress.zip,

       country: deliveryAddress.country,

     },

     shipping_address_collection: {

       allowed_countries: ['US', 'IN'],

     },

   });


 

   res.json({ url: session.url, sessionId: session.id }); // include sessionId

 } catch (error) {

   console.error('Stripe session error:', error);

   res.status(500).json({ error: 'Internal server error' });

 }

});


 

module.exports = router;