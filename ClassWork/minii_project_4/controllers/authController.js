import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const key = process.env.JWT_SECRET_KEY;

// Pеализация маршрута для регистрации
export const registerUser = async (req, res) => {
    
    try{
        const { name, email, password } = req.body;
    
        // Проверка, есть ли пользователь с таким email
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: 'User already exist'});
        }
        // Создание нового пользователя
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(200).json({message: 'User registered successfully', userId: newUser._id})

    } catch (error) {
        res.status(500).json({message: 'Error registered user'})
    }
}

// Pеализация маршрута для авторизации
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req. body;

        // Проверяем, существует ли пользователь с таким email
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({message: 'Incorrect data'});
        }
        // Сравниваем введенный пароль с паролем из базы данных
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Incorrect data'});
        }
        //  Генерация JWT
        const token = jwt.sign({ userId: user._id }, key, { expiresIn: '1h' });

        // Возвращаем token клиенту
        res.json({ token });
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}
