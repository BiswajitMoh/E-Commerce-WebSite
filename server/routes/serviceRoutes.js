const express = require('express');

const multer = require('multer');

const path = require('path');

const Service = require('../models/Service');

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

// GET /services[?vendorId=...]

router.get('/', async (req, res) => {

  try {

    const filter = {};

    if (req.query.vendorId) {

      filter.vendorId = req.query.vendorId;

    }

    const services = await Service.find(filter);

    const fullUrl = req.protocol + '://' + req.get('host');

    const servicesWithImage = services.map((s) => {

      const obj = s.toObject();

      return {

        ...obj,

        imageUrl: obj.imageUrl ? `${fullUrl}${obj.imageUrl}` : null,

      };

    });

    res.json(servicesWithImage);

  } catch (err) {

    res.status(500).json({ message: 'Error fetching services', error: err.message });

  }

});

// GET /services/:id - fetch single service by ID

router.get('/:id', async (req, res) => {

  try {

    const service = await Service.findById(req.params.id);

    if (!service) return res.status(404).json({ message: 'Service not found' });

    res.json(service);

  } catch (err) {

    res.status(500).json({ message: 'Failed to fetch service', error: err.message });

  }

});


// POST /services/add - only vendors can add

router.post('/add', upload.single('image'), async (req, res) => {

  const { name, description, price, category, vendorId } = req.body;

  try {

    const vendor = await User.findById(vendorId);

    if (!vendor || vendor.role !== 'vendor') {

      return res.status(403).json({ message: 'Only vendors can add services' });

    }

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newService = new Service({

      name,

      description,

      price,

      category,

      vendorId,

      imageUrl,

    });

    await newService.save();

    res.status(201).json({ message: 'Service added successfully' });

  } catch (err) {

    res.status(400).json({ message: err.message });

  }

});

module.exports = router;