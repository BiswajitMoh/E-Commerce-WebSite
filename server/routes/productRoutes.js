const express = require('express');

const multer = require('multer');

const path = require('path');

const Product = require('../models/Product');

const User = require('../models/User');

const router = express.Router();

// Multer setup for storing images in /uploads

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, 'uploads/');

  },

  filename: function (req, file, cb) {

    cb(null, Date.now() + '-' + file.originalname);

  },

});

const upload = multer({ storage });

// GET /products[?vendorId=...]

router.get('/', async (req, res) => {

  try {

    const filter = {};

    if (req.query.vendorId) {

      filter.vendorId = req.query.vendorId;

    }

    const products = await Product.find(filter);

    const fullUrl = req.protocol + '://' + req.get('host');

    const productsWithImage = products.map((p) => {

      const obj = p.toObject();

      return {

        ...obj,

        imageUrl: obj.imageUrl ? `${fullUrl}${obj.imageUrl}` : null,

      };

    });

    res.json(productsWithImage);

  } catch (err) {

    res.status(500).json({ message: 'Error fetching products', error: err.message });

  }

});

// GET /products/:id - for cart stock sync

router.get('/:id', async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);

  } catch (err) {

    res.status(500).json({ message: 'Failed to fetch product', error: err.message });

  }

});

// POST /products/add

router.post('/add', upload.single('image'), async (req, res) => {

  const { name, description, price, category, vendorId, quantity } = req.body;

  const vendor = await User.findById(vendorId);

  if (!vendor || vendor.role !== 'vendor') {

    return res.status(403).json({ message: 'Only vendors can add products' });

  }

  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const newProduct = new Product({

    name,

    description,

    price,

    category,

    vendorId,

    imageUrl,

    quantity: parseInt(quantity),

  });

  try {

    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully' });

  } catch (err) {

    res.status(400).json({ message: err.message });

  }

});

module.exports = router;