const mongoose = require('mongoose');


 

const orderSchema = new mongoose.Schema({

 customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },

 cartItems: [

   {

     name: { type: String, required: true },

     price: { type: Number, required: true },

     quantity: { type: Number, default: 1 },

     vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' }, // Add vendorId to cart items

   },

 ],

 deliveryAddress: {

   name: String,

   street: String,

   city: String,

   state: String,

   zip: String,

   country: String,

 },

 stripeSessionId: String,

 status: {

   type: String,

   enum: ['pending', 'paid', 'cancelled'],

   default: 'pending',

 },

}, { timestamps: true });


 

module.exports = mongoose.model('Order', orderSchema);
