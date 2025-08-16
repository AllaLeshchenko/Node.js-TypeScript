import express from "express";
import { connectToDatabase, getDb } from "./db/index.js";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectToDatabase()
    .then(()=> app.listen(PORT, ()=> {
        console.log(`Server running on http://localhost:3000`)
    }))
    .catch( err => console.error('Failed to start the server due to MongoDB connection issue', err));

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Home page');
});

// POST /products — создать продукт
app.post('/products', async (req, res) => {
    try {
        const db = getDb();
        const product = req.body;

        const { name, price, description } = product;
      // Валидация данных ( например проверка обязательных полей)
      if (!name || !price || !description) {
         return res.status(400).send({ error: "Name, email and description are required" });
      }
        const result = await db.collection('products').insertOne(product); // Добавляем продукт в коллекцию
        console.log(result);
        res.status(201).send(result); // Возвращаем созданый продукт
    } catch (error) {
        res.status(500).send({error: 'Failed to create user'});
    }
});

// GET /products – получение всех продуктов
app.get('/products', async (_req, res) => {
    try {
        const db = getDb();
        const products = await db.collection('products').find().toArray();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch products' });
    }
});

// GET /products/:id – получить продукт по ID
app.get('/products/:id', async (req, res) => {
    try {
        const db = getDb();
        const productId = req.params.id;

        if (!ObjectId.isValid(productId)) {
            return res.status(400).send({ error: 'Invalid product ID' });
        }

        const product = await db.collection('products').findOne({ _id: new ObjectId(productId) });

        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }

        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch product' });
    }
});

// PUT /products/:id – обновление продукта
app.put('/products/:id', async (req, res) => {
    try {
        const db = getDb();
        const productId = req.params.id;
        const updateData = req.body;

        if (!ObjectId.isValid(productId)) {
            return res.status(400).send({ error: 'Invalid product ID' });
        }

        const result = await db.collection('products').updateOne(
            { _id: new ObjectId(productId) },
            { $set: updateData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'Product not found' });
        }

        res.status(200).send({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to update product' });
    }
});

// DELETE /products/:id – удаление продукта
app.delete('/products/:id', async (req, res) => {
    try {
        const db = getDb();
        const productId = req.params.id;

        if (!ObjectId.isValid(productId)) {
            return res.status(400).send({ error: 'Invalid product ID' });
        }

        const result = await db.collection('products').deleteOne({ _id: new ObjectId(productId) });

        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Product not found' });
        }

        res.status(200).send({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete product' });
    }
});