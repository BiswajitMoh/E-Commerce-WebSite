const express = require('express');

const mongoose = require('mongoose');

const path = require('path');

const cors = require('cors');


 

const dotenv = require('dotenv');


 

const authRoutes = require('./routes/authRoutes');


 

const productRoutes = require('./routes/productRoutes');


 

const serviceRoutes = require('./routes/serviceRoutes');


 

const orderRoutes = require('./routes/orderRoutes');

const paymentRoutes = require('./routes/payment');

const categoryRoutes = require('./routes/categoryRoutes');

const bodyParser = require('body-parser');



 

const app = express();


 

app.use(cors());

//app.use('/webhook', require('./routes/webhook'));

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


 

app.use('/api/auth', authRoutes);


 

app.use('/api/products', productRoutes);


 

app.use('/api/services', serviceRoutes);


 

app.use('/api/orders', orderRoutes);

app.use('/api/payment', paymentRoutes);

app.use('/api/categories', categoryRoutes);


 

module.exports = app;


 