import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Маршрут для просмотра всех продуктов в корзине
router.get('/cart', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error server', error.message);
    res.status(500).json({ message: 'Error server' });
  }
});

// Маршрут для просмотра всех продуктов в корзине
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

// Маршрут для обновления продукта в корзине
router.put('/cart/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, price } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id, 
      { name, quantity, price},
      {new: true, runValidators: true} // Опция new: true возвращает обновленный кодумент
    )
    if(!updatedProduct) {
      return res.status(404).json({message: 'Product not found'})
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error by updated');
    res.status(400).json({messaage: 'Error by updated'});
  }
});


// Маршрут для удаления продукта из корзины 
router.delete('/cart/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({message: 'Product not found'})
    }
    res.json({message: 'Product deleted'});
  } catch (error) {
    res.status(500).json({message: 'Error deleting product'})
  }
});

export default router;