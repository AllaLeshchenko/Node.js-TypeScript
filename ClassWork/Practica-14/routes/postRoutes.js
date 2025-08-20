import express from 'express';
import User from './../models/User.js';
import Post from './../models/Post.js';


const router = express.Router();

// Создание маршрута по созданию нового поста
router.post('/create', async (req, res) => {
    const {title, content, author} = req.body;
    try {
        // Проверяем, существует ли пользователь с указаным id
        const existingUser = await User.findById(author);
        if(!existingUser){
            return res.status(404).send({message: 'User not found'});
        }
        // Создание нового поста
        const newPost = new Post({title, content, author});
        await newPost.save();
        res.status(201).send({massage: 'Post created successfully', post: newPost});
    } catch (error) {
        res.status(500).end({message: 'Error creating post', error: error.message});
    }
});

// Получаем все посты с данными об авторах
router.get('/all', async (_, res) => {
    try {
        const posts = await Post.find({}).populate('author');
        res.send({ message: 'List of posts', posts });
    } catch (error) {
        res.status(500).send({ message: 'Error receiving posts', error: error.message });
    }
});

export default router;