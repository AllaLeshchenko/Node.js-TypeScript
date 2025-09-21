import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Маршрут для регистрации
router.post('/register', registerUser);

// Маршрут для авторизации
router.post('/login', loginUser);

export default router;