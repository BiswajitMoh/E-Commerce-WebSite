const mongoose = require('mongoose');


 

const serviceSchema = new mongoose.Schema({

 name: String,

 description: String,

 price: Number,

 category: { type: String, required: true },

 vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

 imageUrl: String,

});


 

module.exports = mongoose.model('Service', serviceSchema);


 