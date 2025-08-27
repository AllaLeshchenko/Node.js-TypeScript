import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/cart', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error server', error.message);
    res.status(500).json({ message: 'Error server' });
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    if (!name || !price || !quantity) {
      return res.status(400).json({
        message: 'All fields (name, price, quantity) are required',
      });
    }
    const newProduct = await Product.create({ name, quantity, price });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error by added product', error.message);
    res.status(400).json({ message: 'Error by added product' });
  }
});

export default router;