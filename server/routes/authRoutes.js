const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/User');


 

// LOGIN

router.post('/login', async (req, res) => {

 try {

   const { email, password, role } = req.body;


 

   // Match user with both email AND role

   const user = await User.findOne({ email, role });


 

   if (!user) return res.status(400).json({ message: 'Invalid credentials' });


 

   const isMatch = await bcrypt.compare(password, user.password);

   if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });


 

   const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

   res.json({ token, user });

 } catch (err) {

   console.error('Login error:', err);

   res.status(500).json({ message: 'Server error' });

 }

});


 

// REGISTER

router.post('/register', async (req, res) => {

 try {

   const { role, email, password } = req.body;


 

   // Check for existing user with same email AND role

   const existingUser = await User.findOne({ email, role });

   if (existingUser) return res.status(400).json({ message: 'User already exists for this role' });


 

   const hashedPassword = await bcrypt.hash(password, 10);

   const newUser = new User({ email, role, password: hashedPassword });


 

   // Role-specific fields

   if (role === 'customer') {

     newUser.name = req.body.name;

   } else if (role === 'vendor') {

     newUser.vendorName = req.body.vendorName;

     newUser.gstNo = req.body.gstNo;

     newUser.shopName = req.body.shopName;

     newUser.mobile = req.body.mobile;

   }


 

   await newUser.save();


 

   const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET);

   res.json({ token, user: newUser });

 } catch (err) {

   console.error('Registration failed:', err);

   res.status(500).json({ message: 'Server error' });

 }

});


 

module.exports = router;