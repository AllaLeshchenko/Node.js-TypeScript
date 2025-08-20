import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

// Создаем маршрут, который будет добавлять новые категории в базу данных 
router.post('/createCategory', async (req, res) => {
    const { name } = req.body;
    try {
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).send({ message: 'Category created', category: newCategory });
    } catch (error) {
        res.status(500).send({ message: 'Error creating category', error: error.message });
    }
});

// Создаем маршрут для просмотра всех категорий
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send({ message: 'All categories', categories });
    } catch (error) {
        res.status(500).send({ message: 'Error getting categories', error: error.message });
    }
});


export default router;