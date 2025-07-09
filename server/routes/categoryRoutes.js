const express = require('express');

const router = express.Router();

const Product = require('../models/Product');

const Service = require('../models/Service');


 

// Fetch only product categories

router.get('/product-categories', async (req, res) => {

  try {

    const categories = await Product.distinct('category');

    res.json(categories);

  } catch (err) {

    res.status(500).json({ message: 'Error fetching product categories' });

  }

});


 

// Fetch only service categories

router.get('/service-categories', async (req, res) => {

  try {

    const categories = await Service.distinct('category');

    res.json(categories);

  } catch (err) {

    res.status(500).json({ message: 'Error fetching service categories' });

  }

});


 

// Fetch items (products and services) by category

router.get('/:category', async (req, res) => {

  const { category } = req.params;


 

  try {

    const products = await Product.find({ category });

    const services = await Service.find({ category });


 

    const fullUrl = req.protocol + '://' + req.get('host');


 

    const productsWithImages = products.map(p => {

      const obj = p.toObject();

      return {

        ...obj,

        imageUrl: obj.imageUrl ? `${fullUrl}${obj.imageUrl}` : null,

      };

    });


 

    const servicesWithImages = services.map(s => {

      const obj = s.toObject();

      return {

        ...obj,

        imageUrl: obj.imageUrl ? `${fullUrl}${obj.imageUrl}` : null,

      };

    });


 

    res.json({ products: productsWithImages, services: servicesWithImages });

  } catch (err) {

    res.status(500).json({ message: 'Error fetching category items' });

  }

});


 

module.exports = router;


 