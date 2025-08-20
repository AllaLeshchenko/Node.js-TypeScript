import express from 'express';
import User from './../models/User.js';

const router = express.Router();

// Создание нового пользователя
router.post('/create', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const newUser = new User({name, email, password});
        await newUser.save();
        res.status(201).send({message: 'User successfully created'});
    } catch (error) {
        console.error('Error creating user', error);
        res.status(400).send({message: 'Error creating user', error: error.message});
    }
});

// Получение всех пользователей в алфавитном порядке
router.get('/all', async (req, res) => {
    try {
        const users = await User.find({}).sort({name: 1});
        res.status(200).send({message: 'List of all users', users});
    } catch (error) {
        console.error('Error getting users', error);
        res.status(500).send({message: 'Error getting users', error: error.message});
    }
});

// Обновить email пользователя по его id
router.patch('/update-email/:id', async (req, res) => {
    const userId = req.params.id;
    const {email} = req.body;
    try{
        const updateUser = await User.findByIdAndUpdate(userId, {email}, {new: true, runValidators: true});
        if(!updateUser){
            return res.status(404).send({message: 'User not found'});
        }

        res.send({message: 'User email has been updated successfully', users: updateUser});
    } catch(error) {
        res.status(400).send({message: 'Error updating users email', error: error.message});
    }
})

export default router;