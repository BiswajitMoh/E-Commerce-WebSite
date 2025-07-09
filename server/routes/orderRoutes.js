const PDFDocument = require('pdfkit');

const express = require('express');

const router = express.Router();

const Order = require('../models/Order');

const Product = require('../models/Product');

const Service = require('../models/Service');

const User = require('../models/User');

const auth = require('../middleware/auth');


 

// Get customer orders

router.get('/myorders', auth, async (req, res) => {

  try {

    const userId = req.user.id;

    const role = req.user.role;


 

    if (role !== 'customer') {

      return res.status(403).json({ message: 'Access denied' });

    }


 

    const orders = await Order.find({ customerId: userId }).sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    res.status(500).json({ message: 'Failed to fetch orders' });

  }

});


 

// Get vendor orders

router.get('/vendor/myorders', auth, async (req, res) => {

  try {

    const userId = req.user.id;

    const orders = await Order.find({ 'cartItems.vendorId': userId }).sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    res.status(500).json({ message: 'Failed to fetch vendor orders' });

  }

});


 

// Save order after Stripe success

router.post('/', auth, async (req, res) => {

  const { cartItems, deliveryAddress, stripeSessionId } = req.body;


 

  if (!cartItems?.length || !deliveryAddress || !stripeSessionId) {

    return res.status(400).json({ message: 'Missing order data' });

  }


 

  try {

    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });


 

    const orderItems = [];


 

    for (let item of cartItems) {

      // Try to find item as a product

      const product = await Product.findById(item.id);


 

      if (product) {

        if (product.quantity < item.quantity) {

          return res.status(400).json({ message: `Insufficient stock for ${item.name}` });

        }


 

        orderItems.push({

          ...item,

          vendorId: product.vendorId,

          type: 'product',

        });

      } else {

        // Try as service

        const service = await Service.findById(item.id);

        if (!service) {

          return res.status(404).json({ message: `Item not found: ${item.name}` });

        }


 

        orderItems.push({

          ...item,

          vendorId: service.vendorId,

          type: 'service',

        });

      }

    }


 

    // Save the order

    const newOrder = new Order({

      cartItems: orderItems,

      deliveryAddress,

      stripeSessionId,

      status: 'paid',

      customerId: user._id,

    });


 

    await newOrder.save();


 

    // Decrease stock for products only

    for (let item of orderItems) {

      if (item.type === 'product') {

        await Product.findByIdAndUpdate(item.id, {

          $inc: { quantity: -item.quantity },

        });

      }

    }


 

    res.status(201).json(newOrder);

  } catch (err) {

    console.error('Order save failed:', err);

    res.status(500).json({ message: 'Order could not be saved' });

  }

});


 

// Invoice PDF generation

router.get('/invoice/:orderId', auth, async (req, res) => {

  try {

    const { orderId } = req.params;

    const order = await Order.findById(orderId);


 

    if (!order) return res.status(404).json({ message: 'Order not found' });

    if (order.customerId.toString() !== req.user.id) {

      return res.status(403).json({ message: 'Unauthorized to access this invoice' });

    }


 

    res.setHeader('Content-Type', 'application/pdf');

    res.setHeader('Content-Disposition', `attachment; filename=invoice_${orderId}.pdf`);


 

    const doc = new PDFDocument();

    doc.pipe(res);


 

    doc.fontSize(18).text('UNIBOX Invoice', { align: 'center' });

    doc.moveDown();


 

    doc.fontSize(14).text(`Order ID: ${orderId}`);

    doc.text(`Customer: ${order.deliveryAddress.name}`);

    doc.text(`Address: ${order.deliveryAddress.street}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state} - ${order.deliveryAddress.zip}, ${order.deliveryAddress.country}`);

    doc.moveDown();

    doc.text('Items:', { underline: true });


 

    order.cartItems.forEach(item => {

      const itemType = item.type === 'service' ? '(Service)' : '(Product)';

      doc.text(`${item.name} ${itemType} - Qty: ${item.quantity} - ₹${item.price}`);

    });


 

    const total = order.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    doc.moveDown();

    doc.text(`Total: ₹${total}`, { bold: true });

    doc.end();


 

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Failed to generate invoice' });

  }

});


 

module.exports = router;


 