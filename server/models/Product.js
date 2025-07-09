5// models/Product.js

const mongoose = require('mongoose');


 

const productSchema = new mongoose.Schema({

 name: String,

 description: String,

 price: Number,

 category: { type: String, required: true },

 vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true }, // Ensure vendorId is present

 imageUrl: String,

 quantity: { type: Number, required: true, default: 0 },

});


 

module.exports = mongoose.model('Product', productSchema);