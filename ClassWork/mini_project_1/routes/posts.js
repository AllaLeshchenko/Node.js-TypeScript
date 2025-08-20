import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Post created');
});

router.get('/', (req, res) => {
  res.send('List of posts');
});

export default router;