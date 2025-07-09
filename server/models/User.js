const mongoose = require('mongoose');


 

const userSchema = new mongoose.Schema({

 role: { type: String, enum: ['customer', 'vendor'], required: true },

 email: { type: String, required: true },

 password: { type: String, required: true },

 // Customer-specific

 name: { type: String },

 // Vendor-specific

 vendorName: { type: String },

 gstNo: { type: String },

 shopName: { type: String },

 mobile: { type: String }

});


 

// Create a compound index to make email+role unique

userSchema.index({ email: 1, role: 1 }, { unique: true });


 

module.exports = mongoose.model('User', userSchema);