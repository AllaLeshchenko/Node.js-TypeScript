import express from 'express';
const router = express.Router();

router.post('/register', (_, res) => {
    res.send('User registered');
});

router.post('/login', (_, res) => {
    res.send('User logged in');
});

export default router;