import express from 'express';
import Product from "../models/Product.js";

const router = express.Router();

// Создание нового продукта
router.post('/create', async (req, res) => {
    const {name, price, category} = req.body;
   try {
        const newProduct = new Product({ name, price, category });
        await newProduct.save();
        res.status(201).send({ message: 'Product successfully created' });
    } catch (error) {
        console.error('Error creating product: ', error);
        res.status(400).send({ message: 'Error creating product:', error: error.message });
    }
});

// Получение всех продуктов по категории
router.get('/categories/:nameCategory', async (req, res) => {
    const nameCategory = req.params.nameCategory;
    const sort = req.query.sort
    try {
        const products = await Product.find({category: nameCategory}).sort({price: sort});
        res.send({ message: 'Products list', products });
    } catch (error) {
        console.error('Error getting products: ', error);
        res.status(500).send({ message: 'Error getting products', error: error.message });
    }
});
// router.get('/category/:nameCategory', async (req, res) => {
//     const { nameCategory }= req.params.nameCategory;
//     try {
//         const products = await Product.find({ category: nameCategory }).sort({price: sort});
//         res.status(200).send({message: 'List of products cagegory', products});
//     } catch (error) {
//         console.error('Error getting category', error);
//         res.status(500).send({message: 'Error getting category', error: error.message});
//     }
// });

export default router;