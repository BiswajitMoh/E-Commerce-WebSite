const express = require('express');

const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const bodyParser = require('body-parser');

const Order = require('../models/Order');

const User = require('../models/User');


 

router.post('/stripe', bodyParser.raw({ type: 'application/json' }), async (req, res) => {

 const sig = req.headers['stripe-signature'];


 

 let event;

 try {

   event = stripe.webhooks.constructEvent(

     req.body,

     sig,

     process.env.STRIPE_WEBHOOK_SECRET

   );

 } catch (err) {

   console.error('Webhook error:', err.message);

   return res.status(400).send(`Webhook Error: ${err.message}`);

 }


 

 if (event.type === 'checkout.session.completed') {

   const session = event.data.object;


 

   try {

     const { customerId, items } = session.metadata;


 

     if (!customerId || !items) throw new Error('Missing metadata');


 

     const user = await User.findById(customerId);

     if (!user) throw new Error('Invalid user');


 

     const parsedItems = JSON.parse(items);


 

     const order = new Order({

       customerId: user._id,

       items: parsedItems.map(item => ({

         itemId: item._id,

         itemType: item.itemType,

         name: item.name,

         price: item.price,

       })),

       total: parsedItems.reduce((sum, item) => sum + item.price, 0),

       status: 'paid',

     });


 

     await order.save();


 

     console.log(`✅ Order saved for user ${user.email}`);

   } catch (error) {

     console.error('Order creation failed:', error.message);

   }

 }


 

 res.status(200).send('Webhook received');

});


 

module.exports = router;