import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Создаем маршрут, который будет добавлять новые продукты в базу данных
router.post('/createProduct', async (req, res) => {
    const { name, price, category } = req.body;
    try{
        const newProduct = new Product({ name, price, category });
        await newProduct.save();
        res.status(201).send({ message: 'Product successfully created', product: newProduct });
    } catch (error) {
        res.status(500).send({ message: 'Error creating product', error: error.message });
    }
});

// Создаем список всех продуктов с популированными данными о категориях
router.get('/allProducts', async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.status(200).send({ message: 'Products with categories', products });
    } catch (error) {
        res.status(500).send({ message: 'Error getting products', error: error.message });
    }
});

export default router;